/**
 * Kill Team 3rd Edition Mission Generator - Application Logic
 * Comprehensive JavaScript file powering the generator
 */

// ==========================================
// SECTION 1: TRANSLATIONS (i18n)
// ==========================================
const translations = {
  en: {
    headerTitle: "KILL TEAM",
    headerSubtitle: "MISSION GENERATOR",
    killzoneLabel: "Killzone",
    generateBtn: "GENERATE MISSION",
    critOpTitle: "CRIT OP",
    killOpTitle: "KILL OP",
    tacOpTitle: "TAC OP",
    mapTitle: "MAP",
    vpTrackerTitle: "VP TRACKER",
    player1: "Player 1",
    player2: "Player 2",
    cpLbl: "Command Points",
    totalVpLbl: "Total VP:",
    primaryBonusLbl: "Primary Bonus:",
    initiativeLbl: "Initiative",
    total: "Total",
    primaryBonus: "Primary Op Bonus",
    primaryOp: "Primary Op",
    gameSequenceTitle: "GAME SEQUENCE",
    tacOpsTitle: "TAC OPS",
    missionAction: "MISSION ACTION",
    victoryPoints: "VICTORY POINTS",
    additionalRules: "ADDITIONAL RULES",
    conditions: "Conditions",
    reveal: "REVEAL",
    turningPoint: "Turning Point",
    all: "All",
    infiltration: "Infiltration",
    recon: "Recon",
    security: "Security",
    seekDestroy: "Seek & Destroy",
    reset: "Reset",
    footerText: "Kill Team © Games Workshop. This is an unofficial fan tool.",
    startingOps: "Starting Operatives",
    grade: "Grade",
    enemyOpsLabel: "Enemy operatives",
    killGradeDesc: "You start without a kill grade. As enemy operatives are incapacitated, your kill grade goes up until it reaches 5.",
    killGradeVP: "Whenever you move to a new kill grade, you score 1VP. At the end of the battle, if your kill grade is higher than your opponent's, you score 1VP.",
    // Crit Ops
    critOpSecure: "Secure",
    critOpLoot: "Loot",
    critOpTransmission: "Transmission",
    critOpOrb: "Orb",
    critOpStakeClaim: "Stake Claim",
    critOpEnergyCells: "Energy Cells",
    critOpDownload: "Download",
    critOpData: "Data",
    critOpReboot: "Reboot",
    actionSecure: "SECURE",
    actionLoot: "LOOT",
    actionInitiateTransmission: "INITIATE TRANSMISSION",
    actionMoveOrb: "MOVE ORB",
    actionDownload: "DOWNLOAD",
    actionCompileData: "COMPILE DATA",
    actionSendData: "SEND DATA",
    actionReboot: "REBOOT",
    // Tac Ops Archetypes
    archetypeInfiltration: "Infiltration",
    archetypeRecon: "Recon",
    archetypeSecurity: "Security",
    archetypeSeekDestroy: "Seek & Destroy",
    // Tac Ops Names
    tacOpPlantDevices: "Plant Devices",
    tacOpStealIntelligence: "Steal Intelligence",
    tacOpTrackEnemy: "Track Enemy",
    tacOpFlank: "Flank",
    tacOpRetrieval: "Retrieval",
    tacOpScoutEnemyMovement: "Scout Enemy Movement",
    tacOpPlantBanner: "Plant Banner",
    tacOpMartyrs: "Martyrs",
    tacOpEnvoy: "Envoy",
    tacOpRout: "Rout",
    tacOpSweepClear: "Sweep & Clear",
    tacOpDominate: "Dominate",
    // Setup Guide & Checklist
    setupHelpTitle: "❓ BEGINNER GUIDE: WHAT DO I NEED? (MUST I CHECK ALL BOXES?)",
    setupHelpIntro: "Here is everything you and your buddy need to set up a quick game of Kill Team 3rd Edition:",
    setupReq1_title: "1. Physical Components:",
    setupReq1_text: "Two Kill Teams with datacards/tokens, your 30\"x22\" board & terrain (e.g. from the Starter Set), 6 objective markers (numbered 1-6), 6-sided dice (D6), and a measuring tape (in inches).",
    setupReq2_title: "2. Objective Placement:",
    setupReq2_text: "Look at the generated Map diagram above! Place your 6 objectives on your physical table exactly where the circles show (P1 and P2 are player home objectives, 1-4 are neutral).",
    setupReq3_title: "3. Do you need all the checkboxes below?",
    setupReq3_text: "NO! You do NOT need to check every box to play. The checklist below is an optional, step-by-step tournament companion to make sure you don't forget official rules (like drafting equipment or CP starting rules). For casual games with buddies: Just generate a mission above, place your terrain and 6 objectives, deploy your models in your drop zones, start with 2 Command Points each, and start rolling dice!",
    seqStep1: "1. Set Up the Battle",
    seqStep1_1: "Select kill teams",
    seqStep1_2: "Set up terrain",
    seqStep1_3: "Determine crit op & place objectives",
    seqStep1_4: "Roll-off for initiative",
    seqStep1_5: "Choose drop zones",
    seqStep2: "2. Select Operatives",
    seqStep2_1: "Secretly select operatives then reveal",
    seqStep2_2: "Select up to 4 equipment options then reveal",
    seqStep2_3: "Start with 2CP each",
    seqStep2_4: "Secretly select tac op from archetype",
    seqStep3: "3. Set Up Operatives",
    seqStep3_1: "Alternate placing equipment",
    seqStep3_2: "Alternate deploying operatives in thirds (Conceal order)",
    seqStep4: "4. Play the Battle",
    seqStep4_1: "Roll-off for initiative each TP",
    seqStep4_2: "Use initiative cards",
    seqStep4_3: "Select primary op as Strategic Gambit (TP1)",
    seqStep4_4: "Max 6VP per op",
    seqStep5: "5. End the Battle",
    seqStep5_1: "Battle ends after 4 turning points",
    seqStep5_2: "Reveal primary ops simultaneously",
    seqStep5_3: "Score bonus VP = half primary op VP (round up)",
    seqStep5_4: "Most VP wins",
    // Terrain Guide
    terrainHeavyShort: "HEAVY",
    terrainLightShort: "LIGHT",
    terrainVantageShort: "VANTAGE",
    terrainGuideTitle: "🏰 TERRAIN SETUP TIPS & GUIDE",
    terrainHeavyTitle: "Heavy Cover (Ruins & Walls)",
    terrainHeavyDesc: "Place 2-4 large terrain pieces in mid-board to block direct line of sight between drop zones.",
    terrainLightTitle: "Light Cover (Barricades & Pipes)",
    terrainLightDesc: "Scatter 6-8 smaller pieces near objective markers to protect advancing operatives.",
    terrainVantageTitle: "Vantage Points (High Ground)",
    terrainVantageDesc: "Place 2 elevated platforms outside drop zones for shooters to overlook light cover.",
    terrainSymLabel: "Balanced Setup:",
    terrainSymDesc: "Keep terrain roughly symmetrical so neither player has an unfair advantage in cover!",
    showTerrainLabel: "Show Terrain Suggestions",
    // LoS Guide
    losHelpTitle: "🎯 RULES: CONCEAL VS ENGAGE & COVER",
    losHelpIntro: "Not sure if you can shoot an enemy? Follow these 3 steps to check Line of Sight (LoS):",
    losReq1_title: "1. Visibility:",
    losReq1_text: "Can the shooter's head see any part of the target's body? If you can't see them at all, you can't shoot them!",
    losReq2_title: "2. Obscured (Heavy Terrain):",
    losReq2_text: "Does the cover line cross Heavy terrain that is more than 2\" away from the target? If yes, they are Obscured and cannot be shot.",
    losReq3_title: "3. Cover & Orders:",
    losReq3_text: "Does the cover line cross terrain within 1\" of the target?",
    losEngageTitle: "Engage (Orange Token):",
    losEngageDesc: "They are peaking out. YOU CAN SHOOT THEM (they get a free save).",
    losConcealTitle: "Conceal (Grey/Black Token):",
    losConcealDesc: "They are hiding. YOU CANNOT SHOOT THEM.",
    losFaqTitle: "💡 Pro Tip: What does Conceal actually do?",
    losFaqText: "Conceal does <strong>not</strong> give you extra defense dice. It simply makes you invisible <em>if</em> you are in Cover.<br><br><strong>In the open:</strong> Conceal does nothing. You can be shot normally.<br><strong>In Cover:</strong> Both Engage and Conceal give you the \"Benefit of Cover\" (you keep 1 defense die as an automatic success). The difference is that on Engage, enemies can shoot you. On Conceal, they can't shoot you at all!",
    // Interactive LoS Tool
    interactiveLosTitle: "Interactive Line of Sight Simulator",
    targetOrderLbl: "Target Order:",
    addTerrainBtn: "+ Add Terrain",
    losResValid: "VALID TARGET",
    losResObscured: "CANNOT SHOOT (OBSCURED)",
    losResConcealed: "CANNOT SHOOT (CONCEALED)",
    losResCover: "VALID TARGET (IN COVER)",
    losReasonOpen: "Cover line does not cross any terrain. Target is in the open.",
    losReasonOpenIneffective: "Cover line crosses terrain, but it provides no protection (e.g. shooter is within 1\", or terrain is in the 1\"-2\" deadzone).",
    losReasonObscured: "Cover line crosses Heavy terrain that is more than 2 inches away from the target. Target is Obscured.",
    losReasonConcealed: "Target is within 1 inch of cover and has a Conceal order. They are hiding.",
    losReasonCoverEngage: "Target is in Cover but has an Engage order. You can shoot them, but they retain 1 Defense die as a free save.",
    losReasonNoCover: "Target is not within 1 inch of the terrain, so they do not get Cover.",
    svgShooter: "Shooter",
    svgTarget: "Target",
    svgEngage: "Engage",
    svgConceal: "Conceal",
    svgIgnoresCover: "Ignores Light Cover!",
    // Core Actions Guide
    actionsHelpTitle: "🏃 RULES: CORE ACTIONS",
    actionsHelpIntro: "A quick reminder of what you can do with your Action Points (AP):",
    actionMoveTitle: "Move:",
    actionMoveDesc: "Move up to your Movement characteristic in inches.",
    actionDashTitle: "Dash:",
    actionDashDesc: "Move up to 3 inches. Cannot be used to enter Engagement Range.",
    actionChargeTitle: "Charge:",
    actionChargeDesc: "Move up to Movement + 1 inch. Must end in Engagement Range of an enemy.",
    actionShootTitle: "Shoot:",
    actionShootDesc: "Make a ranged attack. Requires Engage order and Line of Sight.",
    actionFightTitle: "Fight:",
    actionFightDesc: "Resolve melee combat against an enemy in Engagement Range.",
    actionFallBackTitle: "Fall Back:",
    actionFallBackDesc: "Move out of Engagement Range. Costs 2 AP.",
    actionPassTitle: "Pass:",
    actionPassDesc: "Do nothing for 1 AP.",
    // USRs Guide
    usrHelpTitle: "⚔️ RULES: WEAPON KEYWORDS",
    usrHelpIntro: "Common Universal Special Rules (USRs) on weapon profiles:",
    usrAccurateTitle: "Accurate (Präzise):",
    usrAccurateDesc: "Retain failed hits as normal hits up to x.",
    usrAPTitle: "APx (Durchschlag):",
    usrAPDesc: "Target rolls x fewer Defense dice.",
    usrBalancedTitle: "Balanced (Ausgewogen):",
    usrBalancedDesc: "Re-roll one attack die.",
    usrBlastTitle: "Blast x (Explosiv):",
    usrBlastDesc: "Attack each operative within x\" of target.",
    usrBrutalTitle: "Brutal (Brutal):",
    usrBrutalDesc: "Opponent can only parry with Critical hits.",
    usrDevastatingTitle: "Devastating x (Verheerend):",
    usrDevastatingDesc: "Each Critical hit deals x extra damage.",
    usrHeavyTitle: "Heavy (Schwer):",
    usrHeavyDesc: "Cannot Move/Dash in same activation as shooting.",
    usrIndirectTitle: "Indirect (Indirekt):",
    usrIndirectDesc: "Target cannot retain cover saves automatically.",
    usrLethalTitle: "Lethal x+ (Tödlich):",
    usrLethalDesc: "Critical hits on a roll of x+ instead of 6.",
    usrPiercingTitle: "Piercing x (Panzerbrechend):",
    usrPiercingDesc: "If you retain any Critical hits, gains APx.",
    usrPunishingTitle: "Punishing (Bestrafend):",
    usrPunishingDesc: "If you retain a Critical hit, retain one failed hit as normal.",
    usrReliableTitle: "Reliable x (Zuverlässig):",
    usrReliableDesc: "Retain up to x attack dice without rolling.",
    usrRendingTitle: "Rending (Reißend):",
    usrRendingDesc: "If you retain a Critical hit, change one normal hit into Critical.",
    usrSevereTitle: "Severe (Schwerwiegend):",
    usrSevereDesc: "If you retain NO Critical hits, change one normal hit into Critical.",
    usrSilentTitle: "Silent (Lautlos):",
    usrSilentDesc: "Can shoot while on a Conceal order.",
    usrSmartTitle: "Smart (Zielsuchend):",
    usrSmartDesc: "Can shoot targets even if they are Obscured.",
    usrStunTitle: "Stun (Betäuben):",
    usrStunDesc: "If you retain any Critical hits, subtract 1 from target's APL.",
    usrTorrentTitle: "Torrent x (Schwall):",
    usrTorrentDesc: "Attack valid targets within x\" of each other.",
    usrUnwieldyTitle: "Unwieldy (Unhandlich):",
    usrUnwieldyDesc: "Costs 2 Action Points (AP) to shoot.",
  },
  de: {
    headerTitle: "KILL TEAM",
    headerSubtitle: "MISSIONSGENERATOR",
    killzoneLabel: "Killzone",
    generateBtn: "MISSION GENERIEREN",
    critOpTitle: "KRIT. EINSATZ",
    killOpTitle: "KILL-EINSATZ",
    tacOpTitle: "TAK. EINSATZ",
    mapTitle: "KARTE",
    vpTrackerTitle: "SP-ZÄHLER",
    player1: "Spieler 1",
    player2: "Spieler 2",
    cpLbl: "Kommandopunkte",
    totalVpLbl: "Gesamt-SP:",
    primaryBonusLbl: "Primär-Bonus:",
    initiativeLbl: "Initiative",
    total: "Gesamt",
    primaryBonus: "Primär-Einsatz Bonus",
    primaryOp: "Primär-Einsatz",
    gameSequenceTitle: "SPIELABLAUF",
    tacOpsTitle: "TAK. EINSÄTZE",
    missionAction: "MISSIONSAKTION",
    victoryPoints: "SIEGPUNKTE",
    additionalRules: "ZUSATZREGELN",
    conditions: "Bedingungen",
    reveal: "AUFDECKEN",
    turningPoint: "Wendepunkt",
    all: "Alle",
    infiltration: "Infiltration",
    recon: "Aufklärung",
    security: "Sicherheit",
    seekDestroy: "Suchen & Zerstören",
    reset: "Zurücksetzen",
    footerText: "Kill Team © Games Workshop. Dies ist ein inoffizielles Fan-Tool.",
    startingOps: "Start-Operative",
    grade: "Grad",
    enemyOpsLabel: "Gegnerische Operative",
    killGradeDesc: "Du startest ohne Killgrad. Wenn gegnerische Operative ausgeschaltet werden, steigt dein Killgrad bis er 5 erreicht.",
    killGradeVP: "Immer wenn du einen neuen Killgrad erreichst, erzielst du 1SP. Am Ende der Schlacht, wenn dein Killgrad höher ist als der deines Gegners, erzielst du 1SP.",
    // Crit Ops
    critOpSecure: "Sichern",
    critOpLoot: "Plündern",
    critOpTransmission: "Übertragung",
    critOpOrb: "Sphäre",
    critOpStakeClaim: "Anspruch erheben",
    critOpEnergyCells: "Energiezellen",
    critOpDownload: "Download",
    critOpData: "Daten",
    critOpReboot: "Neustart",
    actionSecure: "SICHERN",
    actionLoot: "PLÜNDERN",
    actionInitiateTransmission: "ÜBERTRAGUNG INITIITIEREN",
    actionMoveOrb: "SPHÄRE BEWEGEN",
    actionDownload: "DOWNLOAD",
    actionCompileData: "DATEN KOMPILIEREN",
    actionSendData: "DATEN SENDEN",
    actionReboot: "NEUSTART",
    // Tac Ops Archetypes
    archetypeInfiltration: "Infiltration",
    archetypeRecon: "Aufklärung",
    archetypeSecurity: "Sicherheit",
    archetypeSeekDestroy: "Suchen & Zerstören",
    // Tac Ops Names
    tacOpPlantDevices: "Geräte platzieren",
    tacOpStealIntelligence: "Geheimdienstinformationen stehlen",
    tacOpTrackEnemy: "Feind verfolgen",
    tacOpFlank: "Flankieren",
    tacOpRetrieval: "Bergung",
    tacOpScoutEnemyMovement: "Feindbewegung aufklären",
    tacOpPlantBanner: "Banner platzieren",
    tacOpMartyrs: "Märtyrer",
    tacOpEnvoy: "Abgesandter",
    tacOpRout: "In die Flucht schlagen",
    tacOpSweepClear: "Säubern & Sichern",
    tacOpDominate: "Dominieren",
    // Setup Guide & Checklist
    setupHelpTitle: "❓ SPIELVORBEREITUNG & HILFE: WAS BRAUCHE ICH? (ALLE CHECKBOXEN PFLICHT?)",
    setupHelpIntro: "Hier ist alles, was du und deine Freunde für ein schnelles Spiel Kill Team (3. Edition) braucht:",
    setupReq1_title: "1. Spielmaterial:",
    setupReq1_text: "Zwei Kill Teams samt Datenkarten/Markern, euer 30\"x22\" Spielfeld & Gelände (z.B. aus der Starterbox), 6 Missionsziel-Marker (Nummer 1-6), ganz normale Sechsseiter-Würfel (W6) und ein Maßband (in Zoll).",
    setupReq2_title: "2. Missionsziele platzieren:",
    setupReq2_text: "Schau dir die generierte Karte oben an! Platziert eure 6 Missionsziele genau dort auf eurem Spielfeld, wo es die Kreise anzeigen (P1 und P2 sind die Heim-Ziele der Spieler, 1-4 sind neutral).",
    setupReq3_title: "3. Musst du alle Checkboxen unten ankreuzen?",
    setupReq3_text: "NEIN! Ihr müsst überhaupt keine Checkbox ankreuzen, um zu spielen! Die Checkliste unten ist nur eine optionale Hilfe für Turnierspieler, damit man keine offiziellen Phasen vergisst (wie Ausrüstung wählen oder Start-CP). Für lockere Spiele mit Freunden: Generiert oben eine Mission und Karte, baut das Gelände und die 6 Ziele auf, stellt eure Figuren in die Aufstellungszonen, nehmt je 2 Befehlspunkte (CP) und legt direkt los!",
    seqStep1: "1. Die Schlacht vorbereiten",
    seqStep1_1: "Kill Teams auswählen",
    seqStep1_2: "Gelände aufbauen",
    seqStep1_3: "Krit. Einsatz bestimmen & Missionsziele platzieren",
    seqStep1_4: "Initiative auswürfeln",
    seqStep1_5: "Aufstellungszonen wählen",
    seqStep2: "2. Agenten auswählen",
    seqStep2_1: "Agenten geheim wählen und aufdecken",
    seqStep2_2: "Bis zu 4 Ausrüstungen wählen und aufdecken",
    seqStep2_3: "Start mit je 2 Befehlspunkten (CP)",
    seqStep2_4: "Geheim einen Tak. Einsatz aus dem Archetyp wählen",
    seqStep3: "3. Agenten aufstellen",
    seqStep3_1: "Abwechselnd Ausrüstung platzieren",
    seqStep3_2: "Abwechselnd Agenten in Dritteln aufstellen (Getarnt-Befehl)",
    seqStep4: "4. Die Schlacht spielen",
    seqStep4_1: "In jedem Wendepunkt Initiative auswürfeln",
    seqStep4_2: "Initiativkarten verwenden",
    seqStep4_3: "Primär-Einsatz als Strategisches Gambit wählen (TP1)",
    seqStep4_4: "Maximal 6 SP pro Einsatz",
    seqStep5: "5. Ende der Schlacht",
    seqStep5_1: "Die Schlacht endet nach 4 Wendepunkten",
    seqStep5_2: "Primär-Einsätze gleichzeitig aufdecken",
    seqStep5_3: "Bonus-SP = die Hälfte der Primär-SP (aufgerundet)",
    seqStep5_4: "Wer die meisten SP hat, gewinnt",
    // Terrain Guide
    terrainHeavyShort: "SCHWER",
    terrainLightShort: "LEICHT",
    terrainVantageShort: "ERHÖHT",
    terrainGuideTitle: "🏰 GELÄNDEAUFBAU & TIPPS",
    terrainHeavyTitle: "Schweres Gelände (Ruinen & Wände)",
    terrainHeavyDesc: "Platziert 2-4 große Geländestücke in der Mitte, um direkte Sichtlinien zwischen den Aufstellzonen zu blockieren.",
    terrainLightTitle: "Leichtes Gelände (Barrikaden & Rohre)",
    terrainLightDesc: "Verteilt 6-8 kleinere Stücke nahe Missionsziel-Markern zum Schutz vorrückender Agenten.",
    terrainVantageTitle: "Erhöhte Positionen (Aussichtspunkte)",
    terrainVantageDesc: "Stellt 2 erhöhte Ebenen außerhalb der Aufstellzonen auf, um über leichtes Gelände hinwegzuschießen.",
    terrainSymLabel: "Ausgewogenes Spielfeld:",
    terrainSymDesc: "Achtet darauf, das Gelände möglichst symmetrisch aufzustellen, damit niemand im Vorteil ist!",
    showTerrainLabel: "Geländetipps anzeigen",
    // LoS Guide
    losHelpTitle: "🎯 REGELN: SICHTLINIE, DECKUNG & GETARNT",
    losHelpIntro: "Unsicher, ob du einen Gegner beschießen darfst? Folge diesen 3 Schritten zur Sichtlinie (LoS):",
    losReq1_title: "1. Sichtbarkeit (Visibility):",
    losReq1_text: "Kann der Kopf deines Schützen IRGENDEINEN Teil des Zielmodells sehen? Wenn du sie gar nicht sehen kannst, kannst du nicht schießen!",
    losReq2_title: "2. Verdeckt (Obscured / Schweres Gelände):",
    losReq2_text: "Kreuzt die Deckungslinie (Cover Line) Schweres Gelände, das mehr als 2\" vom Ziel entfernt ist? Wenn ja, sind sie verdeckt (Obscured) und können NICHT beschossen werden.",
    losReq3_title: "3. Deckung & Befehle:",
    losReq3_text: "Kreuzt die Deckungslinie Gelände innerhalb von 1\" zum Ziel?",
    losEngageTitle: "Einsatzbereit (Engage / Oranger Marker):",
    losEngageDesc: "Sie lehnen sich heraus. DU KANNST SIE BESCHIEßEN (sie erhalten 1 automatischen Schutzwurf).",
    losConcealTitle: "Getarnt (Conceal / Grauer Marker):",
    losConcealDesc: "Sie verstecken sich. DU KANNST SIE NICHT BESCHIEßEN.",
    losFaqTitle: "💡 Profi-Tipp: Was macht der Getarnt-Befehl eigentlich?",
    losFaqText: "Getarnt (Conceal) gibt dir <strong>keine</strong> zusätzlichen Verteidigungswürfel. Er macht dich lediglich unsichtbar, <em>wenn</em> du in Deckung bist.<br><br><strong>Im Freien:</strong> Getarnt bewirkt gar nichts. Du kannst normal beschossen werden.<br><strong>In Deckung:</strong> Sowohl Einsatzbereit (Engage) als auch Getarnt geben dir den \"Vorteil von Deckung\" (du behältst 1 Verteidigungswürfel als automatischen Erfolg). Der Unterschied ist: Bei Einsatzbereit kann der Feind dich beschießen. Bei Getarnt kann er das nicht!",
    // Interactive LoS Tool
    interactiveLosTitle: "Interaktiver Sichtlinien-Simulator",
    targetOrderLbl: "Ziel-Befehl:",
    addTerrainBtn: "+ Gelände",
    losResValid: "GÜLTIGES ZIEL",
    losResObscured: "NICHT BESCHIEßBAR (VERDECKT)",
    losResConcealed: "NICHT BESCHIEßBAR (GETARNT)",
    losResCover: "GÜLTIGES ZIEL (IN DECKUNG)",
    losReasonOpen: "Die Deckungslinie kreuzt kein Gelände. Das Ziel steht im Freien.",
    losReasonOpenIneffective: "Die Deckungslinie kreuzt Gelände, aber es bietet keinen Schutz (z.B. Schütze ist innerhalb 1\", oder Gelände ist in der 1\"-2\" Todeszone).",
    losReasonObscured: "Die Deckungslinie kreuzt Schweres Gelände, das mehr als 2 Zoll vom Ziel entfernt ist. Das Ziel ist verdeckt (Obscured).",
    losReasonConcealed: "Das Ziel ist innerhalb von 1 Zoll in Deckung und hat einen Getarnt-Befehl (Conceal). Es versteckt sich.",
    losReasonCoverEngage: "Das Ziel ist in Deckung, hat aber einen Einsatzbereit-Befehl (Engage). Du kannst es beschießen, aber es behält 1 Verteidigungswürfel als automatischen Schutzwurf.",
    losReasonNoCover: "Das Ziel ist nicht innerhalb von 1 Zoll zum Gelände und erhält daher keine Deckung.",
    svgShooter: "Schütze",
    svgTarget: "Ziel",
    svgEngage: "Einsatzbereit",
    svgConceal: "Getarnt",
    svgIgnoresCover: "Ignoriert leichte Deckung!",
    // Match Tracker additions
    cpLbl: "Befehlspunkte (BP)",
    // Core Actions Guide
    actionsHelpTitle: "🏃 REGELN: KERN-AKTIONEN",
    actionsHelpIntro: "Eine kurze Erinnerung, was du mit deinen Aktionspunkten (AP) tun kannst:",
    actionMoveTitle: "Bewegen:",
    actionMoveDesc: "Bewege dich bis zu deinem Bewegungswert in Zoll.",
    actionDashTitle: "Spurt:",
    actionDashDesc: "Bewege dich bis zu 3 Zoll. Kann nicht genutzt werden, um in die Nahkampfreichweite (Engagement Range) zu gelangen.",
    actionChargeTitle: "Angriff (Charge):",
    actionChargeDesc: "Bewege dich bis zu Bewegung + 1 Zoll. Muss in der Nahkampfreichweite eines Gegners enden.",
    actionShootTitle: "Schießen:",
    actionShootDesc: "Führe eine Fernkampfattacke durch. Erfordert Einsatzbereit-Befehl und Sichtlinie.",
    actionFightTitle: "Kämpfen:",
    actionFightDesc: "Handle einen Nahkampf gegen einen Gegner in Nahkampfreichweite ab.",
    actionFallBackTitle: "Rückzug (Fall Back):",
    actionFallBackDesc: "Bewege dich aus der Nahkampfreichweite heraus. Kostet 2 AP.",
    actionPassTitle: "Passen:",
    actionPassDesc: "Tue nichts für 1 AP.",
    // USRs Guide
    usrHelpTitle: "⚔️ REGELN: WAFFEN-SONDERREGELN",
    usrHelpIntro: "Häufige Universelle Sonderregeln (USRs) auf Waffenprofilen:",
    usrAccurateTitle: "Präzise (Accurate):",
    usrAccurateDesc: "Behalte bis zu x fehlgeschlagene Treffer als normale Treffer.",
    usrAPTitle: "Durchschlag (APx):",
    usrAPDesc: "Das Ziel wirft x Verteidigungswürfel weniger.",
    usrBalancedTitle: "Ausgewogen (Balanced):",
    usrBalancedDesc: "Wiederhole einen Angriffswürfel.",
    usrBlastTitle: "Explosiv x (Blast):",
    usrBlastDesc: "Greife jeden Agenten innerhalb von x\" um das Ziel an.",
    usrBrutalTitle: "Brutal (Brutal):",
    usrBrutalDesc: "Der Gegner kann nur mit kritischen Treffern parieren.",
    usrDevastatingTitle: "Verheerend x (Devastating):",
    usrDevastatingDesc: "Jeder kritische Treffer verursacht x zusätzlichen Schaden.",
    usrHeavyTitle: "Schwer (Heavy):",
    usrHeavyDesc: "Kein Bewegen oder Spurten in der gleichen Aktivierung wie das Schießen.",
    usrIndirectTitle: "Indirekt (Indirect):",
    usrIndirectDesc: "Das Ziel kann keine Deckungswürfe automatisch behalten.",
    usrLethalTitle: "Tödlich x+ (Lethal):",
    usrLethalDesc: "Kritische Treffer bei einem Wurf von x+ statt einer 6.",
    usrPiercingTitle: "Panzerbrechend x (Piercing):",
    usrPiercingDesc: "Wenn du kritische Treffer behältst, erhält die Waffe DSx (APx).",
    usrPunishingTitle: "Bestrafend (Punishing):",
    usrPunishingDesc: "Wenn du einen krit. Treffer behältst, behalte einen Fehlwurf als normalen Treffer.",
    usrReliableTitle: "Zuverlässig x (Reliable):",
    usrReliableDesc: "Behalte bis zu x Angriffswürfel, ohne sie zu werfen.",
    usrRendingTitle: "Reißend (Rending):",
    usrRendingDesc: "Wenn du einen krit. Treffer behältst, wandle einen normalen Treffer in einen kritischen um.",
    usrSevereTitle: "Schwerwiegend (Severe):",
    usrSevereDesc: "Wenn du KEINEN kritischen Treffer behältst, wandle einen normalen in einen krit. Treffer um.",
    usrSilentTitle: "Lautlos (Silent):",
    usrSilentDesc: "Kann mit Befehl Verbergen (Conceal) schießen.",
    usrSmartTitle: "Zielsuchend (Smart):",
    usrSmartDesc: "Kann auf Ziele schießen, selbst wenn sie verdeckt (Obscured) sind.",
    usrStunTitle: "Betäuben (Stun):",
    usrStunDesc: "Wenn du einen krit. Treffer behältst, ziehe 1 von der APL des Ziels ab.",
    usrTorrentTitle: "Schwall x (Torrent):",
    usrTorrentDesc: "Greife gültige Ziele innerhalb von x\" zueinander an.",
    usrUnwieldyTitle: "Unhandlich (Unwieldy):",
    usrUnwieldyDesc: "Kostet 2 Aktionspunkte (AP) zum Schießen.",
  }
};

