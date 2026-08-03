const PLOYS_DB = {
    en: {
        strategy: [
            { name: "Wind-Swift Precision", desc: "Whenever a friendly EXODITE DRAGON MASTER operative is shooting, if it has SPEED 4+, its ranged weapons have the Balanced weapon rule." },
            { name: "Draconic Fury", desc: "Whenever a friendly EXODITE DRAGON MASTER operative is fighting: If it has SPEED 4+, its melee weapons have the Balanced weapon rule. If it has SPEED 7+, its melee weapons have the Ceaseless weapon rule." },
            { name: "Sinuous Flux", desc: "Whenever an enemy operative is shooting a friendly EXODITE DRAGON MASTER operative more than 6\" from it, if that friendly operative has SPEED 4+ or SPEED 7+, your opponent cannot re-roll their attack dice." },
            { name: "Ride Them Down", desc: "Once during each friendly EXODITE DRAGON MASTER MOUNTED operative’s activation, whenever it ends its move during the activation or Sprint action: If it moved 4\" or more during that action, you can inflict 1 damage on one enemy operative within its control range. If it moved 7\" or more during that action, or it's a CLANBLADE operative, you can inflict D3 damage on one enemy operative within its control range instead." }
        ],
        firefight: [
            { name: "Survivalist Spirit", desc: "Use this firefight ploy during a friendly EXODITE DRAGON MASTER MOUNTED operative’s counteraction, before or after it performs an action. Until the start of its next activation, you can ignore any changes to that operative's weapon stats from being injured." },
            { name: "Leap", desc: "Use this firefight ploy when a friendly EXODITE DRAGON MASTER MOUNTED operative performs the Sprint action. Instead of moving that operative, remove it from the killzone and set it back up in a location it can be placed within 1\" horizontally of its original location. This distance cannot be measured through terrain features more than 2\" tall, and that operative cannot be set up on Vantage terrain higher than 2\" from the killzone floor. That operative is treated as having moved 3\" for the purposes of its movement allowance and has SPEED 3-." },
            { name: "Feral Hunger", desc: "Use this firefight ploy after rolling your attack dice for a friendly EXODITE DRAGON MASTER operative, if it’s fighting against a wounded enemy operative with its Drakesteed fangs & talons or fangs & talons. You can re-roll any of your attack dice." },
            { name: "Riding Mastery", desc: "Use this firefight ploy when a friendly EXODITE DRAGON MASTER MOUNTED operative performs the Sprint action during its activation. During that action, that operative can perform the Pick Up Marker, Place Marker or a mission action (you can determine control during that action to do so), and any remaining move distance it had from that Sprint action can be used after it does so." }
        ]
    },
    de: {
        strategy: [
            { name: "Windschnelle Präzision", desc: "Jedes Mal, wenn ein befreundeter EXODITEN-DRACHENMEISTER -Kämpfer schießt und er GESCHWINDIGKEIT 4+ hat, haben seine Fernkampfwaffen die Waffenregel Ausgewogen." },
            { name: "Drachenwut", desc: "Wenn ein befreundeter EXODITEN-DRACHENMEISTER -Kämpfer kämpft, gilt Folgendes: Wenn er GESCHWINDIGKEIT 4+ hat, haben seine Nahkampfwaffen die Waffenregel Ausgewogen. Wenn er GESCHWINDIGKEIT 7+ hat, haben seine Nahkampfwaffen die Waffenregel Unablässig." },
            { name: "Stets in Bewegung", desc: "Jedes Mal, wenn ein feindlicher Kämpfer auf einen befreundeten EXODITEN-DRACHENMEISTER -Kämpfer schießt, der sich weiter als 6 Zoll von ihm entfernt befindet und GESCHWINDIGKEIT 4+ oder GESCHWINDIGKEIT 7+ hat, kann dein Gegner keine seiner Attackenwürfel wiederholen." },
            { name: "Reitet sie nieder", desc: "Einmal während der Aktivierung jedes befreundeten BERITTENEN EXODITEN-DRACHENMEISTER -Kämpfers gilt, wenn er seine Bewegung während der Aktion Galoppieren beendet: Wenn er sich während jener Aktion 4 Zoll oder mehr bewegt hat, kannst du einem einzelnen feindlichen Kämpfer in seiner Kontrollreichweite 1 Schaden zufügen. Wenn er sich während jener Aktion 7 Zoll oder mehr bewegt hat oder er ein CLANKLINGE-Kämpfer ist, kannst du stattdessen einem einzelnen feindlichen Kämpfer in seiner Kontrollreichweite W3 Schaden zufügen." }
        ],
        firefight: [
            { name: "Geist des Überlebenskünstlers", desc: "Setze diese Gefechtslist während der Aktivierung oder Gegenmaßnahme eines befreundeten BERITTENEN EXODITEN-DRACHENMEISTER -Kämpfers ein, bevor oder nachdem er eine Aktion ausführt. Bis zum Beginn seiner nächsten Aktivierung kannst du beliebige Veränderungen der Waffenwerte jenes Kämpfers durch Verletztsein ignorieren." },
            { name: "Sprung", desc: "Setze diese Gefechtslist ein, wenn ein befreundeter BERITTENER EXODITEN-DRACHENMEISTER -Kämpfer die Aktion Galoppieren ausführt. Entferne jenen Kämpfer aus der Killzone, statt ihn zu bewegen, und stelle ihn horizontal innerhalb von 1 Zoll um seinen ursprünglichen Standort an einem Ort wieder auf, an dem er platziert werden kann. Diese Entfernung kann nicht durch Geländestücke gemessen werden, die höher als 2 Zoll sind, und jener Kämpfer kann nicht auf Aussichtspunkt-Gelände, das höher als 2 Zoll über dem Killzone-Boden ist, aufgestellt werden. Jener Kämpfer wird für Belange seiner Bewegungsdistanz behandelt, als hätte er sich 3 Zoll bewegt, und hat GESCHWINDIGKEIT 3-." },
            { name: "Wilder Hunger", desc: "Setze diese Gefechtslist ein, nachdem du deine Attackenwürfel für einen befreundeten EXODITEN-DRACHENMEISTER -Kämpfer geworfen hast, wenn er mit seinen Fängen und Krallen des Drachenrosses oder Fängen und Krallen gegen einen verwundeten feindlichen Kämpfer kämpft. Du kannst beliebige deiner Attackenwürfel wiederholen." },
            { name: "Meisterreiter", desc: "Setze diese Gefechtslist ein, wenn ein befreundeter BERITTENER EXODITEN-DRACHENMEISTER -Kämpfer während seiner Aktivierung die Aktion Galoppieren ausführt. Während jener Aktion kann jener Kämpfer die Aktion Marker aufsammeln, Marker platzieren oder eine missionsspezifische Aktion ausführen (du kannst während jener Aktion die Kontrolle ermitteln, um dies zu tun), und nachdem er dies getan hat, kann er etwaige verbleibende Bewegungsdistanz, die ihm von jener Aktion Galoppieren verbleibt, verwenden." }
        ]
    }
};

