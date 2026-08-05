const PLOYS_DB = {
    en: {
    "strategy": [
        {
            "name": "Pelting Firepower",
            "desc": "When shooting an enemy already shot by another RAVAGER: first RAVAGER's weapons get Ceaseless. If shot by more than one other, get Relentless instead.",
            "cost": 1
        },
        {
            "name": "Reckless Determination",
            "desc": "When enemy shoots an expended RAVAGER, if you cannot retain any cover saves, you can retain one defence dice as a normal success without rolling it.",
            "cost": 1
        },
        {
            "name": "Violent Temperament",
            "desc": "When fighting/retaliating, after rolling attack dice, you must re-roll ALL of your attack dice.",
            "cost": 1
        },
        {
            "name": "Ambush",
            "desc": "When activated, if order changed from Conceal to Engage, it's ambushing. When fighting, retain one normal success as critical. Cannot ambush if Frenzied.",
            "cost": 1
        }
    ],
    "firefight": [
        {
            "name": "Animalistic Fury",
            "desc": "When fighting/retaliating, if you strike with a critical success, inflict 1 additional damage with that strike.",
            "cost": 1
        },
        {
            "name": "Bloodsense",
            "desc": "During activation, when incapacitating an enemy, select another ready RAVAGER within 3\" of that enemy. After current operative is expended, activate that other operative before opponent.",
            "cost": 1
        },
        {
            "name": "Ruthless Rampage",
            "desc": "After performing Fight, if no longer in control range of enemies, immediately perform a free Charge (max 3\").",
            "cost": 1
        },
        {
            "name": "Wild Rage",
            "desc": "When activated, add 1\" to Move stat until end of activation.",
            "cost": 1
        }
    ]
},
    de: {
    "strategy": [
        {
            "name": "Mit Feuer eindecken",
            "desc": "Wenn auf Feind geschossen wird, der schon von anderem VERW\u00dcSTER beschossen wurde: Waffe hat Unabl\u00e4ssig. Wenn von mehr als einem anderen beschossen: Unerbittlich.",
            "cost": 1
        },
        {
            "name": "Waghalsig entschlossen",
            "desc": "Wenn Feind auf eingesetzten VERW\u00dcSTER schie\u00dft, kannst du einen einzelnen Verteidigungsw\u00fcrfel als normalen Erfolg behalten ohne zu w\u00fcrfeln, sofern du keinen Deckungsschutz behalten kannst.",
            "cost": 1
        },
        {
            "name": "Gewaltt\u00e4tiges Temperament",
            "desc": "Wenn K\u00e4mpfen/Zur\u00fcckschlagen, kannst du nach dem W\u00fcrfeln ALLE deine Attackenw\u00fcrfel wiederholen.",
            "cost": 1
        },
        {
            "name": "Hinterhalt",
            "desc": "Wenn Befehl von Defensiv zu Offensiv ge\u00e4ndert wird, f\u00fchrt er Hinterhalt aus. Beim K\u00e4mpfen kannst du einen normalen Erfolg als kritischen behalten. Nicht m\u00f6glich mit Rasereimarker.",
            "cost": 1
        }
    ],
    "firefight": [
        {
            "name": "Animalischer Zorn",
            "desc": "Wenn K\u00e4mpfen/Zur\u00fcckschlagen und du mit kritischem Erfolg zuschl\u00e4gst, f\u00fcge 1 zus\u00e4tzlichen Schaden zu.",
            "cost": 1
        },
        {
            "name": "Blutsinn",
            "desc": "Wenn du Feind kampfunf\u00e4hig machst, w\u00e4hle anderen bereiten VERW\u00dcSTER innerhalb 3\" um diesen Feind. Jener K\u00e4mpfer wird nach dem aktuellen K\u00e4mpfer aktiviert (vor dem Gegner).",
            "cost": 1
        },
        {
            "name": "Gnadenloses W\u00fcten",
            "desc": "Nach K\u00e4mpfen, wenn nicht mehr in Feind-Kontrollreichweite: Kostenlose Aktion Angreifen (max. 3 Zoll).",
            "cost": 1
        },
        {
            "name": "Wilde Wut",
            "desc": "Wenn aktiviert: Addiere 1\" auf Bewegungswert bis Ende der Aktivierung.",
            "cost": 1
        }
    ]
}
};