let currentLang = localStorage.getItem('killteam_lang') || 'en';

// Helper to translate strings
function t(key) {
  return translations[currentLang][key] || key;
}

// ==========================================
// SECTION 2: CRIT OPS DATA
// ==========================================
const critOps = [
  {
    id: 1,
    name: { en: "Secure", de: "Sichern" },
    actions: [{
      name: { en: "SECURE", de: "SICHERN" },
      ap: 1,
      effect: {
        en: "One objective marker the active operative controls is secured by your kill team until the enemy kill team secures that objective marker.",
        de: "Ein Missionsziel, das der aktive Agent kontrolliert, wird von deinem Kill Team gesichert, bis das gegnerische Kill Team dieses Missionsziel sichert."
      },
      conditions: {
        en: "Cannot during first turning point, or while within control range of an enemy operative.",
        de: "Nicht im ersten Wendepunkt oder in Kontrollreichweite eines gegnerischen Agenten."
      }
    }],
    vpRules: {
      en: "At the end of each turning point after the first: If any objective markers are secured by your kill team, you score 1VP. If more objective markers are secured by your kill team than your opponent's kill team, you score 1VP.",
      de: "Am Ende jedes Wendepunkts nach dem ersten: Wenn mindestens ein Missionsziel von deinem Kill Team gesichert ist, erzielst du 1SP. Wenn mehr Missionsziele von deinem Kill Team gesichert sind als vom gegnerischen Kill Team, erzielst du 1SP."
    }, tip: { en: "Push forward to take and hold objective markers before the enemy does. You score points simply by having more markers than your opponent at the end of Turning Points 2, 3, and 4!", de: "Rücke vor, um Missionsziele einzunehmen und zu halten, bevor der Gegner es tut. Du punktest einfach dadurch, am Ende von Wendepunkt 2, 3 und 4 mehr Marker als dein Gegner zu haben!" }
  },
  {
    id: 2,
    name: { en: "Loot", de: "Plündern" },
    actions: [{
      name: { en: "LOOT", de: "PLÜNDERN" },
      ap: 1,
      effect: {
        en: "One objective marker the active operative controls is looted.",
        de: "Ein Missionsziel, das der aktive Agent kontrolliert, wird geplündert."
      },
      conditions: {
        en: "Cannot during first turning point, while within control range of an enemy operative, or if that objective marker has already been looted during this turning point.",
        de: "Nicht im ersten Wendepunkt, in Kontrollreichweite eines gegnerischen Agenten, oder wenn das Missionsziel in diesem Wendepunkt bereits geplündert wurde."
      }
    }],
    vpRules: {
      en: "Whenever a friendly operative performs the Loot action, you score 1VP (to a maximum of 2VP per turning point).",
      de: "Immer wenn ein befreundeter Agent die Aktion Plündern ausführt, erzielst du 1SP (bis zu einem Maximum von 2SP pro Wendepunkt)."
    }, tip: { en: "Use your actions to Loot objectives! Once looted, an objective cannot be looted again that turn, so make sure you loot them before the enemy gets the chance. Maximize your 2VP per turn by looting two different markers.", de: "Nutze deine Aktionen, um Ziele zu plündern! Einmal geplündert, kann ein Ziel in diesem Wendepunkt nicht erneut geplündert werden, also plündere sie, bevor der Gegner die Chance hat." }
  },
  {
    id: 3,
    name: { en: "Transmission", de: "Übertragung" },
    actions: [{
      name: { en: "INITIATE TRANSMISSION", de: "ÜBERTRAGUNG INITIITIEREN" },
      ap: 1,
      effect: {
        en: "One objective marker the active operative controls is transmitting until the start of the next turning point.",
        de: "Ein Missionsziel, das der aktive Agent kontrolliert, überträgt bis zum Beginn des nächsten Wendepunkts."
      },
      conditions: {
        en: "Cannot during first turning point, or while within control range of an enemy operative.",
        de: "Nicht im ersten Wendepunkt oder in Kontrollreichweite eines gegnerischen Agenten."
      }
    }],
    vpRules: {
      en: "At the end of each turning point after the first: If friendly operatives control any transmitting objective markers, you score 1VP. If friendly operatives control more transmitting objective markers than enemy operatives do, you score 1VP.",
      de: "Am Ende jedes Wendepunkts nach dem ersten: Wenn befreundete Agenten übertragende Missionsziele kontrollieren, erzielst du 1SP. Wenn befreundete Agenten mehr übertragende Missionsziele kontrollieren als gegnerische Agenten, erzielst du 1SP."
    }, tip: { en: "Convert markers into transmitting stations! They stay active until the next turn, so try to initiate transmissions late in the turn so the enemy cannot easily stop you from scoring at the end of the round.", de: "Verwandle Marker in Sendestationen! Sie bleiben bis zum nächsten Zug aktiv. Versuche, Übertragungen spät im Zug zu starten, damit der Gegner dich nicht leicht am Punkten hindern kann." }
  },
  {
    id: 4,
    name: { en: "Orb", de: "Sphäre" },
    actions: [{
      name: { en: "MOVE ORB", de: "SPHÄRE BEWEGEN" },
      ap: 1,
      effect: {
        en: "If the active operative controls the objective marker that has the Orb token, move that token: If the centre objective marker has it, move it to either player's objective marker (your choice). If a player's objective marker has it, move it to the centre objective marker.",
        de: "Wenn der aktive Agent das Missionsziel mit dem Sphären-Marker kontrolliert, bewege diesen Marker: Wenn das mittlere Missionsziel ihn hat, bewege ihn zu einem Missionsziel eines Spielers (deine Wahl). Wenn das Missionsziel eines Spielers ihn hat, bewege ihn zum mittleren Missionsziel."
      },
      conditions: {
        en: "Cannot during first turning point, while within control range of an enemy operative, or if it doesn't control the objective marker that has the Orb token.",
        de: "Nicht im ersten Wendepunkt, in Kontrollreichweite eines gegnerischen Agenten, oder wenn er das Missionsziel mit dem Sphären-Marker nicht kontrolliert."
      }
    }],
    additionalRules: {
      en: "At the start of the battle, the centre objective marker has the Orb token.",
      de: "Zu Beginn der Schlacht hat das mittlere Missionsziel den Sphären-Marker."
    },
    vpRules: {
      en: "At the end of each turning point after the first, for each objective marker that friendly operatives control that doesn't have the Orb token, you score 1VP.",
      de: "Am Ende jedes Wendepunkts nach dem ersten erzielst du 1SP für jedes Missionsziel, das befreundete Agenten kontrollieren und das nicht den Sphären-Marker hat."
    }, tip: { en: "The Orb starts in the middle. You score points by holding the OTHER markers. Try to grab the Orb and throw it onto an objective marker your opponent controls, denying them points while you safely score on yours!", de: "Die Sphäre startet in der Mitte. Du punktest, indem du die ANDEREN Marker hältst. Versuche, die Sphäre auf ein vom Gegner kontrolliertes Missionsziel zu werfen, um ihm Punkte zu verweigern!" }
  },
  {
    id: 5,
    name: { en: "Stake Claim", de: "Anspruch erheben" },
    actions: [],
    additionalRules: {
      en: "At the start of the Gambit step of each Strategy phase after the first, starting with the player with initiative, each player must select both one objective marker and one of the following claims for that turning point: (a) Friendly operatives will control that objective marker at the end of this turning point. (b) Enemy operatives won't contest that objective marker at the end of this turning point. Each player cannot select each objective marker more than once per battle.",
      de: "Zu Beginn des Gambit-Schritts jeder Strategiephase nach der ersten muss jeder Spieler, beginnend mit dem Spieler mit Initiative, sowohl ein Missionsziel als auch einen der folgenden Ansprüche für diesen Wendepunkt wählen: (a) Befreundete Agenten werden dieses Missionsziel am Ende dieses Wendepunkts kontrollieren. (b) Gegnerische Agenten werden dieses Missionsziel am Ende dieses Wendepunkts nicht streitig machen. Jeder Spieler darf jedes Missionsziel nur einmal pro Schlacht wählen."
    },
    vpRules: {
      en: "At the end of each turning point after the first: If friendly operatives control more objective markers than enemy operatives do, you score 1VP. If your selected claim is true, you score 1VP.",
      de: "Am Ende jedes Wendepunkts nach dem ersten: Wenn befreundete Agenten mehr Missionsziele kontrollieren als gegnerische Agenten, erzielst du 1SP. Wenn dein gewählter Anspruch wahr ist, erzielst du 1SP."
    }, tip: { en: "Each turn you must bet on an objective: either you will control it, or the enemy won't contest it. Pick objectives you know you can defend, and remember you can only pick each marker once per game!", de: "In jedem Zug musst du auf ein Missionsziel wetten: Entweder wirst du es kontrollieren, oder der Gegner macht es dir nicht streitig. Wähle Ziele, die du verteidigen kannst, und wähle klug!" }
  },
  {
    id: 6,
    name: { en: "Energy Cells", de: "Energiezellen" },
    actions: [],
    additionalRules: {
      en: "Operatives can perform the Pick Up Marker action upon each objective marker in the following turning points: TP2 but must spend additional 2AP (cannot be free/reduced), TP3 but must spend additional 1AP (cannot be free/reduced), TP4 as normal. Whenever an operative is carrying an objective marker, that operative cannot be removed and set up again more than 6\" away.",
      de: "Agenten können die Aktion Marker aufheben bei jedem Missionsziel in folgenden Wendepunkten durchführen: WP2 aber sie müssen 2AP extra ausgeben (darf nicht kostenlos/reduziert sein), WP3 aber sie müssen 1AP extra ausgeben (darf nicht kostenlos/reduziert sein), WP4 normal. Wenn ein Agent ein Missionsziel trägt, kann er nicht entfernt und weiter als 6\" entfernt wieder aufgestellt werden."
    },
    vpRules: {
      en: "At the end of each turning point after the first, if friendly operatives control more objective markers than enemy operatives do, you score 1VP. At the end of the battle, for each objective marker friendly operatives are carrying, you score 1VP.",
      de: "Am Ende jedes Wendepunkts nach dem ersten, wenn befreundete Agenten mehr Missionsziele kontrollieren als gegnerische Agenten, erzielst du 1SP. Am Ende der Schlacht erzielst du für jedes Missionsziel, das befreundete Agenten tragen, 1SP."
    }, tip: { en: "You can actually pick up the objective markers and walk away with them! It costs extra AP in early turns, but carrying them to safety guarantees you points at the end of the game and denies them to the enemy.", de: "Du kannst die Missionsziele tatsächlich aufheben und mit ihnen weggehen! In frühen Zügen kostet das extra AP, aber sie in Sicherheit zu bringen, garantiert dir Punkte am Spielende." }
  },
  {
    id: 7,
    name: { en: "Download", de: "Download" },
    actions: [{
      name: { en: "DOWNLOAD", de: "DOWNLOAD" },
      ap: 1,
      effect: {
        en: "One centre or opponent's objective marker the active operative controls is downloaded.",
        de: "Ein mittleres oder gegnerisches Missionsziel, das der aktive Agent kontrolliert, wird heruntergeladen."
      },
      conditions: {
        en: "Cannot during the first or second turning point, while within control range of an enemy operative, or if that objective marker has already been downloaded during the battle.",
        de: "Nicht im ersten oder zweiten Wendepunkt, in Kontrollreichweite eines gegnerischen Agenten, oder wenn das Missionsziel bereits während der Schlacht heruntergeladen wurde."
      }
    }],
    vpRules: {
      en: "At the end of each turning point after the first, if friendly operatives control more objective markers than enemy operatives do, you score 1VP. Ignore downloaded objective markers. Whenever Download action during TP3, score 1VP. During TP4, score 2VP.",
      de: "Am Ende jedes Wendepunkts nach dem ersten, wenn befreundete Agenten mehr Missionsziele kontrollieren als gegnerische Agenten, erzielst du 1SP. Ignoriere heruntergeladene Missionsziele. Immer wenn die Aktion Download in WP3 ausgeführt wird, erziele 1SP. In WP4 erziele 2SP."
    }, tip: { en: "Focus on the center or the enemy's side of the board! Downloading requires you to push up. Since downloading scores heavy points in turns 3 and 4, position your operatives safely near objectives early on.", de: "Konzentriere dich auf die Mitte oder die gegnerische Spielfeldseite! Da der Download in Runde 3 und 4 viele Punkte bringt, positioniere deine Agenten früh sicher nahe der Ziele." }
  },
  {
    id: 8,
    name: { en: "Data", de: "Daten" },
    actions: [
      {
        name: { en: "COMPILE DATA", de: "DATEN KOMPILIEREN" },
        ap: 1,
        effect: {
          en: "One objective marker the active operative controls gains 1 Data point (use dice as token).",
          de: "Ein Missionsziel, das der aktive Agent kontrolliert, erhält 1 Datenpunkt (benutze Würfel als Marker)."
        },
        conditions: {
          en: "Cannot during first TP, within control range of enemy, or if already gained a Data point this TP.",
          de: "Nicht in WP1, in gegnerischer Kontrollreichweite, oder wenn es in diesem WP bereits einen Datenpunkt erhalten hat."
        }
      },
      {
        name: { en: "SEND DATA", de: "DATEN SENDEN" },
        ap: 1,
        effect: {
          en: "Remove all Data points from an objective marker the active operative controls.",
          de: "Entferne alle Datenpunkte von einem Missionsziel, das der aktive Agent kontrolliert."
        },
        conditions: {
          en: "Cannot during first/second/third TP, within control range, or if no Data points.",
          de: "Nicht in WP1/WP2/WP3, in Kontrollreichweite, oder wenn es keine Datenpunkte gibt."
        }
      }
    ],
    vpRules: {
      en: "At end of TP2 and TP3, if more Compile Data actions performed than enemy, score 1VP. Whenever Send Data action performed, score VP equal to Data points removed.",
      de: "Am Ende von WP2 und WP3, wenn mehr Daten kompilieren Aktionen ausgeführt wurden als vom Gegner, erziele 1SP. Immer wenn Daten senden ausgeführt wird, erziele SP in Höhe der entfernten Datenpunkte."
    }, tip: { en: "In turns 2 and 3, rush to objectives and Compile Data to place a dice on them. Then, in turns 3 and 4, use Send Data to convert those dice into Victory Points before the enemy stops you!", de: "In Runde 2 und 3 musst du zu den Zielen eilen und Daten kompilieren, um Würfel darauf zu platzieren. Nutze dann in Runde 3 und 4 Daten senden, um diese in Siegpunkte umzuwandeln!" }
  },
  {
    id: 9,
    name: { en: "Reboot", de: "Neustart" },
    actions: [{
      name: { en: "REBOOT", de: "NEUSTART" },
      ap: 2,
      effect: {
        en: "One inert objective marker the active operative controls is no longer inert.",
        de: "Ein inaktives Missionsziel, das der aktive Agent kontrolliert, ist nicht mehr inaktiv."
      },
      conditions: {
        en: "Cannot during first TP, or within control range.",
        de: "Nicht im ersten WP oder in Kontrollreichweite."
      }
    }],
    additionalRules: {
      en: "When setting up, number each objective marker 1-3. At start of Gambit step of each Strategy phase, each player secretly selects one objective marker by putting matching dice in hand, reveal simultaneously: If same selected, that one is inert. If different, the one neither selected is inert.",
      de: "Beim Aufstellen jedes Missionsziel 1-3 nummerieren. Zu Beginn des Gambit-Schritts jeder Strategiephase wählt jeder Spieler geheim ein Missionsziel durch passenden Würfel in der Hand, gleichzeitig aufdecken: Wenn gleiches gewählt, ist dieses inaktiv. Wenn unterschiedlich, ist das nicht gewählte inaktiv."
    },
    vpRules: {
      en: "At end of each TP after first, for each objective marker friendly operatives control, score 1VP. Ignore inert markers.",
      de: "Am Ende jedes WP nach dem ersten für jedes von befreundeten Agenten kontrollierte Missionsziel 1SP erzielen. Ignoriere inaktive Marker."
    }, tip: { en: "One objective will be randomly inert (worthless) each turn based on a secret dice bid! If a marker you control becomes inert, use the Reboot action to reactivate it so you can still score.", de: "Ein Missionsziel wird jede Runde durch ein geheimes Würfelgebot inaktiv (wertlos)! Wenn ein von dir kontrollierter Marker inaktiv wird, nutze die Neustart-Aktion, um ihn zu reaktivieren." }
  }
];