const translations = {
    en: {
        legalDisclaimer: "This is an unofficial fan-made utility. Warhammer 40,000, Kill Team, and all associated logos, names, and statistics are © Copyright Games Workshop Limited. This tool is provided for free and is not affiliated with, or endorsed by, Games Workshop in any way.",
        title: "EXODITE DRAGON MASTERS KILL TEAM",
        tabAssemble: "ASSEMBLE TEAM",
        tabMatch: "MATCH TRACKER",
        tabTokens: "TRACKERS",
        tabRules: "RULES",
        resetPloysBtn: "RESET PLOYS",
        builderDesc: "Your Kill Team consists of 1 Clanblade, 1 Leystalker, 1 Stonesinger, and 2 Drakolithes.",
        selectedText: "Selected:",
        startMatchBtn: "START MATCH <i class=\"fa-solid fa-arrow-right\"></i>",
        activeTeam: "ACTIVE TEAM",
        activeTeamDesc: "Track the Wounds of your operatives.",
        tokensTitle: "TRACKERS",
        tokensDesc: "Track your command points, victory points, or other conditions.",
        newTokenBtn: "New Tracker",
        rulesFaction: "Faction Rules",
        ruleDrakesteedAgility: "<strong>Drakesteed Agility:</strong> Mounted operatives cannot perform normal Charge, Dash, Fall Back, or Reposition actions. Instead they use Sprint and Turn.",
        ruleDraconicCavalry: "<strong>Draconic Cavalry Tactics:</strong> Drakolithes start on the board. Mounted operatives start in reserve and arrive in the first Firefight phase via a Turn action. They activate twice per Turning Point (up to 3AP / activation).",
        ruleMercurialSpeed: "<strong>Mercurial Speed:</strong> Mounted operatives have SPEED 3-, SPEED 4+, or SPEED 7+ based on Sprint distance. High speed grants defensive and offensive buffs.",
        
        rulesStrategy: "Strategy Ploys",
        stratPrecision: "<strong>Wind-Swift Precision:</strong> Balanced on ranged weapons for SPEED 4+.",
        stratFury: "<strong>Draconic Fury:</strong> Balanced on melee for SPEED 4+, Ceaseless for SPEED 7+.",
        stratFlux: "<strong>Sinuous Flux:</strong> Enemies cannot re-roll against SPEED 4+/7+ over 6\" away.",
        stratRide: "<strong>Ride Them Down:</strong> Inflict damage on enemies when finishing a fast Sprint.",
        rulesFirefight: "Firefight Ploys",
        fireSurvivalist: "<strong>Survivalist Spirit:</strong> Ignore injured penalties until next activation.",
        fireLeap: "<strong>Leap:</strong> Replace Sprint with a 1\" reposition over/around terrain (SPEED 3-).",
        fireHunger: "<strong>Feral Hunger:</strong> Re-roll attack dice with fangs & talons against wounded enemies.",
        fireMastery: "<strong>Riding Mastery:</strong> Pick Up, Place Marker, or mission action during Sprint.",
        statApg: "APL",
        statB: "MOVE",
        statRw: "SAVE",
        statLp: "WOUNDS",
        abilitiesHeader: "Abilities"
    },
    de: {
        legalDisclaimer: "Dies ist ein inoffizielles, von Fans erstelltes Hilfsprogramm. Warhammer 40.000, Kill Team und alle zugehörigen Logos, Namen und Statistiken sind © Copyright Games Workshop Limited. Dieses Tool wird kostenlos zur Verfügung gestellt und ist in keiner Weise mit Games Workshop verbunden oder wird von Games Workshop unterstützt.",
        title: "EXODITEN-DRACHENMEISTER KILL-TEAM",
        tabAssemble: "TEAM BAUEN",
        tabMatch: "MATCH TRACKER",
        tabTokens: "MARKER",
        tabRules: "REGELN",
        resetPloysBtn: "PLOYS ZURÜCKSETZEN",
        builderDesc: "Dein Kill-Team besteht aus 1 Clanklinge, 1 Leypirscher, 1 Steinsänger und 2 Drakolithen.",
        selectedText: "Ausgewählt:",
        startMatchBtn: "MATCH STARTEN <i class=\"fa-solid fa-arrow-right\"></i>",
        activeTeam: "AKTIVES TEAM",
        activeTeamDesc: "Verfolge die Lebenspunkte (LP) deiner Kämpfer.",
        tokensTitle: "MARKER",
        tokensDesc: "Verfolge deine Befehlspunkte, Siegespunkte oder andere Marker.",
        newTokenBtn: "Neuer Marker",
        rulesFaction: "Fraktionsregeln",
        ruleDrakesteedAgility: "<strong>Bewegliche Drachenrosse:</strong> Berittene Kämpfer können normales Angreifen, Sprinten, Zurückziehen oder Positionswechsel nicht ausführen. Stattdessen nutzen sie Galoppieren und Drehen.",
        ruleDraconicCavalry: "<strong>Drachenkavallerietaktik:</strong> Drakolithen starten auf dem Feld. Berittene starten in Reserve und betreten das Feld in der ersten Gefechtsphase mit Drehen. Sie werden zweimal pro Wendepunkt aktiviert (max. 3 AP / Aktivierung).",
        ruleMercurialSpeed: "<strong>Blitzschnell:</strong> Berittene Kämpfer haben GESCHWINDIGKEIT 3-, 4+ oder 7+ basierend auf der Galopp-Distanz. Hohes Tempo bringt Boni.",
        
        rulesStrategy: "Strategielisten",
        stratPrecision: "<strong>Windschnelle Präzision:</strong> Ausgewogen auf Fernkampfwaffen bei GESCHWINDIGKEIT 4+.",
        stratFury: "<strong>Drachenwut:</strong> Ausgewogen im Nahkampf bei GESCHWINDIGKEIT 4+, Unablässig bei 7+.",
        stratFlux: "<strong>Stets in Bewegung:</strong> Feinde können nicht gegen GESCHWINDIGKEIT 4+/7+ auf über 6\" wiederholen.",
        stratRide: "<strong>Reitet sie nieder:</strong> Füge Schaden zu, wenn du einen schnellen Galopp beendest.",
        rulesFirefight: "Gefechtslisten",
        fireSurvivalist: "<strong>Geist des Überlebenskünstlers:</strong> Ignoriere Abzüge durch Verletztsein bis zur nächsten Aktivierung.",
        fireLeap: "<strong>Sprung:</strong> Ersetze Galoppieren durch 1\" Umpositionierung über Gelände (GESCHWINDIGKEIT 3-).",
        fireHunger: "<strong>Wilder Hunger:</strong> Wiederhole Attackenwürfel mit Fängen und Krallen gegen verwundete Feinde.",
        fireMastery: "<strong>Meisterreiter:</strong> Marker aufsammeln/platzieren oder Missionsaktion während Galoppieren.",
        statApg: "APG",
        statB: "B",
        statRw: "RW",
        statLp: "LP",
        abilitiesHeader: "Fähigkeiten"
    }
};

