const translations = {
    en: {
        builderDesc: "Select 1 Tempestus Prime and 9 other operatives.",
        selectedText: "Selected:",
        startMatchBtn: "START MATCH <i class=\"fa-solid fa-arrow-right\"></i>",
        stratTerminal: "<strong>Gravity Chutes:</strong> Ready your operatives for aerial insertion.",
        rulesFirefight: "Firefight Ploys",
        rulesStrategy: "Strategy Ploys",
        rulesFaction: "Faction Rules",
        resetTokens: "Reset Drop Operations",

        title: "Tempestus Aquilons Hub",
        dropOperations: "Drop Operations",
        dropMarkers: "Drop Markers Remaining",
        operativesSetAbove: "Operatives Set Above",
        ploys: "Ploys",
        strategyPloys: "Strategy Ploys",
        firefightPloys: "Firefight Ploys",
        roster: "Match Roster",
        ploys_data: {
            strategy: [
                { name: "Sudden Offensive", cost: "1CP", desc: "Count the number of friendly TEMPESTUS AQUILON operatives that aren’t incapacitated, then halve the result (rounding up) to give you x. Until the end of their activation, friendly TEMPESTUS AQUILON operatives’ weapons have the Balanced weapon rule if they are the first friendly operatives activated this turning point equal to x." },
                { name: "Maintain Momentum", cost: "1CP", desc: "Whenever a friendly TEMPESTUS AQUILON operative is shooting against or fighting against a ready enemy operative, that friendly operative’s weapons have the Severe weapon rule." },
                { name: "Eye Above", cost: "1CP", desc: "Select one enemy operative. That operative and each other enemy operative within 3\" of it gains one of your Detected tokens until the end of the turning point. Whenever an enemy operative that has one of your Detected tokens: Is shooting a friendly TEMPESTUS AQUILON operative, you can re-roll one of your defence dice. Is fighting or retaliating against a friendly TEMPESTUS AQUILON operative, one of your blocks can be allocated to block two unresolved successes (instead of one)." },
                { name: "Drop and Secure", cost: "1CP", desc: "Select one marker. Until the Ready step of the next Strategy phase, when determining control of that marker, treat the total APL stat of friendly TEMPESTUS AQUILON operatives that contest it as 1 higher if at least one friendly TEMPESTUS AQUILON operative contests that marker. Whenever a friendly TEMPESTUS AQUILON operative is within 3\" of that marker, add 1 to the Atk stat of its melee weapons (to a maximum of 4)." }
            ],
            firefight: [
                { name: "Hot Drop", cost: "1CP", desc: "Use this firefight ploy after rolling your attack dice for a friendly TEMPESTUS AQUILON operative that’s wholly within your opponent’s territory, or either landed or dropped from Vantage terrain at least 2\" higher than the killzone floor during this activation. If the target is within 6\" of it, you can re-roll any of your attack dice." },
                { name: "Adjust Coordinates", cost: "1CP", desc: "Use this firefight ploy when a friendly TEMPESTUS AQUILON operative lands. You can set it up within 5\" horizontally of one of your Drop markers, taking precedence over the normal distance requirement. It cannot perform the Dash, Shoot or Fight actions during this turning point." },
                { name: "Tempestus Exemplars", cost: "1CP", desc: "Use this firefight ploy during a friendly TEMPESTUS AQUILON operative’s activation (excluding SERVO-SENTRY and any operative that has an APL stat higher than 2). During that activation, that operative can perform the Pick Up Marker, Place Marker or a mission action for 1 less AP." },
                { name: "Progena", cost: "1CP", desc: "Use this firefight ploy when a friendly TEMPESTUS AQUILON operative (excluding SERVO-SENTRY) is activated. It regains up to 2D3 lost wounds, and during that activation you can ignore any changes to its APL stat." }
            ]
        }
    },
    de: {
        builderDesc: "Wähle 1 Tempestus Prime und 9 andere Kämpfer.",
        selectedText: "Ausgewählt:",
        startMatchBtn: "SPIEL STARTEN <i class=\"fa-solid fa-arrow-right\"></i>",
        stratTerminal: "<strong>Grav-Schirme:</strong> Mache deine Kämpfer bereit für die Luftlandung.",
        rulesFirefight: "Feuergefecht-Listen",
        rulesStrategy: "Strategische Listen",
        rulesFaction: "Fraktionsregeln",
        resetTokens: "Kampflandung Zurücksetzen",

        title: "Tempestus Aquilons Hub",
        dropOperations: "Kampflandung",
        dropMarkers: "Verbleibende Landungsmarker",
        operativesSetAbove: "Kämpfer am Himmel",
        ploys: "Listen",
        strategyPloys: "Strategielisten",
        firefightPloys: "Gefechtslisten",
        roster: "Teamaufstellung",
        ploys_data: {
            strategy: [
                { name: "Blitzoffensive", cost: "1 BP", desc: "Zähle die befreundeten TEMPESTUS-AQUILON-Kämpfer, die nicht kampfunfähig sind, dann halbiere das Ergebnis (runde auf), um eine Zahl x zu erhalten. Die Waffen der ersten befreundeten x TEMPESTUS-AQUILON-Kämpfer die in diesem Wendepunkt aktiviert werden, haben bis zum Ende ihrer Aktivierung die Waffenregel Ausgewogen." },
                { name: "Druck aufrechterhalten", cost: "1 BP", desc: "Jedes Mal, wenn ein befreundeter TEMPESTUS-AQUILON-Kämpfer auf einen bereiten feindlichen Kämpfer schießt oder gegen ihn kämpft, haben die Waffen jenes befreundeten Kämpfers die Waffenregel Heftig." },
                { name: "Ein Auge am Himmel", cost: "1 BP", desc: "Wähle einen feindlichen Kämpfer. Jener Kämpfer und alle anderen feindlichen Kämpfer innerhalb von 3 Zoll um ihn erhalten bis zum Ende des Wendepunkts einen deiner Entdeckt-Marker. Wenn ein feindlicher Kämpfer mit einem Entdeckt-Marker auf einen befreundeten TEMPESTUS-AQUILON-Kämpfer schießt, kannst du einen deiner Verteidigungswürfel wiederholen; oder gegen einen kämpft, kann einer deiner Attackenwürfel zwei (anstatt einen) blocken." },
                { name: "Landen und Sichern", cost: "1 BP", desc: "Wähle einen Marker. Bis zum Schritt „Bereit“ des nächsten Wendepunkts gilt: Wenn die Kontrolle über jenen Marker ermittelt wird, behandle den gesamten APG-Wert befreundeter TEMPESTUS-AQUILON-Kämpfer, die ihn beanspruchen, als 1 höher, solange mindestens ein befreundeter TEMPESTUS-AQUILON-Kämpfer jenen Marker tatsächlich beansprucht. Addiere 1 zum Attackenwert seiner Nahkampfwaffen innerhalb 3 Zoll." }
            ],
            firefight: [
                { name: "Sprung in den Kampf", cost: "1 BP", desc: "Setze diese Gefechtslist ein, nachdem du die Attackenwürfel für einen befreundeten TEMPESTUS-AQUILON-Kämpfer geworfen hast, der sich vollständig innerhalb des Territoriums deines Gegners befindet oder der in dieser Aktivierung entweder gelandet ist oder sich aus einer Höhe von mindestens 2 Zoll über dem Killzone-Boden von Aussichtspunkt-Gelände hat fallen lassen. Wenn sich das Ziel innerhalb von 6 Zoll um ihn befindet, kannst du beliebige jener Attackenwürfel wiederholen." },
                { name: "Koordinaten anpassen", cost: "1 BP", desc: "Setze diese Gefechtslist ein, wenn ein befreundeter TEMPESTUS-AQUILON-Kämpfer landet. Du kannst ihn horizontal innerhalb von 5 Zoll um einen deiner Landungsmarker aufstellen, was Vorrang vor der normalen erforderlichen Distanz hat. Er kann in diesem Wendepunkt keine Aktionen Sprinten, Kämpfen oder Schießen ausführen." },
                { name: "Beste des Tempestus", cost: "1 BP", desc: "Setze diese Gefechtslist während der Aktivierung eines befreundeten TEMPESTUS-AQUILON-Kämpfers ein (ausgenommen WACHTSERVITOREN und Kämpfer mit einem APG-Wert höher als 2). Während jener Aktivierung kann er eine Aktion Marker aufsammeln, Marker platzieren oder eine missionsspezifische Aktion für 1 AP weniger ausführen." },
                { name: "Progena", cost: "1 BP", desc: "Setze diese Gefechtslist ein, wenn ein befreundeter TEMPESTUS-AQUILON-Kämpfer (ausgenommen WACHTSERVITOREN) aktiviert wird. Er erhält 2W3 verlorene Lebenspunkte zurück und während jener Aktivierung kannst du beliebige Änderungen seines APG-Werts ignorieren." }
            ]
        }
    }
};

