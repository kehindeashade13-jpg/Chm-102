/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Flashcard, TopicNote, Badge } from './types';

export const FLASHCARDS: Flashcard[] = [
  {
    id: "fc-1",
    category: "Hybridization",
    front: "What is the hybridization of carbon in Alkanes, Alkenes, and Alkynes respectively?",
    back: "Alkanes: sp³ (tetrahedral, 109.5°)\nAlkenes: sp² (trigonal planar, 120°)\nAlkynes: sp (linear, 180°)"
  },
  {
    id: "fc-2",
    category: "Markovnikov's Rule",
    front: "Briefly explain Markovnikov's Rule.",
    back: "In the addition of HX to an unsymmetrical alkene, the hydrogen atom adds to the carbon with more hydrogen substituents, while the halide (X) adds to the carbon with fewer hydrogens (generating the more stable carbocation intermediate)."
  },
  {
    id: "fc-3",
    category: "Lucas Test",
    front: "How do primary, secondary, and tertiary alcohols behave in the Lucas Test?",
    back: "Tertiary alcohols: React instantly (immediate cloudiness/turbidity).\nSecondary alcohols: React in 5-10 minutes.\nPrimary alcohols: Do not react at room temperature (only react upon heating)."
  },
  {
    id: "fc-4",
    category: "Aromaticity",
    front: "What are the four conditions for a compound to be aromatic (Hückel's Rule)?",
    back: "1. Cyclic\n2. Planar\n3. Completely conjugated (continuous ring of p-orbitals)\n4. Has (4n + 2) pi electrons (where n is an integer)."
  },
  {
    id: "fc-5",
    category: "Reducing Sugars",
    front: "Why is sucrose a non-reducing sugar while maltose is a reducing sugar?",
    back: "In sucrose, both anomeric carbons of glucose and fructose are locked in the glycosidic bond (no free hemiacetal group). In maltose, one glucose unit retains a free hemiacetal group that can open into a reactive aldehyde."
  },
  {
    id: "fc-6",
    category: "SN1 vs SN2",
    front: "Contrast the mechanism of SN1 and SN2 reactions.",
    back: "SN1: Two-step mechanism, proceeds via a carbocation intermediate, favored by tertiary halides and polar protic solvents.\nSN2: One-step concerted mechanism, backside attack, inversion of configuration, favored by primary halides, strong nucleophiles, and polar aprotic solvents."
  },
  {
    id: "fc-7",
    category: "Tollens' Test",
    front: "What does Tollens' Test detect, and what is the positive observation?",
    back: "It detects aldehydes (reducing agents). A positive result is the deposition of metallic silver on the tube wall, forming a bright 'silver mirror'."
  },
  {
    id: "fc-8",
    category: "Zaitsev's Rule",
    front: "What is Zaitsev's (Saytzeff's) Rule in elimination reactions?",
    back: "In an elimination (dehydration/dehydrohalogenation) reaction, the major product is the more substituted, more stable alkene (i.e., the alkene with more alkyl groups attached to the double-bonded carbons)."
  }
];

