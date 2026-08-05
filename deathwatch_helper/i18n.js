const PLOYS_DB = {
    en: {
    "strategy": [
        {
            "name": "The Shield That Slays",
            "desc": "Whenever a friendly DEATHWATCH operative is wholly within your opponent\u2019s territory, Normal and Critical Dmg of 4 or more inflicts 1 less damage on it.",
            "cost": 1
        },
        {
            "name": "And They Shall Know No Fear",
            "desc": "You can ignore any changes to the stats of friendly DEATHWATCH operatives from being injured (including their weapons' stats).",
            "cost": 1
        },
        {
            "name": "Mission Tactics",
            "desc": "Select Conceal or Engage. Whenever a friendly DEATHWATCH operative is shooting against or fighting against an enemy operative that has that order, that friendly operative\u2019s weapons have the Balanced weapon rule.",
            "cost": 1
        },
        {
            "name": "The Long Vigil",
            "desc": "Whenever an operative is shooting a friendly DEATHWATCH operative that\u2019s wholly within your territory, you can re-roll one of your defence dice.",
            "cost": 1
        }
    ],
    "firefight": [
        {
            "name": "Advanced Auspex Scan",
            "desc": "Use when a friendly DEATHWATCH operative performs the Shoot action. Until the end of the activation/counteraction, its ranged weapons have the Saturate weapon rule and enemy operatives cannot be obscured.",
            "cost": 1
        },
        {
            "name": "Transhuman Physiology",
            "desc": "Use when an operative is shooting a friendly DEATHWATCH operative, in the Roll Defence Dice step. You can retain one of your normal successes as a critical success instead.",
            "cost": 1
        },
        {
            "name": "Suffer Not the Alien",
            "desc": "Use after rolling your attack dice for a friendly DEATHWATCH operative, if it\u2019s shooting/fighting against an operative without CHAOS or IMPERIUM. You can re-roll any of your attack dice.",
            "cost": 1
        },
        {
            "name": "Auspicator Tracking",
            "desc": "Use when a friendly DEATHWATCH operative is counteracting, before it performs any actions. You can change its order.",
            "cost": 1
        }
    ]
},
    de: {
    "strategy": [
        {
            "name": "Der Schild, der t\u00f6tet",
            "desc": "Solange sich ein befreundeter DEATHWATCH-K\u00e4mpfer vollst\u00e4ndig im Territorium deines Gegners befindet, wird ihm durch normalen und kritischen Schaden von mindestens 4 1 Schaden weniger zugef\u00fcgt.",
            "cost": 1
        },
        {
            "name": "Die keine Furcht kennen",
            "desc": "Du kannst beliebige Ver\u00e4nderungen der Werte (einschlie\u00dflich der Werte der Waffen) befreundeter DEATHWATCH-K\u00e4mpfer durch Verletztsein ignorieren.",
            "cost": 1
        },
        {
            "name": "Missionstaktiken",
            "desc": "W\u00e4hle Offensiv oder Defensiv. Jedes Mal, wenn ein befreundeter DEATHWATCH-K\u00e4mpfer auf einen feindlichen K\u00e4mpfer mit jenem Befehl schie\u00dft oder gegen einen solchen k\u00e4mpft, haben die Waffen jenes befreundeten K\u00e4mpfers die Waffenregel Ausgewogen.",
            "cost": 1
        },
        {
            "name": "Die Lange Wacht",
            "desc": "Jedes Mal, wenn ein K\u00e4mpfer auf einen befreundeten DEATHWATCH-K\u00e4mpfer schie\u00dft, der sich vollst\u00e4ndig in deinem Territorium befindet, kannst du einen deiner Verteidigungsw\u00fcrfel wiederholen.",
            "cost": 1
        }
    ],
    "firefight": [
        {
            "name": "Fortschrittlicher Auspex-Scan",
            "desc": "Setze diese Gefechtslist ein, wenn ein DEATHWATCH-K\u00e4mpfer die Aktion Schie\u00dfen ausf\u00fchrt. Bis zum Ende jener Aktivierung/Gegenma\u00dfnahme haben seine Waffen die Waffenregel Hagel und feindliche K\u00e4mpfer k\u00f6nnen nicht verdeckt sein.",
            "cost": 1
        },
        {
            "name": "Transhumane Physiologie",
            "desc": "Setze diese Gefechtslist im Schritt \u201eVerteidigungsw\u00fcrfel werfen\u201c ein, wenn ein K\u00e4mpfer auf einen befreundeten DEATHWATCH-K\u00e4mpfer schie\u00dft. Du kannst einen deiner normalen Erfolge stattdessen als kritischen Erfolg behalten.",
            "cost": 1
        },
        {
            "name": "Dulde nicht den Xenos",
            "desc": "Setze diese Gefechtslist ein, nachdem du deine Attackenw\u00fcrfel f\u00fcr einen befreundeten DEATHWATCH-K\u00e4mpfer gew\u00fcrfelt hast, wenn er gegen einen K\u00e4mpfer k\u00e4mpft oder auf einen K\u00e4mpfer schie\u00dft, der nicht das Schl\u00fcsselwort CHAOS oder IMPERIUM hat. Du kannst beliebige deiner Attackenw\u00fcrfel wiederholen.",
            "cost": 1
        },
        {
            "name": "Auspicator-Ortung",
            "desc": "Setze diese Gefechtslist ein, wenn ein befreundeter DEATHWATCH-K\u00e4mpfer Gegenma\u00dfnahmen ausf\u00fchrt, bevor er eine Aktion ausf\u00fchrt. Du kannst seinen Befehl \u00e4ndern.",
            "cost": 1
        }
    ]
}
};

