
const PLOYS_DB = {
    en: {
        strategy: [
            { name: "Creeping Horror", desc: "Free Dash if starting and ending WITHIN SHADOW." },
            { name: "Gloaming Shroud", desc: "Retain one defence dice as normal success when WITHIN SHADOW." },
            { name: "Blade in the Dark", desc: "Can Charge while Concealed if starting or ending WITHIN SHADOW." },
            { name: "Inescapable Nightmare", desc: "Re-roll one attack dice when WITHIN SHADOW." }
        ],
        firefight: [
            { name: "Slither Out of Sight", desc: "At end of activation, change order to Conceal if WITHIN SHADOW." },
            { name: "Soul Feast", desc: "Heal Wounds equal to Enemy APL * successful damage dice." },
            { name: "Nowhere to Hide", desc: "Move through terrain features as if they weren't there (fly)." },
            { name: "Shadow's Bite", desc: "Resolve the first attack dice as defender if WITHIN SHADOW." }
        ]
    },
    de: {
        strategy: [
            { name: "Schleichender Schrecken", desc: "Kostenloses Sprinten, wenn IM SCHATTEN begonnen und beendet." },
            { name: "Zwielichtschleier", desc: "Behalte einen Verteidigungswürfel als normalen Erfolg, wenn IM SCHATTEN." },
            { name: "Klinge im Dunkel", desc: "Kann mit Defensivbefehl Angreifen, wenn IM SCHATTEN begonnen oder beendet." },
            { name: "Unentrinnbarer Albtraum", desc: "Einen Attackenwürfel wiederholen, wenn IM SCHATTEN." }
        ],
        firefight: [
            { name: "Außer Sicht gleiten", desc: "Ändere am Ende der Aktivierung den Befehl zu Defensivbefehl, wenn IM SCHATTEN." },
            { name: "Seelenmahl", desc: "Heile LP in Höhe von Feind-APG * erfolgreiche Schadenswürfel." },
            { name: "Keine Zuflucht", desc: "Bewege dich durch Geländestücke, als wären sie nicht vorhanden." },
            { name: "Zuschnappender Schatten", desc: "Handle als Verteidiger den ersten Attackenwürfel ab, wenn IM SCHATTEN." }
        ]
    }
};

