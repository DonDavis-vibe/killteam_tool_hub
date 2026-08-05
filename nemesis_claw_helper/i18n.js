const PLOYS_DB = {
    en: {
    "strategy": [
        {
            "name": "The Black Hunt",
            "desc": "Whenever a friendly NEMESIS CLAW is shooting against, fighting against or retaliating against a wounded enemy operative, you can re-roll one of your attack dice.",
            "cost": 1
        },
        {
            "name": "Preysight",
            "desc": "Whenever a friendly NEMESIS CLAW performs Shoot, ranged weapons gain Range 6\" and Seek Light until the end of the action.",
            "cost": 1
        },
        {
            "name": "We Have Come For You",
            "desc": "When activated, if the first action is Charge, you can inflict D3 damage on one enemy operative within its control range when it ends its move.",
            "cost": 1
        },
        {
            "name": "Return to Darkness",
            "desc": "One friendly NEMESIS CLAW can immediately perform a free Fall Back or Reposition action. Must end with Heavy terrain within control range or base under Vantage. Cannot move >4\" or end closer to enemy.",
            "cost": 1
        }
    ],
    "firefight": [
        {
            "name": "Death to the False Emperor",
            "desc": "After rolling attack dice when shooting/fighting/retaliating against an IMPERIUM keyword enemy. Weapons gain Ceaseless (or Relentless if the enemy is also ADEPTUS ASTARTES).",
            "cost": 1
        },
        {
            "name": "Proclivity for Murder",
            "desc": "After a friendly NEMESIS CLAW incapacitates an enemy in control range. They can immediately perform a free Charge or Dash (max 3\").",
            "cost": 1
        },
        {
            "name": "Dirty Fighter",
            "desc": "When retaliating, at the start of Resolve Attack Dice step, resolve one of your successes before the normal order. Cannot resolve any other successes during that sequence.",
            "cost": 1
        },
        {
            "name": "Vox Scream",
            "desc": "When opponent activates an enemy visible to a friendly NEMESIS CLAW. Roll D6. If > enemy APL: opponent cannot activate it. If <= enemy APL: ploy refunded.",
            "cost": 1
        }
    ]
},
    de: {
    "strategy": [
        {
            "name": "Schwarze Jagd",
            "desc": "Wenn ein befreundeter NEMESISKLAUE auf verwundeten Feind schie\u00dft oder gegen ihn k\u00e4mpft/zur\u00fcckschl\u00e4gt, darfst du einen deiner Attackenw\u00fcrfel wiederholen.",
            "cost": 1
        },
        {
            "name": "Jagdsicht",
            "desc": "Wenn ein befreundeter NEMESISKLAUE Schie\u00dfen ausf\u00fchrt: Fernkampfwaffen erhalten f\u00fcr diese Aktion Reichweite 6 Zoll und Zielsucher leicht.",
            "cost": 1
        },
        {
            "name": "Wir sind hinter dir her",
            "desc": "Wenn aktiviert und erste Aktion Angreifen ist: Darf am Ende der Bewegung einem Feind in Kontrollreichweite W3 Schaden zuf\u00fcgen.",
            "cost": 1
        },
        {
            "name": "Zur\u00fcck in die Schatten",
            "desc": "Ein NEMESISKLAUE darf sofort kostenloses Zur\u00fcckziehen oder Positionswechsel ausf\u00fchren. Muss in 1\" zu schwerem Gel\u00e4nde oder unter Aussichtspunkt enden. Max 4\", darf nicht n\u00e4her an Feind enden.",
            "cost": 1
        }
    ],
    "firefight": [
        {
            "name": "Tod dem falschen Imperator",
            "desc": "Nach W\u00fcrfeln gegen IMPERIUM-Feind: Waffen erhalten Unabl\u00e4ssig (oder Unerbittlich, falls Feind auch ADEPTUS ASTARTES ist).",
            "cost": 1
        },
        {
            "name": "Vorliebe f\u00fcr Mord",
            "desc": "Wenn NEMESISKLAUE einen Feind in Kontrollreichweite kampfunf\u00e4hig macht: Darf sofort kostenloses Angreifen oder Sprinten (max 3\") ausf\u00fchren.",
            "cost": 1
        },
        {
            "name": "Schmutziger K\u00e4mpfer",
            "desc": "Beim Zur\u00fcckschlagen darfst du zu Beginn des Abhandelns einen Erfolg vor der normalen Reihenfolge abhandeln. Darfst dann in jener Abfolge keine anderen Erfolge abhandeln.",
            "cost": 1
        },
        {
            "name": "Voxschrei",
            "desc": "Wenn Gegner einen f\u00fcr NEMESISKLAUE sichtbaren Feind aktivieren will: Wirf W6. Wenn > APG des Feindes: Gegner darf ihn nicht aktivieren. Wenn <= APG: BP erstattet.",
            "cost": 1
        }
    ]
}
};

