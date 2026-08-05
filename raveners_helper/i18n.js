const PLOYS_DB = {
    en: {
    "strategy": [
        {
            "name": "Death From Below",
            "desc": "Whenever a friendly RAVENER is fighting: If it performed Burrow, melee weapons have Balanced. If on TUNNEL, melee weapons have Ceaseless.",
            "cost": 1
        },
        {
            "name": "Tunnel Lurkers",
            "desc": "Friendly RAVENER on TUNNEL is in cover unless within 2\" of active operative. Treat as Light terrain cover.",
            "cost": 1
        },
        {
            "name": "Whipcord Emergence",
            "desc": "When shooting a friendly RAVENER: If it Burrowed this turn, re-roll one defence dice. If on TUNNEL, re-roll any defence dice.",
            "cost": 1
        },
        {
            "name": "Writhe Out of Sight",
            "desc": "Select one friendly RAVENER in the killzone. It can immediately perform a free Burrow action. If within 2\" of TUNNEL, it can first perform a free Fall Back or Reposition.",
            "cost": 1
        }
    ],
    "firefight": [
        {
            "name": "Slithering Evasion",
            "desc": "During a friendly RAVENER's activation/counteraction: Can perform Fall Back for 1 less AP. Can perform Charge while within control range of an enemy, and can leave that control range.",
            "cost": 1
        },
        {
            "name": "Subterranean Horror",
            "desc": "When an enemy performs Fight and selects a friendly RAVENER on your TUNNEL. You resolve the first attack dice.",
            "cost": 1
        },
        {
            "name": "Burrowing Strike",
            "desc": "When a friendly RAVENER performs Burrow. Before it's removed or after setting it up on TUNNEL, inflict D3+1 damage on each enemy within its control range. Cannot use in Strategy phase or during Felltalon's Toxic Lunge.",
            "cost": 1
        },
        {
            "name": "Death Frenzy",
            "desc": "When a friendly RAVENER is incapacitated. Before removal, inflict D3 damage on each enemy in control range. If it's a VENOMSPITTER with Distend Dorsal Sac, inflict 2D3 instead.",
            "cost": 1
        }
    ]
},
    de: {
    "strategy": [
        {
            "name": "Tod von unten",
            "desc": "Wenn ein befreundeter VENATOR k\u00e4mpft: Nach Tunnelgr\u00e4ber in dieser Aktivierung haben Nahkampfwaffen Ausgewogen. Auf TUNNEL haben Nahkampfwaffen Unabl\u00e4ssig.",
            "cost": 1
        },
        {
            "name": "Tunnelschleicher",
            "desc": "Befreundeter VENATOR auf TUNNEL ist in Deckung (au\u00dfer innerhalb 2 Zoll um aktiven K\u00e4mpfer). Z\u00e4hlt als Deckung durch leichtes Gel\u00e4nde.",
            "cost": 1
        },
        {
            "name": "Hervorschnellen",
            "desc": "Wenn auf befreundeten VENATOR geschossen wird: Nach Tunnelgr\u00e4ber in diesem Wendepunkt darfst du 1 Verteidigungsw\u00fcrfel wiederholen. Auf TUNNEL darfst du beliebige wiederholen.",
            "cost": 1
        },
        {
            "name": "Au\u00dfer Sicht schl\u00e4ngeln",
            "desc": "W\u00e4hle befreundeten VENATOR in der Killzone. Er kann kostenlose Aktion Tunnelgr\u00e4ber ausf\u00fchren. Innerhalb von 2 Zoll um TUNNEL kann er davor kostenlos Zur\u00fcckziehen oder Positionswechsel ausf\u00fchren.",
            "cost": 1
        }
    ],
    "firefight": [
        {
            "name": "Entgleiten",
            "desc": "W\u00e4hrend Aktivierung/Gegenma\u00dfnahme eines VENATORS: Zur\u00fcckziehen kostet 1 AP weniger. Kann Angreifen ausf\u00fchren, auch wenn er in Kontrollreichweite eines Feindes startet (und diese verlassen).",
            "cost": 1
        },
        {
            "name": "Unterirdischer Schrecken",
            "desc": "Wenn ein feindlicher K\u00e4mpfer K\u00e4mpfen ausf\u00fchrt und einen befreundeten VENATOR auf TUNNEL w\u00e4hlt. Du handelst den ersten Attackenw\u00fcrfel ab.",
            "cost": 1
        },
        {
            "name": "Angriff aus dem Boden",
            "desc": "Wenn VENATOR Tunnelgr\u00e4ber ausf\u00fchrt. Bevor er entfernt wird oder nachdem er auf TUNNEL aufgestellt wird: W3+1 Schaden f\u00fcr jeden Feind in Kontrollreichweite. Nicht in Strategiephase oder w\u00e4hrend Todeskralles Giftiger Vorsto\u00df.",
            "cost": 1
        },
        {
            "name": "Todesraserei",
            "desc": "Wenn befreundeter VENATOR kampfunf\u00e4hig wird. Vor dem Entfernen: W3 Schaden f\u00fcr jeden Feind in Kontrollreichweite. Wenn Giftspeier mit R\u00fcckenbeutel aufbl\u00e4hen, stattdessen 2W3 Schaden.",
            "cost": 1
        }
    ]
}
};