const translations = {
    en: {
        legalDisclaimer: "This is an unofficial fan-made utility. Warhammer 40,000, Kill Team, and all associated logos, names, and statistics are © Copyright Games Workshop Limited. This tool is provided for free and is not affiliated with, or endorsed by, Games Workshop in any way.",
        title: "MANDRAKES KILL TEAM",
        tabAssemble: "ASSEMBLE TEAM",
        tabMatch: "MATCH TRACKER",
        tabTokens: "SOUL HARVEST / TOKENS",
        tabRules: "RULES",
        resetPloysBtn: "RESET PLOYS",
        builderDesc: "Select 1 Nightfiend and 8 other operatives.",
        selectedText: "Selected:",
        startMatchBtn: "START MATCH <i class=\"fa-solid fa-arrow-right\"></i>",
        activeTeam: "ACTIVE TEAM",
        activeTeamDesc: "Track the Wounds of your operatives.",
        tokensTitle: "SOUL HARVEST & TOKENS",
        tokensDesc: "Track your Soul Harvest points (Chooser of the Flesh) and other markers (Balefire, Oubliex, etc.).",
        newTokenBtn: "New Tracker",
        rulesFaction: "Faction Rules",
        ruleSoulstrike: "<strong>Soulstrike:</strong> Defence dice ≤ APL is a success. Defence dice > APL is a fail. 1 is always critical success. 6 is always fail.",
        ruleShadowPassage: "<strong>Shadow Passage:</strong> 1/TP, one operative WITHIN SHADOW can perform Reposition by teleporting to another shadow.",
        ruleUmbral: "<strong>Umbral Entities:</strong> Ignore Piercing against Mandrakes. Improve Save stat by 1 when WITHIN SHADOW.",
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
        title: "MANDRAK-KILL-TEAM",
        tabAssemble: "TEAM BAUEN",
        tabMatch: "MATCH TRACKER",
        tabTokens: "SEELENERHTE / MARKER",
        tabRules: "REGELN",
        resetPloysBtn: "PLOYS ZURÜCKSETZEN",
        builderDesc: "Wähle 1 Nachtteufel und 8 andere Kämpfer aus.",
        selectedText: "Ausgewählt:",
        startMatchBtn: "MATCH STARTEN <i class=\"fa-solid fa-arrow-right\"></i>",
        activeTeam: "AKTIVES TEAM",
        activeTeamDesc: "Verfolge die Lebenspunkte (LP) deiner Kämpfer.",
        tokensTitle: "SEELENERHTE & MARKER",
        tokensDesc: "Verfolge deine Seelenernte-Punkte (Fleischsammler) und andere Marker (Kaltes Feuer, Oubliex, etc.).",
        newTokenBtn: "Neuer Marker",
        rulesFaction: "Fraktionsregeln",
        ruleSoulstrike: "<strong>Seelenschlag:</strong> Verteidigungswürfel ≤ APG ist ein Erfolg. > APG ist ein Fehlschlag. 1 ist immer kritisch, 6 ist immer Fehlschlag.",
        ruleShadowPassage: "<strong>Schattenpfad:</strong> 1/TP, ein Kämpfer IM SCHATTEN kann sich zu einem anderen Schatten teleportieren.",
        ruleUmbral: "<strong>Umbrale Entitäten:</strong> Ignoriere Durchdringend. Verbessere Rüstungswurf um 1, wenn IM SCHATTEN.",
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
        { id: 'nightfiend', name: 'MANDRAKE NIGHTFIEND', limit: 1, isLeader: true, stats: { apg: 2, b: '7"', rw: '5+', lp: 9 }, abilities: ['<strong>Harrowing Whispers:</strong> Prevent opponent activation (roll D6 > enemy APL).', '<strong>Oubliex:</strong> When active, ignore damage on 5+.'], fixedWeapons: ['Baleblast', 'Huskblade'] },
        { id: 'abyssal', name: 'MANDRAKE ABYSSAL', limit: 1, stats: { apg: 2, b: '7"', rw: '5+', lp: 8 }, abilities: ['<strong>Balefire:</strong> Buff friendly / debuff enemy ranged weapons Dmg stat with Balefire tokens.', '<strong>Wreathe in Balefire (1AP):</strong> Give Balefire token to visible operative.'], weaponSelect1: ['Balesurge (blast)', 'Balesurge (burn)'], fixedWeapons: ['Glimmersteel blade'] },
        { id: 'chooser', name: 'MANDRAKE CHOOSER OF THE FLESH', limit: 1, stats: { apg: 2, b: '7"', rw: '5+', lp: 8 }, abilities: ['<strong>Soul Harvest:</strong> Gain points for kills. Spend 1 point for +1 APL or heal 2D3.', '<strong>Part Collector:</strong> Inflict 2D3 damage when enemy Falls Back.'], fixedWeapons: ['Baleblast', 'Baleblade'] },
        { id: 'dirgemaw', name: 'MANDRAKE DIRGEMAW', limit: 1, stats: { apg: 2, b: '7"', rw: '5+', lp: 8 }, abilities: ['<strong>Haunting Focus:</strong> Strategic gambit to force enemy to fight/shoot this operative.', '<strong>Pareidolic Projection (1AP):</strong> Worsen enemy Hit stat by 1 and Move by 2".'], fixedWeapons: ['Baleblast', 'Horrifying scream', 'Glimmersteel blade'] },
        { id: 'shadeweaver', name: 'MANDRAKE SHADEWEAVER', limit: 1, stats: { apg: 2, b: '7"', rw: '5+', lp: 8 }, abilities: ['<strong>Shadow Portal:</strong> Use Reposition to place/use Shadow Portal markers.', '<strong>Weave Darkness (1AP):</strong> Place smoke marker (doesn\'t remove next TP).'], fixedWeapons: ['Baleblast', 'Glimmersteel blade'] },
        { id: 'warrior1', name: 'MANDRAKE WARRIOR (1)', limit: 1, stats: { apg: 2, b: '7"', rw: '5+', lp: 8 }, abilities: ['<strong>Shadow Warrior:</strong> +1 Critical Dmg stat of glimmersteel blade when WITHIN SHADOW.'], fixedWeapons: ['Baleblast', 'Glimmersteel blade'] },
        { id: 'warrior2', name: 'MANDRAKE WARRIOR (2)', limit: 1, stats: { apg: 2, b: '7"', rw: '5+', lp: 8 }, abilities: ['<strong>Shadow Warrior:</strong> +1 Critical Dmg stat of glimmersteel blade when WITHIN SHADOW.'], fixedWeapons: ['Baleblast', 'Glimmersteel blade'] },
        { id: 'warrior3', name: 'MANDRAKE WARRIOR (3)', limit: 1, stats: { apg: 2, b: '7"', rw: '5+', lp: 8 }, abilities: ['<strong>Shadow Warrior:</strong> +1 Critical Dmg stat of glimmersteel blade when WITHIN SHADOW.'], fixedWeapons: ['Baleblast', 'Glimmersteel blade'] },
        { id: 'warrior4', name: 'MANDRAKE WARRIOR (4)', limit: 1, stats: { apg: 2, b: '7"', rw: '5+', lp: 8 }, abilities: ['<strong>Shadow Warrior:</strong> +1 Critical Dmg stat of glimmersteel blade when WITHIN SHADOW.'], fixedWeapons: ['Baleblast', 'Glimmersteel blade'] },
        { id: 'warrior5', name: 'MANDRAKE WARRIOR (5)', limit: 1, stats: { apg: 2, b: '7"', rw: '5+', lp: 8 }, abilities: ['<strong>Shadow Warrior:</strong> +1 Critical Dmg stat of glimmersteel blade when WITHIN SHADOW.'], fixedWeapons: ['Baleblast', 'Glimmersteel blade'] },
        { id: 'warrior6', name: 'MANDRAKE WARRIOR (6)', limit: 1, stats: { apg: 2, b: '7"', rw: '5+', lp: 8 }, abilities: ['<strong>Shadow Warrior:</strong> +1 Critical Dmg stat of glimmersteel blade when WITHIN SHADOW.'], fixedWeapons: ['Baleblast', 'Glimmersteel blade'] },
        { id: 'warrior7', name: 'MANDRAKE WARRIOR (7)', limit: 1, stats: { apg: 2, b: '7"', rw: '5+', lp: 8 }, abilities: ['<strong>Shadow Warrior:</strong> +1 Critical Dmg stat of glimmersteel blade when WITHIN SHADOW.'], fixedWeapons: ['Baleblast', 'Glimmersteel blade'] },
        { id: 'warrior8', name: 'MANDRAKE WARRIOR (8)', limit: 1, stats: { apg: 2, b: '7"', rw: '5+', lp: 8 }, abilities: ['<strong>Shadow Warrior:</strong> +1 Critical Dmg stat of glimmersteel blade when WITHIN SHADOW.'], fixedWeapons: ['Baleblast', 'Glimmersteel blade'] }
    ],
    de: [
        { id: 'nightfiend', name: 'MANDRAK-NACHTTEUFEL', limit: 1, isLeader: true, stats: { apg: 2, b: '7"', rw: '5+', lp: 9 }, abilities: ['<strong>Quälendes Flüstern:</strong> Verhindert gegnerische Aktivierung (W6 > feindl. APG).', '<strong>Oubliex:</strong> Wenn aktiv, ignoriere Schaden bei 5+.'], fixedWeapons: ['Frostschlag', 'Staubklinge'] },
        { id: 'abyssal', name: 'MANDRAK-ABGRÜNDIGER', limit: 1, stats: { apg: 2, b: '7"', rw: '5+', lp: 8 }, abilities: ['<strong>Kaltes Feuer:</strong> Buffe befreundete / debuffe feindliche Fernkampfwaffen-Schadenswerte mit Kaltes-Feuer-Markern.', '<strong>In Kaltes Feuer hüllen (1 AP):</strong> Gib sichtbarem Kämpfer einen Kaltes-Feuer-Marker.'], weaponSelect1: ['Frostwoge (Explosiv)', 'Frostwoge (Brand)'], fixedWeapons: ['Flimmerstahlklinge'] },
        { id: 'chooser', name: 'MANDRAK-FLEISCHSAMMLER', limit: 1, stats: { apg: 2, b: '7"', rw: '5+', lp: 8 }, abilities: ['<strong>Seelenernte:</strong> Erhalte Punkte für Kills. Gib 1 Punkt für +1 APG aus oder heile 2W3.', '<strong>Teilesammler:</strong> Füge 2W3 Schaden zu, wenn der Feind sich zurückzieht.'], fixedWeapons: ['Frostschlag', 'Froststahlklinge'] },
        { id: 'dirgemaw', name: 'MANDRAK-KLAGESPUK', limit: 1, stats: { apg: 2, b: '7"', rw: '5+', lp: 8 }, abilities: ['<strong>Erwähltes Opfer:</strong> Strategisches Manöver, um Feind zu zwingen, diesen Kämpfer zu bekämpfen/beschießen.', '<strong>Pareidolische Projektion (1 AP):</strong> Verschlechtere Trefferwert um 1 und Bewegung um 2".'], fixedWeapons: ['Frostschlag', 'Entsetzlicher Schrei', 'Flimmerstahlklinge'] },
        { id: 'shadeweaver', name: 'MANDRAK-SCHATTENWEBER', limit: 1, stats: { apg: 2, b: '7"', rw: '5+', lp: 8 }, abilities: ['<strong>Schattenportal:</strong> Nutze Positionswechsel für Teleport zu/von Schattenportalmarkern.', '<strong>Dunkelheit weben (1 AP):</strong> Platziere permanenten Rauchmarker.'], fixedWeapons: ['Frostschlag', 'Flimmerstahlklinge'] },
        { id: 'warrior1', name: 'MANDRAK-KRIEGER (1)', limit: 1, stats: { apg: 2, b: '7"', rw: '5+', lp: 8 }, abilities: ['<strong>Schattenkrieger:</strong> +1 kritischer Schaden für Flimmerstahlklinge, wenn IM SCHATTEN.'], fixedWeapons: ['Frostschlag', 'Flimmerstahlklinge'] },
        { id: 'warrior2', name: 'MANDRAK-KRIEGER (2)', limit: 1, stats: { apg: 2, b: '7"', rw: '5+', lp: 8 }, abilities: ['<strong>Schattenkrieger:</strong> +1 kritischer Schaden für Flimmerstahlklinge, wenn IM SCHATTEN.'], fixedWeapons: ['Frostschlag', 'Flimmerstahlklinge'] },
        { id: 'warrior3', name: 'MANDRAK-KRIEGER (3)', limit: 1, stats: { apg: 2, b: '7"', rw: '5+', lp: 8 }, abilities: ['<strong>Schattenkrieger:</strong> +1 kritischer Schaden für Flimmerstahlklinge, wenn IM SCHATTEN.'], fixedWeapons: ['Frostschlag', 'Flimmerstahlklinge'] },
        { id: 'warrior4', name: 'MANDRAK-KRIEGER (4)', limit: 1, stats: { apg: 2, b: '7"', rw: '5+', lp: 8 }, abilities: ['<strong>Schattenkrieger:</strong> +1 kritischer Schaden für Flimmerstahlklinge, wenn IM SCHATTEN.'], fixedWeapons: ['Frostschlag', 'Flimmerstahlklinge'] },
        { id: 'warrior5', name: 'MANDRAK-KRIEGER (5)', limit: 1, stats: { apg: 2, b: '7"', rw: '5+', lp: 8 }, abilities: ['<strong>Schattenkrieger:</strong> +1 kritischer Schaden für Flimmerstahlklinge, wenn IM SCHATTEN.'], fixedWeapons: ['Frostschlag', 'Flimmerstahlklinge'] },
        { id: 'warrior6', name: 'MANDRAK-KRIEGER (6)', limit: 1, stats: { apg: 2, b: '7"', rw: '5+', lp: 8 }, abilities: ['<strong>Schattenkrieger:</strong> +1 kritischer Schaden für Flimmerstahlklinge, wenn IM SCHATTEN.'], fixedWeapons: ['Frostschlag', 'Flimmerstahlklinge'] },
        { id: 'warrior7', name: 'MANDRAK-KRIEGER (7)', limit: 1, stats: { apg: 2, b: '7"', rw: '5+', lp: 8 }, abilities: ['<strong>Schattenkrieger:</strong> +1 kritischer Schaden für Flimmerstahlklinge, wenn IM SCHATTEN.'], fixedWeapons: ['Frostschlag', 'Flimmerstahlklinge'] },
        { id: 'warrior8', name: 'MANDRAK-KRIEGER (8)', limit: 1, stats: { apg: 2, b: '7"', rw: '5+', lp: 8 }, abilities: ['<strong>Schattenkrieger:</strong> +1 kritischer Schaden für Flimmerstahlklinge, wenn IM SCHATTEN.'], fixedWeapons: ['Frostschlag', 'Flimmerstahlklinge'] }
    ]
};