const translations = {
    "en": {
        "legalDisclaimer": "This is an unofficial fan-made utility. Warhammer 40,000, Kill Team, and all associated logos, names, and statistics are \u00a9 Copyright Games Workshop Limited. This tool is provided for free and is not affiliated with, or endorsed by, Games Workshop in any way.",
        "title": "NEMESIS CLAW",
        "tabAssemble": "ASSEMBLE TEAM",
        "tabMatch": "MATCH TRACKER",
        "tabTokens": "TOKENS / TRACKERS",
        "tabRules": "RULES",
        "resetPloysBtn": "RESET PLOYS",
        "builderDesc": "Select 1 Visionary and 5 other operatives. (Max 1 of each specialist, Warriors are unlimited).",
        "selectedText": "Selected:",
        "startMatchBtn": "START MATCH <i class=\"fa-solid fa-arrow-right\"></i>",
        "activeTeam": "ACTIVE TEAM",
        "activeTeamDesc": "Track the Wounds of your operatives.",
        "tokensTitle": "TOKENS & TRACKERS",
        "tokensDesc": "Track Prescience points, Terrorchem tokens, etc.",
        "newTargetBtn": "New Tracker",
        "rulesFaction": "Faction Rules",
        "ruleCustom1": "<strong>Astartes:</strong> Perform either 2 Shoot or 2 Fight actions. If 2 Shoots, one must be a bolt weapon. Can always counteract.",
        "ruleCustom2": "<strong>In Midnight Clad:</strong> Obscured if >8\" from enemy and within 1\" of Heavy terrain (not lower than it) or base under Vantage terrain.",
        "rulesStrategy": "Strategy Ploys",
        "rulesFirefight": "Firefight Ploys",
        "statApg": "APL",
        "statB": "MOVE",
        "statRw": "SAVE",
        "statLp": "WOUNDS",
        "abilitiesHeader": "Abilities"
    },
    "de": {
        "legalDisclaimer": "Dies ist ein inoffizielles, von Fans erstelltes Hilfsprogramm. Warhammer 40.000, Kill Team und alle zugeh\u00f6rigen Logos, Namen und Statistiken sind \u00a9 Copyright Games Workshop Limited. Dieses Tool wird kostenlos zur Verf\u00fcgung gestellt und ist in keiner Weise mit Games Workshop verbunden oder wird von Games Workshop unterst\u00fctzt.",
        "title": "NEMESISKLAUE",
        "tabAssemble": "TEAM BAUEN",
        "tabMatch": "MATCH TRACKER",
        "tabTokens": "MARKER / TRACKER",
        "tabRules": "REGELN",
        "resetPloysBtn": "PLOYS ZUR\u00dcCKSETZEN",
        "builderDesc": "W\u00e4hle 1 Vision\u00e4r und 5 weitere K\u00e4mpfer. (Max 1 pro Spezialist, Krieger unbegrenzt).",
        "selectedText": "Ausgew\u00e4hlt:",
        "startMatchBtn": "MATCH STARTEN <i class=\"fa-solid fa-arrow-right\"></i>",
        "activeTeam": "AKTIVES TEAM",
        "activeTeamDesc": "Verfolge die Lebenspunkte (LP) deiner K\u00e4mpfer.",
        "tokensTitle": "MARKER & TRACKER",
        "tokensDesc": "Verfolge Voraussichtspunkte, Terrorchem-Marker, etc.",
        "newTargetBtn": "Neuer Tracker",
        "rulesFaction": "Fraktionsregeln",
        "ruleCustom1": "<strong>Astartes:</strong> Entweder 2x Schie\u00dfen oder 2x K\u00e4mpfen. Bei 2x Schie\u00dfen muss mindestens einmal eine Boltwaffe genutzt werden. Kann immer Gegenma\u00dfnahmen ausf\u00fchren.",
        "ruleCustom2": "<strong>In Mitternacht Gewandet:</strong> Verdeckt wenn >8\" entfernt und innerhalb 1\" um schweres Gel\u00e4nde (nicht niedriger) oder Base unter Aussichtspunkt-Gel\u00e4nde.",
        "rulesStrategy": "Strategielisten (Ploys)",
        "rulesFirefight": "Gefechtslisten (Tactical)",
        "statApg": "APG",
        "statB": "B",
        "statRw": "RW",
        "statLp": "LP",
        "abilitiesHeader": "F\u00e4higkeiten"
    }
};

