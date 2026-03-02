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
    title: "Jour 1: Immersion & Découverte",
    date: "12 Octobre 2026",
    activities: [
      {
        id: "d1-a1",
        phase: "Phase 1: Acculturation",
        name: "Keynote d'ouverture: L'état de l'art de l'IA",
        duration: "09:00 - 10:30",
        description:
          "Une session plénière pour démystifier l'Intelligence Artificielle, comprendre ses fondamentaux et découvrir les dernières avancées technologiques qui transforment les industries.",
        keyActivities: [
          "Présentation des concepts clés (Machine Learning, Deep Learning, GenAI)",
          "Démonstrations en direct de modèles d'IA générative",
          "Session de Q&A interactive",
        ],
        results: [
          "Compréhension commune du vocabulaire de l'IA",
          "Démystification des craintes liées à la technologie",
        ],
        impacts: [
          "Alignement stratégique de l'équipe dirigeante",
          "Ouverture d'esprit vers l'innovation",
        ],
      },
      {
        id: "d1-a2",
        phase: "Phase 1: Acculturation",
        name: "Atelier: L'IA dans votre secteur",
        duration: "11:00 - 13:00",
        description:
          "Analyse des cas d'usage spécifiques à votre industrie. Comment vos concurrents utilisent-ils l'IA aujourd'hui ?",
        keyActivities: [
          "Analyse de benchmarks sectoriels",
          "Brainstorming dirigé sur les opportunités",
          "Cartographie des processus automatisables",
        ],
        results: [
          "Identification de 5 à 10 cas d'usage potentiels",
          "Matrice de maturité IA de l'entreprise",
        ],
        impacts: [
          "Prise de conscience des opportunités immédiates",
          "Engagement des équipes métiers",
        ],
      },
      {
        id: "d1-a3",
        phase: "Phase 2: Expérimentation",
        name: "Hands-on: Prompt Engineering",
        duration: "14:30 - 17:30",
        description:
          "Atelier pratique où les participants apprennent à interagir efficacement avec les grands modèles de langage (LLMs) pour résoudre des problèmes quotidiens.",
        keyActivities: [
          "Techniques avancées de prompting",
          "Exercices pratiques sur des données d'entreprise fictives",
          "Concours du meilleur prompt",
        ],
        results: [
          "Acquisition de compétences pratiques",
          "Création d'une bibliothèque de prompts utiles",
        ],
        impacts: [
          "Gain de productivité immédiat",
          "Adoption des outils par la pratique",
        ],
      },
    ],
  },
  {
    id: "day-2",
    title: "Jour 2: Stratégie & Action",
    date: "13 Octobre 2026",
    activities: [
      {
        id: "d2-a1",
        phase: "Phase 2: Expérimentation",
        name: "Prototypage rapide (Hackathon express)",
        duration: "09:00 - 12:30",
        description:
          "En petits groupes, les participants conçoivent un prototype de solution IA pour l'un des cas d'usage identifiés la veille.",
        keyActivities: [
          "Design thinking appliqué à l'IA",
          "Utilisation d'outils No-Code/Low-Code IA",
          "Préparation des pitchs",
        ],
        results: [
          "3 prototypes fonctionnels ou maquettes",
          "Validation de la faisabilité technique",
        ],
        impacts: [
          "Preuve de concept tangible",
          "Renforcement de la cohésion d'équipe",
        ],
      },
      {
        id: "d2-a2",
        phase: "Phase 3: Projection",
        name: "Gouvernance, Éthique et Sécurité",
        duration: "14:00 - 15:30",
        description:
          "Session critique sur les enjeux de sécurité des données, de biais algorithmiques et de conformité réglementaire (AI Act).",
        keyActivities: [
          "Revue du cadre réglementaire",
          "Atelier sur la confidentialité des données",
          "Définition d'une charte éthique IA",
        ],
        results: [
          "Brouillon de charte éthique",
          "Checklist de sécurité pour les projets IA",
        ],
        impacts: ["Maîtrise des risques", "Déploiement responsable de l'IA"],
      },
      {
        id: "d2-a3",
        phase: "Phase 3: Projection",
        name: "Feuille de route et Clôture",
        duration: "16:00 - 17:30",
        description:
          "Synthèse des deux jours et construction de la feuille de route pour les 6 prochains mois.",
        keyActivities: [
          "Priorisation des cas d'usage (Matrice Valeur/Effort)",
          "Définition des prochaines étapes (Next Steps)",
          "Feedback et évaluation",
        ],
        results: [
          "Roadmap IA à 6 mois",
          "Assignation des rôles et responsabilités",
        ],
        impacts: [
          "Mise en mouvement de l'organisation",
          "Transformation de l'immersion en projet concret",
        ],
      },
    ],
  },
];
