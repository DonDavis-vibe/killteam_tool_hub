
const PLOYS_DB = {
    en: {
        strategy: [
            { name: "Cloud of Flies", desc: "Place a marker. Operatives wholly within 1\" of it are obscured from shooters >3\" away." },
            { name: "Nurglings", desc: "Subtract 1 from an enemy's APL." },
            { name: "Contagion", desc: "Subtract 2\" from Move and worsen Hit stat by 1 for an enemy.", cost: 0 },
            { name: "Lumbering Death", desc: "Weapons gain Ceaseless if operative hasn't moved more than 3\"." }
        ],
        firefight: [
            { name: "Sickening Resilience", desc: "Disgustingly Resilient rule always subtracts 1 from damage inflicted." },
            { name: "Curse of Rot", desc: "Inflict 1 damage for each 3 the enemy rolls. They cannot retain or re-roll it." },
            { name: "Virulent Poison", desc: "Give an enemy operative a Poison token." },
            { name: "Poisonous Demise", desc: "When incapacitated, give nearby enemies Poison tokens or inflict damage." }
        ]
    },
    de: {
        strategy: [
            { name: "Fliegenschwarm", desc: "Platziere Marker. Kämpfer in 1\" sind für Schützen >3\" verdeckt." },
            { name: "Nurglings", desc: "Subtrahiere 1 vom APG eines Feindes." },
            { name: "Kontagion", desc: "Subtrahiere 2\" von Bewegung und verschlechtere Trefferwert eines Feindes um 1.", cost: 0 },
            { name: "Schwerfälliger Tod", desc: "Waffen erhalten Unablässig, wenn sich der Kämpfer nicht mehr als 3\" bewegt." }
        ],
        firefight: [
            { name: "Widerwärtige Zähigkeit", desc: "Die Regel Widerwärtig zäh zieht immer 1 vom zugefügten Schaden ab." },
            { name: "Fluch der Fäulnis", desc: "Füge 1 Schaden für jede feindliche 3 zu. Kann nicht behalten/wiederholt werden." },
            { name: "Virulentes Gift", desc: "Gib einem feindlichen Kämpfer einen Gift-Marker." },
            { name: "Giftiger Tod", desc: "Beim Ausschalten: Gib nahen Feinden Gift-Marker oder Schaden." }
        ]
    }
};

