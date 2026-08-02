
const PLOYS_DB = {
    en: {
        strategy: [
            { name: "Recon Sweep", desc: "PATHFINDERs within 6\" of a killzone edge can free Dash. Must end within 6\" of an edge." },
            { name: "Suppressing Fire", desc: "Select an enemy operative; worsen its Movement and Ballistic Skill when shot by pulse weapons." },
            { name: "A Worthy Cause", desc: "Activate one ready PATHFINDER before the enemy if you have initiative." },
            { name: "Kauyon", desc: "Fall Back for 1 AP less (min 1). Can shoot even if Falling Back." }
        ],
        firefight: [
            { name: "Point-Blank Fusillade", desc: "When shooting within 3\", resolve first attack dice as defender." },
            { name: "Reposition", desc: "At the end of an activation, perform a free Dash." },
            { name: "Supporting Fire", desc: "When an enemy charges, a nearby PATHFINDER can shoot them." },
            { name: "Saviour Protocols", desc: "A Drone can take a hit meant for a nearby PATHFINDER." }
        ]
    },
    de: {
        strategy: [
            { name: "Aufklärungsmission", desc: "SPÄHER innerhalb von 6\" einer Spielfeldkante dürfen kostenlos Sprinten." },
            { name: "Unterdrückungsfeuer", desc: "Wähle einen Feind; verschlechtere seine Bewegung und BF, wenn er beschossen wird." },
            { name: "Ein würdiger Zweck", desc: "Aktiviere einen bereiten SPÄHER vor dem Feind, wenn du die Initiative hast." },
            { name: "Kauyon", desc: "Rückzug kostet 1 AP weniger (min 1). Kann trotz Rückzug schießen." }
        ],
        firefight: [
            { name: "Gefecht auf kurze Distanz", desc: "Beim Schießen innerhalb von 3\" ersten Würfel als Verteidiger abhandeln." },
            { name: "Neupositionierung", desc: "Am Ende der Aktivierung ein kostenloses Sprinten durchführen." },
            { name: "Unterstützungsfeuer", desc: "Wenn ein Feind angreift, darf ein naher SPÄHER schießen." },
            { name: "Rettungsprotokolle", desc: "Eine Drohne fängt einen Treffer für einen SPÄHER ab." }
        ]
    }
};

