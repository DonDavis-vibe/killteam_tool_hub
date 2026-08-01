document.addEventListener('DOMContentLoaded', () => {
    
    // --- I18N LOGIC ---
    let currentLang = localStorage.getItem('kommando_lang') || 'en';

    function applyTranslations() {
        // Update static HTML text
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[currentLang] && translations[currentLang][key]) {
                el.innerHTML = translations[currentLang][key];
            }
        });

        // Update active language button
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.id === `lang-${currentLang}`);
        });

        // Document title
        document.title = translations[currentLang].title + " | Datapad";

        // Re-render builder using new DB language
        renderBuilder();
        
        // Re-render match roster using new DB language
        if (!document.getElementById('start-match-btn').disabled || Object.keys(selectedOperatives).length > 0) {
            // Need to update the existing selectedOperatives to match the new language DB data
            // We just swap the opData reference
            Object.keys(selectedOperatives).forEach(opId => {
                const newOpData = OPERATIVES_DB[currentLang].find(o => o.id === opId);
                if (newOpData) {
                    selectedOperatives[opId].opData = newOpData;
                    
                    // We also need to map weapon strings if they change between languages.
                    // For simplicity, Kommandos have fixed weapons mostly. Abyssal has weaponSelect1.
                    // If they selected a weapon in EN and switch to DE, the exact string changes.
                    // We could try to map by index.
                    const oldOpData = OPERATIVES_DB[currentLang === 'de' ? 'en' : 'de'].find(o => o.id === opId);
                    if (oldOpData && newOpData.weaponSelect1) {
                        if (selectedOperatives[opId].w1) {
                            const wIdx = oldOpData.weaponSelect1.indexOf(selectedOperatives[opId].w1);
                            if (wIdx !== -1) {
                                selectedOperatives[opId].w1 = newOpData.weaponSelect1[wIdx];
                            }
                        }
                    }
                    if (oldOpData && newOpData.weaponSelect2) {
                        if (selectedOperatives[opId].w2) {
                            const wIdx = oldOpData.weaponSelect2.indexOf(selectedOperatives[opId].w2);
                            if (wIdx !== -1) {
                                selectedOperatives[opId].w2 = newOpData.weaponSelect2[wIdx];
                            }
                        }
                    }
                }
            });
            buildMatchRoster();
        }
    }

    document.getElementById('lang-en').addEventListener('click', () => {
        currentLang = 'en';
        localStorage.setItem('kommando_lang', 'en');
        applyTranslations();
    });

    document.getElementById('lang-de').addEventListener('click', () => {
        currentLang = 'de';
        localStorage.setItem('kommando_lang', 'de');
        applyTranslations();
    });

    // --- TABS LOGIC ---
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    function switchTab(targetId) {
        tabBtns.forEach(b => b.classList.remove('active'));
        tabPanes.forEach(p => p.classList.remove('active'));

        document.querySelector(`.tab-btn[data-tab="${targetId}"]`).classList.add('active');
        document.getElementById(targetId).classList.add('active');
    }

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.disabled) return;
            switchTab(btn.getAttribute('data-tab'));
        });
    });

    // --- TEAM BUILDER LOGIC ---
    const builderGrid = document.getElementById('builder-grid');
    const rosterCountSpan = document.getElementById('roster-count');
    const startMatchBtn = document.getElementById('start-match-btn');
    const matchTabBtn = document.getElementById('match-tab-btn');
    
    let selectedOperatives = {}; // { id: { opData, w1, w2, currentLp, isDead } }

    function updateBuilderState() {
        let count = Object.keys(selectedOperatives).length;
        if (selectedOperatives['squig'] && selectedOperatives['grot']) {
            count -= 1; // They count as 1 together
        }
        rosterCountSpan.textContent = count;
        
        let isValid = count === 10;
        if (!selectedOperatives['boss']) isValid = false;

        if (isValid) {
            startMatchBtn.disabled = false;
            startMatchBtn.classList.add('glow-btn');
        } else {
            startMatchBtn.disabled = true;
            startMatchBtn.classList.remove('glow-btn');
        }
    }

    function renderBuilder() {
        builderGrid.innerHTML = '';
        OPERATIVES_DB[currentLang].forEach(op => {
            const card = document.createElement('div');
            card.className = 'selection-card';
            card.id = `build-card-${op.id}`;
            if (selectedOperatives[op.id]) card.classList.add('selected');
            
            const header = document.createElement('div');
            header.className = 'selection-header';
            header.innerHTML = `<h3>${op.name}</h3><div class="checkbox-custom"></div>`;
            card.appendChild(header);

            let sel1, sel2;
            if (op.weaponSelect1) {
                sel1 = document.createElement('select');
                sel1.className = 'weapon-select';
                sel1.disabled = !selectedOperatives[op.id];
                op.weaponSelect1.forEach(w => {
                    const opt = document.createElement('option');
                    opt.value = w;
                    opt.textContent = w;
                    if (selectedOperatives[op.id] && selectedOperatives[op.id].w1 === w) opt.selected = true;
                    sel1.appendChild(opt);
                });
                card.appendChild(sel1);
            }
            if (op.weaponSelect2) {
                sel2 = document.createElement('select');
                sel2.className = 'weapon-select';
                sel2.disabled = !selectedOperatives[op.id];
                op.weaponSelect2.forEach(w => {
                    const opt = document.createElement('option');
                    opt.value = w;
                    opt.textContent = w;
                    if (selectedOperatives[op.id] && selectedOperatives[op.id].w2 === w) opt.selected = true;
                    sel2.appendChild(opt);
                });
                card.appendChild(sel2);
            }

            if (op.fixedWeapons) {
                const fixed = document.createElement('div');
                fixed.style.fontSize = '0.8rem';
                fixed.style.color = 'var(--text-muted)';
                fixed.textContent = op.fixedWeapons.join(' | ');
                card.appendChild(fixed);
            }

            header.addEventListener('click', () => {
                if (selectedOperatives[op.id]) {
                    delete selectedOperatives[op.id];
                    card.classList.remove('selected');
                    if (sel1) sel1.disabled = true;
                    if (sel2) sel2.disabled = true;
                } else {
                    let currentCount = Object.keys(selectedOperatives).length;
                    if (selectedOperatives['squig'] && selectedOperatives['grot']) {
                        currentCount -= 1;
                    }
                    if (currentCount >= 10 && !(op.id === 'squig' && selectedOperatives['grot'] && currentCount === 10) && !(op.id === 'grot' && selectedOperatives['squig'] && currentCount === 10)) return; 
                    
                    selectedOperatives[op.id] = {
                        opData: op,
                        w1: sel1 ? sel1.value : null,
                        w2: sel2 ? sel2.value : null,
                        currentLp: op.stats.lp,
                        isDead: false
                    };
                    card.classList.add('selected');
                    if (sel1) sel1.disabled = false;
                    if (sel2) sel2.disabled = false;
                }
                updateBuilderState();
            });

            if (sel1) {
                sel1.addEventListener('change', () => {
                    if (selectedOperatives[op.id]) {
                        selectedOperatives[op.id].w1 = sel1.value;
                        updateBuilderState();
                    }
                });
            }
            if (sel2) {
                sel2.addEventListener('change', () => {
                    if (selectedOperatives[op.id]) {
                        selectedOperatives[op.id].w2 = sel2.value;
                    }
                });
            }

            builderGrid.appendChild(card);
        });
    }

    // --- MATCH LOGIC ---
    const template = document.getElementById('operative-card-template');
    const matchRoster = document.getElementById('match-roster');

    function buildMatchRoster() {
        matchRoster.innerHTML = '';
        const opKeys = Object.keys(selectedOperatives);
        
        opKeys.forEach(key => {
            const data = selectedOperatives[key];
            const clone = template.content.cloneNode(true);
            const cardEl = clone.querySelector('.operative-card');
            if (data.isDead) cardEl.classList.add('dead');
            
            clone.querySelector('.op-name').textContent = data.opData.name;
            clone.querySelector('.op-apg').textContent = data.opData.stats.apg;
            clone.querySelector('.op-b').textContent = data.opData.stats.b;
            clone.querySelector('.op-rw').textContent = data.opData.stats.rw;
            const lpValue = clone.querySelector('.op-lp');
            lpValue.textContent = data.currentLp;

            // Re-apply translated labels from i18n
            clone.querySelectorAll('[data-i18n]').forEach(el => {
                const i18nKey = el.getAttribute('data-i18n');
                if (translations[currentLang] && translations[currentLang][i18nKey]) {
                    el.innerHTML = translations[currentLang][i18nKey];
                }
            });

            const wCont = clone.querySelector('.weapons-container');
            let weaponsHTML = '';
            if (data.opData.fixedWeapons) {
                data.opData.fixedWeapons.forEach(w => weaponsHTML += `<div class="weapon-item"><span class="weapon-name">${w}</span></div>`);
            }
            if (data.w1) {
                weaponsHTML += `<div class="weapon-item"><span class="weapon-name">${data.w1}</span></div>`;
            }
            if (data.w2) {
                weaponsHTML += `<div class="weapon-item"><span class="weapon-name">${data.w2}</span></div>`;
            }
            wCont.innerHTML = weaponsHTML;

            const aCont = clone.querySelector('.op-abilities');
            let abHTML = '';
            data.opData.abilities.forEach(a => abHTML += `<li>${a}</li>`);
            aCont.innerHTML = abHTML;

            const accBtn = clone.querySelector('.accordion');
            const panel = clone.querySelector('.panel');
            accBtn.addEventListener('click', () => {
                accBtn.classList.toggle('active');
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            });

            const btnMinus = clone.querySelector('.lp-btn.minus');
            const btnPlus = clone.querySelector('.lp-btn.plus');
            btnMinus.addEventListener('click', () => {
                if (data.currentLp > 0) {
                    data.currentLp--;
                    lpValue.textContent = data.currentLp;
                    if (data.currentLp === 0) {
                        data.isDead = true;
                        cardEl.classList.add('dead');
                    }
                }
            });
            btnPlus.addEventListener('click', () => {
                if (data.currentLp < data.opData.stats.lp) {
                    data.currentLp++;
                    lpValue.textContent = data.currentLp;
                    if (data.currentLp > 0 && data.isDead) {
                        data.isDead = false;
                        cardEl.classList.remove('dead');
                    }
                }
            });

            const toggleDeadBtn = clone.querySelector('.toggle-dead-btn');
            toggleDeadBtn.addEventListener('click', () => {
                data.isDead = !data.isDead;
                if (data.isDead) {
                    data.currentLp = 0;
                    lpValue.textContent = 0;
                    cardEl.classList.add('dead');
                } else {
                    data.currentLp = data.opData.stats.lp;
                    lpValue.textContent = data.currentLp;
                    cardEl.classList.remove('dead');
                }
            });

            matchRoster.appendChild(clone);
        });
    }

    startMatchBtn.addEventListener('click', () => {
        buildMatchRoster();
        matchTabBtn.disabled = false;
        switchTab('match');
    });

    // --- TOKENS TRACKER LOGIC ---
    const addTokenBtn = document.getElementById('add-token-btn');
    const tokenList = document.getElementById('token-list');
    
    function createTokenItem(initialName = "") {
        const targetId = `token-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
        
        const itemHtml = `
            <div class="token-item" id="${targetId}">
                <div class="token-info">
                    <input type="text" class="target-name" value="${initialName}" placeholder="...">
                </div>
                <div class="grudge-controls">
                    <button class="counter-btn decrease" aria-label="-">-</button>
                    <span class="token-count">0</span>
                    <button class="counter-btn increase" aria-label="+">+</button>
                    <button class="delete-btn" aria-label="Del"><i class="fa-solid fa-trash"></i></button>
                </div>
            </div>
        `;

        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = itemHtml;
        const newEl = tempDiv.firstElementChild;
        
        const decreaseBtn = newEl.querySelector('.decrease');
        const increaseBtn = newEl.querySelector('.increase');
        const countSpan = newEl.querySelector('.token-count');
        const deleteBtn = newEl.querySelector('.delete-btn');

        let count = 0;

        increaseBtn.addEventListener('click', () => { count++; countSpan.textContent = count; });
        decreaseBtn.addEventListener('click', () => { if (count > 0) { count--; countSpan.textContent = count; } });
        deleteBtn.addEventListener('click', () => { newEl.remove(); });

        tokenList.appendChild(newEl);
    }

    createTokenItem("WAAAGH! Energy / WAAAGH!-Energie");
    createTokenItem("Command Points / Befehlspunkte");
    createTokenItem("Victory Points / Siegespunkte");

    addTokenBtn.addEventListener('click', () => createTokenItem("Tracker"));

    // Init translations
    applyTranslations();
});