export const TOPIC_NOTES: TopicNote[] = [
  {
    id: "note-1",
    title: "1. Introduction & IUPAC Nomenclature",
    content: "Organic chemistry is the study of carbon compounds. Understanding hybridization, structural representation (Lewis, condensed, skeletal), and systematic IUPAC nomenclature is fundamental to master further chapters.",
    keyPoints: [
      "Carbon forms four covalent bonds due to tetravalency and catenation capabilities.",
      "Hybridization dictates geometry: sp3 is tetrahedral (109.5°), sp2 is trigonal planar (120°), sp is linear (180°).",
      "IUPAC rules prioritizes: Longest continuous chain containing principal functional group -> Numbering from closest end to principal group -> Substituents alphabetically."
    ]
  },
  {
    id: "note-2",
    title: "2. Purification & Characterization Techniques",
    content: "Organic compounds synthesized in the lab are rarely pure. Chemists utilize physical properties (boiling point, solubility, volatility, molecular sizes) to isolate pure products and determine their elemental composition.",
    keyPoints: [
      "Crystallization is based on difference in solubilities in a hot vs. cold solvent.",
      "Distillation splits liquids: Simple (BP difference > 25-30 °C), Fractional (BP difference < 25 °C), Vacuum (thermolabile compounds with high BP), Steam (volatile, water-immiscible compounds).",
      "Chromatography separates mixtures based on partition or adsorption between stationary and mobile phases.",
      "Lassaigne's sodium fusion test converts covalent N, S, P, and halogens to water-soluble NaCN, Na2S, and NaX for inorganic ionic detection."
    ]
  },
  {
    id: "note-3",
    title: "3. Hydrocarbons: Alkanes, Alkenes, Alkynes",
    content: "Hydrocarbons are compounds containing only carbon and hydrogen. Alkanes are saturated (single bonds only) and undergo substitution; alkenes and alkynes are unsaturated and primarily undergo addition reactions.",
    keyPoints: [
      "Alkanes (CnH2n+2) are relatively inert but undergo free-radical halogenation under UV light. Wurtz coupling synthesizes symmetrical alkanes.",
      "Alkenes (CnH2n) contain a C=C bond (one sigma, one pi) and undergo electrophilic addition (e.g. halogenation, hydrohalogenation obeying Markovnikov's rule, and ozonolysis).",
      "Alkynes (CnH2n-2) contain a triple bond. Terminal alkynes are weakly acidic and form precipitates with ammoniacal Cu(I) or Ag(I) solutions (Tollens')."
    ]
  },
  {
    id: "note-4",
    title: "4. Aromaticity & Benzene",
    content: "Benzene exhibits unique stability (resonance energy) because of its closed loop of 6 delocalized pi electrons. It undergoes substitution rather than addition to maintain its aromatic system.",
    keyPoints: [
      "Hückel's Rule of Aromaticity: cyclic, planar, fully conjugated, and (4n+2) pi-electrons.",
      "Benzene undergoes Electrophilic Aromatic Substitution (EAS) including nitration (NO2+), halogenation (FeX3 catalyst), sulfonation, and Friedel-Crafts alkylation/acylation.",
      "Substituents already present on the ring direct incoming groups: activating groups (e.g., -OH, -NH2, alkyls) are ortho/para-directing; deactivating groups (e.g., -NO2, -COOH, -CHO) are meta-directing (halogens are deactivating but ortho/para-directing)."
    ]
  },
  {
    id: "note-5",
    title: "5. Functional Groups (Alcohols, Carbonyls, Acids, Amines)",
    content: "Functional groups are specific groupings of atoms that determine the chemical behavior and reactions of organic families. Oxygen- and nitrogen-containing groups are highly polar and active.",
    keyPoints: [
      "Alcohols (-OH) engage in hydrogen bonding (high BP, water soluble). Lucas reagent distinguishes tertiary (instant), secondary (5 mins), and primary (heating needed) alcohols.",
      "Aldehydes & Ketones contain the carbonyl group (C=O) and undergo nucleophilic addition. Tollens' and Fehling's tests oxidize aldehydes specifically. Iodoform test identifies methyl ketones.",
      "Carboxylic Acids (-COOH) are highly acidic due to resonance stabilization of carboxylate anions. EWGs (like Cl, F) increase acidity by inductive effect.",
      "Amines (R-NH2) are organic bases. Secondary aliphatic amines are most basic in water. Aniline is much less basic due to resonance delocalization of nitrogen lone pair."
    ]
  },
  {
    id: "note-6",
    title: "6. Stereochemistry & Isomerism",
    content: "Isomers have the same molecular formula but different structural arrangements (constitutional/structural) or 3D orientations (stereoisomers).",
    keyPoints: [
      "Structural isomers: chain, position, and functional group isomers (e.g., ethanol and dimethyl ether).",
      "Geometric isomerism (cis/trans or E/Z) is caused by restricted rotation around C=C bonds.",
      "Optical isomerism is caused by chiral carbon atoms bonded to four distinct substituents. Enantiomers are non-superimposable mirror images; diastereomers are non-mirror image stereoisomers."
    ]
  }
];

export const INITIAL_BADGES: Badge[] = [
  {
    id: "badge-1",
    title: "Organic Beginner",
    description: "Complete your first practice quiz on CHM 102 Master.",
    unlocked: false,
    iconName: "Compass"
  },
  {
    id: "badge-2",
    title: "Hydrocarbon Expert",
    description: "Get 100% correct in any quiz focusing on Alkanes, Alkenes, or Alkynes.",
    unlocked: false,
    iconName: "Zap"
  },
  {
    id: "badge-3",
    title: "Alcohol Master",
    description: "Score perfectly on Alcohols and Ethers questions.",
    unlocked: false,
    iconName: "GlassWater"
  },
  {
    id: "badge-4",
    title: "Reaction Mechanism Guru",
    description: "Correctly answer 5 reaction mechanism questions in a row.",
    unlocked: false,
    iconName: "Cpu"
  },
  {
    id: "badge-5",
    title: "100% Club",
    description: "Achieve a perfect 100% score on a full 20+ question practice exam.",
    unlocked: false,
    iconName: "Award"
  },
  {
    id: "badge-6",
    title: "Streak Master",
    description: "Reach a study streak of 3 consecutive days.",
    unlocked: false,
    iconName: "Flame"
  },
  {
    id: "badge-7",
    title: "Fast Finisher",
    description: "Complete an exam or custom quiz with more than 50% of the timer remaining.",
    unlocked: false,
    iconName: "Timer"
  }
];
