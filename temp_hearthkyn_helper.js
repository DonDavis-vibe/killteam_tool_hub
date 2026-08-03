
const PLOYS_DB = {
    en: {
        strategy: [
            { name: "Need Keeps", desc: "Select one objective marker or one of your mission markers. Whenever determining control, treat total APL of friendly HEARTHKYN SALVAGER operatives that contest it as 1 higher if at least one friendly contests. Whenever a friendly is within 3\" of that marker, add 1 to the Atk stat of its melee weapons (to a maximum of 4); if already 4, it has Balanced." },
            { name: "Toil Earns", desc: "Select one objective marker or one of your mission markers. Whenever an enemy operative is within 3\" of that marker, treat it as having one additional Grudge token." },
            { name: "Wrought Defence", desc: "Whenever an operative is shooting a friendly HEARTHKYN SALVAGER operative, if you rolled one or less successes (including re-rolls), you can retain one of your fails as a normal success instead of discarding it." },
            { name: "Proximate Firepower", desc: "Whenever a friendly HEARTHKYN SALVAGER operative is shooting an enemy operative within 6\" of it, improve the Hit stat of that friendly operative's ranged weapons by 1 (to a maximum of 3+)." }
        ],
        firefight: [
            { name: "The Ancestors Are Watching", desc: "Use during a friendly HEARTHKYN SALVAGER operative's activation. Until end of activation, operative can perform either a free Shoot or a free Fight action and you can ignore any changes to that operative's weapon stats from being injured." },
            { name: "Worth It", desc: "Use when a friendly HEARTHKYN SALVAGER operative is incapacitated. It can perform a free mission action before it's removed from the killzone." },
            { name: "Sturdy", desc: "Use when an operative is shooting a friendly HEARTHKYN SALVAGER operative, when you collect your defence dice. Change the attacker's retained critical successes to normal successes (any weapon rules already resolved aren't affected)." },
            { name: "Engage to Acquire", desc: "Use after rolling your attack dice for a friendly HEARTHKYN SALVAGER operative, if shooting against or fighting against an enemy operative that controls an objective marker or one of your mission markers. You can re-roll any of your attack dice." }
        ]
    },
    de: {
        strategy: [
            { name: "Not Verlangt", desc: "Wähle einen Zielmarker oder einen deiner Missionsmarker. Bei der Bestimmung der Kontrolle gilt der APL-Wert befreundeter Kämpfer als um 1 höher. Wenn ein befreundeter Kämpfer innerhalb von 3\" ist, addiere 1 auf den Attacken-Wert seiner Nahkampfwaffen (max. 4); falls bereits 4, erhält sie 'Ausgewogen'." },
            { name: "Mühe Lohnt Sich", desc: "Wähle einen Zielmarker oder einen deiner Missionsmarker. Feindliche Kämpfer innerhalb von 3\" um diesen Marker erhalten einen zusätzlichen Groll-Marker." },
            { name: "Geschmiedete Verteidigung", desc: "Wenn auf einen befreundeten Kämpfer geschossen wird und du einen oder weniger Erfolge gewürfelt hast, darfst du einen Fehlschlag als normalen Erfolg behalten." },
            { name: "Nahdistanz-Feuerkraft", desc: "Wenn ein befreundeter Kämpfer auf einen Feind innerhalb von 6\" schießt, verbessere den Treffer-Wert seiner Fernkampfwaffe um 1 (bis maximal 3+)." }
        ],
        firefight: [
            { name: "Die Ahnen Wachen", desc: "Nutze dies während der Aktivierung eines befreundeten Kämpfers. Bis zum Ende der Aktivierung kann er eine kostenlose Schießen- oder Kämpfen-Aktion ausführen und ignoriert Abzüge durch Verletzungen." },
            { name: "Es Ist Es Wert", desc: "Nutze dies, wenn ein befreundeter Kämpfer ausgeschaltet wird. Er kann eine kostenlose Missionsaktion durchführen, bevor er entfernt wird." },
            { name: "Standhaft", desc: "Nutze dies, wenn auf einen befreundeten Kämpfer geschossen wird, beim Sammeln der Verteidigungswürfel. Wandle die kritischen Erfolge des Angreifers in normale Erfolge um." },
            { name: "Angreifen Um Zu Erlangen", desc: "Nutze dies nach dem Würfeln der Attackenwürfel für einen befreundeten Kämpfer, der gegen einen Feind kämpft, welcher einen Zielmarker kontrolliert. Du darfst beliebige Attackenwürfel wiederholen." }
        ]
    }
};