const translations = {
    en: {
        legalDisclaimer: "This is an unofficial fan-made utility. Warhammer 40,000, Kill Team, and all associated logos, names, and statistics are © Copyright Games Workshop Limited. This tool is provided for free and is not affiliated with, or endorsed by, Games Workshop in any way.",
        title: "PLAGUE MARINES (DEATH GUARD)",
        tabAssemble: "ASSEMBLE TEAM",
        tabMatch: "MATCH TRACKER",
        tabTokens: "POISON TOKENS",
        tabRules: "RULES",
        resetPloysBtn: "RESET PLOYS",
        builderDesc: "Select 1 Champion and 5 other operatives.",
        selectedText: "Selected:",
        startMatchBtn: "START MATCH <i class=\"fa-solid fa-arrow-right\"></i>",
        activeTeam: "ACTIVE TEAM",
        activeTeamDesc: "Track the Wounds of your operatives.",
        tokensTitle: "POISON TOKENS",
        tokensDesc: "Track your Poison tokens on enemy operatives.",
        newTokenBtn: "New Tracker",
        rulesFaction: "Faction Rules",
        ruleDisgustingly: "<strong>Disgustingly Resilient:</strong> Roll a D6 for each wound lost; on a 5+, that wound is not lost.",
        ruleContagions: "<strong>Contagions of Nurgle:</strong> Enemies near DEATH GUARD operatives suffer penalties to their stats.",
        ruleInexorable: "<strong>Inexorable Advance:</strong> Plague Marines never falter, ignoring modifiers to their movement.",

rulesStrategy: "Strategy Ploys",
        stratCreeping: "<strong>Cloud of Flies:</strong> Target obscured if within 1\" of marker and shooter > 3\" away.",
        stratGloaming: "<strong>Nurglings:</strong> Target within 3\" or with Poison token within 7\" gets -1 APL.",
        stratBlade: "<strong>Contagion:</strong> Enemy -2\" Move and -1 Hit if near operative with Poison token, or near Icon Bearer.",
        stratInescapable: "<strong>Lumbering Death:</strong> Weapons have Ceaseless if not moved > 3\".",
        rulesFirefight: "Firefight Ploys",
        fireSlither: "<strong>Sickening Resilience:</strong> Always subtract 1 from damage (min 2) for Disgustingly Resilient without rolling.",
        fireFeast: "<strong>Curse of Rot:</strong> When fighting/shooting within 3\" (or 7\" if Poisoned), enemy 3s cause 1 dmg and can't be retained/re-rolled.",
        fireHide: "<strong>Virulent Poison:</strong> Enemy within 3\" or visible within 7\" gains Poison token.",
        fireBite: "<strong>Poisonous Demise:</strong> When incapacitated, enemies within 3\" gain Poison token (or take 1 dmg if they already have one).",
        statApg: "APL",
        statB: "MOVE",
        statRw: "SAVE",
        statLp: "WOUNDS",
        abilitiesHeader: "Abilities"
    },
    de: {
        legalDisclaimer: "Dies ist ein inoffizielles, von Fans erstelltes Hilfsprogramm. Warhammer 40.000, Kill Team und alle zugehörigen Logos, Namen und Statistiken sind © Copyright Games Workshop Limited. Dieses Tool wird kostenlos zur Verfügung gestellt und ist in keiner Weise mit Games Workshop verbunden oder wird von Games Workshop unterstützt.",
        title: "PLAGUE MARINES (DEATH GUARD)",
        tabAssemble: "TEAM BAUEN",
        tabMatch: "MATCH TRACKER",
        tabTokens: "GIFTMARKER",
        tabRules: "REGELN",
        resetPloysBtn: "PLOYS ZURÜCKSETZEN",
        builderDesc: "Wähle 1 Champion und 5 andere Kämpfer aus.",
        selectedText: "Ausgewählt:",
        startMatchBtn: "MATCH STARTEN <i class=\"fa-solid fa-arrow-right\"></i>",
        activeTeam: "AKTIVES TEAM",
        activeTeamDesc: "Verfolge die Lebenspunkte (LP) deiner Kämpfer.",
        tokensTitle: "GIFTMARKER",
        tokensDesc: "Verfolge deine Giftmarker auf feindlichen Kämpfern.",
        newTokenBtn: "Neuer Marker",
        rulesFaction: "Fraktionsregeln",
        ruleDisgustingly: "<strong>Widerwärtig Zäh:</strong> Wirf einen W6 für jede verlorene Wunde; bei 5+ geht diese Wunde nicht verloren.",
        ruleContagions: "<strong>Ansteckungen des Nurgle:</strong> Feinde nahe DEATH GUARD Kämpfern erleiden Abzüge auf ihre Werte.",
        ruleInexorable: "<strong>Unaufhaltsamer Vormarsch:</strong> Plague Marines wanken nie und ignorieren Modifikatoren für ihre Bewegung.",

rulesStrategy: "Strategielisten",
        stratCreeping: "<strong>Fliegenwolke:</strong> Ziel verdeckt, wenn innerhalb 1\" von Marker und Schütze > 3\" entfernt.",
        stratGloaming: "<strong>Nurglinge:</strong> Ziel innerhalb 3\" oder mit Giftmarker innerhalb 7\" verliert 1 APG.",
        stratBlade: "<strong>Infektion:</strong> Feind -2\" B und -1 TW wenn nahe Kämpfer (mit Giftmarker) oder naher Ikonenträger.",
        stratInescapable: "<strong>Behäbiger Tod:</strong> Waffen haben Unablässig, wenn nicht > 3\" bewegt.",
        rulesFirefight: "Gefechtslisten",
        fireSlither: "<strong>Abstoßender Widerstand:</strong> Subtrahiere automatisch 1 vom Schaden für Widerwärtig Zäh (Minimum 2).",
        fireFeast: "<strong>Fluch der Fäulnis:</strong> Nahkampf/Schuss innerhalb 3\" (oder 7\" mit Gift): 3er des Gegners verursachen 1 Schaden und können nicht behalten werden.",
        fireHide: "<strong>Virulentes Gift:</strong> Feind innerhalb 3\" oder sichtbar 7\" erhält Giftmarker.",
        fireBite: "<strong>Gifttriefendes Ende:</strong> Bei Kampfunfähigkeit erhalten Feinde in 3\" Giftmarker (oder 1 Schaden).",
        statApg: "APG",
        statB: "B",
        statRw: "RW",
        statLp: "LP",
        abilitiesHeader: "Fähigkeiten"
    }
};