// ==========================================
// SECTION 3: TAC OPS DATA
// ==========================================
const tacOps = [
  // Infiltration
  {
    id: 1,
    archetype: "infiltration",
    name: { en: "Plant Devices", de: "Geräte platzieren" },
    reveal: { en: "First time Plant Device action.", de: "Das erste Mal, wenn die Aktion Gerät platzieren ausgeführt wird." },
    actions: [{
      name: { en: "PLANT DEVICE", de: "GERÄT PLATZIEREN" },
      ap: 1,
      effect: { en: "Objective marker gains Device token.", de: "Missionsziel erhält einen Geräte-Marker." },
      conditions: { en: "Not TP1, not in control range, not if already has your Device token.", de: "Nicht in WP1, nicht in Kontrollreichweite, nicht wenn es bereits deinen Geräte-Marker hat." }
    }],
    vpRules: {
      en: "End of each TP after first: opponent's objective marker has your Device token = 1VP. Each other objective marker enemy contests with your Device token = 1VP. Max 2VP/TP.",
      de: "Am Ende jedes WP nach dem ersten: gegnerisches Missionsziel hat deinen Geräte-Marker = 1SP. Jedes andere Missionsziel, das der Gegner streitig macht und das deinen Geräte-Marker hat = 1SP. Max 2SP/WP."
    }, tip: { en: "Push forward to take and hold objective markers before the enemy does. You score points simply by having more markers than your opponent at the end of Turning Points 2, 3, and 4!", de: "Rücke vor, um Missionsziele einzunehmen und zu halten, bevor der Gegner es tut. Du punktest einfach dadurch, am Ende von Wendepunkt 2, 3 und 4 mehr Marker als dein Gegner zu haben!" }
  },
  {
    id: 2,
    archetype: "infiltration",
    name: { en: "Steal Intelligence", de: "Geheimdienstinformationen stehlen" },
    reveal: { en: "First enemy incapacitated.", de: "Erster gegnerischer Agent ausgeschaltet." },
    additionalRules: {
      en: "When enemy incapacitated, place Intelligence mission marker in its control range. Friendly can Pick Up (can carry 2 Intelligence or 1+1 other).",
      de: "Wenn gegnerischer Agent ausgeschaltet wird, platziere einen Informations-Missionsmarker in dessen Kontrollreichweite. Befreundete Agenten können ihn aufheben (können 2 Informationen oder 1+1 andere tragen)."
    },
    vpRules: {
      en: "End of each TP after first, if carrying any Intelligence = 1VP. End of battle, per Intelligence carried = 1VP.",
      de: "Am Ende jedes WP nach dem ersten, wenn Information getragen wird = 1SP. Am Ende der Schlacht, pro getragener Information = 1SP."
    }, tip: { en: "Use your actions to Loot objectives! Once looted, an objective cannot be looted again that turn, so make sure you loot them before the enemy gets the chance. Maximize your 2VP per turn by looting two different markers.", de: "Nutze deine Aktionen, um Ziele zu plündern! Einmal geplündert, kann ein Ziel in diesem Wendepunkt nicht erneut geplündert werden, also plündere sie, bevor der Gegner die Chance hat." }
  },
  {
    id: 3,
    archetype: "infiltration",
    name: { en: "Track Enemy", de: "Feind verfolgen" },
    reveal: { en: "First VP scored.", de: "Erster SP erzielt." },
    additionalRules: {
      en: "Enemy is tracked if valid target for friendly within 6\" with Conceal order, not valid target for the enemy, not in control range of enemies.",
      de: "Gegner wird verfolgt, wenn er ein gültiges Ziel für einen befreundeten Agenten innerhalb von 6\" mit Befehl Verbergen ist, kein gültiges Ziel für den Gegner, nicht in gegnerischer Kontrollreichweite."
    },
    vpRules: {
      en: "End of each TP after first: 1 tracked = 1VP (2VP if TP4). 2+ tracked = 2VP. Max 2VP/TP.",
      de: "Am Ende jedes WP nach dem ersten: 1 verfolgt = 1SP (2SP in WP4). 2+ verfolgt = 2SP. Max 2SP/WP."
    }, tip: { en: "Convert markers into transmitting stations! They stay active until the next turn, so try to initiate transmissions late in the turn so the enemy cannot easily stop you from scoring at the end of the round.", de: "Verwandle Marker in Sendestationen! Sie bleiben bis zum nächsten Zug aktiv. Versuche, Übertragungen spät im Zug zu starten, damit der Gegner dich nicht leicht am Punkten hindern kann." }
  },
  // Recon
  {
    id: 4,
    archetype: "recon",
    name: { en: "Flank", de: "Flankieren" },
    reveal: { en: "As Strategic Gambit.", de: "Als Strategisches Gambit." },
    additionalRules: {
      en: "Divide killzone into left/right flanks. Operative contests flank if wholly within it and wholly in opponent's territory. Control flank if total APL > enemy's.",
      de: "Teile Killzone in linke/rechte Flanke. Agent macht Flanke streitig, wenn er vollständig darin und vollständig im gegnerischen Gebiet ist. Flanke kontrolliert, wenn eigener Gesamt-APL > gegnerischer."
    },
    vpRules: {
      en: "After reveal, end of each TP after first, per flank controlled = 1VP. In TP4 if also controlled in TP3 = 2VP instead. Max 2VP/TP.",
      de: "Nach Aufdecken, am Ende jedes WP nach dem ersten, pro kontrollierter Flanke = 1SP. In WP4, wenn auch in WP3 kontrolliert = stattdessen 2SP. Max 2SP/WP."
    }, tip: { en: "The Orb starts in the middle. You score points by holding the OTHER markers. Try to grab the Orb and throw it onto an objective marker your opponent controls, denying them points while you safely score on yours!", de: "Die Sphäre startet in der Mitte. Du punktest, indem du die ANDEREN Marker hältst. Versuche, die Sphäre auf ein vom Gegner kontrolliertes Missionsziel zu werfen, um ihm Punkte zu verweigern!" }
  },
  {
    id: 5,
    archetype: "recon",
    name: { en: "Retrieval", de: "Bergung" },
    reveal: { en: "First VP scored.", de: "Erster SP erzielt." },
    actions: [{
      name: { en: "RETRIEVE", de: "BERGEN" },
      ap: 1,
      effect: { en: "If controlling unsearched objective marker, carry Retrieval marker, mark as searched. Can Pick Up Retrieval markers.", de: "Wenn ein ungesuchtes Missionsziel kontrolliert wird, trage Bergungs-Marker, markiere als durchsucht. Kann Bergungs-Marker aufheben." },
      conditions: { en: "Not TP1, not in control range, not if already carrying marker.", de: "Nicht in WP1, nicht in Kontrollreichweite, nicht wenn bereits ein Marker getragen wird." }
    }],
    vpRules: {
      en: "First time each objective searched = 1VP. End of battle, per Retrieval marker carried = 1VP.",
      de: "Das erste Mal, wenn jedes Missionsziel durchsucht wird = 1SP. Am Ende der Schlacht, pro getragenem Bergungs-Marker = 1SP."
    }, tip: { en: "Each turn you must bet on an objective: either you will control it, or the enemy won't contest it. Pick objectives you know you can defend, and remember you can only pick each marker once per game!", de: "In jedem Zug musst du auf ein Missionsziel wetten: Entweder wirst du es kontrollieren, oder der Gegner macht es dir nicht streitig. Wähle Ziele, die du verteidigen kannst, und wähle klug!" }
  },
  {
    id: 6,
    archetype: "recon",
    name: { en: "Scout Enemy Movement", de: "Feindbewegung aufklären" },
    reveal: { en: "First Scout action.", de: "Erste Aufklärungs-Aktion." },
    actions: [{
      name: { en: "SCOUT", de: "AUFKLÄREN" },
      ap: 1,
      effect: { en: "Select ready enemy visible to and >6\" from active operative. That enemy is monitored until next Ready step.", de: "Wähle bereiten Gegner, der für den aktiven Agenten sichtbar und >6\" entfernt ist. Dieser Gegner wird bis zum nächsten Schritt Bereitmachen überwacht." },
      conditions: { en: "Not with Engage order, not TP1, not in control range.", de: "Nicht mit Befehl Vorrücken, nicht in WP1, nicht in Kontrollreichweite." }
    }],
    vpRules: {
      en: "End of each TP after first, per monitored enemy visible to friendlies = 1VP. Max 2VP/TP.",
      de: "Am Ende jedes WP nach dem ersten, pro überwachtem Gegner, der für befreundete Agenten sichtbar ist = 1SP. Max 2SP/WP."
    }, tip: { en: "You can actually pick up the objective markers and walk away with them! It costs extra AP in early turns, but carrying them to safety guarantees you points at the end of the game and denies them to the enemy.", de: "Du kannst die Missionsziele tatsächlich aufheben und mit ihnen weggehen! In frühen Zügen kostet das extra AP, aber sie in Sicherheit zu bringen, garantiert dir Punkte am Spielende." }
  },
  // Security
  {
    id: 7,
    archetype: "security",
    name: { en: "Plant Banner", de: "Banner platzieren" },
    reveal: { en: "When Plant Banner action.", de: "Wenn Aktion Banner platzieren ausgeführt wird." },
    actions: [{
      name: { en: "PLANT BANNER", de: "BANNER PLATZIEREN" },
      ap: 1,
      effect: { en: "Place Banner marker in control range, wholly in enemy territory, >5\" from neutral edge. Can Pick Up.", de: "Platziere Banner-Marker in Kontrollreichweite, vollständig im gegnerischen Gebiet, >5\" von neutraler Kante. Kann aufgehoben werden." },
      conditions: { en: "Not TP1, not in control range, not if already performed in battle.", de: "Nicht in WP1, nicht in Kontrollreichweite, nicht wenn bereits in der Schlacht ausgeführt." }
    }],
    vpRules: {
      en: "End of each TP after first, if Banner in enemy territory and controlled = 1VP; if also no enemy contests = 2VP instead. Must be in killzone (not carried).",
      de: "Am Ende jedes WP nach dem ersten, wenn Banner im gegnerischen Gebiet und kontrolliert = 1SP; wenn auch kein Gegner streitig macht = stattdessen 2SP. Muss in der Killzone sein (nicht getragen)."
    }, tip: { en: "Focus on the center or the enemy's side of the board! Downloading requires you to push up. Since downloading scores heavy points in turns 3 and 4, position your operatives safely near objectives early on.", de: "Konzentriere dich auf die Mitte oder die gegnerische Spielfeldseite! Da der Download in Runde 3 und 4 viele Punkte bringt, positioniere deine Agenten früh sicher nahe der Ziele." }
  },
  {
    id: 8,
    archetype: "security",
    name: { en: "Martyrs", de: "Märtyrer" },
    reveal: { en: "First friendly incapacitated while contesting.", de: "Erster befreundeter Agent beim Streitig machen ausgeschaltet." },
    additionalRules: {
      en: "When friendly incapacitated while contesting, marker gains Martyr token (first time per operative only).",
      de: "Wenn befreundeter Agent beim Streitig machen ausgeschaltet wird, erhält der Marker einen Märtyrer-Marker (nur das erste Mal pro Agent)."
    },
    vpRules: {
      en: "End of each TP after first, if contesting marker with Martyr tokens, remove tokens: per token = 1VP; if also control marker = 2VP instead. Max 2VP/TP.",
      de: "Am Ende jedes WP nach dem ersten, wenn Marker mit Märtyrer-Markern streitig gemacht wird, entferne Marker: pro Marker = 1SP; wenn Marker auch kontrolliert = stattdessen 2SP. Max 2SP/WP."
    }, tip: { en: "In turns 2 and 3, rush to objectives and Compile Data to place a dice on them. Then, in turns 3 and 4, use Send Data to convert those dice into Victory Points before the enemy stops you!", de: "In Runde 2 und 3 musst du zu den Zielen eilen und Daten kompilieren, um Würfel darauf zu platzieren. Nutze dann in Runde 3 und 4 Daten senden, um diese in Siegpunkte umzuwandeln!" }
  },
  {
    id: 9,
    archetype: "security",
    name: { en: "Envoy", de: "Abgesandter" },
    reveal: { en: "First time selecting envoy.", de: "Das erste Mal bei der Wahl des Abgesandten." },
    additionalRules: {
      en: "As Strategic Gambit each TP after first, select friendly as envoy until next Ready step. Cannot reselect or select kill-op-ignored.",
      de: "Als Strategisches Gambit in jedem WP nach dem ersten wähle befreundeten Agenten als Abgesandten bis zum nächsten Schritt Bereitmachen. Kann nicht erneut gewählt oder als vom Kill-Einsatz ignoriert gewählt werden."
    },
    vpRules: {
      en: "End of each TP after first, if envoy wholly in enemy territory and not in control range = 1VP; if also no wounds lost that TP = 2VP instead.",
      de: "Am Ende jedes WP nach dem ersten, wenn der Abgesandte vollständig im gegnerischen Gebiet und nicht in Kontrollreichweite = 1SP; wenn er in diesem WP keine Wunden verloren hat = stattdessen 2SP."
    }, tip: { en: "One objective will be randomly inert (worthless) each turn based on a secret dice bid! If a marker you control becomes inert, use the Reboot action to reactivate it so you can still score.", de: "Ein Missionsziel wird jede Runde durch ein geheimes Würfelgebot inaktiv (wertlos)! Wenn ein von dir kontrollierter Marker inaktiv wird, nutze die Neustart-Aktion, um ihn zu reaktivieren." }
  },
  // Seek & Destroy
  {
    id: 10,
    archetype: "seekDestroy",
    name: { en: "Rout", de: "In die Flucht schlagen" },
    reveal: { en: "First VP scored.", de: "Erster SP erzielt." },
    vpRules: {
      en: "When friendly incapacitates enemy while within 6\" of opponent's drop zone = 1VP; if enemy had 12+ Wounds = 2VP instead. Max 2VP/TP.",
      de: "Wenn befreundeter Agent einen Gegner innerhalb von 6\" um gegnerische Landezone ausschaltet = 1SP; wenn Gegner 12+ Wunden hatte = stattdessen 2SP. Max 2SP/WP."
    }
  },
  {
    id: 11,
    archetype: "seekDestroy",
    name: { en: "Sweep & Clear", de: "Säubern & Sichern" },
    reveal: { en: "First enemy incapacitated while contesting, or first Clear action.", de: "Erster Gegner beim Streitig machen ausgeschaltet, oder erste Aktion Säubern." },
    additionalRules: {
      en: "When enemy contesting objective is incapacitated, marker gains Swept token until next Ready step.",
      de: "Wenn ein Gegner, der ein Missionsziel streitig macht, ausgeschaltet wird, erhält der Marker einen Gesäubert-Marker bis zum nächsten Schritt Bereitmachen."
    },
    actions: [{
      name: { en: "CLEAR", de: "SÄUBERN" },
      ap: 1,
      effect: { en: "Objective marker controlled is cleared for TP.", de: "Kontrolliertes Missionsziel ist für diesen WP gesäubert." },
      conditions: { en: "Not TP1, not in control range.", de: "Nicht in WP1, nicht in Kontrollreichweite." }
    }],
    vpRules: {
      en: "End of each TP after first, if 1+ objective (not yours) cleared and no enemy contests = 1VP; if also has Swept token = 2VP instead. If control marker with Swept token = 1VP. Max 2VP/TP.",
      de: "Am Ende jedes WP nach dem ersten, wenn 1+ Missionsziel (nicht deins) gesäubert und kein Gegner streitig macht = 1SP; wenn es auch einen Gesäubert-Marker hat = stattdessen 2SP. Wenn Marker mit Gesäubert-Marker kontrolliert = 1SP. Max 2SP/WP."
    }
  },
  {
    id: 12,
    archetype: "seekDestroy",
    name: { en: "Dominate", de: "Dominieren" },
    reveal: { en: "First enemy incapacitated by friendly.", de: "Erster Gegner durch befreundeten Agenten ausgeschaltet." },
    additionalRules: {
      en: "Each incapacitation gives friendly 1 Dominate token (2 if enemy had 12+ Wounds).",
      de: "Jedes Ausschalten gibt befreundetem Agenten 1 Dominieren-Marker (2, wenn Gegner 12+ Wunden hatte)."
    },
    vpRules: {
      en: "End of TP3 and TP4, remove tokens from non-incapacitated friendlies, per token = 1VP. Max 3VP/TP.",
      de: "Am Ende von WP3 und WP4, entferne Marker von nicht ausgeschalteten befreundeten Agenten, pro Marker = 1SP. Max 3SP/WP."
    }
  }
];

