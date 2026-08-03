
const PLOYS_DB = {
    en: {
        strategy: [
            { name: "Blood for the Blood God", desc: "Khorne: +1 Dmg to both stats. Others: First strike inflicts +1 Dmg." },
            { name: "Implacable", desc: "Enemy Piercing 1 becomes Piercing Crits 1. Nurgle ignores injured stats." },
            { name: "Quicksilver Speed", desc: "Worsen enemy melee Hit stat by 1 if moved. Slaanesh worsens ranged Hit stat." },
            { name: "Fickle Fates", desc: "Ranged weapons gain Balanced. Tzeentch: retain 1 fail as normal if retaining a crit." }
        ],
        firefight: [
            { name: "Unending Bloodshed", desc: "Khorne: When dying in combat, strike with one unresolved success before removal." },
            { name: "Mutability and Change", desc: "Tzeentch: +1 APL, but cannot repeat actions." },
            { name: "Malignant Aura", desc: "Nurgle: Ranged weapons gain Piercing 1 against targets within 3\"." },
            { name: "Dark Favor", desc: "Select one operative to temporarily gain a Chaos Mark bonus." }
        ]
    },
    de: {
        strategy: [
            { name: "Blut für den Blutgott", desc: "Khorne: +1 Schaden auf beide Werte. Andere: Erster Schlag fügt +1 Schaden zu." },
            { name: "Unverrückbar", desc: "Feindliches Durchdringend 1 wird zu Krit. Durchdringend 1. Nurgle ignoriert Verletzungs-Abzüge." },
            { name: "Widernatürliche Schnelligkeit", desc: "Verschlechtere Nahkampf-Trefferwert des Feindes um 1, wenn bewegt. Slaanesh Fernkampf." },
            { name: "Wankelmütiges Schicksal", desc: "Fernkampfwaffen erhalten Ausgewogen. Tzeentch: Behalte 1 Fehlschlag als normal." }
        ],
        firefight: [
            { name: "Endloses Blutvergießen", desc: "Khorne: Wenn im Nahkampf kampfunfähig, darfst du zuschlagen, bevor du entfernt wirst." },
            { name: "Mutabilität und Wandel", desc: "Tzeentch: +1 APG, aber keine Aktion wiederholen." },
            { name: "Böse Aura", desc: "Nurgle: Fernkampfwaffen erhalten Durchdringend 1 gegen Ziele in 3\"." },
            { name: "Dunkle Gunst", desc: "Ein Kämpfer erhält temporär einen Mal des Chaos-Bonus." }
        ]
    }
};