const OPERATIVES_DB = {
    en: [
        { id: 'champion', name: "PLAGUE MARINE CHAMPION", limit: 1, isLeader: true, stats: { apg: 3, b: '5"', rw: '3+', lp: 15 }, abilities: ["<strong>Grandfather's Blessing:</strong> Heal wounds when enemy with Poison token loses wounds."], fixedWeapons: ["Plasma pistol", "Plague sword"] },
        { id: 'bombardier', name: "PLAGUE MARINE BOMBARDIER", limit: 1, stats: { apg: 3, b: '5"', rw: '3+', lp: 14 }, abilities: ["<strong>Grenadier:</strong> Can use blight and krak grenades. Hit +1, blight has Toxic."], fixedWeapons: ["Boltgun", "Fists"] },
        { id: 'heavy_gunner', name: "PLAGUE MARINE HEAVY GUNNER", limit: 1, stats: { apg: 3, b: '5"', rw: '3+', lp: 14 }, abilities: [], fixedWeapons: ["Bolt pistol", "Plague spewer", "Fists"] },
        { id: 'fighter', name: "PLAGUE MARINE FIGHTER", limit: 1, stats: { apg: 3, b: '5"', rw: '3+', lp: 14 }, abilities: ["<strong>Flail (1AP):</strong> D3+2 dmg to all within 2\"."], fixedWeapons: ["Bolt pistol", "Flail of Corruption"] },
        { id: 'plaguecaster', name: "MALIGNANT PLAGUECASTER", limit: 1, stats: { apg: 3, b: '5"', rw: '3+', lp: 14 }, abilities: ["<strong>Poisonous Miasma (1AP):</strong> Add Poison token or 3 dmg.", "<strong>Putrescent Vitality (1AP):</strong> Heal friendly."], fixedWeapons: ["Entropy", "Plague wind", "Corrupted staff"] },
        { id: 'warrior_1', name: "PLAGUE MARINE WARRIOR (1)", limit: 1, stats: { apg: 3, b: '5"', rw: '3+', lp: 14 }, abilities: ["<strong>Repulsive Fortitude:</strong> Defence dice 5+ are criticals."], fixedWeapons: ["Boltgun", "Plague knife"] },
        { id: 'warrior_2', name: "PLAGUE MARINE WARRIOR (2)", limit: 1, stats: { apg: 3, b: '5"', rw: '3+', lp: 14 }, abilities: ["<strong>Repulsive Fortitude:</strong> Defence dice 5+ are criticals."], fixedWeapons: ["Boltgun", "Plague knife"] },
        { id: 'warrior_3', name: "PLAGUE MARINE WARRIOR (3)", limit: 1, stats: { apg: 3, b: '5"', rw: '3+', lp: 14 }, abilities: ["<strong>Repulsive Fortitude:</strong> Defence dice 5+ are criticals."], fixedWeapons: ["Boltgun", "Plague knife"] },
        { id: 'warrior_4', name: "PLAGUE MARINE WARRIOR (4)", limit: 1, stats: { apg: 3, b: '5"', rw: '3+', lp: 14 }, abilities: ["<strong>Repulsive Fortitude:</strong> Defence dice 5+ are criticals."], fixedWeapons: ["Boltgun", "Plague knife"] },
        { id: 'warrior_5', name: "PLAGUE MARINE WARRIOR (5)", limit: 1, stats: { apg: 3, b: '5"', rw: '3+', lp: 14 }, abilities: ["<strong>Repulsive Fortitude:</strong> Defence dice 5+ are criticals."], fixedWeapons: ["Boltgun", "Plague knife"] },
        { id: 'icon_bearer', name: "PLAGUE MARINE ICON BEARER", limit: 1, stats: { apg: 3, b: '5"', rw: '3+', lp: 14 }, abilities: ["<strong>Icon Bearer:</strong> +1 APL for control.", "<strong>Icon of Contagion:</strong> Contagion ploy 0CP."], fixedWeapons: ["Bolt pistol", "Plague knife"] }
    ],
    de: [
        { id: 'champion', name: "SEUCHENMARINE-CHAMPION", limit: 1, isLeader: true, stats: { apg: 3, b: '5"', rw: '3+', lp: 15 }, abilities: ["<strong>Väterchens Segen:</strong> Heile LP wenn Feind mit Giftmarker LP verliert."], fixedWeapons: ["Plasmapistole", "Seuchenschwert"] },
        { id: 'bombardier', name: "SEUCHENMARINE-GRENADIER", limit: 1, stats: { apg: 3, b: '5"', rw: '3+', lp: 14 }, abilities: ["<strong>Grenadier:</strong> Seuchen/Sprenggranaten ohne Limit. TW +1, Seuchengranate hat Toxisch."], fixedWeapons: ["Bolter", "Fäuste"] },
        { id: 'heavy_gunner', name: "SEUCHENMARINE-SCHWERER-SCHÜTZE", limit: 1, stats: { apg: 3, b: '5"', rw: '3+', lp: 14 }, abilities: [], fixedWeapons: ["Boltpistole", "Seuchenspeier", "Fäuste"] },
        { id: 'fighter', name: "SEUCHENMARINE-STREITER", limit: 1, stats: { apg: 3, b: '5"', rw: '3+', lp: 14 }, abilities: ["<strong>Fauliger Wirbel (1 AP):</strong> W3+2 Schaden an alle innerhalb 2\"."], fixedWeapons: ["Boltpistole", "Flegel des Verfalls"] },
        { id: 'plaguecaster', name: "BÖSARTIGER SEUCHENHEXER", limit: 1, stats: { apg: 3, b: '5"', rw: '3+', lp: 14 }, abilities: ["<strong>Giftschwaden (1 AP):</strong> Giftmarker oder 3 Schaden.", "<strong>Vitalität der Verwesung (1 AP):</strong> Heile Verbündeten."], fixedWeapons: ["Entropie", "Seuchenwind", "Korrumpierter Stab"] },
        { id: 'warrior_1', name: "SEUCHENMARINE-KRIEGER (1)", limit: 1, stats: { apg: 3, b: '5"', rw: '3+', lp: 14 }, abilities: ["<strong>Ekelhafte Fülle:</strong> Verteidigungswürfel 5+ sind kritisch."], fixedWeapons: ["Bolter", "Seuchenmesser"] },
        { id: 'warrior_2', name: "SEUCHENMARINE-KRIEGER (2)", limit: 1, stats: { apg: 3, b: '5"', rw: '3+', lp: 14 }, abilities: ["<strong>Ekelhafte Fülle:</strong> Verteidigungswürfel 5+ sind kritisch."], fixedWeapons: ["Bolter", "Seuchenmesser"] },
        { id: 'warrior_3', name: "SEUCHENMARINE-KRIEGER (3)", limit: 1, stats: { apg: 3, b: '5"', rw: '3+', lp: 14 }, abilities: ["<strong>Ekelhafte Fülle:</strong> Verteidigungswürfel 5+ sind kritisch."], fixedWeapons: ["Bolter", "Seuchenmesser"] },
        { id: 'warrior_4', name: "SEUCHENMARINE-KRIEGER (4)", limit: 1, stats: { apg: 3, b: '5"', rw: '3+', lp: 14 }, abilities: ["<strong>Ekelhafte Fülle:</strong> Verteidigungswürfel 5+ sind kritisch."], fixedWeapons: ["Bolter", "Seuchenmesser"] },
        { id: 'warrior_5', name: "SEUCHENMARINE-KRIEGER (5)", limit: 1, stats: { apg: 3, b: '5"', rw: '3+', lp: 14 }, abilities: ["<strong>Ekelhafte Fülle:</strong> Verteidigungswürfel 5+ sind kritisch."], fixedWeapons: ["Bolter", "Seuchenmesser"] },
        { id: 'icon_bearer', name: "SEUCHENMARINE-IKONENTRÄGER", limit: 1, stats: { apg: 3, b: '5"', rw: '3+', lp: 14 }, abilities: ["<strong>Ikonenträger:</strong> +1 APG für Kontrolle.", "<strong>Ikone der Infektion:</strong> Infektion List 0 BP."], fixedWeapons: ["Boltpistole", "Seuchenmesser"] }
    ]
};

