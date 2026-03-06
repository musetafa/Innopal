export type Activity = {
  id: string;
  phase: string;
  name: string;
  duration: string;
  description: string;
  keyActivities: string[];
  results: string[];
  impacts: string[];
  imagePlaceholder?: string;
  images?: string[];
};

export type Day = {
  id: string;
  title: string;
  date: string;
  activities: Activity[];
};

export const agendaData: Day[] = [
  {
    id: "day-1",
    title: "Jour 1",
    date: "9h – 17h",
    activities: [
      {
        id: "d1-a0",
        phase: "Ouverture & Mise en Énergie Collective",
        name: "Opening Show",
        duration: "25 min",
        description:
          "Lancer l’expérience, installer l’énergie collective et poser le cadre de l’immersion.",
        keyActivities: [
          "Introduction et cadrage de la journée.",
          "Mise en énergie et engagement des participants."
        ],
        results: [
          "Alignement initial sur l’objectif et le déroulé.",
          "Énergie et dynamique de groupe installées."
        ],
        impacts: [
          "Création d’un état d’esprit d’exploration et d’ouverture.",
          "Meilleure mobilisation pour la suite des ateliers."
        ],
        images: ["Zack1.png", "Zack2.png"],
      },
      {
        id: "d1-a1",
        phase: "Ouverture & Mise en Énergie Collective",
        name: "NEXUS DIGITAL",
        duration: "40 min",
        description:
          "Créer un brainstorming collectif amplifié par des mécaniques d’intelligence augmentée pour générer rapidement des angles d’innovation solides.",
        keyActivities: [
          "Divergence rapide : génération d’idées en équipe.",
          "Analyse augmentée à l’aide de l’IA : extraction automatique de patterns & thèmes.",
          "Pré-identification d’opportunités fortes pour la suite des ateliers."
        ],
        results: [
          "Carte d’idées collective.",
          "Patterns & zones d’opportunités détectées.",
          "Des idées transversales à explorer dans les ateliers."
        ],
        impacts: [
          "Une accélération significative de la génération d’idées.",
          "Une meilleure structuration des opportunités grâce à l’IA.",
          "Une énergie collective renforcée autour de la démarche d’innovation."
        ],
        images: ["Nexus-digital.png"],
      },
      {
        id: "d1-a2",
        phase: "Ouverture & Mise en Énergie Collective",
        name: "Sondage Menti : Analyse de maturité IA",
        duration: "15 min",
        description:
          "Mesurer en temps réel la maturité, la perception et les attentes des participants vis-à-vis de l’IA pour adapter la suite de l’immersion.",
        keyActivities: [
          "Réponse en direct à des questions clés (vote anonyme).",
          "Analyse collective instantanée des résultats.",
          "Mise en lumière des écarts de maturité dans la salle.",
          "Discussion rapide sur les points saillants."
        ],
        results: [
          "Un “State of AI Maturity” collectif.",
          "Les attentes prioritaires exprimées.",
          "Les obstacles perçus.",
          "Les opportunités les plus citées."
        ],
        impacts: [
          "Clarification des attentes → meilleure animation du reste du programme.",
          "Installation d’un climat de transparence et d’ouverture.",
          "Prise de conscience collective des différences de perspective."
        ],
        images: ["Sondage.png"],
      },
      {
        id: "d1-a2b",
        phase: "Ouverture & Mise en Énergie Collective",
        name: "Pause",
        duration: "10 min",
        description: "Pause.",
        keyActivities: [],
        results: [],
        impacts: [],
      },
      {
        id: "d1-a3",
        phase: "Ouverture & Mise en Énergie Collective",
        name: "SERIOUS GAME",
        duration: "90/120 min",
        description:
          "Le jeu crée un alignement opérationnel entre les profils techniques, IT et les métiers. Les participants mesurent concrètement l'impact de la dette technique ou du manque de ressources sur la capacité à absorber un choc ou un pic d'activité. Cela renforce la culture du \"Build to Last\".",
        keyActivities: [
          "Acquisition d’assets.",
          "Discussion entre équipes et sélection des chemins.",
          "Exécution et arbitrage."
        ],
        results: [
          "À la fin de la partie, chaque équipe finit sur une position bien déterminée sur le plateau, cette position est un indicateur visuel sur la direction et le mindset (accélération vs résilience) de chaque groupe."
        ],
        impacts: [
          "Le jeu crée un alignement opérationnel entre les profils techniques et de gestion.",
          "Une mise en mouvement vers les ateliers suivants."
        ],
        images: ["Serious1.png", "Serious2.png"],
      },
      {
        id: "d1-a3b",
        phase: "Ouverture & Mise en Énergie Collective",
        name: "Pause déjeuner",
        duration: "90 min (12h30 – 14h)",
        description: "Pause déjeuner.",
        keyActivities: [],
        results: [],
        impacts: [],
      },
      {
        id: "d1-a3c",
        phase: "Comprendre, analyser et structurer les opportunités IA",
        name: "Keynotes — Au Cœur de la Finance Digitale : Vision, Tendances et Ruptures",
        duration: "45 min",
        description:
          "Partager une vision, des tendances et des ruptures clés pour cadrer les opportunités IA dans le secteur financier.",
        keyActivities: ["Keynote et échanges."],
        results: ["Alignement sur les tendances et enjeux du marché."],
        impacts: ["Cadre commun pour la suite des ateliers."],
      },
      {
        id: "d1-a4",
        phase: "Comprendre, analyser et structurer les opportunités IA",
        name: "Atelier 1: Approche centrée client / utilisateur",
        duration: "90 min",
        description:
          "Aligner les participants sur les besoins réels des utilisateurs finaux (internes ou externes) via des personas simplifiés et des pain points maps, afin de créer une base solide pour les futurs use cases IA.",
        keyActivities: [
          "Découverte de 3 personas métiers simplifiés.",
          "Construction de “Pain Points Maps” par équipe.",
          "Transformation des points de douleur en opportunités IA (patterns d’usage).",
          "Analyse rapide des attentes de transparence & explicabilité par persona.",
          "Préparation des briques pour l’atelier Use Case Factory."
        ],
        results: [
          "Analyser un persona.",
          "Identifier points de douleur & complexités.",
          "Proposer des pistes IA.",
          "Discussion sur les outputs."
        ],
        impacts: [
          "Une compréhension partagée des besoins réels des utilisateurs.",
          "Une clarification collective des opportunités IA à plus fort potentiel.",
          "Une dynamique collaborative renforcée autour de la voix de l'utilisateur."
        ],
      },
      {
        id: "d1-a4b",
        phase: "Comprendre, analyser et structurer les opportunités IA",
        name: "Pause",
        duration: "10 min",
        description: "Pause.",
        keyActivities: [],
        results: [],
        impacts: [],
      },
      {
        id: "d1-a5",
        phase: "Comprendre, analyser et structurer les opportunités IA",
        name: "Atelier 2: Fabrique de cas d’usage IA",
        duration: "60 min",
        description:
          "Transformer les opportunités identifiées en cas d'usage IA concrets, évalués selon leur faisabilité technique et leur valeur métier.",
        keyActivities: [
          "Génération de cas d'usage à partir des pain points.",
          "Évaluation de la faisabilité technique et de la valeur métier.",
          "Sélection des cas d'usage prioritaires."
        ],
        results: [
          "Liste de cas d'usage IA potentiels.",
          "Évaluation initiale de chaque cas d'usage."
        ],
        impacts: [
          "Alignement sur les priorités d'investissement en IA.",
          "Création d'un backlog de projets IA actionnables."
        ],
      },
    ],
  },
  {
    id: "day-2",
    title: "Jour 2",
    date: "9h – 11h45",
    activities: [
      {
        id: "d2-a1",
        phase: "Prioriser et définir les orientations IA 2026–2028",
        name: "Atelier 3: Structurer un projet IA de manière optimale",
        duration: "75 min",
        description:
          "Définir les étapes clés, les ressources nécessaires et les indicateurs de succès pour les projets IA prioritaires.",
        keyActivities: [
          "Analyse des prérequis techniques et de données.",
          "Définition des rôles et responsabilités.",
          "Identification des risques et des plans de mitigation."
        ],
        results: [
          "Feuille de route préliminaire pour les cas d'usage sélectionnés.",
          "Cartographie des dépendances."
        ],
        impacts: [
          "Une priorisation claire des éléments critiques du projet IA.",
          "Une capacité renforcée à évaluer la faisabilité et la maturité du use case.",
          "Une base solide pour lancer la phase de design détaillée."
        ],
      },
      {
        id: "d2-a2",
        phase: "Prioriser et définir les orientations IA 2026–2028",
        name: "Atelier final: Vision directrice IA 2026-2028",
        duration: "60 min",
        description:
          "Co-créer une vision stratégique claire et inspirante des orientations IA 2026–2028 de votre organisation, à partir des travaux réalisés durant l’immersion.",
        keyActivities: [
          "Restitution rapide des blueprints IA.",
          "Identification des patterns transversaux.",
          "Définition de 3 à 5 orientations stratégiques IA.",
          "Formulation d’une vision “North Star” partagée.",
          "Production d’un poster-synthèse des ambitions IA 2026–2028."
        ],
        results: [
          "Prioriser les orientations les plus structurantes.",
          "Articuler les ambitions IA à moyen terme.",
          "Construire une vision unifiée et inspirante.",
          "Rassembler les résultats des ateliers en un message stratégique clair."
        ],
        impacts: [
          "Vision claire, alignée et inspirante de l’IA au sein de l'organisation.",
          "Transformation des travaux du 1.5 jour en direction stratégique."
        ],
      },
      {
        id: "d2-a3",
        phase: "Prioriser et définir les orientations IA 2026–2028",
        name: "Clôture : Synthèse & révélation finale",
        duration: "30 min",
        description: "Synthèse, restitution et clôture.",
        keyActivities: [],
        results: [],
        impacts: [],
      },
    ],
  },
];