const translations = {
    "en": {
        "legalDisclaimer": "This is an unofficial fan-made utility. Warhammer 40,000, Kill Team, and all associated logos, names, and statistics are \u00a9 Copyright Games Workshop Limited. This tool is provided for free and is not affiliated with, or endorsed by, Games Workshop in any way.",
        "title": "RAVENERS",
        "tabAssemble": "ASSEMBLE TEAM",
        "tabMatch": "MATCH TRACKER",
        "tabTokens": "TOKENS / TRACKERS",
        "tabRules": "RULES",
        "resetPloysBtn": "RESET PLOYS",
        "builderDesc": "Select 1 Prime and 4 other Raveners. (Max 1 of each specialist, Warriors are unlimited).",
        "selectedText": "Selected:",
        "startMatchBtn": "START MATCH <i class=\"fa-solid fa-arrow-right\"></i>",
        "activeTeam": "ACTIVE TEAM",
        "activeTeamDesc": "Track the Wounds of your operatives.",
        "tokensTitle": "TOKENS & TRACKERS",
        "tokensDesc": "Track poison tokens, subterranean ambush, etc.",
        "newTargetBtn": "New Tracker",
        "rulesFaction": "Faction Rules",
        "ruleCustom1": "<strong>Burrow (1AP):</strong> If underground, set up on TUNNEL (subtract 2\" from Move). If in killzone on TUNNEL, remove from killzone (now underground).",
        "ruleCustom2": "<strong>Predatory Instincts:</strong> Can perform two Fight actions. Can counteract regardless of order: change order or free Burrow action.",
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
        "title": "VENATOREN",
        "tabAssemble": "TEAM BAUEN",
        "tabMatch": "MATCH TRACKER",
        "tabTokens": "MARKER / TRACKER",
        "tabRules": "REGELN",
        "resetPloysBtn": "PLOYS ZUR\u00dcCKSETZEN",
        "builderDesc": "W\u00e4hle 1 Alpha und 4 weitere Venatoren. (Max 1 pro Spezialist, Krieger unbegrenzt).",
        "selectedText": "Ausgew\u00e4hlt:",
        "startMatchBtn": "MATCH STARTEN <i class=\"fa-solid fa-arrow-right\"></i>",
        "activeTeam": "AKTIVES TEAM",
        "activeTeamDesc": "Verfolge die Lebenspunkte (LP) deiner K\u00e4mpfer.",
        "tokensTitle": "MARKER & TRACKER",
        "tokensDesc": "Verfolge Giftmarker, \u00dcberfall aus dem Untergrund, etc.",
        "newTargetBtn": "Neuer Tracker",
        "rulesFaction": "Fraktionsregeln",
        "ruleCustom1": "<strong>Tunnelgr\u00e4ber (1AP):</strong> Wenn unter der Erde, auf TUNNEL aufstellen (-2 Zoll Bewegung). Wenn in Killzone auf TUNNEL, entfernen (jetzt unter der Erde).",
        "ruleCustom2": "<strong>Raubtierinstinkte:</strong> Kann 2x K\u00e4mpfen. Kann unabh\u00e4ngig vom Befehl Gegenma\u00dfnahmen ausf\u00fchren: Befehl \u00e4ndern oder kostenlose Aktion Tunnelgr\u00e4ber.",
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
        "name": "RAVENER PRIME",
        "limit": 1,
        "isLeader": true,
        "stats": {
            "apg": 3,
            "b": "7\"",
            "rw": "5+",
            "lp": 21
        },
        "abilities": [
            "<strong>Neuropredatory Crest:</strong> Enemy total APL -1 for marker control if within 3\". Enemy within 3\" costs +1AP for Pick Up Marker/mission actions and cannot re-roll dice.",
            "<strong>Synaptic Link:</strong> STRATEGIC GAMBIT. Roll D6 vs turning point. Gain CP, take damage, or nothing."
        ],
        "fixedWeapons": [
            "Tail blade",
            "Scything talons & rending claws"
        ]
    },
    {
        "id": "felltalon",
        "name": "FELLTALON",
        "limit": 1,
        "stats": {
            "apg": 3,
            "b": "7\"",
            "rw": "5+",
            "lp": 20
        },
        "abilities": [
            "<strong>Toxic Lunge (1AP):</strong> Inflict D3+2 dmg and Poison token to enemy within 2\" or on TUNNEL. Can perform while underground."
        ],
        "fixedWeapons": [
            "Pincer tail",
            "Toxic glands",
            "Toxic scythes"
        ]
    },
    {
        "id": "tremorscythe",
        "name": "TREMORSCYTHE",
        "limit": 1,
        "stats": {
            "apg": 3,
            "b": "7\"",
            "rw": "5+",
            "lp": 20
        },
        "abilities": [
            "<strong>Subterranean Ambush:</strong> Interrupt enemy moving >2\" near TUNNEL from underground to activate/counteract and fight/shoot them.",
            "<strong>Hypersensory Hunter:</strong> Can Charge on Conceal if Burrowed same activation."
        ],
        "fixedWeapons": [
            "Pincer tail",
            "Scything talons & rending claws"
        ]
    },
    {
        "id": "venomspitter",
        "name": "VENOMSPITTER",
        "limit": 1,
        "stats": {
            "apg": 3,
            "b": "7\"",
            "rw": "5+",
            "lp": 20
        },
        "abilities": [
            "<strong>Distend Dorsal Sac (1AP):</strong> Venom bolt profiles gain Lethal 5+, +1 Atk, lose Range 8\" until shot, used again, or Burrowed."
        ],
        "fixedWeapons": [
            "Pincer tail",
            "Venom bolt (blast)",
            "Venom bolt (focused)",
            "Scything talons"
        ]
    },
    {
        "id": "wrecker",
        "name": "WRECKER",
        "limit": 1,
        "stats": {
            "apg": 3,
            "b": "7\"",
            "rw": "4+",
            "lp": 20
        },
        "abilities": [
            "<strong>Reinforced Carapace:</strong> Normal and Critical Dmg of 4+ inflicts 1 less damage."
        ],
        "fixedWeapons": [
            "Bone mace",
            "Scything talons & crushing claws"
        ]
    },
    {
        "id": "warrior",
        "name": "WARRIOR",
        "limit": 4,
        "stats": {
            "apg": 3,
            "b": "7\"",
            "rw": "5+",
            "lp": 20
        },
        "abilities": [
            "<strong>Instinctive Behaviour:</strong> Weapons gain Lethal 5+ against wounded enemies or enemies that Fell Back this turning point."
        ],
        "fixedWeapons": [
            "Pincer tail",
            "Scything talons"
        ]
    }
],
    de: [
    {
        "id": "leader",
        "name": "VENATOR-ALPHA",
        "limit": 1,
        "isLeader": true,
        "stats": {
            "apg": 3,
            "b": "7\"",
            "rw": "5+",
            "lp": 21
        },
        "abilities": [
            "<strong>Neuropr\u00e4datorischer Kamm:</strong> Feindliche APG -1 f\u00fcr Markerkontrolle innerhalb 3\". Feinde innerhalb 3\" zahlen +1 AP f\u00fcr Marker aufsammeln/Missionsaktionen und d\u00fcrfen W\u00fcrfel nicht wiederholen.",
            "<strong>Synapsenverbindung:</strong> STRATEGISCHES MAN\u00d6VER. W6 gegen Wendepunkt: BP erhalten, Schaden nehmen oder nichts."
        ],
        "fixedWeapons": [
            "Klingenschwanz",
            "Sensenklauen und Zangenkrallen (Alpha)"
        ]
    },
    {
        "id": "felltalon",
        "name": "TODESKRALLE",
        "limit": 1,
        "stats": {
            "apg": 3,
            "b": "7\"",
            "rw": "5+",
            "lp": 20
        },
        "abilities": [
            "<strong>Giftiger Vorsto\u00df (1AP):</strong> W3+2 Schaden und Giftmarker auf Feind innerhalb 2\" oder auf TUNNEL. Auch aus dem Untergrund m\u00f6glich."
        ],
        "fixedWeapons": [
            "Scherenschwanz",
            "Giftdr\u00fcsen",
            "Giftsensen"
        ]
    },
    {
        "id": "tremorscythe",
        "name": "VIBRATIONSHIPPE",
        "limit": 1,
        "stats": {
            "apg": 3,
            "b": "7\"",
            "rw": "5+",
            "lp": 20
        },
        "abilities": [
            "<strong>\u00dcberfall aus dem Untergrund:</strong> Unterbrich Feind, der sich >2\" nahe TUNNEL bewegt, um zu aktivieren und ihn zu bek\u00e4mpfen.",
            "<strong>Hypersensorischer J\u00e4ger:</strong> Kann Angreifen aus Verdeckt, wenn in derselben Aktivierung Tunnelgr\u00e4ber genutzt."
        ],
        "fixedWeapons": [
            "Scherenschwanz",
            "Sensenklauen und Zangenkrallen (Alpha)"
        ]
    },
    {
        "id": "venomspitter",
        "name": "GIFTSPEIER",
        "limit": 1,
        "stats": {
            "apg": 3,
            "b": "7\"",
            "rw": "5+",
            "lp": 20
        },
        "abilities": [
            "<strong>R\u00fcckenbeutel aufbl\u00e4hen (1AP):</strong> Giftgeschoss erh\u00e4lt T\u00f6dlich 5+, +1 Attacke, verliert Reichweite 8\" bis geschossen oder Tunnelgr\u00e4ber."
        ],
        "fixedWeapons": [
            "Scherenschwanz",
            "Giftgeschoss (explosiv)",
            "Giftgeschoss (konzentriert)",
            "Sensenklauen"
        ]
    },
    {
        "id": "wrecker",
        "name": "ZERST\u00d6RER",
        "limit": 1,
        "stats": {
            "apg": 3,
            "b": "7\"",
            "rw": "4+",
            "lp": 20
        },
        "abilities": [
            "<strong>Verst\u00e4rkter Panzer:</strong> Normaler/Kritischer Schaden von 4+ wird um 1 reduziert."
        ],
        "fixedWeapons": [
            "Knochenkeule",
            "Sensenklauen und Zangenkrallen (Zerst\u00f6rer)"
        ]
    },
    {
        "id": "warrior",
        "name": "KRIEGER",
        "limit": 4,
        "stats": {
            "apg": 3,
            "b": "7\"",
            "rw": "5+",
            "lp": 20
        },
        "abilities": [
            "<strong>Instinktives Verhalten:</strong> Waffen haben T\u00f6dlich 5+ gegen verwundete Feinde oder solche, die sich in diesem Wendepunkt zur\u00fcckgezogen haben."
        ],
        "fixedWeapons": [
            "Scherenschwanz",
            "Sensenklauen"
        ]
    }
]
};