// ==========================================
// SECTION 4: MAP DATA
// ==========================================
const maps = [
  {
    id: 1,
    name: { en: "Map 1", de: "Karte 1" },
    dropZone1: { x: 0, y: 0, w: 100, h: 25 },
    dropZone2: { x: 0, y: 75, w: 100, h: 25 },
    territory1: { x: 0, y: 0, w: 100, h: 50 },
    territory2: { x: 0, y: 50, w: 100, h: 50 },
    objectives: [
      { x: 50, y: 15, type: 'p1' },
      { x: 50, y: 50, type: 'centre' },
      { x: 50, y: 85, type: 'p2' }
    ],
    centreLine: { orientation: 'horizontal', y: 50 },
    terrain: [
      { x: 25, y: 42, w: 12, h: 14, type: 'heavy' },
      { x: 63, y: 42, w: 12, h: 14, type: 'heavy' },
      { x: 44, y: 30, w: 12, h: 3, type: 'light' },
      { x: 44, y: 67, w: 12, h: 3, type: 'light' },
      { x: 15, y: 45, w: 3, h: 10, type: 'light' },
      { x: 82, y: 45, w: 3, h: 10, type: 'light' },
      { x: 10, y: 46, w: 8, h: 8, type: 'vantage' },
      { x: 82, y: 46, w: 8, h: 8, type: 'vantage' }
    ]
  },
  {
    id: 2,
    name: { en: "Map 2", de: "Karte 2" },
    dropZone1: { x: 0, y: 0, w: 100, h: 25 },
    dropZone2: { x: 0, y: 75, w: 100, h: 25 },
    territory1: { x: 0, y: 0, w: 100, h: 50 },
    territory2: { x: 0, y: 50, w: 100, h: 50 },
    objectives: [
      { x: 20, y: 20, type: 'p1' },
      { x: 50, y: 50, type: 'centre' },
      { x: 80, y: 80, type: 'p2' }
    ],
    centreLine: { orientation: 'horizontal', y: 50 },
    terrain: [
      { x: 28, y: 42, w: 12, h: 14, type: 'heavy' },
      { x: 60, y: 42, w: 12, h: 14, type: 'heavy' },
      { x: 38, y: 35, w: 10, h: 3, type: 'light' },
      { x: 52, y: 62, w: 10, h: 3, type: 'light' },
      { x: 18, y: 55, w: 10, h: 3, type: 'light' },
      { x: 72, y: 42, w: 10, h: 3, type: 'light' },
      { x: 12, y: 38, w: 8, h: 8, type: 'vantage' },
      { x: 80, y: 54, w: 8, h: 8, type: 'vantage' }
    ]
  },
  {
    id: 3,
    name: { en: "Map 3", de: "Karte 3" },
    dropZone1: { x: 0, y: 0, w: 40, h: 40 },
    dropZone2: { x: 60, y: 60, w: 40, h: 40 },
    territory1: { x: 0, y: 0, w: 100, h: 100, clipPath: 'polygon(0 0, 100 0, 0 100)' },
    territory2: { x: 0, y: 0, w: 100, h: 100, clipPath: 'polygon(100 100, 0 100, 100 0)' },
    objectives: [
      { x: 25, y: 25, type: 'p1' },
      { x: 50, y: 50, type: 'centre' },
      { x: 75, y: 75, type: 'p2' }
    ],
    centreLine: { orientation: 'diagonal', points: '100,0 0,100' },
    terrain: [
      { x: 62, y: 16, w: 14, h: 14, type: 'heavy' },
      { x: 24, y: 70, w: 14, h: 14, type: 'heavy' },
      { x: 38, y: 55, w: 10, h: 3, type: 'light' },
      { x: 52, y: 42, w: 10, h: 3, type: 'light' },
      { x: 55, y: 18, w: 3, h: 12, type: 'light' },
      { x: 42, y: 70, w: 3, h: 12, type: 'light' },
      { x: 78, y: 22, w: 8, h: 8, type: 'vantage' },
      { x: 14, y: 70, w: 8, h: 8, type: 'vantage' }
    ]
  },
  {
    id: 4,
    name: { en: "Map 4", de: "Karte 4" },
    dropZone1: { x: 0, y: 0, w: 100, h: 20 },
    dropZone2: { x: 0, y: 80, w: 100, h: 20 },
    territory1: { x: 0, y: 0, w: 100, h: 50 },
    territory2: { x: 0, y: 50, w: 100, h: 50 },
    objectives: [
      { x: 30, y: 35, type: 'p1' },
      { x: 50, y: 50, type: 'centre' },
      { x: 70, y: 65, type: 'p2' }
    ],
    centreLine: { orientation: 'horizontal', y: 50 },
    terrain: [
      { x: 22, y: 44, w: 14, h: 12, type: 'heavy' },
      { x: 64, y: 44, w: 14, h: 12, type: 'heavy' },
      { x: 44, y: 36, w: 12, h: 3, type: 'light' },
      { x: 44, y: 61, w: 12, h: 3, type: 'light' },
      { x: 15, y: 32, w: 3, h: 10, type: 'light' },
      { x: 82, y: 58, w: 3, h: 10, type: 'light' },
      { x: 10, y: 60, w: 8, h: 8, type: 'vantage' },
      { x: 82, y: 32, w: 8, h: 8, type: 'vantage' }
    ]
  },
  {
    id: 5,
    name: { en: "Map 5", de: "Karte 5" },
    dropZone1: { x: 0, y: 0, w: 20, h: 100 },
    dropZone2: { x: 80, y: 0, w: 20, h: 100 },
    territory1: { x: 0, y: 0, w: 50, h: 100 },
    territory2: { x: 50, y: 0, w: 50, h: 100 },
    objectives: [
      { x: 20, y: 50, type: 'p1' },
      { x: 50, y: 50, type: 'centre' },
      { x: 80, y: 50, type: 'p2' }
    ],
    centreLine: { orientation: 'vertical', x: 50 },
    terrain: [
      { x: 44, y: 20, w: 12, h: 14, type: 'heavy' },
      { x: 44, y: 66, w: 12, h: 14, type: 'heavy' },
      { x: 30, y: 44, w: 3, h: 12, type: 'light' },
      { x: 67, y: 44, w: 3, h: 12, type: 'light' },
      { x: 35, y: 76, w: 10, h: 3, type: 'light' },
      { x: 55, y: 21, w: 10, h: 3, type: 'light' },
      { x: 46, y: 6, w: 8, h: 8, type: 'vantage' },
      { x: 46, y: 86, w: 8, h: 8, type: 'vantage' }
    ]
  },
  {
    id: 6,
    name: { en: "Map 6", de: "Karte 6" },
    dropZone1: { x: 25, y: 0, w: 50, h: 20 },
    dropZone2: { x: 25, y: 80, w: 50, h: 20 },
    territory1: { x: 0, y: 0, w: 100, h: 50 },
    territory2: { x: 0, y: 50, w: 100, h: 50 },
    objectives: [
      { x: 20, y: 20, type: 'p1' },
      { x: 50, y: 50, type: 'centre' },
      { x: 80, y: 80, type: 'p2' }
    ],
    centreLine: { orientation: 'horizontal', y: 50 },
    terrain: [
      { x: 26, y: 43, w: 14, h: 14, type: 'heavy' },
      { x: 60, y: 43, w: 14, h: 14, type: 'heavy' },
      { x: 44, y: 32, w: 12, h: 3, type: 'light' },
      { x: 44, y: 65, w: 12, h: 3, type: 'light' },
      { x: 22, y: 60, w: 10, h: 3, type: 'light' },
      { x: 68, y: 37, w: 10, h: 3, type: 'light' },
      { x: 8, y: 46, w: 8, h: 8, type: 'vantage' },
      { x: 84, y: 46, w: 8, h: 8, type: 'vantage' }
    ]
  }
];

