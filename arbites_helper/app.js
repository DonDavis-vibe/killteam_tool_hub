document.addEventListener('DOMContentLoaded', () => {
    
    // --- I18N LOGIC ---
    let currentLang = localStorage.getItem('arbites_lang') || 'en';

    function applyTranslations() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[currentLang] && translations[currentLang][key]) {
                el.innerHTML = translations[currentLang][key];
            }
        });

        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.id === `lang-${currentLang}`);
        });

        document.title = translations[currentLang].title + " | Datapad";

        renderPloys();
        renderBuilder();
        
        if (!document.getElementById('start-match-btn').disabled || Object.keys(selectedOperatives).length > 0) {
            Object.keys(selectedOperatives).forEach(opId => {
                const newOpData = OPERATIVES_DB[currentLang].find(o => o.id === opId);
                if (newOpData) {
                    selectedOperatives[opId].opData = newOpData;
                    
                    const oldOpData = OPERATIVES_DB[currentLang === 'de' ? 'en' : 'de'].find(o => o.id === opId);
                    if (oldOpData && newOpData.weaponSelect1) {
                        if (selectedOperatives[opId].w1) {
                            const wIdx = oldOpData.weaponSelect1.indexOf(selectedOperatives[opId].w1);
                            if (wIdx !== -1) {
                                selectedOperatives[opId].w1 = newOpData.weaponSelect1[wIdx];
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
        localStorage.setItem('arbites_lang', 'en');
        applyTranslations();
    });

    document.getElementById('lang-de').addEventListener('click', () => {
        currentLang = 'de';
        localStorage.setItem('arbites_lang', 'de');
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
        const count = Object.keys(selectedOperatives).length;
        rosterCountSpan.textContent = count;
        
        let isValid = count === 11;
        
        // 1. Must have leader
        if (!selectedOperatives['leader']) isValid = false;

        // 2. Max 2 gunners, must have different weapons
        const gunners = ['gunner1', 'gunner2'].filter(id => selectedOperatives[id]);
        if (gunners.length > 2) isValid = false;
        if (gunners.length === 2) {
            if (selectedOperatives['gunner1'].w1 === selectedOperatives['gunner2'].w1) {
                isValid = false; // Cannot have same weapon
            }
        }

        // 3. Max 4 subductors (UI enforces this implicitly by only having 4 cards, but we check here just in case)
        const subductors = ['subductor1', 'subductor2', 'subductor3', 'subductor4'].filter(id => selectedOperatives[id]);
        if (subductors.length > 4) isValid = false;

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

            let sel1;
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
                } else {
                    if (Object.keys(selectedOperatives).length >= 11) return; 
                    
                    selectedOperatives[op.id] = {
                        opData: op,
                        w1: sel1 ? sel1.value : null,
                        w2: null,
                        currentLp: op.stats.lp,
                        isDead: false
                    };
                    card.classList.add('selected');
                    if (sel1) sel1.disabled = false;
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

            // Apply translated labels
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
    const addTargetBtn = document.getElementById('add-token-btn');
    const grudgeList = document.getElementById('token-list');

    function createTokenItem(initialText) {
        const targetId = `token-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
        
        const itemHtml = `
            <div class="grudge-item" id="${targetId}">
                <div class="grudge-info">
                    <input type="text" class="target-name" value="${initialText}" placeholder="...">
                </div>
                <div class="grudge-controls">
                    <button class="counter-btn decrease" aria-label="Verringern">-</button>
                    <span class="token-count">0</span>
                    <button class="counter-btn increase" aria-label="Erhöhen">+</button>
                    <button class="delete-btn" aria-label="Entfernen"><i class="fa-solid fa-trash"></i></button>
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

        grudgeList.appendChild(newEl);
    }

    createTokenItem("Marked for Justice / Für Gerechtigkeit markiert");
    createTokenItem("Apprehend Target / Festnahme-Ziel");
    createTokenItem("Nuncio-Aquila");

    addTargetBtn.addEventListener('click', () => createTokenItem("Tracker"));

    // Init translations
    
    // --- CP & PLOYS LOGIC ---
    let globalCP = 3;
    const cpCountEl = document.getElementById('global-cp-count');
    const cpDecBtn = document.querySelector('.cp-btn.decrease');
    const cpIncBtn = document.querySelector('.cp-btn.increase');
    
    if (cpCountEl) {
        cpDecBtn.addEventListener('click', () => {
            if (globalCP > 0) {
                globalCP--;
                cpCountEl.textContent = globalCP;
            }
        });
        cpIncBtn.addEventListener('click', () => {
            globalCP++;
            cpCountEl.textContent = globalCP;
        });
    }

    function renderPloys() {
        const stratContainer = document.getElementById('strategy-ploys-container');
        const fireContainer = document.getElementById('firefight-ploys-container');
        if (!stratContainer || !fireContainer) return;

        stratContainer.innerHTML = '';
        fireContainer.innerHTML = '';

        const db = typeof PLOYS_DB !== 'undefined' ? PLOYS_DB[currentLang] : null;
        if (!db) return;

        const createPloyCard = (ploy, type) => {
            const card = document.createElement('div');
            card.className = 'ploy-card';
            
            const cost = ploy.cost !== undefined ? ploy.cost : 1;
            
            card.innerHTML = `
                <div class="ploy-header">
                    <span class="ploy-title">${ploy.name}</span>
                    <span class="ploy-cost">${cost} CP</span>
                </div>
                <div class="ploy-desc">${ploy.desc}</div>
                <button class="use-ploy-btn">USE PLOY (-${cost} CP)</button>
            `;

            const btn = card.querySelector('.use-ploy-btn');
            btn.addEventListener('click', () => {
                if (globalCP >= cost) {
                    globalCP -= cost;
                    cpCountEl.textContent = globalCP;
                    card.classList.add('used');
                    btn.textContent = 'USED';
                    btn.disabled = true;
                }
            });

            return card;
        };

        if (db.strategy) db.strategy.forEach(p => stratContainer.appendChild(createPloyCard(p, 'strat')));
        if (db.firefight) db.firefight.forEach(p => fireContainer.appendChild(createPloyCard(p, 'fire')));

        const resetBtn = document.getElementById('reset-ploys-btn');
        if (resetBtn) {
            // Remove old listeners to avoid duplicates if renderPloys is called multiple times
            const newResetBtn = resetBtn.cloneNode(true);
            resetBtn.parentNode.replaceChild(newResetBtn, resetBtn);
            
            newResetBtn.addEventListener('click', () => {
                document.querySelectorAll('.ploy-card').forEach(card => {
                    card.classList.remove('used');
                    const btn = card.querySelector('.use-ploy-btn');
                    if (btn) {
                        // Extract original cost from the header to reset text
                        const costText = card.querySelector('.ploy-cost').textContent; // e.g. "1 CP"
                        const costMatch = costText.match(/\d+/);
                        const cost = costMatch ? parseInt(costMatch[0]) : 1;
                        btn.textContent = `USE PLOY (-${cost} CP)`;
                        btn.disabled = false;
                    }
                });
            });
        }
    
    }

    applyTranslations();
});
