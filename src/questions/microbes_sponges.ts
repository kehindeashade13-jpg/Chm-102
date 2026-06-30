/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Question } from '../types';

export const MICROBES_SPONGES_QUESTIONS: Question[] = [
  // ==================== PHYLUM PROTOZOA (50 Questions) ====================
  {
    "id": "pro-1",
    "sec": "Phylum Protozoa",
    "question": "Which of these biological kingdoms historically included the unicellular, eukaryotic organisms known as Protozoans?",
    "options": ["Kingdom Monera", "Kingdom Protista", "Kingdom Fungi", "Kingdom Animalia"],
    "correctAnswer": "Kingdom Protista",
    "explanation": "Protozoans are single-celled eukaryotic organisms, traditionally grouped under Kingdom Protista because they lack tissue-level development."
  },
  {
    "id": "pro-2",
    "sec": "Phylum Protozoa",
    "question": "What structure is used by Amoeba for locomotion and food capture?",
    "options": ["Cilia", "Flagella", "Pseudopodia (false feet)", "Contractile vacuole"],
    "correctAnswer": "Pseudopodia (false feet)",
    "explanation": "Amoeba uses temporary cytoplasmic projections called pseudopodia to crawl and engulf food via phagocytosis."
  },
  {
    "id": "pro-3",
    "sec": "Phylum Protozoa",
    "question": "Ciliates, such as Paramecium, move and sweep in food particles using millions of short, hair-like structures called:",
    "options": ["Flagella", "Cilia", "Pseudopodia", "Tentacles"],
    "correctAnswer": "Cilia",
    "explanation": "Cilia are short, numerous, ciliated projections that beat in coordinated waves to propel Paramecium and sweep food into its cytostome."
  },
  {
    "id": "pro-4",
    "sec": "Phylum Protozoa",
    "question": "The whip-like, tail-like organelle used by Euglena and Trypanosoma for locomotion is the:",
    "options": ["Cilium", "Flagellum", "Pseudopod", "Siphon"],
    "correctAnswer": "Flagellum",
    "explanation": "Flagella are long, thread-like structures that pull or push cells through liquid mediums."
  },
  {
    "id": "pro-5",
    "sec": "Phylum Protozoa",
    "question": "What is the function of the contractile vacuole in freshwater protozoans like Paramecium?",
    "options": ["Digesting complex proteins", "Osmoregulation (pumping out excess water)", "Photosynthesis", "Storing reproductive DNA"],
    "correctAnswer": "Osmoregulation (pumping out excess water)",
    "explanation": "Because freshwater is hypotonic to protozoan cytoplasm, water continuously diffuses in. The contractile vacuole gathers and expels this excess water to prevent cell lysis."
  },
  {
    "id": "pro-6",
    "sec": "Phylum Protozoa",
    "question": "The mouth-like groove on the surface of Paramecium where food is ingested is the:",
    "options": ["Cytoproct", "Cytostome (oral groove)", "Contractile pore", "Nucleus"],
    "correctAnswer": "Cytostome (oral groove)",
    "explanation": "The cytostome is a specialized cell mouth where cilia guide food particles into the cell to form food vacuoles."
  },
  {
    "id": "pro-7",
    "sec": "Phylum Protozoa",
    "question": "What is the primary mode of asexual reproduction in most protozoans, where a single cell splits into two equal halves?",
    "options": ["Binary fission", "Multiple fission", "Budding", "Conjugation"],
    "correctAnswer": "Binary fission",
    "explanation": "Binary fission is the mitotic division of a single-celled organism into two genetically identical daughter cells."
  },
  {
    "id": "pro-8",
    "sec": "Phylum Protozoa",
    "question": "What type of sexual interaction is seen in Paramecium, where two cells exchange micronuclear genetic material?",
    "options": ["Binary fission", "Conjugation", "Budding", "Multiple fission"],
    "correctAnswer": "Conjugation",
    "explanation": "Conjugation is a sexual process where two Paramecium individuals align side-by-side and temporarily fuse to exchange haploid micronuclei."
  },
  {
    "id": "pro-9",
    "sec": "Phylum Protozoa",
    "question": "Which group of parasitic protozoans lacks specialized locomotion organelles as adults and replicates inside host cells?",
    "options": ["Sarcodina (Amoebas)", "Mastigophora (Flagellates)", "Ciliophora (Ciliates)", "Apicomplexa (Sporozoans)"],
    "correctAnswer": "Apicomplexa (Sporozoans)",
    "explanation": "Apicomplexans (like Plasmodium) are spore-forming parasites with no active locomotion organelles, utilizing an apical complex to invade host tissues."
  },
  {
    "id": "pro-10",
    "sec": "Phylum Protozoa",
    "question": "Which species of Plasmodium causes the most severe, life-threatening form of human malaria?",
    "options": ["Plasmodium vivax", "Plasmodium falciparum", "Plasmodium malariae", "Plasmodium ovale"],
    "correctAnswer": "Plasmodium falciparum",
    "explanation": "Plasmodium falciparum is the most virulent malaria parasite, responsible for cerebral malaria and high mortality rates."
  },
  {
    "id": "pro-11",
    "sec": "Phylum Protozoa",
    "question": "The infective larval-like stage of Plasmodium injected into human blood by a biting mosquito is the:",
    "options": ["Merozoite", "Trophozoite", "Sporozoite", "Gametocyte"],
    "correctAnswer": "Sporozoite",
    "explanation": "Plasmodium sporozoites migrate to the salivary glands of mosquitoes and enter the human bloodstream during a bite, traveling directly to the liver."
  },
  {
    "id": "pro-12",
    "sec": "Phylum Protozoa",
    "question": "Inside human liver cells, sporozoites undergo multiple fission to produce thousands of:",
    "options": ["Merozoites", "Sporozoites", "Gametocytes", "Zygotes"],
    "correctAnswer": "Merozoites",
    "explanation": "Sporozoites multiply in the liver (exoerythrocytic schizogony) and rupture the cells, releasing merozoites to invade red blood cells."
  },
  {
    "id": "pro-13",
    "sec": "Phylum Protozoa",
    "question": "Which vector transmits the flagellated protozoan Trypanosoma brucei, causing African Sleeping Sickness?",
    "options": ["Anopheles mosquito", "Tsetse fly (Glossina)", "Sandfly", "Triatomine (kissing) bug"],
    "correctAnswer": "Tsetse fly (Glossina)",
    "explanation": "Trypanosoma brucei is transmitted by the bite of the tsetse fly, infecting the blood and lymphatic system before crossing the blood-brain barrier."
  },
  {
    "id": "pro-14",
    "sec": "Phylum Protozoa",
    "question": "Which protozoan causes Chagas disease (American trypanosomiasis), transmitted by the feces of kissing bugs?",
    "options": ["Trypanosoma cruzi", "Trypanosoma brucei", "Leishmania donovani", "Entamoeba histolytica"],
    "correctAnswer": "Trypanosoma cruzi",
    "explanation": "Trypanosoma cruzi causes Chagas disease, endemic to Latin America."
  },
  {
    "id": "pro-15",
    "sec": "Phylum Protozoa",
    "question": "Which amoebic parasite causes severe, blood-diarrhea dysentery (amoebiasis) in humans?",
    "options": ["Entamoeba histolytica", "Amoeba proteus", "Giardia lamblia", "Balantidium coli"],
    "correctAnswer": "Entamoeba histolytica",
    "explanation": "Entamoeba histolytica degrades the mucosal lining of the large intestine, causing flask-shaped ulcers and bloody diarrhea."
  },
  {
    "id": "pro-16",
    "sec": "Phylum Protozoa",
    "question": "Which flagellated intestinal protozoan causes chronic diarrhea and greasy stools, acquired by drinking contaminated wilderness stream water?",
    "options": ["Giardia lamblia", "Entamoeba histolytica", "Plasmodium vivax", "Trichomonas vaginalis"],
    "correctAnswer": "Giardia lamblia",
    "explanation": "Giardia lamblia cysts are highly resistant to cold water. When swallowed, they hatch into flagellated trophozoites that carpet the small intestine, blocking fat absorption."
  },
  {
    "id": "pro-17",
    "sec": "Phylum Protozoa",
    "question": "Paramecium has two distinct nuclei. What is the role of the large Macronucleus?",
    "options": ["Controlling daily metabolic functions and protein synthesis", "Triggering sexual reproduction and conjugation", "Replicating mitochondrial DNA", "Secretory defense"],
    "correctAnswer": "Controlling daily metabolic functions and protein synthesis",
    "explanation": "The macronucleus contains many copies of somatic genes used to drive cell growth, metabolism, and behavior."
  },
  {
    "id": "pro-18",
    "sec": "Phylum Protozoa",
    "question": "What is the function of the small Micronucleus in Paramecium?",
    "options": ["Regulating water output", "Directing protein synthesis", "Genetic exchange and recombination during sexual conjugation", "Digesting prey algae"],
    "correctAnswer": "Genetic exchange and recombination during sexual conjugation",
    "explanation": "The diploid micronucleus serves as the germline nucleus, remaining inactive during vegetative growth but critical during mating."
  },
  {
    "id": "pro-19",
    "sec": "Phylum Protozoa",
    "question": "The stinging, defensive microscopic organelles found just beneath the pellicle of Paramecium are:",
    "options": ["Toxicysts", "Trichocysts", "Nematocysts", "Contractile pores"],
    "correctAnswer": "Trichocysts",
    "explanation": "Trichocysts are spindle-shaped, ejectable organelles that discharge long sticky threads when Paramecium is irritated or attacked."
  },
  {
    "id": "pro-20",
    "sec": "Phylum Protozoa",
    "question": "Which parasitic protozoan is sexually transmitted in humans, causing vaginitis and urethritis?",
    "options": ["Trichomonas vaginalis", "Giardia lamblia", "Trypanosoma cruzi", "Entamoeba coli"],
    "correctAnswer": "Trichomonas vaginalis",
    "explanation": "Trichomonas vaginalis is a flagellated protozoan parasite of the human urogenital tract, causing trichomoniasis."
  },
  {
    "id": "pro-21",
    "sec": "Phylum Protozoa",
    "question": "Euglena is highly unique because it can make food via photosynthesis in the light, but feed as a heterotroph in the dark. This lifestyle is:",
    "options": ["Autotrophic", "Heterotrophic", "Mixotrophic", "Saprophytic"],
    "correctAnswer": "Mixotrophic",
    "explanation": "Mixotrophy is the capability to utilize both autotrophic (photosynthetic) and heterotrophic nutrition pathways."
  },
  {
    "id": "pro-22",
    "sec": "Phylum Protozoa",
    "question": "The red light-sensitive sensory structure in Euglena that helps it swim toward light is the:",
    "options": ["Contractile vacuole", "Stigma (eyespot)", "Chloroplast", "Paramylon body"],
    "correctAnswer": "Stigma (eyespot)",
    "explanation": "The stigma is a red pigment shield next to the flagellum base. It blocks light from certain directions, helping the photoreceptor locate light sources (phototaxis)."
  },
  {
    "id": "pro-23",
    "sec": "Phylum Protozoa",
    "question": "What compound is used by Euglena to store carbohydrates synthesized during photosynthesis?",
    "options": ["Starch", "Glycogen", "Paramylon", "Cellulose"],
    "correctAnswer": "Paramylon",
    "explanation": "Euglena stores carbohydrates as paramylon granules, a unique beta-1,3-glucan starch-like compound."
  },
  {
    "id": "pro-24",
    "sec": "Phylum Protozoa",
    "question": "The semi-rigid, elastic outer proteinaceous layer that maintains shape in many protozoans is the:",
    "options": ["Cell wall", "Pellicle", "Cuticle", "Shell"],
    "correctAnswer": "Pellicle",
    "explanation": "The pellicle is a thin, flexible, protein-rich layer beneath the plasma membrane, letting cells bend and distort without tearing."
  },
  {
    "id": "pro-25",
    "sec": "Phylum Protozoa",
    "question": "What is the vector that transmits Leishmania protozoans, causing severe skin ulcers and visceral organ failure (Kala-azar)?",
    "options": ["Tsetse fly", "Sandfly (Phlebotomus)", "Anopheles mosquito", "Deerfly"],
    "correctAnswer": "Sandfly (Phlebotomus)",
    "explanation": "Leishmaniasis is transmitted by female phlebotomine sandflies in tropical and subtropical regions."
  },
  {
    "id": "pro-26",
    "sec": "Phylum Protozoa",
    "question": "Trypanosomes contain a large, specialized disc of DNA inside their single giant mitochondrion called the:",
    "options": ["Kinetoplast", "Macronucleus", "Stigma", "Paramylon disk"],
    "correctAnswer": "Kinetoplast",
    "explanation": "The kinetoplast is a network of circular DNA (kDNA) located at the base of the flagellum, characteristic of Class Kinetoplastea."
  },
  {
    "id": "pro-27",
    "sec": "Phylum Protozoa",
    "question": "Amoebas secrete undigested food vacuoles out of their cells at any point along their membrane, but Paramecium excretes wastes via a fixed site called the:",
    "options": ["Cytostome", "Cytoproct (anal pore)", "Contractile vacuole", "Pellicle pore"],
    "correctAnswer": "Cytoproct (anal pore)",
    "explanation": "The cytoproct is a specialized, permanent cell anus where empty food vacuoles fuse to release undigested debris."
  },
  {
    "id": "pro-28",
    "sec": "Phylum Protozoa",
    "question": "The protective, dormant, walled stage that allows protozoans to survive severe drying or nutrient shortage is a:",
    "options": ["Trophozoite", "Cyst", "Sporozoite", "Bud"],
    "correctAnswer": "Cyst",
    "explanation": "Encystment involves forming a thick, protective wall around the cell, slowing metabolism down until wet, favorable conditions return."
  },
  {
    "id": "pro-29",
    "sec": "Phylum Protozoa",
    "question": "The active, feeding, vegetative stage of a protozoan parasite is the:",
    "options": ["Cyst", "Trophozoite", "Sporozoite", "Merozoite"],
    "correctAnswer": "Trophozoite",
    "explanation": "Trophozoites are the active, reproducing, feeding stages of protozoan parasites in the host body (as opposed to dormant cysts)."
  },
  {
    "id": "pro-30",
    "sec": "Phylum Protozoa",
    "question": "Multiple fission in malaria parasites where a single multinucleated cell bursts to release many offspring is:",
    "options": ["Sporogony", "Schizogony", "Conjugation", "Budding"],
    "correctAnswer": "Schizogony",
    "explanation": "Schizogony is an asexual multiple fission process where the nucleus divides repeatedly before cellular splitting, producing merozoites."
  },
  {
    "id": "pro-31",
    "sec": "Phylum Protozoa",
    "question": "The sexual reproductive phase of Plasmodium, which occurs inside the mosquito gut, is known as:",
    "options": ["Schizogony", "Sporogony", "Merogony", "Conjugation"],
    "correctAnswer": "Sporogony",
    "explanation": "Sporogony is the sexual replication phase of Plasmodium, culminating in sporozoite production inside the mosquito."
  },
  {
    "id": "pro-32",
    "sec": "Phylum Protozoa",
    "question": "During the malaria lifecycle, where does the fertilizing zygote form?",
    "options": ["Inside human liver cells", "Inside human red blood cells", "Inside the stomach (midgut) of the female Anopheles mosquito", "In the human blood plasma"],
    "correctAnswer": "Inside the stomach (midgut) of the female Anopheles mosquito",
    "explanation": "Gametocytes swallowed by a mosquito mature into gametes in its stomach, where fertilization takes place to form a motile zygote (ookinete)."
  },
  {
    "id": "pro-33",
    "sec": "Phylum Protozoa",
    "question": "What is the motile, active zygote of Plasmodium that bores into the mosquito stomach wall?",
    "options": ["Ookinete", "Oocyst", "Sporozoite", "Merozoite"],
    "correctAnswer": "Ookinete",
    "explanation": "The ookinete is the active, worm-like zygote that penetrates the mosquito's gut lining to establish an oocyst."
  },
  {
    "id": "pro-34",
    "sec": "Phylum Protozoa",
    "question": "Which protozoan is a famous ciliate ectoparasite of freshwater fish, causing White Spot disease ('Ich') in aquariums?",
    "options": ["Ichthyophthirius multifiliis", "Entamoeba histolytica", "Balantidium coli", "Paramecium caudatum"],
    "correctAnswer": "Ichthyophthirius multifiliis",
    "explanation": "Ichthyophthirius causes 'Ich', forming small white pustules on fish skin and gills."
  },
  {
    "id": "pro-35",
    "sec": "Phylum Protozoa",
    "question": "What type of pseudopodia are long, thin, branching, and form an interconnected food-trapping mesh, found in Foraminiferans?",
    "options": ["Lobopodia", "Filopodia", "Reticulopodia", "Axopodia"],
    "correctAnswer": "Reticulopodia",
    "explanation": "Reticulopodia are net-like branching pseudopodia used for snaring prey on coral sands."
  },
  {
    "id": "pro-36",
    "sec": "Phylum Protozoa",
    "question": "What type of pseudopodia are stiff, needle-like, and reinforced with central microtubule arrays, found in Radiolarians?",
    "options": ["Lobopodia", "Filopodia", "Reticulopodia", "Axopodia"],
    "correctAnswer": "Axopodia",
    "explanation": "Axopodia are specialized long, rigid, glassy pseudopodia that radiate outward for floating and prey capture."
  },
  {
    "id": "pro-37",
    "sec": "Phylum Protozoa",
    "question": "The marine protozoans that secrete intricate, multi-chambered chalky shells (tests) made of calcium carbonate are:",
    "options": ["Radiolarians", "Foraminiferans", "Amoeba", "Euglena"],
    "correctAnswer": "Foraminiferans",
    "explanation": "Foraminifera tests accumulate as deep sea calcareous oozes, forming massive chalk structures like the White Cliffs of Dover."
  },
  {
    "id": "pro-38",
    "sec": "Phylum Protozoa",
    "question": "The marine protozoans that secrete elegant, glass-like shells made of silica are:",
    "options": ["Foraminiferans", "Radiolarians", "Euglenas", "Ciliates"],
    "correctAnswer": "Radiolarians",
    "explanation": "Radiolarians have ornate glass skeletons of silica, forming deep-sea siliceous oozes."
  },
  {
    "id": "pro-39",
    "sec": "Phylum Protozoa",
    "question": "Which of these is the only ciliate known to be a pathogen of humans, causing intestinal ulcers and diarrhea?",
    "options": ["Paramecium caudatum", "Balantidium coli", "Stentor coeruleus", "Vorticella"],
    "correctAnswer": "Balantidium coli",
    "explanation": "Balantidium coli is a giant ciliate parasite carried by pigs, which can infect humans who consume food contaminated with pig feces."
  },
  {
    "id": "pro-40",
    "sec": "Phylum Protozoa",
    "question": "The process of a cell engulfing a solid food particle inside a membrane vacuole is called:",
    "options": ["Pinocytosis", "Phagocytosis", "Exocytosis", "Osmosis"],
    "correctAnswer": "Phagocytosis",
    "explanation": "Phagocytosis ('cell eating') is the uptake of large solid particles by enveloping them in the cell membrane."
  },
  {
    "id": "pro-41",
    "sec": "Phylum Protozoa",
    "question": "The process of a cell drinking dissolved liquid nutrients is called:",
    "options": ["Phagocytosis", "Pinocytosis", "Exocytosis", "Active pumping"],
    "correctAnswer": "Pinocytosis",
    "explanation": "Pinocytosis is 'cell drinking', absorbing fluid droplets via tiny membrane invaginations."
  },
  {
    "id": "pro-42",
    "sec": "Phylum Protozoa",
    "question": "Which disease-causing flagellate resides in the bloodstream, and utilizes antigenic variation to continuously change its surface glycoproteins and evade host antibodies?",
    "options": ["Trypanosoma brucei", "Plasmodium falciparum", "Entamoeba histolytica", "Giardia lamblia"],
    "correctAnswer": "Trypanosoma brucei",
    "explanation": "Trypanosomes contain thousands of genes coding for Variable Surface Glycoproteins (VSGs). By switching active VSGs, they stay ahead of host antibodies, causing waves of fever."
  },
  {
    "id": "pro-43",
    "sec": "Phylum Protozoa",
    "question": "What flagellated, colonial protozoan forms large, green, hollow spherical colonies of thousands of cells, demonstrating an early step toward multicellularity?",
    "options": ["Volvox", "Chlamydomonas", "Euglena", "Paramecium"],
    "correctAnswer": "Volvox",
    "explanation": "Volvox is a colonial chlorophyte forming spherical colonies with coordinated flagellar movement and specialized reproductive cells."
  },
  {
    "id": "pro-44",
    "sec": "Phylum Protozoa",
    "question": "Amoeba cells contain two zones of cytoplasm: a stiff outer jelly and a fluid inner sol. These are the:",
    "options": ["Ectoplasm and endoplasm", "Nucleoplasm and protoplasm", "Mesoglea and parenchyma", "Chloroplast and vacuole"],
    "correctAnswer": "Ectoplasm and endoplasm",
    "explanation": "Stiff outer ectoplasm protects the cell, while fluid interior endoplasm streams forward to extend a pseudopod."
  },
  {
    "id": "pro-45",
    "sec": "Phylum Protozoa",
    "question": "The process of cytoplasm shifting from a fluid 'sol' to a solid 'gel' state, which powers amoeboid movement, is:",
    "options": ["Torsion", "Sol-gel transformation", "Osmotic balance", "Encystment"],
    "correctAnswer": "Sol-gel transformation",
    "explanation": "Amoeboid movement is driven by rapid actin assembly/disassembly, converting fluid endoplasm (sol) into rigid ectoplasm (gel) at the advancing tip."
  },
  {
    "id": "pro-46",
    "sec": "Phylum Protozoa",
    "question": "The vector-borne disease Leishmaniasis primarily infects which host immune cells?",
    "options": ["Red blood cells", "Helper T cells", "Macrophages", "B lymphocytes"],
    "correctAnswer": "Macrophages",
    "explanation": "Leishmania amastigotes adapt to live and divide inside the phagolysosomes of host macrophages, dodging immune detection."
  },
  {
    "id": "pro-47",
    "sec": "Phylum Protozoa",
    "question": "Which of these is a typical symptom of visceral leishmaniasis (Kala-azar)?",
    "options": ["Severe skin blisters", "Bloody urine", "Massive enlargement of the spleen and liver (hepatosplenomegaly)", "Loss of hearing"],
    "correctAnswer": "Massive enlargement of the spleen and liver (hepatosplenomegaly)",
    "explanation": "Visceral leishmaniasis attacks the internal immune organs, leading to liver/spleen swelling, anemia, and wasting."
  },
  {
    "id": "pro-48",
    "sec": "Phylum Protozoa",
    "question": "The periodic cycles of shaking chills and high fevers in malaria patients are caused by:",
    "options": ["The liver regenerating from injury", "The simultaneous rupture of infected red blood cells and release of toxins/merozoites", "The mosquito bite wound getting infected", "Dehydration from drinking lake water"],
    "correctAnswer": "The simultaneous rupture of infected red blood cells and release of toxins/merozoites",
    "explanation": "When erythrocyte schizogony completes, millions of red cells burst together, dumping merozoites and pyrogenic toxic wastes into the bloodstream."
  },
  {
    "id": "pro-49",
    "sec": "Phylum Protozoa",
    "question": "The malaria fever spikes that occur every 48 hours (tertian malaria) are characteristic of:",
    "options": ["Plasmodium falciparum and Plasmodium vivax", "Plasmodium malariae", "African sleeping sickness", "Amoebic dysentery"],
    "correctAnswer": "Plasmodium falciparum and Plasmodium vivax",
    "explanation": "P. vivax and P. falciparum have a 48-hour asexual cycle in red cells, causing tertian fever spikes."
  },
  {
    "id": "pro-50",
    "sec": "Phylum Protozoa",
    "question": "The malaria fever spikes that occur every 72 hours (quartan malaria) are characteristic of:",
    "options": ["Plasmodium vivax", "Plasmodium malariae", "Plasmodium falciparum", "Trypanosomes"],
    "correctAnswer": "Plasmodium malariae",
    "explanation": "Plasmodium malariae has a slower 72-hour replication cycle, causing quartan fever spikes."
  },

  // ==================== PHYLUM PORIFERA (50 Questions) ====================
  {
    "id": "por-1",
    "sec": "Phylum Porifera",
    "question": "Members of Phylum Porifera are commonly known as:",
    "options": ["Flatworms", "Jellyfishes", "Sponges", "Clams"],
    "correctAnswer": "Sponges",
    "explanation": "Poriferans are multicellular marine and freshwater organisms commonly known as sponges."
  },
  {
    "id": "por-2",
    "sec": "Phylum Porifera",
    "question": "Sponges represent what level of biological organization?",
    "options": ["Protoplasmic level", "Cellular level (lack true tissues and organs)", "Tissue level", "Organ-system level"],
    "correctAnswer": "Cellular level (lack true tissues and organs)",
    "explanation": "Sponges are multicellular, but their cells are loose and specialized without forming true tissues, coordinate basally, and lack organ systems."
  },
  {
    "id": "por-3",
    "sec": "Phylum Porifera",
    "question": "What type of body symmetry is found in most sponges?",
    "options": ["Bilateral symmetry", "Bilateral and pentaradial", "Asymmetry or simple radial symmetry", "Spherical symmetry"],
    "correctAnswer": "Asymmetry or simple radial symmetry",
    "explanation": "Most sponges grow as asymmetrical masses, though some simple tube shapes exhibit radial symmetry."
  },
  {
    "id": "por-4",
    "sec": "Phylum Porifera",
    "question": "The numerous tiny inhalant pores on the body surface of sponges where water enters are:",
    "options": ["Oscula", "Ostia", "Siphons", "Coeloms"],
    "correctAnswer": "Ostia",
    "explanation": "Ostia are microscopic incurrent pores that perforate the sponge body wall, drawing water inside."
  },
  {
    "id": "por-5",
    "sec": "Phylum Porifera",
    "question": "The large, single exhalant opening at the top of a sponge where water exits is the:",
    "options": ["Ostium", "Osculum", "Spongocoel", "Siphon"],
    "correctAnswer": "Osculum",
    "explanation": "The osculum is a large exit chimney where filtered water is pushed out of the sponge."
  },
  {
    "id": "por-6",
    "sec": "Phylum Porifera",
    "question": "What is the large, central cavity inside a simple sponge called?",
    "options": ["Coelom", "Gastrovascular cavity", "Spongocoel", "Blastocoel"],
    "correctAnswer": "Spongocoel",
    "explanation": "The spongocoel is the large central chamber of simple sponges into which ostia drain."
  },
  {
    "id": "por-7",
    "sec": "Phylum Porifera",
    "question": "Which specialized flagellated cells create water currents and trap food particles in sponges?",
    "options": ["Pinacocytes", "Choanocytes (collar cells)", "Amoebocytes", "Porocytes"],
    "correctAnswer": "Choanocytes (collar cells)",
    "explanation": "Choanocytes have flagella surrounded by a collar of microvilli. Flagellar beating creates water currents, and the collar filters out bacteria for digestion."
  },
  {
    "id": "por-8",
    "sec": "Phylum Porifera",
    "question": "The flat, epithelial-like cells that form the outer protective skin of sponges are:",
    "options": ["Choanocytes", "Pinacocytes", "Porocytes", "Amoebocytes"],
    "correctAnswer": "Pinacocytes",
    "explanation": "Pinacocytes form the pinacoderm, a protective, contractile outer layer of the sponge."
  },
  {
    "id": "por-9",
    "sec": "Phylum Porifera",
    "question": "What are the tubular, pore-forming cells that channel water directly through the body wall of simple sponges?",
    "options": ["Choanocytes", "Porocytes", "Pinacocytes", "Sclerocytes"],
    "correctAnswer": "Porocytes",
    "explanation": "Porocytes are donut-shaped cells that stretch across the body wall, forming the channel of an ostium."
  },
  {
    "id": "por-10",
    "sec": "Phylum Porifera",
    "question": "The amoeba-like, totipotent cells that migrate through the sponge body to digest food, carry nutrients, and form skeletal elements are:",
    "options": ["Choanocytes", "Archaeocytes (Amoebocytes)", "Pinacocytes", "Porocytes"],
    "correctAnswer": "Archaeocytes (Amoebocytes)",
    "explanation": "Archaeocytes are highly versatile stem cells. They receive food from choanocytes, complete digestion, and differentiate into other cell types."
  },
  {
    "id": "por-11",
    "sec": "Phylum Porifera",
    "question": "What hard, needle-like structures make up the skeletal support of many sponges?",
    "options": ["Setae", "Spicules", "Ossicles", "Carapaces"],
    "correctAnswer": "Spicules",
    "explanation": "Spicules are sharp crystalline skeletal elements secreted by amoebocytes, composed of calcium carbonate or silica."
  },
  {
    "id": "por-12",
    "sec": "Phylum Porifera",
    "question": "In addition to spicules, some sponges are supported by a soft network of fibrous collagen proteins called:",
    "options": ["Chitin", "Spongin", "Cartilage", "Cellulose"],
    "correctAnswer": "Spongin",
    "explanation": "Spongin is a fibrous protein form of collagen that gives bath sponges their soft, elastic, absorbent quality."
  },
  {
    "id": "por-13",
    "sec": "Phylum Porifera",
    "question": "Based on canal systems, what is the simplest, thinnest-walled sponge body design, shaped like a small tube?",
    "options": ["Asconoid", "Syconoid", "Leuconoid", "None"],
    "correctAnswer": "Asconoid",
    "explanation": "Asconoid sponges have a simple, direct path: Ostia -> Spongocoel (lined with choanocytes) -> Osculum."
  },
  {
    "id": "por-14",
    "sec": "Phylum Porifera",
    "question": "What body design features a folded body wall with choanocytes lining radial canals rather than the central spongocoel?",
    "options": ["Asconoid", "Syconoid", "Leuconoid", "Hydroid"],
    "correctAnswer": "Syconoid",
    "explanation": "Syconoid sponges have a thicker, folded wall, which increases surface area for filtering without increasing body size excessively."
  },
  {
    "id": "por-15",
    "sec": "Phylum Porifera",
    "question": "What is the most complex, efficient, and largest sponge body design, containing millions of flagellated chambers and lacking a main spongocoel?",
    "options": ["Asconoid", "Syconoid", "Leuconoid", "Crinoid"],
    "correctAnswer": "Leuconoid",
    "explanation": "Leuconoid sponges are highly branched. Water is pumped through intricate canal networks and specialized chambers, allowing massive growth (like barrel sponges)."
  },
  {
    "id": "por-16",
    "sec": "Phylum Porifera",
    "question": "Class Calcarea features sponges whose spicules are composed of:",
    "options": ["Silica", "Calcium carbonate", "Pure spongin", "Chitin"],
    "correctAnswer": "Calcium carbonate",
    "explanation": "Class Calcarea is defined by calcareous spicules composed of calcium carbonate, with 3 or 4 rays."
  },
  {
    "id": "por-17",
    "sec": "Phylum Porifera",
    "question": "Class Hexactinellida comprises deep-sea sponges whose spicules are made of silica with six rays, commonly known as:",
    "options": ["Bath sponges", "Glass sponges", "Chalky sponges", "Boring sponges"],
    "correctAnswer": "Glass sponges",
    "explanation": "Hexactinellids are glass sponges, with fused siliceous spicules forming beautiful, lattice-like skeletons (e.g., Venus' flower basket)."
  },
  {
    "id": "por-18",
    "sec": "Phylum Porifera",
    "question": "Most living sponges (around 95%) belong to Class Demospongiae. Their skeletons consist of:",
    "options": ["Calcareous spicules only", "Siliceous spicules (not 6-rayed), spongin fibers, or both", "6-rayed glass spicules only", "Entirely skeletal-free cytoplasm"],
    "correctAnswer": "Siliceous spicules (not 6-rayed), spongin fibers, or both",
    "explanation": "Demospongiae is the largest class of sponges, containing almost all commercial bath sponges and colorful reef sponges."
  },
  {
    "id": "por-19",
    "sec": "Phylum Porifera",
    "question": "Sponges feed on bacteria and organic debris by:",
    "options": ["Filter-feeding (suspension feeding)", "Hunting active fish", "Sucking plant sap", "Extracellular stomach digestion"],
    "correctAnswer": "Filter-feeding (suspension feeding)",
    "explanation": "Sponges are highly efficient pump filters, trapping microscopic organic material on the sticky microvilli collars of choanocytes."
  },
  {
    "id": "por-20",
    "sec": "Phylum Porifera",
    "question": "In sponges, digestion of food particles is strictly:",
    "options": ["Extracellular (inside a stomach)", "Intracellular (inside food vacuoles within cells)", "No digestion occurs", "Carried out by gut bacteria"],
    "correctAnswer": "Intracellular (inside food vacuoles within cells)",
    "explanation": "Because sponges lack a gut or stomach, food particles captured by choanocytes are transferred to archaeocytes and digested intracellularly."
  },
  {
    "id": "por-21",
    "sec": "Phylum Porifera",
    "question": "How does water move through a sponge?",
    "options": ["Water is pumped backward by the osculum", "Water enters ostia, flows into chambers, and exits the osculum", "Water flows in and out of the same pores periodically", "Sponges do not have water flowing through them"],
    "correctAnswer": "Water enters ostia, flows into chambers, and exits the osculum",
    "explanation": "The flagellar beating of thousands of choanocytes creates a continuous, unidirectional hydraulic current through the sponge."
  },
  {
    "id": "por-22",
    "sec": "Phylum Porifera",
    "question": "What are the specialized amoebocytes that secrete spicules?",
    "options": ["Spongocytes", "Sclerocytes", "Collocytes", "Pinacocytes"],
    "correctAnswer": "Sclerocytes",
    "explanation": "Sclerocytes are specialized archaeocytes that produce mineralized spicules."
  },
  {
    "id": "por-23",
    "sec": "Phylum Porifera",
    "question": "What are the specialized amoebocytes that secrete spongin fibers?",
    "options": ["Sclerocytes", "Spongocytes", "Porocytes", "Collenocytes"],
    "correctAnswer": "Spongocytes",
    "explanation": "Spongocytes are the specialized cells responsible for secreting the flexible spongin skeleton."
  },
  {
    "id": "por-24",
    "sec": "Phylum Porifera",
    "question": "The jelly-like, extracellular matrix that fills the space between the outer skin and inner collar cells in sponges is the:",
    "options": ["Parenchyma", "Mesohyl (mesenchyme)", "Mesoglea", "Coelom"],
    "correctAnswer": "Mesohyl (mesenchyme)",
    "explanation": "The mesohyl is a gelatinous proteinaceous matrix containing spicules, spongin, and wandering archaeocytes."
  },
  {
    "id": "por-25",
    "sec": "Phylum Porifera",
    "question": "What highly resistant, internal asexual buds are produced by freshwater sponges to survive freezing and drought?",
    "options": ["Proglottids", "Gemmules", "Cysts", "Planula"],
    "correctAnswer": "Gemmules",
    "explanation": "Gemmules are capsule-like buds containing masses of archaeocytes wrapped in a tough, spicule-reinforced layer, surviving winter and hatching in spring."
  },
  {
    "id": "por-26",
    "sec": "Phylum Porifera",
    "question": "What is the primary larval stage of most sponges, consisting of a ciliated swimming egg?",
    "options": ["Parenchymula", "Trochophore", "Veliger", "Miracidium"],
    "correctAnswer": "Parenchymula",
    "explanation": "Sponges release swimming parenchymula larvae, which swim to locate a hard surface, settle, and metamorphose into a sessile sponge."
  },
  {
    "id": "por-27",
    "sec": "Phylum Porifera",
    "question": "Sponges are sessile, meaning they:",
    "options": ["Swim rapidly", "Are anchored to a substrate and cannot move", "Live inside host guts", "Do not reproduce"],
    "correctAnswer": "Are anchored to a substrate and cannot move",
    "explanation": "Adult sponges are sessile benthos, living attached to rocks, shells, or reefs."
  },
  {
    "id": "por-28",
    "sec": "Phylum Porifera",
    "question": "Because sponges lack respiratory and excretory organs, they eliminate wastes and obtain oxygen by:",
    "options": ["Active tracheal breathing", "Simple cellular diffusion with the passing water current", "Pumping blood with a lateral heart", "Using Malpighian tubules"],
    "correctAnswer": "Simple cellular diffusion with the passing water current",
    "explanation": "Every cell in a sponge is close to water, enabling easy gas exchange and ammonia disposal via simple diffusion."
  },
  {
    "id": "por-29",
    "sec": "Phylum Porifera",
    "question": "The Venus' Flower Basket (Euplectella), a famous glass sponge, has an evolutionary relationship with:",
    "options": ["Hermit crabs", "Symbiotic shrimps that live trapped inside its lattice", "Snail parasites", "Reef corals"],
    "correctAnswer": "Symbiotic shrimps that live trapped inside its lattice",
    "explanation": "A young male and female shrimp often enter the sponge and grow too large to escape, living inside in a lifelong symbiotic union."
  },
  {
    "id": "por-30",
    "sec": "Phylum Porifera",
    "question": "Which of these is a freshwater sponge genus?",
    "options": ["Sycon", "Spongilla", "Euplectella", "Cliona"],
    "correctAnswer": "Spongilla",
    "explanation": "Spongilla is a common freshwater sponge genus, growing on twigs and rocks in clean streams and lakes."
  },
  {
    "id": "por-31",
    "sec": "Phylum Porifera",
    "question": "Which of these is a boring sponge that drills holes in oyster shells?",
    "options": ["Spongilla", "Cliona", "Euplectella", "Chalina"],
    "correctAnswer": "Cliona",
    "explanation": "Cliona species are boring sponges that chemically dissolve calcium carbonate to burrow inside mollusc shells, acting as pests."
  },
  {
    "id": "por-32",
    "sec": "Phylum Porifera",
    "question": "Sponges are famous for cell reaggregation. If a living sponge is pushed through fine mesh into individual cells, they will:",
    "options": ["All die immediately", "Crawl back together and reconstruct a complete sponge", "Turn into parasitic flagellates", "Form calcified shells"],
    "correctAnswer": "Crawl back together and reconstruct a complete sponge",
    "explanation": "Sponge cells have advanced chemical recognition. Disassociated cells migrate, aggregate by type, and rebuild the sponge structure."
  },
  {
    "id": "por-33",
    "sec": "Phylum Porifera",
    "question": "Which of these cells in sponges can transform into any other cell type (totipotent)?",
    "options": ["Pinacocytes", "Archaeocytes", "Porocytes", "Choanocytes"],
    "correctAnswer": "Archaeocytes",
    "explanation": "Archaeocytes are undifferentiated amoeboid cells that serve as the primary stem cells of the sponge."
  },
  {
    "id": "por-34",
    "sec": "Phylum Porifera",
    "question": "What is the hollow space inside a leuconoid sponge's flagellated chamber lined with?",
    "options": ["Pinacocytes", "Choanocytes", "Porocytes", "Spongocytes"],
    "correctAnswer": "Choanocytes",
    "explanation": "In leuconoid sponges, choanocytes are grouped inside millions of microscopic rounded flagellated chambers."
  },
  {
    "id": "por-35",
    "sec": "Phylum Porifera",
    "question": "Sponge spicules are designed with different geometric shapes. A spicule with a single shaft is called a:",
    "options": ["Monaxon", "Triaxon", "Tetraxone", "Polyaxon"],
    "correctAnswer": "Monaxon",
    "explanation": "Monaxons are unbranched, needle-like spicules that grow along a single axis."
  },
  {
    "id": "por-36",
    "sec": "Phylum Porifera",
    "question": "A spicule with three radiating rays is called a:",
    "options": ["Monaxon", "Triaxon", "Tetraxone", "Polyaxon"],
    "correctAnswer": "Triaxon",
    "explanation": "Triaxons have three intersecting axes, creating six-pointed rays typical of glass sponges."
  },
  {
    "id": "por-37",
    "sec": "Phylum Porifera",
    "question": "How do sponges reproduce sexually?",
    "options": ["Self-fertilization of external spores", "Releasing sperm into water, which is captured by choanocytes of another sponge and carried to eggs in the mesohyl", "Conjugation of nuclei", "Asexual binary fission only"],
    "correctAnswer": "Releasing sperm into water, which is captured by choanocytes of another sponge and carried to eggs in the mesohyl",
    "explanation": "Sperm released into the sea is taken up by another sponge's choanocytes, which lose their collar and act as transport carriers to fertilize eggs in the mesohyl."
  },
  {
    "id": "por-38",
    "sec": "Phylum Porifera",
    "question": "Most sponges are monoecious (hermaphrodites). How do they avoid self-fertilization?",
    "options": ["By living in different oceans", "By releasing sperm and eggs at different times", "They can recognize their own sperm and destroy it", "They do not have eggs"],
    "correctAnswer": "By releasing sperm and eggs at different times",
    "explanation": "Sponges exhibit sequential hermaphroditism (producing sperm and eggs at separate times) to ensure cross-fertilization."
  },
  {
    "id": "por-39",
    "sec": "Phylum Porifera",
    "question": "Which of these is the hollow, blastula-like larva of some calcareous sponges, with flagellated cells on one half?",
    "options": ["Amphiblastula", "Parenchymula", "Trochophore", "Veliger"],
    "correctAnswer": "Amphiblastula",
    "explanation": "Amphiblastula is a specialized swimming larva in calcareous sponges, containing flagellated anterior cells and non-flagellated posterior cells."
  },
  {
    "id": "por-40",
    "sec": "Phylum Porifera",
    "question": "Sponges prevent predators (like fish and turtles) from eating them using:",
    "options": ["Venom claws", "Sharp mineral spicules and toxic bio-chemicals", "Rapid backward swimming", "Thick chitinous shells"],
    "correctAnswer": "Sharp mineral spicules and toxic bio-chemicals",
    "explanation": "Glassy spicules make sponges unpalatable and painful to swallow, and many secrete strong biotoxins."
  },
  {
    "id": "por-41",
    "sec": "Phylum Porifera",
    "question": "Sponge cells coordinate their pumping activities using:",
    "options": ["A central brain and nerves", "Direct intercellular signaling (lacking any nervous system)", "Mitochondrial electric lines", "Hormones released by the osculum"],
    "correctAnswer": "Direct intercellular signaling (lacking any nervous system)",
    "explanation": "Poriferans are the only animals that completely lack any neurons, coordinating contraction through paracrine signaling."
  },
  {
    "id": "por-42",
    "sec": "Phylum Porifera",
    "question": "The contractile cells that surround the ostia and oscula, regulating water flow rate by closing openings, are:",
    "options": ["Choanocytes", "Myocytes", "Archaeocytes", "Sclerocytes"],
    "correctAnswer": "Myocytes",
    "explanation": "Myocytes are specialized contractile pinacocytes arranged in rings around pores, behaving like simple sphincters."
  },
  {
    "id": "por-43",
    "sec": "Phylum Porifera",
    "question": "In what marine zone are glass sponges (Hexactinellida) most dominant?",
    "options": ["Shallow coral reefs", "Estuaries", "Deep-sea abyssal zones", "Intertidal sandy beaches"],
    "correctAnswer": "Deep-sea abyssal zones",
    "explanation": "Glass sponges thrive in cold, quiet, deep-sea waters where silica concentrations are high."
  },
  {
    "id": "por-44",
    "sec": "Phylum Porifera",
    "question": "Which sponge class contains species with skeletons of massive calcium carbonate bases beneath organic tissues?",
    "options": ["Calcarea", "Demospongiae", "Hexactinellida", "Sclerospongiae (coralline sponges)"],
    "correctAnswer": "Sclerospongiae (coralline sponges)",
    "explanation": "Coralline sponges secrete a heavy basement of calcium carbonate, resembling corals."
  },
  {
    "id": "por-45",
    "sec": "Phylum Porifera",
    "question": "The term 'Sponge-grade' organization refers to organisms that possess:",
    "options": ["True tissue sheets", "Multicellularity with specialized cells but no true germ layers or tissues", "Only single-celled organelles", "An organ-system body"],
    "correctAnswer": "Multicellularity with specialized cells but no true germ layers or tissues",
    "explanation": "This refers to the parazoan grade of multicellular life, unique to Porifera."
  },
  {
    "id": "por-46",
    "sec": "Phylum Porifera",
    "question": "Archaeocytes can transform into gametes. In sponges, eggs are typically formed from:",
    "options": ["Choanocytes or archaeocytes", "Pinacocytes", "Porocytes", "Spongin fibers"],
    "correctAnswer": "Choanocytes or archaeocytes",
    "explanation": "Eggs develop from germ line archaeocytes or occasionally dedifferentiated choanocytes."
  },
  {
    "id": "por-47",
    "sec": "Phylum Porifera",
    "question": "In sponges, sperm is synthesized inside chambers formed by modified:",
    "options": ["Choanocytes", "Archaeocytes", "Pinacocytes", "Porocytes"],
    "correctAnswer": "Choanocytes",
    "explanation": "Sperm cells typically develop from mitotic division of choanocytes."
  },
  {
    "id": "por-48",
    "sec": "Phylum Porifera",
    "question": "The skeleton of the commercial bath sponge (Spongia) consists entirely of:",
    "options": ["Calcareous spicules", "Siliceous spicules", "Spongin fibers", "No skeleton"],
    "correctAnswer": "Spongin fibers",
    "explanation": "Commercial bath sponges are harvested, and treated to dissolve all cells and mineral spicules, leaving the soft elastic spongin skeleton."
  },
  {
    "id": "por-49",
    "sec": "Phylum Porifera",
    "question": "The canal system of sponges serves which of the following vital functions?",
    "options": ["Respiration", "Excretion", "Reproduction", "All of the above"],
    "correctAnswer": "All of the above",
    "explanation": "The flowing water brings in oxygen and food, removes carbon dioxide and metabolic ammonia, and disperses gametes."
  },
  {
    "id": "por-50",
    "sec": "Phylum Porifera",
    "question": "Which of these is not a characteristic of sponges?",
    "options": ["Filter-feeding", "A true gastrovascular cavity", "Mineralized skeletal spicules", "Totipotent archaeocyte cells"],
    "correctAnswer": "A true gastrovascular cavity",
    "explanation": "Sponges lack a digestive gastrovascular cavity (which is a diagnostic feature of Cnidarians)."
  },

  // ==================== PHYLUM COELENTERATES / CNIDARIA (50 Questions) ====================
  {
    "id": "coe-1",
    "sec": "Phylum Cnidaria",
    "question": "Phylum Coelenterata is alternative known in modern zoology as:",
    "options": ["Phylum Porifera", "Phylum Cnidaria", "Phylum Platyhelminthes", "Phylum Ctenophora"],
    "correctAnswer": "Phylum Cnidaria",
    "explanation": "Coelenterates are classified under Phylum Cnidaria, highlighting their characteristic stinging cells (cnidocytes)."
  },
  {
    "id": "coe-2",
    "sec": "Phylum Cnidaria",
    "question": "Cnidarians display what tissue-level layer development?",
    "options": ["Monoblastic", "Diploblastic (two germ layers: ectoderm and endoderm)", "Triploblastic (three germ layers)", "None"],
    "correctAnswer": "Diploblastic (two germ layers: ectoderm and endoderm)",
    "explanation": "Cnidarians are diploblastic, developing from an outer ectoderm (forming the epidermis) and an inner endoderm (forming the gastrodermis)."
  },
  {
    "id": "coe-3",
    "sec": "Phylum Cnidaria",
    "question": "What type of body symmetry is characteristic of all Cnidarians?",
    "options": ["Bilateral symmetry", "Asymmetry", "Radial symmetry", "Pentaradial symmetry"],
    "correctAnswer": "Radial symmetry",
    "explanation": "Cnidarians are radially symmetrical, with body parts arranged symmetrically around a central oral-aboral axis."
  },
  {
    "id": "coe-4",
    "sec": "Phylum Cnidaria",
    "question": "The jelly-like, non-cellular layer that separates the outer epidermis and inner gastrodermis in Cnidarians is the:",
    "options": ["Parenchyma", "Mesohyl", "Mesoglea", "Coelom"],
    "correctAnswer": "Mesoglea",
    "explanation": "The mesoglea is a gelatinous, water-rich matrix that acts as an elastic skeleton, exceptionally thick in jellyfishes."
  },
  {
    "id": "coe-5",
    "sec": "Phylum Cnidaria",
    "question": "What type of digestive tract do Cnidarians possess?",
    "options": ["Complete digestive tract with mouth and anus", "Incomplete digestive tract (gastrovascular cavity with single mouth opening)", "No digestive tract (absorption via skin)", "A gastric mill"],
    "correctAnswer": "Incomplete digestive tract (gastrovascular cavity with single mouth opening)",
    "explanation": "Cnidarians have a central gastrovascular cavity (coelenteron) with a single opening (mouth) used for both ingestion and egesting wastes."
  },
  {
    "id": "coe-6",
    "sec": "Phylum Cnidaria",
    "question": "The specialized stinging cells unique to Phylum Cnidaria, used for defense and prey capture, are:",
    "options": ["Choanocytes", "Cnidocytes", "Amoebocytes", "Flame cells"],
    "correctAnswer": "Cnidocytes",
    "explanation": "Cnidocytes are specialized stinging cells located primarily on tentacles, containing firing organelles called cnidae (nematocysts)."
  },
  {
    "id": "coe-7",
    "sec": "Phylum Cnidaria",
    "question": "What is the stinging, capsule-like organelle inside a cnidocyte that contains a coiled, barbed thread and venom?",
    "options": ["Nematocyst", "Trichocyst", "Toxicyst", "Statocyst"],
    "correctAnswer": "Nematocyst",
    "explanation": "The nematocyst is the actual stinging capsule. When triggered, it fires a hollow, barbed thread to inject paralyzing neurotoxins into prey."
  },
  {
    "id": "coe-8",
    "sec": "Phylum Cnidaria",
    "question": "The tiny, hair-like sensory trigger on the surface of a cnidocyte that triggers nematocyst discharge is the:",
    "options": ["Cilium", "Cnidocil", "Statolith", "Operculum"],
    "correctAnswer": "Cnidocil",
    "explanation": "The cnidocil is a modified, rigid flagellar trigger. Touching it causes a rapid water influx, firing the nematocyst within milliseconds."
  },
  {
    "id": "coe-9",
    "sec": "Phylum Cnidaria",
    "question": "Many cnidarians exhibit two distinct body forms during their life cycle. These are:",
    "options": ["Scolex and proglottid", "Polyp and medusa", "Trochophore and veliger", "Zoea and adult"],
    "correctAnswer": "Polyp and medusa",
    "explanation": "Cnidarians exhibit dimorphism. The polyp is a sessile, cylindrical asexual form, while the medusa is a free-swimming, umbrella-shaped sexual form."
  },
  {
    "id": "coe-10",
    "sec": "Phylum Cnidaria",
    "question": "Which cnidarian body form is sessile, cylindrical, with the mouth and tentacles pointing upward?",
    "options": ["Medusa", "Polyp", "Planula", "Cercaria"],
    "correctAnswer": "Polyp",
    "explanation": "The polyp (like Hydra or sea anemones) is designed for a sedentary benthic life, with upward-directed oral openings."
  },
  {
    "id": "coe-11",
    "sec": "Phylum Cnidaria",
    "question": "Which cnidarian body form is free-swimming, umbrella-shaped, with the mouth and tentacles hanging downward?",
    "options": ["Polyp", "Medusa", "Blastula", "Tadpole"],
    "correctAnswer": "Medusa",
    "explanation": "The medusa (like jellyfishes) is adapted for a floating pelagic life, with downward-pointing mouths."
  },
  {
    "id": "coe-12",
    "sec": "Phylum Cnidaria",
    "question": "Which class of Cnidarians includes Hydra, colonial Obelia, and the floating Portuguese Man-of-War?",
    "options": ["Hydrozoa", "Scyphozoa", "Anthozoa", "Cubozoa"],
    "correctAnswer": "Hydrozoa",
    "explanation": "Class Hydrozoa comprises diverse cnidarians that often have a colonial polyp phase and a small medusa phase, or are solitary polyps like Hydra."
  },
  {
    "id": "coe-13",
    "sec": "Phylum Cnidaria",
    "question": "Which class contains the true, larger jellyfishes, where the medusa stage is dominant and the polyp stage is highly reduced?",
    "options": ["Hydrozoa", "Scyphozoa", "Anthozoa", "Cubozoa"],
    "correctAnswer": "Scyphozoa",
    "explanation": "Class Scyphozoa consists of the true cup-shaped jellyfishes, with a dominant, thick-mesoglea medusa phase."
  },
  {
    "id": "coe-14",
    "sec": "Phylum Cnidaria",
    "question": "Which class contains corals and sea anemones, which exist exclusively as polyps and completely lack a medusa stage?",
    "options": ["Hydrozoa", "Scyphozoa", "Anthozoa", "Cubozoa"],
    "correctAnswer": "Anthozoa",
    "explanation": "Class Anthozoa ('flower animals') includes corals and sea anemones. They are entirely polypoid, reproducing both sexually and asexually as polyps."
  },
  {
    "id": "coe-15",
    "sec": "Phylum Cnidaria",
    "question": "Which class of highly venomous, cube-shaped cnidarians contains the box jellyfishes, equipped with advanced eyes?",
    "options": ["Hydrozoa", "Scyphozoa", "Anthozoa", "Cubozoa"],
    "correctAnswer": "Cubozoa",
    "explanation": "Class Cubozoa consists of box jellies, renowned for highly painful stings and complex eyes with lenses, retinas, and corneas."
  },
  {
    "id": "coe-16",
    "sec": "Phylum Cnidaria",
    "question": "The free-swimming, ciliated, flattened larval stage of Cnidarians is the:",
    "options": ["Trochophore", "Planula", "Veliger", "Miracidium"],
    "correctAnswer": "Planula",
    "explanation": "Fertilized cnidarian eggs develop into planula larvae, which swim in plankton before settling to form a polyp."
  },
  {
    "id": "coe-17",
    "sec": "Phylum Cnidaria",
    "question": "The freshwater Hydra is highly unique because it lacks:",
    "options": ["Tentacles", "A medusa stage (exists only as a solitary polyp)", "Nematocysts", "A mouth"],
    "correctAnswer": "A medusa stage (exists only as a solitary polyp)",
    "explanation": "Hydra lives in freshwater streams, bypassing the marine medusa phase completely. It reproduces asexually by budding or sexually in cold weather."
  },
  {
    "id": "coe-18",
    "sec": "Phylum Cnidaria",
    "question": "The floating Portuguese Man-of-War (Physalia) looks like a single jellyfish, but is actually a:",
    "options": ["Single giant polyp", "Single giant medusa", "Colony of highly specialized, cooperating hydrozoan individuals (zooids)", "Sessile coral"],
    "correctAnswer": "Colony of highly specialized, cooperating hydrozoan individuals (zooids)",
    "explanation": "Physalia is a siphonophore colony, composed of specialized zooids: a sail-like float (pneumatophore), feeding polyps (gastrozooids), stinging polyps (dactylozooids), and reproductive zooids (gonozooids)."
  },
  {
    "id": "coe-19",
    "sec": "Phylum Cnidaria",
    "question": "The large, gas-filled blue sail-like float of the Portuguese Man-of-War is the:",
    "options": ["Gastrozooid", "Dactylozooid", "Pneumatophore", "Nematocyst"],
    "correctAnswer": "Pneumatophore",
    "explanation": "The pneumatophore is a nitrogen-filled gas bag that floats on the surface, acting as a sail."
  },
  {
    "id": "coe-20",
    "sec": "Phylum Cnidaria",
    "question": "The specialized colonial zooids in Obelia responsible for feeding are:",
    "options": ["Gastrozooids (hydranths)", "Gonozooids (gonangia)", "Dactylozooids", "Medusae"],
    "correctAnswer": "Gastrozooids (hydranths)",
    "explanation": "Gastrozooids are feeding polyps equipped with tentacles and nematocysts to trap prey and nourish the colony."
  },
  {
    "id": "coe-21",
    "sec": "Phylum Cnidaria",
    "question": "The specialized colonial zooids in Obelia responsible for asexual budding of medusae are:",
    "options": ["Gastrozooids", "Gonozooids (gonangia)", "Pneumatophores", "Ocelli"],
    "correctAnswer": "Gonozooids (gonangia)",
    "explanation": "Gonozooids are reproductive, tentacle-free polyps that produce tiny medusae buds asexually, releasing them to carry out sexual cycles."
  },
  {
    "id": "coe-22",
    "sec": "Phylum Cnidaria",
    "question": "corals secrete a hard protective exoskeleton composed of:",
    "options": ["Chitin", "Silica", "Calcium carbonate", "Cellulose"],
    "correctAnswer": "Calcium carbonate",
    "explanation": "Scleractinian (stony) corals secrete cups of calcium carbonate (skeletogenesis) into which their delicate polyps retreat for safety."
  },
  {
    "id": "coe-23",
    "sec": "Phylum Cnidaria",
    "question": "Stony reef-building corals rely heavily on a symbiotic relationship with photosynthetic dinoflagellate algae called:",
    "options": ["Cyanobacteria", "Zooxanthellae", "Sargassum", "Diatoms"],
    "correctAnswer": "Zooxanthellae",
    "explanation": "Zooxanthellae live inside coral gastrodermal cells, providing corals with sugars and oxygen from photosynthesis, while receiving carbon dioxide and ammonia in return."
  },
  {
    "id": "coe-24",
    "sec": "Phylum Cnidaria",
    "question": "What happens to corals when water temperatures rise excessively, causing them to expel their symbiotic zooxanthellae?",
    "options": ["They grow faster", "Coral bleaching (turning white and starving)", "They morph into medusae", "They secrete heavy chitin"],
    "correctAnswer": "Coral bleaching (turning white and starving)",
    "explanation": "Stress causes corals to eject their colorful zooxanthellae. Lacking their primary food source, the white skeletons are exposed (bleaching), leading to coral death if stress persists."
  },
  {
    "id": "coe-25",
    "sec": "Phylum Cnidaria",
    "question": "The asexual process of medusa formation in Scyphozoa, where a polyp cuts horizontal segments to look like a stack of plates, is:",
    "options": ["Torsion", "Strobilation", "Binary fission", "Conjugation"],
    "correctAnswer": "Strobilation",
    "explanation": "Strobilation is transverse fission in scyphozoan polyps (scyphistomae), budding off immature saucers."
  },
  {
    "id": "coe-26",
    "sec": "Phylum Cnidaria",
    "question": "The immature, saucer-like young jellyfish budded off during strobilation is an:",
    "options": ["Ephyra", "Planula", "Veliger", "Ammocoete"],
    "correctAnswer": "Ephyra",
    "explanation": "Ephyrae are swimming, eight-lobed baby jellyfishes that feed in plankton and grow into adult medusae."
  },
  {
    "id": "coe-27",
    "sec": "Phylum Cnidaria",
    "question": "The sensory structures around the margins of jellyfish medusae containing balance organs (statocysts) and light sensors (ocelli) are:",
    "options": ["Nematocysts", "Rhopalia", "Cnidocils", "Spicules"],
    "correctAnswer": "Rhopalia",
    "explanation": "Rhopalia are specialized marginal sensory centers in scyphozoans and cubozoans coordinating balance and swimming direction."
  },
  {
    "id": "Phylum Cnidaria",
    "sec": "Phylum Cnidaria",
    "question": "The balance organ inside a rhopalium that uses a heavy mineral grain to sense gravity is a:",
    "options": ["Ocellus", "Statocyst (with statolith)", "Cnidocil", "Statoblast"],
    "correctAnswer": "Statocyst (with statolith)",
    "explanation": "The statolith shifts inside the ciliated statocyst pocket, letting the swimming jellyfish orient itself relative to gravity."
  },
  {
    "id": "coe-29",
    "sec": "Phylum Cnidaria",
    "question": "Cnidarians have no brain. How is their nervous system organized?",
    "options": ["A decentralized, bidirectional nerve net", "A dorsal hollow nerve cord", "A ladder-like cord pairs", "It is completely absent"],
    "correctAnswer": "A decentralized, bidirectional nerve net",
    "explanation": "Cnidarians possess a simple, diffuse nerve net spread throughout the epidermis and gastrodermis, conducting impulses in both directions."
  },
  {
    "id": "coe-30",
    "sec": "Phylum Cnidaria",
    "question": "The specialized cells in the gastrodermal lining of Hydra that engulf partially digested food particles are:",
    "options": ["Gland cells", "Nutritive-muscular cells", "Cnidocytes", "Archaeocytes"],
    "correctAnswer": "Nutritive-muscular cells",
    "explanation": "Nutritive-muscular cells have flagella to mix gut contents, and carry out intracellular digestion after gland cells liquefy food."
  },
  {
    "id": "coe-31",
    "sec": "Phylum Cnidaria",
    "question": "Hydra can move slowly by bending over, gripping a surface with its tentacles, and flipping, a movement called:",
    "options": ["Peristaltic crawl", "Somersaulting", "Jet propulsion", "Ciliary gliding"],
    "correctAnswer": "Somersaulting",
    "explanation": "Hydra somersaults by bending, attaching tentacles, releasing its basal disc, flipping over to attach the disc, and repeating."
  },
  {
    "id": "coe-32",
    "sec": "Phylum Cnidaria",
    "question": "What structure anchors a solitary polyp (like Hydra or a sea anemone) to rocks or mud?",
    "options": ["Basal disc (pedal disc)", "Scolex", "Basal spicules", "Byssus threads"],
    "correctAnswer": "Basal disc (pedal disc)",
    "explanation": "The basal disc is a muscular, mucus-secreting foot used to vacuum-cement the polyp to surfaces."
  },
  {
    "id": "coe-33",
    "sec": "Phylum Cnidaria",
    "question": "The solitary, highly colorful, predatory anthozoan polyps that lack skeletons and are often symbiotic with clownfishes are:",
    "options": ["Stony corals", "Sea anemones", "Portuguese Men-of-War", "Box jellyfishes"],
    "correctAnswer": "Sea anemones",
    "explanation": "Sea anemones are solitary anthozoan polyps, often participating in mutualistic symbioses with anemonefishes."
  },
  {
    "id": "coe-34",
    "sec": "Phylum Cnidaria",
    "question": "The stinging neurotoxin of the Australian Sea Wasp (Chironex fleckeri), a box jellyfish, is lethal because it:",
    "options": ["Causes massive red blood cell destruction and rapid cardiac arrest within minutes", "Dissolves the skin", "Blocks digestion", "Causes immediate blindness"],
    "correctAnswer": "Causes massive red blood cell destruction and rapid cardiac arrest within minutes",
    "explanation": "Chironex fleckeri venom is a highly cardiotoxic protein that opens calcium channels in heart muscles, triggering spasms and death."
  },
  {
    "id": "coe-35",
    "sec": "Phylum Cnidaria",
    "question": "The shelf-like membrane that folds inward along the margins of hydrozoan medusae, narrowing the water exit to increase swimming efficiency, is the:",
    "options": ["Velum", "Operculum", "Mantle", "Pneumatophore"],
    "correctAnswer": "Velum",
    "explanation": "The velum is a diagnostic feature of hydrozoan medusae (hydromedusae), acting like a jet nozzle."
  },
  {
    "id": "coe-36",
    "sec": "Phylum Cnidaria",
    "question": "Scyphozoan jellyfishes (scyphomedusae) lack which of these structures?",
    "options": ["Gastrovascular cavity", "Mesoglea", "Velum", "Tentacles"],
    "correctAnswer": "Velum",
    "explanation": "True jellyfishes (Scyphozoa) are 'avelate', meaning they completely lack a velum."
  },
  {
    "id": "coe-37",
    "sec": "Phylum Cnidaria",
    "question": "Which of these represents a colonial, warm-water hydrozoan that looks like a miniature fan or fern, commonly called sea firs?",
    "options": ["Hydra", "Obelia", "Plumularia", "Sertularia"],
    "correctAnswer": "Obelia",
    "explanation": "Obelia colonies form branching, plant-like hydroid forms attached to seaweeds and rocks."
  },
  {
    "id": "coe-38",
    "sec": "Phylum Cnidaria",
    "question": "What is the non-living, chitinous protective sheath secreted around Obelia branches?",
    "options": ["Coenosarc", "Perisarc", "Mantle", "Cuticle"],
    "correctAnswer": "Perisarc",
    "explanation": "The perisarc is a clear protective casing of chitin that shields the living cellular core (coenosarc) of the colony."
  },
  {
    "id": "coe-39",
    "sec": "Phylum Cnidaria",
    "question": "Hydra exhibits what remarkable aging characteristic under optimal conditions?",
    "options": ["They die after exactly 2 weeks", "They do not show any signs of biological aging (senescence-free)", "They morph into trees", "They lose their tentacles after mating"],
    "correctAnswer": "They do not show any signs of biological aging (senescence-free)",
    "explanation": "Due to a continuous renewal of stem cells (interstitial cells), Hydra is considered biologically immortal under steady laboratory conditions."
  },
  {
    "id": "coe-40",
    "sec": "Phylum Cnidaria",
    "question": "What are the pluripotent stem cells in Hydra that continuously replace neurons, gland cells, and cnidocytes?",
    "options": ["Archaeocytes", "Interstitial cells (I-cells)", "Amebocytes", "Porocytes"],
    "correctAnswer": "Interstitial cells (I-cells)",
    "explanation": "I-cells are fast-dividing stem cells found in Hydra epidermis that replenish somatic tissues."
  },
  {
    "id": "coe-41",
    "sec": "Phylum Cnidaria",
    "question": "The large, heavy siphonophore colony that floats in oceanic swarms and has highly painful nematocysts is the:",
    "options": ["Hydra", "Portuguese Man-of-War (Physalia)", "Obelia", "Sea anemone"],
    "correctAnswer": "Portuguese Man-of-War (Physalia)",
    "explanation": "Physalia is a pelagic colonial hydrozoan capable of inflicting painful stings on swimmers."
  },
  {
    "id": "coe-42",
    "sec": "Phylum Cnidaria",
    "question": "Which of these represents a circular, limestone coral reef enclosing a central shallow lagoon with no central island?",
    "options": ["Fringing reef", "Barrier reef", "Atoll", "Patch reef"],
    "correctAnswer": "Atoll",
    "explanation": "Atolls are circular oceanic reefs formed around volcanic islands that have subsided completely beneath the sea."
  },
  {
    "id": "coe-43",
    "sec": "Phylum Cnidaria",
    "question": "Who correctly proposed the theory of coral atoll formation via volcanic subsidence?",
    "options": ["Carolus Linnaeus", "Charles Darwin", "Gregor Mendel", "Robert Hooke"],
    "correctAnswer": "Charles Darwin",
    "explanation": "In 1842, Charles Darwin published his correct deduction that coral reefs grow upward around sinking volcanic peaks, forming atolls."
  },
  {
    "id": "coe-44",
    "sec": "Phylum Cnidaria",
    "question": "What type of coral reef directly hugs the shore of a volcanic island or continental margin?",
    "options": ["Fringing reef", "Barrier reef", "Atoll", "Platform reef"],
    "correctAnswer": "Fringing reef",
    "explanation": "Fringing reefs grow directly adjacent to coastlines, with no deep lagoon separating them from land."
  },
  {
    "id": "coe-45",
    "sec": "Phylum Cnidaria",
    "question": "What type of coral reef runs parallel to a coast but is separated from it by a wide, deep channel or lagoon?",
    "options": ["Fringing reef", "Barrier reef", "Atoll", "Patch reef"],
    "correctAnswer": "Barrier reef",
    "explanation": "Barrier reefs (like the Great Barrier Reef) are separated from land by expansive lagoons."
  },
  {
    "id": "coe-46",
    "sec": "Phylum Cnidaria",
    "question": "The muscular cells in Cnidarians are unique because they are:",
    "options": ["True skeletal muscle fibers", "Epitheliomuscular cells (epidermal cells with contractile bases)", "Lacking entirely", "Driven by copper ions"],
    "correctAnswer": "Epitheliomuscular cells (epidermal cells with contractile bases)",
    "explanation": "Epitheliomuscular cells have a dual role, forming the protective outer skin sheet and containing myofibril bases for contraction."
  },
  {
    "id": "coe-47",
    "sec": "Phylum Cnidaria",
    "question": "The cells in the gastrodermis of cnidarians that secrete enzymes to digest prey in the gastrovascular cavity are:",
    "options": ["Gland cells", "Nutritive cells", "Cnidocytes", "Porocytes"],
    "correctAnswer": "Gland cells",
    "explanation": "Gland cells secrete digestive proteins to degrade food in the gastrovascular cavity (extracellular digestion)."
  },
  {
    "id": "coe-48",
    "sec": "Phylum Cnidaria",
    "question": "Hydra is a predator that feeds primarily on small aquatic invertebrates like:",
    "options": ["Daphnia and Cyclops water fleas", "Microscopic bacteria", "Sponge spicules", "Water plants"],
    "correctAnswer": "Daphnia and Cyclops water fleas",
    "explanation": "Hydra traps and paralyzes daphniids and copepods with its tentacles before swallowing them."
  },
  {
    "id": "coe-49",
    "sec": "Phylum Cnidaria",
    "question": "The colonial, branched corals with soft, leather-like structures and eight pinnate tentacles on each polyp are:",
    "options": ["Stony corals", "Octocorals (soft corals / sea fans)", "Sea anemones", "Hydroids"],
    "correctAnswer": "Octocorals (soft corals / sea fans)",
    "explanation": "Subclass Octocorallia (or Alcyonaria) includes soft corals, sea pens, and sea fans, distinguished by eight branched tentacles."
  },
  {
    "id": "coe-50",
    "sec": "Phylum Cnidaria",
    "question": "Which of these is not a characteristic of Cnidarians?",
    "options": ["Bilateral symmetry", "Diploblastic development", "Decentralized nerve net", "Cnidocyte stinging cells"],
    "correctAnswer": "Bilateral symmetry",
    "explanation": "Bilateral symmetry is NOT a standard adult cnidarian feature (they are radially symmetrical)."
  }
];