const OPERATIVES_DB = {
    en: [
        { id: 'clanblade', name: "EXODITE DRAGON MASTER CLANBLADE", limit: 1, isLeader: true, stats: { apg: 4, b: '12"', rw: '3+', lp: 24 }, abilities: ["<strong>Scaleshield:</strong> Worsen Piercing of incoming attacks by 1 if no crits retained."], weaponSelect1: [], weaponSelect2: [], fixedWeapons: ["Solar carbine", "Drakesteed fangs & talons", "Moonblades"] },
        { id: 'leystalker', name: "EXODITE DRAGON MASTER LEYSTALKER", limit: 1, stats: { apg: 4, b: '12"', rw: '3+', lp: 24 }, abilities: ["<strong>Implacable Darkscale:</strong> Ignore injured Hit stat changes for Drakesteed fangs."], weaponSelect1: [], fixedWeapons: ["Long rifle (mobile)", "Long rifle (stationary)", "Drakesteed fangs & talons", "Hunting blade"] },
        { id: 'stonesinger', name: "EXODITE DRAGON MASTER STONESINGER", limit: 1, stats: { apg: 4, b: '12"', rw: '3+', lp: 24 }, abilities: ["<strong>Song of Renewal:</strong> PSYCHIC. Heal one ally for 2D3 or all for D3."], weaponSelect1: [], fixedWeapons: ["Solar carbine", "Venomcrest spit", "Drakesteed fangs & talons", "Stone stave"] },
        { id: 'drakolithe_1', name: "EXODITE DRAGON MASTER DRAKOLITHE (1)", limit: 1, stats: { apg: 2, b: '8"', rw: '5+', lp: 7 }, abilities: ["<strong>Preternatural Evasion:</strong> Gains SPEED based on move distance.", "<strong>Beast:</strong> Action limits."], weaponSelect1: [], fixedWeapons: ["Fangs & talons"] },
        { id: 'drakolithe_2', name: "EXODITE DRAGON MASTER DRAKOLITHE (2)", limit: 1, stats: { apg: 2, b: '8"', rw: '5+', lp: 7 }, abilities: ["<strong>Preternatural Evasion:</strong> Gains SPEED based on move distance.", "<strong>Beast:</strong> Action limits."], weaponSelect1: [], fixedWeapons: ["Fangs & talons"] }
    ],
    de: [
        { id: 'clanblade', name: "EXODITEN-DRACHENMEISTER-CLANKLINGE", limit: 1, isLeader: true, stats: { apg: 4, b: '12"', rw: '3+', lp: 24 }, abilities: ["<strong>Schuppenschild:</strong> Verschlechtert Durchdringend eingehender Attacken um 1, wenn keine kritischen Erfolge behalten werden."], weaponSelect1: [], weaponSelect2: [], fixedWeapons: ["Sonnenkarabiner", "Fänge und Krallen des Drachenrosses", "Mondklingen"] },
        { id: 'leystalker', name: "EXODITEN-DRACHENMEISTER-LEYPIRSCHER", limit: 1, stats: { apg: 4, b: '12"', rw: '3+', lp: 24 }, abilities: ["<strong>Unerbittliche Dunkelschuppe:</strong> Ignoriert Abzüge auf Trefferwert für Drachenrosse-Fänge durch Verletzung."], weaponSelect1: [], fixedWeapons: ["Jagdgewehr (in Bewegung)", "Jagdgewehr (stationär)", "Fänge und Krallen des Drachenrosses", "Jagdklinge"] },
        { id: 'stonesinger', name: "EXODITEN-DRACHENMEISTER-STEINSÄNGER", limit: 1, stats: { apg: 4, b: '12"', rw: '3+', lp: 24 }, abilities: ["<strong>Lied der Erneuerung:</strong> PSIONISCH. Heile einen Verbündeten um 2W3 oder alle um W3."], weaponSelect1: [], fixedWeapons: ["Sonnenkarabiner", "Giftspeichel", "Fänge und Krallen des Drachenrosses", "Steinstab"] },
        { id: 'drakolithe_1', name: "EXODITEN-DRACHENMEISTER DRAKOLITH (1)", limit: 1, stats: { apg: 2, b: '8"', rw: '5+', lp: 7 }, abilities: ["<strong>Übernatürliches Ausweichen:</strong> Erhält GESCHWINDIGKEIT basierend auf Distanz.", "<strong>Bestie:</strong> Aktionseinschränkungen."], weaponSelect1: [], fixedWeapons: ["Fänge und Krallen"] },
        { id: 'drakolithe_2', name: "EXODITEN-DRACHENMEISTER DRAKOLITH (2)", limit: 1, stats: { apg: 2, b: '8"', rw: '5+', lp: 7 }, abilities: ["<strong>Übernatürliches Ausweichen:</strong> Erhält GESCHWINDIGKEIT basierend auf Distanz.", "<strong>Bestie:</strong> Aktionseinschränkungen."], weaponSelect1: [], fixedWeapons: ["Fänge und Krallen"] }
    ]
};