const translations = {
        en: {
            legalDisclaimer: "This is an unofficial fan-made utility. Warhammer 40,000, Kill Team, and all associated logos, names, and statistics are © Copyright Games Workshop Limited. This tool is provided for free and is not affiliated with, or endorsed by, Games Workshop in any way.",
            title: "LEGIONARY",
            tabAssemble: "ASSEMBLE TEAM",
            tabMatch: "MATCH TRACKER",
            tabTokens: "TOKENS / TRACKERS",
            tabRules: "RULES",
        resetPloysBtn: "RESET PLOYS",
            builderDesc: "Select 1 Leader (Aspiring Champion or Chosen) and 5 other operatives. (Max 1 each, except Warrior)",
            selectedText: "Selected:",
            startMatchBtn: "START MATCH <i class=\"fa-solid fa-arrow-right\"></i>",
            activeTeam: "ACTIVE TEAM",
            activeTeamDesc: "Track the Wounds of your operatives.",
            tokensTitle: "TOKENS & TRACKERS",
            tokensDesc: "Track Marks of Chaos, Unleash Daemon, Tainted Rounds, and other effects.",
            newTargetBtn: "New Tracker",
            rulesFaction: "Faction Rules",
        ruleChaosMarks: "<strong>Marks of Chaos:</strong> Operatives dedicate themselves to Khorne (melee), Nurgle (defense), Tzeentch (shooting), or Slaanesh (speed).",
        ruleVeterans: "<strong>Veterans of the Long War:</strong> Highly skilled Chaos Space Marines with centuries of combat experience.",
        ruleHateful: "<strong>Hateful Assault:</strong> Fight twice if an enemy was incapacitated.",

rulesStrategy: "Strategy Ploys",
            rulesFirefight: "Firefight Ploys",
            ruleAstartes: "<strong>Astartes:</strong> Perform either 2 Shoot actions or 2 Fight actions. If 2 Shoots, at least one must be a bolt pistol, boltgun, or tainted bolt pistol. Can counteract regardless of order.",
            ruleMarks: "<strong>Marks of Chaos:</strong> Give each operative a keyword: KHORNE (Severe melee), NURGLE (On Normal Dmg 3+, roll D6: 5+ reduce by 1), SLAANESH (+1\" Move), TZEENTCH (Severe ranged), UNDIVIDED (Ceaseless within 6\").",
            stratBlood: "<strong>Blood for the Blood God:</strong> Khorne: +1 Dmg to both stats. Others: First strike inflicts +1 Dmg.",
            stratImplacable: "<strong>Implacable:</strong> Enemy Piercing 1 becomes Piercing Crits 1. Nurgle ignores injured stats.",
            stratQuick: "<strong>Quicksilver Speed:</strong> Worsen enemy melee Hit stat by 1 if moved. Slaanesh worsens enemy ranged Hit stat by 1 if moved.",
            stratFickle: "<strong>Fickle Fates:</strong> Ranged weapons gain Balanced. Tzeentch: retain 1 fail as normal if retaining a crit.",
            fireUnending: "<strong>Unending Bloodshed:</strong> Khorne: When dying in combat, strike with one unresolved success before removal.",
            fireMutability: "<strong>Mutability and Change:</strong> Tzeentch: +1 APL, but cannot repeat actions.",
            fireMalignant: "<strong>Malignant Aura:</strong> Nurgle: Ranged weapons gain Piercing 1 against targets within 3\".",
            fireSickening: "<strong>Sickening Captivation:</strong> Slaanesh: Enemy in 4\" gets -1 APL.",
            statApg: "APL",
            statB: "MOVE",
            statRw: "SAVE",
            statLp: "WOUNDS",
            abilitiesHeader: "Abilities"
        },
        de: {
            legalDisclaimer: "Dies ist ein inoffizielles, von Fans erstelltes Hilfsprogramm. Warhammer 40.000, Kill Team und alle zugehörigen Logos, Namen und Statistiken sind © Copyright Games Workshop Limited. Dieses Tool wird kostenlos zur Verfügung gestellt und ist in keiner Weise mit Games Workshop verbunden oder wird von Games Workshop unterstützt.",
            title: "LEGIONEN",
            tabAssemble: "TEAM BAUEN",
            tabMatch: "MATCH TRACKER",
            tabTokens: "MARKER / TRACKER",
            tabRules: "REGELN",
        resetPloysBtn: "PLOYS ZURÜCKSETZEN",
            builderDesc: "Wähle 1 Anführer (Aufstrebender Champion oder Auserkorener) und 5 weitere Kämpfer. (Max 1 von jedem, außer Krieger)",
            selectedText: "Ausgewählt:",
            startMatchBtn: "MATCH STARTEN <i class=\"fa-solid fa-arrow-right\"></i>",
            activeTeam: "AKTIVES TEAM",
            activeTeamDesc: "Verfolge die Lebenspunkte (LP) deiner Kämpfer.",
            tokensTitle: "MARKER & TRACKER",
            tokensDesc: "Verfolge Male des Chaos, Dämon entfesseln, Verderbte Geschosse und andere Effekte.",
            newTargetBtn: "Neuer Tracker",
            rulesFaction: "Fraktionsregeln",
        ruleChaosMarks: "<strong>Male des Chaos:</strong> Kämpfer weihen sich Khorne (Nahkampf), Nurgle (Verteidigung), Tzeentch (Schießen) oder Slaanesh (Geschwindigkeit).",
        ruleVeterans: "<strong>Veteranen des Langen Krieges:</strong> Hochqualifizierte Chaos Space Marines mit jahrhundertelanger Kampferfahrung.",
        ruleHateful: "<strong>Hasserfüllter Angriff:</strong> Kämpfe zweimal, wenn ein Feind ausgeschaltet wurde.",

            rulesStrategy: "Strategielisten (Ploys)",
            rulesFirefight: "Gefechtslisten (Tactical)",
            ruleAstartes: "<strong>Astartes:</strong> Kann zwei Aktionen Kämpfen oder Schießen ausführen (bei 2x Schießen muss eines Bolter/Boltpistole sein). Kann immer Gegenmaßnahmen ausführen.",
            ruleMarks: "<strong>Male des Chaos:</strong> Gib jedem Kämpfer ein Schlüsselwort: KHORNE (Heftig Nahkampf), NURGLE (Bei 3+ Normalschaden, W6: 5+ 1 Schaden weniger), SLAANESH (+1\" Bew.), TZEENTCH (Heftig Fernkampf), UNGETEILT (Unablässig in 6\").",
            stratBlood: "<strong>Blut für den Blutgott:</strong> Khorne: +1 Schaden auf beide Werte. Andere: Erster Schlag fügt +1 Schaden zu.",
            stratImplacable: "<strong>Unverrückbar:</strong> Feindliches Durchdringend 1 wird zu Krit. durchdringend 1. Nurgle ignoriert Verletzungs-Abzüge.",
            stratQuick: "<strong>Widernatürliche Schnelligkeit:</strong> Verschlechtere Nahkampf-Trefferwert des Feindes um 1, wenn bewegt. Slaanesh: Verschlechtert Fernkampf-Trefferwert des Feindes um 1.",
            stratFickle: "<strong>Wankelmütiges Schicksal:</strong> Fernkampfwaffen erhalten Ausgewogen. Tzeentch: Behalte 1 Fehlschlag als normal, wenn du einen krit. Erfolg behältst.",
            fireUnending: "<strong>Endloses Blutvergießen:</strong> Khorne: Wenn im Nahkampf kampfunfähig, darfst du mit einem ungelösten Erfolg zuschlagen, bevor du entfernt wirst.",
            fireMutability: "<strong>Mutabilität und Wandel:</strong> Tzeentch: +1 APG, aber keine Aktion wiederholen.",
            fireMalignant: "<strong>Böse Aura:</strong> Nurgle: Fernkampfwaffen erhalten Durchdringend 1 gegen Ziele in 3\".",
            fireSickening: "<strong>Degoutante Faszination:</strong> Slaanesh: Feind in 4\" erhält -1 APG.",
            statApg: "APG",
            statB: "B",
            statRw: "RW",
            statLp: "LP",
            abilitiesHeader: "Fähigkeiten"
        }
    };

    const OPERATIVES_DB = {
        en: [
            { id: 'leader_champ', name: 'ASPIRING CHAMPION', limit: 1, isLeader: true, stats: { apg: 3, b: '6"', rw: '3+', lp: 15 }, abilities: ['<strong>In the Eyes of the Gods:</strong> Once per activation, if it incapacitates an enemy, +1 APL.'], weaponSelect1: ['Plasma pistol', 'Tainted bolt pistol'], weaponSelect2: ['Power fist', 'Power maul', 'Power weapon', 'Tainted chainsword'] },
            { id: 'leader_chosen', name: 'CHOSEN', limit: 1, isLeader: true, stats: { apg: 3, b: '6"', rw: '3+', lp: 15 }, abilities: ['<strong>Daemonic Aura:</strong> 3+ to deny enemy Fall Back action.', '<strong>Soul Gorge:</strong> Heal D3+1 wounds when incapacitating an enemy in combat.'], weaponSelect1: ['Plasma pistol', 'Tainted bolt pistol'], fixedWeapons: ['Daemon blade'] },
            { id: 'anointed', name: 'ANOINTED', limit: 1, stats: { apg: 3, b: '6"', rw: '3+', lp: 14 }, abilities: ['<strong>Unleash Daemon:</strong> Once per battle, lose obj actions. Reduce dmg by 1. Claw gets Ceaseless and Lethal 5+.'], fixedWeapons: ['Bolt pistol', 'Daemonic claw'] },
            { id: 'balefire', name: 'BALEFIRE ACOLYTE', limit: 1, noKhorne: true, stats: { apg: 3, b: '6"', rw: '3+', lp: 14 }, abilities: ['<strong>Siphon Life:</strong> Friendly within 6" heals 1 (or D3 on crit) for each successful attack dice. (Cannot be Khorne)'], fixedWeapons: ['Bolt pistol', 'Fireblast', 'Life siphon', 'Fell dagger'] },
            { id: 'butcher', name: 'BUTCHER', limit: 1, stats: { apg: 3, b: '6"', rw: '3+', lp: 14 }, abilities: ['<strong>Devastating Onslaught:</strong> Enemies cannot assist. Free 2" Charge at end of enemy activation.'], fixedWeapons: ['Bolt pistol', 'Double-handed chainaxe'] },
            { id: 'gunner', name: 'GUNNER', limit: 1, stats: { apg: 3, b: '6"', rw: '3+', lp: 14 }, abilities: [], weaponSelect1: ['Flamer', 'Meltagun', 'Plasma gun'], fixedWeapons: ['Bolt pistol', 'Fists'] },
            { id: 'heavy', name: 'HEAVY GUNNER', limit: 1, stats: { apg: 3, b: '6"', rw: '3+', lp: 14 }, abilities: [], weaponSelect1: ['Heavy bolter', 'Missile launcher', 'Reaper chaincannon'], fixedWeapons: ['Bolt pistol', 'Fists'] },
            { id: 'icon', name: 'ICON BEARER', limit: 1, stats: { apg: 3, b: '6"', rw: '3+', lp: 14 }, abilities: ['<strong>Icon Bearer:</strong> +1 APL for controlling markers.', '<strong>Favoured of the Dark Gods:</strong> Taint an objective for 1CP.'], weaponSelect1: ['Boltgun; fists', 'Bolt pistol; chainsword'] },
            { id: 'shrivetalon', name: 'SHRIVETALON', limit: 1, stats: { apg: 3, b: '6"', rw: '3+', lp: 14 }, abilities: ['<strong>Grisly Mark (2 AP):</strong> Place marker. Enemies pay +1 AP for mission actions in 3". -1 APL to control.', '<strong>Vicious Reflexes:</strong> Defender strikes first in retaliation.', '<strong>Horrifying Dismemberment:</strong> -1 APL to nearby enemy on kill.'], fixedWeapons: ['Bolt pistol', 'Flensing blades'] },
            { id: 'warrior1_1', name: 'WARRIOR (1) (1)', limit: 1, stats: { apg: 3, b: '6"', rw: '3+', lp: 14 }, abilities: ['<strong>Infernal Pact:</strong> Once per battle, change Mark.'], weaponSelect1: ['Boltgun; fists', 'Bolt pistol; chainsword'] },
            { id: 'warrior1_2', name: 'WARRIOR (1) (2)', limit: 1, stats: { apg: 3, b: '6"', rw: '3+', lp: 14 }, abilities: ['<strong>Infernal Pact:</strong> Once per battle, change Mark.'], weaponSelect1: ['Boltgun; fists', 'Bolt pistol; chainsword'] },
            { id: 'warrior1_3', name: 'WARRIOR (1) (3)', limit: 1, stats: { apg: 3, b: '6"', rw: '3+', lp: 14 }, abilities: ['<strong>Infernal Pact:</strong> Once per battle, change Mark.'], weaponSelect1: ['Boltgun; fists', 'Bolt pistol; chainsword'] },
            { id: 'warrior1_4', name: 'WARRIOR (1) (4)', limit: 1, stats: { apg: 3, b: '6"', rw: '3+', lp: 14 }, abilities: ['<strong>Infernal Pact:</strong> Once per battle, change Mark.'], weaponSelect1: ['Boltgun; fists', 'Bolt pistol; chainsword'] },
            { id: 'warrior1_5', name: 'WARRIOR (1) (5)', limit: 1, stats: { apg: 3, b: '6"', rw: '3+', lp: 14 }, abilities: ['<strong>Infernal Pact:</strong> Once per battle, change Mark.'], weaponSelect1: ['Boltgun; fists', 'Bolt pistol; chainsword'] },
            { id: 'warrior2', name: 'WARRIOR (2)', limit: 1, stats: { apg: 3, b: '6"', rw: '3+', lp: 14 }, abilities: ['<strong>Infernal Pact:</strong> Once per battle, change Mark.'], weaponSelect1: ['Boltgun; fists', 'Bolt pistol; chainsword'] }
        ],
        de: [
            { id: 'leader_champ', name: 'AUFSTREBENDER CHAMPION', limit: 1, isLeader: true, stats: { apg: 3, b: '6"', rw: '3+', lp: 15 }, abilities: ['<strong>Im Blick der Götter:</strong> 1x pro Aktivierung: Bei Kill, +1 APG.'], weaponSelect1: ['Plasmapistole', 'Verderbte Boltpistole'], weaponSelect2: ['Energiefaust', 'Energiestreitkolben', 'Energiewaffe', 'Verderbtes Kettenschwert'] },
            { id: 'leader_chosen', name: 'AUSERKORENER', limit: 1, isLeader: true, stats: { apg: 3, b: '6"', rw: '3+', lp: 15 }, abilities: ['<strong>Dämonische Aura:</strong> 3+ blockiert feindliches Zurückziehen.', '<strong>Seelenschlinger:</strong> Heilt W3+1 LP nach Kill im Nahkampf.'], weaponSelect1: ['Plasmapistole', 'Verderbte Boltpistole'], fixedWeapons: ['Dämonenklinge'] },
            { id: 'anointed', name: 'GESALBTER', limit: 1, stats: { apg: 3, b: '6"', rw: '3+', lp: 14 }, abilities: ['<strong>Dämon entfesseln:</strong> 1x pro Gefecht: Keine Missionsaktionen. Reduziert Schaden um 1. Klaue erhält Unablässig und Tödlich 5+.'], fixedWeapons: ['Boltpistole', 'Dämonenklaue'] },
            { id: 'balefire', name: 'HEXENFEUER-AKOLYTH', limit: 1, noKhorne: true, stats: { apg: 3, b: '6"', rw: '3+', lp: 14 }, abilities: ['<strong>Lebenskraft absaugen:</strong> Befreundeter in 6" heilt 1 (W3 bei Krit) pro Erfolg. (Kann nicht Khorne sein)'], fixedWeapons: ['Boltpistole', 'Feuerball', 'Lebenssauger', 'Finsterer Dolch'] },
            { id: 'butcher', name: 'SCHLÄCHTER', limit: 1, stats: { apg: 3, b: '6"', rw: '3+', lp: 14 }, abilities: ['<strong>Vernichtendes Gemetzel:</strong> Feinde können nicht unterstützen. Kostenloser 2"-Angriff am Ende der Feind-Aktivierung.'], fixedWeapons: ['Boltpistole', 'Zweihändige Kettenaxt'] },
            { id: 'gunner', name: 'SCHÜTZE', limit: 1, stats: { apg: 3, b: '6"', rw: '3+', lp: 14 }, abilities: [], weaponSelect1: ['Flammenwerfer', 'Melter', 'Plasmawerfer'], fixedWeapons: ['Boltpistole', 'Fäuste'] },
            { id: 'heavy', name: 'SCHWERER SCHÜTZE', limit: 1, stats: { apg: 3, b: '6"', rw: '3+', lp: 14 }, abilities: [], weaponSelect1: ['Schwerer Bolter', 'Raketenwerfer', 'Schnitter-Gatlingkanone'], fixedWeapons: ['Boltpistole', 'Fäuste'] },
            { id: 'icon', name: 'IKONENTRÄGER', limit: 1, stats: { apg: 3, b: '6"', rw: '3+', lp: 14 }, abilities: ['<strong>Ikonenträger:</strong> +1 APG für Kontrolle von Markern.', '<strong>Gunst der Dunklen Götter:</strong> Verderbe ein Missionsziel für 1 BP.'], weaponSelect1: ['Bolter; Fäuste', 'Boltpistole; Kettenschwert'] },
            { id: 'shrivetalon', name: 'MARTERKRALLE', limit: 1, stats: { apg: 3, b: '6"', rw: '3+', lp: 14 }, abilities: ['<strong>Grausiges Zeichen (2 AP):</strong> Marker platzieren. Feinde in 3" zahlen +1 AP für Missionsaktionen. -1 APG für Kontrolle.', '<strong>Wilde Reflexe:</strong> Verteidiger schlägt zuerst zurück.', '<strong>Entsetzliche Zerstückelung:</strong> -1 APG für Feind in Nähe nach Kill.'], fixedWeapons: ['Boltpistole', 'Häuterklingen'] },
            { id: 'warrior1_1', name: 'KRIEGER (1) (1)', limit: 1, stats: { apg: 3, b: '6"', rw: '3+', lp: 14 }, abilities: ['<strong>Finsterer Pakt:</strong> 1x pro Gefecht Mal ändern.'], weaponSelect1: ['Bolter; Fäuste', 'Boltpistole; Kettenschwert'] },
            { id: 'warrior1_2', name: 'KRIEGER (1) (2)', limit: 1, stats: { apg: 3, b: '6"', rw: '3+', lp: 14 }, abilities: ['<strong>Finsterer Pakt:</strong> 1x pro Gefecht Mal ändern.'], weaponSelect1: ['Bolter; Fäuste', 'Boltpistole; Kettenschwert'] },
            { id: 'warrior1_3', name: 'KRIEGER (1) (3)', limit: 1, stats: { apg: 3, b: '6"', rw: '3+', lp: 14 }, abilities: ['<strong>Finsterer Pakt:</strong> 1x pro Gefecht Mal ändern.'], weaponSelect1: ['Bolter; Fäuste', 'Boltpistole; Kettenschwert'] },
            { id: 'warrior1_4', name: 'KRIEGER (1) (4)', limit: 1, stats: { apg: 3, b: '6"', rw: '3+', lp: 14 }, abilities: ['<strong>Finsterer Pakt:</strong> 1x pro Gefecht Mal ändern.'], weaponSelect1: ['Bolter; Fäuste', 'Boltpistole; Kettenschwert'] },
            { id: 'warrior1_5', name: 'KRIEGER (1) (5)', limit: 1, stats: { apg: 3, b: '6"', rw: '3+', lp: 14 }, abilities: ['<strong>Finsterer Pakt:</strong> 1x pro Gefecht Mal ändern.'], weaponSelect1: ['Bolter; Fäuste', 'Boltpistole; Kettenschwert'] },
            { id: 'warrior2', name: 'KRIEGER (2)', limit: 1, stats: { apg: 3, b: '6"', rw: '3+', lp: 14 }, abilities: ['<strong>Finsterer Pakt:</strong> 1x pro Gefecht Mal ändern.'], weaponSelect1: ['Bolter; Fäuste', 'Boltpistole; Kettenschwert'] }
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
    "Tainted bolt pistol": {
        "a": "4",
        "h": "3+",
        "d": "3/5",
        "wr": "Range 8\", Rending"
    },
    "Daemon blade": {
        "a": "5",
        "h": "3+",
        "d": "4/7",
        "wr": "Lethal 5+ Daemonic Aura: Whenever an enemy operative performs the Fall Back action while within control range of this operative, you can use this rule. If you do, roll one D6: on a 3+, that enemy"
    },
    "Bolt pistol": {
        "a": "4",
        "h": "3+",
        "d": "3/4",
        "wr": "Range 8\""
    },
    "Fireblast": {
        "a": "4",
        "h": "3+",
        "d": "3/4",
        "wr": "PSYCHIC , Blast 2\", 1\" Devastating 1, Saturate"
    },
    "Life siphon": {
        "a": "5",
        "h": "3+",
        "d": "3/3",
        "wr": "PSYCHIC ,  Saturate, Siphon Life*"
    },
    "Fell dagger": {
        "a": "5",
        "h": "3+",
        "d": "3/4",
        "wr": "PSYCHIC , Rending, Siphon Life* *Siphon Life: When you select this weapon, you can use this rule. If you do, at the start of the Resolve Attack Dice step, select one friendly LEGIONARY operative visible to and within 6\" of this operative. For each attack dice you resolve during that step that inflicts damage, that friendly operative regains 1 lost wound, or D3 lost wounds if it was a critical success. You cannot use this weapon"
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
    "Tainted chainsword": {
        "a": "5",
        "h": "3+",
        "d": "4/5",
        "wr": "Rending In the Eyes of the Gods: Once during each of this operative’s activations, if it incapacitates an enemy operative, add 1 to its APL stat until the end of that activation. LEGIONARY , CHAOS, HERETIC ASTARTES, LEADER, ASPIRING CHAMPION"
    },
    "Daemonic claw": {
        "a": "5",
        "h": "3+",
        "d": "4/5",
        "wr": "Rending Unleash Daemon: Once per battle, when this operative is activated, you can use this rule. If you do, until the end of the battle: •  This operative cannot perform the Pick Up Marker or mission actions (excluding Operate Hatch). If it’s carrying a marker, it must immediately perform the Place Marker action for 0AP (this takes precedence over all other rules)."
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
    "Boltgun": {
        "a": "4",
        "h": "3+",
        "d": "3/4",
        "wr": "-"
    },
    "Chainsword": {
        "a": "5",
        "h": "3+",
        "d": "4/5",
        "wr": "-"
    },
    "Double-handed chainaxe": {
        "a": "5",
        "h": "4+",
        "d": "5/7",
        "wr": "Brutal Devastating Onslaught: •  Whenever this operative is fighting or retaliating, enemy operatives cannot assist."
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
    "Reaper chaincannon (focused)": {
        "a": "5",
        "h": "3+",
        "d": "3/4",
        "wr": "Ceaseless, Heavy (Reposition only), Punishing Reaper chaincannon (sweeping) 4 3+ 3/4"
    },
    "Flensing blades": {
        "a": "5",
        "h": "3+",
        "d": "3/5",
        "wr": "Lethal 5+ Vicious Reflexes: Whenever this operative is retaliating, you resolve the first attack dice (i.e. defender instead of attacker). Horrifying Dismemberment: Whenever this operative"
    },
    "Malefic blade": {
        "a": "5",
        "h": "3+",
        "d": "3/4",
        "wr": "LEGIONARIES: UPDATE LOG\b Rules will be periodically updated to maintain fair balance and interact more smoothly with the game. Rules changes will be updated directly into online documents and then listed below. Any minor changes to standardise wording that don’t have any practical impact on the rule will be updated directly into online documents but not be listed here."
    }
},
    de: {
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
    "Verderbte Boltpistole": {
        "a": "4",
        "h": "3+",
        "d": "3/5",
        "wr": "Reichweite 8 Zoll, Rüstungsbrechend"
    },
    "Dämonenklinge": {
        "a": "5",
        "h": "3+",
        "d": "4/7",
        "wr": "Tödlich 5+ Dämonische Aura: Jedes Mal, wenn ein feindlicher Kämpfer die Ak- tion Zurückziehen ausführt, während er sich in Kontrollreichweite dieses Kämpfers befindet, kannst du diese Regel einsetzen. Wenn du"
    },
    "Boltpistole": {
        "a": "4",
        "h": "3+",
        "d": "3/4",
        "wr": "Reichweite 8 Zoll"
    },
    "Feuerball": {
        "a": "4",
        "h": "3+",
        "d": "3/4",
        "wr": "Explosiv 2 Zoll, Verheerend 1 (1 Zoll), Hagel, PSIONISCH"
    },
    "Lebenssauger": {
        "a": "5",
        "h": "3+",
        "d": "3/3",
        "wr": "Hagel, PSIONISCH, Lebenskraft absaugen*"
    },
    "Finsterer Dolch": {
        "a": "5",
        "h": "3+",
        "d": "3/4",
        "wr": "Rüstungsbrechend, PSIONISCH, Lebenskraft absaugen* *Lebenskraft absaugen: Wenn du diese Waffe wählst, kannst du diese Regel einsetzen. Wenn du dies tust, wähle zu Beginn des Schritts „Attacken würfel werfen“ einen für diesen Kämpfer sichtbaren, befreundeten LEGIONEN -Kämpfer innerhalb von 6 Zoll um diesen Kämp- fer. Für jeden Attackenwürfel, den du in jenem Schritt abhandelst und der Schaden zufügt, erhält jener befreundete Kämpfer 1 verlorenen Le-"
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
        "wr": "Tödlich 5+"
    },
    "Verderbtes Kettenschwert": {
        "a": "5",
        "h": "3+",
        "d": "4/5",
        "wr": "Rüstungsbrechend Im Blick der Götter: Einmal während jeder Aktivierung dieses Kämpfers, wenn er einen feindlichen Kämpfer kampfunfähig macht, addiere bis zum Ende jener Aktivierung 1 auf seinen APG-Wert. LEGIONEN , CHAOS, HÄRETIKER-ASTARTES, ANFÜHRER, AUFSTREBENDER CHAMPION"
    },
    "Dämonenklaue": {
        "a": "5",
        "h": "3+",
        "d": "4/5",
        "wr": "Rüstungsbrechend Dämon entfesseln: Einmal pro Gefecht, wenn dieser Kämpfer aktiviert wird, kannst du diese Regel einsetzen. Wenn du dies tust, gilt bis zum Ende des Gefechts: •  Dieser Kämpfer kann nicht die Aktion Marker aufsammeln"
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
        "wr": "Reichweite 6 Zoll, Durchdringend 2, Verheerend 4"
    },
    "Plasmawerfer (Standard)": {
        "a": "4",
        "h": "3+",
        "d": "4/6",
        "wr": "Durchdringend 1"
    },
    "Plasmawerfer (Überladung)": {
        "a": "4",
        "h": "3+",
        "d": "5/6",
        "wr": "Heiß, Durchdringend 1, Tödlich 5+"
    },
    "Fäuste": {
        "a": "4",
        "h": "3+",
        "d": "3/4",
        "wr": "-"
    },
    "Bolter": {
        "a": "4",
        "h": "3+",
        "d": "3/4",
        "wr": "-"
    },
    "Kettenschwert": {
        "a": "5",
        "h": "3+",
        "d": "4/5",
        "wr": "-"
    },
    "Zweihändige Kettenaxt": {
        "a": "5",
        "h": "4+",
        "d": "5/7",
        "wr": "Brutal Vernichtendes Gemetzel: •  Jedes Mal, wenn dieser Kämpfer kämpft oder zurückschlägt, kön- nen feindliche Kämpfer nicht unterstützen."
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
    "Schnitter-Gatlingkanone (gezielt)": {
        "a": "5",
        "h": "3+",
        "d": "3/4",
        "wr": "Unablässig, Schwer (nur Positionswechsel), Peinigend Schnitter-Gatlingkanone (wahllos) 4 3+ 3/4"
    },
    "Häuterklingen": {
        "a": "5",
        "h": "3+",
        "d": "3/5",
        "wr": "Tödlich 5+ Wilde Reflexe: Jedes Mal, wenn dieser Kämpfer zurückschlägt, handelst du den ersten Attackenwurf ab (also der Verteidiger statt der Attackierende)."
    },
    "Bösartige Klinge": {
        "a": "5",
        "h": "3+",
        "d": "3/4",
        "wr": "LEGIONEN: UPDATE-LOG\b Zur Verbesserung des Spielflusses und der Ausgewogenheit überarbeiten wir regelmäßig die Regeln des Spiels. Nötige Än- derungen werden unmittelbar in die Online-Dokumente übernommen und außerdem im Folgenden aufgeführt. Geringfügige Anpassungen von Formulierungen, die keine praktischen Auswirkungen auf die Funktionsweise einer Regel haben, werden"
    }
}
};