// ==========================================
// SECTION 5: RENDER FUNCTIONS
// ==========================================

function renderCritOp(critOp, lang) {
  let html = `<div class="card-header crit-op-header">
                <h3>${t('critOpTitle')}: ${critOp.name[lang]}</h3>
              </div>
              <div class="card-body">`;
  
  if (critOp.actions && critOp.actions.length > 0) {
    critOp.actions.forEach(action => {
      html += `<div class="mission-action">
                 <div class="action-header">
                   <span class="action-title">${action.name[lang]}</span>
                   <span class="ap-badge">${action.ap} AP</span>
                 </div>
                 <p class="action-effect">${action.effect[lang]}</p>
                 <div class="action-conditions">
                   <strong>${t('conditions')}:</strong> ${action.conditions[lang]}
                 </div>
               </div>`;
    });
  }
  
  if (critOp.additionalRules) {
    html += `<div class="additional-rules">
               <h4>${t('additionalRules')}</h4>
               <p>${critOp.additionalRules[lang]}</p>
             </div>`;
  }
  
  if (critOp.tip) {
    html += `<div class="mission-tip-box" style="margin-top: 15px; padding: 10px; background: rgba(56, 189, 248, 0.1); border-left: 3px solid #38bdf8; border-radius: 4px;">
               <strong style="color: #38bdf8; font-size: 0.9em; display: block; margin-bottom: 5px;">💡 ${lang === 'de' ? 'Strategie-Tipp' : 'Strategy Tip'}</strong>
               <p style="margin: 0; font-size: 0.85em; color: #e2e8f0;">${critOp.tip[lang]}</p>
             </div>`;
  }
  
  html += `<div class="vp-rules">
             <h4>${t('victoryPoints')}</h4>
             <p>${critOp.vpRules[lang]}</p>
           </div>
         </div>`;
         
  return html;
}

