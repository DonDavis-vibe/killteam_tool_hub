const OPERATIVES_DB = [
    {
        id: 'theyn',
        name: 'FLAMMKYN-THEYN',
        limit: 1,
        stats: { apg: 2, b: '5"', rw: '3+', lp: 9 },
        abilities: [
            '<strong>Auge der Ahnen:</strong> Wähle 1 oder 2 (wenn 3+ Kyn tot) Feinde. Jeder erhält 1 Grollmarker.',
            '<strong>Gitterfeldzinne:</strong> 1x pro Schlacht, normalen Schaden ignorieren.'
        ],
        weaponSelect1: ['Autoch-Schema-Boltpistole', 'Autoch-Schema-Bolter', 'Boltrevolver', 'EtaCarn-Plasmapistole', 'Ionenblaster', 'Ionenpistole'],
        weaponSelect2: ['Erschütterungsfaust', 'Plasmawaffe']
    },
    {
        id: 'dozr',
        name: 'FLAMMKYN-DÔZR',
        limit: 1,
        stats: { apg: 2, b: '5"', rw: '3+', lp: 8 },
        abilities: [
            '<strong>Schläger:</strong> Feinde können nicht unterstützen. -1 Schaden erlitten. Gegenschlag beim Tod.',
            '<strong>Wuchtiger Hieb (1 AP):</strong> Feind bewegen, Schaden machen, APG reduzieren, dann Angreifen.'
        ],
        fixedWeapons: ['Autoch-Schema-Boltpistole', 'Erschütterungsschlagringe']
    },
    {
        id: 'medic',
        name: 'FLAMMKYN-FELDSANITÄTER',
        limit: 1,
        stats: { apg: 2, b: '5"', rw: '3+', lp: 8 },
        abilities: [
            '<strong>Sani!:</strong> 1x pro Wendepunkt Kyn vor dem Tod bewahren (bleibt bei 1 LP).',
            '<strong>Sanitätsausrüstung (1 AP):</strong> Heilt 2W3 LP bei befreundetem Kyn in K-RW.'
        ],
        fixedWeapons: ['Boltrevolver', 'Plasmamesser']
    },
    {
        id: 'grenadier',
        name: 'FLAMMKYN-GRENADIER',
        limit: 1,
        stats: { apg: 2, b: '5"', rw: '3+', lp: 8 },
        abilities: [
            '<strong>Grenadier:</strong> Trefferwert +1 bei Fragment/Sprenggranaten.',
            '<strong>Vâyr-3-Mehrzweckgranate (1 AP):</strong> Platziert Marker (3" Aura). Feinde zahlen +1 AP für Aktionen.'
        ],
        fixedWeapons: ['Autoch-Schema-Boltpistole', 'C8-HX-Sprengladung', 'Fäuste']
    },
    {
        id: 'jump',
        name: 'FLAMMKYN-SPRUNGKRIEGER',
        limit: 1,
        stats: { apg: 2, b: '8"', rw: '3+', lp: 8 },
        abilities: [
            '<strong>Sprungmodul:</strong> Kann FLIEGEN.',
            '<strong>Kometeneinschlag:</strong> Nach "Angreifen" erhält Plasmawaffe Brutal.'
        ],
        fixedWeapons: ['Autoch-Schema-Boltpistole', 'Plasmawaffe']
    },
    {
        id: 'comms',
        name: 'FLAMMKYN-KÔMMKYN',
        limit: 1,
        stats: { apg: 2, b: '5"', rw: '3+', lp: 8 },
        abilities: [
            '<strong>Signal (1 AP):</strong> Wähle einen Kyn in der Killzone. Addiere 1 zu dessen APL.'
        ],
        weaponSelect1: ['Autoch-Schema-Bolter & Fäuste', 'Ionenblaster & Fäuste']
    },
    {
        id: 'kognitaar',
        name: 'FLAMMKYN-KOGNITÂAR',
        limit: 1,
        stats: { apg: 2, b: '5"', rw: '3+', lp: 8 },
        abilities: [
            '<strong>Taktiker:</strong> Platziere Angriffs- oder Verteidigungsmarker. Gewährt Ausgewogen oder Wiederholungswürfe in Aura.',
            '<strong>Neubewertung (1 AP):</strong> Verschiebe deinen Marker.'
        ],
        weaponSelect1: ['Autoch-Schema-Bolter & Fäuste', 'Ionenblaster & Fäuste']
    },
    {
        id: 'lokatr',
        name: 'FLAMMKYN-LOKÂTR',
        limit: 1,
        stats: { apg: 2, b: '5"', rw: '3+', lp: 8 },
        abilities: [
            '<strong>Schussbeobachtung (1 AP):</strong> Befreundeter Kyn erhält Zielsucher leicht gegen markierten Feind.',
            '<strong>Panspektral-Scan (1 AP):</strong> Scannermarker. Feinde in 3" geben Kyn Akkurat 1 und Hagel.'
        ],
        weaponSelect1: ['Autoch-Schema-Bolter & Fäuste', 'Ionenblaster & Fäuste']
    },
    {
        id: 'lugger',
        name: 'FLAMMKYN-SCHLEPPER',
        limit: 1,
        stats: { apg: 2, b: '5"', rw: '3+', lp: 8 },
        abilities: [
            '<strong>Gut ausgerüstet:</strong> 1 zusätzliche Ausrüstungsoption und +1 BP in Strategiephase.',
            '<strong>Ich mach das:</strong> 1x pro Aktivierung missionsspezifische Aktion für 1 AP weniger.'
        ],
        weaponSelect1: ['Autoch-Schema-Bolter & Fäuste', 'Ionenblaster & Fäuste']
    },
    {
        id: 'gunner1',
        name: 'FLAMMKYN-SCHÜTZE (A)',
        limit: 1,
        stats: { apg: 2, b: '5"', rw: '3+', lp: 8 },
        abilities: [
            '<strong>Schwere Waffen:</strong> Wähle die beste Waffe für die Situation.'
        ],
        weaponSelect1: ['EtaCarn-Plasmastrahler & Fäuste', 'HYLas-Sturmgewehr & Fäuste', 'HYLas-Gatlingkanone & Fäuste', 'L7-Raketenwerfer & Fäuste', 'Magnabeschleunigungsgewehr & Fäuste']
    },
    {
        id: 'gunner2',
        name: 'FLAMMKYN-SCHÜTZE (B)',
        limit: 1,
        stats: { apg: 2, b: '5"', rw: '3+', lp: 8 },
        abilities: [
            '<strong>Schwere Waffen:</strong> Wähle die beste Waffe für die Situation.'
        ],
        weaponSelect1: ['EtaCarn-Plasmastrahler & Fäuste', 'HYLas-Sturmgewehr & Fäuste', 'HYLas-Gatlingkanone & Fäuste', 'L7-Raketenwerfer & Fäuste', 'Magnabeschleunigungsgewehr & Fäuste']
    },
    {
        id: 'gunner3',
        name: 'FLAMMKYN-SCHÜTZE (C)',
        limit: 1,
        stats: { apg: 2, b: '5"', rw: '3+', lp: 8 },
        abilities: [
            '<strong>Schwere Waffen:</strong> Wähle die beste Waffe für die Situation.'
        ],
        weaponSelect1: ['EtaCarn-Plasmastrahler & Fäuste', 'HYLas-Sturmgewehr & Fäuste', 'HYLas-Gatlingkanone & Fäuste', 'L7-Raketenwerfer & Fäuste', 'Magnabeschleunigungsgewehr & Fäuste']
    },
    {
        id: 'warrior1',
        name: 'FLAMMKYN-KRIEGER (A)',
        limit: 1,
        stats: { apg: 2, b: '5"', rw: '3+', lp: 8 },
        abilities: [
            '<strong>Bergungsgut sichern:</strong> Wenn Kyn Missionsziel kontrolliert, -1 Schaden pro Attackenwürfel.'
        ],
        weaponSelect1: ['Autoch-Schema-Bolter & Fäuste', 'Ionenblaster & Fäuste']
    },
    {
        id: 'warrior2',
        name: 'FLAMMKYN-KRIEGER (B)',
        limit: 1,
        stats: { apg: 2, b: '5"', rw: '3+', lp: 8 },
        abilities: [
            '<strong>Bergungsgut sichern:</strong> Wenn Kyn Missionsziel kontrolliert, -1 Schaden pro Attackenwürfel.'
        ],
        weaponSelect1: ['Autoch-Schema-Bolter & Fäuste', 'Ionenblaster & Fäuste']
    }
];