const WEAPONS_DB = {
    en: {
    "Boltgun": {
        "a": "4",
        "h": "3+",
        "d": "3/4",
        "wr": "Toxic*"
    },
    "Fists": {
        "a": "4",
        "h": "3+",
        "d": "3/4",
        "wr": "-"
    },
    "Bolt pistol": {
        "a": "4",
        "h": "3+",
        "d": "3/4",
        "wr": "Range 8\""
    },
    "Plague spewer": {
        "a": "5",
        "h": "2+",
        "d": "3/3",
        "wr": "Range 7\", Saturate, Severe, Torrent 2\", Poison*"
    },
    "Plasma pistol (standard)": {
        "a": "4",
        "h": "3+",
        "d": "3/5",
        "wr": "Range 8\", Piercing 1"
    },
    "Plasma pistol (supercharge)": {
        "a": "4",
        "h": "3+",
        "d": "4/5",
        "wr": "Range 8\", Hot, Lethal 5+, Piercing 1"
    },
    "Plague sword": {
        "a": "5",
        "h": "3+",
        "d": "4/5",
        "wr": "Severe,  Poison*, Toxic* Grandfather’s Blessing: Whenever an enemy operative that has one of your Poison tokens loses one or more wounds within 7\" of this operative, this operative regains up to an equal number of"
    },
    "Flail of Corruption": {
        "a": "5",
        "h": "3+",
        "d": "4/5",
        "wr": "Brutal, Severe, Shock, Poison* FLAIL 1AP Inflict D3+2 damage on each other operative that’s both"
    },
    "Entropy": {
        "a": "4",
        "h": "3+",
        "d": "3/7",
        "wr": "PSYCHIC, Range 7\", Saturate, Severe, Poison*"
    },
    "Plague wind": {
        "a": "6",
        "h": "3+",
        "d": "2/3",
        "wr": "PSYCHIC, Saturate, Severe, Torrent 1\", Poison*"
    },
    "Corrupted staff": {
        "a": "4",
        "h": "3+",
        "d": "3/4",
        "wr": "PSYCHIC, Severe, Shock, Stun, Poison* PLAGUE MARINE , CHAOS, HERETIC ASTARTES, PSYKER, MALIGNANT PLAGUECASTER MALIGNANT PLAGUECASTER 3"
    },
    "Plague knife": {
        "a": "5",
        "h": "3+",
        "d": "3/4",
        "wr": "Severe, Poison* Icon Bearer: Whenever determining control of a marker, treat this operative’s APL stat as 1 higher. Note this isn’t a change to its APL stat, so any changes are cumulative with this."
    },
    "Blight grenade": {
        "a": "4",
        "h": "4+",
        "d": "2/4",
        "wr": "WR Range 6\", Blast 2\", Saturate, Severe, Poison* PLAGUE MARINES: UPDATE LOG\b Rules will be periodically updated to maintain fair balance and interact more smoothly with the game. Rules changes"
    }
},
    de: {
    "Bolter": {
        "a": "4",
        "h": "3+",
        "d": "3/4",
        "wr": "Toxisch*"
    },
    "Fäuste": {
        "a": "4",
        "h": "3+",
        "d": "3/4",
        "wr": "-"
    },
    "Boltpistole": {
        "a": "4",
        "h": "3+",
        "d": "3/4",
        "wr": "Reichweite 8 Zoll"
    },
    "Seuchenspeier": {
        "a": "5",
        "h": "2+",
        "d": "3/3",
        "wr": "Reichweite 7 Zoll, Hagel, Heftig, Schwall 2 Zoll, Gift*"
    },
    "Plasmapistole (Standard)": {
        "a": "4",
        "h": "3+",
        "d": "3/5",
        "wr": "Reichweite 8 Zoll, Durchdringend 1"
    },
    "Plasmapistole (Überladung)": {
        "a": "4",
        "h": "3+",
        "d": "4/5",
        "wr": "Reichweite 8 Zoll, Heiß, Durchdringend 1, Tödlich 5+"
    },
    "Seuchenschwert": {
        "a": "5",
        "h": "3+",
        "d": "4/5",
        "wr": "Heftig,  Gift*, Toxisch* Väterchens Segen: Jedes Mal, wenn ein feindlicher Kämpfer, der ei- nen deiner Giftmarker hat, innerhalb von 7 Zoll um diesen Kämpfer mindestens einen Lebenspunkt verliert, erhält dieser Kämpfer bis zur"
    },
    "Flegel des Verfalls": {
        "a": "5",
        "h": "3+",
        "d": "4/5",
        "wr": "Brutal, Heftig, Schock, Gift* FAULIGER WIRBEL 1 AP Füge jedem anderen sichtbaren Kämpfer innerhalb von 2 Zoll um"
    },
    "Entropie": {
        "a": "4",
        "h": "3+",
        "d": "3/7",
        "wr": "PSIONISCH, Reichweite 7 Zoll, Hagel, Heftig, Gift*"
    },
    "Seuchenwind": {
        "a": "6",
        "h": "3+",
        "d": "2/3",
        "wr": "PSIONISCH, Hagel, Heftig, Schwall 1, Gift*"
    },
    "Korrumpierter Stab": {
        "a": "4",
        "h": "3+",
        "d": "3/4",
        "wr": "PSIONISCH, Heftig, Schock, Betäuben, Gift* SEUCHENMARINE , CHAOS, HÄRETIKER-ASTARTES, PSIONIKER, BÖSARTIGER SEUCHENHEXER BÖSARTIGER SEUCHENHEXER 3"
    },
    "Seuchenmesser": {
        "a": "5",
        "h": "3+",
        "d": "3/4",
        "wr": "Heftig, Gift* Ikonenträger: Jedes Mal, wenn die Kontrolle über einen Marker er- mittelt wird, behandle den APG-Wert dieses Kämpfers, als wäre er 1 höher. Beachte, dass dies den APG-Wert nicht verändert, sodass"
    },
    "Seuchengranate": {
        "a": "4",
        "h": "4+",
        "d": "2/4",
        "wr": "WR Reichweite 6 Zoll, Explosiv 2 Zoll, Hagel, Heftig, Gift* SEUCHENMARINES: UPDATE-LOG\b"
    }
}
};