function renderMap(map, lang) {
  // SVG Setup
  const svgNS = "http://www.w3.org/2000/svg";
  const w = 400;
  const h = 400;
  
  let svg = `<svg viewBox="0 0 ${w} ${h}" width="100%" height="100%" xmlns="${svgNS}" style="background-color: #1a1a20; border-radius: 8px;">`;
  
  // Grid
  for (let i = 1; i < 10; i++) {
    svg += `<line x1="0" y1="${i*40}" x2="400" y2="${i*40}" stroke="#ffffff" stroke-opacity="0.05" />`;
    svg += `<line x1="${i*40}" y1="0" x2="${i*40}" y2="400" stroke="#ffffff" stroke-opacity="0.05" />`;
  }
  
  // Territory 1
  if (map.territory1.clipPath) {
    svg += `<polygon points="0,0 400,0 0,400" fill="#f97316" fill-opacity="0.15" />`;
  } else {
    svg += `<rect x="${map.territory1.x * 4}" y="${map.territory1.y * 4}" width="${map.territory1.w * 4}" height="${map.territory1.h * 4}" fill="#f97316" fill-opacity="0.15" />`;
  }
  
  // Territory 2
  if (map.territory2.clipPath) {
    svg += `<polygon points="400,400 0,400 400,0" fill="#3b82f6" fill-opacity="0.15" />`;
  } else {
    svg += `<rect x="${map.territory2.x * 4}" y="${map.territory2.y * 4}" width="${map.territory2.w * 4}" height="${map.territory2.h * 4}" fill="#3b82f6" fill-opacity="0.15" />`;
  }
  
  // Drop Zone 1
  svg += `<rect x="${map.dropZone1.x * 4}" y="${map.dropZone1.y * 4}" width="${map.dropZone1.w * 4}" height="${map.dropZone1.h * 4}" fill="#f97316" fill-opacity="0.3" stroke="#f97316" stroke-width="2" />`;
  
  // Drop Zone 2
  svg += `<rect x="${map.dropZone2.x * 4}" y="${map.dropZone2.y * 4}" width="${map.dropZone2.w * 4}" height="${map.dropZone2.h * 4}" fill="#3b82f6" fill-opacity="0.3" stroke="#3b82f6" stroke-width="2" />`;
  
  // Centre Line
  if (map.centreLine.orientation === 'horizontal') {
    svg += `<line x1="0" y1="${map.centreLine.y * 4}" x2="400" y2="${map.centreLine.y * 4}" stroke="#ffffff" stroke-width="2" stroke-dasharray="10,10" />`;
  } else if (map.centreLine.orientation === 'vertical') {
    svg += `<line x1="${map.centreLine.x * 4}" y1="0" x2="${map.centreLine.x * 4}" y2="400" stroke="#ffffff" stroke-width="2" stroke-dasharray="10,10" />`;
  } else if (map.centreLine.orientation === 'diagonal') {
    svg += `<line x1="400" y1="0" x2="0" y2="400" stroke="#ffffff" stroke-width="2" stroke-dasharray="10,10" />`;
  }
  
  // Terrain
  const showTerrain = localStorage.getItem('killteam_show_terrain') !== 'false';
  const displayStyle = showTerrain ? '' : 'display: none;';
  
  svg += `<g class="terrain-svg-group" style="${displayStyle}">`;
  const terrainList = map.terrain || [
    { x: 22, y: 36, w: 16, h: 9, type: 'heavy' },
    { x: 62, y: 55, w: 16, h: 9, type: 'heavy' },
    { x: 35, y: 23, w: 12, h: 3.5, type: 'light' },
    { x: 53, y: 73.5, w: 12, h: 3.5, type: 'light' },
    { x: 15, y: 48, w: 3.5, h: 12, type: 'light' },
    { x: 81.5, y: 40, w: 3.5, h: 12, type: 'light' },
    { x: 12, y: 30, w: 7.5, h: 7.5, type: 'vantage' },
    { x: 80.5, y: 62.5, w: 7.5, h: 7.5, type: 'vantage' }
  ];

  terrainList.forEach(t_item => {
    if (t_item.type === 'heavy') {
      svg += `<rect x="${t_item.x * 4}" y="${t_item.y * 4}" width="${t_item.w * 4}" height="${t_item.h * 4}" fill="#272730" stroke="#f97316" stroke-opacity="0.8" stroke-width="2" rx="4" />
              <line x1="${t_item.x * 4}" y1="${t_item.y * 4}" x2="${(t_item.x + t_item.w) * 4}" y2="${(t_item.y + t_item.h) * 4}" stroke="#f97316" stroke-opacity="0.3" stroke-width="1" />
              <text x="${(t_item.x + t_item.w/2) * 4}" y="${(t_item.y + t_item.h/2) * 4 + 4}" font-family="Arial" font-size="9" font-weight="bold" fill="#f97316" text-anchor="middle">${t('terrainHeavyShort')}</text>`;
    } else if (t_item.type === 'light') {
      svg += `<rect x="${t_item.x * 4}" y="${t_item.y * 4}" width="${t_item.w * 4}" height="${t_item.h * 4}" fill="#1e293b" stroke="#38bdf8" stroke-opacity="0.8" stroke-width="1.5" stroke-dasharray="3,3" rx="2" />
              <text x="${(t_item.x + t_item.w/2) * 4}" y="${(t_item.y + t_item.h/2) * 4 + 3}" font-family="Arial" font-size="7.5" font-weight="bold" fill="#38bdf8" text-anchor="middle">${t('terrainLightShort')}</text>`;
    } else if (t_item.type === 'vantage') {
      svg += `<rect x="${t_item.x * 4}" y="${t_item.y * 4}" width="${t_item.w * 4}" height="${t_item.h * 4}" fill="#3b2d1d" stroke="#e8b059" stroke-opacity="0.9" stroke-width="2" rx="3" />
              <text x="${(t_item.x + t_item.w/2) * 4}" y="${(t_item.y + t_item.h/2) * 4 + 3}" font-family="Arial" font-size="7.5" font-weight="bold" fill="#e8b059" text-anchor="middle">${t('terrainVantageShort')}</text>`;
    }
  });
  svg += `</g>`;

  // Objectives
  map.objectives.forEach(obj => {
    let color = obj.type === 'p1' ? '#f97316' : (obj.type === 'p2' ? '#3b82f6' : '#ffffff');
    let label = obj.type === 'p1' ? 'P1' : (obj.type === 'p2' ? 'P2' : 'C');
    svg += `<circle cx="${obj.x * 4}" cy="${obj.y * 4}" r="12" fill="${color}" />
            <circle cx="${obj.x * 4}" cy="${obj.y * 4}" r="18" fill="none" stroke="${color}" stroke-width="2" stroke-dasharray="4,4" opacity="0.7"/>
            <text x="${obj.x * 4}" y="${(obj.y * 4) + 4}" font-family="Arial" font-size="12" font-weight="bold" fill="${obj.type === 'centre' ? '#000' : '#fff'}" text-anchor="middle">${label}</text>`;
  });
  
  // Labels
  svg += `<text x="${(map.dropZone1.x + map.dropZone1.w/2) * 4}" y="${(map.dropZone1.y + map.dropZone1.h/2) * 4 + 5}" font-family="Arial" font-size="14" font-weight="bold" fill="#ffffff" fill-opacity="0.8" text-anchor="middle">${t('player1')} Drop Zone</text>`;
  svg += `<text x="${(map.dropZone2.x + map.dropZone2.w/2) * 4}" y="${(map.dropZone2.y + map.dropZone2.h/2) * 4 + 5}" font-family="Arial" font-size="14" font-weight="bold" fill="#ffffff" fill-opacity="0.8" text-anchor="middle">${t('player2')} Drop Zone</text>`;
  
  svg += `</svg>`;
  
  return `<div class="card-header map-header" style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
            <h3 style="margin: 0;">${t('mapTitle')}: ${map.name[lang]}</h3>
            <label class="terrain-toggle-label" style="display: flex; align-items: center; gap: 6px; font-size: 0.85rem; color: #e8b059; cursor: pointer; user-select: none;">
              <input type="checkbox" id="toggle-terrain-cb" ${showTerrain ? 'checked' : ''} onchange="toggleTerrainDisplay(this.checked)" style="cursor: pointer; accent-color: #f97316;">
              <span data-i18n="showTerrainLabel">${t('showTerrainLabel')}</span>
            </label>
          </div>
          <div class="card-body map-container">
            ${svg}
            <div class="terrain-guide-panel" id="terrain-guide-panel-el" style="${displayStyle}">
              <h4 class="terrain-guide-title">${t('terrainGuideTitle')}</h4>
              <div class="terrain-legend">
                <div class="legend-item">
                  <span class="legend-badge heavy-badge">${t('terrainHeavyShort')}</span>
                  <span class="legend-text"><strong>${t('terrainHeavyTitle')}:</strong> ${t('terrainHeavyDesc')}</span>
                </div>
                <div class="legend-item">
                  <span class="legend-badge light-badge">${t('terrainLightShort')}</span>
                  <span class="legend-text"><strong>${t('terrainLightTitle')}:</strong> ${t('terrainLightDesc')}</span>
                </div>
                <div class="legend-item">
                  <span class="legend-badge vantage-badge">${t('terrainVantageShort')}</span>
                  <span class="legend-text"><strong>${t('terrainVantageTitle')}:</strong> ${t('terrainVantageDesc')}</span>
                </div>
              </div>
              <div class="terrain-tip-box">
                <p>💡 <strong>${t('terrainSymLabel')}</strong> ${t('terrainSymDesc')}</p>
              </div>
            </div>
          </div>`;
}