const translations = {
    "en": {
        "legalDisclaimer": "This is an unofficial fan-made utility. Warhammer 40,000, Kill Team, and all associated logos, names, and statistics are \u00a9 Copyright Games Workshop Limited. This tool is provided for free and is not affiliated with, or endorsed by, Games Workshop in any way.",
        "title": "DEATHWATCH",
        "tabAssemble": "ASSEMBLE TEAM",
        "tabMatch": "MATCH TRACKER",
        "tabTokens": "TOKENS / TRACKERS",
        "tabRules": "RULES",
        "resetPloysBtn": "RESET PLOYS",
        "builderDesc": "Select 5 DEATHWATCH operatives. (Max 1 of each specialist, max 1 GRAVIS operative)",
        "selectedText": "Selected:",
        "startMatchBtn": "START MATCH <i class=\"fa-solid fa-arrow-right\"></i>",
        "activeTeam": "ACTIVE TEAM",
        "activeTeamDesc": "Track the Wounds of your operatives.",
        "tokensTitle": "TOKENS & TRACKERS",
        "tokensDesc": "Track ammunition reserves and other effects.",
        "newTargetBtn": "New Tracker",
        "rulesFaction": "Faction Rules",
        "ruleCustom1": "<strong>Special Issue Ammunition:</strong> Once per turning point, when a friendly DEATHWATCH operative is performing the Shoot action, select one weapon rule: Blast 1\", Devastating 1, Lethal 5+, Piercing Crits 1, Saturate, Severe. Cannot be used with explosive grenades or melta bombs.",
        "ruleCustom2": "<strong>Veteran Astartes:</strong> Can perform either two Shoot or two Fight actions. (If two Shoot actions and using specific heavy/grenade weapons, 1 additional AP must be spent for the second action). Each friendly DEATHWATCH operative can counteract regardless of its order. Whenever it does, it can perform an additional 1AP action for free during that counteraction (must be different actions).",
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
        "title": "DEATHWATCH",
        "tabAssemble": "TEAM BAUEN",
        "tabMatch": "MATCH TRACKER",
        "tabTokens": "MARKER / TRACKER",
        "tabRules": "REGELN",
        "resetPloysBtn": "PLOYS ZUR\u00dcCKSETZEN",
        "builderDesc": "W\u00e4hle 5 DEATHWATCH-K\u00e4mpfer. (Max 1 pro Spezialist, max 1 GRAVIS-K\u00e4mpfer)",
        "selectedText": "Ausgew\u00e4hlt:",
        "startMatchBtn": "MATCH STARTEN <i class=\"fa-solid fa-arrow-right\"></i>",
        "activeTeam": "AKTIVES TEAM",
        "activeTeamDesc": "Verfolge die Lebenspunkte (LP) deiner K\u00e4mpfer.",
        "tokensTitle": "MARKER & TRACKER",
        "tokensDesc": "Verfolge Munitionsreserven und andere Effekte.",
        "newTargetBtn": "Neuer Tracker",
        "rulesFaction": "Fraktionsregeln",
        "ruleCustom1": "<strong>Spezialmunition:</strong> Einmal pro Wendepunkt bei der Aktion Schie\u00dfen eine Waffenregel w\u00e4hlen: Explosiv 1 Zoll, Verheerend 1, T\u00f6dlich 5+, Krit. durchdringend 1, Hagel, Heftig. Nicht mit Explosivgranaten oder Melterbomben einsetzbar.",
        "ruleCustom2": "<strong>Astartes-Veteranen:</strong> Kann 2x Schie\u00dfen oder 2x K\u00e4mpfen. (Bei 2x Schie\u00dfen mit bestimmten schweren/Granatwaffen kostet zweite Aktion +1 AP). Kann unabh\u00e4ngig vom Befehl Gegenma\u00dfnahmen ausf\u00fchren und dabei eine zus\u00e4tzliche Aktion im Wert von 1 AP kostenlos ausf\u00fchren (Aktionen m\u00fcssen unterschiedlich sein).",
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
        "name": "WATCH SERGEANT",
        "limit": 1,
        "isLeader": true,
        "stats": {
            "apg": 3,
            "b": "6\"",
            "rw": "3+",
            "lp": 15
        },
        "abilities": [
            "<strong>Adaptable Armoury:</strong> Select one additional equipment option.",
            "<strong>Strategic Command:</strong> Once per battle use a Strategy ploy for 0CP. Once per battle use a Firefight ploy for 0CP."
        ],
        "weaponSelect1": [
            "Plasma pistol (standard)",
            "Plasma pistol (supercharge)"
        ],
        "weaponSelect2": [
            "Power weapon"
        ]
    },
    {
        "id": "aegis",
        "name": "AEGIS VETERAN",
        "limit": 1,
        "stats": {
            "apg": 3,
            "b": "6\"",
            "rw": "2+",
            "lp": 15
        },
        "abilities": [],
        "fixedWeapons": [
            "Bolt pistol",
            "Power maul & storm shield"
        ]
    },
    {
        "id": "blademaster",
        "name": "BLADEMASTER VETERAN",
        "limit": 1,
        "stats": {
            "apg": 3,
            "b": "6\"",
            "rw": "3+",
            "lp": 15
        },
        "abilities": [
            "<strong>Adaptive Swordsmanship:</strong> Ignore changes to Hit stat. When fighting, you can resolve one success before the normal order to block."
        ],
        "weaponSelect1": [
            "Special issue bolt pistol",
            "Xenophase blade (duel)",
            "Xenophase blade (phase sweep)"
        ]
    },
    {
        "id": "bombard",
        "name": "BOMBARD VETERAN (GRAVIS)",
        "limit": 1,
        "stats": {
            "apg": 3,
            "b": "5\"",
            "rw": "3+",
            "lp": 18
        },
        "abilities": [],
        "weaponSelect1": [
            "Frag cannon (shell)",
            "Frag cannon (shrapnel)"
        ],
        "fixedWeapons": [
            "Bolt pistol",
            "Fists"
        ]
    },
    {
        "id": "breacher",
        "name": "BREACHER VETERAN (GRAVIS)",
        "limit": 1,
        "stats": {
            "apg": 3,
            "b": "5\"",
            "rw": "3+",
            "lp": 18
        },
        "abilities": [],
        "weaponSelect1": [
            "Auxiliary grenade launcher (frag)",
            "Auxiliary grenade launcher (krak)"
        ],
        "fixedWeapons": [
            "Hellstorm bolt rifle",
            "Melta bomb",
            "Fists"
        ]
    },
    {
        "id": "demolisher",
        "name": "DEMOLISHER VETERAN",
        "limit": 1,
        "stats": {
            "apg": 3,
            "b": "6\"",
            "rw": "3+",
            "lp": 15
        },
        "abilities": [
            "<strong>Brutal Assault:</strong> Gains Brutal when fighting, Ceaseless when charging.",
            "<strong>Aggressive Force:</strong> Dmg of 3+ inflicts 1 less damage on it."
        ],
        "fixedWeapons": [
            "Bolt pistol",
            "Heavy thunder hammer"
        ]
    },
    {
        "id": "disruptor",
        "name": "DISRUPTOR VETERAN",
        "limit": 1,
        "stats": {
            "apg": 3,
            "b": "7\"",
            "rw": "3+",
            "lp": 13
        },
        "abilities": [
            "<strong>Advanced Omni-Scrambler:</strong> Strategic Gambit to prevent enemy activation.",
            "<strong>Auspex Triangulation:</strong> Advanced Auspex Scan costs 0CP under conditions."
        ],
        "fixedWeapons": [
            "Marksman bolt carbine",
            "Fists"
        ]
    },
    {
        "id": "gunner",
        "name": "GUNNER VETERAN",
        "limit": 1,
        "stats": {
            "apg": 3,
            "b": "6\"",
            "rw": "3+",
            "lp": 15
        },
        "abilities": [],
        "weaponSelect1": [
            "Heavy plasma incinerator (standard)",
            "Heavy plasma incinerator (supercharge)"
        ],
        "fixedWeapons": [
            "Bolt pistol",
            "Fists"
        ]
    },
    {
        "id": "headtaker",
        "name": "HEADTAKER VETERAN",
        "limit": 1,
        "stats": {
            "apg": 3,
            "b": "7\"",
            "rw": "3+",
            "lp": 13
        },
        "abilities": [
            "<strong>Grav-chute:</strong> Treat climb vertical distance as 2\", ignore dropping distance.",
            "<strong>Clandestine Headtaker:</strong> Can Charge on Conceal. First strike against invisible operative grants immediate second strike."
        ],
        "fixedWeapons": [
            "Special issue bolt pistol",
            "Combat knives"
        ]
    },
    {
        "id": "horde_slayer",
        "name": "HORDE-SLAYER VETERAN (GRAVIS)",
        "limit": 1,
        "stats": {
            "apg": 3,
            "b": "5\"",
            "rw": "3+",
            "lp": 18
        },
        "abilities": [],
        "weaponSelect1": [
            "Infernus heavy bolter (flame)",
            "Infernus heavy bolter (focused bolt)",
            "Infernus heavy bolter (sweeping bolt)"
        ],
        "fixedWeapons": [
            "Bolt pistol",
            "Fists"
        ]
    },
    {
        "id": "marksman",
        "name": "MARKSMAN VETERAN",
        "limit": 1,
        "stats": {
            "apg": 3,
            "b": "6\"",
            "rw": "3+",
            "lp": 15
        },
        "abilities": [
            "<strong>Vigilant Marksman:</strong> Can perform Guard action regardless of killzone."
        ],
        "weaponSelect1": [
            "Stalker bolt rifle (mobile)",
            "Stalker bolt rifle (heavy)"
        ],
        "fixedWeapons": [
            "Fists"
        ]
    }
],
    de: [
    {
        "id": "leader",
        "name": "WATCH-SERGEANT",
        "limit": 1,
        "isLeader": true,
        "stats": {
            "apg": 3,
            "b": "6\"",
            "rw": "3+",
            "lp": 15
        },
        "abilities": [
            "<strong>Vielseitige Ausr\u00fcstung:</strong> W\u00e4hle eine zus\u00e4tzliche Ausr\u00fcstungsoption.",
            "<strong>Strategische Befehle:</strong> 1x pro Gefecht Strategielist f\u00fcr 0 BP. 1x pro Gefecht Gefechtslist f\u00fcr 0 BP."
        ],
        "weaponSelect1": [
            "Plasmapistole (Standard)",
            "Plasmapistole (\u00dcberladung)"
        ],
        "weaponSelect2": [
            "Energiewaffe"
        ]
    },
    {
        "id": "aegis",
        "name": "AEGIS-VETERAN",
        "limit": 1,
        "stats": {
            "apg": 3,
            "b": "6\"",
            "rw": "2+",
            "lp": 15
        },
        "abilities": [],
        "fixedWeapons": [
            "Boltpistole",
            "Energiestreitkolben & Sturmschild"
        ]
    },
    {
        "id": "blademaster",
        "name": "GLADIUS-VETERAN",
        "limit": 1,
        "stats": {
            "apg": 3,
            "b": "6\"",
            "rw": "3+",
            "lp": 15
        },
        "abilities": [
            "<strong>Flexibler Schwertk\u00e4mpfer:</strong> Ignoriere Trefferwert-\u00c4nderungen. Kann 1 Erfolg vor der normalen Reihenfolge zum Blocken abhandeln."
        ],
        "weaponSelect1": [
            "Spezialboltpistole",
            "Xenos-Phasenklinge (Duell)",
            "Xenos-Phasenklinge (Phasenhieb)"
        ]
    },
    {
        "id": "bombard",
        "name": "VASTATOR-VETERAN (GRAVIS)",
        "limit": 1,
        "stats": {
            "apg": 3,
            "b": "5\"",
            "rw": "3+",
            "lp": 18
        },
        "abilities": [],
        "weaponSelect1": [
            "Schrapnellkanone (Massivgeschoss)",
            "Schrapnellkanone (Schrapnellgeschoss)"
        ],
        "fixedWeapons": [
            "Boltpistole",
            "F\u00e4uste"
        ]
    },
    {
        "id": "breacher",
        "name": "CONFRACTOR-VETERAN (GRAVIS)",
        "limit": 1,
        "stats": {
            "apg": 3,
            "b": "5\"",
            "rw": "3+",
            "lp": 18
        },
        "abilities": [],
        "weaponSelect1": [
            "Unterlauf-Granatwerfer (Fragment)",
            "Unterlauf-Granatwerfer (Spreng)"
        ],
        "fixedWeapons": [
            "H\u00f6llensturm-Boltgewehr",
            "Melterbombe",
            "F\u00e4uste"
        ]
    },
    {
        "id": "demolisher",
        "name": "IRATUS-VETERAN",
        "limit": 1,
        "stats": {
            "apg": 3,
            "b": "6\"",
            "rw": "3+",
            "lp": 15
        },
        "abilities": [
            "<strong>Schonungsloser Angriff:</strong> Erh\u00e4lt Brutal beim K\u00e4mpfen, Unabl\u00e4ssig beim Angreifen.",
            "<strong>Aggressive Kraft:</strong> Schaden von 3+ f\u00fcgt 1 Schaden weniger zu."
        ],
        "fixedWeapons": [
            "Boltpistole",
            "Schwerer Energiehammer"
        ]
    },
    {
        "id": "disruptor",
        "name": "DISRUPTOR-VETERAN",
        "limit": 1,
        "stats": {
            "apg": 3,
            "b": "7\"",
            "rw": "3+",
            "lp": 13
        },
        "abilities": [
            "<strong>Fortschrittlicher Omni-St\u00f6rer:</strong> Verhindert feindliche Aktivierung (Strategisches Man\u00f6ver).",
            "<strong>Auspex-Triangulation:</strong> Fortschrittlicher Auspex-Scan kostet 0 BP unter Bedingungen."
        ],
        "fixedWeapons": [
            "Sch\u00fctzen-Boltkarabiner",
            "F\u00e4uste"
        ]
    },
    {
        "id": "gunner",
        "name": "SCH\u00dcTZE-VETERAN",
        "limit": 1,
        "stats": {
            "apg": 3,
            "b": "6\"",
            "rw": "3+",
            "lp": 15
        },
        "abilities": [],
        "weaponSelect1": [
            "Schwerer Plasmabrenner (Standard)",
            "Schwerer Plasmabrenner (\u00dcberladung)"
        ],
        "fixedWeapons": [
            "Boltpistole",
            "F\u00e4uste"
        ]
    },
    {
        "id": "headtaker",
        "name": "EXEKUTOR-VETERAN",
        "limit": 1,
        "stats": {
            "apg": 3,
            "b": "7\"",
            "rw": "3+",
            "lp": 13
        },
        "abilities": [
            "<strong>Gravschirm:</strong> Klettern ist 2 Zoll, Fallen ignorieren.",
            "<strong>Henker aus den Schatten:</strong> Angreifen aus Verdeckt. Sofortiger zweiter Schlag gegen zuvor unsichtbare Gegner."
        ],
        "fixedWeapons": [
            "Spezialboltpistole",
            "Kampfmesser"
        ]
    },
    {
        "id": "horde_slayer",
        "name": "EXTERMINATOR-VETERAN (GRAVIS)",
        "limit": 1,
        "stats": {
            "apg": 3,
            "b": "5\"",
            "rw": "3+",
            "lp": 18
        },
        "abilities": [],
        "weaponSelect1": [
            "Schwerer Infernus-Bolter (Flammen)",
            "Schwerer Infernus-Bolter (gezielte Boltgeschosse)",
            "Schwerer Infernus-Bolter (wahllose Boltgeschosse)"
        ],
        "fixedWeapons": [
            "Boltpistole",
            "F\u00e4uste"
        ]
    },
    {
        "id": "marksman",
        "name": "SCHARFSCH\u00dcTZE-VETERAN",
        "limit": 1,
        "stats": {
            "apg": 3,
            "b": "6\"",
            "rw": "3+",
            "lp": 15
        },
        "abilities": [
            "<strong>Wachsamer Sch\u00fctze:</strong> Kann Wachsamkeit unabh\u00e4ngig von Killzone ausf\u00fchren."
        ],
        "weaponSelect1": [
            "Stalker-Boltgewehr (in Bewegung)",
            "Stalker-Boltgewehr (schwer)"
        ],
        "fixedWeapons": [
            "F\u00e4uste"
        ]
    }
]
};

