
const PLOYS_DB = {
    en: {
        strategy: [
            { name: "Exact Punishment", desc: "Add 1 to normal damage when fighting/shooting an enemy with Ruthless Efficiency." },
            { name: "Subdue", desc: "Melee weapons gain Stun." },
            { name: "Execution Order", desc: "Re-roll 1s to hit against the enemy Leader." },
            { name: "Dispense Justice", desc: "Free Dash towards the closest enemy." }
        ],
        firefight: [
            { name: "Repress", desc: "When defending in combat, parries discard two successful hits instead of one." },
            { name: "Apprehend", desc: "Prevent an enemy from falling back if a Mastiff is engaged." },
            { name: "Clear the Area", desc: "Push enemies away 1\" after combat." },
            { name: "Voice of the Law", desc: "Leader can issue a free action to a nearby Arbites." }
        ]
    },
    de: {
        strategy: [
            { name: "Strafe vollstrecken", desc: "Füge 1 zu normalem Schaden hinzu gegen Feinde mit Skrupellose Effizienz." },
            { name: "Unterwerfen", desc: "Nahkampfwaffen erhalten Betäuben." },
            { name: "Exekutionsbefehl", desc: "Wiederhole 1er gegen den feindlichen Anführer." },
            { name: "Gerechtigkeit üben", desc: "Kostenloses Sprinten zum nächsten Feind." }
        ],
        firefight: [
            { name: "Unterdrücken", desc: "Beim Verteidigen im Nahkampf entfernen Paraden zwei Erfolge statt einem." },
            { name: "Festnehmen", desc: "Verhindere Feindrückzug, wenn Mastiff gebunden ist." },
            { name: "Bereich sichern", desc: "Dränge Feinde nach dem Kampf 1\" zurück." },
            { name: "Stimme des Gesetzes", desc: "Anführer gibt nahem Arbites eine kostenlose Aktion." }
        ]
    }
};