const WEAPONS_DB = {
    en: {
        "Hot-shot laspistols (focused)": { a: "4", h: "3+", d: "3/4", wr: "Range 8\", Ceaseless, Rending" },
        "Hot-shot laspistols (salvo)": { a: "4", h: "4+", d: "3/4", wr: "Range 8\", Salvo" },
        "Hot-shot laspistols (point-blank)": { a: "4", h: "3+", d: "3/4", wr: "Ceaseless" },
        "Hot-shot lascarbine": { a: "4", h: "3+", d: "3/4", wr: "-" },
        "Hot-shot laspistol": { a: "4", h: "3+", d: "3/4", wr: "Range 8\"" },
        "Relic bolt pistol": { a: "4", h: "3+", d: "3/5", wr: "Range 8\", Lethal 5+" },
        "Chainsword": { a: "4", h: "3+", d: "4/5", wr: "-" },
        "Fists": { a: "3", h: "4+", d: "2/3", wr: "-" },
        "Power weapon": { a: "4", h: "3+", d: "4/6", wr: "Lethal 5+" },
        "Melta bomb": { a: "4", h: "3+", d: "5/3", wr: "Range 3\", Devastating 3, Heavy, Limited 1, Piercing 2" },
        "Hot-shot long-las (concealed)": { a: "4", h: "2+", d: "3/3", wr: "Devastating 3, Heavy, Silent, Concealed Position" },
        "Hot-shot long-las (mobile)": { a: "4", h: "3+", d: "3/4", wr: "-" },
        "Hot-shot long-las (stationary)": { a: "4", h: "2+", d: "3/3", wr: "Devastating 3, Heavy" },
        "Flamer": { a: "4", h: "2+", d: "3/3", wr: "Range 8\", Saturate, Torrent 2\"" },
        "Grenade launcher (frag)": { a: "4", h: "4+", d: "2/4", wr: "Blast 2\"" },
        "Grenade launcher (krak)": { a: "4", h: "4+", d: "4/5", wr: "Piercing 1" },
        "Hot-shot volley gun (focused)": { a: "5", h: "4+", d: "3/4", wr: "Piercing Crits 1" },
        "Hot-shot volley gun (sweeping)": { a: "4", h: "4+", d: "3/4", wr: "Piercing Crits 1, Torrent 1\"" },
        "Melta carbine": { a: "4", h: "3+", d: "6/3", wr: "Range 6\", Devastating 4, Piercing 2" },
        "Plasma carbine (standard)": { a: "4", h: "3+", d: "4/6", wr: "Piercing 1" },
        "Plasma carbine (supercharge)": { a: "4", h: "3+", d: "5/6", wr: "Hot, Lethal 5+, Piercing 1" },
        "Tempestus dagger": { a: "3", h: "4+", d: "3/4", wr: "-" }
    },
    de: {
        "Hochenergie-Laserpistolen (gezielt)": { a: "4", h: "3+", d: "3/4", wr: "Reichweite 8 Zoll, Unablässig, Rüstungsbrechend" },
        "Hochenergie-Laserpistolen (Salve)": { a: "4", h: "4+", d: "3/4", wr: "Reichweite 8 Zoll, Salve" },
        "Hochenergie-Laserpistolen (aus nächster Nähe)": { a: "4", h: "3+", d: "3/4", wr: "Unablässig" },
        "Hochenergie-Laserkarabiner": { a: "4", h: "3+", d: "3/4", wr: "-" },
        "Hochenergie-Laserpistole": { a: "4", h: "3+", d: "3/4", wr: "Reichweite 8 Zoll" },
        "Reliktboltpistole": { a: "4", h: "3+", d: "3/5", wr: "Reichweite 8 Zoll, Tödlich 5+" },
        "Kettenschwert": { a: "4", h: "3+", d: "4/5", wr: "-" },
        "Fäuste": { a: "3", h: "4+", d: "2/3", wr: "-" },
        "Energiewaffe": { a: "4", h: "3+", d: "4/6", wr: "Tödlich 5+" },
        "Melterbombe": { a: "4", h: "3+", d: "5/3", wr: "Reichweite 3 Zoll, Verheerend 3, Schwer, Eingeschränkt 1, Durchdringend 2" },
        "Hochenergie-Scharfschützen-Lasergewehr (auf der Lauer)": { a: "4", h: "2+", d: "3/3", wr: "Verheerend 3, Schwer, Schalldämpfer, Verborgen auf der Lauer" },
        "Hochenergie-Scharfschützen-Lasergewehr (in Bewegung)": { a: "4", h: "3+", d: "3/4", wr: "-" },
        "Hochenergie-Scharfschützen-Lasergewehr (stationär)": { a: "4", h: "2+", d: "3/3", wr: "Verheerend 3, Schwer" },
        "Flammenwerfer": { a: "4", h: "2+", d: "3/3", wr: "Reichweite 8 Zoll, Hagel, Schwall 2 Zoll" },
        "Granatwerfer (Fragment)": { a: "4", h: "4+", d: "2/4", wr: "Explosiv 2 Zoll" },
        "Granatwerfer (Spreng)": { a: "4", h: "4+", d: "4/5", wr: "Durchdringend 1" },
        "Hochenergie-Salvengewehr (gezielt)": { a: "5", h: "4+", d: "3/4", wr: "Krit. durchdringend 1" },
        "Hochenergie-Salvengewehr (wahllos)": { a: "4", h: "4+", d: "3/4", wr: "Krit. durchdringend 1, Schwall 1 Zoll" },
        "Melterkarabiner": { a: "4", h: "3+", d: "6/3", wr: "Reichweite 6 Zoll, Durchdringend 2, Verheerend 4" },
        "Plasmakarabiner (Standard)": { a: "4", h: "3+", d: "4/6", wr: "Durchdringend 1" },
        "Plasmakarabiner (Überladung)": { a: "4", h: "3+", d: "5/6", wr: "Heiß, Durchdringend 1, Tödlich 5+" },
        "Tempestus-Dolch": { a: "3", h: "4+", d: "3/4", wr: "-" }
    }
};

