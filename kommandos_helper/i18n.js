
const PLOYS_DB = {
    en: {
        strategy: [
            { name: "Dakka Dakka Dakka", desc: "Re-roll any attack dice of 1 when shooting with a dakka weapon." },
            { name: "Waaagh!", desc: "Add 1 to the Attacks stat of melee weapons for all friendly KOMMANDO operatives." },
            { name: "Sssshhhh!", desc: "Friendly operatives can perform a free Dash during the Strategy phase." },
            { name: "Kunnin' Infiltrators", desc: "Change the order of one friendly operative before the firefight phase." }
        ],
        firefight: [
            { name: "Just a Scratch", desc: "Ignore all damage from one attack dice." },
            { name: "Krump 'Em", desc: "Fight twice in a row if you incapacitate an enemy." },
            { name: "Sneaky Git", desc: "Retain one successful cover save as a critical instead of normal." },
            { name: "Get 'Em Boss", desc: "Nob allows nearby boyz to re-roll attack dice." }
        ]
    },
    de: {
        strategy: [
            { name: "Dakka Dakka Dakka", desc: "Wiederhole 1er beim Schießen mit Dakka-Waffen." },
            { name: "Waaagh!", desc: "Füge 1 zu den Attacken von Nahkampfwaffen aller KOMMANDO Kämpfer hinzu." },
            { name: "Pssst!", desc: "Kämpfer können in der Strategiephase ein kostenloses Sprinten durchführen." },
            { name: "Raffinierte Infiltratoren", desc: "Ändere den Befehl eines Kämpfers vor der Gefechtsphase." }
        ],
        firefight: [
            { name: "Nur ein Kratzer", desc: "Ignoriere den gesamten Schaden eines Attackenwürfels." },
            { name: "Mosch sie wech", desc: "Kämpfe zweimal, wenn du einen Feind abschaltest." },
            { name: "Hinterhältig", desc: "Behalte einen erfolgreichen Deckungswurf als kritischen." },
            { name: "Schnappt sie euch, Boss", desc: "Boss erlaubt nahen Boyz Attacken zu wiederholen." }
        ]
    }
};

