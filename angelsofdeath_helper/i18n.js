const PLOYS_DB = {
    en: {
        strategy: [
            { name: "Combat Doctrine", desc: "Select Devastator (Shoot >6\"), Tactical (Shoot <=6\"), or Assault (Fight/Retaliate). While active, weapons gain Balanced." },
            { name: "Indomitus", desc: "When shot at, if you roll 2+ fails, discard one to retain another as normal." },
            { name: "And They Shall Know No Fear", desc: "Ignore any changes to stats from being injured." },
            { name: "Adaptive Tactics", desc: "Change your secondary CHAPTER TACTIC until end of turning point." }
        ],
        firefight: [
            { name: "Adjust Doctrine", desc: "Change the COMBAT DOCTRINE you selected." },
            { name: "Wrath of Vengeance", desc: "When counteracting, perform an additional 1AP action for free (must be different)." },
            { name: "Transhuman Physiology", desc: "When shot at, retain one normal defence success as critical instead." },
            { name: "Shock Assault", desc: "When Fighting after a Charge, weapon gains Shock and first strike inflicts +1 dmg (max 7)." }
        ]
    },
    de: {
        strategy: [
            { name: "Kampfdoktrin", desc: "Wähle Devastor (>6\" Schießen), Taktisch (<=6\" Schießen) oder Sturm (Nahkampf). Waffen erhalten Ausgewogen." },
            { name: "Indomitus", desc: "Wenn beschossen und 2+ Misserfolge: Lege einen ab, um einen anderen als normalen Erfolg zu behalten." },
            { name: "Die Keine Furcht Kennen", desc: "Ignoriere jegliche Veränderungen der Werte durch Verletztsein." },
            { name: "Adaptive Taktiken", desc: "Ändere deine sekundäre ORDENSTAKTIK bis zum Ende des Wendepunkts." }
        ],
        firefight: [
            { name: "Doktrin Anpassen", desc: "Ändere die gewählte KAMPFDOKTRIN." },
            { name: "Zorn der Vergeltung", desc: "Bei Gegenmaßnahmen eine zusätzliche Aktion (1 AP) kostenlos (muss unterschiedlich sein)." },
            { name: "Transhumane Physiologie", desc: "Wenn beschossen: Behalte einen normalen Verteidigungserfolg als kritisch." },
            { name: "Sturmangriff", desc: "Nahkampf nach Angriff: Waffe erhält Schock und erster Schlag +1 Schaden (max 7)." }
        ]
    }
};

