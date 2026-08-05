const HUB_I18N = {
    en: {
        title: "Warhammer 40,000: Kill Team Hub",
        subtitle: "A bilingual portal for tabletop utilities, trackers, and datapad apps.",
        launchApp: "Launch App",
        deathguardTitle: "Plague Marines (Death Guard)",
        deathguardDesc: "Build your Plague Marines kill team, track Contagions, and manage Nurgle's gifts.",
        aodTitle: "Angels of Death",
        aodDesc: "For the Emperor! Track your Space Marines, Oath of Moment, and manage your tactical strikes.",
        teamDeathwatch: "DEATHWATCH",
        descDeathwatch: "Watch Captains assemble. Select your veterans.",
        teamRaveners: "RAVENERS",
        descRaveners: "The swarm approaches. Dig your tunnels and ambush the prey.",
        teamFellgor: "FELLGOR RAVAGERS",
        descFellgor: "Channel your pain into an animalistic frenzy. Butcher your foes.",
        teamNemesis: "NEMESIS CLAW",
        descNemesis: "Spread terror and strike from the shadows. In Midnight Clad.",
        aquilonsTitle: "Tempestus Aquilons",
        aquilonsDesc: "Drop from the sky! Track your Grav-chutes, tactical insertions, and heavy airborne firepower.",
        novitiatesTitle: "Novitiates (Adepta Sororitas)",
        novitiatesDesc: "Manage your Faith Points, Acts of Faith, and coordinate your holy crusaders.",
        arbitesTitle: "Exaction Squad",
        arbitesDesc: "Enforce the Lex Imperialis! Track your Arrests and Judgement points.",
        mandrakeTitle: "Mandrake",
        mandrakeDesc: "Harvest souls and weave through shadow portals with your Drukhari assassins.",
        pathfindersTitle: "Pathfinders",
        pathfindersDesc: "For the Greater Good! Track your Markerlights, Savior Protocols, and drone synergies.",
        legionariesTitle: "Legionaries",
        legionariesDesc: "Let the galaxy burn! Manage your Chaos Marks, Dark Gods' blessings, and ploys.",
        kommandosTitle: "Kommandos",
        kommandosDesc: "WAAAGH! Track your Throat Slittas, bomb squigs, and sneaky ork maneuvers.",
        dragonMastersTitle: "Exodite Dragon Masters",
        dragonMastersDesc: "Ride the dragons! Track your Draconic Cavalry, Mercurial Speed, and Aeldari ancient tech.",
        hearthTitle: "Hearthkyn Salvagers",
        hearthDesc: "Dedicated tracking tools tailored to your Hearthkyn Salvagers kill team's rules and abilities.",
        coreTools: "Core Rules & Tools",
        teams: "Supported Kill Teams",
        legal: "This is an unofficial fan-made utility. Warhammer 40,000, Kill Team, and all associated logos, names, and statistics are © Copyright Games Workshop Limited. This tool is provided for free and is not affiliated with, or endorsed by, Games Workshop in any way."
    },
    de: {
        title: "Warhammer 40.000: Kill Team Hub",
        subtitle: "Ein zweisprachiges Portal für Tabletop-Tools, Tracker und Datapad-Apps.",
        launchApp: "App Starten",
        deathguardTitle: "Seuchenmarines (Death Guard)",
        deathguardDesc: "Stelle dein Seuchenmarines Kill Team auf, verfolge Kontagionen und verwalte Nurgles Geschenke.",
        aodTitle: "Angels of Death",
        aodDesc: "Für den Imperator! Verfolge deine Space Marines, den Schwur des Augenblicks und manage deine taktischen Schläge.",
        teamDeathwatch: "DEATHWATCH",
        descDeathwatch: "Watch Captains versammelt euch. Wählt eure Veteranen.",
        teamRaveners: "VENATOREN",
        descRaveners: "Der Schwarm naht. Grabe deine Tunnel und greife die Beute aus dem Hinterhalt an.",
        teamFellgor: "FINSTERGOR-VERWÜSTER",
        descFellgor: "Lenke deinen Schmerz in animalische Raserei. Schlachte deine Feinde ab.",
        teamNemesis: "NEMESISKLAUE",
        descNemesis: "Verbreite Terror und schlage aus den Schatten zu. In Mitternacht Gewandet.",
        aquilonsTitle: "Tempestus Aquilons",
        aquilonsDesc: "Angriff aus der Luft! Verfolge deine Grav-Schirme, taktische Landungen und schwere Luftlande-Feuerkraft.",
        hearthDesc: "Spezialisierte Tracking-Tools, zugeschnitten auf die Regeln und Fähigkeiten deines Flammkyn-Bergungscrew Kill Teams.",
        novitiatesTitle: "Novizinnen (Adepta Sororitas)",
        novitiatesDesc: "Verwalte deine Glaubenspunkte, Glaubensakte und koordiniere deine heiligen Kreuzfahrer.",
        arbitesTitle: "Exaction Squad (Arbites)",
        arbitesDesc: "Setze die Lex Imperialis durch! Verfolge deine Verhaftungen und Urteilspunkte.",
        mandrakeTitle: "Mandrake",
        mandrakeDesc: "Ernte Seelen und wandle durch Schattenportale mit deinen Drukhari-Assassinen.",
        pathfindersTitle: "Späher (Pathfinders)",
        pathfindersDesc: "Für das Höhere Wohl! Verfolge deine Zielmarker, Erlöserprotokolle und Drohnen-Synergien.",
        legionariesTitle: "Legionäre",
        legionariesDesc: "Lass die Galaxis brennen! Verwalte deine Chaosmale, Segen der Dunklen Götter und Listen.",
        kommandosTitle: "Kommandos",
        kommandosDesc: "WAAAGH! Verfolge deine Kehlenschlitza, Bombensquigs und hinterhältigen Ork-Manöver.",
        dragonMastersTitle: "Exoditen Drachenmeister",
        dragonMastersDesc: "Reite die Drachen! Verfolge deine drakonische Kavallerie, Quecksilbergeschwindigkeit und Aeldari-Tech.",
        hearthTitle: "Flammkyn-Bergungscrew",
        coreTools: "Grundregeln & Tools",
        teams: "Unterstützte Kill Teams",
        legal: "Dies ist ein inoffizielles, von Fans erstelltes Hilfsprogramm. Warhammer 40.000, Kill Team und alle zugehörigen Logos, Namen und Statistiken sind © Copyright Games Workshop Limited. Dieses Tool wird kostenlos zur Verfügung gestellt und ist in keiner Weise mit Games Workshop verbunden oder wird von Games Workshop unterstützt."
    }
};

let currentHubLang = 'en';

function applyHubLanguage(lang) {
    currentHubLang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (HUB_I18N[lang] && HUB_I18N[lang][key]) {
            el.innerHTML = HUB_I18N[lang][key];
        }
    });

    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`lang-${lang}`).classList.add('active');
    
    // Save preference
    localStorage.setItem('kt_hub_lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('kt_hub_lang') || 'en';
    applyHubLanguage(savedLang);

    document.getElementById('lang-en').addEventListener('click', () => applyHubLanguage('en'));
    document.getElementById('lang-de').addEventListener('click', () => applyHubLanguage('de'));
});