const translations = {
    en: {
        legalDisclaimer: "This is an unofficial fan-made utility. Warhammer 40,000, Kill Team, and all associated logos, names, and statistics are © Copyright Games Workshop Limited. This tool is provided for free and is not affiliated with, or endorsed by, Games Workshop in any way.",
        title: "PATHFINDERS KILL TEAM",
        tabAssemble: "ASSEMBLE TEAM",
        tabMatch: "MATCH TRACKER",
        tabTokens: "MARKERLIGHTS & TOKENS",
        tabRules: "RULES",
        resetPloysBtn: "RESET PLOYS",
        builderDesc: "Select 1 Shas'ui and 11 other operatives.",
        selectedText: "Selected:",
        startMatchBtn: "START MATCH <i class=\"fa-solid fa-arrow-right\"></i>",
        activeTeam: "ACTIVE TEAM",
        activeTeamDesc: "Track the Wounds of your operatives.",
        tokensTitle: "MARKERLIGHTS & TOKENS",
        tokensDesc: "Track your Soul Harvest points (Chooser of the Flesh) and other markers (Balefire, Oubliex, etc.).",
        newTokenBtn: "New Tracker",
        rulesFaction: "Faction Rules",
        ruleMarkerlights: "<strong>Markerlights:</strong> Each token gives cumulative bonuses (e.g. 1: re-roll 1, 2: ignore cover, 3: improve BS).",
        ruleSaviour: "<strong>Saviour Protocols:</strong> Drones can intercept an attack targeting a nearby friendly PATHFINDER.",
        ruleBonded: "<strong>Bonded Heroes:</strong> PATHFINDERs work in perfect synchronization.",

        rulesStrategy: "Strategy Ploys",
        stratCreeping: "<strong>Creeping Horror:</strong> Free Dash if starting and ending WITHIN SHADOW.",
        stratGloaming: "<strong>Gloaming Shroud:</strong> Retain one defence dice as normal success when WITHIN SHADOW.",
        stratBlade: "<strong>Blade in the Dark:</strong> Can Charge while Concealed if starting or ending WITHIN SHADOW.",
        stratInescapable: "<strong>Inescapable Nightmare:</strong> Re-roll one attack dice when WITHIN SHADOW.",
        rulesFirefight: "Firefight Ploys",
        fireSlither: "<strong>Slither Out of Sight:</strong> At end of activation, change order to Conceal if WITHIN SHADOW.",
        fireFeast: "<strong>Soul Feast:</strong> Heal Wounds equal to Enemy APL * successful damage dice.",
        fireHide: "<strong>Nowhere to Hide:</strong> Move through terrain features as if they weren't there (fly).",
        fireBite: "<strong>Shadow's Bite:</strong> Resolve the first attack dice as defender if WITHIN SHADOW.",
        statApg: "APL",
        statB: "MOVE",
        statRw: "SAVE",
        statLp: "WOUNDS",
        abilitiesHeader: "Abilities"
    },
    de: {
        legalDisclaimer: "Dies ist ein inoffizielles, von Fans erstelltes Hilfsprogramm. Warhammer 40.000, Kill Team und alle zugehörigen Logos, Namen und Statistiken sind © Copyright Games Workshop Limited. Dieses Tool wird kostenlos zur Verfügung gestellt und ist in keiner Weise mit Games Workshop verbunden oder wird von Games Workshop unterstützt.",
        title: "SPÄHER-KILL-TEAM",
        tabAssemble: "TEAM BAUEN",
        tabMatch: "MATCH TRACKER",
        tabTokens: "ZIELMARKER & MARKER",
        tabRules: "REGELN",
        resetPloysBtn: "PLOYS ZURÜCKSETZEN",
        builderDesc: "Wähle 1 Shas'ui und 11 andere Kämpfer aus.",
        selectedText: "Ausgewählt:",
        startMatchBtn: "MATCH STARTEN <i class=\"fa-solid fa-arrow-right\"></i>",
        activeTeam: "AKTIVES TEAM",
        activeTeamDesc: "Verfolge die Lebenspunkte (LP) deiner Kämpfer.",
        tokensTitle: "ZIELMARKER & MARKER",
        tokensDesc: "Verfolge deine Seelenernte-Punkte (Fleischsammler) und andere Marker (Kaltes Feuer, Oubliex, etc.).",
        newTokenBtn: "Neuer Marker",
        rulesFaction: "Fraktionsregeln",
        ruleMarkerlights: "<strong>Zielmarker (Markerlights):</strong> Jeder Marker gibt kumulative Boni (z.B. 1: 1 wiederholen, 2: Deckung ignorieren, 3: BF verbessern).",
        ruleSaviour: "<strong>Rettungsprotokolle:</strong> Drohnen können einen Angriff auf einen nahen SPÄHER abfangen.",
        ruleBonded: "<strong>Verbündete Helden:</strong> SPÄHER arbeiten in perfekter Synchronisation.",

        rulesStrategy: "Strategielisten",
        stratCreeping: "<strong>Schleichender Schrecken:</strong> Kostenloses Sprinten, wenn IM SCHATTEN begonnen und beendet.",
        stratGloaming: "<strong>Zwielichtschleier:</strong> Behalte einen Verteidigungswürfel als normalen Erfolg, wenn IM SCHATTEN.",
        stratBlade: "<strong>Klinge im Dunkel:</strong> Kann mit Defensivbefehl Angreifen, wenn IM SCHATTEN begonnen oder beendet.",
        stratInescapable: "<strong>Unentrinnbarer Albtraum:</strong> Einen Attackenwürfel wiederholen, wenn IM SCHATTEN.",
        rulesFirefight: "Gefechtslisten",
        fireSlither: "<strong>Außer Sicht gleiten:</strong> Ändere am Ende der Aktivierung den Befehl zu Defensivbefehl, wenn IM SCHATTEN.",
        fireFeast: "<strong>Seelenmahl:</strong> Heile LP in Höhe von Feind-APG * erfolgreiche Schadenswürfel.",
        fireHide: "<strong>Keine Zuflucht:</strong> Bewege dich durch Geländestücke, als wären sie nicht vorhanden.",
        fireBite: "<strong>Zuschnappender Schatten:</strong> Handle als Verteidiger den ersten Attackenwürfel ab, wenn IM SCHATTEN.",
        statApg: "APG",
        statB: "B",
        statRw: "RW",
        statLp: "LP",
        abilitiesHeader: "Fähigkeiten"
    }
};