const translations = {
    en: {
        legalDisclaimer: "This is an unofficial fan-made utility. Warhammer 40,000, Kill Team, and all associated logos, names, and statistics are © Copyright Games Workshop Limited. This tool is provided for free and is not affiliated with, or endorsed by, Games Workshop in any way.",
        title: "KOMMANDOS KILL TEAM",
        tabAssemble: "ASSEMBLE TEAM",
        tabMatch: "MATCH TRACKER",
        tabTokens: "WAAAGH! & TOKENS",
        tabRules: "RULES",
        resetPloysBtn: "RESET PLOYS",
        builderDesc: "Select 1 Boss Nob and 9 other operatives.",
        selectedText: "Selected:",
        startMatchBtn: "START MATCH <i class=\"fa-solid fa-arrow-right\"></i>",
        activeTeam: "ACTIVE TEAM",
        activeTeamDesc: "Track the Wounds of your operatives.",
        tokensTitle: "WAAAGH! & TOKENS",
        tokensDesc: "Track your Soul Harvest points (Chooser of the Flesh) and other markers (Balefire, Oubliex, etc.).",
        newTokenBtn: "New Tracker",
        rulesFaction: "Faction Rules",
        ruleThroatSlittas: "<strong>Throat Slittas:</strong> KOMMANDOS gain bonuses when attacking from concealment or charging unseen.",
        ruleWaaagh: "<strong>Waaagh!:</strong> The more Boyz fighting, the more ferocious they become.",
        ruleKunnin: "<strong>Kunnin' but Brutal:</strong> Unpredictable tactics allow them to outmaneuver the enemy.",

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
        title: "KOMMANDO-KILL-TEAM",
        tabAssemble: "TEAM BAUEN",
        tabMatch: "MATCH TRACKER",
        tabTokens: "WAAAGH! & MARKER",
        tabRules: "REGELN",
        resetPloysBtn: "PLOYS ZURÜCKSETZEN",
        builderDesc: "Wähle 1 Boss und 9 andere Kämpfer aus.",
        selectedText: "Ausgewählt:",
        startMatchBtn: "MATCH STARTEN <i class=\"fa-solid fa-arrow-right\"></i>",
        activeTeam: "AKTIVES TEAM",
        activeTeamDesc: "Verfolge die Lebenspunkte (LP) deiner Kämpfer.",
        tokensTitle: "WAAAGH! & MARKER",
        tokensDesc: "Verfolge deine Seelenernte-Punkte (Fleischsammler) und andere Marker (Kaltes Feuer, Oubliex, etc.).",
        newTokenBtn: "Neuer Marker",
        rulesFaction: "Fraktionsregeln",
        ruleThroatSlittas: "<strong>Kehlenschlitza:</strong> KOMMANDOS erhalten Boni bei Angriffen aus der Deckung oder ungesehenen Sturmangriffen.",
        ruleWaaagh: "<strong>Waaagh!:</strong> Je mehr Boyz kämpfen, desto wilder werden sie.",
        ruleKunnin: "<strong>Raffiniert, aber Brutal:</strong> Unberechenbare Taktiken erlauben es ihnen, den Feind auszumanövrieren.",

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
        { id: 'boss', name: 'KOMMANDO BOSS NOB', limit: 1, isLeader: true, stats: { apg: 3, b: '6"', rw: '5+', lp: 14 }, abilities: ["<strong>Get It Dun:</strong> Support an ally."], fixedWeapons: ["Slugga"], weaponSelect1: ["Power klaw", "Big choppa"] },
        { id: 'boy_1', name: 'KOMMANDO BOY (1)', limit: 1, stats: { apg: 2, b: '6"', rw: '5+', lp: 10 }, abilities: [], fixedWeapons: ["Slugga", "Choppa"] },
        { id: 'boy_2', name: 'KOMMANDO BOY (2)', limit: 1, stats: { apg: 2, b: '6"', rw: '5+', lp: 10 }, abilities: [], fixedWeapons: ["Slugga", "Choppa"] },
        { id: 'boy_3', name: 'KOMMANDO BOY (3)', limit: 1, stats: { apg: 2, b: '6"', rw: '5+', lp: 10 }, abilities: [], fixedWeapons: ["Slugga", "Choppa"] },
        { id: 'boy_4', name: 'KOMMANDO BOY (4)', limit: 1, stats: { apg: 2, b: '6"', rw: '5+', lp: 10 }, abilities: [], fixedWeapons: ["Slugga", "Choppa"] },
        { id: 'boy_5', name: 'KOMMANDO BOY (5)', limit: 1, stats: { apg: 2, b: '6"', rw: '5+', lp: 10 }, abilities: [], fixedWeapons: ["Slugga", "Choppa"] },
        { id: 'boy_6', name: 'KOMMANDO BOY (6)', limit: 1, stats: { apg: 2, b: '6"', rw: '5+', lp: 10 }, abilities: [], fixedWeapons: ["Slugga", "Choppa"] },
        { id: 'boy_7', name: 'KOMMANDO BOY (7)', limit: 1, stats: { apg: 2, b: '6"', rw: '5+', lp: 10 }, abilities: [], fixedWeapons: ["Slugga", "Choppa"] },
        { id: 'boy_8', name: 'KOMMANDO BOY (8)', limit: 1, stats: { apg: 2, b: '6"', rw: '5+', lp: 10 }, abilities: [], fixedWeapons: ["Slugga", "Choppa"] },
        { id: 'boy_9', name: 'KOMMANDO BOY (9)', limit: 1, stats: { apg: 2, b: '6"', rw: '5+', lp: 10 }, abilities: [], fixedWeapons: ["Slugga", "Choppa"] },
        { id: 'slitta', name: 'KOMMANDO SLASHA BOY', limit: 1, stats: { apg: 2, b: '6"', rw: '5+', lp: 10 }, abilities: ["<strong>Throat Slittas:</strong> Free charge/dash."], fixedWeapons: ["Twin choppas", "Throwing knives"] },
        { id: 'snipa', name: 'KOMMANDO SNIPA', limit: 1, stats: { apg: 2, b: '6"', rw: '5+', lp: 10 }, abilities: ["<strong>Snipa:</strong> Ignore Obscured."], fixedWeapons: ["Shokka pistol", "Scoped big shoota", "Fists"] },
        { id: 'dakka', name: 'KOMMANDO DAKKA BOY', limit: 1, stats: { apg: 2, b: '6"', rw: '5+', lp: 10 }, abilities: ["<strong>Dakka Dash:</strong> Free Dash and Shoot."], fixedWeapons: ["Dakka shoota", "Fists"] },
        { id: 'comms', name: 'KOMMANDO COMMS BOY', limit: 1, stats: { apg: 2, b: '6"', rw: '5+', lp: 10 }, abilities: ['<strong>Listenin\' Post:</strong> Gain 1 AP for ally.'], fixedWeapons: ["Slugga", "Choppa"] },
        { id: 'burna', name: 'KOMMANDO BURNA BOY', limit: 1, stats: { apg: 2, b: '6"', rw: '5+', lp: 10 }, abilities: ['<strong>Burn \'em:</strong> Torrent weapon rule.'], fixedWeapons: ["Burna", "Fists"] },
        { id: 'rokkit', name: 'KOMMANDO ROKKIT BOY', limit: 1, stats: { apg: 2, b: '6"', rw: '5+', lp: 10 }, abilities: ["<strong>Boom:</strong> Blast weapon rule."], fixedWeapons: ["Rokkit launcha", "Fists"] },
        { id: 'breach', name: 'KOMMANDO BREACHA BOY', limit: 1, stats: { apg: 2, b: '6"', rw: '5+', lp: 10 }, abilities: ["<strong>Bull Charge:</strong> Unstoppable charge."], fixedWeapons: ["Slugga", "Breacha ram"] },
        { id: 'grot', name: 'BOMB SQUIG', limit: 1, stats: { apg: 2, b: '6"', rw: '6+', lp: 8 }, abilities: ["<strong>Boom:</strong> Explodes on death or command."], fixedWeapons: ["Explosives"] },
        { id: 'squig', name: 'KOMMANDO GROT', limit: 1, stats: { apg: 2, b: '6"', rw: '6+', lp: 5 }, abilities: ["<strong>Grappling Hook:</strong> Fly keyword.", "<strong>Sneaky:</strong> Super conceal."], fixedWeapons: ["Grot blasta", "Grot choppa"] },
    ],
    de: [
        { id: 'boss', name: 'KOMMANDO-BOSS', limit: 1, isLeader: true, stats: { apg: 3, b: '6"', rw: '5+', lp: 14 }, abilities: ['<strong>Mach\'s fertig:</strong> Unterstütze einen Verbündeten.'], fixedWeapons: ["Knarre"], weaponSelect1: ["Energiekralle", "Fetter Spalta"] },
        { id: 'boy_1', name: 'KOMMANDO-BOY (1)', limit: 1, stats: { apg: 2, b: '6"', rw: '5+', lp: 10 }, abilities: [], fixedWeapons: ["Knarre", "Spalta"] },
        { id: 'boy_2', name: 'KOMMANDO-BOY (2)', limit: 1, stats: { apg: 2, b: '6"', rw: '5+', lp: 10 }, abilities: [], fixedWeapons: ["Knarre", "Spalta"] },
        { id: 'boy_3', name: 'KOMMANDO-BOY (3)', limit: 1, stats: { apg: 2, b: '6"', rw: '5+', lp: 10 }, abilities: [], fixedWeapons: ["Knarre", "Spalta"] },
        { id: 'boy_4', name: 'KOMMANDO-BOY (4)', limit: 1, stats: { apg: 2, b: '6"', rw: '5+', lp: 10 }, abilities: [], fixedWeapons: ["Knarre", "Spalta"] },
        { id: 'boy_5', name: 'KOMMANDO-BOY (5)', limit: 1, stats: { apg: 2, b: '6"', rw: '5+', lp: 10 }, abilities: [], fixedWeapons: ["Knarre", "Spalta"] },
        { id: 'boy_6', name: 'KOMMANDO-BOY (6)', limit: 1, stats: { apg: 2, b: '6"', rw: '5+', lp: 10 }, abilities: [], fixedWeapons: ["Knarre", "Spalta"] },
        { id: 'boy_7', name: 'KOMMANDO-BOY (7)', limit: 1, stats: { apg: 2, b: '6"', rw: '5+', lp: 10 }, abilities: [], fixedWeapons: ["Knarre", "Spalta"] },
        { id: 'boy_8', name: 'KOMMANDO-BOY (8)', limit: 1, stats: { apg: 2, b: '6"', rw: '5+', lp: 10 }, abilities: [], fixedWeapons: ["Knarre", "Spalta"] },
        { id: 'boy_9', name: 'KOMMANDO-BOY (9)', limit: 1, stats: { apg: 2, b: '6"', rw: '5+', lp: 10 }, abilities: [], fixedWeapons: ["Knarre", "Spalta"] },
        { id: 'slitta', name: 'KOMMANDO-SCHLITZA-BOY', limit: 1, stats: { apg: 2, b: '6"', rw: '5+', lp: 10 }, abilities: ["<strong>Kehlenschlitza:</strong> Kostenloser Spurt/Angriff."], fixedWeapons: ["Zwillingsspaltaz", "Wurfmesser"] },
        { id: 'snipa', name: 'KOMMANDO-SCHAFSCHÜTZA', limit: 1, stats: { apg: 2, b: '6"', rw: '5+', lp: 10 }, abilities: ["<strong>Schafschütza:</strong> Ignoriert Verdeckt."], fixedWeapons: ["Schocka-Pistole", "Fette Wumme mit Zielfernrohr", "Fäuste"] },
        { id: 'dakka', name: 'KOMMANDO-DAKKA-BOY', limit: 1, stats: { apg: 2, b: '6"', rw: '5+', lp: 10 }, abilities: ["<strong>Dakka-Spurt:</strong> Kostenloser Spurt und Schießen."], fixedWeapons: ["Dakka-Wumme", "Fäuste"] },
        { id: 'comms', name: 'KOMMANDO-FUNKA', limit: 1, stats: { apg: 2, b: '6"', rw: '5+', lp: 10 }, abilities: ["<strong>Abhörpostä:</strong> 1 AP für Verbündeten."], fixedWeapons: ["Knarre", "Spalta"] },
        { id: 'burna', name: 'KOMMANDO-BRENNA-BOY', limit: 1, stats: { apg: 2, b: '6"', rw: '5+', lp: 10 }, abilities: ["<strong>Brenn sie:</strong> Schwall-Sonderregel."], fixedWeapons: ["Brenna", "Fäuste"] },
        { id: 'rokkit', name: 'KOMMANDO-ROKKA-BOY', limit: 1, stats: { apg: 2, b: '6"', rw: '5+', lp: 10 }, abilities: ["<strong>Bumm:</strong> Explosiv-Sonderregel."], fixedWeapons: ["Bazzukka", "Fäuste"] },
        { id: 'breach', name: 'KOMMANDO-RAMMA-BOY', limit: 1, stats: { apg: 2, b: '6"', rw: '5+', lp: 10 }, abilities: ["<strong>Bullensturm:</strong> Unaufhaltsamer Angriff."], fixedWeapons: ["Knarre", "Rammbock"] },
        { id: 'grot', name: 'BOMBENSQUIG', limit: 1, stats: { apg: 2, b: '6"', rw: '6+', lp: 8 }, abilities: ["<strong>Bumm:</strong> Explodiert beim Tod oder auf Befehl."], fixedWeapons: ["Sprengstoffe"] },
        { id: 'squig', name: 'KOMMANDO-GROT', limit: 1, stats: { apg: 2, b: '6"', rw: '6+', lp: 5 }, abilities: ["<strong>Wurfhaken:</strong> Fliegen-Schlüsselwort.", "<strong>Listig:</strong> Super versteckt."], fixedWeapons: ["Grotblasta", "Grotspalta"] },
    ]
};