const translations = {
    en: {
        legalDisclaimer: "This is an unofficial fan-made utility. Warhammer 40,000, Kill Team, and all associated logos, names, and statistics are © Copyright Games Workshop Limited. This tool is provided for free and is not affiliated with, or endorsed by, Games Workshop in any way.",
        title: "EXACTION SQUAD",
        tabAssemble: "ASSEMBLE TEAM",
        tabMatch: "MATCH TRACKER",
        tabTokens: "TOKENS / JUSTICE",
        tabRules: "RULES",
        resetPloysBtn: "RESET PLOYS",
        builderDesc: "Select 1 Proctor-exactant and 10 other operatives. (Max 2 Gunners, Max 4 Subductors)",
        selectedText: "Selected:",
        startMatchBtn: "START MATCH <i class=\"fa-solid fa-arrow-right\"></i>",
        activeTeam: "ACTIVE TEAM",
        activeTeamDesc: "Track the Wounds of your operatives.",
        tokensTitle: "TOKENS & TRACKERS",
        tokensDesc: "Track Marked for Justice targets, Apprehend targets, and other tactical tokens.",
        newTargetBtn: "New Target",
        rulesFaction: "Faction Rules",
        ruleEfficiency: "<strong>Ruthless Efficiency:</strong> When shooting (excluding frag/krak), having other friendly EXACTION SQUAD operatives within an enemy's control range doesn't prevent targeting.",
        ruleMarked: "<strong>Marked for Justice:</strong> Select one enemy to be your mark. Weapons gain Punishing against them. When they die, select a new mark.",
        ruleRepress: "<strong>Repress:</strong> When defending in combat, parries discard two successful hits instead of one.",

rulesStrategy: "Strategy Ploys",
        stratGuilt: "<strong>Guilt Reveals Itself:</strong> Enemy operatives within 4\" cannot be in cover (instead of 2\"). Cover save is retained unless within 2\".",
        stratInviolate: "<strong>Inviolate Jurisdiction:</strong> When shooting a friendly within 2\" of an objective or enemy, you can re-roll one defence dice.",
        stratDispense: "<strong>Dispense Justice:</strong> If an operative hasn't moved more than its Move stat during the activation, its melee weapons have Ceaseless.",
        stratTerminal: "<strong>Terminal Decree:</strong> Ranged weapons against enemies within 6\", or all ranged weapons for Gunners, gain Balanced.",
        rulesFirefight: "Firefight Ploys",
        fireLongArm: "<strong>Long Arm of the Emperor's Law:</strong> Add 3\" to the Range x of a weapon (excluding frag/krak).",
        fireExact: "<strong>Exact Punishment:</strong> After an enemy shoots/fights a friendly within 6\", that friendly can free Shoot/Fight back at that enemy.",
        fireBrutal: "<strong>Brutal Backup:</strong> Select an enemy in control range. Another friendly can immediately perform a free Fight against them.",
        fireExecution: "<strong>Execution Order:</strong> When an enemy performs a mission action or controls an objective, interrupt to activate a ready friendly to shoot/fight them.",
        statApg: "APL",
        statB: "MOVE",
        statRw: "SAVE",
        statLp: "WOUNDS",
        abilitiesHeader: "Abilities"
    },
    de: {
        legalDisclaimer: "Dies ist ein inoffizielles, von Fans erstelltes Hilfsprogramm. Warhammer 40.000, Kill Team und alle zugehörigen Logos, Namen und Statistiken sind © Copyright Games Workshop Limited. Dieses Tool wird kostenlos zur Verfügung gestellt und ist in keiner Weise mit Games Workshop verbunden oder wird von Games Workshop unterstützt.",
        title: "Vollstreckertrupp",
        tabAssemble: "TEAM BAUEN",
        tabMatch: "MATCH TRACKER",
        tabTokens: "MARKER / GERECHTIGKEIT",
        tabRules: "REGELN",
        resetPloysBtn: "PLOYS ZURÜCKSETZEN",
        builderDesc: "Wähle 1 Proctor-exactant und 10 weitere Kämpfer. (Max 2 Schützen, Max 4 Subductoren)",
        selectedText: "Ausgewählt:",
        startMatchBtn: "MATCH STARTEN <i class=\"fa-solid fa-arrow-right\"></i>",
        activeTeam: "AKTIVES TEAM",
        activeTeamDesc: "Verfolge die Lebenspunkte (LP) deiner Kämpfer.",
        tokensTitle: "MARKER & TRACKER",
        tokensDesc: "Verfolge Ziele für Gerechtigkeit (Marked for Justice), Festnahmen (Apprehend) und andere Marker.",
        newTargetBtn: "Neues Ziel",
        rulesFaction: "Fraktionsregeln",
        ruleEfficiency: "<strong>Skrupellose Effizienz:</strong> Beim Schießen (außer Spreng/Fragment) verhindern eigene Kämpfer in Kontrollreichweite des Feindes nicht die Zielerfassung.",
        ruleMarked: "<strong>Für die Gerechtigkeit markiert:</strong> Wähle ein feindliches Ziel. Waffen erhalten Strafend gegen es. Wenn es stirbt, wähle ein neues Ziel.",
        ruleRepress: "<strong>Unterdrücken (Repress):</strong> Beim Verteidigen im Nahkampf entfernen Paraden zwei Erfolge statt einem.",

rulesStrategy: "Strategielisten (Ploys)",
        stratGuilt: "<strong>Schuld offenbart sich:</strong> Feinde in 4\" können nicht in Deckung sein (statt 2\"). Deckungswurf bleibt erhalten, außer in 2\".",
        stratInviolate: "<strong>Unantastbare Gerichtsbarkeit:</strong> Beim Beschuss eines eigenen Kämpfers innerhalb von 2\" zu einem Missionsziel/Feind darf 1 Verteidigungswürfel wiederholt werden.",
        stratDispense: "<strong>Gerechtigkeit üben:</strong> Wenn sich der Kämpfer nicht weiter als sein B-Wert bewegt hat, erhalten Nahkampfwaffen Unaufhaltsam (Ceaseless).",
        stratTerminal: "<strong>Todeserlass:</strong> Fernkampfwaffen gegen Feinde in 6\" (oder alle für Schützen) erhalten Ausgewogen (Balanced).",
        rulesFirefight: "Gefechtslisten (Tactical)",
        fireLongArm: "<strong>Der lange Arm des Gesetzes:</strong> Addiere 3\" zur RW x einer Waffe (außer Granaten).",
        fireExact: "<strong>Genaue Bestrafung:</strong> Nachdem ein Feind auf einen eigenen in 6\" geschossen/gekämpft hat, darf dieser sofort kostenlos zurückschießen/kämpfen.",
        fireBrutal: "<strong>Brutale Verstärkung:</strong> Wähle Feind in Kontrollreichweite. Ein anderer eigener Kämpfer darf sofort kostenlos gegen diesen Kämpfen.",
        fireExecution: "<strong>Hinrichtungsbefehl:</strong> Wenn ein Feind eine Missionsaktion durchführt oder ein Ziel kontrolliert, unterbrich ihn, um einen eigenen Kämpfer zu aktivieren und ihn anzugreifen.",
        statApg: "APG",
        statB: "B",
        statRw: "RW",
        statLp: "LP",
        abilitiesHeader: "Fähigkeiten"
    }
};

