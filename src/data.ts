/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Flashcard, TopicNote, Badge } from './types';

export const FLASHCARDS: Flashcard[] = [
  {
    id: "fc-1",
    category: "Cell Biology",
    front: "What are the four successive stages of mitosis in eukaryotic somatic cells?",
    back: "1. Prophase (chromosome condensation)\n2. Metaphase (chromosomes align at equator)\n3. Anaphase (sister chromatids separate)\n4. Telophase (nuclear envelopes reform)"
  },
  {
    id: "fc-2",
    category: "Genetics",
    front: "Contrast the terms 'homozygous' and 'heterozygous'.",
    back: "Homozygous: Having two identical alleles for a specific gene (e.g., TT or tt).\nHeterozygous: Having two different alleles for a specific gene (e.g., Tt)."
  },
  {
    id: "fc-3",
    category: "Taxonomy",
    front: "What is binomial nomenclature and who developed it?",
    back: "A formal system of naming species using two parts (Genus name capitalized, species lowercase). Developed by Carolus Linnaeus."
  },
  {
    id: "fc-4",
    category: "Ecology",
    front: "What does the 'carrying capacity' (K) of an ecosystem represent?",
    back: "The maximum sustainable population size of a species that a given environment can support indefinitely without exhausting or degrading natural resources."
  },
  {
    id: "fc-5",
    category: "Animal Diversity",
    front: "What is a 'coelom' and why is it biologically significant?",
    back: "A coelom is a fluid-filled body cavity completely lined by mesoderm-derived tissue. It cushions organs, allows internal organ growth/movement, and acts as a hydrostatic skeleton."
  },
  {
    id: "fc-6",
    category: "Evolution",
    front: "Briefly define Charles Darwin's concept of 'Natural Selection'.",
    back: "The process whereby organisms possessing traits better suited to their environments tend to survive, reproduce, and pass on those advantageous genetic traits to offspring."
  },
  {
    id: "fc-7",
    category: "Evolution",
    front: "Compare homologous and analogous structures, giving an example of each.",
    back: "Homologous: Shared evolutionary ancestry, different function (e.g., pentadactyl limbs of humans and bat wings).\nAnalogous: Different ancestry, similar function (e.g., wings of birds and butterflies, arising via convergent evolution)."
  },
  {
    id: "fc-8",
    category: "Chordata",
    front: "What are the key defining characteristics of Phylum Chordata?",
    back: "1. Notochord (skeletal support)\n2. Dorsal hollow nerve cord (nervous system)\n3. Pharyngeal slits or clefts\n4. Post-anal tail"
  }
];

export const TOPIC_NOTES: TopicNote[] = [
  {
    id: "note-1",
    title: "1. Cell Biology & Genetics",
    content: "Cell biology explores the molecular mechanics of cells. Genetics is the study of heredity, examining how cellular divisions (mitosis vs meiosis), DNA replication, protein synthesis, and Mendelian inheritance transmit life's blueprints.",
    keyPoints: [
      "Mitosis produces diploid (2n) clone cells; Meiosis produces haploid (n) genetically unique gametes due to crossing over in Prophase I.",
      "The Central Dogma outlines transcription (DNA to mRNA) and translation (mRNA to protein starting at codon AUG).",
      "Mendelian inheritance displays predictable phenotypic ratios: 3:1 in monohybrid F2 crosses, and 1:1 in testcrosses of heterozygotes."
    ]
  },
  {
    id: "note-2",
    title: "2. Ecology & Ecosystems",
    content: "Ecology studies interactions between biotic communities and their abiotic environments. Energy transfers linearly up trophic levels (the 10% rule) while chemical nutrients cycle dynamically through global biogeochemical channels.",
    keyPoints: [
      "Primary producers (autotrophs) form the food chain's base, converting solar radiation to sugars via photosynthesis.",
      "Population regulation is governed by density-dependent (e.g., disease, food competition) and density-independent (e.g., wildfires, cold snaps) factors.",
      "Primary succession builds life on bare rock; secondary succession restores disturbed ecosystems possessing pre-existing soil."
    ]
  },
  {
    id: "note-4",
    title: "3. Animal Diversity & Physiology",
    content: "Animals are multicellular heterotrophs. Classification rests on body symmetry (radial vs bilateral), tissue layers, and the presence or lining of an internal body cavity (coelom).",
    keyPoints: [
      "Coelomates possess a body cavity completely enclosed by mesoderm; Arthropods are coelomates with segmented bodies and chitinous exoskeletons.",
      "Mammalian circulation relies on a highly efficient four-chambered heart, where the left ventricle drives oxygenated blood to the body.",
      "Homeostasis actively maintains internal equilibria (pH, blood sugar, water balance) via endocrine control like Insulin."
    ]
  },
  {
    id: "note-5",
    title: "4. Evolution & Adaptation",
    content: "Evolution is the genetic change in populations over time. Adaptations are traits selected because they confer reproductive fitness. Speciation occurs when gene flow is completely interrupted.",
    keyPoints: [
      "Lamarck hypothesized inheritance of acquired traits, whereas Darwin proved natural selection acting on pre-existing random variations.",
      "Genetic drift is random change in small gene pools (bottlenecks/founder effect); mutations are the ultimate sources of new alleles.",
      "The Hardy-Weinberg equilibrium is a null model describing non-evolving populations under random mating and zero selective pressures."
    ]
  }
];

export const INITIAL_BADGES: Badge[] = [
  {
    id: "badge-1",
    title: "Bio Beginner",
    description: "Complete your first practice quiz on BIO 102 Master.",
    unlocked: false,
    iconName: "Compass"
  },
  {
    id: "badge-2",
    title: "Genetics Expert",
    description: "Get 100% correct in any quiz focusing on Cell Biology & Genetics.",
    unlocked: false,
    iconName: "Zap"
  },
  {
    id: "badge-3",
    title: "Taxonomy Master",
    description: "Score perfectly on Taxonomy & Systematics questions.",
    unlocked: false,
    iconName: "FileCheck"
  },
  {
    id: "badge-4",
    title: "Ecology Guru",
    description: "Correctly answer 5 ecology questions in a row.",
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