document.addEventListener('DOMContentLoaded', () => {
    
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
    
    let selectedOperatives = {}; // { id: { opData, w1, w2 } }

    function updateBuilderState() {
        const count = Object.keys(selectedOperatives).length;
        rosterCountSpan.textContent = count;
        
        // Validation rules
        let isValid = count === 10;
        
        // Ensure exactly 1 Theyn is selected (Leader is mandatory)
        if (!selectedOperatives['theyn']) isValid = false;

        // Check gunner unique weapons if selected
        const gunners = ['gunner1', 'gunner2', 'gunner3'].filter(id => selectedOperatives[id]);
        const gunnerWeapons = new Set();
        gunners.forEach(id => {
            const w1 = selectedOperatives[id].w1;
            if (gunnerWeapons.has(w1)) isValid = false; // duplicate heavy weapon
            gunnerWeapons.add(w1);
        });

        if (isValid) {
            startMatchBtn.disabled = false;
            startMatchBtn.classList.add('glow-btn');
        } else {
            startMatchBtn.disabled = true;
            startMatchBtn.classList.remove('glow-btn');
        }
    }

    function renderBuilder() {
        OPERATIVES_DB.forEach(op => {
            const card = document.createElement('div');
            card.className = 'selection-card';
            card.id = `build-card-${op.id}`;
            
            // Checkbox
            const header = document.createElement('div');
            header.className = 'selection-header';
            header.innerHTML = `<h3>${op.name}</h3><div class="checkbox-custom"></div>`;
            card.appendChild(header);

            // Select 1
            let sel1, sel2;
            if (op.weaponSelect1) {
                sel1 = document.createElement('select');
                sel1.className = 'weapon-select';
                sel1.disabled = true;
                op.weaponSelect1.forEach(w => {
                    const opt = document.createElement('option');
                    opt.value = w;
                    opt.textContent = w;
                    sel1.appendChild(opt);
                });
                card.appendChild(sel1);
            }
            if (op.weaponSelect2) {
                sel2 = document.createElement('select');
                sel2.className = 'weapon-select';
                sel2.disabled = true;
                op.weaponSelect2.forEach(w => {
                    const opt = document.createElement('option');
                    opt.value = w;
                    opt.textContent = w;
                    sel2.appendChild(opt);
                });
                card.appendChild(sel2);
            }

            // Fixed weapons text
            if (op.fixedWeapons) {
                const fixed = document.createElement('div');
                fixed.style.fontSize = '0.8rem';
                fixed.style.color = 'var(--text-muted)';
                fixed.textContent = op.fixedWeapons.join(' | ');
                card.appendChild(fixed);
            }

            // Toggle selection logic
            header.addEventListener('click', () => {
                if (selectedOperatives[op.id]) {
                    // Deselect
                    delete selectedOperatives[op.id];
                    card.classList.remove('selected');
                    if (sel1) sel1.disabled = true;
                    if (sel2) sel2.disabled = true;
                } else {
                    // Select (limit check)
                    if (Object.keys(selectedOperatives).length >= 10) return; // Max 10
                    
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

            // Update weapons on change
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

    renderBuilder();

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
            
            clone.querySelector('.op-name').textContent = data.opData.name;
            clone.querySelector('.op-apg').textContent = data.opData.stats.apg;
            clone.querySelector('.op-b').textContent = data.opData.stats.b;
            clone.querySelector('.op-rw').textContent = data.opData.stats.rw;
            const lpValue = clone.querySelector('.op-lp');
            lpValue.textContent = data.currentLp;

            // Weapons
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

            // Abilities
            const aCont = clone.querySelector('.op-abilities');
            let abHTML = '';
            data.opData.abilities.forEach(a => abHTML += `<li>${a}</li>`);
            aCont.innerHTML = abHTML;

            // Accordion Logic inside template
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

            // LP Logic
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

            // Toggle Dead
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

    // --- GRUDGE TRACKER LOGIC ---
    const addTargetBtn = document.getElementById('add-target-btn');
    const grudgeList = document.getElementById('grudge-list');
    let targetCount = 0;

    function createGrudgeItem() {
        targetCount++;
        const targetId = `target-${Date.now()}`;
        
        const itemHtml = `
            <div class="grudge-item" id="${targetId}">
                <div class="grudge-info">
                    <input type="text" class="target-name" value="Feindliches Ziel ${targetCount}" placeholder="Name des Ziels...">
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

        increaseBtn.addEventListener('click', () => {
            count++;
            countSpan.textContent = count;
        });

        decreaseBtn.addEventListener('click', () => {
            if (count > 0) {
                count--;
                countSpan.textContent = count;
            }
        });

        deleteBtn.addEventListener('click', () => {
            newEl.remove();
        });

        grudgeList.appendChild(newEl);
    }

    createGrudgeItem();
    addTargetBtn.addEventListener('click', createGrudgeItem);
});