const translations = {
        en: {
            legalDisclaimer: "This is an unofficial fan-made utility. Warhammer 40,000, Kill Team, and all associated logos, names, and statistics are © Copyright Games Workshop Limited. This tool is provided for free and is not affiliated with, or endorsed by, Games Workshop in any way.",
            title: "ANGELS OF DEATH",
            tabAssemble: "ASSEMBLE TEAM",
            tabMatch: "MATCH TRACKER",
            tabTokens: "TOKENS / TRACKERS",
            tabRules: "RULES",
            resetPloysBtn: "RESET PLOYS",
            builderDesc: "Select 1 Leader and 5 other operatives. (Max 1 of each specialist, Warriors are unlimited)",
            selectedText: "Selected:",
            startMatchBtn: "START MATCH <i class=\"fa-solid fa-arrow-right\"></i>",
            activeTeam: "ACTIVE TEAM",
            activeTeamDesc: "Track the Wounds of your operatives.",
            tokensTitle: "TOKENS & TRACKERS",
            tokensDesc: "Track Chapter Tactics, Doctrines, and other effects.",
            newTargetBtn: "New Tracker",
            rulesFaction: "Faction Rules",
            ruleChaosMarks: "<strong>Chapter Tactics:</strong> Select a primary and secondary Chapter Tactic for the battle.",
            ruleVeterans: "<strong>Astartes:</strong> Perform either 2 Shoot or 2 Fight actions. (If 2 Shoots, at least one must be a bolt weapon). Can always counteract.",
            ruleHateful: "<strong>Purity Seals:</strong> Once per turning point, discard a fail to retain another as normal success.",
            rulesStrategy: "Strategy Ploys",
            rulesFirefight: "Firefight Ploys",
            ruleAstartes: "<strong>Astartes:</strong> Perform either 2 Shoot actions or 2 Fight actions. If 2 Shoots, at least one must be a bolt weapon. Can counteract regardless of order.",
            ruleMarks: "<strong>Chapter Tactics:</strong> Aggressive (Rending), Dueller (Block crits with normal), Resolute (Ignore APL modifiers, Shock), Stealthy (Retain extra cover save), Mobile (Fall back -1 AP, Charge in control range), Hardy (Defence 5+ is crit, reduce 3+ dmg by 1 in retaliation), Sharpshooter (Bolt weapons Accurate 1, Severe if not moved), Siege Specialist (Ranged Saturate, no assist in melee).",
            stratBlood: "<strong>Combat Doctrine:</strong> Devastator, Tactical, or Assault. Weapons gain Balanced.",
            stratImplacable: "<strong>Indomitus:</strong> Discard 1 fail to retain 1 normal when defending against shooting.",
            stratQuick: "<strong>And They Shall Know No Fear:</strong> Ignore injured stats.",
            stratFickle: "<strong>Adaptive Tactics:</strong> Change secondary Chapter Tactic for the turning point.",
            fireUnending: "<strong>Adjust Doctrine:</strong> Change Combat Doctrine.",
            fireMutability: "<strong>Wrath of Vengeance:</strong> Free 1AP action when counteracting.",
            fireMalignant: "<strong>Transhuman Physiology:</strong> Retain normal save as crit.",
            fireSickening: "<strong>Shock Assault:</strong> Shock and +1 dmg on first strike after charge.",
            statApg: "APL",
            statB: "MOVE",
            statRw: "SAVE",
            statLp: "WOUNDS",
            abilitiesHeader: "Abilities"
        },
        de: {
            legalDisclaimer: "Dies ist ein inoffizielles, von Fans erstelltes Hilfsprogramm. Warhammer 40.000, Kill Team und alle zugehörigen Logos, Namen und Statistiken sind © Copyright Games Workshop Limited. Dieses Tool wird kostenlos zur Verfügung gestellt und ist in keiner Weise mit Games Workshop verbunden oder wird von Games Workshop unterstützt.",
            title: "ENGEL DES TODES",
            tabAssemble: "TEAM BAUEN",
            tabMatch: "MATCH TRACKER",
            tabTokens: "MARKER / TRACKER",
            tabRules: "REGELN",
            resetPloysBtn: "PLOYS ZURÜCKSETZEN",
            builderDesc: "Wähle 1 Anführer und 5 weitere Kämpfer. (Max 1 pro Spezialist, Krieger unbegrenzt)",
            selectedText: "Ausgewählt:",
            startMatchBtn: "MATCH STARTEN <i class=\"fa-solid fa-arrow-right\"></i>",
            activeTeam: "AKTIVES TEAM",
            activeTeamDesc: "Verfolge die Lebenspunkte (LP) deiner Kämpfer.",
            tokensTitle: "MARKER & TRACKER",
            tokensDesc: "Verfolge Ordenstaktiken, Doktrinen und andere Effekte.",
            newTargetBtn: "Neuer Tracker",
            rulesFaction: "Fraktionsregeln",
            ruleChaosMarks: "<strong>Ordenstaktiken:</strong> Wähle eine primäre und sekundäre Ordenstaktik für das Gefecht.",
            ruleVeterans: "<strong>Astartes:</strong> Zwei Aktionen Schießen (1x Boltwaffe) oder Kämpfen. Kann immer Gegenmaßnahmen ausführen.",
            ruleHateful: "<strong>Reinheitssiegel:</strong> Einmal pro Wendepunkt einen Misserfolg ablegen, um einen normalen Erfolg zu behalten.",
            rulesStrategy: "Strategielisten (Ploys)",
            rulesFirefight: "Gefechtslisten (Tactical)",
            ruleAstartes: "<strong>Astartes:</strong> Zwei Aktionen Kämpfen oder Schießen ausführen (bei 2x Schießen muss eines eine Boltwaffe sein). Kann immer Gegenmaßnahmen ausführen.",
            ruleMarks: "<strong>Ordenstaktiken:</strong> Aggressiv (Rüstungsbrechend), Duellanten (Normale blocken kritische), Entschlossen (Ignoriert APG-Mali, Schock), Getarnt (+1 Deckungsschutz), Mobil (Zurückziehen -1 AP, Angreifen in Reichweite), Abgehärtet (Vert. 5+ ist krit, 1 Schaden weniger bei Rückschlag ab 3 DMG), Scharfschützen (Boltwaffen Akkurat 1, Heftig), Belagerungsexperten (Hagel, keine Unterstützung im Nahkampf).",
            stratBlood: "<strong>Kampfdoktrin:</strong> Devastor, Taktisch oder Sturm. Waffen erhalten Ausgewogen.",
            stratImplacable: "<strong>Indomitus:</strong> Beim Verteidigen gegen Schießen 1 Misserfolg zu 1 normalem Erfolg machen (bei 2+ Misserfolgen).",
            stratQuick: "<strong>Die Keine Furcht Kennen:</strong> Ignoriert Verletzungs-Mali.",
            stratFickle: "<strong>Adaptive Taktiken:</strong> Sekundäre Ordenstaktik für den Wendepunkt ändern.",
            fireUnending: "<strong>Doktrin Anpassen:</strong> Kampfdoktrin ändern.",
            fireMutability: "<strong>Zorn der Vergeltung:</strong> Zusätzliche 1 AP Aktion bei Gegenmaßnahmen.",
            fireMalignant: "<strong>Transhumane Physiologie:</strong> Normalen Verteidigungserfolg als kritisch behalten.",
            fireSickening: "<strong>Sturmangriff:</strong> Schock und +1 Schaden bei erstem Schlag nach Angriff.",
            statApg: "APG",
            statB: "B",
            statRw: "RW",
            statLp: "LP",
            abilitiesHeader: "Fähigkeiten"
        }
    };

    const OPERATIVES_DB = {
        en: [
            { id: 'leader_cap', name: 'SPACE MARINE CAPTAIN', limit: 1, isLeader: true, stats: { apg: 3, b: '6"', rw: '3+', lp: 15 }, abilities: ['<strong>Heroic Leader:</strong> Use firefight ploy for 0CP, use Combat Doctrine for 0CP, or use Adjust Doctrine for 0CP.', '<strong>Iron Halo:</strong> Once per battle, ignore one attack dice inflicting Normal Dmg.'], weaponSelect1: ['Plasma pistol', 'Heavy bolt pistol'], weaponSelect2: ['Power fist', 'Power weapon', 'Thunder hammer', 'Chainsword'] },
            { id: 'leader_ais', name: 'ASSAULT INTERCESSOR SERGEANT', limit: 1, isLeader: true, stats: { apg: 3, b: '6"', rw: '3+', lp: 15 }, abilities: ['<strong>Doctrine Warfare:</strong> Combat Doctrine (Assault or Tactical) for 0CP once per battle.', '<strong>Chapter Veteran:</strong> Gain one additional Chapter Tactic.'], weaponSelect1: ['Heavy bolt pistol', 'Hand flamer', 'Plasma pistol'], weaponSelect2: ['Chainsword', 'Power fist', 'Power weapon', 'Thunder hammer'] },
            { id: 'leader_is', name: 'INTERCESSOR SERGEANT', limit: 1, isLeader: true, stats: { apg: 3, b: '6"', rw: '3+', lp: 15 }, abilities: ['<strong>Doctrine Warfare:</strong> Combat Doctrine (Devastator or Tactical) for 0CP once per battle.', '<strong>Chapter Veteran:</strong> Gain one additional Chapter Tactic.'], weaponSelect1: ['Bolt rifle', 'Auto bolt rifle', 'Stalker bolt rifle'], weaponSelect2: ['Fists', 'Chainsword', 'Power fist', 'Power weapon', 'Thunder hammer'] },
            { id: 'ai_grenadier', name: 'ASSAULT INTERCESSOR GRENADIER', limit: 1, stats: { apg: 3, b: '6"', rw: '3+', lp: 14 }, abilities: ['<strong>Grenadier:</strong> Free frag/krak grenades, +1 Hit stat when using them.'], fixedWeapons: ['Heavy bolt pistol', 'Chainsword'] },
            { id: 'hi_gunner', name: 'HEAVY INTERCESSOR GUNNER', limit: 1, stats: { apg: 3, b: '5"', rw: '3+', lp: 18 }, abilities: [], fixedWeapons: ['Bolt pistol', 'Heavy bolter', 'Fists'] },
            { id: 'i_gunner', name: 'INTERCESSOR GUNNER', limit: 1, stats: { apg: 3, b: '6"', rw: '3+', lp: 14 }, abilities: [], weaponSelect1: ['Auto bolt rifle & grenade launcher', 'Bolt rifle & grenade launcher', 'Stalker bolt rifle & grenade launcher'], fixedWeapons: ['Fists'] },
            { id: 'e_sniper', name: 'ELIMINATOR SNIPER', limit: 1, stats: { apg: 3, b: '7"', rw: '3+', lp: 12 }, abilities: ['<strong>Camo Cloak:</strong> Ignore Saturate. Has Stealthy tactic and can use both options.', '<strong>Optics (1 AP):</strong> Enemy cannot be obscured when this operative shoots.'], fixedWeapons: ['Bolt pistol', 'Bolt sniper rifle', 'Fists'] },
            { id: 'ai_warrior_1', name: 'ASSAULT INTERCESSOR WARRIOR (1)', limit: 1, stats: { apg: 3, b: '6"', rw: '3+', lp: 14 }, abilities: [], fixedWeapons: ['Heavy bolt pistol', 'Chainsword'] },
            { id: 'ai_warrior_2', name: 'ASSAULT INTERCESSOR WARRIOR (2)', limit: 1, stats: { apg: 3, b: '6"', rw: '3+', lp: 14 }, abilities: [], fixedWeapons: ['Heavy bolt pistol', 'Chainsword'] },
            { id: 'ai_warrior_3', name: 'ASSAULT INTERCESSOR WARRIOR (3)', limit: 1, stats: { apg: 3, b: '6"', rw: '3+', lp: 14 }, abilities: [], fixedWeapons: ['Heavy bolt pistol', 'Chainsword'] },
            { id: 'ai_warrior_4', name: 'ASSAULT INTERCESSOR WARRIOR (4)', limit: 1, stats: { apg: 3, b: '6"', rw: '3+', lp: 14 }, abilities: [], fixedWeapons: ['Heavy bolt pistol', 'Chainsword'] },
            { id: 'ai_warrior_5', name: 'ASSAULT INTERCESSOR WARRIOR (5)', limit: 1, stats: { apg: 3, b: '6"', rw: '3+', lp: 14 }, abilities: [], fixedWeapons: ['Heavy bolt pistol', 'Chainsword'] },
            { id: 'i_warrior_1', name: 'INTERCESSOR WARRIOR (1)', limit: 1, stats: { apg: 3, b: '6"', rw: '3+', lp: 14 }, abilities: [], weaponSelect1: ['Auto bolt rifle', 'Bolt rifle', 'Stalker bolt rifle'], fixedWeapons: ['Fists'] },
            { id: 'i_warrior_2', name: 'INTERCESSOR WARRIOR (2)', limit: 1, stats: { apg: 3, b: '6"', rw: '3+', lp: 14 }, abilities: [], weaponSelect1: ['Auto bolt rifle', 'Bolt rifle', 'Stalker bolt rifle'], fixedWeapons: ['Fists'] },
            { id: 'i_warrior_3', name: 'INTERCESSOR WARRIOR (3)', limit: 1, stats: { apg: 3, b: '6"', rw: '3+', lp: 14 }, abilities: [], weaponSelect1: ['Auto bolt rifle', 'Bolt rifle', 'Stalker bolt rifle'], fixedWeapons: ['Fists'] },
            { id: 'i_warrior_4', name: 'INTERCESSOR WARRIOR (4)', limit: 1, stats: { apg: 3, b: '6"', rw: '3+', lp: 14 }, abilities: [], weaponSelect1: ['Auto bolt rifle', 'Bolt rifle', 'Stalker bolt rifle'], fixedWeapons: ['Fists'] },
            { id: 'i_warrior_5', name: 'INTERCESSOR WARRIOR (5)', limit: 1, stats: { apg: 3, b: '6"', rw: '3+', lp: 14 }, abilities: [], weaponSelect1: ['Auto bolt rifle', 'Bolt rifle', 'Stalker bolt rifle'], fixedWeapons: ['Fists'] }
        ],
        de: [
            { id: 'leader_cap', name: 'CAPTAIN DER SPACE MARINES', limit: 1, isLeader: true, stats: { apg: 3, b: '6"', rw: '3+', lp: 15 }, abilities: ['<strong>Heldenhafter Anführer:</strong> Gefechtslist 0 BP, Kampfdoktrin 0 BP, oder Doktrin anpassen 0 BP.', '<strong>Stählerner Stern:</strong> Einmal pro Gefecht 1x Normalen Schaden ignorieren.'], weaponSelect1: ['Plasmapistole', 'Schwere Boltpistole'], weaponSelect2: ['Energiefaust', 'Energiewaffe', 'Energiehammer', 'Kettenschwert'] },
            { id: 'leader_ais', name: 'STURM-INTERCESSOR-SERGEANT', limit: 1, isLeader: true, stats: { apg: 3, b: '6"', rw: '3+', lp: 15 }, abilities: ['<strong>Indoktrinierte Kriegsführung:</strong> Kampfdoktrin (Sturm oder Taktisch) für 0 BP (1x pro Gefecht).', '<strong>Ordensveteran:</strong> Zusätzliche Ordenstaktik.'], weaponSelect1: ['Schwere Boltpistole', 'Flammenpistole', 'Plasmapistole'], weaponSelect2: ['Kettenschwert', 'Energiefaust', 'Energiewaffe', 'Energiehammer'] },
            { id: 'leader_is', name: 'INTERCESSOR-SERGEANT', limit: 1, isLeader: true, stats: { apg: 3, b: '6"', rw: '3+', lp: 15 }, abilities: ['<strong>Indoktrinierte Kriegsführung:</strong> Kampfdoktrin (Devastor oder Taktisch) für 0 BP (1x pro Gefecht).', '<strong>Ordensveteran:</strong> Zusätzliche Ordenstaktik.'], weaponSelect1: ['Boltgewehr', 'Sturmboltgewehr', 'Stalker-Boltgewehr'], weaponSelect2: ['Fäuste', 'Kettenschwert', 'Energiefaust', 'Energiewaffe', 'Energiehammer'] },
            { id: 'ai_grenadier', name: 'STURM-INTERCESSOR-GRENADIER', limit: 1, stats: { apg: 3, b: '6"', rw: '3+', lp: 14 }, abilities: ['<strong>Grenadier:</strong> Kostenlose Fragment/Sprenggranaten, +1 TW wenn benutzt.'], fixedWeapons: ['Schwere Boltpistole', 'Kettenschwert'] },
            { id: 'hi_gunner', name: 'SCHWERER INTERCESSOR-SCHÜTZE', limit: 1, stats: { apg: 3, b: '5"', rw: '3+', lp: 18 }, abilities: [], fixedWeapons: ['Boltpistole', 'Schwerer Bolter', 'Fäuste'] },
            { id: 'i_gunner', name: 'INTERCESSOR-SCHÜTZE', limit: 1, stats: { apg: 3, b: '6"', rw: '3+', lp: 14 }, abilities: [], weaponSelect1: ['Sturmboltgewehr & Granatwerfer', 'Boltgewehr & Granatwerfer', 'Stalker-Boltgewehr & Granatwerfer'], fixedWeapons: ['Fäuste'] },
            { id: 'e_sniper', name: 'ELIMINATOR-SCHARFSCHÜTZE', limit: 1, stats: { apg: 3, b: '7"', rw: '3+', lp: 12 }, abilities: ['<strong>Tarnumhang:</strong> Ignoriert Hagel. Hat Getarnt Taktik und nutzt beide Optionen.', '<strong>Zieloptik (1 AP):</strong> Feinde können beim Schießen nicht verdeckt sein.'], fixedWeapons: ['Boltpistole', 'Bolt-Scharfschützengewehr', 'Fäuste'] },
            { id: 'ai_warrior_1', name: 'STURM-INTERCESSOR-KRIEGER (1)', limit: 1, stats: { apg: 3, b: '6"', rw: '3+', lp: 14 }, abilities: [], fixedWeapons: ['Schwere Boltpistole', 'Kettenschwert'] },
            { id: 'ai_warrior_2', name: 'STURM-INTERCESSOR-KRIEGER (2)', limit: 1, stats: { apg: 3, b: '6"', rw: '3+', lp: 14 }, abilities: [], fixedWeapons: ['Schwere Boltpistole', 'Kettenschwert'] },
            { id: 'ai_warrior_3', name: 'STURM-INTERCESSOR-KRIEGER (3)', limit: 1, stats: { apg: 3, b: '6"', rw: '3+', lp: 14 }, abilities: [], fixedWeapons: ['Schwere Boltpistole', 'Kettenschwert'] },
            { id: 'ai_warrior_4', name: 'STURM-INTERCESSOR-KRIEGER (4)', limit: 1, stats: { apg: 3, b: '6"', rw: '3+', lp: 14 }, abilities: [], fixedWeapons: ['Schwere Boltpistole', 'Kettenschwert'] },
            { id: 'ai_warrior_5', name: 'STURM-INTERCESSOR-KRIEGER (5)', limit: 1, stats: { apg: 3, b: '6"', rw: '3+', lp: 14 }, abilities: [], fixedWeapons: ['Schwere Boltpistole', 'Kettenschwert'] },
            { id: 'i_warrior_1', name: 'INTERCESSOR-KRIEGER (1)', limit: 1, stats: { apg: 3, b: '6"', rw: '3+', lp: 14 }, abilities: [], weaponSelect1: ['Sturmboltgewehr', 'Boltgewehr', 'Stalker-Boltgewehr'], fixedWeapons: ['Fäuste'] },
            { id: 'i_warrior_2', name: 'INTERCESSOR-KRIEGER (2)', limit: 1, stats: { apg: 3, b: '6"', rw: '3+', lp: 14 }, abilities: [], weaponSelect1: ['Sturmboltgewehr', 'Boltgewehr', 'Stalker-Boltgewehr'], fixedWeapons: ['Fäuste'] },
            { id: 'i_warrior_3', name: 'INTERCESSOR-KRIEGER (3)', limit: 1, stats: { apg: 3, b: '6"', rw: '3+', lp: 14 }, abilities: [], weaponSelect1: ['Sturmboltgewehr', 'Boltgewehr', 'Stalker-Boltgewehr'], fixedWeapons: ['Fäuste'] },
            { id: 'i_warrior_4', name: 'INTERCESSOR-KRIEGER (4)', limit: 1, stats: { apg: 3, b: '6"', rw: '3+', lp: 14 }, abilities: [], weaponSelect1: ['Sturmboltgewehr', 'Boltgewehr', 'Stalker-Boltgewehr'], fixedWeapons: ['Fäuste'] },
            { id: 'i_warrior_5', name: 'INTERCESSOR-KRIEGER (5)', limit: 1, stats: { apg: 3, b: '6"', rw: '3+', lp: 14 }, abilities: [], weaponSelect1: ['Sturmboltgewehr', 'Boltgewehr', 'Stalker-Boltgewehr'], fixedWeapons: ['Fäuste'] }
        ]
    };