const OPERATIVES_DB = {
    en: [
    {
        "id": "leader",
        "name": "NIGHT LORD VISIONARY",
        "limit": 1,
        "isLeader": true,
        "stats": {
            "apg": 3,
            "b": "6\"",
            "rw": "3+",
            "lp": 15
        },
        "abilities": [
            "<strong>Prescience:</strong> Gain D3 Prescience points. Spend 1 to Foreboding (skip activation) or Portent (ignore one attack dice of Normal Dmg).",
            "<strong>Premonition (1AP):</strong> Spend 1 Prescience point to gain 1CP."
        ],
        "fixedWeapons": [
            "Bolt pistol",
            "Plasma pistol (standard)",
            "Plasma pistol (supercharge)",
            "Nostraman chainblade",
            "Power fist",
            "Power maul",
            "Power weapon"
        ]
    },
    {
        "id": "fearmonger",
        "name": "NIGHT LORD FEARMONGER",
        "limit": 1,
        "stats": {
            "apg": 3,
            "b": "6\"",
            "rw": "3+",
            "lp": 14
        },
        "abilities": [
            "<strong>Terrorchem Poison:</strong> Whenever an operative with your Terrorchem token is activated, inflict D3 damage on it.",
            "<strong>Poison Objective (1AP):</strong> Put Terrorchem token on controlled marker. First enemy to contest it gains the token and takes 2D3 damage."
        ],
        "fixedWeapons": [
            "Scoped bolt pistol (short range)",
            "Scoped bolt pistol (long range)",
            "Terrorchem vial",
            "Tainted blade"
        ]
    },
    {
        "id": "gunner",
        "name": "NIGHT LORD GUNNER",
        "limit": 1,
        "stats": {
            "apg": 3,
            "b": "6\"",
            "rw": "3+",
            "lp": 14
        },
        "abilities": [],
        "fixedWeapons": [
            "Bolt pistol",
            "Flamer",
            "Meltagun",
            "Plasma gun (standard)",
            "Plasma gun (supercharge)",
            "Fists"
        ]
    },
    {
        "id": "heavygunner",
        "name": "NIGHT LORD HEAVY GUNNER",
        "limit": 1,
        "stats": {
            "apg": 3,
            "b": "6\"",
            "rw": "3+",
            "lp": 14
        },
        "abilities": [],
        "fixedWeapons": [
            "Bolt pistol",
            "Heavy bolter (focused)",
            "Heavy bolter (sweeping)",
            "Missile launcher (frag)",
            "Missile launcher (krak)",
            "Fists"
        ]
    },
    {
        "id": "screecher",
        "name": "NIGHT LORD SCREECHER",
        "limit": 1,
        "stats": {
            "apg": 3,
            "b": "6\"",
            "rw": "3+",
            "lp": 14
        },
        "abilities": [
            "<strong>Screecher:</strong> Whenever enemy within 3\" shoots/fights/retaliates, opponent cannot re-roll their attack dice.",
            "<strong>Appetite for Cruelty:</strong> Lightning claws have Lethal 4+ against wounded enemies."
        ],
        "fixedWeapons": [
            "Lightning claws"
        ]
    },
    {
        "id": "skinthief",
        "name": "NIGHT LORD SKINTHIEF",
        "limit": 1,
        "stats": {
            "apg": 3,
            "b": "6\"",
            "rw": "3+",
            "lp": 14
        },
        "abilities": [
            "<strong>Flay Them Alive:</strong> Once per turning point, when incapacitating enemy in control range, select another enemy within 6\". It cannot control markers or do mission actions this TP.",
            "<strong>Tyrant of the Skinning Pits:</strong> Normal and Critical Dmg of 3 or more inflicts 1 less dmg in melee."
        ],
        "fixedWeapons": [
            "Bolt pistol",
            "Nostraman chainglaive"
        ]
    },
    {
        "id": "ventrilokar",
        "name": "NIGHT LORD VENTRILOKAR",
        "limit": 1,
        "stats": {
            "apg": 3,
            "b": "6\"",
            "rw": "3+",
            "lp": 14
        },
        "abilities": [
            "<strong>Icon Bearer:</strong> Treat APL as 1 higher for marker control.",
            "<strong>Disconcerting Mimicry (1AP):</strong> Select enemy within 6\" and choose (each option once per battle): -1 APL, Change order, or free Dash (you specify location)."
        ],
        "fixedWeapons": [
            "Bolt pistol",
            "Chainsword"
        ]
    },
    {
        "id": "warrior",
        "name": "NIGHT LORD WARRIOR",
        "limit": 6,
        "stats": {
            "apg": 3,
            "b": "6\"",
            "rw": "3+",
            "lp": 14
        },
        "abilities": [
            "<strong>Cruel Tormenter:</strong> Weapons have Lethal 5+ against injured enemies or enemies with Wounds stat 7 or less."
        ],
        "fixedWeapons": [
            "Bolt pistol",
            "Boltgun",
            "Chainsword",
            "Fists"
        ]
    }
],
    de: [
    {
        "id": "leader",
        "name": "NIGHT-LORD-VISION\u00c4R",
        "limit": 1,
        "isLeader": true,
        "stats": {
            "apg": 3,
            "b": "6\"",
            "rw": "3+",
            "lp": 15
        },
        "abilities": [
            "<strong>Voraussicht:</strong> Erh\u00e4lt 1W3 Voraussichtspunkte. Gib 1 aus f\u00fcr Ahnung (Aktivierung \u00fcberspringen) oder Omen (ignoriere 1 normalen Schaden).",
            "<strong>Eingebung (1AP):</strong> Gib 1 Voraussichtspunkt aus, um 1 BP zu erhalten."
        ],
        "fixedWeapons": [
            "Boltpistole",
            "Plasmapistole (Standard)",
            "Plasmapistole (\u00dcberladung)",
            "Nostramische Kettenklinge",
            "Energiefaust",
            "Energiestreitkolben",
            "Energiewaffe"
        ]
    },
    {
        "id": "fearmonger",
        "name": "NIGHT-LORD-FURCHTBRINGER",
        "limit": 1,
        "stats": {
            "apg": 3,
            "b": "6\"",
            "rw": "3+",
            "lp": 14
        },
        "abilities": [
            "<strong>Terrorchem-Gift:</strong> Wenn Feind mit Terrorchem-Marker aktiviert wird, erleidet er W3 Schaden.",
            "<strong>Missionsziel Vergiften (1AP):</strong> Lege Terrorchem-Marker auf kontrolliertes Missionsziel. Erster Feind, der es beansprucht, erh\u00e4lt Marker und 2W3 Schaden."
        ],
        "fixedWeapons": [
            "Boltpistole mit Zieloptik (kurze Reichweite)",
            "Boltpistole mit Zieloptik (lange Reichweite)",
            "Terrorchem-Phiole",
            "Terrorchem-Klinge"
        ]
    },
    {
        "id": "gunner",
        "name": "NIGHT-LORD-SCH\u00dcTZE",
        "limit": 1,
        "stats": {
            "apg": 3,
            "b": "6\"",
            "rw": "3+",
            "lp": 14
        },
        "abilities": [],
        "fixedWeapons": [
            "Boltpistole",
            "Flammenwerfer",
            "Melter",
            "Plasmawerfer (Standard)",
            "Plasmawerfer (\u00dcberladung)",
            "F\u00e4uste"
        ]
    },
    {
        "id": "heavygunner",
        "name": "NIGHT-LORD-SCHWERER-SCH\u00dcTZE",
        "limit": 1,
        "stats": {
            "apg": 3,
            "b": "6\"",
            "rw": "3+",
            "lp": 14
        },
        "abilities": [],
        "fixedWeapons": [
            "Boltpistole",
            "Schwerer Bolter (gezielt)",
            "Schwerer Bolter (wahllos)",
            "Raketenwerfer (Fragment)",
            "Raketenwerfer (Spreng)",
            "F\u00e4uste"
        ]
    },
    {
        "id": "screecher",
        "name": "NIGHT-LORD-BESTIE",
        "limit": 1,
        "stats": {
            "apg": 3,
            "b": "6\"",
            "rw": "3+",
            "lp": 14
        },
        "abilities": [
            "<strong>Bestie:</strong> Gegner innerhalb 3\" darf keine Attackenw\u00fcrfel wiederholen.",
            "<strong>Grausames Verlangen:</strong> Energieklauen haben T\u00f6dlich 4+ gegen verwundete Feinde."
        ],
        "fixedWeapons": [
            "Energieklauen"
        ]
    },
    {
        "id": "skinthief",
        "name": "NIGHT-LORD-HAUTR\u00c4UBER",
        "limit": 1,
        "stats": {
            "apg": 3,
            "b": "6\"",
            "rw": "3+",
            "lp": 14
        },
        "abilities": [
            "<strong>Lebendig geh\u00e4utet:</strong> Wenn Feind in Nahkampf get\u00f6tet: W\u00e4hle anderen Feind innerhalb 6\". Dieser kann bis n\u00e4chste Runde keine Marker kontrollieren/Aufsammeln.",
            "<strong>Tyrann der Hautgruben:</strong> Schaden von 3+ im Nahkampf wird um 1 reduziert."
        ],
        "fixedWeapons": [
            "Boltpistole",
            "Nostramische Kettengleve"
        ]
    },
    {
        "id": "ventrilokar",
        "name": "NIGHT-LORD-VENTRILOKAR",
        "limit": 1,
        "stats": {
            "apg": 3,
            "b": "6\"",
            "rw": "3+",
            "lp": 14
        },
        "abilities": [
            "<strong>Ikonentr\u00e4ger:</strong> APG gilt als 1 h\u00f6her f\u00fcr Markerkontrolle.",
            "<strong>Verst\u00f6rendes Puppenspiel (1AP):</strong> Feind innerhalb 6\" (jede Option 1x pro Spiel): -1 APG, Befehl \u00e4ndern, oder du l\u00e4sst ihn kostenlos Sprinten (du w\u00e4hlst Zielort)."
        ],
        "fixedWeapons": [
            "Boltpistole",
            "Kettenschwert"
        ]
    },
    {
        "id": "warrior",
        "name": "NIGHT-LORD-KRIEGER",
        "limit": 6,
        "stats": {
            "apg": 3,
            "b": "6\"",
            "rw": "3+",
            "lp": 14
        },
        "abilities": [
            "<strong>Grausame Neigungen:</strong> Waffen haben T\u00f6dlich 5+ gegen verletzte Feinde oder Feinde mit max. 7 LP."
        ],
        "fixedWeapons": [
            "Boltpistole",
            "Bolter",
            "Kettenschwert",
            "F\u00e4uste"
        ]
    }
]
};