const WEAPONS_DB = {
    en: {
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
    "Power weapon": {
        "a": "5",
        "h": "3+",
        "d": "4/6",
        "wr": "Lethal 5+"
    },
    "Bolt pistol": {
        "a": "4",
        "h": "3+",
        "d": "3/4",
        "wr": "Range 8\""
    },
    "Power maul & storm shield": {
        "a": "5",
        "h": "3+",
        "d": "4/6",
        "wr": "Shock, Shield*"
    },
    "Special issue bolt pistol": {
        "a": "4",
        "h": "3+",
        "d": "3/4",
        "wr": "Range 8\", Piercing 1"
    },
    "Xenophase blade (duel)": {
        "a": "5",
        "h": "3+",
        "d": "4/6",
        "wr": "Brutal, Lethal 5+"
    },
    "Xenophase blade (phase sweep)": {
        "a": "4",
        "h": "3+",
        "d": "4/6",
        "wr": "Brutal, Lethal 5+, Phase Sweep*"
    },
    "Frag cannon (shell)": {
        "a": "4",
        "h": "3+",
        "d": "5/7",
        "wr": "Piercing 1"
    },
    "Frag cannon (shrapnel)": {
        "a": "5",
        "h": "3+",
        "d": "4/5",
        "wr": "Torrent 2\""
    },
    "Fists": {
        "a": "4",
        "h": "3+",
        "d": "3/4",
        "wr": "-"
    },
    "Auxiliary grenade launcher (frag)": {
        "a": "4",
        "h": "3+",
        "d": "2/4",
        "wr": "Blast 2\""
    },
    "Auxiliary grenade launcher (krak)": {
        "a": "4",
        "h": "3+",
        "d": "4/5",
        "wr": "Piercing 1"
    },
    "Hellstorm bolt rifle": {
        "a": "4",
        "h": "3+",
        "d": "4/5",
        "wr": "Torrent 1\""
    },
    "Melta bomb": {
        "a": "4",
        "h": "3+",
        "d": "5/3",
        "wr": "Range 3\", Devastating 3, Heavy (Reposition only), Limited 1, Piercing 2"
    },
    "Heavy thunder hammer": {
        "a": "5",
        "h": "4+",
        "d": "6/7",
        "wr": "Shock, Stun"
    },
    "Marksman bolt carbine": {
        "a": "4",
        "h": "3+",
        "d": "3/4",
        "wr": "Lethal 5+"
    },
    "Heavy plasma incinerator (standard)": {
        "a": "5",
        "h": "3+",
        "d": "4/6",
        "wr": "Piercing 1"
    },
    "Heavy plasma incinerator (supercharge)": {
        "a": "5",
        "h": "3+",
        "d": "5/6",
        "wr": "Hot, Lethal 5+, Piercing 1"
    },
    "Combat knives": {
        "a": "5",
        "h": "3+",
        "d": "4/5",
        "wr": "-"
    },
    "Infernus heavy bolter (flame)": {
        "a": "5",
        "h": "2+",
        "d": "3/3",
        "wr": "Range 8\", Saturate, Torrent 2\""
    },
    "Infernus heavy bolter (focused bolt)": {
        "a": "5",
        "h": "3+",
        "d": "4/5",
        "wr": "Piercing Crits 1"
    },
    "Infernus heavy bolter (sweeping bolt)": {
        "a": "4",
        "h": "3+",
        "d": "4/5",
        "wr": "Piercing Crits 1, Torrent 1\""
    },
    "Stalker bolt rifle (mobile)": {
        "a": "4",
        "h": "3+",
        "d": "3/4",
        "wr": "-"
    },
    "Stalker bolt rifle (heavy)": {
        "a": "4",
        "h": "2+",
        "d": "3/5",
        "wr": "Heavy (Dash only), Lethal 5+, Piercing Crits 1"
    }
},
    de: {
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
        "wr": "Reichweite 8 Zoll, Hei\u00df, Durchdringend 1, T\u00f6dlich 5+"
    },
    "Energiewaffe": {
        "a": "5",
        "h": "3+",
        "d": "4/6",
        "wr": "T\u00f6dlich 5+"
    },
    "Boltpistole": {
        "a": "4",
        "h": "3+",
        "d": "3/4",
        "wr": "Reichweite 8 Zoll"
    },
    "Energiestreitkolben & Sturmschild": {
        "a": "5",
        "h": "3+",
        "d": "4/6",
        "wr": "Schock, Schild*"
    },
    "Spezialboltpistole": {
        "a": "4",
        "h": "3+",
        "d": "3/4",
        "wr": "Reichweite 8 Zoll, Durchdringend 1"
    },
    "Xenos-Phasenklinge (Duell)": {
        "a": "5",
        "h": "3+",
        "d": "4/6",
        "wr": "Brutal, T\u00f6dlich 5+"
    },
    "Xenos-Phasenklinge (Phasenhieb)": {
        "a": "4",
        "h": "3+",
        "d": "4/6",
        "wr": "Brutal, T\u00f6dlich 5+, Phasenhieb*"
    },
    "Schrapnellkanone (Massivgeschoss)": {
        "a": "4",
        "h": "3+",
        "d": "5/7",
        "wr": "Durchdringend 1"
    },
    "Schrapnellkanone (Schrapnellgeschoss)": {
        "a": "5",
        "h": "3+",
        "d": "4/5",
        "wr": "Schwall 2 Zoll"
    },
    "F\u00e4uste": {
        "a": "4",
        "h": "3+",
        "d": "3/4",
        "wr": "-"
    },
    "Unterlauf-Granatwerfer (Fragment)": {
        "a": "4",
        "h": "3+",
        "d": "2/4",
        "wr": "Explosiv 2 Zoll"
    },
    "Unterlauf-Granatwerfer (Spreng)": {
        "a": "4",
        "h": "3+",
        "d": "4/5",
        "wr": "Durchdringend 1"
    },
    "H\u00f6llensturm-Boltgewehr": {
        "a": "4",
        "h": "3+",
        "d": "4/5",
        "wr": "Schwall 1 Zoll"
    },
    "Melterbombe": {
        "a": "4",
        "h": "3+",
        "d": "5/3",
        "wr": "Reichweite 3 Zoll, Verheerend 3, Durchdringend 2, Schwer (nur Positionswechsel), Beschr\u00e4nkt 1"
    },
    "Schwerer Energiehammer": {
        "a": "5",
        "h": "4+",
        "d": "6/7",
        "wr": "Bet\u00e4uben, Schock"
    },
    "Sch\u00fctzen-Boltkarabiner": {
        "a": "4",
        "h": "3+",
        "d": "3/4",
        "wr": "T\u00f6dlich 5+"
    },
    "Schwerer Plasmabrenner (Standard)": {
        "a": "5",
        "h": "3+",
        "d": "4/6",
        "wr": "Durchdringend 1"
    },
    "Schwerer Plasmabrenner (\u00dcberladung)": {
        "a": "5",
        "h": "3+",
        "d": "5/6",
        "wr": "Hei\u00df, Durchdringend 1, T\u00f6dlich 5+"
    },
    "Kampfmesser": {
        "a": "5",
        "h": "3+",
        "d": "4/5",
        "wr": "-"
    },
    "Schwerer Infernus-Bolter (Flammen)": {
        "a": "5",
        "h": "2+",
        "d": "3/3",
        "wr": "Reichweite 8 Zoll, Hagel, Schwall 2 Zoll"
    },
    "Schwerer Infernus-Bolter (gezielte Boltgeschosse)": {
        "a": "5",
        "h": "3+",
        "d": "4/5",
        "wr": "Krit. durchdringend 1"
    },
    "Schwerer Infernus-Bolter (wahllose Boltgeschosse)": {
        "a": "4",
        "h": "3+",
        "d": "4/5",
        "wr": "Krit. durchdringend 1, Schwall 1 Zoll"
    },
    "Stalker-Boltgewehr (in Bewegung)": {
        "a": "4",
        "h": "3+",
        "d": "3/4",
        "wr": "-"
    },
    "Stalker-Boltgewehr (schwer)": {
        "a": "4",
        "h": "2+",
        "d": "3/5",
        "wr": "Schwer (nur Sprinten), T\u00f6dlich 5+, Krit. durchdringend 1"
    }
}
};