const WEAPONS_DB = {
    en: {
        "Solar carbine": { "a": "4", "h": "3+", "d": "3/3", "wr": "Devastating 1" },
        "Drakesteed fangs & talons": { "a": "6", "h": "3+", "d": "3/5", "wr": "Brutal" },
        "Moonblades": { "a": "5", "h": "3+", "d": "4/6", "wr": "Lethal 5+" },
        "Long rifle (mobile)": { "a": "4", "h": "3+", "d": "3/3", "wr": "Devastating 1" },
        "Long rifle (stationary)": { "a": "4", "h": "2+", "d": "3/3", "wr": "Devastating 3, Aimed*" },
        "Hunting blade": { "a": "3", "h": "3+", "d": "3/5", "wr": "Lethal 5+" },
        "Venomcrest spit": { "a": "4", "h": "3+", "d": "3/4", "wr": "Range 8\", Severe, Torrent 2\"" },
        "Stone stave": { "a": "4", "h": "3+", "d": "3/5", "wr": "PSYCHIC, Lethal 5+, Shock, Stun" },
        "Fangs & talons": { "a": "4", "h": "3+", "d": "3/4", "wr": "Rending" },
        "Earthen Wrath": { "a": "4", "h": "3+", "d": "4/3", "wr": "Devastating 2, Saturate, Earthen Wrath*" }
    },
    de: {
        "Sonnenkarabiner": { "a": "4", "h": "3+", "d": "3/3", "wr": "Verheerend 1" },
        "Fänge und Krallen des Drachenrosses": { "a": "6", "h": "3+", "d": "3/5", "wr": "Brutal" },
        "Mondklingen": { "a": "5", "h": "3+", "d": "4/6", "wr": "Tödlich 5+" },
        "Jagdgewehr (in Bewegung)": { "a": "4", "h": "3+", "d": "3/3", "wr": "Verheerend 1" },
        "Jagdgewehr (stationär)": { "a": "4", "h": "2+", "d": "3/3", "wr": "Verheerend 3, Gezielt*" },
        "Jagdklinge": { "a": "3", "h": "3+", "d": "3/5", "wr": "Tödlich 5+" },
        "Giftspeichel": { "a": "4", "h": "3+", "d": "3/4", "wr": "Reichweite 8 Zoll, Heftig, Schwall 2 Zoll" },
        "Steinstab": { "a": "4", "h": "3+", "d": "3/5", "wr": "PSIONISCH, Tödlich 5+, Schock, Betäuben" },
        "Fänge und Krallen": { "a": "4", "h": "3+", "d": "3/4", "wr": "Rüstungsbrechend" },
        "Zorn der Erde": { "a": "4", "h": "3+", "d": "4/3", "wr": "Verheerend 2, Hagel, Zorn der Erde*" }
    }
};