const WEAPONS_DB = {
    en: {
    "Explosives": {
        "a": "6",
        "h": "4+",
        "d": "4/5",
        "wr": "Blast 1\", Limited 1, Explosive*"
    },
    "Bite": {
        "a": "3",
        "h": "4+",
        "d": "4/5",
        "wr": "-"
    },
    "Slugga": {
        "a": "4",
        "h": "4+",
        "d": "3/4",
        "wr": "Range 8\""
    },
    "Choppa": {
        "a": "3",
        "h": "3+",
        "d": "4/5",
        "wr": "KOMMANDO FIREFIGHT PLOY KRUMP ’EM! Whilst they are far more crafty than your average Ork,"
    },
    "Big choppa": {
        "a": "5",
        "h": "3+",
        "d": "5/6",
        "wr": "-"
    },
    "Power klaw": {
        "a": "4",
        "h": "3+",
        "d": "5/7",
        "wr": "Brutal, Shock Krumpin’ Time: This operative can perform two Fight actions during its activation. GET IT DUN! 1AP"
    },
    "Burna (standard)": {
        "a": "4",
        "h": "2+",
        "d": "3/3",
        "wr": "Range 8\", Saturate, Torrent 2\""
    },
    "Burna (deluge)": {
        "a": "4",
        "h": "2+",
        "d": "3/3",
        "wr": "Range 4\", Saturate, Seek, Torrent 0\"*"
    },
    "Fists": {
        "a": "3",
        "h": "3+",
        "d": "3/4",
        "wr": "-"
    },
    "Dakka shoota (short range)": {
        "a": "5",
        "h": "4+",
        "d": "3/4",
        "wr": "Range 9\", Ceaseless"
    },
    "Dakka shoota (long range)": {
        "a": "5",
        "h": "4+",
        "d": "3/4",
        "wr": "-"
    },
    "Breacha ram": {
        "a": "4",
        "h": "4+",
        "d": "5/5",
        "wr": "Brutal, Severe, Shock BREACH 1AP Place one of your Breach markers within this operative’s control range as close as possible to a terrain feature within control"
    },
    "Shokka pistol": {
        "a": "6",
        "h": "4+",
        "d": "1/0",
        "wr": "Range 8\", Devastating 2, Severe, Stun"
    },
    "Rokkit launcha (aimed)": {
        "a": "6",
        "h": "4+",
        "d": "4/5",
        "wr": "Blast 1\", Ceaseless, Heavy (Dash only)"
    },
    "Rokkit launcha (mobile)": {
        "a": "6",
        "h": "4+",
        "d": "4/5",
        "wr": "Blast 1\""
    },
    "Scoped big shoota (concealed)": {
        "a": "5",
        "h": "3+",
        "d": "3/3",
        "wr": "Devastating 2, Heavy, Silent, Concealed Position*"
    },
    "Scoped big shoota (stationary)": {
        "a": "5",
        "h": "3+",
        "d": "3/3",
        "wr": "Devastating 2, Heavy"
    },
    "Scoped big shoota (sweeping)": {
        "a": "5",
        "h": "3+",
        "d": "3/4",
        "wr": "Heavy (Dash only), Torrent 1\""
    },
    "Grot choppa": {
        "a": "3",
        "h": "5+",
        "d": "1/4",
        "wr": "-"
    },
    "Throwing knives": {
        "a": "4",
        "h": "3+",
        "d": "2/5",
        "wr": "Range 6\", Silent"
    },
    "Twin choppas": {
        "a": "4",
        "h": "3+",
        "d": "4/5",
        "wr": "Ceaseless, Lethal 5+ Dat All You Got?: After this operative fights or retaliates, if it wasn’t incapacitated, you can inflict D3 damage on the enemy operative in that sequence."
    },
    "Dynamite": {
        "a": "5",
        "h": "4+",
        "d": "4/5",
        "wr": "WR Range 4\", Blast 1\", Heavy (Reposition only), Saturate KOMMANDO"
    },
    "Harpoon": {
        "a": "4",
        "h": "4+",
        "d": "4/5",
        "wr": "WR Range 8\", Lethal 5+, Stun KOMMANDOS: UPDATE LOG \b Rules will be periodically updated to maintain fair balance and interact more smoothly with the game. Rules changes"
    }
},
    de: {
    "Sprengsatz": {
        "a": "6",
        "h": "4+",
        "d": "4/5",
        "wr": "Explosiv 1 Zoll, Beschränkt 1, Explosion*"
    },
    "Biss": {
        "a": "3",
        "h": "4+",
        "d": "4/5",
        "wr": "-"
    },
    "Knarre": {
        "a": "4",
        "h": "4+",
        "d": "3/4",
        "wr": "Reichweite 8 Zoll"
    },
    "Spalta": {
        "a": "3",
        "h": "3+",
        "d": "4/5",
        "wr": "KOMMANDO GEFECHTSLIST ZERQUETSCHT SE! Kommandos sind zwar deutlich schlauer als durchschnitt-"
    },
    "Fetter Spalta": {
        "a": "5",
        "h": "3+",
        "d": "5/6",
        "wr": "-"
    },
    "Energiekralle": {
        "a": "4",
        "h": "3+",
        "d": "5/7",
        "wr": "Brutal, Schock Jetz’ gibt’s Dresche: Dieser Kämpfer kann während seiner Aktivierung zwei Aktionen Kämpfen ausführen. AN DIE ARBEIT! 1 AP"
    },
    "Brenna (Flut)": {
        "a": "4",
        "h": "2+",
        "d": "3/3",
        "wr": "Reichweite 4 Zoll, Hagel, Zielsucher, Schwall 0 Zoll*"
    },
    "Brenna (Standard)": {
        "a": "4",
        "h": "2+",
        "d": "3/3",
        "wr": "Reichweite 8 Zoll, Hagel, Schwall 2 Zoll"
    },
    "Fäuste": {
        "a": "3",
        "h": "3+",
        "d": "3/4",
        "wr": "-"
    },
    "Dakkawumme (lange Reichweite)": {
        "a": "5",
        "h": "4+",
        "d": "3/4",
        "wr": "-"
    },
    "Dakkawumme (kurze Reichweite)": {
        "a": "5",
        "h": "4+",
        "d": "3/4",
        "wr": "Reichweite 9 Zoll, Unablässig"
    },
    "Rammbock": {
        "a": "4",
        "h": "4+",
        "d": "5/5",
        "wr": "Brutal, Heftig, Schock BRESCHE 1 AP Platziere einen deiner Breschenmarker innerhalb der Kontrollreichweite dieses Kämp-"
    },
    "Schockapistole": {
        "a": "6",
        "h": "4+",
        "d": "1/0",
        "wr": "Reichweite 8 Zoll, Verheerend 2, Heftig, Betäuben"
    },
    "Bazzukka (gezielt)": {
        "a": "6",
        "h": "4+",
        "d": "4/5",
        "wr": "Explosiv 1 Zoll, Unablässig, Schwer (nur Sprinten)"
    },
    "Bazzukka (in Bewegung)": {
        "a": "6",
        "h": "4+",
        "d": "4/5",
        "wr": "Explosiv 1 Zoll"
    },
    "Fette Wumme mit Zieloptik": {
        "a": "5",
        "h": "3+",
        "d": "3/4",
        "wr": "Schwer (nur Sprinten), Schwall 1 Zoll (gestreut)"
    },
    "Grotspalta": {
        "a": "3",
        "h": "5+",
        "d": "1/4",
        "wr": "-"
    },
    "Wurfmesser": {
        "a": "4",
        "h": "3+",
        "d": "2/5",
        "wr": "Reichweite 6 Zoll, Schalldämpfer"
    },
    "Paar Spalta": {
        "a": "4",
        "h": "3+",
        "d": "4/5",
        "wr": "Unablässig, Tödlich 5+ Is dat alles? Nachdem dieser Kämpfer gekämpft oder zurückgeschla- gen hat, kannst du, sofern er nicht kampfunfähig ist, dem feindlichen Kämpfer in jener Abfolge W3 Schaden zufügen."
    },
    "Dynamit": {
        "a": "5",
        "h": "4+",
        "d": "4/5",
        "wr": "WR Reichweite 4 Zoll, Explosiv 1 Zoll, Schwer (nur Positionswechsel), Hagel KOMMANDO"
    },
    "Harpune": {
        "a": "4",
        "h": "4+",
        "d": "4/5",
        "wr": "WR Reichweite 8 Zoll, Tödlich 5+, Betäuben KOMMANDOS: UPDATE-LOG \b Zur Verbesserung des Spielflusses und der Ausgewogenheit überarbeiten wir regelmäßig die Regeln des Spiels. Nötige Än-"
    }
}
};