const WEAPONS_DB = {
    en: {
    "Tail blade": {
        "a": "4",
        "h": "3+",
        "d": "3/4",
        "wr": "Range 3\", Rending, Silent"
    },
    "Scything talons & rending claws": {
        "a": "5",
        "h": "3+",
        "d": "4/5",
        "wr": "Rending"
    },
    "Pincer tail": {
        "a": "4",
        "h": "3+",
        "d": "3/4",
        "wr": "Range 3\", Silent"
    },
    "Toxic glands": {
        "a": "4",
        "h": "3+",
        "d": "3/4",
        "wr": "Range 6\", Silent, Poison*"
    },
    "Toxic scythes": {
        "a": "5",
        "h": "3+",
        "d": "4/5",
        "wr": "Lethal 5+, Shock, Poison*"
    },
    "Venom bolt (blast)": {
        "a": "4",
        "h": "3+",
        "d": "3/5",
        "wr": "Range 8\", Blast 2\", Poison*"
    },
    "Venom bolt (focused)": {
        "a": "4",
        "h": "3+",
        "d": "4/5",
        "wr": "Range 8\", Piercing 1, Poison*"
    },
    "Scything talons": {
        "a": "5",
        "h": "3+",
        "d": "4/5",
        "wr": "-"
    },
    "Bone mace": {
        "a": "4",
        "h": "3+",
        "d": "3/4",
        "wr": "Range 3\", Piercing 1, Silent"
    },
    "Scything talons & crushing claws": {
        "a": "5",
        "h": "3+",
        "d": "4/5",
        "wr": "Crush*"
    }
},
    de: {
    "Klingenschwanz": {
        "a": "4",
        "h": "3+",
        "d": "3/4",
        "wr": "Reichweite 3 Zoll, R\u00fcstungsbrechend, Schalld\u00e4mpfer"
    },
    "Sensenklauen und Zangenkrallen (Alpha)": {
        "a": "5",
        "h": "3+",
        "d": "4/5",
        "wr": "R\u00fcstungsbrechend"
    },
    "Scherenschwanz": {
        "a": "4",
        "h": "3+",
        "d": "3/4",
        "wr": "Reichweite 3 Zoll, Schalld\u00e4mpfer"
    },
    "Giftdr\u00fcsen": {
        "a": "4",
        "h": "3+",
        "d": "3/4",
        "wr": "Reichweite 6 Zoll, Gift*, Schalld\u00e4mpfer"
    },
    "Giftsensen": {
        "a": "5",
        "h": "3+",
        "d": "4/5",
        "wr": "Gift*, Schock, T\u00f6dlich 5+"
    },
    "Giftgeschoss (explosiv)": {
        "a": "4",
        "h": "3+",
        "d": "3/5",
        "wr": "Reichweite 8 Zoll, Gift*, Explosiv 2 Zoll"
    },
    "Giftgeschoss (konzentriert)": {
        "a": "4",
        "h": "3+",
        "d": "4/5",
        "wr": "Reichweite 8 Zoll, Durchdringend 1, Gift*"
    },
    "Sensenklauen": {
        "a": "5",
        "h": "3+",
        "d": "4/5",
        "wr": "-"
    },
    "Knochenkeule": {
        "a": "4",
        "h": "3+",
        "d": "3/4",
        "wr": "Reichweite 3 Zoll, Durchdringend 1, Schalld\u00e4mpfer"
    },
    "Sensenklauen und Zangenkrallen (Zerst\u00f6rer)": {
        "a": "5",
        "h": "3+",
        "d": "4/5",
        "wr": "Zermalmen*"
    }
}
};