const OPERATIVES_DB = {
    en: [
        { id: "tempestor", isLeader: true, name: "Aquilon Tempestor", w: 9, apl: 3, sv: "4+", fixedWeapons: ["Fists"], weaponSelect1: ["Hot-shot laspistol", "Relic bolt pistol", "Hot-shot lascarbine"], weaponSelect2: ["Power weapon", "Chainsword"] },
        { id: "gunfighter", name: "Aquilon Gunfighter", w: 8, apl: 2, sv: "4+", fixedWeapons: ["Hot-shot laspistols (focused)", "Hot-shot laspistols (salvo)", "Hot-shot laspistols (point-blank)", "Fists"] },
        { id: "grenadier", name: "Aquilon Grenadier", w: 8, apl: 2, sv: "4+", fixedWeapons: ["Hot-shot laspistol", "Melta bomb", "Fists"] },
        { id: "marksman", name: "Aquilon Marksman", w: 8, apl: 2, sv: "4+", fixedWeapons: ["Hot-shot long-las (concealed)", "Hot-shot long-las (mobile)", "Hot-shot long-las (stationary)", "Fists"] },
        { id: "servosentry", name: "Aquilon Servo-sentry", w: 10, apl: 2, sv: "3+", weaponSelect1: ["Flamer", "Grenade launcher (frag)", "Grenade launcher (krak)", "Hot-shot volley gun (focused)", "Hot-shot volley gun (sweeping)"] },
        { id: "gunner_1", maxCount: 3, name: "Aquilon Gunner", w: 8, apl: 2, sv: "4+", fixedWeapons: ["Fists"], weaponSelect1: ["Melta carbine", "Plasma carbine (standard)", "Plasma carbine (supercharge)"] },
{ id: "gunner_2", maxCount: 3, name: "Aquilon Gunner", w: 8, apl: 2, sv: "4+", fixedWeapons: ["Fists"], weaponSelect1: ["Melta carbine", "Plasma carbine (standard)", "Plasma carbine (supercharge)"] },
{ id: "gunner_3", maxCount: 3, name: "Aquilon Gunner", w: 8, apl: 2, sv: "4+", fixedWeapons: ["Fists"], weaponSelect1: ["Melta carbine", "Plasma carbine (standard)", "Plasma carbine (supercharge)"] },
        { id: "precursor", name: "Aquilon Precursor", w: 8, apl: 2, sv: "4+", fixedWeapons: ["Hot-shot laspistol", "Tempestus dagger"] },
        { id: "trooper_1", maxCount: 9, name: "Aquilon Trooper", w: 8, apl: 2, sv: "4+", fixedWeapons: ["Hot-shot lascarbine", "Fists"] },
{ id: "trooper_2", maxCount: 9, name: "Aquilon Trooper", w: 8, apl: 2, sv: "4+", fixedWeapons: ["Hot-shot lascarbine", "Fists"] },
{ id: "trooper_3", maxCount: 9, name: "Aquilon Trooper", w: 8, apl: 2, sv: "4+", fixedWeapons: ["Hot-shot lascarbine", "Fists"] },
{ id: "trooper_4", maxCount: 9, name: "Aquilon Trooper", w: 8, apl: 2, sv: "4+", fixedWeapons: ["Hot-shot lascarbine", "Fists"] },
{ id: "trooper_5", maxCount: 9, name: "Aquilon Trooper", w: 8, apl: 2, sv: "4+", fixedWeapons: ["Hot-shot lascarbine", "Fists"] },
{ id: "trooper_6", maxCount: 9, name: "Aquilon Trooper", w: 8, apl: 2, sv: "4+", fixedWeapons: ["Hot-shot lascarbine", "Fists"] },
{ id: "trooper_7", maxCount: 9, name: "Aquilon Trooper", w: 8, apl: 2, sv: "4+", fixedWeapons: ["Hot-shot lascarbine", "Fists"] },
{ id: "trooper_8", maxCount: 9, name: "Aquilon Trooper", w: 8, apl: 2, sv: "4+", fixedWeapons: ["Hot-shot lascarbine", "Fists"] },
{ id: "trooper_9", maxCount: 9, name: "Aquilon Trooper", w: 8, apl: 2, sv: "4+", fixedWeapons: ["Hot-shot lascarbine", "Fists"] }
    ],
    de: [
        { id: "tempestor", isLeader: true, name: "Aquilon-Tempestor", w: 9, apl: 3, sv: "4+", fixedWeapons: ["Fäuste"], weaponSelect1: ["Hochenergie-Laserpistole", "Reliktboltpistole", "Hochenergie-Laserkarabiner"], weaponSelect2: ["Energiewaffe", "Kettenschwert"] },
        { id: "gunfighter", name: "Aquilon-Revolverheld", w: 8, apl: 2, sv: "4+", fixedWeapons: ["Hochenergie-Laserpistolen (gezielt)", "Hochenergie-Laserpistolen (Salve)", "Hochenergie-Laserpistolen (aus nächster Nähe)", "Fäuste"] },
        { id: "grenadier", name: "Aquilon-Grenadier", w: 8, apl: 2, sv: "4+", fixedWeapons: ["Hochenergie-Laserpistole", "Melterbombe", "Fäuste"] },
        { id: "marksman", name: "Aquilon-Scharfschütze", w: 8, apl: 2, sv: "4+", fixedWeapons: ["Hochenergie-Scharfschützen-Lasergewehr (auf der Lauer)", "Hochenergie-Scharfschützen-Lasergewehr (in Bewegung)", "Hochenergie-Scharfschützen-Lasergewehr (stationär)", "Fäuste"] },
        { id: "servosentry", name: "Aquilon-Wachtservitor", w: 10, apl: 2, sv: "3+", weaponSelect1: ["Flammenwerfer", "Granatwerfer (Fragment)", "Granatwerfer (Spreng)", "Hochenergie-Salvengewehr (gezielt)", "Hochenergie-Salvengewehr (wahllos)"] },
        { id: "gunner_1", maxCount: 3, name: "Aquilon-Schütze", w: 8, apl: 2, sv: "4+", fixedWeapons: ["Fäuste"], weaponSelect1: ["Melterkarabiner", "Plasmakarabiner (Standard)", "Plasmakarabiner (Überladung)"] },
{ id: "gunner_2", maxCount: 3, name: "Aquilon-Schütze", w: 8, apl: 2, sv: "4+", fixedWeapons: ["Fäuste"], weaponSelect1: ["Melterkarabiner", "Plasmakarabiner (Standard)", "Plasmakarabiner (Überladung)"] },
{ id: "gunner_3", maxCount: 3, name: "Aquilon-Schütze", w: 8, apl: 2, sv: "4+", fixedWeapons: ["Fäuste"], weaponSelect1: ["Melterkarabiner", "Plasmakarabiner (Standard)", "Plasmakarabiner (Überladung)"] },
        { id: "precursor", name: "Aquilon-Wegbereiter", w: 8, apl: 2, sv: "4+", fixedWeapons: ["Hochenergie-Laserpistole", "Tempestus-Dolch"] },
        { id: "trooper_1", maxCount: 9, name: "Aquilon-Soldat", w: 8, apl: 2, sv: "4+", fixedWeapons: ["Hochenergie-Laserkarabiner", "Fäuste"] },
{ id: "trooper_2", maxCount: 9, name: "Aquilon-Soldat", w: 8, apl: 2, sv: "4+", fixedWeapons: ["Hochenergie-Laserkarabiner", "Fäuste"] },
{ id: "trooper_3", maxCount: 9, name: "Aquilon-Soldat", w: 8, apl: 2, sv: "4+", fixedWeapons: ["Hochenergie-Laserkarabiner", "Fäuste"] },
{ id: "trooper_4", maxCount: 9, name: "Aquilon-Soldat", w: 8, apl: 2, sv: "4+", fixedWeapons: ["Hochenergie-Laserkarabiner", "Fäuste"] },
{ id: "trooper_5", maxCount: 9, name: "Aquilon-Soldat", w: 8, apl: 2, sv: "4+", fixedWeapons: ["Hochenergie-Laserkarabiner", "Fäuste"] },
{ id: "trooper_6", maxCount: 9, name: "Aquilon-Soldat", w: 8, apl: 2, sv: "4+", fixedWeapons: ["Hochenergie-Laserkarabiner", "Fäuste"] },
{ id: "trooper_7", maxCount: 9, name: "Aquilon-Soldat", w: 8, apl: 2, sv: "4+", fixedWeapons: ["Hochenergie-Laserkarabiner", "Fäuste"] },
{ id: "trooper_8", maxCount: 9, name: "Aquilon-Soldat", w: 8, apl: 2, sv: "4+", fixedWeapons: ["Hochenergie-Laserkarabiner", "Fäuste"] },
{ id: "trooper_9", maxCount: 9, name: "Aquilon-Soldat", w: 8, apl: 2, sv: "4+", fixedWeapons: ["Hochenergie-Laserkarabiner", "Fäuste"] }
    ]
};