const OPERATIVES_DB = {
    en: [
        { id: 'shasui', name: "PATHFINDER SHAS'UI", limit: 1, isLeader: true, stats: { apg: 2, b: '6"', rw: '5+', lp: 8 }, abilities: ["<strong>Target Acquired:</strong> Add 1 Markerlight."], fixedWeapons: ["Pulse carbine", "Fists"] },
        { id: 'shasla', name: "PATHFINDER SHAS'LA", limit: 11, stats: { apg: 2, b: '6"', rw: '5+', lp: 7 }, abilities: ["<strong>Markerlight:</strong> Add 1 Markerlight."], fixedWeapons: ["Pulse carbine", "Fists"] },
        { id: 'blooded', name: 'BLOODED PATHFINDER', limit: 1, stats: { apg: 2, b: '6"', rw: '5+', lp: 8 }, abilities: ["<strong>Bionic Arm:</strong> Ignore modifiers to hit.", "<strong>Markerlight:</strong> Add 1 Markerlight."], fixedWeapons: ["Suppressed pulse carbine", "Fists"] },
        { id: 'drone_cont', name: 'DRONE CONTROLLER PATHFINDER', limit: 1, stats: { apg: 2, b: '6"', rw: '5+', lp: 7 }, abilities: ["<strong>Control Drone:</strong> Free action for friendly drone."], fixedWeapons: ["Pulse carbine", "Fists"] },
        { id: 'grenadier', name: 'ASSAULT GRENADIER PATHFINDER', limit: 1, stats: { apg: 2, b: '6"', rw: '5+', lp: 7 }, abilities: ["<strong>Grenadier:</strong> Free grenade actions."], fixedWeapons: ["Pulse carbine", "EMP grenades", "Fusion grenade", "Fists"] },
        { id: 'medic', name: 'MEDICAL TECHNICIAN PATHFINDER', limit: 1, stats: { apg: 2, b: '6"', rw: '5+', lp: 7 }, abilities: ["<strong>Medic:</strong> Heal 2D3 Wounds."], fixedWeapons: ["Pulse carbine", "Fists"] },
        { id: 'comms', name: 'COMMUNICATIONS SPECIALIST PATHFINDER', limit: 1, stats: { apg: 2, b: '6"', rw: '5+', lp: 7 }, abilities: ["<strong>Signal:</strong> Give 1 AP to friendly operative."], fixedWeapons: ["Pulse carbine", "Fists"] },
        { id: 'marksman', name: 'MARKSMAN PATHFINDER', limit: 1, stats: { apg: 2, b: '6"', rw: '5+', lp: 7 }, abilities: ["<strong>Sniper:</strong> Ignore Obscured."], fixedWeapons: ["Marksman rail rifle", "Fists"] },
        { id: 'trans', name: 'TRANSPECTRAL INTERFERENCE PATHFINDER', limit: 1, stats: { apg: 2, b: '6"', rw: '5+', lp: 7 }, abilities: ["<strong>System Jam:</strong> Reduce enemy APL by 1."], fixedWeapons: ["Pulse carbine", "Fists"] },
        { id: 'heavy', name: 'WEAPONS EXPERT PATHFINDER', limit: 2, stats: { apg: 2, b: '6"', rw: '5+', lp: 7 }, abilities: [], fixedWeapons: ["Fists"], weaponSelect1: ["Rail rifle", "Ion rifle"] },
        { id: 'gun_drone', name: 'MB3 CUSTOM GUN DRONE', limit: 1, stats: { apg: 2, b: '6"', rw: '4+', lp: 7 }, abilities: ["<strong>Drone:</strong> Cannot open doors."], fixedWeapons: ["Twin pulse carbine"] },
        { id: 'marker_drone', name: 'MV7 MARKER DRONE', limit: 1, stats: { apg: 2, b: '6"', rw: '4+', lp: 7 }, abilities: ["<strong>Drone:</strong> Cannot open doors.", "<strong>High-Intensity Markerlight:</strong> Add 2 Markerlights."], fixedWeapons: ["Markerlight"] },
        { id: 'shield_drone', name: 'MV4 SHIELD DRONE', limit: 1, stats: { apg: 2, b: '6"', rw: '4+', lp: 7 }, abilities: ["<strong>Drone:</strong> Cannot open doors.", "<strong>Shield Generator:</strong> 4+ Invulnerable Save."], fixedWeapons: ["Fists"] },
        { id: 'recon_drone', name: 'MB3 RECON DRONE', limit: 1, stats: { apg: 3, b: '6"', rw: '4+', lp: 12 }, abilities: ["<strong>Drone:</strong> Cannot open doors.", "<strong>Analyze:</strong> Friendly operative ignores Obscured."], fixedWeapons: ["Burst cannon"] },
    ],
    de: [
        { id: 'shasui', name: "SPÄHER-SHAS'UI", limit: 1, isLeader: true, stats: { apg: 2, b: '6"', rw: '5+', lp: 8 }, abilities: ["<strong>Zielerfassung:</strong> Füge 1 Zielmarker hinzu."], fixedWeapons: ["Puls-Karabiner", "Fäuste"] },
        { id: 'shasla', name: "SPÄHER-SHAS'LA", limit: 11, stats: { apg: 2, b: '6"', rw: '5+', lp: 7 }, abilities: ["<strong>Zielmarker:</strong> Füge 1 Zielmarker hinzu."], fixedWeapons: ["Puls-Karabiner", "Fäuste"] },
        { id: 'blooded', name: 'ERFAHRENER SPÄHER', limit: 1, stats: { apg: 2, b: '6"', rw: '5+', lp: 8 }, abilities: ["<strong>Bionischer Arm:</strong> Ignoriere Treffermodifikatoren.", "<strong>Zielmarker:</strong> Füge 1 Zielmarker hinzu."], fixedWeapons: ["Schallgedämpfter Puls-Karabiner", "Fäuste"] },
        { id: 'drone_cont', name: 'DROHNENKONTROLLE-SPÄHER', limit: 1, stats: { apg: 2, b: '6"', rw: '5+', lp: 7 }, abilities: ["<strong>Drohne steuern:</strong> Kostenlose Aktion für Drohne."], fixedWeapons: ["Puls-Karabiner", "Fäuste"] },
        { id: 'grenadier', name: 'STURMGRENADIER-SPÄHER', limit: 1, stats: { apg: 2, b: '6"', rw: '5+', lp: 7 }, abilities: ["<strong>Grenadier:</strong> Kostenlose Granaten-Aktionen."], fixedWeapons: ["Puls-Karabiner", "EMP-Granaten", "Fusionsgranate", "Fäuste"] },
        { id: 'medic', name: 'SANITÄTER-SPÄHER', limit: 1, stats: { apg: 2, b: '6"', rw: '5+', lp: 7 }, abilities: ["<strong>Sanitäter:</strong> Heile 2W3 Lebenspunkte."], fixedWeapons: ["Puls-Karabiner", "Fäuste"] },
        { id: 'comms', name: 'KOMMUNIKATIONSSPEZIALIST-SPÄHER', limit: 1, stats: { apg: 2, b: '6"', rw: '5+', lp: 7 }, abilities: ["<strong>Signal:</strong> Gib 1 AP an einen Verbündeten."], fixedWeapons: ["Puls-Karabiner", "Fäuste"] },
        { id: 'marksman', name: 'SCHARFSCHÜTZEN-SPÄHER', limit: 1, stats: { apg: 2, b: '6"', rw: '5+', lp: 7 }, abilities: ["<strong>Scharfschütze:</strong> Ignoriere Verdeckt."], fixedWeapons: ["Scharfschützen-Massebeschleunigergewehr", "Fäuste"] },
        { id: 'trans', name: 'TRANSPEKTRAL-STÖRSYSTEM-SPÄHER', limit: 1, stats: { apg: 2, b: '6"', rw: '5+', lp: 7 }, abilities: ["<strong>Systemstörung:</strong> Reduziere feindliche APG um 1."], fixedWeapons: ["Puls-Karabiner", "Fäuste"] },
        { id: 'heavy', name: 'WAFFENEXPERTEN-SPÄHER', limit: 2, stats: { apg: 2, b: '6"', rw: '5+', lp: 7 }, abilities: [], fixedWeapons: ["Fäuste"], weaponSelect1: ["Massebeschleunigergewehr", "Ionen-Gewehr"] },
        { id: 'gun_drone', name: 'MB3 SPEZIAL-ANGRIFFSDROHNE', limit: 1, stats: { apg: 2, b: '6"', rw: '4+', lp: 7 }, abilities: ["<strong>Drohne:</strong> Kann keine Türen öffnen."], fixedWeapons: ["Synchronisierter Puls-Karabiner"] },
        { id: 'marker_drone', name: 'MV7 ZIELMARKERDROHNE', limit: 1, stats: { apg: 2, b: '6"', rw: '4+', lp: 7 }, abilities: ["<strong>Drohne:</strong> Kann keine Türen öffnen.", "<strong>Hochintensitäts-Zielmarker:</strong> Füge 2 Zielmarker hinzu."], fixedWeapons: ["Zielmarker"] },
        { id: 'shield_drone', name: 'MV4 SCHILDDROHNE', limit: 1, stats: { apg: 2, b: '6"', rw: '4+', lp: 7 }, abilities: ["<strong>Drohne:</strong> Kann keine Türen öffnen.", "<strong>Schildgenerator:</strong> 4+ Rettungswurf."], fixedWeapons: ["Fäuste"] },
        { id: 'recon_drone', name: 'MB3 AUFKLÄRUNGSDROHNE', limit: 1, stats: { apg: 3, b: '6"', rw: '4+', lp: 12 }, abilities: ["<strong>Drohne:</strong> Kann keine Türen öffnen.", "<strong>Analysieren:</strong> Verbündeter ignoriert Verdeckt."], fixedWeapons: ["Bündelkanone"] },
    ]
};