const translations = {
    "en": {
        "legalDisclaimer": "This is an unofficial fan-made utility. Warhammer 40,000, Kill Team, and all associated logos, names, and statistics are \u00a9 Copyright Games Workshop Limited. This tool is provided for free and is not affiliated with, or endorsed by, Games Workshop in any way.",
        "title": "FELLGOR RAVAGERS",
        "tabAssemble": "ASSEMBLE TEAM",
        "tabMatch": "MATCH TRACKER",
        "tabTokens": "TOKENS / TRACKERS",
        "tabRules": "RULES",
        "resetPloysBtn": "RESET PLOYS",
        "builderDesc": "Select 1 Ironhorn and 9 other Ravagers. (Max 1 of each specialist, Warriors are unlimited).",
        "selectedText": "Selected:",
        "startMatchBtn": "START MATCH <i class=\"fa-solid fa-arrow-right\"></i>",
        "activeTeam": "ACTIVE TEAM",
        "activeTeamDesc": "Track the Wounds of your operatives.",
        "tokensTitle": "TOKENS & TRACKERS",
        "tokensDesc": "Track Frenzy tokens, mutations, etc.",
        "newTargetBtn": "New Tracker",
        "rulesFaction": "Faction Rules",
        "ruleCustom1": "<strong>Frenzy:</strong> When incapacitated without a Frenzy token, gain one instead. Discard all remaining attack dice. Change Conceal to Engage. While Frenzied: Only incapacitated if activation ends, takes a critical strike, takes a second normal strike, takes Critical Dmg from shooting, or battle ends. APL is 1 for marker control.",
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
        "title": "FINSTERGOR-VERW\u00dcSTER",
        "tabAssemble": "TEAM BAUEN",
        "tabMatch": "MATCH TRACKER",
        "tabTokens": "MARKER / TRACKER",
        "tabRules": "REGELN",
        "resetPloysBtn": "PLOYS ZUR\u00dcCKSETZEN",
        "builderDesc": "W\u00e4hle 1 Eisenhorn und 9 weitere Verw\u00fcster. (Max 1 pro Spezialist, Krieger unbegrenzt).",
        "selectedText": "Ausgew\u00e4hlt:",
        "startMatchBtn": "MATCH STARTEN <i class=\"fa-solid fa-arrow-right\"></i>",
        "activeTeam": "AKTIVES TEAM",
        "activeTeamDesc": "Verfolge die Lebenspunkte (LP) deiner K\u00e4mpfer.",
        "tokensTitle": "MARKER & TRACKER",
        "tokensDesc": "Verfolge Rasereimarker, Mutationen, etc.",
        "newTargetBtn": "Neuer Tracker",
        "rulesFaction": "Fraktionsregeln",
        "ruleCustom1": "<strong>Raserei:</strong> Wenn kampfunf\u00e4hig ohne Rasereimarker, erhalte stattdessen einen. Lege alle verbleibenden Attackenw\u00fcrfel ab. \u00c4ndere Defensiv zu Offensiv. Mit Rasereimarker: Nur kampfunf\u00e4hig wenn Aktivierung endet, kritischer Treffer, 2. normaler Treffer, kritischer Schussschaden oder Gefecht endet. APG ist 1 f\u00fcr Markerkontrolle.",
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
        "name": "FELLGOR IRONHORN",
        "limit": 1,
        "isLeader": true,
        "stats": {
            "apg": 2,
            "b": "6\"",
            "rw": "5+",
            "lp": 11
        },
        "abilities": [
            "<strong>Call the Attack:</strong> STRATEGIC GAMBIT (if no Frenzy token). Select friendly visible RAVAGER within 6\". That operative and each friendly within 2\" of it can immediately perform a free Dash."
        ],
        "fixedWeapons": [
            "Corrupted pistol",
            "Corrupted chainsword"
        ]
    },
    {
        "id": "deathknell",
        "name": "FELLGOR DEATHKNELL",
        "limit": 1,
        "stats": {
            "apg": 2,
            "b": "6\"",
            "rw": "4+",
            "lp": 10
        },
        "abilities": [
            "<strong>Icon Bearer:</strong> Treat APL as 1 higher for marker control.",
            "<strong>War Gong:</strong> Attack dice inflicting Critical Dmg on friendly RAVAGER within 3\" can inflict Normal Dmg instead (if no Frenzy token).",
            "<strong>Gong Knell (1AP):</strong> Improve Save by 1 and ignore Piercing against shooting attacks."
        ],
        "fixedWeapons": [
            "Autopistol",
            "Bludgeon"
        ]
    },
    {
        "id": "fluxbray",
        "name": "FELLGOR FLUXBRAY",
        "limit": 1,
        "stats": {
            "apg": 2,
            "b": "6\"",
            "rw": "5+",
            "lp": 10
        },
        "abilities": [
            "<strong>Blade Whirl:</strong> Can resolve one success to block before normal order.",
            "<strong>Cleaver Flurry (2AP):</strong> Free Reposition. Can move extra 2\" and within control range. Inflict D3+1 dmg on each enemy moved within control range of."
        ],
        "fixedWeapons": [
            "Triple cleavers"
        ]
    },
    {
        "id": "gnarlscar",
        "name": "FELLGOR GNARLSCAR",
        "limit": 1,
        "stats": {
            "apg": 2,
            "b": "6\"",
            "rw": "5+",
            "lp": 10
        },
        "abilities": [
            "<strong>Sagacious:</strong> At end of activation, can change order.",
            "<strong>Uncompromising Attack (1AP):</strong> Free Fight then free Shoot (or vice versa). Shoot can be in control range but must target an enemy in control range."
        ],
        "fixedWeapons": [
            "Autopistol",
            "Bionic fist"
        ]
    },
    {
        "id": "gorehorn",
        "name": "FELLGOR GOREHORN",
        "limit": 1,
        "stats": {
            "apg": 2,
            "b": "6\"",
            "rw": "5+",
            "lp": 10
        },
        "abilities": [
            "<strong>Champion:</strong> Can perform two Fight actions.",
            "<strong>Headtaker:</strong> When incapacitating with Skullcleaver, roll D3: Regain wounds equal to result, add result to Crit Dmg stat for rest of battle."
        ],
        "fixedWeapons": [
            "Autopistol",
            "Skullcleaver"
        ]
    },
    {
        "id": "herdgoad",
        "name": "FELLGOR HERD-GOAD",
        "limit": 1,
        "stats": {
            "apg": 2,
            "b": "6\"",
            "rw": "5+",
            "lp": 10
        },
        "abilities": [
            "<strong>Whip Control:</strong> Visible enemy within 3\" not in control range of other enemies: -1 Atk stat for melee, opponent spends +1 AP to Fall Back.",
            "<strong>Incite Fury (1AP):</strong> Add 1 to APL of another friendly RAVAGER within 3\"."
        ],
        "fixedWeapons": [
            "Autopistol",
            "Crackthorn whip (ranged)",
            "Crackthorn whip (melee)"
        ]
    },
    {
        "id": "mangler",
        "name": "FELLGOR MANGLER",
        "limit": 1,
        "stats": {
            "apg": 2,
            "b": "6\"",
            "rw": "5+",
            "lp": 10
        },
        "abilities": [
            "<strong>Berserker:</strong> Cannot Shoot. +1 AP to Pick Up Marker/mission actions.",
            "<strong>Savage:</strong> After first Fight, can perform free Fight immediately. Tactual Hunter: Once per sequence against expended enemy, resolve another success as a strike."
        ],
        "fixedWeapons": [
            "Vicious claws"
        ]
    },
    {
        "id": "shaman",
        "name": "FELLGOR SHAMAN",
        "limit": 1,
        "stats": {
            "apg": 2,
            "b": "6\"",
            "rw": "5+",
            "lp": 10
        },
        "abilities": [
            "<strong>Apoplectic Rejuvenation (1AP):</strong> Heal friendly RAVAGER within 6\" 2D3 wounds (6 if they incapacitated an enemy in melee).",
            "<strong>Mantle of Darkness (1AP):</strong> Friendly RAVAGER within 3\" in cover with Conceal cannot be selected as target."
        ],
        "fixedWeapons": [
            "Autopistol",
            "Tech-curse",
            "Braystave"
        ]
    },
    {
        "id": "toxhorn",
        "name": "FELLGOR TOXHORN",
        "limit": 1,
        "stats": {
            "apg": 2,
            "b": "6\"",
            "rw": "5+",
            "lp": 10
        },
        "abilities": [
            "<strong>Toxic Blessings:</strong> Ignore APL changes and Shock. When taking 3+ Normal Dmg, roll 5+ to subtract 1 dmg.",
            "<strong>Pox Bomb:</strong> Can use Stun grenades. Does not count to limit. Stun test of 3+ inflicts half dice damage."
        ],
        "fixedWeapons": [
            "Autopistol",
            "Cleaver"
        ]
    },
    {
        "id": "vandal",
        "name": "FELLGOR VANDAL",
        "limit": 1,
        "stats": {
            "apg": 2,
            "b": "6\"",
            "rw": "5+",
            "lp": 10
        },
        "abilities": [
            "<strong>Sweeping Blow (1AP):</strong> Inflict D3+1 dmg on each other operative visible within 2\"."
        ],
        "fixedWeapons": [
            "Mancrusher"
        ]
    },
    {
        "id": "warrior",
        "name": "FELLGOR WARRIOR",
        "limit": 10,
        "stats": {
            "apg": 2,
            "b": "6\"",
            "rw": "5+",
            "lp": 10
        },
        "abilities": [
            "<strong>Warrior Frenzy:</strong> Cannot be injured while having a Frenzy token."
        ],
        "fixedWeapons": [
            "Autopistol",
            "Bludgeon"
        ]
    }
],
    de: [
    {
        "id": "leader",
        "name": "FINSTERGOR-EISENHORN",
        "limit": 1,
        "isLeader": true,
        "stats": {
            "apg": 2,
            "b": "6\"",
            "rw": "5+",
            "lp": 11
        },
        "abilities": [
            "<strong>Ruf zum Angriff:</strong> STRATEGISCHES MAN\u00d6VER (ohne Rasereimarker). W\u00e4hle befreundeten VERW\u00dcSTER innerhalb 6\". Jener und alle innerhalb 2\" um ihn d\u00fcrfen kostenlos Sprinten."
        ],
        "fixedWeapons": [
            "Korrumpierte Pistole",
            "Korrumpiertes Kettenschwert"
        ]
    },
    {
        "id": "deathknell",
        "name": "FINSTERGOR-TODESK\u00dcNDER",
        "limit": 1,
        "stats": {
            "apg": 2,
            "b": "6\"",
            "rw": "4+",
            "lp": 10
        },
        "abilities": [
            "<strong>Ikonentr\u00e4ger:</strong> APG gilt als 1 h\u00f6her f\u00fcr Markerkontrolle.",
            "<strong>Kriegsgong:</strong> Kritischer Schaden an VERW\u00dcSTER innerhalb 3\" kann in normalen Schaden gewandelt werden.",
            "<strong>Gonghall (1AP):</strong> Verbessere RW um 1 und ignoriere Durchdringend bei Beschuss."
        ],
        "fixedWeapons": [
            "Maschinenpistole",
            "Keule"
        ]
    },
    {
        "id": "fluxbray",
        "name": "FINSTERGOR-WANDELHORN",
        "limit": 1,
        "stats": {
            "apg": 2,
            "b": "6\"",
            "rw": "5+",
            "lp": 10
        },
        "abilities": [
            "<strong>Wirbelnde Klingen:</strong> Kann einen Erfolg vor der normalen Reihenfolge zum Blocken verwenden.",
            "<strong>Klingensturm (2AP):</strong> Kostenloser Positionswechsel (+2\" Bewegung, auch in Kontrollreichweite). F\u00fcge W3+1 Schaden an Feinden zu, durch deren Kontrollreichweite bewegt."
        ],
        "fixedWeapons": [
            "Drei Klingen"
        ]
    },
    {
        "id": "gnarlscar",
        "name": "FINSTERGOR-VERNARBTER",
        "limit": 1,
        "stats": {
            "apg": 2,
            "b": "6\"",
            "rw": "5+",
            "lp": 10
        },
        "abilities": [
            "<strong>Gerissen:</strong> Kann am Ende der Aktivierung Befehl \u00e4ndern.",
            "<strong>Kompromissloser Angriff (1AP):</strong> Kostenlos K\u00e4mpfen dann Schie\u00dfen (oder umgekehrt). Schie\u00dfen darf in Kontrollreichweite sein, muss dann aber Feind in Kontrollreichweite als Ziel haben."
        ],
        "fixedWeapons": [
            "Maschinenpistole",
            "Bionische Faust"
        ]
    },
    {
        "id": "gorehorn",
        "name": "FINSTERGOR-BLUTHORN",
        "limit": 1,
        "stats": {
            "apg": 2,
            "b": "6\"",
            "rw": "5+",
            "lp": 10
        },
        "abilities": [
            "<strong>Champion:</strong> Kann 2x K\u00e4mpfen.",
            "<strong>Enthaupter:</strong> Wenn Feind mit Sch\u00e4delspalter kampfunf\u00e4hig gemacht wird: W3 werfen. Heilt W3 LP, addiert W3 zum Kritischen Schaden f\u00fcr den Rest des Gefechts."
        ],
        "fixedWeapons": [
            "Maschinenpistole",
            "Sch\u00e4delspalter"
        ]
    },
    {
        "id": "herdgoad",
        "name": "FINSTERGOR-PEITSCHER",
        "limit": 1,
        "stats": {
            "apg": 2,
            "b": "6\"",
            "rw": "5+",
            "lp": 10
        },
        "abilities": [
            "<strong>Peitschenmeister:</strong> Feind innerhalb 3\" (nicht im Nahkampf mit anderen): -1 Attackenwert f\u00fcr Nahkampf, Zur\u00fcckziehen kostet +1 AP.",
            "<strong>In Wut peitschen (1AP):</strong> +1 APG f\u00fcr befreundeten VERW\u00dcSTER innerhalb 3\"."
        ],
        "fixedWeapons": [
            "Maschinenpistole",
            "Dornpeitsche (Fernkampf)",
            "Dornpeitsche (Nahkampf)"
        ]
    },
    {
        "id": "mangler",
        "name": "FINSTERGOR-BRECHER",
        "limit": 1,
        "stats": {
            "apg": 2,
            "b": "6\"",
            "rw": "5+",
            "lp": 10
        },
        "abilities": [
            "<strong>Berserker:</strong> Kann nicht Schie\u00dfen. +1 AP f\u00fcr Marker aufsammeln/Missionsaktionen.",
            "<strong>Tierhaft:</strong> Nach erstem K\u00e4mpfen sofort zweites kostenloses K\u00e4mpfen m\u00f6glich. J\u00e4ger mit scharfen Sinnen: Einmalig gegen eingesetzten Feind nach erstem kritischen Treffer sofort weiteren Erfolg als Treffer abhandeln."
        ],
        "fixedWeapons": [
            "Grausame Klauen"
        ]
    },
    {
        "id": "shaman",
        "name": "FINSTERGOR-SCHAMANE",
        "limit": 1,
        "stats": {
            "apg": 2,
            "b": "6\"",
            "rw": "5+",
            "lp": 10
        },
        "abilities": [
            "<strong>Verj\u00fcngung der W\u00fctenden (1AP):</strong> Heilt VERW\u00dcSTER innerhalb 6\" um 2W3 LP (6 LP wenn er Feind im Nahkampf get\u00f6tet hat).",
            "<strong>Mantel der Dunkelheit (1AP):</strong> VERW\u00dcSTER innerhalb 3\" in Deckung mit Defensivbefehl kann nicht als Ziel gew\u00e4hlt werden."
        ],
        "fixedWeapons": [
            "Maschinenpistole",
            "Techfluch",
            "Herdenstab"
        ]
    },
    {
        "id": "toxhorn",
        "name": "FINSTERGOR-GIFTHORN",
        "limit": 1,
        "stats": {
            "apg": 2,
            "b": "6\"",
            "rw": "5+",
            "lp": 10
        },
        "abilities": [
            "<strong>Toxischer Segen:</strong> Ignoriere APG-\u00c4nderungen und Schock. Bei 3+ normalem Schaden: auf 5+ Schaden um 1 reduzieren.",
            "<strong>Pockenbombe:</strong> Darf Blendgranaten einsetzen. Z\u00e4hlt nicht zum Limit. Blendtest von 3+ f\u00fcgt halben W\u00fcrfelwurf als Schaden zu."
        ],
        "fixedWeapons": [
            "Maschinenpistole",
            "Beil"
        ]
    },
    {
        "id": "vandal",
        "name": "FINSTERGOR-VANDALE",
        "limit": 1,
        "stats": {
            "apg": 2,
            "b": "6\"",
            "rw": "5+",
            "lp": 10
        },
        "abilities": [
            "<strong>Weiter Hieb (1AP):</strong> F\u00fcgt allen anderen K\u00e4mpfern innerhalb 2\" W3+1 Schaden zu."
        ],
        "fixedWeapons": [
            "Menschenrei\u00dfer"
        ]
    },
    {
        "id": "warrior",
        "name": "FINSTERGOR-KRIEGER",
        "limit": 10,
        "stats": {
            "apg": 2,
            "b": "6\"",
            "rw": "5+",
            "lp": 10
        },
        "abilities": [
            "<strong>Rasender Krieger:</strong> Kann mit Rasereimarker nicht verletzt sein."
        ],
        "fixedWeapons": [
            "Maschinenpistole",
            "Keule"
        ]
    }
]
};