const WEAPONS_DB = {
    en: {
    "Hand flamer": {
        "a": "4",
        "h": "2+",
        "d": "3/3",
        "wr": "Range 6\", Saturate, Torrent 1\""
    },
    "Heavy bolt pistol": {
        "a": "4",
        "h": "3+",
        "d": "3/4",
        "wr": "Range 8\", Piercing Crits 1"
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
    "Chainsword": {
        "a": "5",
        "h": "3+",
        "d": "4/5",
        "wr": "-"
    },
    "Power fist": {
        "a": "5",
        "h": "3+",
        "d": "5/7",
        "wr": "Brutal Heroic Leader: Once per turning point, you can do one of the following: • Use a firefight ploy for 0CP if this is the specified ANGEL OF DEATH operative (excluding Command Re-roll). •  Use the Combat Doctrine strategy ploy when you activate a friendly ANGEL OF DEATH operative if this operative is in the"
    },
    "Power weapon": {
        "a": "4",
        "h": "3+",
        "d": "4/6",
        "wr": "Lethal 5+"
    },
    "Thunder hammer": {
        "a": "4",
        "h": "4+",
        "d": "5/6",
        "wr": "Shock, Stun ANGEL OF DEATH , IMPERIUM, APEPTUS ASTARTES, LEADER, INTERCESSOR, SERGEANT INTERCESSOR SERGEANT 3"
    },
    "Auto bolt rifle": {
        "a": "4",
        "h": "3+",
        "d": "3/4",
        "wr": "Torrent 1\""
    },
    "Bolt rifle": {
        "a": "4",
        "h": "3+",
        "d": "3/4",
        "wr": "Piercing Crits 1"
    },
    "Stalker bolt rifle (heavy)": {
        "a": "4",
        "h": "3+",
        "d": "3/5",
        "wr": "Heavy (Dash only), Lethal 5+, Piercing Crits 1"
    },
    "Stalker bolt rifle (mobile)": {
        "a": "4",
        "h": "3+",
        "d": "3/4",
        "wr": "-"
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
    "Heavy bolter (focused)": {
        "a": "5",
        "h": "3+",
        "d": "4/5",
        "wr": "Piercing Crits 1"
    },
    "Heavy bolter (sweeping)": {
        "a": "4",
        "h": "3+",
        "d": "4/5",
        "wr": "Piercing Crits 1, Torrent 1\""
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
    "Bolt sniper rifle (executioner)": {
        "a": "4",
        "h": "2+",
        "d": "3/4",
        "wr": "Heavy (Dash only), Saturate, Seek Light, Silent"
    },
    "Bolt sniper rifle (hyperfrag)": {
        "a": "4",
        "h": "2+",
        "d": "2/4",
        "wr": "Blast 1\", Heavy (Dash only), Silent"
    },
    "Bolt sniper rifle (mortis)": {
        "a": "4",
        "h": "2+",
        "d": "3/3",
        "wr": "Devastating 3, Heavy (Dash only), Piercing 1, Silent"
    }
},
    de: {
    "Flammenpistole": {
        "a": "4",
        "h": "2+",
        "d": "3/3",
        "wr": "Reichweite 6 Zoll, Hagel, Schwall 1 Zoll"
    },
    "Schwere Boltpistole": {
        "a": "4",
        "h": "3+",
        "d": "3/4",
        "wr": "Reichweite 8 Zoll, Krit. durchdringend 1"
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
    "Kettenschwert": {
        "a": "5",
        "h": "3+",
        "d": "4/5",
        "wr": "-"
    },
    "Energiefaust": {
        "a": "5",
        "h": "3+",
        "d": "5/7",
        "wr": "Brutal Heldenhafter Anführer: Einmal pro Wendepunkt kannst du eine der folgenden Optionen wahrnehmen: •  Eine Gefechtslist für 0 BP einsetzen, wenn dies der angegebene"
    },
    "Energiewaffe": {
        "a": "4",
        "h": "3+",
        "d": "4/6",
        "wr": "Tödlich 5+"
    },
    "Energiehammer": {
        "a": "4",
        "h": "4+",
        "d": "5/6",
        "wr": "Betäuben, Schock ENGEL DES TODES , IMPERIUM, APEPTUS ASTARTES, ANFÜHRER, INTERCESSOR, SERGEANT INTERCESSOR-SERGEANT 3"
    },
    "Sturmboltgewehr": {
        "a": "4",
        "h": "3+",
        "d": "3/4",
        "wr": "Schwall 1 Zoll"
    },
    "Boltgewehr": {
        "a": "4",
        "h": "3+",
        "d": "3/4",
        "wr": "Krit. durchdringend 1"
    },
    "Stalker-Boltgewehr (schwer)": {
        "a": "4",
        "h": "3+",
        "d": "3/5",
        "wr": "Schwer (nur Sprinten), Tödlich 5+, Krit. durchdringend 1"
    },
    "Stalker-Boltgewehr (in Bewegung)": {
        "a": "4",
        "h": "3+",
        "d": "3/4",
        "wr": "-"
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
    "Schwerer Bolter (gezielt)": {
        "a": "5",
        "h": "3+",
        "d": "4/5",
        "wr": "Krit. durchdringend 1"
    },
    "Schwerer Bolter (wahllos)": {
        "a": "4",
        "h": "3+",
        "d": "4/5",
        "wr": "Krit. durchdringend 1, Schwall 1 Zoll"
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
    "Bolt-Scharfschützengewehr": {
        "a": "4",
        "h": "2+",
        "d": "3/3",
        "wr": "Verheerend 3, Schwer (nur Sprinten), Durchdringend 1, (Mortis) Schalldämpfer"
    }
}
};