const translations = {
    en: {
        legalDisclaimer: "This is an unofficial fan-made utility. Warhammer 40,000, Kill Team, and all associated logos, names, and statistics are © Copyright Games Workshop Limited. This tool is provided for free and is not affiliated with, or endorsed by, Games Workshop in any way.",
        title: "HEARTHKYN SALVAGERS KILL TEAM",
        tabAssemble: "ASSEMBLE TEAM",
        tabMatch: "MATCH TRACKER",
        tabTokens: "GRUDGE TOKENS & TRACKERS",
        tabRules: "RULES",
        resetPloysBtn: "RESET PLOYS",
        builderDesc: "Select 1 Theyn and 9 other operatives.",
        selectedText: "Selected:",
        startMatchBtn: "START MATCH <i class=\"fa-solid fa-arrow-right\"></i>",
        activeTeam: "ACTIVE TEAM",
        activeTeamDesc: "Track the Wounds of your operatives.",
        tokensTitle: "GRUDGE TOKENS & TRACKERS",
        tokensDesc: "Track your Soul Harvest points (Chooser of the Flesh) and other markers (Balefire, Oubliex, etc.).",
        newTokenBtn: "New Tracker",
        rulesFaction: "Faction Rules",
        ruleGrudgeTokens: "<strong>Grudge Tokens:</strong> Placed on enemies who kill kin or control objectives. Attacks against them gain bonuses.",
        ruleSteady: "<strong>Steady Advance:</strong> HEARTHKYN move deliberately and ignore some movement penalties.",
        ruleVoidArmour: "<strong>Void Armour:</strong> Highly resilient armor that ignores some piercing attacks.",

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
        ruleGrudgeTokens: "<strong>Groll-Marker (Grudge Tokens):</strong> Werden auf Feinde gelegt, die Kin töten oder Ziele kontrollieren. Angriffe gegen sie erhalten Boni.",
        ruleSteady: "<strong>Stetiger Vormarsch:</strong> HEARTHKYN bewegen sich bedächtig und ignorieren einige Bewegungsabzüge.",
        ruleVoidArmour: "<strong>Leerenrüstung:</strong> Sehr widerstandsfähige Rüstung, die durchschlagende Angriffe mindert.",

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
        { id: 'theyn', name: "HEARTHKYN THEYN", limit: 1, isLeader: true, stats: { apg: 2, b: '5"', rw: '3+', lp: 9 }, abilities: ["<strong>Eye of the Ancestors:</strong> Strategic Gambit to assign Grudge tokens."], weaponSelect1: ["Autoch-pattern bolt pistol", "Autoch-pattern bolter", "Bolt revolver", "EtaCarn plasma pistol", "Ion blaster", "Ion pistol"], weaponSelect2: ["Concussion gauntlet", "Plasma weapon"], fixedWeapons: [] },
        { id: 'dozr', name: "HEARTHKYN DÔZR", limit: 1, stats: { apg: 2, b: '5"', rw: '3+', lp: 8 }, abilities: ["<strong>Brawler:</strong> Enemies cannot assist in combat."], fixedWeapons: ["Autoch-pattern bolt pistol", "Concussion knux"] },
        { id: 'medic', name: "HEARTHKYN FIELD MEDIC", limit: 1, stats: { apg: 2, b: '5"', rw: '3+', lp: 8 }, abilities: ["<strong>Medic!:</strong> Prevent incapacitation of an ally."], fixedWeapons: ["Autoch-pattern bolt pistol", "Plasma knife"] },
        { id: 'grenadier', name: "HEARTHKYN GRENADIER", limit: 1, stats: { apg: 2, b: '5"', rw: '3+', lp: 8 }, abilities: ["<strong>Grenadier:</strong> Free use of grenades."], fixedWeapons: ["Autoch-pattern bolt pistol", "C8 HX charge", "Fists"] },
        { id: 'gunner', name: "HEARTHKYN GUNNER", limit: 3, stats: { apg: 2, b: '5"', rw: '3+', lp: 8 }, abilities: [], weaponSelect1: ["EtaCarn plasma beamer", "HYLas auto rifle", "HYLas rotary cannon", "L7 missile launcher", "Magna rail rifle"], fixedWeapons: ["Fists"] },
        { id: 'jump', name: "HEARTHKYN JUMP PACK WARRIOR", limit: 1, stats: { apg: 2, b: '8"', rw: '3+', lp: 8 }, abilities: ["<strong>Jump Pack:</strong> Gains FLY keyword."], fixedWeapons: ["Autoch-pattern bolt pistol", "Plasma weapon"] },
        { id: 'kinlynk', name: "HEARTHKYN KINLYNK", limit: 1, stats: { apg: 2, b: '5"', rw: '3+', lp: 8 }, abilities: ["<strong>Signal:</strong> Support ally +1 APL."], weaponSelect1: ["Autoch-pattern bolter", "Ion blaster"], fixedWeapons: ["Fists"] },
        { id: 'kognitaar', name: "HEARTHKYN KOGNITÂAR", limit: 1, stats: { apg: 2, b: '5"', rw: '3+', lp: 8 }, abilities: ["<strong>Tactician:</strong> Strategic Gambit marker."], weaponSelect1: ["Autoch-pattern bolter", "Ion blaster"], fixedWeapons: ["Fists"] },
        { id: 'lokatr', name: "HEARTHKYN LOKÂTR", limit: 1, stats: { apg: 2, b: '5"', rw: '3+', lp: 8 }, abilities: ["<strong>Pan Spectral Scan:</strong> Accurate 1 & Saturate."], weaponSelect1: ["Autoch-pattern bolter", "Ion blaster"], fixedWeapons: ["Fists"] },
        { id: 'lugger', name: "HEARTHKYN LUGGER", limit: 1, stats: { apg: 2, b: '5"', rw: '3+', lp: 8 }, abilities: ["<strong>Well Supplied:</strong> Additional equipment."], weaponSelect1: ["Autoch-pattern bolter", "Ion blaster"], fixedWeapons: ["Fists"] },
        { id: 'warrior_1', name: "HEARTHKYN WARRIOR (1)", limit: 1, stats: { apg: 2, b: '5"', rw: '3+', lp: 8 }, abilities: ["<strong>Secure Salvage:</strong> Damage reduction."], weaponSelect1: ["Autoch-pattern bolter", "Ion blaster"], fixedWeapons: ["Fists"] },
        { id: 'warrior_2', name: "HEARTHKYN WARRIOR (2)", limit: 1, stats: { apg: 2, b: '5"', rw: '3+', lp: 8 }, abilities: ["<strong>Secure Salvage:</strong> Damage reduction."], weaponSelect1: ["Autoch-pattern bolter", "Ion blaster"], fixedWeapons: ["Fists"] },
        { id: 'warrior_3', name: "HEARTHKYN WARRIOR (3)", limit: 1, stats: { apg: 2, b: '5"', rw: '3+', lp: 8 }, abilities: ["<strong>Secure Salvage:</strong> Damage reduction."], weaponSelect1: ["Autoch-pattern bolter", "Ion blaster"], fixedWeapons: ["Fists"] },
        { id: 'warrior_4', name: "HEARTHKYN WARRIOR (4)", limit: 1, stats: { apg: 2, b: '5"', rw: '3+', lp: 8 }, abilities: ["<strong>Secure Salvage:</strong> Damage reduction."], weaponSelect1: ["Autoch-pattern bolter", "Ion blaster"], fixedWeapons: ["Fists"] },
        { id: 'warrior_5', name: "HEARTHKYN WARRIOR (5)", limit: 1, stats: { apg: 2, b: '5"', rw: '3+', lp: 8 }, abilities: ["<strong>Secure Salvage:</strong> Damage reduction."], weaponSelect1: ["Autoch-pattern bolter", "Ion blaster"], fixedWeapons: ["Fists"] },
        { id: 'warrior_6', name: "HEARTHKYN WARRIOR (6)", limit: 1, stats: { apg: 2, b: '5"', rw: '3+', lp: 8 }, abilities: ["<strong>Secure Salvage:</strong> Damage reduction."], weaponSelect1: ["Autoch-pattern bolter", "Ion blaster"], fixedWeapons: ["Fists"] },
        { id: 'warrior_7', name: "HEARTHKYN WARRIOR (7)", limit: 1, stats: { apg: 2, b: '5"', rw: '3+', lp: 8 }, abilities: ["<strong>Secure Salvage:</strong> Damage reduction."], weaponSelect1: ["Autoch-pattern bolter", "Ion blaster"], fixedWeapons: ["Fists"] },
        { id: 'warrior_8', name: "HEARTHKYN WARRIOR (8)", limit: 1, stats: { apg: 2, b: '5"', rw: '3+', lp: 8 }, abilities: ["<strong>Secure Salvage:</strong> Damage reduction."], weaponSelect1: ["Autoch-pattern bolter", "Ion blaster"], fixedWeapons: ["Fists"] },
        { id: 'warrior_9', name: "HEARTHKYN WARRIOR (9)", limit: 1, stats: { apg: 2, b: '5"', rw: '3+', lp: 8 }, abilities: ["<strong>Secure Salvage:</strong> Damage reduction."], weaponSelect1: ["Autoch-pattern bolter", "Ion blaster"], fixedWeapons: ["Fists"] }
    ],
    de: [
        { id: 'theyn', name: "HEARTHKYN THEYN", limit: 1, isLeader: true, stats: { apg: 2, b: '5"', rw: '3+', lp: 9 }, abilities: ["<strong>Auge der Ahnen:</strong> Strategischer Schachzug für Grollmarker."], weaponSelect1: ["Autoch-Schema-Boltpistole", "Autoch-Schema-Bolter", "Boltrevolver", "EtaCarn-Plasmapistole", "Ionenblaster", "Ionenpistole"], weaponSelect2: ["Erschütterungsfaust", "Plasmawaffe"], fixedWeapons: [] },
        { id: 'dozr', name: "HEARTHKYN DÔZR", limit: 1, stats: { apg: 2, b: '5"', rw: '3+', lp: 8 }, abilities: ["<strong>Schläger:</strong> Feinde können im Nahkampf nicht helfen."], fixedWeapons: ["Autoch-Schema-Boltpistole", "Erschütterungsschlagringe"] },
        { id: 'medic', name: "HEARTHKYN FIELD MEDIC", limit: 1, stats: { apg: 2, b: '5"', rw: '3+', lp: 8 }, abilities: ["<strong>Sanitäter!:</strong> Verhindert Ausschalten."], fixedWeapons: ["Autoch-Schema-Boltpistole", "Plasmamesser"] },
        { id: 'grenadier', name: "HEARTHKYN GRENADIER", limit: 1, stats: { apg: 2, b: '5"', rw: '3+', lp: 8 }, abilities: ["<strong>Grenadier:</strong> Kostenlose Granaten."], fixedWeapons: ["Autoch-Schema-Boltpistole", "C8-HX-Sprengladung", "Fäuste"] },
        { id: 'gunner', name: "HEARTHKYN GUNNER", limit: 3, stats: { apg: 2, b: '5"', rw: '3+', lp: 8 }, abilities: [], weaponSelect1: ["EtaCarn-Plasmastrahler", "HYLas-Sturmgewehr", "HYLas-Gatlingkanone", "L7-Raketenwerfer", "Magnabeschleunigungsgewehr"], fixedWeapons: ["Fäuste"] },
        { id: 'jump', name: "HEARTHKYN JUMP PACK WARRIOR", limit: 1, stats: { apg: 2, b: '8"', rw: '3+', lp: 8 }, abilities: ["<strong>Sprungmodul:</strong> FLIEGEN."], fixedWeapons: ["Autoch-Schema-Boltpistole", "Plasmawaffe"] },
        { id: 'kinlynk', name: "HEARTHKYN KINLYNK", limit: 1, stats: { apg: 2, b: '5"', rw: '3+', lp: 8 }, abilities: ["<strong>Signal:</strong> +1 AP für Verbündeten."], weaponSelect1: ["Autoch-Schema-Bolter", "Ionenblaster"], fixedWeapons: ["Fäuste"] },
        { id: 'kognitaar', name: "HEARTHKYN KOGNITÂAR", limit: 1, stats: { apg: 2, b: '5"', rw: '3+', lp: 8 }, abilities: ["<strong>Taktiker:</strong> Strategischer Schachzug."], weaponSelect1: ["Autoch-Schema-Bolter", "Ionenblaster"], fixedWeapons: ["Fäuste"] },
        { id: 'lokatr', name: "HEARTHKYN LOKÂTR", limit: 1, stats: { apg: 2, b: '5"', rw: '3+', lp: 8 }, abilities: ["<strong>Pan-Spektral-Scan:</strong> Akkurat 1 und Sättigend."], weaponSelect1: ["Autoch-Schema-Bolter", "Ionenblaster"], fixedWeapons: ["Fäuste"] },
        { id: 'lugger', name: "HEARTHKYN LUGGER", limit: 1, stats: { apg: 2, b: '5"', rw: '3+', lp: 8 }, abilities: ["<strong>Gut versorgt:</strong> Zusätzliche Ausrüstung."], weaponSelect1: ["Autoch-Schema-Bolter", "Ionenblaster"], fixedWeapons: ["Fäuste"] },
        { id: 'warrior_1', name: "HEARTHKYN WARRIOR (1)", limit: 1, stats: { apg: 2, b: '5"', rw: '3+', lp: 8 }, abilities: ["<strong>Sichere Beute:</strong> Schadensreduktion."], weaponSelect1: ["Autoch-Schema-Bolter", "Ionenblaster"], fixedWeapons: ["Fäuste"] },
        { id: 'warrior_2', name: "HEARTHKYN WARRIOR (2)", limit: 1, stats: { apg: 2, b: '5"', rw: '3+', lp: 8 }, abilities: ["<strong>Sichere Beute:</strong> Schadensreduktion."], weaponSelect1: ["Autoch-Schema-Bolter", "Ionenblaster"], fixedWeapons: ["Fäuste"] },
        { id: 'warrior_3', name: "HEARTHKYN WARRIOR (3)", limit: 1, stats: { apg: 2, b: '5"', rw: '3+', lp: 8 }, abilities: ["<strong>Sichere Beute:</strong> Schadensreduktion."], weaponSelect1: ["Autoch-Schema-Bolter", "Ionenblaster"], fixedWeapons: ["Fäuste"] },
        { id: 'warrior_4', name: "HEARTHKYN WARRIOR (4)", limit: 1, stats: { apg: 2, b: '5"', rw: '3+', lp: 8 }, abilities: ["<strong>Sichere Beute:</strong> Schadensreduktion."], weaponSelect1: ["Autoch-Schema-Bolter", "Ionenblaster"], fixedWeapons: ["Fäuste"] },
        { id: 'warrior_5', name: "HEARTHKYN WARRIOR (5)", limit: 1, stats: { apg: 2, b: '5"', rw: '3+', lp: 8 }, abilities: ["<strong>Sichere Beute:</strong> Schadensreduktion."], weaponSelect1: ["Autoch-Schema-Bolter", "Ionenblaster"], fixedWeapons: ["Fäuste"] },
        { id: 'warrior_6', name: "HEARTHKYN WARRIOR (6)", limit: 1, stats: { apg: 2, b: '5"', rw: '3+', lp: 8 }, abilities: ["<strong>Sichere Beute:</strong> Schadensreduktion."], weaponSelect1: ["Autoch-Schema-Bolter", "Ionenblaster"], fixedWeapons: ["Fäuste"] },
        { id: 'warrior_7', name: "HEARTHKYN WARRIOR (7)", limit: 1, stats: { apg: 2, b: '5"', rw: '3+', lp: 8 }, abilities: ["<strong>Sichere Beute:</strong> Schadensreduktion."], weaponSelect1: ["Autoch-Schema-Bolter", "Ionenblaster"], fixedWeapons: ["Fäuste"] },
        { id: 'warrior_8', name: "HEARTHKYN WARRIOR (8)", limit: 1, stats: { apg: 2, b: '5"', rw: '3+', lp: 8 }, abilities: ["<strong>Sichere Beute:</strong> Schadensreduktion."], weaponSelect1: ["Autoch-Schema-Bolter", "Ionenblaster"], fixedWeapons: ["Fäuste"] },
        { id: 'warrior_9', name: "HEARTHKYN WARRIOR (9)", limit: 1, stats: { apg: 2, b: '5"', rw: '3+', lp: 8 }, abilities: ["<strong>Sichere Beute:</strong> Schadensreduktion."], weaponSelect1: ["Autoch-Schema-Bolter", "Ionenblaster"], fixedWeapons: ["Fäuste"] }
    ]
};