function renderTacOp(tacOp, lang) {
  let cssClass = `tac-op-${tacOp.archetype}`;
  let html = `<div class="card tac-op-card ${cssClass}" data-archetype="${tacOp.archetype}">
                <div class="card-header">
                  <div class="tac-op-archetype">${t(tacOp.archetype)}</div>
                  <h3>${tacOp.name[lang]}</h3>
                </div>
                <div class="card-body">
                  <div class="tac-op-reveal">
                    <strong>${t('reveal')}:</strong> ${tacOp.reveal[lang]}
                  </div>`;
  
  if (tacOp.actions && tacOp.actions.length > 0) {
    tacOp.actions.forEach(action => {
      html += `<div class="mission-action">
                 <div class="action-header">
                   <span class="action-title">${action.name[lang]}</span>
                   <span class="ap-badge">${action.ap} AP</span>
                 </div>
                 <p class="action-effect">${action.effect[lang]}</p>
                 <div class="action-conditions">
                   <strong>${t('conditions')}:</strong> ${action.conditions[lang]}
                 </div>
               </div>`;
    });
  }
  
  if (tacOp.additionalRules) {
    html += `<div class="additional-rules">
               <h4>${t('additionalRules')}</h4>
               <p>${tacOp.additionalRules[lang]}</p>
             </div>`;
  }
  
  html += `<div class="vp-rules">
             <h4>${t('victoryPoints')}</h4>
             <p>${tacOp.vpRules[lang]}</p>
           </div>
         </div>
       </div>`;
       
  return html;
}

// ==========================================
// SECTION 6: GENERATOR LOGIC
// ==========================================

function generateMission() {
  const btn = document.getElementById('generate-btn');
  btn.classList.add('rolling');
  
  setTimeout(() => {
    btn.classList.remove('rolling');
    
    // Pick random Crit Op
    const randomCritOp = critOps[Math.floor(Math.random() * critOps.length)];
    const critOpContainer = document.getElementById('crit-op-card');
    critOpContainer.innerHTML = renderCritOp(randomCritOp, currentLang);
    critOpContainer.classList.remove('card-reveal');
    void critOpContainer.offsetWidth; // trigger reflow
    critOpContainer.classList.add('card-reveal');
    
    // Pick random Map
    const randomMap = maps[Math.floor(Math.random() * maps.length)];
    const mapContainer = document.getElementById('map-card');
    mapContainer.innerHTML = renderMap(randomMap, currentLang);
    mapContainer.classList.remove('card-reveal');
    void mapContainer.offsetWidth;
    mapContainer.classList.add('card-reveal');
    
    // Show output area
    document.getElementById('mission-output').style.display = 'grid';
    
    // Scroll to results
    document.getElementById('mission-output').scrollIntoView({ behavior: 'smooth' });
    
  }, 600);
}

// ==========================================
// SECTION 7: VP TRACKER
// ==========================================

const VP_COLORS = ['#FF5A1E', '#3b82f6', '#22c55e', '#a855f7', '#eab308', '#ef4444'];

let vpState = {
  players: [
    { name: "Player 1", crit: 0, kill: 0, tac: 0, cp: 2, bonus: false },
    { name: "Player 2", crit: 0, kill: 0, tac: 0, cp: 2, bonus: false }
  ],
  match: { tp: 1 }
};

function renderPlayers() {
  const grid = document.getElementById('vp-tracker-grid');
  if (!grid) return;
  
  grid.innerHTML = '';
  vpState.players.forEach((player, index) => {
    const pId = `p${index+1}`;
    const color = VP_COLORS[index % VP_COLORS.length];
    
    const col = document.createElement('div');
    col.className = 'player-column';
    col.style.borderTop = `4px solid ${color}`;
    
    col.innerHTML = `
      <div class="player-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
        <h3 contenteditable="true" spellcheck="false" class="editable-name" data-index="${index}" style="margin: 0; color: ${color}; border-bottom: 1px dashed ${color}66;">${player.name}</h3>
        <label style="font-size: 0.8rem; color: #a1a1aa; display: flex; align-items: center; gap: 5px; cursor: pointer;">
          <input type="radio" name="initiative" value="${pId}" style="accent-color: ${color};"> <span data-i18n="initiativeLbl">Initiative</span>
        </label>
      </div>
      
      <div class="vp-row">
        <label data-i18n="critOpLbl">Crit Op</label>
        <div class="counter">
          <button class="minus" data-target="${index}-crit" style="--btn-color: ${color}">-</button>
          <span>${player.crit}</span>
          <button class="plus" data-target="${index}-crit" style="--btn-color: ${color}">+</button>
        </div>
      </div>

      <div class="vp-row">
        <label data-i18n="killOpLbl">Kill Op</label>
        <div class="counter">
          <button class="minus" data-target="${index}-kill" style="--btn-color: ${color}">-</button>
          <span>${player.kill}</span>
          <button class="plus" data-target="${index}-kill" style="--btn-color: ${color}">+</button>
        </div>
      </div>

      <div class="vp-row">
        <label data-i18n="tacOpLbl">Tac Op</label>
        <div class="counter">
          <button class="minus" data-target="${index}-tac" style="--btn-color: ${color}">-</button>
          <span>${player.tac}</span>
          <button class="plus" data-target="${index}-tac" style="--btn-color: ${color}">+</button>
        </div>
      </div>

      <div class="vp-row cp-row" style="margin-top: 15px; border-top: 1px solid var(--border); padding-top: 10px;">
        <label data-i18n="cpLbl" style="color: #38bdf8;">Command Points</label>
        <div class="counter">
          <button class="minus" data-target="${index}-cp" style="--btn-color: #38bdf8">-</button>
          <span style="color: #38bdf8;">${player.cp}</span>
          <button class="plus" data-target="${index}-cp" style="--btn-color: #38bdf8">+</button>
        </div>
      </div>

      <div class="total-row" style="display: flex; justify-content: space-between; align-items: center;">
        <div class="total-display">
          <span data-i18n="totalVpLbl">Total VP:</span> <strong style="color: ${color}">${player.crit + player.kill + player.tac + (player.bonus ? 2 : 0)}</strong>
        </div>
        <button class="bonus-btn ${player.bonus ? 'active' : ''}" data-target="${index}-bonus" style="--btn-color: ${color}">
          Primary Bonus: +${player.bonus ? '2' : '0'}
        </button>
      </div>
    `;
    grid.appendChild(col);
  });
  
  if (typeof updateContent === 'function') updateContent();

  grid.querySelectorAll('.editable-name').forEach(el => {
    el.addEventListener('blur', (e) => {
      const idx = e.target.dataset.index;
      vpState.players[idx].name = e.target.textContent;
      saveVPState();
    });
  });
}

function handleVpChange(e) {
  const btn = e.target.closest('button.minus, button.plus, button.bonus-btn');
  if (!btn) return;
  
  const targetId = btn.dataset.target;
  if (!targetId) return;
  
  if (targetId === 'turning-point') {
    if (btn.classList.contains('plus')) vpState.match.tp = Math.min(4, vpState.match.tp + 1);
    if (btn.classList.contains('minus')) vpState.match.tp = Math.max(1, vpState.match.tp - 1);
    document.getElementById('turning-point').textContent = vpState.match.tp;
    saveVPState();
    return;
  }

  const parts = targetId.split('-');
  const pIndex = parseInt(parts[0]);
  const type = parts[1];
  
  if (type === 'bonus') {
    vpState.players[pIndex].bonus = !vpState.players[pIndex].bonus;
  } else {
    let max = type === 'cp' ? 20 : (type === 'kill' || type === 'tac' ? 4 : 12);
    let min = 0;
    
    if (btn.classList.contains('plus')) {
      if (vpState.players[pIndex][type] < max) vpState.players[pIndex][type]++;
    } else if (btn.classList.contains('minus')) {
      if (vpState.players[pIndex][type] > min) vpState.players[pIndex][type]--;
    }
  }
  
  saveVPState();
  renderPlayers();
}

function addPlayer() {
  vpState.players.push({ name: `Player ${vpState.players.length + 1}`, crit: 0, kill: 0, tac: 0, cp: 2, bonus: false });
  saveVPState();
  renderPlayers();
}

function removePlayer() {
  if (vpState.players.length > 1) {
    vpState.players.pop();
    saveVPState();
    renderPlayers();
  }
}

function resetVP() {
  vpState.match = { tp: 1 };
  document.getElementById('turning-point').textContent = 1;
  vpState.players.forEach(p => {
    p.crit = 0; p.kill = 0; p.tac = 0; p.cp = 2; p.bonus = false;
  });
  saveVPState();
  renderPlayers();
  const countEl = document.getElementById('enemy-op-count');
  if (countEl) countEl.value = 10;
  if (typeof updateKillGradeTable === 'function') updateKillGradeTable();
}

function saveVPState() {
  localStorage.setItem('kt_vp_state', JSON.stringify(vpState));
}

function loadVPState() {
  const saved = localStorage.getItem('kt_vp_state');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (parsed.players) vpState = parsed;
    } catch (e) {}
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadVPState();
  renderPlayers();
  
  const addBtn = document.getElementById('add-player-btn');
  if (addBtn) addBtn.addEventListener('click', addPlayer);
  
  const remBtn = document.getElementById('remove-player-btn');
  if (remBtn) remBtn.addEventListener('click', removePlayer);
});

// SECTION 8: KILL GRADE TABLE
// ==========================================

function updateKillGradeTable() {
  const count = parseInt(document.getElementById('enemy-op-count').value) || 6;
  
  // Remove active class from all rows
  document.querySelectorAll('#kill-grade-table tbody tr').forEach(tr => {
    tr.classList.remove('active-row');
  });
  
  // Find the row matching the count using data-ops attribute
  const matchingRow = document.querySelector(`#kill-grade-table tbody tr[data-ops="${count}"]`);
  if (matchingRow) {
    matchingRow.classList.add('active-row');
  }
}

// ==========================================
// SECTION 9: LANGUAGE TOGGLE
// ==========================================

function applyTranslations() {
  document.documentElement.lang = currentLang;
  
  // Update static text elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLang][key]) {
      // Check if it's an input/button value or textContent
      if (el.tagName === 'INPUT' && el.type === 'button') {
        el.value = translations[currentLang][key];
      } else {
        el.innerHTML = translations[currentLang][key];
      }
    }
  });
  
  // Re-render dynamic content if visible
  const critOpContainer = document.getElementById('crit-op-card');
  if (critOpContainer && critOpContainer.innerHTML.trim() !== '') {
    const h3 = critOpContainer.querySelector('h3');
    if (h3 && h3.textContent.includes(': ')) {
      const currentTitle = h3.textContent.split(': ')[1];
      let currentOp = critOps.find(op => op.name['en'] === currentTitle || op.name['de'] === currentTitle);
      if (currentOp) {
        critOpContainer.innerHTML = renderCritOp(currentOp, currentLang);
      }
    }
  }
  
  const mapContainer = document.getElementById('map-card');
  if (mapContainer && mapContainer.innerHTML.trim() !== '') {
    const h3 = mapContainer.querySelector('h3');
    if (h3 && h3.textContent.includes(': ')) {
      const currentTitle = h3.textContent.split(': ')[1];
      let currentMap = maps.find(m => m.name['en'] === currentTitle || m.name['de'] === currentTitle);
      if (currentMap) {
        mapContainer.innerHTML = renderMap(currentMap, currentLang);
      }
    }
  }
  
  renderTacOpsList(); // Re-render the full tac ops list
}

function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'de' : 'en';
  localStorage.setItem('killteam_lang', currentLang);
  applyTranslations();
  
  // Update the toggle button text
  const toggleBtn = document.getElementById('lang-toggle');
  if (toggleBtn) {
    toggleBtn.textContent = currentLang === 'en' ? 'EN | DE' : 'DE | EN';
  }
}

function toggleTerrainDisplay(checked) {
  localStorage.setItem('killteam_show_terrain', checked);
  const displayStyle = checked ? '' : 'none';
  const group = document.querySelector('.terrain-svg-group');
  const panel = document.getElementById('terrain-guide-panel-el');
  if (group) group.style.display = displayStyle;
  if (panel) panel.style.display = displayStyle;
}
window.toggleTerrainDisplay = toggleTerrainDisplay;

// ==========================================
// SECTION 10: GAME SEQUENCE CHECKLIST
// ==========================================

function toggleChecklistSection(e) {
  const header = e.currentTarget;
  const content = header.nextElementSibling;
  const icon = header.querySelector('.toggle-icon');
  
  const isExpanded = content.style.display !== 'none';
  content.style.display = isExpanded ? 'none' : 'block';
  if (icon) icon.textContent = isExpanded ? '+' : '−';
}

function saveChecklistState() {
  const checkboxes = document.querySelectorAll('#checklist-section input[type="checkbox"]');
  const state = {};
  checkboxes.forEach((cb, index) => {
    state[index] = cb.checked;
  });
  localStorage.setItem('killteam_checklist', JSON.stringify(state));
}

function loadChecklistState() {
  const saved = localStorage.getItem('killteam_checklist');
  if (saved) {
    const state = JSON.parse(saved);
    const checkboxes = document.querySelectorAll('#checklist-section input[type="checkbox"]');
    checkboxes.forEach((cb, index) => {
      if (state[index] !== undefined) {
        cb.checked = state[index];
      }
    });
  }
}

// ==========================================
// SECTION 11: TAC OPS FILTER
// ==========================================

function renderTacOpsList() {
  const container = document.getElementById('tac-ops-grid');
  if (!container) return;
  
  container.innerHTML = tacOps.map(op => renderTacOp(op, currentLang)).join('');
  applyTacOpsFilter(); // Re-apply current filter
}