const WEAPONS_DB = {
    en: {
    "Corrupted pistol": {
        "a": "4",
        "h": "4+",
        "d": "3/5",
        "wr": "Range 8\", Rending"
    },
    "Plasma pistol (standard)": {
        "a": "4",
        "h": "4+",
        "d": "3/5",
        "wr": "Range 8\", Piercing 1"
    },
    "Plasma pistol (supercharge)": {
        "a": "4",
        "h": "4+",
        "d": "4/5",
        "wr": "Range 8\", Hot, Lethal 5+, Piercing 1"
    },
    "Bludgeon": {
        "a": "4",
        "h": "3+",
        "d": "4/4",
        "wr": "Brutal"
    },
    "Corrupted chainsword": {
        "a": "4",
        "h": "3+",
        "d": "4/5",
        "wr": "Rending"
    },
    "Autopistol": {
        "a": "4",
        "h": "4+",
        "d": "2/3",
        "wr": "Range 8\""
    },
    "Triple cleavers": {
        "a": "4",
        "h": "3+",
        "d": "4/5",
        "wr": "Ceaseless"
    },
    "Bionic fist": {
        "a": "4",
        "h": "3+",
        "d": "4/5",
        "wr": "Brutal"
    },
    "Skullcleaver": {
        "a": "4",
        "h": "3+",
        "d": "4/5",
        "wr": "Lethal 5+, Headtaker*"
    },
    "Crackthorn whip (ranged)": {
        "a": "4",
        "h": "2+",
        "d": "2/3",
        "wr": "Range 3\", Lethal 4+, Stun"
    },
    "Crackthorn whip (melee)": {
        "a": "4",
        "h": "3+",
        "d": "2/3",
        "wr": "Lethal 4+, Shock"
    },
    "Vicious claws": {
        "a": "4",
        "h": "3+",
        "d": "4/6",
        "wr": "Ceaseless, Tactual Hunter*"
    },
    "Tech-curse": {
        "a": "4",
        "h": "3+",
        "d": "1/3",
        "wr": "PSYCHIC, Rending, Saturate, Seek Light"
    },
    "Braystave": {
        "a": "4",
        "h": "3+",
        "d": "3/5",
        "wr": "Shock"
    },
    "Cleaver": {
        "a": "4",
        "h": "3+",
        "d": "4/5",
        "wr": "-"
    },
    "Mancrusher": {
        "a": "4",
        "h": "4+",
        "d": "5/5",
        "wr": "Brutal, Vicious Blows*"
    }
},
    de: {
    "Korrumpierte Pistole": {
        "a": "4",
        "h": "4+",
        "d": "3/5",
        "wr": "Reichweite 8 Zoll, R\u00fcstungsbrechend"
    },
    "Plasmapistole (Standard)": {
        "a": "4",
        "h": "4+",
        "d": "3/5",
        "wr": "Reichweite 8 Zoll, Durchdringend 1"
    },
    "Plasmapistole (\u00dcberladung)": {
        "a": "4",
        "h": "4+",
        "d": "4/5",
        "wr": "Reichweite 8 Zoll, Hei\u00df, Durchdringend 1, T\u00f6dlich 5+"
    },
    "Keule": {
        "a": "4",
        "h": "3+",
        "d": "4/4",
        "wr": "Brutal"
    },
    "Korrumpiertes Kettenschwert": {
        "a": "4",
        "h": "3+",
        "d": "4/5",
        "wr": "R\u00fcstungsbrechend"
    },
    "Maschinenpistole": {
        "a": "4",
        "h": "4+",
        "d": "2/3",
        "wr": "Reichweite 8 Zoll"
    },
    "Drei Klingen": {
        "a": "4",
        "h": "3+",
        "d": "4/5",
        "wr": "Unabl\u00e4ssig"
    },
    "Bionische Faust": {
        "a": "4",
        "h": "3+",
        "d": "4/5",
        "wr": "Brutal"
    },
    "Sch\u00e4delspalter": {
        "a": "4",
        "h": "3+",
        "d": "4/5",
        "wr": "T\u00f6dlich 5+, Enthaupter*"
    },
    "Dornpeitsche (Fernkampf)": {
        "a": "4",
        "h": "2+",
        "d": "2/3",
        "wr": "Reichweite 3 Zoll, T\u00f6dlich 4+, Bet\u00e4uben"
    },
    "Dornpeitsche (Nahkampf)": {
        "a": "4",
        "h": "3+",
        "d": "2/3",
        "wr": "T\u00f6dlich 4+, Schock"
    },
    "Grausame Klauen": {
        "a": "4",
        "h": "3+",
        "d": "4/6",
        "wr": "Unerbittlich, J\u00e4ger mit scharfen Sinnen*"
    },
    "Techfluch": {
        "a": "4",
        "h": "3+",
        "d": "1/3",
        "wr": "R\u00fcstungsbrechend, Hagel, Zielsucher leicht, PSIONISCH"
    },
    "Herdenstab": {
        "a": "4",
        "h": "3+",
        "d": "3/5",
        "wr": "Schock"
    },
    "Beil": {
        "a": "4",
        "h": "3+",
        "d": "4/5",
        "wr": "-"
    },
    "Menschenrei\u00dfer": {
        "a": "4",
        "h": "4+",
        "d": "5/5",
        "wr": "Brutal, B\u00f6sartige Hiebe*"
    }
}
};