const WEAPONS_DB = {
    en: {
    "Bolt revolver": {
        "a": "4",
        "h": "3+",
        "d": "3/5",
        "wr": "Range 8\""
    },
    "Plasma knife": {
        "a": "3",
        "h": "4+",
        "d": "3/5",
        "wr": "WR Lethal 5+ HEARTHKYN SALVAGER FACTION EQUIPMENT"
    },
    "Autoch-pattern bolt pistol": {
        "a": "4",
        "h": "4+",
        "d": "3/4",
        "wr": "Range 8\", Accurate 1"
    },
    "Autoch-pattern bolter": {
        "a": "4",
        "h": "4+",
        "d": "3/4",
        "wr": "Accurate 1"
    },
    "EtaCarn plasma pistol": {
        "a": "4",
        "h": "4+",
        "d": "3/5",
        "wr": "Range 8\", Piercing 1"
    },
    "Ion blaster": {
        "a": "4",
        "h": "4+",
        "d": "3/4",
        "wr": "Piercing Crits 1"
    },
    "Ion pistol": {
        "a": "4",
        "h": "3+",
        "d": "3/4",
        "wr": "Range 8\", Piercing Crits 1"
    },
    "Concussion gauntlet": {
        "a": "4",
        "h": "4+",
        "d": "5/7",
        "wr": "Brutal, Shock"
    },
    "Plasma weapon": {
        "a": "4",
        "h": "3+",
        "d": "4/6",
        "wr": "Lethal 5+,  Force Impact* Jump Pack: Whenever this operative performs an action in which it moves, it can FLY. If it does, don’t move it. Instead, remove it from the killzone and set it back up wholly within a distance equal to its Move stat (or 3\" if it was a Dash) horizontally of its original location (in a killzone that uses the close quarters rules, e.g. Killzone: Tomb World, this distance cannot be measured over or through"
    },
    "Concussion knux": {
        "a": "4",
        "h": "3+",
        "d": "4/4",
        "wr": "Ceaseless, Lethal 5+, Shock Brawler: Whenever this operative is fighting or retaliating: •  Enemy operatives cannot assist."
    },
    "C8 HX charge": {
        "a": "4",
        "h": "3+",
        "d": "4/6",
        "wr": "Range 4\", Blast 1\", Heavy (Reposition only), Limited 1, Piercing 1, Saturate"
    },
    "Fists": {
        "a": "3",
        "h": "4+",
        "d": "2/3",
        "wr": "-"
    },
    "EtaCarn plasma beamer": {
        "a": "4",
        "h": "4+",
        "d": "5/6",
        "wr": "Piercing 1, Beam*"
    },
    "HYLas auto rifle": {
        "a": "4",
        "h": "4+",
        "d": "4/5",
        "wr": "Ceaseless, Rending"
    },
    "HYLas rotary cannon (focused)": {
        "a": "5",
        "h": "4+",
        "d": "4/5",
        "wr": "Ceaseless, Heavy (Reposition only), Saturate HYLas rotary cannon (sweeping) 4 4+ 4/5"
    },
    "L7 missile launcher (blast)": {
        "a": "4",
        "h": "4+",
        "d": "3/5",
        "wr": "Blast 2\""
    },
    "L7 missile launcher (focused)": {
        "a": "4",
        "h": "4+",
        "d": "5/6",
        "wr": "Piercing 1"
    },
    "Magna rail rifle": {
        "a": "4",
        "h": "4+",
        "d": "4/2",
        "wr": "Devastating 3, Heavy (Dash only), Piercing 2"
    }
},
    de: {
    "Boltrevolver": {
        "a": "4",
        "h": "3+",
        "d": "3/5",
        "wr": "Reichweite 8 Zoll"
    },
    "Plasmamesser": {
        "a": "3",
        "h": "4+",
        "d": "3/5",
        "wr": "WR Tödlich 5+ FLAMMKYN-BERGUNGSCREW FRAKTIONSAUSRÜSTUNG"
    },
    "Autoch-Schema-Boltpistole": {
        "a": "4",
        "h": "4+",
        "d": "3/4",
        "wr": "Reichweite 8 Zoll, Akkurat 1"
    },
    "Autoch-Schema-Bolter": {
        "a": "4",
        "h": "4+",
        "d": "3/4",
        "wr": "Akkurat 1"
    },
    "EtaCarn-Plasmapistole": {
        "a": "4",
        "h": "4+",
        "d": "3/5",
        "wr": "Reichweite 8 Zoll, Durchdringend 1"
    },
    "Ionenblaster": {
        "a": "4",
        "h": "4+",
        "d": "3/4",
        "wr": "Krit. durchdringend 1"
    },
    "Ionenpistole": {
        "a": "4",
        "h": "3+",
        "d": "3/4",
        "wr": "Reichweite 8 Zoll, Krit. durchdringend 1"
    },
    "Erschütterungsfaust": {
        "a": "4",
        "h": "4+",
        "d": "5/7",
        "wr": "Brutal, Schock"
    },
    "Plasmawaffe": {
        "a": "4",
        "h": "3+",
        "d": "4/6",
        "wr": "Tödlich 5+,  Kometeneinschlag* Sprungmodul: Wenn dieser Kämpfer eine Aktion ausführt, bei der er sich bewegt, kann er FLIEGEN. Wenn er dies tut, bewege ihn nicht. Entferne ihn stattdessen aus der Killzone und stelle ihn horizontal voll- ständig innerhalb einer Distanz, die seinem Bewegungswert entspricht (oder 3 Zoll, wenn es Sprinten"
    },
    "Erschütterungsschlagringe": {
        "a": "4",
        "h": "3+",
        "d": "4/4",
        "wr": "Unablässig, Tödlich 5+, Schock Schläger: Wenn dieser Kämpfer kämpft oder zurückschlägt: •  können feindliche Kämpfer nicht unter-"
    },
    "C8-HX-Sprengladung": {
        "a": "4",
        "h": "3+",
        "d": "4/6",
        "wr": "Reichweite 4 Zoll, Explosiv 1 Zoll, Schwer (nur Posi- tionswechsel), Beschränkt 1, Durchdringend 1, Hagel"
    },
    "Fäuste": {
        "a": "3",
        "h": "4+",
        "d": "2/3",
        "wr": "-"
    },
    "EtaCarn-Plasmastrahler": {
        "a": "4",
        "h": "4+",
        "d": "5/6",
        "wr": "Durchdringend 1, Strahl*"
    },
    "HYLas-Sturmgewehr": {
        "a": "4",
        "h": "4+",
        "d": "4/5",
        "wr": "Unablässig, Rüstungsbrechend"
    },
    "HYLas-Gatlingkanone (gezielt)": {
        "a": "5",
        "h": "4+",
        "d": "4/5",
        "wr": "Unablässig, Schwer (nur Positionswechsel), Hagel"
    },
    "HYLas-Gatlingkanone (wahllos)": {
        "a": "4",
        "h": "4+",
        "d": "4/5",
        "wr": "Unablässig, Schwer (nur Positionswechsel), Hagel, Schwall 1 Zoll"
    },
    "L7-Raketenwerfer (explosiv)": {
        "a": "4",
        "h": "4+",
        "d": "3/5",
        "wr": "Explosiv 2 Zoll"
    },
    "L7-Raketenwerfer (gezielt)": {
        "a": "4",
        "h": "4+",
        "d": "5/6",
        "wr": "Durchdringend 1"
    },
    "Magnabeschleunigungsgewehr": {
        "a": "4",
        "h": "4+",
        "d": "4/2",
        "wr": "Verheerend 3, Schwer (nur Sprinten), Durchdringend 2"
    }
}
};

module.exports = { OPERATIVES_DB, WEAPONS_DB };