function applyTacOpsFilter(archetype = null) {
  // If archetype is null, get it from the currently active button
  if (archetype === null) {
    const activeBtn = document.querySelector('.tac-op-filters button.active');
    archetype = activeBtn ? activeBtn.dataset.filter : 'all';
  } else {
    // Update button states
    document.querySelectorAll('.tac-op-filters button').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.filter === archetype);
    });
  }
  
  document.querySelectorAll('.tac-op-card').forEach(card => {
    if (archetype === 'all' || card.dataset.archetype === archetype) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// ==========================================
// SECTION 12: INITIALIZATION
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. Language Setup
  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) langToggle.addEventListener('click', toggleLanguage);
  applyTranslations();
  
  // 2. VP Tracker Setup
  // Handled by the new DOMContentLoaded in SECTION 7
  
  // 3. Generator Setup
  const genBtn = document.getElementById('generate-btn');
  if (genBtn) genBtn.addEventListener('click', generateMission);

  const resetBtn = document.getElementById('reset-vp');
  if (resetBtn) resetBtn.addEventListener('click', resetVP);

  // 4. Checklist Setup
  document.querySelectorAll('.collapsible-header').forEach(header => {
    header.addEventListener('click', toggleChecklistSection);
  });
  
  document.querySelectorAll('#checklist-section input[type="checkbox"]').forEach(cb => {
    cb.addEventListener('change', saveChecklistState);
  });
  loadChecklistState();
  
  // 5. Tac Ops Setup
  renderTacOpsList();
  document.querySelectorAll('.tac-op-filters button').forEach(btn => {
    btn.addEventListener('click', (e) => applyTacOpsFilter(e.target.dataset.filter));
  });
  
  // 6. Kill Grade Setup
  const enemyCountInput = document.getElementById('enemy-op-count');
  if (enemyCountInput) {
    enemyCountInput.addEventListener('input', updateKillGradeTable);
    updateKillGradeTable();
  }
  
  // 7. Interactive LoS Tool
  initLosTool();
});

// ==========================================
// SECTION 13: INTERACTIVE LOS TOOL
// ==========================================

function initLosTool() {
  const sandbox = document.getElementById('los-sandbox');
  if (!sandbox) return;

  const shooter = document.getElementById('los-shooter');
  const target = document.getElementById('los-target');
  const resultText = document.getElementById('los-result');
  const reasonText = document.getElementById('los-reason');
  const targetToken = document.getElementById('los-target-token');

  let targetOrder = 'engage'; // 'engage' or 'conceal'

  // Controls
  document.getElementById('btn-los-engage').addEventListener('click', (e) => {
    targetOrder = 'engage';
    e.target.classList.add('active');
    document.getElementById('btn-los-conceal').classList.remove('active');
    targetToken.textContent = 'E';
    targetToken.style.background = '#f97316';
    updateLos();
  });
  document.getElementById('btn-los-conceal').addEventListener('click', (e) => {
    targetOrder = 'conceal';
    e.target.classList.add('active');
    document.getElementById('btn-los-engage').classList.remove('active');
    targetToken.textContent = 'C';
    targetToken.style.background = '#52525b';
    updateLos();
  });
  
  const btnAddTerrain = document.getElementById('btn-los-add-terrain');
  if (btnAddTerrain) {
    btnAddTerrain.addEventListener('click', () => {
      const newTerrain = document.createElement('div');
      newTerrain.className = 'draggable los-terrain';
      newTerrain.dataset.type = 'light';
      newTerrain.style.position = 'absolute';
      // spawn in center
      newTerrain.style.left = '140px';
      newTerrain.style.top = '75px';
      newTerrain.style.width = '20px';
      newTerrain.style.height = '100px';
      newTerrain.style.background = '#38bdf8';
      newTerrain.style.border = '1px dashed #fff';
      newTerrain.style.borderRadius = '2px';
      newTerrain.style.cursor = 'move';
      newTerrain.style.display = 'flex';
      newTerrain.style.alignItems = 'center';
      newTerrain.style.justifyContent = 'center';
      
      const lbl = document.createElement('span');
      lbl.className = 'los-terrain-lbl';
      lbl.style.transform = 'rotate(-90deg)';
      lbl.style.color = '#fff';
      lbl.style.fontSize = '10px';
      lbl.style.fontWeight = 'bold';
      lbl.style.pointerEvents = 'none';
      lbl.textContent = 'LIGHT';
      newTerrain.appendChild(lbl);
      
      // Spawn terrain delete button
      const delBtn = document.createElement('div');
      delBtn.className = 'los-terrain-delete';
      delBtn.innerHTML = '✕';
      delBtn.style.position = 'absolute';
      delBtn.style.top = '-8px';
      delBtn.style.right = '-8px';
      delBtn.style.width = '16px';
      delBtn.style.height = '16px';
      delBtn.style.background = '#ef4444';
      delBtn.style.borderRadius = '50%';
      delBtn.style.color = '#fff';
      delBtn.style.fontSize = '10px';
      delBtn.style.display = 'flex';
      delBtn.style.alignItems = 'center';
      delBtn.style.justifyContent = 'center';
      delBtn.style.cursor = 'pointer';
      delBtn.style.fontWeight = 'bold';
      delBtn.style.zIndex = '20';
      newTerrain.appendChild(delBtn);
      
      sandbox.appendChild(newTerrain);
      updateLos();
    });
  }

  // Terrain Toggle Click (Delegated)
  let isDragging = false;
  sandbox.addEventListener('click', (e) => {
    if (isDragging) return;
    
    // Check for delete click
    const delBtn = e.target.closest('.los-terrain-delete');
    if (delBtn) {
      const t = delBtn.closest('.los-terrain');
      if (t) t.remove();
      updateLos();
      return;
    }

    const t = e.target.closest('.los-terrain');
    if (t) {
      if (t.dataset.type === 'light') {
        t.dataset.type = 'heavy';
        t.style.background = '#f97316';
        const lbl = t.querySelector('.los-terrain-lbl');
        if (lbl) lbl.textContent = 'HEAVY';
      } else {
        t.dataset.type = 'light';
        t.style.background = '#38bdf8';
        const lbl = t.querySelector('.los-terrain-lbl');
        if (lbl) lbl.textContent = 'LIGHT';
      }
      updateLos();
    }
  });

  // Dragging logic
  let activeEl = null;
  let offsetX = 0;
  let offsetY = 0;
  let hasMoved = false;

  const dragStart = (e) => {
    const draggable = e.target.closest('.draggable');
    if (draggable) {
      activeEl = draggable;
      const rect = activeEl.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      offsetX = clientX - rect.left;
      offsetY = clientY - rect.top;
      hasMoved = false;
      isDragging = false;
    }
  };

  const dragMove = (e) => {
    if (!activeEl) return;
    hasMoved = true;
    isDragging = true;
    e.preventDefault(); // stop scrolling on mobile
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    
    const sandboxRect = sandbox.getBoundingClientRect();
    let x = clientX - sandboxRect.left - offsetX;
    let y = clientY - sandboxRect.top - offsetY;

    // Bounds check
    x = Math.max(0, Math.min(x, sandboxRect.width - activeEl.offsetWidth));
    y = Math.max(0, Math.min(y, sandboxRect.height - activeEl.offsetHeight));

    activeEl.style.left = x + 'px';
    activeEl.style.top = y + 'px';
    updateLos();
  };

  const dragEnd = () => {
    activeEl = null;
    // reset isDragging after a short delay so the click event doesn't fire immediately
    setTimeout(() => { isDragging = false; }, 50);
  };

  sandbox.addEventListener('mousedown', dragStart);
  sandbox.addEventListener('mousemove', dragMove);
  window.addEventListener('mouseup', dragEnd);
  
  sandbox.addEventListener('touchstart', dragStart, {passive: false});
  sandbox.addEventListener('touchmove', dragMove, {passive: false});
  window.addEventListener('touchend', dragEnd);

  function getCenter(el) {
    const left = parseFloat(el.style.left);
    const top = parseFloat(el.style.top);
    return {
      x: left + el.offsetWidth / 2,
      y: top + el.offsetHeight / 2
    };
  }

  // Line-Rectangle Intersection Math
  function getIntersection(p1, p2, rect) {
    const lines = [
      { p1: { x: rect.x, y: rect.y }, p2: { x: rect.x + rect.w, y: rect.y } },
      { p1: { x: rect.x, y: rect.y + rect.h }, p2: { x: rect.x + rect.w, y: rect.y + rect.h } },
      { p1: { x: rect.x, y: rect.y }, p2: { x: rect.x, y: rect.y + rect.h } },
      { p1: { x: rect.x + rect.w, y: rect.y }, p2: { x: rect.x + rect.w, y: rect.y + rect.h } }
    ];

    let intersections = [];
    for (let l of lines) {
      const ix = lineLineIntersection(p1, p2, l.p1, l.p2);
      if (ix) intersections.push(ix);
    }
    return intersections;
  }

  function lineLineIntersection(p1, p2, p3, p4) {
    const denom = (p4.y - p3.y)*(p2.x - p1.x) - (p4.x - p3.x)*(p2.y - p1.y);
    if (denom == 0) return null;
    const ua = ((p4.x - p3.x)*(p1.y - p3.y) - (p4.y - p3.y)*(p1.x - p3.x)) / denom;
    const ub = ((p2.x - p1.x)*(p1.y - p3.y) - (p2.y - p1.y)*(p1.x - p3.x)) / denom;
    if (ua >= 0 && ua <= 1 && ub >= 0 && ub <= 1) {
      return { x: p1.x + ua * (p2.x - p1.x), y: p1.y + ua * (p2.y - p1.y) };
    }
    return null;
  }

  function getDistance(p1, p2) {
    return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
  }

  function updateLos() {
    const coverLine = document.getElementById('los-cover-line');
    const targetRing = document.getElementById('los-target-ring');
    const obscuringRing = document.getElementById('los-obscuring-ring');
    const shooterRing = document.getElementById('los-shooter-ring');
    const shooter = document.getElementById('los-shooter');
    const target = document.getElementById('los-target');

    if (!shooter || !target || !coverLine) return;

    const sC = getCenter(shooter);
    const tC = getCenter(target);
    
    // Update SVG elements
    coverLine.setAttribute('x1', sC.x);
    coverLine.setAttribute('y1', sC.y);
    coverLine.setAttribute('x2', tC.x);
    coverLine.setAttribute('y2', tC.y);

    targetRing.setAttribute('cx', tC.x);
    targetRing.setAttribute('cy', tC.y);
    obscuringRing.setAttribute('cx', tC.x);
    obscuringRing.setAttribute('cy', tC.y);
    if (shooterRing) {
      shooterRing.setAttribute('cx', sC.x);
      shooterRing.setAttribute('cy', sC.y);
    }

    const allTerrains = document.querySelectorAll('.los-terrain');
    
    let isObscured = false;
    let hasCover = false;
    let hasHeavyInSandbox = false;
    let crossedTerrain = false;

    // 1" = roughly 40px, 2" = roughly 80px
    const coverDistance = 40;
    const obscureDistance = 80;

    for (let t of allTerrains) {
      if (t.dataset.type === 'heavy') hasHeavyInSandbox = true;

      const terrainRect = {
        x: parseFloat(t.style.left),
        y: parseFloat(t.style.top),
        w: t.offsetWidth,
        h: t.offsetHeight
      };
      
      const intersections = getIntersection(sC, tC, terrainRect);
      if (intersections.length === 0) continue; // Cover line doesn't cross this terrain
      
      crossedTerrain = true;

      let minTargetDist = Infinity;
      let minShooterDist = Infinity;
      for (let ix of intersections) {
        const dTarget = getDistance(tC, ix);
        if (dTarget < minTargetDist) minTargetDist = dTarget;
        
        const dShooter = getDistance(sC, ix);
        if (dShooter < minShooterDist) minShooterDist = dShooter;
      }

      // If the shooter is within 1" (coverDistance) of this terrain piece, they ignore it!
      if (minShooterDist <= coverDistance) {
        continue;
      }

      // Check Obscuring (Heavy Terrain ONLY, > 2")
      if (t.dataset.type === 'heavy' && minTargetDist > obscureDistance) {
        isObscured = true;
      }

      // Check Cover (Any terrain, <= 1")
      if (minTargetDist <= coverDistance) {
        hasCover = true;
      }
    }

    obscuringRing.style.display = hasHeavyInSandbox ? 'block' : 'none';

    // Output Result
    if (isObscured) {
      resultText.innerHTML = "❌ <span data-i18n='losResObscured'>CANNOT SHOOT (OBSCURED)</span>";
      resultText.style.color = "#ef4444";
      resultText.style.background = "rgba(239, 68, 68, 0.1)";
      resultText.style.borderColor = "#ef4444";
      reasonText.setAttribute('data-i18n', 'losReasonObscured');
      coverLine.setAttribute('stroke', '#ef4444');
      applyTranslations();
      return;
    }

    if (hasCover) {
      if (targetOrder === 'conceal') {
        resultText.innerHTML = "❌ <span data-i18n='losResConcealed'>CANNOT SHOOT (CONCEALED)</span>";
        resultText.style.color = "#ef4444";
        resultText.style.background = "rgba(239, 68, 68, 0.1)";
        resultText.style.borderColor = "#ef4444";
        reasonText.setAttribute('data-i18n', 'losReasonConcealed');
        coverLine.setAttribute('stroke', '#ef4444');
      } else {
        resultText.innerHTML = "✅ <span data-i18n='losResCover'>VALID TARGET (IN COVER)</span>";
        resultText.style.color = "#f97316";
        resultText.style.background = "rgba(249, 115, 22, 0.1)";
        resultText.style.borderColor = "#f97316";
        reasonText.setAttribute('data-i18n', 'losReasonCoverEngage');
        coverLine.setAttribute('stroke', '#f97316');
      }
      applyTranslations();
      return;
    }

    // In the open
    resultText.innerHTML = "✅ <span data-i18n='losResValid'>VALID TARGET</span>";
    resultText.style.color = "#4ade80";
    resultText.style.background = "rgba(74, 222, 128, 0.1)";
    resultText.style.borderColor = "#4ade80";
    
    if (crossedTerrain) {
      reasonText.setAttribute('data-i18n', 'losReasonOpenIneffective');
    } else {
      reasonText.setAttribute('data-i18n', 'losReasonOpen');
    }
    
    coverLine.setAttribute('stroke', '#4ade80');
    applyTranslations();
  }

  // Initial update
  setTimeout(updateLos, 100);
}