const WEAPONS_DB = {
    en: {
    "Bolt pistol": {
        "a": "4",
        "h": "3+",
        "d": "3/4",
        "wr": "Range 8\""
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
    "Nostraman chainblade": {
        "a": "5",
        "h": "3+",
        "d": "4/5",
        "wr": "Rending"
    },
    "Power fist": {
        "a": "5",
        "h": "4+",
        "d": "5/7",
        "wr": "Brutal"
    },
    "Power maul": {
        "a": "5",
        "h": "3+",
        "d": "4/6",
        "wr": "Shock"
    },
    "Power weapon": {
        "a": "5",
        "h": "3+",
        "d": "4/6",
        "wr": "Lethal 5+"
    },
    "Scoped bolt pistol (short range)": {
        "a": "4",
        "h": "3+",
        "d": "3/4",
        "wr": "Range 8\", Lethal 5+"
    },
    "Scoped bolt pistol (long range)": {
        "a": "4",
        "h": "3+",
        "d": "3/4",
        "wr": "-"
    },
    "Terrorchem vial": {
        "a": "5",
        "h": "3+",
        "d": "2/0",
        "wr": "Range 6\", Blast 2\", Devastating 3, Limited 1, Saturate, Terrorchem*"
    },
    "Tainted blade": {
        "a": "5",
        "h": "3+",
        "d": "3/5",
        "wr": "Terrorchem*"
    },
    "Flamer": {
        "a": "4",
        "h": "2+",
        "d": "3/3",
        "wr": "Range 8\", Saturate, Torrent 2\""
    },
    "Meltagun": {
        "a": "4",
        "h": "3+",
        "d": "6/3",
        "wr": "Range 6\", Devastating 4, Piercing 2"
    },
    "Plasma gun (standard)": {
        "a": "4",
        "h": "3+",
        "d": "4/6",
        "wr": "Piercing 1"
    },
    "Plasma gun (supercharge)": {
        "a": "4",
        "h": "3+",
        "d": "5/6",
        "wr": "Hot, Lethal 5+, Piercing 1"
    },
    "Fists": {
        "a": "4",
        "h": "3+",
        "d": "3/4",
        "wr": "-"
    },
    "Heavy bolter (focused)": {
        "a": "5",
        "h": "3+",
        "d": "4/5",
        "wr": "Heavy (Reposition only), Piercing Crits 1"
    },
    "Heavy bolter (sweeping)": {
        "a": "4",
        "h": "3+",
        "d": "4/5",
        "wr": "Heavy (Reposition only), Piercing Crits 1, Torrent 1\""
    },
    "Missile launcher (frag)": {
        "a": "4",
        "h": "3+",
        "d": "3/5",
        "wr": "Blast 2\", Heavy (Reposition only)"
    },
    "Missile launcher (krak)": {
        "a": "4",
        "h": "3+",
        "d": "5/7",
        "wr": "Heavy (Reposition only), Piercing 1"
    },
    "Lightning claws": {
        "a": "5",
        "h": "3+",
        "d": "4/5",
        "wr": "Ceaseless, Lethal 5+"
    },
    "Nostraman chainglaive": {
        "a": "5",
        "h": "3+",
        "d": "4/6",
        "wr": "Rending"
    },
    "Chainsword": {
        "a": "5",
        "h": "3+",
        "d": "4/5",
        "wr": "-"
    },
    "Boltgun": {
        "a": "4",
        "h": "3+",
        "d": "3/4",
        "wr": "-"
    }
},
    de: {
    "Boltpistole": {
        "a": "4",
        "h": "3+",
        "d": "3/4",
        "wr": "Reichweite 8 Zoll"
    },
    "Plasmapistole (Standard)": {
        "a": "4",
        "h": "3+",
        "d": "3/5",
        "wr": "Reichweite 8 Zoll, Durchdringend 1"
    },
    "Plasmapistole (\u00dcberladung)": {
        "a": "4",
        "h": "3+",
        "d": "4/5",
        "wr": "Reichweite 8 Zoll, Hei\u00df, T\u00f6dlich 5+, Durchdringend 1"
    },
    "Nostramische Kettenklinge": {
        "a": "5",
        "h": "3+",
        "d": "4/5",
        "wr": "R\u00fcstungsbrechend"
    },
    "Energiefaust": {
        "a": "5",
        "h": "4+",
        "d": "5/7",
        "wr": "Brutal"
    },
    "Energiestreitkolben": {
        "a": "5",
        "h": "3+",
        "d": "4/6",
        "wr": "Schock"
    },
    "Energiewaffe": {
        "a": "5",
        "h": "3+",
        "d": "4/6",
        "wr": "T\u00f6dlich 5+"
    },
    "Boltpistole mit Zieloptik (kurze Reichweite)": {
        "a": "4",
        "h": "3+",
        "d": "3/4",
        "wr": "Reichweite 8 Zoll, T\u00f6dlich 5+"
    },
    "Boltpistole mit Zieloptik (lange Reichweite)": {
        "a": "4",
        "h": "3+",
        "d": "3/4",
        "wr": "-"
    },
    "Terrorchem-Phiole": {
        "a": "5",
        "h": "3+",
        "d": "2/0",
        "wr": "Reichweite 6 Zoll, Explosiv 2 Zoll, Verheerend 3, Eingeschr\u00e4nkt 1, Hagel, Terrorchem*"
    },
    "Terrorchem-Klinge": {
        "a": "5",
        "h": "3+",
        "d": "3/5",
        "wr": "Terrorchem*"
    },
    "Flammenwerfer": {
        "a": "4",
        "h": "2+",
        "d": "3/3",
        "wr": "Reichweite 8 Zoll, Hagel, Schwall 2 Zoll"
    },
    "Melter": {
        "a": "4",
        "h": "3+",
        "d": "6/3",
        "wr": "Reichweite 6 Zoll, Verheerend 4, Durchdringend 2"
    },
    "Plasmawerfer (Standard)": {
        "a": "4",
        "h": "3+",
        "d": "4/6",
        "wr": "Durchdringend 1"
    },
    "Plasmawerfer (\u00dcberladung)": {
        "a": "4",
        "h": "3+",
        "d": "5/6",
        "wr": "Hei\u00df, T\u00f6dlich 5+, Durchdringend 1"
    },
    "F\u00e4uste": {
        "a": "4",
        "h": "3+",
        "d": "3/4",
        "wr": "-"
    },
    "Schwerer Bolter (gezielt)": {
        "a": "5",
        "h": "3+",
        "d": "4/5",
        "wr": "Schwer (nur Positionswechsel), Krit. durchdringend 1"
    },
    "Schwerer Bolter (wahllos)": {
        "a": "4",
        "h": "3+",
        "d": "4/5",
        "wr": "Schwer (nur Positionswechsel), Krit. durchdringend 1, Schwall 1 Zoll"
    },
    "Raketenwerfer (Fragment)": {
        "a": "4",
        "h": "3+",
        "d": "3/5",
        "wr": "Explosiv 2 Zoll, Schwer (nur Positionswechsel)"
    },
    "Raketenwerfer (Spreng)": {
        "a": "4",
        "h": "3+",
        "d": "5/7",
        "wr": "Schwer (nur Positionswechsel), Durchdringend 1"
    },
    "Energieklauen": {
        "a": "5",
        "h": "3+",
        "d": "4/5",
        "wr": "Unabl\u00e4ssig, T\u00f6dlich 5+"
    },
    "Nostramische Kettengleve": {
        "a": "5",
        "h": "3+",
        "d": "4/6",
        "wr": "R\u00fcstungsbrechend"
    },
    "Kettenschwert": {
        "a": "5",
        "h": "3+",
        "d": "4/5",
        "wr": "-"
    },
    "Bolter": {
        "a": "4",
        "h": "3+",
        "d": "3/4",
        "wr": "-"
    }
}
};
