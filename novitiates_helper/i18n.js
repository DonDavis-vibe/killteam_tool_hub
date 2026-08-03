
const PLOYS_DB = {
    "en": {
        "strategy": [
            {
                "name": "Blessed Rejuvenation",
                "desc": "Whenever you spend Faith points, at the end of that action, the friendly operative you spent them on can regain up to D3 lost wounds. Note this ploy has no effect if that friendly operative was incapacitated during that action, or if the ACT OF FAITH doesn't cost any Faith points, e.g. Auto-chastisers equipment."
            },
            {
                "name": "Righteous Advance",
                "desc": "Up to one third of the friendly NOVITIATE operatives in the killzone (rounding down, to a minimum of 1) can immediately perform a free Dash action in an order of your choice, but each that does so must end that move closer to its closest enemy operative, its closest objective marker or your opponent's drop zone (you can choose separately for each). You cannot use this ploy during the first turning point."
            },
            {
                "name": "Ardent Vengeance",
                "desc": "Whenever a friendly NOVITIATE operative is shooting against, fighting against or retaliating against an expended enemy operative, that friendly operative's weapons have the Punishing weapon rule."
            },
            {
                "name": "Defenders of the Faith",
                "desc": "Whenever an operative is shooting against, fighting against or retaliating against a friendly NOVITIATE operative that contests an objective marker or one of your mission markers, in the Resolve Attack Dice step of that sequence, you can halve the damage inflicted (rounding up and to a minimum of 2) on that friendly operative from one success."
            }
        ],
        "firefight": [
            {
                "name": "Blinding Aura",
                "desc": "Use this firefight ploy when an enemy operative is performing the Shoot action and selects a friendly NOVITIATE operative as the valid target. Until the end of that activation/counteraction, while that friendly operative is more than 2\" from that enemy operative, your opponent cannot select it as a valid target. If there are no other valid targets that your opponent can select, that action ends (it's not cancelled, so that operative has still performed it). Note this ploy has no effect if it's not the selected operative, e.g. if it's a secondary target from the Blast weapon rule."
            },
            {
                "name": "Guided by Faith",
                "desc": "Use this firefight ploy when a friendly NOVITIATE operative is performing the Shoot action and you're selecting a ranged weapon. Until the end of that action, whenever that operative is shooting an operative within 6\" of it, that weapon has the Seek Light weapon rule."
            },
            {
                "name": "Glorious Martyrdom",
                "desc": "Use this firefight ploy when a friendly NOVITIATE operative is incapacitated, before it's removed from the killzone. For each enemy operative visible to and within 2\" of it, you gain 1 Faith point and inflict D3 damage on that enemy operative (roll separately for each)."
            },
            {
                "name": "Blazing Inferno",
                "desc": "Use this firefight ploy when a friendly NOVITIATE operative is shooting with a Ministorum flamer and you inflict damage with any critical successes. The target gains one of your Blaze tokens (if it doesn't already have one). Whenever an operative that has one of your Blaze tokens is activated: Inflict D3 damage on it. Its controlling player can subtract 1 from that operative's APL stat until the end of that activation to remove that token. Note that this must be done before that operative performs any actions during that activation."
            }
        ]
    },
    "de": {
        "strategy": [
            {
                "name": "Wohltuende Verjüngung",
                "desc": "Jedes Mal, wenn du Glaubenspunkte ausgibst, kann am Ende jener Aktion die befreundete Kämpferin, für die du sie ausgegeben hast, bis zu W3 verlorene Lebenspunkte zurückerhalten. Beachte, dass diese List keinen Effekt hat, falls jene befreundete Kämpferin während jener Aktion kampfunfähig wurde oder der GLAUBENSAKT keine Glaubenspunkte kostet, z. B. durch die Ausrüstung Autogeißeln."
            },
            {
                "name": "Rechtschaffener Vormarsch",
                "desc": "Bis zu ein Drittel der befreundeten NOVIZINNEN-Kämpferinnen in der Killzone (abgerundet, bis zu einem Minimum von 1) kann sofort eine kostenlose Aktion Sprinten in einer Reihenfolge deiner Wahl ausführen, aber jede Kämpferin, der das tut, muss jene Bewegung näher am für sie nächsten feindlichen Kämpfer, am für sie nächsten Missionszielmarker oder an der Landezone deines Gegners beenden (du kannst für jede einzeln wählen). Du kannst diese List nicht im ersten Wendepunkt einsetzen."
            },
            {
                "name": "Glühende Rache",
                "desc": "Jedes Mal, wenn eine befreundete NOVIZINNEN-Kämpferin auf einen eingesetzten feindlichen Kämpfer schießt, gegen ihn kämpft oder zurückschlägt, haben die Waffen jener befreundeten Kämpferin die Waffenregel Peinigend."
            },
            {
                "name": "Verteidigerinnen des Glaubens",
                "desc": "Jedes Mal, wenn ein Kämpfer auf eine befreundete NOVIZINNEN-Kämpferin, die einen Missionszielmarker oder einen deiner missionsspezifischen Marker beansprucht, schießt oder gegen sie kämpft oder zurückschlägt, kannst du im Schritt „Attackenwürfel abhandeln“ jener Abfolge den Schaden halbieren (aufgerundet und bis zu einem Minimum von 2), den ein einzelner Erfolg jener befreundeten Kämpferin zufügt."
            }
        ],
        "firefight": [
            {
                "name": "Blendende Aura",
                "desc": "Setze diese Gefechtslist ein, wenn ein feindlicher Kämpfer die Aktion Schießen ausführt und eine befreundete NOVIZINNEN-Kämpferin als das gültige Ziel wählt. Bis zum Ende jener Aktivierung oder Gegenmaßnahme kann dein Gegner, solange jene befreundete Kämpferin mehr als 2 Zoll von jenem feindlichen Kämpfer entfernt ist, sie nicht als gültiges Ziel wählen. Gibt es kein anderes gültiges Ziel, dass dein Gegner wählen kann, endet jene Aktion (beachte, dass sie nicht verhindert wurde, sodass jener Kämpfer sie trotzdem ausgeführt hat). Beachte, dass diese List keinen Effekt hat, wenn die Kämpferin nicht die gewählte Kämpferin ist, z. B. wenn sie ein sekundäres Ziel der Waffenregel Explosiv ist."
            },
            {
                "name": "Vom Glauben Geleitet",
                "desc": "Setze diese Gefechtslist ein, wenn eine befreundete NOVIZINNEN-Kämpferin die Aktion Schießen ausführt und du eine Fernkampfwaffe auswählst. Bis zum Ende jener Aktion hat jene Waffe jedes Mal, wenn jene Kämpferin auf einen Kämpfer innerhalb von 6 Zoll um sich schießt, die Waffenregel Zielsucher leicht."
            },
            {
                "name": "Glorreiches Martyrium",
                "desc": "Setze diese Gefechtslist ein, wenn eine befreundete NOVIZINNEN-Kämpferin kampfunfähig wird, bevor sie aus der Killzone entfernt wird. Für jeden feindlichen Kämpfer innerhalb von 2 Zoll um sie, der für sie sichtbar ist, erhältst du 1 Glaubenspunkt und fügst jenem feindlichen Kämpfer W3 Schaden zu (würfle für jeden einzeln)."
            },
            {
                "name": "Feuriges Inferno",
                "desc": "Setze diese Gefechtslist ein, wenn eine befreundete NOVIZINNEN-Kämpferin mit einem Ministorum-Flammenwerfer schießt und du mit mindestens einem kritischen Erfolg Schaden verursachst. Das Ziel erhält einen deiner Feuermarker (sofern es nicht bereits einen hat). Jedes Mal, wenn ein Kämpfer, der einen deiner Feuermarker hat, aktiviert wird: Füge jenem Kämpfer W3 Schaden zu. Der jenen Kämpfer kontrollierende Spieler kann bis zum Ende der Aktivierung jenes Kämpfers 1 von dessen APG-Wert subtrahieren, um jenen Marker zu entfernen. Beachte, dass dies geschehen muss, bevor jener Kämpfer während jener Aktivierung irgendwelche Aktionen ausführt."
            }
        ]
    }
};
const translations = {
    "en": {
        "legalDisclaimer": "This is an unofficial fan-made utility. Warhammer 40,000, Kill Team, and all associated logos, names, and statistics are © Copyright Games Workshop Limited. This tool is provided for free and is not affiliated with, or endorsed by, Games Workshop in any way.",
        "title": "NOVITIATES KILL TEAM",
        "tabAssemble": "ASSEMBLE TEAM",
        "tabMatch": "MATCH TRACKER",
        "tabTokens": "TOKENS / FAITH",
        "tabRules": "RULES",
        "resetPloysBtn": "RESET PLOYS",
        "builderDesc": "Select 1 Novitiate Superior and 9 other operatives. (Max 2 Purgatus)",
        "selectedText": "Selected:",
        "startMatchBtn": "START MATCH <i class=\"fa-solid fa-arrow-right\"></i>",
        "activeTeam": "ACTIVE TEAM",
        "activeTeamDesc": "Track the Wounds of your operatives.",
        "tokensTitle": "TOKENS & TRACKERS",
        "tokensDesc": "Track Faith points and other tactical tokens.",
        "newTargetBtn": "New Target",
        "rulesFaction": "Faction Rules",
        "ruleActsOfFaith": "<strong>Acts of Faith:</strong> Spend Faith points in the Roll Attack/Defence Dice step to use an ACT OF FAITH. Guidance (1 FP): Re-roll one dice. Blessing (2 FP): Retain normal success as critical. Intervention (3 FP): Retain fail as normal success.",
        "rulesStrategy": "Strategy Ploys",
        "rulesFirefight": "Firefight Ploys",
        "statApg": "APL",
        "statB": "MOVE",
        "statRw": "SAVE",
        "statLp": "WOUNDS",
        "abilitiesHeader": "Abilities"
    },
    "de": {
        "legalDisclaimer": "Dies ist ein inoffizielles, von Fans erstelltes Hilfsprogramm. Warhammer 40.000, Kill Team und alle zugehörigen Logos, Namen und Statistiken sind © Copyright Games Workshop Limited. Dieses Tool wird kostenlos zur Verfügung gestellt und ist in keiner Weise mit Games Workshop verbunden oder wird von Games Workshop unterstützt.",
        "title": "NOVIZINNEN-KILL-TEAM",
        "tabAssemble": "TEAM BAUEN",
        "tabMatch": "MATCH TRACKER",
        "tabTokens": "MARKER / GLAUBE",
        "tabRules": "REGELN",
        "resetPloysBtn": "PLOYS ZURÜCKSETZEN",
        "builderDesc": "Wähle 1 Priorisnovizin und 9 weitere Kämpferinnen. (Max 2 Purgatus)",
        "selectedText": "Ausgewählt:",
        "startMatchBtn": "MATCH STARTEN <i class=\"fa-solid fa-arrow-right\"></i>",
        "activeTeam": "AKTIVES TEAM",
        "activeTeamDesc": "Verfolge die Lebenspunkte (LP) deiner Kämpferinnen.",
        "tokensTitle": "MARKER & TRACKER",
        "tokensDesc": "Verfolge Glaubenspunkte und andere taktische Marker.",
        "newTargetBtn": "Neues Ziel",
        "rulesFaction": "Fraktionsregeln",
        "ruleActsOfFaith": "<strong>Glaubensakte:</strong> Gib Glaubenspunkte im Schritt „Attacken-/Verteidigungswürfel werfen“ aus. Führung (1 FP): Ein Würfel neu werfen. Segen (2 FP): Normalen Erfolg als kritisch behalten. Intervention (3 FP): Misserfolg als normalen Erfolg behalten.",
        "rulesStrategy": "Strategielisten (Ploys)",
        "rulesFirefight": "Gefechtslisten (Tactical)",
        "statApg": "APG",
        "statB": "B",
        "statRw": "RW",
        "statLp": "LP",
        "abilitiesHeader": "Fähigkeiten"
    }
};
const OPERATIVES_DB = {
    "en": [
        {
            "id": "superior",
            "name": "NOVITIATE SUPERIOR",
            "limit": 1,
            "isLeader": true,
            "stats": {
                "apg": 3,
                "b": "6\"",
                "rw": "3+",
                "lp": 9
            },
            "abilities": [
                "<strong>Inspirational Example:</strong> Whenever this operative incapacitates an enemy operative, you gain 1 Faith point, or 2 Faith points if that enemy operative had a Wounds stat of 12 or more. This rule has no effect when using the Glorious Martyrdom firefight ploy."
            ],
            "weaponSelect1": [
                "Plasma pistol (standard); Power weapon",
                "Plasma pistol (supercharge); Power weapon",
                "Relic boltgun; Gun butt",
                "Relic bolt pistol; Power weapon"
            ]
        },
        {
            "id": "condemnor",
            "name": "NOVITIATE CONDEMNOR",
            "limit": 1,
            "stats": {
                "apg": 2,
                "b": "6\"",
                "rw": "4+",
                "lp": 7
            },
            "abilities": [
                "<strong>Null Rod:</strong> PSYCHIC ranged weapons cannot inflict damage on this operative. For the effects of PSYCHIC actions, this operative cannot be selected and is never treated as being within those actions’ required distances. Whenever an operative is within 6\" of this operative: That operative cannot perform PSYCHIC actions or use PSYCHIC additional rules. That operative cannot use PSYCHIC ranged weapons. PSYCHIC melee weapons have no weapon rules and cannot have Dmg stats higher than 3/4."
            ],
            "fixedWeapons": [
                "Condemnor stakethrower",
                "Null rod"
            ]
        },
        {
            "id": "dialogus",
            "name": "NOVITIATE DIALOGUS",
            "limit": 1,
            "stats": {
                "apg": 2,
                "b": "6\"",
                "rw": "4+",
                "lp": 7
            },
            "abilities": [
                "<strong>AUTO-BROADCASTER (0 AP):</strong> Place marker...",
                "<strong>STIRRING RHETORIC (1 AP):</strong> +1 APL to friendly."
            ],
            "fixedWeapons": [
                "Autopistol",
                "Dialogus stave"
            ]
        },
        {
            "id": "duellist",
            "name": "NOVITIATE DUELLIST",
            "limit": 1,
            "stats": {
                "apg": 2,
                "b": "6\"",
                "rw": "4+",
                "lp": 7
            },
            "abilities": [
                "<strong>Riposte:</strong> Whenever you block with a critical success..."
            ],
            "fixedWeapons": [
                "Autopistol",
                "Duelling blades"
            ]
        },
        {
            "id": "exactor",
            "name": "NOVITIATE EXACTOR",
            "limit": 1,
            "stats": {
                "apg": 2,
                "b": "6\"",
                "rw": "4+",
                "lp": 7
            },
            "abilities": [
                "<strong>WHIP INTO FRENZY (1 AP):</strong> Select friendly, +1\" Move, two Fight actions."
            ],
            "fixedWeapons": [
                "Neural whips (ranged)",
                "Neural whips (melee)"
            ]
        },
        {
            "id": "hospitaller",
            "name": "NOVITIATE HOSPITALLER",
            "limit": 1,
            "stats": {
                "apg": 2,
                "b": "6\"",
                "rw": "4+",
                "lp": 7
            },
            "abilities": [
                "<strong>CHIRURGEON’S TOOLS (1 AP):</strong> Regain 2D3 lost wounds.",
                "<strong>Medic!:</strong> Save friendly from incapacitation."
            ],
            "fixedWeapons": [
                "Autopistol",
                "Surgical saw"
            ]
        },
        {
            "id": "penitent",
            "name": "NOVITIATE PENITENT",
            "limit": 1,
            "stats": {
                "apg": 2,
                "b": "6\"",
                "rw": "4+",
                "lp": 7
            },
            "abilities": [
                "<strong>Zealous Rage:</strong> Ceaseless weapon rule.",
                "<strong>Absolution Through Destruction:</strong> Free fight after fight."
            ],
            "fixedWeapons": [
                "Autopistol",
                "Penitent eviscerator"
            ]
        },
        {
            "id": "preceptor",
            "name": "NOVITIATE PRECEPTOR",
            "limit": 1,
            "stats": {
                "apg": 2,
                "b": "6\"",
                "rw": "4+",
                "lp": 7
            },
            "abilities": [
                "<strong>Unflinching Example:</strong> Gain Faith point on incapacitate.",
                "<strong>Glorious Hymnal:</strong> Friendlies within 3\" gain Severe."
            ],
            "fixedWeapons": [
                "Mace of the Righteous"
            ]
        },
        {
            "id": "pronatus",
            "name": "NOVITIATE PRONATUS",
            "limit": 1,
            "stats": {
                "apg": 2,
                "b": "6\"",
                "rw": "4+",
                "lp": 7
            },
            "abilities": [
                "<strong>Relic Seeker:</strong> Mission actions cost 1 less AP.",
                "<strong>Divine Acquisition:</strong> Gain Faith point when controlling objective."
            ],
            "fixedWeapons": [
                "Autopistol",
                "Gun butt"
            ]
        },
        {
            "id": "purgatus_1",
            "name": "NOVITIATE PURGATUS (1)",
            "limit": 2,
            "stats": {
                "apg": 2,
                "b": "6\"",
                "rw": "4+",
                "lp": 7
            },
            "abilities": [
                "<strong>Purge with Flame:</strong> Use Inferno for 0 CP."
            ],
            "fixedWeapons": [
                "Ministorum flamer",
                "Gun butt"
            ]
        },
        {
            "id": "purgatus_2",
            "name": "NOVITIATE PURGATUS (2)",
            "limit": 2,
            "stats": {
                "apg": 2,
                "b": "6\"",
                "rw": "4+",
                "lp": 7
            },
            "abilities": [
                "<strong>Purge with Flame:</strong> Use Inferno for 0 CP."
            ],
            "fixedWeapons": [
                "Ministorum flamer",
                "Gun butt"
            ]
        },
        {
            "id": "reliquarius",
            "name": "NOVITIATE RELIQUARIUS",
            "limit": 1,
            "stats": {
                "apg": 2,
                "b": "6\"",
                "rw": "4+",
                "lp": 7
            },
            "abilities": [
                "<strong>Icon Bearer:</strong> +1 APL for control.",
                "<strong>RAISE ICON (1 AP):</strong> Gain Faith points."
            ],
            "fixedWeapons": [
                "Autopistol",
                "Gun butt"
            ]
        },
        {
            "id": "militant_1",
            "name": "NOVITIATE MILITANT (1)",
            "limit": 9,
            "stats": {
                "apg": 2,
                "b": "6\"",
                "rw": "4+",
                "lp": 7
            },
            "abilities": [
                "<strong>Militant Faith:</strong> Whenever this operative is shooting, fighting or retaliating, if you use an ACT OF FAITH during that sequence and an enemy operative is incapacitated, the Faith points spent on that ACT OF FAITH are refunded. If you use the Icon of Faith equipment, Faith points are only refunded for one of those ACTS OF FAITH (your choice)."
            ],
            "weaponSelect1": [
                "Autopistol; Novitiate blade",
                "Autogun; Gun butt"
            ]
        },
        {
            "id": "militant_2",
            "name": "NOVITIATE MILITANT (2)",
            "limit": 9,
            "stats": {
                "apg": 2,
                "b": "6\"",
                "rw": "4+",
                "lp": 7
            },
            "abilities": [
                "<strong>Militant Faith:</strong> Whenever this operative is shooting, fighting or retaliating, if you use an ACT OF FAITH during that sequence and an enemy operative is incapacitated, the Faith points spent on that ACT OF FAITH are refunded. If you use the Icon of Faith equipment, Faith points are only refunded for one of those ACTS OF FAITH (your choice)."
            ],
            "weaponSelect1": [
                "Autopistol; Novitiate blade",
                "Autogun; Gun butt"
            ]
        },
        {
            "id": "militant_3",
            "name": "NOVITIATE MILITANT (3)",
            "limit": 9,
            "stats": {
                "apg": 2,
                "b": "6\"",
                "rw": "4+",
                "lp": 7
            },
            "abilities": [
                "<strong>Militant Faith:</strong> Whenever this operative is shooting, fighting or retaliating, if you use an ACT OF FAITH during that sequence and an enemy operative is incapacitated, the Faith points spent on that ACT OF FAITH are refunded. If you use the Icon of Faith equipment, Faith points are only refunded for one of those ACTS OF FAITH (your choice)."
            ],
            "weaponSelect1": [
                "Autopistol; Novitiate blade",
                "Autogun; Gun butt"
            ]
        },
        {
            "id": "militant_4",
            "name": "NOVITIATE MILITANT (4)",
            "limit": 9,
            "stats": {
                "apg": 2,
                "b": "6\"",
                "rw": "4+",
                "lp": 7
            },
            "abilities": [
                "<strong>Militant Faith:</strong> Whenever this operative is shooting, fighting or retaliating, if you use an ACT OF FAITH during that sequence and an enemy operative is incapacitated, the Faith points spent on that ACT OF FAITH are refunded. If you use the Icon of Faith equipment, Faith points are only refunded for one of those ACTS OF FAITH (your choice)."
            ],
            "weaponSelect1": [
                "Autopistol; Novitiate blade",
                "Autogun; Gun butt"
            ]
        },
        {
            "id": "militant_5",
            "name": "NOVITIATE MILITANT (5)",
            "limit": 9,
            "stats": {
                "apg": 2,
                "b": "6\"",
                "rw": "4+",
                "lp": 7
            },
            "abilities": [
                "<strong>Militant Faith:</strong> Whenever this operative is shooting, fighting or retaliating, if you use an ACT OF FAITH during that sequence and an enemy operative is incapacitated, the Faith points spent on that ACT OF FAITH are refunded. If you use the Icon of Faith equipment, Faith points are only refunded for one of those ACTS OF FAITH (your choice)."
            ],
            "weaponSelect1": [
                "Autopistol; Novitiate blade",
                "Autogun; Gun butt"
            ]
        },
        {
            "id": "militant_6",
            "name": "NOVITIATE MILITANT (6)",
            "limit": 9,
            "stats": {
                "apg": 2,
                "b": "6\"",
                "rw": "4+",
                "lp": 7
            },
            "abilities": [
                "<strong>Militant Faith:</strong> Whenever this operative is shooting, fighting or retaliating, if you use an ACT OF FAITH during that sequence and an enemy operative is incapacitated, the Faith points spent on that ACT OF FAITH are refunded. If you use the Icon of Faith equipment, Faith points are only refunded for one of those ACTS OF FAITH (your choice)."
            ],
            "weaponSelect1": [
                "Autopistol; Novitiate blade",
                "Autogun; Gun butt"
            ]
        },
        {
            "id": "militant_7",
            "name": "NOVITIATE MILITANT (7)",
            "limit": 9,
            "stats": {
                "apg": 2,
                "b": "6\"",
                "rw": "4+",
                "lp": 7
            },
            "abilities": [
                "<strong>Militant Faith:</strong> Whenever this operative is shooting, fighting or retaliating, if you use an ACT OF FAITH during that sequence and an enemy operative is incapacitated, the Faith points spent on that ACT OF FAITH are refunded. If you use the Icon of Faith equipment, Faith points are only refunded for one of those ACTS OF FAITH (your choice)."
            ],
            "weaponSelect1": [
                "Autopistol; Novitiate blade",
                "Autogun; Gun butt"
            ]
        },
        {
            "id": "militant_8",
            "name": "NOVITIATE MILITANT (8)",
            "limit": 9,
            "stats": {
                "apg": 2,
                "b": "6\"",
                "rw": "4+",
                "lp": 7
            },
            "abilities": [
                "<strong>Militant Faith:</strong> Whenever this operative is shooting, fighting or retaliating, if you use an ACT OF FAITH during that sequence and an enemy operative is incapacitated, the Faith points spent on that ACT OF FAITH are refunded. If you use the Icon of Faith equipment, Faith points are only refunded for one of those ACTS OF FAITH (your choice)."
            ],
            "weaponSelect1": [
                "Autopistol; Novitiate blade",
                "Autogun; Gun butt"
            ]
        },
        {
            "id": "militant_9",
            "name": "NOVITIATE MILITANT (9)",
            "limit": 9,
            "stats": {
                "apg": 2,
                "b": "6\"",
                "rw": "4+",
                "lp": 7
            },
            "abilities": [
                "<strong>Militant Faith:</strong> Whenever this operative is shooting, fighting or retaliating, if you use an ACT OF FAITH during that sequence and an enemy operative is incapacitated, the Faith points spent on that ACT OF FAITH are refunded. If you use the Icon of Faith equipment, Faith points are only refunded for one of those ACTS OF FAITH (your choice)."
            ],
            "weaponSelect1": [
                "Autopistol; Novitiate blade",
                "Autogun; Gun butt"
            ]
        }
    ],
    "de": [
        {
            "id": "superior",
            "name": "PRIORISNOVIZIN",
            "limit": 1,
            "isLeader": true,
            "stats": {
                "apg": 3,
                "b": "6\"",
                "rw": "3+",
                "lp": 9
            },
            "abilities": [
                "<strong>Inspirierendes Vorbild:</strong> Jedes Mal, wenn diese Kämpferin einen feindlichen Kämpfer kampfunfähig macht, erhältst du 1 Glaubenspunkt oder 2 Glaubenspunkte, falls jener feindliche Kämpfer einen Lebenspunktewert von 12 oder mehr hatte. Diese Regel hat keinen Effekt beim Einsatz der Gefechtslist Glorreiches Martyrium."
            ],
            "weaponSelect1": [
                "Plasmapistole (Standard); Energiewaffe",
                "Plasmapistole (Überladung); Energiewaffe",
                "Reliktbolter; Gewehrkolben",
                "Reliktboltpistole; Energiewaffe"
            ]
        },
        {
            "id": "condemnor",
            "name": "CONDEMNORNOVIZIN",
            "limit": 1,
            "stats": {
                "apg": 2,
                "b": "6\"",
                "rw": "4+",
                "lp": 7
            },
            "abilities": [
                "<strong>Nullstab:</strong> PSIONISCHE Fernkampfwaffen können dieser Kämpferin keinen Schaden zufügen. Diese Kämpferin kann für Effekte PSIONISCHER Aktionen nicht gewählt werden und wird nie als innerhalb der benötigten Entfernungen jener Aktionen befindlich behandelt. Jedes Mal, wenn ein Kämpfer sich innerhalb von 6 Zoll um diese Kämpferin befindet: kann jener Kämpfer keine PSIONISCHEN Aktionen ausführen oder PSIONISCHE zusätzliche Regeln benutzen. kann jener Kämpfer keine PSIONISCHEN Fernkampfwaffen einsetzen. haben PSIONISCHE Nahkampfwaffen keine Waffenregeln und können keine Schadenswerte größer als 3/4 haben."
            ],
            "fixedWeapons": [
                "Condemnor-Pflockwerfer",
                "Nullstab"
            ]
        },
        {
            "id": "dialogus",
            "name": "DIALOGUSNOVIZIN",
            "limit": 1,
            "stats": {
                "apg": 2,
                "b": "6\"",
                "rw": "4+",
                "lp": 7
            },
            "abilities": [
                "<strong>AUTOVOXLAUTSPRECHER (0 AP):</strong> Platziere Marker...",
                "<strong>MITREISSENDE RHETORIK (1 AP):</strong> +1 APG für Verbündete."
            ],
            "fixedWeapons": [
                "Maschinenpistole",
                "Dialogus-Stab"
            ]
        },
        {
            "id": "duellist",
            "name": "DUELLANTENNOVIZIN",
            "limit": 1,
            "stats": {
                "apg": 2,
                "b": "6\"",
                "rw": "4+",
                "lp": 7
            },
            "abilities": [
                "<strong>Riposte:</strong> Jedes Mal, wenn du mit einem kritischen Erfolg blockst..."
            ],
            "fixedWeapons": [
                "Maschinenpistole",
                "Duellklingen"
            ]
        },
        {
            "id": "exactor",
            "name": "EXACTORNOVIZIN",
            "limit": 1,
            "stats": {
                "apg": 2,
                "b": "6\"",
                "rw": "4+",
                "lp": 7
            },
            "abilities": [
                "<strong>AUFPEITSCHEN (1 AP):</strong> +1\" Bewegung, 2x Kämpfen."
            ],
            "fixedWeapons": [
                "Neuralpeitschen (Fernkampf)",
                "Neuralpeitschen (Nahkampf)"
            ]
        },
        {
            "id": "hospitaller",
            "name": "HOSPITALISNOVIZIN",
            "limit": 1,
            "stats": {
                "apg": 2,
                "b": "6\"",
                "rw": "4+",
                "lp": 7
            },
            "abilities": [
                "<strong>CHIRURGEUM-INSTRUMENTE (1 AP):</strong> 2W3 LP heilen.",
                "<strong>Sani!:</strong> Vor Ausschalten retten."
            ],
            "fixedWeapons": [
                "Maschinenpistole",
                "Knochensäge"
            ]
        },
        {
            "id": "penitent",
            "name": "BÜSSERNOVIZIN",
            "limit": 1,
            "stats": {
                "apg": 2,
                "b": "6\"",
                "rw": "4+",
                "lp": 7
            },
            "abilities": [
                "<strong>Religiöser Eifer:</strong> Unablässig.",
                "<strong>Absolution im Kampf:</strong> Kostenlos Kämpfen nach Kämpfen."
            ],
            "fixedWeapons": [
                "Maschinenpistole",
                "Büßer-Eviscerator"
            ]
        },
        {
            "id": "preceptor",
            "name": "PRAECEPTORNOVIZIN",
            "limit": 1,
            "stats": {
                "apg": 2,
                "b": "6\"",
                "rw": "4+",
                "lp": 7
            },
            "abilities": [
                "<strong>Entschlossenes Vorbild:</strong> Glaubenspunkt bei Ausschalten.",
                "<strong>Lobeshymne:</strong> Heftig für Verbündete in 3\"."
            ],
            "fixedWeapons": [
                "Streitkolben der Rechtschaffenen"
            ]
        },
        {
            "id": "pronatus",
            "name": "PRONATUSNOVIZIN",
            "limit": 1,
            "stats": {
                "apg": 2,
                "b": "6\"",
                "rw": "4+",
                "lp": 7
            },
            "abilities": [
                "<strong>Reliquienjägerin:</strong> Missionsaktionen für 1 AP weniger.",
                "<strong>Heilige Aneignung:</strong> Glaubenspunkt bei Zielkontrolle."
            ],
            "fixedWeapons": [
                "Maschinenpistole",
                "Gewehrkolben"
            ]
        },
        {
            "id": "purgatus_1",
            "name": "PURGATUSNOVIZIN (1)",
            "limit": 2,
            "stats": {
                "apg": 2,
                "b": "6\"",
                "rw": "4+",
                "lp": 7
            },
            "abilities": [
                "<strong>Reinigendes Feuer:</strong> Inferno für 0 BP einsetzen."
            ],
            "fixedWeapons": [
                "Ministorum-Flammenwerfer",
                "Gewehrkolben"
            ]
        },
        {
            "id": "purgatus_2",
            "name": "PURGATUSNOVIZIN (2)",
            "limit": 2,
            "stats": {
                "apg": 2,
                "b": "6\"",
                "rw": "4+",
                "lp": 7
            },
            "abilities": [
                "<strong>Reinigendes Feuer:</strong> Inferno für 0 BP einsetzen."
            ],
            "fixedWeapons": [
                "Ministorum-Flammenwerfer",
                "Gewehrkolben"
            ]
        },
        {
            "id": "reliquarius",
            "name": "RELIQUARIUSNOVIZIN",
            "limit": 1,
            "stats": {
                "apg": 2,
                "b": "6\"",
                "rw": "4+",
                "lp": 7
            },
            "abilities": [
                "<strong>Ikonenträgerin:</strong> +1 APG für Kontrolle.",
                "<strong>IKONE AUFPFLANZEN (1 AP):</strong> Glaubenspunkte erhalten."
            ],
            "fixedWeapons": [
                "Maschinenpistole",
                "Gewehrkolben"
            ]
        },
        {
            "id": "militant_1",
            "name": "MILITARISNOVIZIN (1)",
            "limit": 9,
            "stats": {
                "apg": 2,
                "b": "6\"",
                "rw": "4+",
                "lp": 7
            },
            "abilities": [
                "<strong>Militanter Glaube:</strong> Jedes Mal, wenn diese Kämpferin schießt, kämpft oder zurückschlägt, wenn du während jener Abfolge einen GLAUBENSAKT einsetzt und ein feindlicher Kämpfer kampfunfähig gemacht wird, erhältst du die für jenen GLAUBENSAKT ausgegebenen Glaubenspunkte zurück. Falls du die Ausrüstung Glaubensikone einsetzt, erhältst du nur die Glaubenspunkte für einen jener GLAUBENSAKTE zurück (deine Wahl)."
            ],
            "weaponSelect1": [
                "Maschinenpistole; Novizinnenklinge",
                "Sturmgewehr; Gewehrkolben"
            ]
        },
        {
            "id": "militant_2",
            "name": "MILITARISNOVIZIN (2)",
            "limit": 9,
            "stats": {
                "apg": 2,
                "b": "6\"",
                "rw": "4+",
                "lp": 7
            },
            "abilities": [
                "<strong>Militanter Glaube:</strong> Jedes Mal, wenn diese Kämpferin schießt, kämpft oder zurückschlägt, wenn du während jener Abfolge einen GLAUBENSAKT einsetzt und ein feindlicher Kämpfer kampfunfähig gemacht wird, erhältst du die für jenen GLAUBENSAKT ausgegebenen Glaubenspunkte zurück. Falls du die Ausrüstung Glaubensikone einsetzt, erhältst du nur die Glaubenspunkte für einen jener GLAUBENSAKTE zurück (deine Wahl)."
            ],
            "weaponSelect1": [
                "Maschinenpistole; Novizinnenklinge",
                "Sturmgewehr; Gewehrkolben"
            ]
        },
        {
            "id": "militant_3",
            "name": "MILITARISNOVIZIN (3)",
            "limit": 9,
            "stats": {
                "apg": 2,
                "b": "6\"",
                "rw": "4+",
                "lp": 7
            },
            "abilities": [
                "<strong>Militanter Glaube:</strong> Jedes Mal, wenn diese Kämpferin schießt, kämpft oder zurückschlägt, wenn du während jener Abfolge einen GLAUBENSAKT einsetzt und ein feindlicher Kämpfer kampfunfähig gemacht wird, erhältst du die für jenen GLAUBENSAKT ausgegebenen Glaubenspunkte zurück. Falls du die Ausrüstung Glaubensikone einsetzt, erhältst du nur die Glaubenspunkte für einen jener GLAUBENSAKTE zurück (deine Wahl)."
            ],
            "weaponSelect1": [
                "Maschinenpistole; Novizinnenklinge",
                "Sturmgewehr; Gewehrkolben"
            ]
        },
        {
            "id": "militant_4",
            "name": "MILITARISNOVIZIN (4)",
            "limit": 9,
            "stats": {
                "apg": 2,
                "b": "6\"",
                "rw": "4+",
                "lp": 7
            },
            "abilities": [
                "<strong>Militanter Glaube:</strong> Jedes Mal, wenn diese Kämpferin schießt, kämpft oder zurückschlägt, wenn du während jener Abfolge einen GLAUBENSAKT einsetzt und ein feindlicher Kämpfer kampfunfähig gemacht wird, erhältst du die für jenen GLAUBENSAKT ausgegebenen Glaubenspunkte zurück. Falls du die Ausrüstung Glaubensikone einsetzt, erhältst du nur die Glaubenspunkte für einen jener GLAUBENSAKTE zurück (deine Wahl)."
            ],
            "weaponSelect1": [
                "Maschinenpistole; Novizinnenklinge",
                "Sturmgewehr; Gewehrkolben"
            ]
        },
        {
            "id": "militant_5",
            "name": "MILITARISNOVIZIN (5)",
            "limit": 9,
            "stats": {
                "apg": 2,
                "b": "6\"",
                "rw": "4+",
                "lp": 7
            },
            "abilities": [
                "<strong>Militanter Glaube:</strong> Jedes Mal, wenn diese Kämpferin schießt, kämpft oder zurückschlägt, wenn du während jener Abfolge einen GLAUBENSAKT einsetzt und ein feindlicher Kämpfer kampfunfähig gemacht wird, erhältst du die für jenen GLAUBENSAKT ausgegebenen Glaubenspunkte zurück. Falls du die Ausrüstung Glaubensikone einsetzt, erhältst du nur die Glaubenspunkte für einen jener GLAUBENSAKTE zurück (deine Wahl)."
            ],
            "weaponSelect1": [
                "Maschinenpistole; Novizinnenklinge",
                "Sturmgewehr; Gewehrkolben"
            ]
        },
        {
            "id": "militant_6",
            "name": "MILITARISNOVIZIN (6)",
            "limit": 9,
            "stats": {
                "apg": 2,
                "b": "6\"",
                "rw": "4+",
                "lp": 7
            },
            "abilities": [
                "<strong>Militanter Glaube:</strong> Jedes Mal, wenn diese Kämpferin schießt, kämpft oder zurückschlägt, wenn du während jener Abfolge einen GLAUBENSAKT einsetzt und ein feindlicher Kämpfer kampfunfähig gemacht wird, erhältst du die für jenen GLAUBENSAKT ausgegebenen Glaubenspunkte zurück. Falls du die Ausrüstung Glaubensikone einsetzt, erhältst du nur die Glaubenspunkte für einen jener GLAUBENSAKTE zurück (deine Wahl)."
            ],
            "weaponSelect1": [
                "Maschinenpistole; Novizinnenklinge",
                "Sturmgewehr; Gewehrkolben"
            ]
        },
        {
            "id": "militant_7",
            "name": "MILITARISNOVIZIN (7)",
            "limit": 9,
            "stats": {
                "apg": 2,
                "b": "6\"",
                "rw": "4+",
                "lp": 7
            },
            "abilities": [
                "<strong>Militanter Glaube:</strong> Jedes Mal, wenn diese Kämpferin schießt, kämpft oder zurückschlägt, wenn du während jener Abfolge einen GLAUBENSAKT einsetzt und ein feindlicher Kämpfer kampfunfähig gemacht wird, erhältst du die für jenen GLAUBENSAKT ausgegebenen Glaubenspunkte zurück. Falls du die Ausrüstung Glaubensikone einsetzt, erhältst du nur die Glaubenspunkte für einen jener GLAUBENSAKTE zurück (deine Wahl)."
            ],
            "weaponSelect1": [
                "Maschinenpistole; Novizinnenklinge",
                "Sturmgewehr; Gewehrkolben"
            ]
        },
        {
            "id": "militant_8",
            "name": "MILITARISNOVIZIN (8)",
            "limit": 9,
            "stats": {
                "apg": 2,
                "b": "6\"",
                "rw": "4+",
                "lp": 7
            },
            "abilities": [
                "<strong>Militanter Glaube:</strong> Jedes Mal, wenn diese Kämpferin schießt, kämpft oder zurückschlägt, wenn du während jener Abfolge einen GLAUBENSAKT einsetzt und ein feindlicher Kämpfer kampfunfähig gemacht wird, erhältst du die für jenen GLAUBENSAKT ausgegebenen Glaubenspunkte zurück. Falls du die Ausrüstung Glaubensikone einsetzt, erhältst du nur die Glaubenspunkte für einen jener GLAUBENSAKTE zurück (deine Wahl)."
            ],
            "weaponSelect1": [
                "Maschinenpistole; Novizinnenklinge",
                "Sturmgewehr; Gewehrkolben"
            ]
        },
        {
            "id": "militant_9",
            "name": "MILITARISNOVIZIN (9)",
            "limit": 9,
            "stats": {
                "apg": 2,
                "b": "6\"",
                "rw": "4+",
                "lp": 7
            },
            "abilities": [
                "<strong>Militanter Glaube:</strong> Jedes Mal, wenn diese Kämpferin schießt, kämpft oder zurückschlägt, wenn du während jener Abfolge einen GLAUBENSAKT einsetzt und ein feindlicher Kämpfer kampfunfähig gemacht wird, erhältst du die für jenen GLAUBENSAKT ausgegebenen Glaubenspunkte zurück. Falls du die Ausrüstung Glaubensikone einsetzt, erhältst du nur die Glaubenspunkte für einen jener GLAUBENSAKTE zurück (deine Wahl)."
            ],
            "weaponSelect1": [
                "Maschinenpistole; Novizinnenklinge",
                "Sturmgewehr; Gewehrkolben"
            ]
        }
    ]
};
const WEAPONS_DB = {
    "en": {
        "Condemnor stakethrower": {
            "a": "4",
            "h": "3+",
            "d": "3/3",
            "wr": "Anti-PSYKER *, Devastating 2, Piercing Crits 1, Silent"
        },
        "Null rod": {
            "a": "4",
            "h": "4+",
            "d": "3/3",
            "wr": "Anti-PSYKER*, Shock"
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
        "Relic bolt pistol": {
            "a": "4",
            "h": "3+",
            "d": "3/5",
            "wr": "Range 8\", Lethal 5+"
        },
        "Relic boltgun": {
            "a": "4",
            "h": "3+",
            "d": "3/5",
            "wr": "Lethal 5+"
        },
        "Gun butt": {
            "a": "3",
            "h": "3+",
            "d": "2/3",
            "wr": "-"
        },
        "Power weapon": {
            "a": "4",
            "h": "3+",
            "d": "4/6",
            "wr": "Lethal 5+"
        },
        "Autopistol": {
            "a": "4",
            "h": "4+",
            "d": "2/3",
            "wr": "Range 8\""
        },
        "Dialogus stave": {
            "a": "4",
            "h": "4+",
            "d": "3/3",
            "wr": "Shock"
        },
        "Neural whips (ranged)": {
            "a": "5",
            "h": "3+",
            "d": "2/3",
            "wr": "Range 3\", Lethal 5+, Stun"
        },
        "Neural whips (melee)": {
            "a": "5",
            "h": "3+",
            "d": "2/3",
            "wr": "Lethal 5+, Shock"
        },
        "Duelling blades": {
            "a": "4",
            "h": "3+",
            "d": "4/5",
            "wr": "Ceaseless, Riposte*"
        },
        "Surgical saw": {
            "a": "4",
            "h": "4+",
            "d": "2/3",
            "wr": "Lethal 5+, Rending"
        },
        "Penitent eviscerator": {
            "a": "4",
            "h": "4+",
            "d": "5/6",
            "wr": "Brutal, Zealous Rage*"
        },
        "Autogun": {
            "a": "4",
            "h": "4+",
            "d": "2/3",
            "wr": "-"
        },
        "Novitiate blade": {
            "a": "4",
            "h": "4+",
            "d": "4/5",
            "wr": "-"
        },
        "Mace of the Righteous": {
            "a": "4",
            "h": "4+",
            "d": "5/5",
            "wr": "Brutal, Severe"
        },
        "Ministorum flamer": {
            "a": "4",
            "h": "2+",
            "d": "4/4",
            "wr": "Range 8\", Saturate, Torrent 2\""
        }
    },
    "de": {
        "Condemnor-Pflockwerfer": {
            "a": "4",
            "h": "3+",
            "d": "3/3",
            "wr": "Anti- PSIONIKER *, Verheerend 2, Krit. durchdringend 1, Schalldämpfer"
        },
        "Nullstab": {
            "a": "4",
            "h": "4+",
            "d": "3/3",
            "wr": "Anti-PSIONIKER*, Schock"
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
        "Reliktboltpistole": {
            "a": "4",
            "h": "3+",
            "d": "3/5",
            "wr": "Reichweite 8 Zoll, Tödlich 5+"
        },
        "Reliktbolter": {
            "a": "4",
            "h": "3+",
            "d": "3/5",
            "wr": "Tödlich 5+"
        },
        "Gewehrkolben": {
            "a": "3",
            "h": "3+",
            "d": "2/3",
            "wr": "-"
        },
        "Energiewaffe": {
            "a": "4",
            "h": "3+",
            "d": "4/6",
            "wr": "Tödlich 5+"
        },
        "Maschinenpistole": {
            "a": "4",
            "h": "4+",
            "d": "2/3",
            "wr": "Reichweite 8 Zoll"
        },
        "Dialogus-Stab": {
            "a": "4",
            "h": "4+",
            "d": "3/3",
            "wr": "Schock"
        },
        "Neuralpeitschen (Fernkampf)": {
            "a": "5",
            "h": "3+",
            "d": "2/3",
            "wr": "Reichweite 3 Zoll, Tödlich 5+, Betäuben"
        },
        "Neuralpeitschen (Nahkampf)": {
            "a": "5",
            "h": "3+",
            "d": "2/3",
            "wr": "Tödlich 5+, Schock"
        },
        "Duellklingen": {
            "a": "4",
            "h": "3+",
            "d": "4/5",
            "wr": "Unablässig, Riposte*"
        },
        "Knochensäge": {
            "a": "4",
            "h": "4+",
            "d": "2/3",
            "wr": "Tödlich 5+, Rüstungsbrechend"
        },
        "Büßer-Eviscerator": {
            "a": "4",
            "h": "4+",
            "d": "5/6",
            "wr": "Brutal, Religiöser Eifer*"
        },
        "Sturmgewehr": {
            "a": "4",
            "h": "4+",
            "d": "2/3",
            "wr": "-"
        },
        "Novizinnenklinge": {
            "a": "4",
            "h": "4+",
            "d": "4/5",
            "wr": "-"
        },
        "Streitkolben der Rechtschaffenen": {
            "a": "4",
            "h": "4+",
            "d": "5/5",
            "wr": "Brutal, Heftig"
        },
        "Ministorum-Flammenwerfer": {
            "a": "4",
            "h": "2+",
            "d": "4/4",
            "wr": "Reichweite 8 Zoll, Hagel, Schwall 2 Zoll"
        }
    }
};
