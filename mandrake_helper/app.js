const OPERATIVES_DB = [
    {
        id: 'nightfiend',
        name: 'MANDRAKE NIGHTFIEND',
        limit: 1,
        isLeader: true,
        stats: { apg: 2, b: '7"', rw: '5+', lp: 9 },
        abilities: [
            '<strong>Harrowing Whispers:</strong> Prevent opponent activation (roll D6 > enemy APL).',
            '<strong>Oubliex:</strong> When active, ignore damage on 5+.'
        ],
        fixedWeapons: ['Baleblast', 'Huskblade']
    },
    {
        id: 'abyssal',
        name: 'MANDRAKE ABYSSAL',
        limit: 1,
        stats: { apg: 2, b: '7"', rw: '5+', lp: 8 },
        abilities: [
            '<strong>Balefire:</strong> Buff friendly / debuff enemy ranged weapons Dmg stat with Balefire tokens.',
            '<strong>Wreathe in Balefire (1AP):</strong> Give Balefire token to visible operative.'
        ],
        weaponSelect1: ['Balesurge (blast)', 'Balesurge (burn)'],
        fixedWeapons: ['Glimmersteel blade']
    },
    {
        id: 'chooser',
        name: 'MANDRAKE CHOOSER OF THE FLESH',
        limit: 1,
        stats: { apg: 2, b: '7"', rw: '5+', lp: 8 },
        abilities: [
            '<strong>Soul Harvest:</strong> Gain points for kills. Spend 1 point for +1 APL or heal 2D3.',
            '<strong>Part Collector:</strong> Inflict 2D3 damage when enemy Falls Back.'
        ],
        fixedWeapons: ['Baleblast', 'Baleblade']
    },
    {
        id: 'dirgemaw',
        name: 'MANDRAKE DIRGEMAW',
        limit: 1,
        stats: { apg: 2, b: '7"', rw: '5+', lp: 8 },
        abilities: [
            '<strong>Haunting Focus:</strong> Strategic gambit to force enemy to fight/shoot this operative.',
            '<strong>Pareidolic Projection (1AP):</strong> Worsen enemy Hit stat by 1 and Move by 2".'
        ],
        fixedWeapons: ['Baleblast', 'Horrifying scream', 'Glimmersteel blade']
    },
    {
        id: 'shadeweaver',
        name: 'MANDRAKE SHADEWEAVER',
        limit: 1,
        stats: { apg: 2, b: '7"', rw: '5+', lp: 8 },
        abilities: [
            '<strong>Shadow Portal:</strong> Use Reposition to place/use Shadow Portal markers.',
            '<strong>Weave Darkness (1AP):</strong> Place smoke marker (doesn\'t remove next TP).'
        ],
        fixedWeapons: ['Baleblast', 'Glimmersteel blade']
    },
    {
        id: 'warrior1',
        name: 'MANDRAKE WARRIOR (1)',
        limit: 1,
        stats: { apg: 2, b: '7"', rw: '5+', lp: 8 },
        abilities: [
            '<strong>Shadow Warrior:</strong> +1 Critical Dmg stat of glimmersteel blade when WITHIN SHADOW.'
        ],
        fixedWeapons: ['Baleblast', 'Glimmersteel blade']
    },
    {
        id: 'warrior2',
        name: 'MANDRAKE WARRIOR (2)',
        limit: 1,
        stats: { apg: 2, b: '7"', rw: '5+', lp: 8 },
        abilities: [
            '<strong>Shadow Warrior:</strong> +1 Critical Dmg stat of glimmersteel blade when WITHIN SHADOW.'
        ],
        fixedWeapons: ['Baleblast', 'Glimmersteel blade']
    },
    {
        id: 'warrior3',
        name: 'MANDRAKE WARRIOR (3)',
        limit: 1,
        stats: { apg: 2, b: '7"', rw: '5+', lp: 8 },
        abilities: [
            '<strong>Shadow Warrior:</strong> +1 Critical Dmg stat of glimmersteel blade when WITHIN SHADOW.'
        ],
        fixedWeapons: ['Baleblast', 'Glimmersteel blade']
    },
    {
        id: 'warrior4',
        name: 'MANDRAKE WARRIOR (4)',
        limit: 1,
        stats: { apg: 2, b: '7"', rw: '5+', lp: 8 },
        abilities: [
            '<strong>Shadow Warrior:</strong> +1 Critical Dmg stat of glimmersteel blade when WITHIN SHADOW.'
        ],
        fixedWeapons: ['Baleblast', 'Glimmersteel blade']
    },
    {
        id: 'warrior5',
        name: 'MANDRAKE WARRIOR (5)',
        limit: 1,
        stats: { apg: 2, b: '7"', rw: '5+', lp: 8 },
        abilities: [
            '<strong>Shadow Warrior:</strong> +1 Critical Dmg stat of glimmersteel blade when WITHIN SHADOW.'
        ],
        fixedWeapons: ['Baleblast', 'Glimmersteel blade']
    },
    {
        id: 'warrior6',
        name: 'MANDRAKE WARRIOR (6)',
        limit: 1,
        stats: { apg: 2, b: '7"', rw: '5+', lp: 8 },
        abilities: [
            '<strong>Shadow Warrior:</strong> +1 Critical Dmg stat of glimmersteel blade when WITHIN SHADOW.'
        ],
        fixedWeapons: ['Baleblast', 'Glimmersteel blade']
    },
    {
        id: 'warrior7',
        name: 'MANDRAKE WARRIOR (7)',
        limit: 1,
        stats: { apg: 2, b: '7"', rw: '5+', lp: 8 },
        abilities: [
            '<strong>Shadow Warrior:</strong> +1 Critical Dmg stat of glimmersteel blade when WITHIN SHADOW.'
        ],
        fixedWeapons: ['Baleblast', 'Glimmersteel blade']
    },
    {
        id: 'warrior8',
        name: 'MANDRAKE WARRIOR (8)',
        limit: 1,
        stats: { apg: 2, b: '7"', rw: '5+', lp: 8 },
        abilities: [
            '<strong>Shadow Warrior:</strong> +1 Critical Dmg stat of glimmersteel blade when WITHIN SHADOW.'
        ],
        fixedWeapons: ['Baleblast', 'Glimmersteel blade']
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
        
        // Validation rules: Total of 9 operatives
        let isValid = count === 9;
        
        // Ensure exactly 1 Nightfiend is selected (Leader is mandatory)
        if (!selectedOperatives['nightfiend']) isValid = false;

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
                    if (Object.keys(selectedOperatives).length >= 9) return; // Max 9
                    
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

    // --- TOKENS TRACKER LOGIC ---
    const addTokenBtn = document.getElementById('add-token-btn');
    const tokenList = document.getElementById('token-list');
    
    // Default trackers for Mandrakes
    const defaultTrackers = [
        "Soul Harvest Points",
        "Balefire Tokens",
        "Shadow Portals"
    ];

    function createTokenItem(initialName = "") {
        const targetId = `token-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
        
        const itemHtml = `
            <div class="token-item" id="${targetId}">
                <div class="token-info">
                    <input type="text" class="target-name" value="${initialName}" placeholder="Tracker name...">
                </div>
                <div class="grudge-controls">
                    <button class="counter-btn decrease" aria-label="Decrease">-</button>
                    <span class="token-count">0</span>
                    <button class="counter-btn increase" aria-label="Increase">+</button>
                    <button class="delete-btn" aria-label="Delete"><i class="fa-solid fa-trash"></i></button>
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

        tokenList.appendChild(newEl);
    }

    // Initialize with default trackers
    defaultTrackers.forEach(tracker => createTokenItem(tracker));

    addTokenBtn.addEventListener('click', () => createTokenItem("New Tracker"));
});