const OPERATIVES_DB = {
    en: [
        { id: 'leader', name: 'ARBITES PROCTOR-EXACTANT', limit: 1, stats: { apg: 2, b: '6"', rw: '4+', lp: 9 }, abilities: ['<strong>Nuncio-aquila (0 AP):</strong> Place/move marker. Enemies within 3" of marker pay +1 AP for mission actions. Treat their APL as 1 lower for control.'], weaponSelect1: ['Combat shotgun; repression baton', 'Shotpistol; dominator maul & assault shield (Save becomes 3+)'] },
        { id: 'castigator', name: 'ARBITES CASTIGATOR', limit: 1, stats: { apg: 2, b: '6"', rw: '4+', lp: 8 }, abilities: ['<strong>Engendered Focus:</strong> Ignore changes to stats (except Save).', '<strong>Zealous Dedication:</strong> Whenever taking 3+ dmg, roll D6. On 5+, subtract 1 from dmg.', '<strong>Castigator\'s Arrest:</strong> Isolated enemies in control range cannot Fall Back.'], weaponSelect1: ['Combat shotgun; excruciator maul (Rending, Shock)', 'Shotpistol; excruciator maul & assault shield (Save 3+)'] },
        { id: 'chirurgant', name: 'ARBITES CHIRURGANT', limit: 1, stats: { apg: 2, b: '6"', rw: '4+', lp: 8 }, abilities: ['<strong>Medic!:</strong> Once per TP, save visible friendly in 3" from dying (leaves at 1 LP, free Dash, APL -1).', '<strong>Medikit (1 AP):</strong> Friendly in control range heals 2D3 wounds.'], weaponSelect1: ['Combat shotgun; repression baton', 'Shotpistol; shock maul & assault shield (Save 3+)'] },
        { id: 'leashmaster', name: 'ARBITES LEASHMASTER', limit: 1, stats: { apg: 2, b: '6"', rw: '4+', lp: 8 }, abilities: ['<strong>Handler:</strong> Activate ready R-VR Cyber-Mastiff at the same time.', '<strong>Attack Pattern (STRATEGIC GAMBIT):</strong> Give mastiff Aggressive (Relentless), Swift (+2" Move), or Defensive (+1 Save).', '<strong>R-VR Command (0 AP):</strong> Change the Cyber-Mastiff\'s attack pattern.'], weaponSelect1: ['Combat shotgun; repression baton', 'Shotpistol; shock maul & assault shield (Save 3+)'] },
        { id: 'mastiff', name: 'R-VR CYBER-MASTIFF', limit: 1, stats: { apg: 2, b: '6"', rw: '4+', lp: 8 }, abilities: ['<strong>Beast:</strong> Cannot shoot, open doors, or carry equipment.', '<strong>Apprehend (0 AP):</strong> Enemy in control range gets -1 Hit and cannot Fall Back until it leaves.'], fixedWeapons: ['Mechanical bite (Lethal 5+)'] },
        { id: 'malocator', name: 'ARBITES MALOCATOR', limit: 1, stats: { apg: 2, b: '6"', rw: '4+', lp: 8 }, abilities: ['<strong>Acute Focus:</strong> Once per activation, perform mission action or Veriscant for 1 less AP.', '<strong>Veriscant (1 AP):</strong> Select visible enemy. Friendly attacks against it gain Lethal 5+ and Severe.'], weaponSelect1: ['Combat shotgun; repression baton', 'Shotpistol; shock maul & assault shield (Save 3+)'] },
        { id: 'marksman', name: 'ARBITES MARKSMAN', limit: 1, stats: { apg: 2, b: '6"', rw: '4+', lp: 8 }, abilities: ['<strong>Concealed Position:</strong> Can fire concealed executioner shotgun on first Shoot action.', '<strong>Optics (1 AP):</strong> Shotgun gains Lethal 5+ and ignores obscurement until next activation.'], weaponSelect1: ['Executioner shotgun; repression baton', 'Shotpistol; shock maul & assault shield (Save 3+)'] },
        { id: 'revelatum', name: 'ARBITES REVELATUM', limit: 1, stats: { apg: 2, b: '6"', rw: '4+', lp: 8 }, abilities: ['<strong>First in the Field (STRATEGIC GAMBIT):</strong> Free Reposition if wholly in drop zone.', '<strong>Spot (1 AP):</strong> Visible enemy in 8". Friendly attacks against it gain Seek Light and ignore obscurement.'], weaponSelect1: ['Scoped shotpistol (Lethal 5+); repression baton', 'Scoped shotpistol (Lethal 5+); shock maul & assault shield (Save 3+)'] },
        { id: 'subductor1', name: 'ARBITES SUBDUCTOR (1)', limit: 4, stats: { apg: 2, b: '6"', rw: '3+', lp: 8 }, abilities: ['<strong>Stubborn Subjugator:</strong> Ignore changes to Hit stat of melee weapons.'], fixedWeapons: ['Shotpistol', 'Shock maul & assault shield (Shock, Repress)'] },
        { id: 'subductor2', name: 'ARBITES SUBDUCTOR (2)', limit: 4, stats: { apg: 2, b: '6"', rw: '3+', lp: 8 }, abilities: ['<strong>Stubborn Subjugator:</strong> Ignore changes to Hit stat of melee weapons.'], fixedWeapons: ['Shotpistol', 'Shock maul & assault shield (Shock, Repress)'] },
        { id: 'subductor3', name: 'ARBITES SUBDUCTOR (3)', limit: 4, stats: { apg: 2, b: '6"', rw: '3+', lp: 8 }, abilities: ['<strong>Stubborn Subjugator:</strong> Ignore changes to Hit stat of melee weapons.'], fixedWeapons: ['Shotpistol', 'Shock maul & assault shield (Shock, Repress)'] },
        { id: 'subductor4', name: 'ARBITES SUBDUCTOR (4)', limit: 4, stats: { apg: 2, b: '6"', rw: '3+', lp: 8 }, abilities: ['<strong>Stubborn Subjugator:</strong> Ignore changes to Hit stat of melee weapons.'], fixedWeapons: ['Shotpistol', 'Shock maul & assault shield (Shock, Repress)'] },
        { id: 'vigilant', name: 'ARBITES VIGILANT', limit: 10, stats: { apg: 2, b: '6"', rw: '4+', lp: 8 }, abilities: ['<strong>Close Quarters Vigilance:</strong> Can Shoot while in control range of enemy (if it hasn\'t Charged).'], fixedWeapons: ['Combat shotgun', 'Repression baton'] },
        { id: 'vox', name: 'ARBITES VOX-SIGNIFIER', limit: 1, stats: { apg: 2, b: '6"', rw: '4+', lp: 8 }, abilities: ['<strong>Signal (1 AP):</strong> Select another friendly visible operative. Add 1 to its APL until end of next activation.'], weaponSelect1: ['Combat shotgun; repression baton', 'Shotpistol; shock maul & assault shield (Save 3+)'] },
        { id: 'gunner1', name: 'ARBITES GUNNER (A)', limit: 2, stats: { apg: 2, b: '6"', rw: '4+', lp: 8 }, abilities: ['<strong>Specialist Weapon:</strong> Equipped with heavy firepower.'], weaponSelect1: ['Grenade launcher (Piercing 1); repression baton', 'Heavy stubber (Heavy); repression baton', 'Webber (Severe, Stun); repression baton'] },
        { id: 'gunner2', name: 'ARBITES GUNNER (B)', limit: 2, stats: { apg: 2, b: '6"', rw: '4+', lp: 8 }, abilities: ['<strong>Specialist Weapon:</strong> Equipped with heavy firepower.'], weaponSelect1: ['Grenade launcher (Piercing 1); repression baton', 'Heavy stubber (Heavy); repression baton', 'Webber (Severe, Stun); repression baton'] }
    ],
    de: [
        { id: 'leader', name: 'ARBITES-PROCTOR-EXACTANT', limit: 1, stats: { apg: 2, b: '6"', rw: '4+', lp: 9 }, abilities: ['<strong>Nuncio-Aquila (0 AP):</strong> Platziere/Bewege Marker. Feinde in 3" zahlen +1 AP für Missionsaktionen. APL zählt als 1 niedriger für Kontrolle.'], weaponSelect1: ['Kampfschrotflinte; Unterdrückungsschlagstock', 'Schrotpistole; Dominator-Energiehammer & Sturmschild (RW wird 3+)'] },
        { id: 'castigator', name: 'ARBITES-CASTIGATOR', limit: 1, stats: { apg: 2, b: '6"', rw: '4+', lp: 8 }, abilities: ['<strong>Antrainierter Fokus:</strong> Ignoriert Änderungen an Profilwerten (außer RW).', '<strong>Eifrige Hingabe:</strong> Bei 3+ Schaden W6 würfeln. Bei 5+ Schaden um 1 reduzieren.', '<strong>Festnahme des Castigators:</strong> Isolierte Feinde in KontrollRW können nicht Zurückfallen.'], weaponSelect1: ['Kampfschrotflinte; Peiniger-Energiehammer (Schock)', 'Schrotpistole; Peiniger-Energiehammer & Sturmschild (RW 3+)'] },
        { id: 'chirurgant', name: 'ARBITES-CHIRURGANT', limit: 1, stats: { apg: 2, b: '6"', rw: '4+', lp: 8 }, abilities: ['<strong>Sani!:</strong> 1x pro Wendepunkt sichtbaren Kyn in 3" vor dem Tod bewahren (bleibt bei 1 LP, freier Spurt, APL -1).', '<strong>Sanitätsausrüstung (1 AP):</strong> Heilt 2W3 LP bei Kyn in K-RW.'], weaponSelect1: ['Kampfschrotflinte; Unterdrückungsschlagstock', 'Schrotpistole; Schockmaul & Sturmschild (RW 3+)'] },
        { id: 'leashmaster', name: 'ARBITES-LEASHMASTER', limit: 1, stats: { apg: 2, b: '6"', rw: '4+', lp: 8 }, abilities: ['<strong>Hundeführer:</strong> Aktiviere R-VR-Cybermastiff gleichzeitig.', '<strong>Angriffsmuster (STRATEGISCHES WAGNIS):</strong> Mastiff erhält Aggressiv (Unerbittlich), Schnell (+2" B) oder Defensiv (+1 RW).', '<strong>R-VR-Befehl (0 AP):</strong> Ändere das Angriffsmuster des Cybermastiffs.'], weaponSelect1: ['Kampfschrotflinte; Unterdrückungsschlagstock', 'Schrotpistole; Schockmaul & Sturmschild (RW 3+)'] },
        { id: 'mastiff', name: 'R-VR-CYBERMASTIFF', limit: 1, stats: { apg: 2, b: '6"', rw: '4+', lp: 8 }, abilities: ['<strong>Bestie:</strong> Kann nicht schießen, Türen öffnen oder Ausrüstung tragen.', '<strong>Fassen (0 AP):</strong> Feind in K-RW erhält -1 Trefferwert und kann nicht Zurückfallen.'], fixedWeapons: ['Mechanischer Biss (Tödlich 5+)'] },
        { id: 'malocator', name: 'ARBITES-MALOCATOR', limit: 1, stats: { apg: 2, b: '6"', rw: '4+', lp: 8 }, abilities: ['<strong>Geschärfter Fokus:</strong> 1x pro Aktivierung Missionsaktion oder Veriscant für 1 AP weniger.', '<strong>Veriscant (1 AP):</strong> Wähle sichtbaren Feind. Eigene Attacken gegen ihn erhalten Tödlich 5+ und Schwer.'], weaponSelect1: ['Kampfschrotflinte; Unterdrückungsschlagstock', 'Schrotpistole; Schockmaul & Sturmschild (RW 3+)'] },
        { id: 'marksman', name: 'ARBITES-MARKSMAN', limit: 1, stats: { apg: 2, b: '6"', rw: '4+', lp: 8 }, abilities: ['<strong>Verborgene Position:</strong> Kann verborgene Scharfrichter-Schrotflinte bei erster Schießen-Aktion abfeuern.', '<strong>Optik (1 AP):</strong> Schrotflinte erhält Tödlich 5+ und ignoriert Verdunkelung bis zur nächsten Aktivierung.'], weaponSelect1: ['Scharfrichter-Schrotflinte; Unterdrückungsschlagstock', 'Schrotpistole; Schockmaul & Sturmschild (RW 3+)'] },
        { id: 'revelatum', name: 'ARBITES-REVELATUM', limit: 1, stats: { apg: 2, b: '6"', rw: '4+', lp: 8 }, abilities: ['<strong>Der Erste im Feld (STRATEGISCHES WAGNIS):</strong> Kostenlose Neupositionierung, wenn komplett in Aufstellungszone.', '<strong>Sichten (1 AP):</strong> Sichtbarer Feind in 8". Eigene Attacken erhalten Zielsucher leicht und ignorieren Verdunkelung.'], weaponSelect1: ['Zielfernrohr-Schrotpistole (Tödlich 5+); Unterdrückungsschlagstock', 'Zielfernrohr-Schrotpistole (Tödlich 5+); Schockmaul & Sturmschild (RW 3+)'] },
        { id: 'subductor1', name: 'ARBITES-SUBDUCTOR (1)', limit: 4, stats: { apg: 2, b: '6"', rw: '3+', lp: 8 }, abilities: ['<strong>Hartnäckiger Unterwerfer:</strong> Ignoriert Änderungen am Trefferwert von Nahkampfwaffen.'], fixedWeapons: ['Schrotpistole', 'Schockmaul & Sturmschild (Schock, Unterdrücken)'] },
        { id: 'subductor2', name: 'ARBITES-SUBDUCTOR (2)', limit: 4, stats: { apg: 2, b: '6"', rw: '3+', lp: 8 }, abilities: ['<strong>Hartnäckiger Unterwerfer:</strong> Ignoriert Änderungen am Trefferwert von Nahkampfwaffen.'], fixedWeapons: ['Schrotpistole', 'Schockmaul & Sturmschild (Schock, Unterdrücken)'] },
        { id: 'subductor3', name: 'ARBITES-SUBDUCTOR (3)', limit: 4, stats: { apg: 2, b: '6"', rw: '3+', lp: 8 }, abilities: ['<strong>Hartnäckiger Unterwerfer:</strong> Ignoriert Änderungen am Trefferwert von Nahkampfwaffen.'], fixedWeapons: ['Schrotpistole', 'Schockmaul & Sturmschild (Schock, Unterdrücken)'] },
        { id: 'subductor4', name: 'ARBITES-SUBDUCTOR (4)', limit: 4, stats: { apg: 2, b: '6"', rw: '3+', lp: 8 }, abilities: ['<strong>Hartnäckiger Unterwerfer:</strong> Ignoriert Änderungen am Trefferwert von Nahkampfwaffen.'], fixedWeapons: ['Schrotpistole', 'Schockmaul & Sturmschild (Schock, Unterdrücken)'] },
        { id: 'vigilant', name: 'ARBITES-VIGILANT', limit: 10, stats: { apg: 2, b: '6"', rw: '4+', lp: 8 }, abilities: ['<strong>Wachsamkeit auf engem Raum:</strong> Kann in KontrollRW eines Feindes Schießen (wenn nicht Angegriffen).'], fixedWeapons: ['Kampfschrotflinte', 'Unterdrückungsschlagstock'] },
        { id: 'vox', name: 'ARBITES-VOX-SIGNIFIER', limit: 1, stats: { apg: 2, b: '6"', rw: '4+', lp: 8 }, abilities: ['<strong>Signal (1 AP):</strong> Wähle sichtbaren eigenen Kämpfer. APL +1 bis Ende seiner nächsten Aktivierung.'], weaponSelect1: ['Kampfschrotflinte; Unterdrückungsschlagstock', 'Schrotpistole; Schockmaul & Sturmschild (RW 3+)'] },
        { id: 'gunner1', name: 'ARBITES-SCHÜTZE (A)', limit: 2, stats: { apg: 2, b: '6"', rw: '4+', lp: 8 }, abilities: ['<strong>Spezialwaffe:</strong> Ausgerüstet mit schwerer Feuerkraft.'], weaponSelect1: ['Granatwerfer (Rüstungsdurchschlag 1); Unterdrückungsschlagstock', 'Schweres Maschinengewehr (Schwer); Unterdrückungsschlagstock', 'Netzwerfer (Schwerwiegend, Betäuben); Unterdrückungsschlagstock'] },
        { id: 'gunner2', name: 'ARBITES-SCHÜTZE (B)', limit: 2, stats: { apg: 2, b: '6"', rw: '4+', lp: 8 }, abilities: ['<strong>Spezialwaffe:</strong> Ausgerüstet mit schwerer Feuerkraft.'], weaponSelect1: ['Granatwerfer (Rüstungsdurchschlag 1); Unterdrückungsschlagstock', 'Schweres Maschinengewehr (Schwer); Unterdrückungsschlagstock', 'Netzwerfer (Schwerwiegend, Betäuben); Unterdrückungsschlagstock'] }
    ]
};
