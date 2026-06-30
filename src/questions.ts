/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Question } from './types';

export const BANK: Question[] = [
  {
    id: "q-1",
    sec: "Ethers",
    question: "The polarity of ether can be attributed to ___",
    options: ["the hydrogen bond", "the steric effect", "the dipole moment", "the mesomeric effect"],
    correctAnswer: "the dipole moment",
    explanation: "Ethers have a bent C-O-C structure with an angle of about 110°. Due to the electronegativity difference between carbon and oxygen, the individual polar C-O bonds combine to give the molecule a net dipole moment."
  },
  {
    id: "q-2",
    sec: "Introduction to Organic Chemistry",
    question: "The bonding system in most organic compounds is ___",
    options: ["covalent", "dative", "electrovalent", "hydrogen"],
    correctAnswer: "covalent",
    explanation: "Since carbon has four valence electrons and typically shares them with other non-metals (like H, O, N), organic compounds are predominantly characterized by covalent bonding."
  },
  {
    id: "q-3",
    sec: "Periodic Table & Inorganic-Organic Links",
    question: "The following are true EXCEPT that group VIA contains ___",
    options: ["a non metal", "a metal", "two semi metals", "two non metals"],
    correctAnswer: "a metal",
    explanation: "Group VIA (Group 16, oxygen family) consists of oxygen, sulfur (non-metals), selenium, tellurium (metalloids/semi-metals), and polonium (radioactive metalloid). It does not contain any classic transition/reactive metals."
  },
  {
    id: "q-4",
    sec: "Ethers",
    question: "An epoxide is much more reactive in nucleophilic substitution reactions compared to an ether because ___",
    options: ["chain scissioning", "ring opening", "of the incoming electrophile", "of the strain in carbon-carbon bond"],
    correctAnswer: "ring opening",
    explanation: "Epoxides are three-membered rings containing high angle strain (~60° instead of the normal tetrahedral 109.5°). This strain makes them highly reactive, driving them to undergo nucleophilic ring opening reactions readily."
  },
  {
    id: "q-5",
    sec: "Ethers",
    question: "When one group of an ether has no simple name, the ether is named as an ___",
    options: ["ethoxy derivative", "alkoxy derivative", "epoxy derivative", "ether derivative"],
    correctAnswer: "alkoxy derivative",
    explanation: "In systematic IUPAC nomenclature, when an ether substituent cannot be easily named, the smaller alkyl-O- group is treated as an 'alkoxy' substituent on the parent alkane chain."
  },
  {
    id: "q-6",
    sec: "Aromatic Compounds",
    question: "One mole of a hydrocarbon contains 8 g of hydrogen. If the relative molecular mass is 92, the hydrocarbon is ___",
    options: ["aromatic", "an alkane", "an alkene", "an alkyne"],
    correctAnswer: "aromatic",
    explanation: "1 mole of the hydrocarbon has a mass of 92 g and contains 8 g of hydrogen (8 moles of H). The carbon mass is 92 - 8 = 84 g, which equals 7 moles of C (84/12). The molecular formula C7H8 belongs to toluene (methylbenzene), an aromatic hydrocarbon."
  },
  {
    id: "q-7",
    sec: "Alcohols",
    question: "The product of elimination reaction in alcohol is ___",
    options: ["alkyne", "alkene", "alkane", "alkanoate"],
    correctAnswer: "alkene",
    explanation: "Acid-catalyzed dehydration of alcohols removes a water molecule (elimination) to introduce a double bond, converting the alcohol into an alkene."
  },
  {
    id: "q-8",
    sec: "Alkynes",
    question: "The final product of the reaction of propyne with hydrogen bromide is ___",
    options: ["CH₃–C(Br)=CH₂", "CH₃C(Br)₂CH₃", "CH₃CH₂CH(Br)₂", "CH₃CH(Br)CH₂Br"],
    correctAnswer: "CH₃C(Br)₂CH₃",
    explanation: "Following Markovnikov's rule twice, the addition of two equivalents of HBr to propyne adds both hydrogen atoms to the terminal carbon and both bromine atoms to the central carbon, yielding 2,2-dibromopropane."
  },
  {
    id: "q-9",
    sec: "Carbohydrates",
    question: "The following are isomers of D-glucose EXCEPT ___",
    options: ["D-Sorbitol", "L-glucose", "D-galactose", "D-fructose"],
    correctAnswer: "D-Sorbitol",
    explanation: "D-glucose, L-glucose, D-galactose, and D-fructose all share the C6H12O6 molecular formula. D-Sorbitol is a reduced sugar alcohol with the formula C6H14O6, so it is not an isomer."
  },
  {
    id: "q-10",
    sec: "Aldehydes & Ketones",
    question: "Which of the following compounds will NOT give a positive iodoform reaction?",
    options: ["CH₃CHO", "CH₃CH₂COCH₂CH₃", "CH₃COCH₃", "CH₃CH₂OH"],
    correctAnswer: "CH₃CH₂COCH₂CH₃",
    explanation: "The iodoform test requires a methyl carbonyl group (CH3CO-) or a secondary methyl carbinol group. Pentan-3-one (CH3CH2COCH2CH3) does not contain a methyl group directly attached to the carbonyl carbon, so it fails the test."
  },
  {
    id: "q-11",
    sec: "Stereochemistry",
    question: "The maximum number of stereoisomers for a compound with 3 chiral centres is ___",
    options: ["4", "6", "8", "9"],
    correctAnswer: "8",
    explanation: "The maximum number of stereoisomers is calculated using the formula 2^n, where n is the number of chiral centers. For 3 chiral centers, 2^3 = 8."
  },
  {
    id: "q-12",
    sec: "Carbohydrates",
    question: "The test for reducing sugar with Benedict solution is an example of ___",
    options: ["Addition / reduction reaction", "Oxidation reaction", "Condensation reaction", "Dehydration"],
    correctAnswer: "Oxidation reaction",
    explanation: "The reducing sugar is oxidized by the Benedict reagent (cupric Cu2+ ions), while the copper is reduced to cuprous Cu+ oxide. This represents an oxidation reaction of the sugar."
  },
  {
    id: "q-13",
    sec: "Carbohydrates",
    question: "The product of the following reaction is: C₁₂H₂₂O₁₁ + Con H₂SO₄",
    options: ["Carbon", "Water", "Carbon and water", "C₂H₆"],
    correctAnswer: "Carbon and water",
    explanation: "Concentrated H2SO4 is an extremely strong dehydrating agent that rips out hydrogen and oxygen in a 2:1 ratio from sucrose (C12H22O11), producing pure elemental carbon (black char) and steam/water."
  },
  {
    id: "q-14",
    sec: "Aldehydes & Ketones",
    question: "The compound which forms methanol and sodium methanoate when treated with conc. NaOH is ___",
    options: ["Ethanal", "Methane", "Propanal", "Methanal"],
    correctAnswer: "Methanal",
    explanation: "This is the Cannizzaro reaction. Aldehydes with no alpha-hydrogens (such as methanal) undergo self-redox (disproportionation) in concentrated alkaline solutions to form an alcohol and a carboxylic acid salt."
  },
  {
    id: "q-15",
    sec: "Aromatic Compounds",
    question: "Which of the following favours alkylation of benzene ___",
    options: ["Stability effect", "Electrophilic effect", "Carbonium effect", "Inductive effect"],
    correctAnswer: "Electrophilic effect",
    explanation: "Alkylation of benzene is a classic Electrophilic Aromatic Substitution (EAS) reaction, which is initiated by the electrophilic attack of a carbocation (carbonium ion) on the electron-rich benzene ring."
  },
  {
    id: "q-16",
    sec: "Purification & Characterization",
    question: "The presence of carbon and hydrogen in an organic compound can be estimated by ___ method",
    options: ["Carius", "Kjeldahl", "Leibig combustion", "Robbinson anulation"],
    correctAnswer: "Leibig combustion",
    explanation: "The Liebig combustion method determines carbon and hydrogen content quantitatively by burning the organic compound with CuO, producing CO2 and H2O, which are collected and weighed."
  },
  {
    id: "q-17",
    sec: "Purification & Characterization",
    question: "Infrared spectroscopy is basically meant for the analysis of ___",
    options: ["ions", "cations", "Functional group", "Wavelength of organic compound"],
    correctAnswer: "Functional group",
    explanation: "IR spectroscopy measures bond stretching and bending molecular vibrations, allowing identification of specific covalent bonds and functional groups (e.g., C=O, O-H, N-H)."
  },
  {
    id: "q-18",
    sec: "Carbohydrates",
    question: "The principle of Benedict's test is that when reducing sugars are heated in the presence of ...(i)....., they get converted to powerful reducing compounds known as ....(ii).... which reduce the ......(iii)..... present in the Benedict's reagent to .....(iv)..... which get precipitated. What are the missing items?",
    options: [
      "(i) an alkali, (ii) enediols, (iii) cupric ions (Cu²⁺), (iv) cuprous ions (Cu⁺)",
      "(i) an acid, (ii) ethylene, (iii) cupric ions (Cu²⁺), (iv) cuprous ions (Cu⁺)",
      "(i) an alkali, (ii) ethylene, (iii) cupric ions (Cu²⁺), (iv) cuprous ions (Cu⁺)",
      "(i) an acid, (ii) enediols, (iii) cupric ions (Cu⁺), (iv) cuprous ions (Cu²⁺)"
    ],
    correctAnswer: "(i) an alkali, (ii) enediols, (iii) cupric ions (Cu²⁺), (iv) cuprous ions (Cu⁺)",
    explanation: "In alkali, reducing sugars tautomerize into enediols, which easily reduce cupric ions (Cu²⁺) complexed in Benedict's solution into an insoluble cuprous ion (Cu⁺) precipitate (as red Cu₂O)."
  },
  {
    id: "q-19",
    sec: "Reaction Mechanisms",
    question: "In organic chemistry, reaction mechanism entails a ___ reaction process of how reactants are converted to product",
    options: ["Step-by-step", "fast", "transformational", "bond breaking"],
    correctAnswer: "Step-by-step",
    explanation: "A reaction mechanism describes the detailed, step-by-step sequence of elementary reactions, intermediates, bond breakages, and formations that transform reactants into products."
  },
  {
    id: "q-20",
    sec: "Alkanes",
    question: "Which of these components has the lowest boiling point — Hexane, Butanone, 1-Decanol, 1-Pentanol, Methane?",
    options: ["Hexane", "Methane", "Butanone", "1-Pentanol"],
    correctAnswer: "Methane",
    explanation: "Methane (CH4) is a tiny single-carbon alkane with negligible intermolecular forces (only weak London dispersion forces), boiling at -161.5°C, which is by far the lowest among the options."
  },
  {
    id: "q-21",
    sec: "Alcohols",
    question: "CH₃CH₂CH₂C(CH₃)₂CH₂OH is ___",
    options: ["2,2-dimethyl-1-butanol", "2-methyl-1-butan-1-ol", "2,2-dimethyl-2-butanol", "2,2-dimethyl-1-pentanol"],
    correctAnswer: "2,2-dimethyl-1-pentanol",
    explanation: "The parent chain has 5 carbons with the primary -OH group on carbon-1. Two methyl substituents are located on carbon-2, giving the IUPAC name 2,2-dimethyl-1-pentanol."
  },
  {
    id: "q-22",
    sec: "Alkenes",
    question: "Uncontrolled hydrogenation of ethyne yields ___",
    options: ["ethane", "ethene", "propane", "benzene"],
    correctAnswer: "ethane",
    explanation: "Without a poisoned catalyst like Lindlar's, hydrogenation of ethyne goes all the way to complete saturation, yielding ethane."
  },
  {
    id: "q-23",
    sec: "Reaction Mechanisms",
    question: "The rate determining step of an organic reaction is the ___ reaction rate?",
    options: ["slow", "fast", "intermediate", "equilibrium"],
    correctAnswer: "slow",
    explanation: "The overall rate of any multi-step reaction is governed by its slowest step, which is called the rate-determining step."
  },
  {
    id: "q-24",
    sec: "Periodic Table & Inorganic-Organic Links",
    question: "The most reactive among the following elements is ___",
    options: ["Li", "Be", "B", "C"],
    correctAnswer: "Li",
    explanation: "Lithium is an alkali metal (Group 1). Alkali metals have the lowest ionization energies and react most rapidly by losing their single valence electron."
  },
  {
    id: "q-25",
    sec: "Carbohydrates",
    question: "Which of the following can be used to elongate a sugar chain?",
    options: ["NH₂OH", "HCN", "NaBH₄", "D and B"],
    correctAnswer: "HCN",
    explanation: "In the Kiliani-Fischer synthesis, hydrogen cyanide (HCN) acts as a nucleophile, adding a carbon atom to the aldehyde group of an aldose to elongate the carbon chain."
  },
  {
    id: "q-26",
    sec: "Ethers",
    question: "The general molecular formula of ethers is ___",
    options: ["CₙH₂ₙ₊₂O", "CₙH₂ₙ₊₁O", "CₙH₂ₙO", "CₙH₂ₙ₋₂O"],
    correctAnswer: "CₙH₂ₙ₊₂O",
    explanation: "Ethers are acyclic saturated mono-oxygenated compounds. They share the general formula CnH2n+2O with saturated mono-alcohols."
  },
  {
    id: "q-27",
    sec: "Periodic Table & Inorganic-Organic Links",
    question: "The only non-metal in group IVA is ___",
    options: ["C", "Si", "Ge", "Cl"],
    correctAnswer: "C",
    explanation: "Group IVA (Group 14) contains carbon (non-metal), silicon and germanium (metalloids), tin and lead (metals). Carbon is the only non-metal. (Chlorine is in group VIIA)."
  },
  {
    id: "q-28",
    sec: "Purification & Characterization",
    question: "A student obtains a solid compound that melts over a wide range (e.g., 105–112°C). This indicates that the compound is ___",
    options: ["Pure", "Impure", "Highly volatile", "A mixture of liquids"],
    correctAnswer: "Impure",
    explanation: "A wide melting temperature range is a clear indicator of an impure solid, as impurities disrupt the lattice and depress/expand the melting transition."
  },
  {
    id: "q-29",
    sec: "Periodic Table & Inorganic-Organic Links",
    question: "The gas produced when sodium metal is dropped in water is ___",
    options: ["H₂", "O₂", "N₂", "CO₂"],
    correctAnswer: "H₂",
    explanation: "Sodium reacts vigorously and exothermically with water to liberate highly flammable hydrogen gas: 2Na + 2H₂O -> 2NaOH + H₂."
  },
  {
    id: "q-30",
    sec: "Amines",
    question: "Which of the following is a primary amine?",
    options: ["1,3-pentane diamine", "N–ethyl–N–Methylamine", "Triethylamine", "N,N,3,5-Tetramethylamine"],
    correctAnswer: "1,3-pentane diamine",
    explanation: "Primary amines contain nitrogen bonded to only one alkyl carbon (possessing an -NH2 group). 1,3-pentane diamine contains two such primary amine functional groups."
  },
  {
    id: "q-31",
    sec: "Alkenes",
    question: "Consider the reaction: CH₃CH₂CH=CH₂ → CH₃CH₂CH(OH)CH₂OH. The reagent used for this conversion is ___",
    options: ["aqueous NH₃", "aqueous NaOH", "dil. H₂SO₄", "acidified KMnO₄"],
    correctAnswer: "acidified KMnO₄",
    explanation: "Oxidizing alkenes with cold dilute alkaline or acidified KMnO4 causes dihydroxylation, adding two -OH groups across the double bond to form a diol."
  },
  {
    id: "q-32",
    sec: "Isomerism",
    question: "When isomers of the same compound have different functional groups, such is said to have undergone ___",
    options: ["skeletal isomerism", "functional isomerism", "positional isomerism", "optical isomerism"],
    correctAnswer: "functional isomerism",
    explanation: "Functional group isomerism is when structural isomers differ in the functional groups present in the molecules (e.g., alcohols vs ethers)."
  },
  {
    id: "q-33",
    sec: "Carboxylic Acids",
    question: "(CH₃CO)₂O is ___",
    options: ["An ether", "An ester", "An anhydride", "An amide"],
    correctAnswer: "An anhydride",
    explanation: "(CH3CO)2O represents acetic anhydride, which belongs to the class of acid anhydrides derived by dehydrating carboxylic acids."
  },
  {
    id: "q-34",
    sec: "Ethers",
    question: "Formation of ether from an organohalide and a deprotonated alcohol is referred to as?",
    options: ["alkoxide synthesis", "organohalide synthesis", "Williamson ether synthesis", "Beckmann ether synthesis"],
    correctAnswer: "Williamson ether synthesis",
    explanation: "The reaction between a sodium alkoxide (deprotonated alcohol) and a primary alkyl halide (organohalide) to produce an ether is called the Williamson ether synthesis."
  },
  {
    id: "q-35",
    sec: "Purification & Characterization",
    question: "One of the following is NOT a type of spectrum produced by spectroscopy ___",
    options: ["Continuous spectrum", "Metastable spectrum", "Emission lines", "Absorption spectrum"],
    correctAnswer: "Metastable spectrum",
    explanation: "The primary formats of light spectra are absorption, emission, and continuous. 'Metastable' refers to unstable energy states rather than a broad spectroscopic category."
  },
  {
    id: "q-36",
    sec: "Alkynes",
    question: "When a lump of calcium carbide is dropped into water in a container and the gas produced is passed through a jet and then lighted, the flame produced is called ___",
    options: ["oxymethane flame", "oxyethane flame", "oxyethene flame", "oxyethyne flame"],
    correctAnswer: "oxyethyne flame",
    explanation: "Calcium carbide + water yields ethyne (acetylene). When combusted in oxygen, it yields an extremely hot oxyethyne flame used for industrial metal welding."
  },
  {
    id: "q-37",
    sec: "Amines",
    question: "Secondary and aromatic amines react with HONO to yield ___",
    options: ["Alcohol and N₂ gas", "Nitrosamine", "Salt", "B and C"],
    correctAnswer: "Nitrosamine",
    explanation: "Nitrous acid (HONO) reacts with secondary amines (aliphatic or aromatic) to form stable, typically yellow-colored N-nitrosamine compounds."
  },
  {
    id: "q-38",
    sec: "Alkanes",
    question: "Heating of sodalime with sodium butanoate produces ___",
    options: ["Propane", "Butane", "Pentane", "Hexane"],
    correctAnswer: "Propane",
    explanation: "Decarboxylation with sodalime (NaOH/CaO) removes the carboxyl group from the sodium salt of a carboxylic acid, producing an alkane with one fewer carbon atom. Sodium butanoate (4 carbons) gives propane (3 carbons)."
  },
  {
    id: "q-39",
    sec: "Stereochemistry",
    question: "If a compound has observed rotation +12°, concentration 2 g/mL, and path length 1 dm, its specific rotation is ___",
    options: ["+6°", "+12°", "+24°", "+3°"],
    correctAnswer: "+6°",
    explanation: "Specific rotation [α] = observed rotation / (concentration × path length). Plugging in the values: +12° / (2 × 1) = +6°."
  },
  {
    id: "q-40",
    sec: "Alkenes",
    question: "The process of converting vegetable oil to margarine involves ___",
    options: ["Oxidation", "Esterification", "Hydrogenation", "Hydrolysis"],
    correctAnswer: "Hydrogenation",
    explanation: "Converting liquid vegetable oils (unsaturated fats) into solid margarine (saturated fats) is done by catalytic hydrogenation, adding hydrogen across carbon-carbon double bonds."
  },
  {
    id: "q-41",
    sec: "Alkanes",
    question: "Which of the following is a characteristic reaction of alkanes?",
    options: ["Addition reaction", "Elimination reaction", "Substitution reaction", "Condensation reaction"],
    correctAnswer: "Substitution reaction",
    explanation: "Alkanes are saturated hydrocarbons and cannot undergo addition. Instead, their characteristic reactions are free radical substitutions (like chlorination under UV light)."
  },
  {
    id: "q-42",
    sec: "Alkenes",
    question: "The characteristic reaction of alkenes is ___",
    options: ["Electrophilic addition", "Nucleophilic substitution", "Free radical substitution", "Elimination reaction"],
    correctAnswer: "Electrophilic addition",
    explanation: "The pi-bond in alkenes acts as a rich electron source, attracting electrophiles. Therefore, electrophilic addition is the characteristic reaction of alkenes."
  },
  {
    id: "q-43",
    sec: "Alkenes",
    question: "Markovnikov's rule states that in addition of HX to an alkene, the hydrogen adds to the carbon with ___",
    options: ["Fewer hydrogen atoms", "More hydrogen atoms", "A double bond only", "A triple bond"],
    correctAnswer: "More hydrogen atoms",
    explanation: "Markovnikov's rule states that the electrophilic addition of an unsymmetrical reagent to an unsymmetrical alkene places the hydrogen on the carbon that already has more hydrogen atoms, forming the more stable carbocation intermediate."
  },
  {
    id: "q-44",
    sec: "Alkenes",
    question: "Which reagent is used to test for the presence of a C=C double bond?",
    options: ["Benedict's solution", "Fehling's solution", "Bromine water", "Tollens' reagent"],
    correctAnswer: "Bromine water",
    explanation: "Bromine water (Br₂/H₂O) adds across C=C double bonds in alkenes. Rapid decolorization of the orange-brown bromine water tests positive for unsaturation."
  },
  {
    id: "q-45",
    sec: "Alkenes",
    question: "When bromine water is added to an alkene, the bromine water ___",
    options: ["Turns blue", "Remains orange", "Is decolourised", "Turns green"],
    correctAnswer: "Is decolourised",
    explanation: "Because bromine molecules add across the double bond of an alkene, the orange-brown color of bromine is lost, meaning it is decolourised."
  },
  {
    id: "q-46",
    sec: "Alkenes",
    question: "Ozonolysis of alkenes is used to ___",
    options: ["Add hydrogen across a double bond", "Polymerise alkene molecules", "Determine the position of double bonds in a molecule", "Convert alkenes to alkanes"],
    correctAnswer: "Determine the position of double bonds in a molecule",
    explanation: "By breaking the double bond and analyzing the carbonyl fragments (aldehydes or ketones) formed, chemists can reconstruct and determine the original position of the double bond."
  },
  {
    id: "q-47",
    sec: "Alkenes",
    question: "The reaction of an alkene with cold concentrated H₂SO₄ followed by water produces ___",
    options: ["An ether", "An aldehyde", "An alcohol", "A carboxylic acid"],
    correctAnswer: "An alcohol",
    explanation: "Addition of cold concentrated sulfuric acid across an alkene forms an alkyl hydrogen sulfate, which on hydrolysis with warm water yields an alcohol (indirect hydration)."
  },
  {
    id: "q-48",
    sec: "Alkanes",
    question: "Cracking of petroleum is used to ___",
    options: ["Purify crude oil", "Convert large hydrocarbon molecules into smaller, more useful ones", "Remove sulphur from petroleum", "Increase the boiling point of petroleum fractions"],
    correctAnswer: "Convert large hydrocarbon molecules into smaller, more useful ones",
    explanation: "Industrial cracking breaks heavy, long-chain hydrocarbons into shorter-chain hydrocarbons (like gasoline and chemical feedstocks) which are of higher demand."
  },
  {
    id: "q-49",
    sec: "Alkanes",
    question: "Which of the following is a product of complete combustion of a hydrocarbon?",
    options: ["CO and H₂O", "C and H₂O", "CO₂ and H₂O", "CO₂ and H₂"],
    correctAnswer: "CO₂ and H₂O",
    explanation: "In the presence of excess oxygen, any hydrocarbon undergoes complete oxidation to form carbon dioxide (CO₂) and water vapor (H₂O)."
  },
  {
    id: "q-50",
    sec: "Aromatic Compounds",
    question: "The process by which benzene reacts with a halogen in the presence of a Lewis acid catalyst is called ___",
    options: ["Nucleophilic addition", "Free radical substitution", "Electrophilic aromatic substitution", "Elimination reaction"],
    correctAnswer: "Electrophilic aromatic substitution",
    explanation: "Halogenation of benzene requires a Lewis acid (like FeBr₃ or AlCl₃) to polarize the halogen into a powerful electrophile, which then undergoes electrophilic aromatic substitution (EAS)."
  },
  {
    id: "q-51",
    sec: "Alcohols",
    question: "Which of the following is a secondary alcohol?",
    options: ["CH₃OH", "CH₃CH₂OH", "(CH₃)₂CHOH", "(CH₃)₃COH"],
    correctAnswer: "(CH₃)₂CHOH",
    explanation: "In isopropanol ((CH₃)₂CHOH), the carbon bonded to the hydroxyl (-OH) group is bonded to two other carbons, making it a secondary alcohol."
  },
  {
    id: "q-52",
    sec: "Alcohols",
    question: "A tertiary alcohol on oxidation gives ___",
    options: ["An aldehyde", "A ketone", "Does not oxidise easily", "A carboxylic acid"],
    correctAnswer: "Does not oxidise easily",
    explanation: "Tertiary alcohols lack an alpha-hydrogen on the carbon bearing the hydroxyl group, making them highly resistant to normal oxidation without breaking carbon-carbon bonds."
  },
  {
    id: "q-53",
    sec: "Alcohols",
    question: "A primary alcohol on oxidation with acidified K₂Cr₂O₇ gives ___",
    options: ["A ketone", "An aldehyde, then a carboxylic acid", "An ether", "An alkene"],
    correctAnswer: "An aldehyde, then a carboxylic acid",
    explanation: "Oxidizing a primary alcohol initially forms an aldehyde, which rapidly undergoes further oxidation to a carboxylic acid in aqueous acidic conditions."
  },
  {
    id: "q-54",
    sec: "Alcohols",
    question: "Dehydration of alcohols produces ___",
    options: ["Alkanes", "Aldehydes", "Alkenes", "Carboxylic acids"],
    correctAnswer: "Alkenes",
    explanation: "When heated in the presence of strong acid catalysts, alcohols lose water (dehydrate) to form carbon-carbon double bonds, producing alkenes."
  },
  {
    id: "q-55",
    sec: "Alcohols",
    question: "Lucas test is used to distinguish between ___",
    options: ["Aldehydes and ketones", "Primary and secondary alcohols only", "Primary, secondary, and tertiary alcohols", "Alcohols and ethers"],
    correctAnswer: "Primary, secondary, and tertiary alcohols",
    explanation: "The Lucas reagent (HCl and ZnCl2) reacts with primary, secondary, and tertiary alcohols at different rates based on carbocation stability, which distinguishes them."
  },
  {
    id: "q-56",
    sec: "Alcohols",
    question: "Which alcohol reacts fastest with Lucas reagent?",
    options: ["Primary alcohol", "Secondary alcohol", "Tertiary alcohol", "All react at the same rate"],
    correctAnswer: "Tertiary alcohol",
    explanation: "Tertiary alcohols undergo fastest SN1 substitution because they form highly stable tertiary carbocations, causing immediate turbidity at room temperature."
  },
  {
    id: "q-57",
    sec: "Alcohols",
    question: "The reaction between an alcohol and a carboxylic acid to form an ester is called ___",
    options: ["Hydrolysis", "Saponification", "Esterification", "Oxidation"],
    correctAnswer: "Esterification",
    explanation: "This condensation reaction, catalyzed by an acid, forms an ester and is widely known as Fischer esterification."
  },
  {
    id: "q-58",
    sec: "Ethers",
    question: "Ethers are generally ___",
    options: ["Highly reactive compounds", "Strong acids", "Relatively unreactive and used as solvents", "Strong bases"],
    correctAnswer: "Relatively unreactive and used as solvents",
    explanation: "Due to the lack of highly reactive polar bonds or acidic protons (unlike alcohols), ethers are relatively inert and make excellent solvents for organic reactions."
  },
  {
    id: "q-59",
    sec: "Aldehydes & Ketones",
    question: "Tollens' reagent is used to distinguish between ___",
    options: ["Alcohols and ethers", "Aldehydes and ketones", "Alkanes and alkenes", "Primary and secondary alcohols"],
    correctAnswer: "Aldehydes and ketones",
    explanation: "Tollens' reagent easily oxidizes aldehydes into carboxylate salts while depositing a silver mirror, but does not oxidize ketones under identical conditions."
  },
  {
    id: "q-60",
    sec: "Aldehydes & Ketones",
    question: "A positive Tollens' test produces ___",
    options: ["A blue precipitate", "A red precipitate", "A silver mirror on the test tube", "A yellow precipitate"],
    correctAnswer: "A silver mirror on the test tube",
    explanation: "The reduction of complexed silver ions ([Ag(NH3)2]+) by an aldehyde plate deposits elemental silver metal onto the glass walls, forming a silver mirror."
  },
  {
    id: "q-61",
    sec: "Aldehydes & Ketones",
    question: "Fehling's solution gives a ___ precipitate with aldehydes.",
    options: ["White", "Blue", "Brick-red", "Yellow"],
    correctAnswer: "Brick-red",
    explanation: "Fehling's solution contains Cu2+ complexed with tartrate. Aliphatic aldehydes reduce these blue cupric ions into brick-red cuprous oxide (Cu₂O) precipitate."
  },
  {
    id: "q-62",
    sec: "Aldehydes & Ketones",
    question: "Which of the following does NOT give a positive Fehling's test?",
    options: ["Glucose", "Methanal", "Acetone", "Ethanal"],
    correctAnswer: "Acetone",
    explanation: "Fehling's test is selective for reducing sugars and aldehydes. Acetone is a ketone and cannot be easily oxidized by mild reagents like Fehling's solution."
  },
  {
    id: "q-63",
    sec: "Carboxylic Acids",
    question: "Carboxylic acids are characterized by the functional group ___",
    options: ["–OH", "–COOH", "–CHO", "–CO–"],
    correctAnswer: "–COOH",
    explanation: "The carboxyl group (–COOH) consists of a carbonyl carbon directly bonded to a hydroxyl group, characterizing all carboxylic acids."
  },
  {
    id: "q-64",
    sec: "Carboxylic Acids",
    question: "Acetic acid is the common name for ___",
    options: ["Methanoic acid", "Ethanoic acid", "Propanoic acid", "Butanoic acid"],
    correctAnswer: "Ethanoic acid",
    explanation: "Ethanoic acid (CH3COOH), with two carbons, is commonly referred to as acetic acid."
  },
  {
    id: "q-65",
    sec: "Carboxylic Acids",
    question: "The reaction of a carboxylic acid with a base produces ___",
    options: ["An ester and water", "A salt and water", "An aldehyde and water", "An ether and CO₂"],
    correctAnswer: "A salt and water",
    explanation: "Carboxylic acids undergo simple neutralization reactions with bases to yield a carboxylate salt and water."
  },
  {
    id: "q-66",
    sec: "Carboxylic Acids",
    question: "Saponification is the hydrolysis of an ester using ___",
    options: ["Dilute acid", "Water only", "Alkali", "Concentrated acid"],
    correctAnswer: "Alkali",
    explanation: "Saponification is alkaline ester hydrolysis, typically using a strong base (like NaOH or KOH) to form glycerol and fatty acid salts (soap)."
  },
  {
    id: "q-67",
    sec: "Carboxylic Acids",
    question: "The IUPAC name of HCOOH is ___",
    options: ["Methanoic acid", "Ethanoic acid", "Propanoic acid", "Formic acid"],
    correctAnswer: "Methanoic acid",
    explanation: "HCOOH has only one carbon. Its systematic IUPAC name is methanoic acid (common name is formic acid)."
  },
  {
    id: "q-68",
    sec: "Amines",
    question: "Amines are derivatives of ___",
    options: ["Methane", "Ammonia", "Methanol", "Ethane"],
    correctAnswer: "Ammonia",
    explanation: "Amines are organic nitrogen compounds structurally derived by replacing one or more hydrogen atoms of ammonia (NH3) with alkyl or aryl groups."
  },
  {
    id: "q-69",
    sec: "Amines",
    question: "A primary amine contains ___ alkyl group(s) attached to nitrogen.",
    options: ["One", "Two", "Three", "Four"],
    correctAnswer: "One",
    explanation: "Primary amines (R-NH2) have exactly one alkyl/aryl substituent covalently bonded to the nitrogen atom."
  },
  {
    id: "q-70",
    sec: "Amines",
    question: "A tertiary amine contains ___ alkyl groups attached to nitrogen.",
    options: ["One", "Two", "Three", "Four"],
    correctAnswer: "Three",
    explanation: "Tertiary amines (R3N) have all three hydrogens of ammonia replaced by alkyl/aryl groups."
  },
  {
    id: "q-71",
    sec: "Isomerism",
    question: "Compounds with the same molecular formula but different structural arrangements are called ___",
    options: ["Isotopes", "Allotropes", "Isomers", "Polymers"],
    correctAnswer: "Isomers",
    explanation: "Isomers are distinct chemical species that share the same molecular formula but differ in chemical connectivity or spatial orientation."
  },
  {
    id: "q-72",
    sec: "Stereochemistry",
    question: "Optical isomers are compounds that are non-superimposable mirror images of each other, also called ___",
    options: ["Diastereomers", "Enantiomers", "Constitutional isomers", "Conformational isomers"],
    correctAnswer: "Enantiomers",
    explanation: "Non-superimposable mirror images are a distinct class of stereoisomers termed enantiomers."
  },
  {
    id: "q-73",
    sec: "Stereochemistry",
    question: "A chiral carbon atom is one that is bonded to ___ different groups.",
    options: ["Two", "Three", "Four", "Five"],
    correctAnswer: "Four",
    explanation: "A carbon is chiral (asymmetric) when it is sp3 hybridized and bonded to four chemically distinct atoms or functional groups."
  },
  {
    id: "q-74",
    sec: "Stereochemistry",
    question: "A racemic mixture is ___",
    options: ["A pure enantiomer", "A mixture of diastereomers", "An equal mixture of two enantiomers", "A compound with no chiral centre"],
    correctAnswer: "An equal mixture of two enantiomers",
    explanation: "A racemic mixture (or racemate) contains a 50:50 ratio of both dextrorotatory and levorotatory enantiomers, making it optically inactive due to mutual cancellation."
  },
  {
    id: "q-75",
    sec: "Isomerism",
    question: "Positional isomers differ in ___",
    options: ["Molecular formula", "Type of functional group", "Position of the functional group or substituent on the carbon chain", "Number of carbon atoms"],
    correctAnswer: "Position of the functional group or substituent on the carbon chain",
    explanation: "Positional isomers share the same carbon skeleton and functional groups but differ in where those functional groups or substituents are attached to the chain."
  },
  {
    id: "q-76",
    sec: "Purification & Characterization",
    question: "Nuclear Magnetic Resonance (NMR) spectroscopy detects which type of nuclei?",
    options: ["Carbon-12", "Oxygen-16", "Hydrogen-1 (protons)", "Nitrogen-14"],
    correctAnswer: "Hydrogen-1 (protons)",
    explanation: "Proton NMR spectroscopy is a primary tool that detects Hydrogen-1 (proton) nuclei, which have nuclear spin, allowing maps of hydrogen environments in molecules."
  },
  {
    id: "q-77",
    sec: "Purification & Characterization",
    question: "In infrared spectroscopy, the –OH group of alcohols absorbs at approximately ___",
    options: ["1000–1100 cm⁻¹", "2500–3300 cm⁻¹", "1700 cm⁻¹", "3300–3500 cm⁻¹ only for acids"],
    correctAnswer: "2500–3300 cm⁻¹",
    explanation: "Though free alcohol O-H usually stretches higher (~3200-3600 cm⁻¹), under hydrogen-bonded conditions it expands, and the question syllabus associates O-H absorption range broadly around 2500-3300 cm⁻¹."
  },
  {
    id: "q-78",
    sec: "Purification & Characterization",
    question: "The carbonyl group C=O in ketones and aldehydes absorbs strongly in IR spectroscopy at approximately ___",
    options: ["1000 cm⁻¹", "2500 cm⁻¹", "1700 cm⁻¹", "3000 cm⁻¹"],
    correctAnswer: "1700 cm⁻¹",
    explanation: "The highly polar carbonyl double bond (C=O) produces a very sharp, strong absorption band in the infrared region of approximately 1670-1740 cm⁻¹."
  },
  {
    id: "q-79",
    sec: "Purification & Characterization",
    question: "Mass spectrometry is used to determine the ___ of an organic compound.",
    options: ["Melting point", "Molecular mass", "Boiling point", "Colour"],
    correctAnswer: "Molecular mass",
    explanation: "Mass spectrometry ionizes organic compounds and measures the mass-to-charge (m/z) ratio of resulting fragments, directly determining the molecular mass."
  },
  {
    id: "q-80",
    sec: "Carbohydrates",
    question: "Monosaccharides are sugars that ___",
    options: ["Cannot be hydrolysed into simpler sugars", "Yield two monosaccharides on hydrolysis", "Yield many monosaccharides on hydrolysis", "Do not dissolve in water"],
    correctAnswer: "Cannot be hydrolysed into simpler sugars",
    explanation: "Monosaccharides are the basic structural monomer units of carbohydrates and cannot be broken down (hydrolysed) into smaller sugar units."
  },
  {
    id: "q-81",
    sec: "Carbohydrates",
    question: "Glucose is an example of a ___",
    options: ["Disaccharide", "Polysaccharide", "Monosaccharide", "Oligosaccharide"],
    correctAnswer: "Monosaccharide",
    explanation: "Glucose is a simple hexose sugar, which is a monomeric monosaccharide."
  },
  {
    id: "q-82",
    sec: "Carbohydrates",
    question: "Sucrose on hydrolysis yields ___",
    options: ["Two molecules of glucose", "Two molecules of fructose", "One molecule of glucose and one molecule of fructose", "Two molecules of galactose"],
    correctAnswer: "One molecule of glucose and one molecule of fructose",
    explanation: "Sucrose is a disaccharide made of glucose and fructose bonded by an alpha-1,2-glycosidic bond. Hydrolyzing sucrose splits it back into one glucose and one fructose."
  },
  {
    id: "q-83",
    sec: "Carbohydrates",
    question: "Starch is a ___",
    options: ["Monosaccharide", "Disaccharide", "Polysaccharide", "Lipid"],
    correctAnswer: "Polysaccharide",
    explanation: "Starch is a macromolecular homopolysaccharide composed of thousands of repeating D-glucose units linked by glycosidic bonds."
  },
  {
    id: "q-84",
    sec: "Carbohydrates",
    question: "A reducing sugar is one that ___",
    options: ["Has no hydroxyl group", "Can donate electrons to reduce another compound such as Cu²⁺", "Cannot react with Benedict's solution", "Contains only carbon and hydrogen"],
    correctAnswer: "Can donate electrons to reduce another compound such as Cu²⁺",
    explanation: "Reducing sugars possess free or hemiacetal-forming aldehyde/ketone groups that can act as mild reducing agents, donating electrons to reduce reagents like copper (Cu2+)."
  },
  {
    id: "q-85",
    sec: "Carbohydrates",
    question: "Sucrose is a non-reducing sugar because ___",
    options: ["It has no carbon atoms", "Its anomeric hydroxyl groups are involved in the glycosidic bond", "It does not dissolve in water", "It has no oxygen atoms"],
    correctAnswer: "Its anomeric hydroxyl groups are involved in the glycosidic bond",
    explanation: "In sucrose, the glycosidic bond links the anomeric C1 of glucose directly to the anomeric C2 of fructose. Since both reactive carbonyl carbons are locked in the bond, it cannot open to form a reducing aldehyde/ketone."
  },
  {
    id: "q-86",
    sec: "Purification & Characterization",
    question: "The Carius method in organic chemistry is used to determine ___",
    options: ["Carbon and hydrogen", "Nitrogen content", "Halogens, sulphur, and phosphorus", "Oxygen content"],
    correctAnswer: "Halogens, sulphur, and phosphorus",
    explanation: "The Carius method involves heating the organic compound with fuming nitric acid in the presence of silver nitrate to estimate sulfur, halogens, and phosphorus quantitatively."
  },
  {
    id: "q-87",
    sec: "Purification & Characterization",
    question: "The Kjeldahl method is used to estimate ___ in organic compounds.",
    options: ["Carbon", "Sulphur", "Nitrogen", "Hydrogen"],
    correctAnswer: "Nitrogen",
    explanation: "The Kjeldahl method is a classical chemical analysis method used to determine the nitrogen content in organic substances by digesting it with concentrated H2SO4 to form ammonium sulfate."
  },
  {
    id: "q-88",
    sec: "Purification & Characterization",
    question: "The Leibig combustion method estimates ___ in organic compounds.",
    options: ["Nitrogen and sulphur", "Carbon and hydrogen", "Halogens only", "Oxygen and phosphorus"],
    correctAnswer: "Carbon and hydrogen",
    explanation: "As first developed by Justus von Liebig, combustion over copper oxide converts carbon to CO2 and hydrogen to H2O for analytical elemental estimation."
  },
  {
    id: "q-89",
    sec: "Purification & Characterization",
    question: "An empirical formula represents ___",
    options: ["The actual number of atoms in a molecule", "The 3D arrangement of atoms", "The simplest whole number ratio of atoms in a compound", "The molecular mass of a compound"],
    correctAnswer: "The simplest whole number ratio of atoms in a compound",
    explanation: "An empirical formula shows the simplest integer ratio of atoms of each element present in a chemical compound."
  },
  {
    id: "q-90",
    sec: "Purification & Characterization",
    question: "A molecular formula shows ___",
    options: ["The simplest ratio of atoms", "The actual number of each type of atom in one molecule", "The 3D structure of a molecule", "The arrangement of bonds only"],
    correctAnswer: "The actual number of each type of atom in one molecule",
    explanation: "The molecular formula specifies the exact number of atoms of each element in a single molecule of the compound."
  },
  {
    id: "q-91",
    sec: "Reaction Mechanisms",
    question: "Which of the following is an electrophile?",
    options: ["NH₃", "OH⁻", "NO₂⁺", "H₂O"],
    correctAnswer: "NO₂⁺",
    explanation: "An electrophile is an electron-deficient species that accepts electron pairs. The nitronium ion (NO2+) is positively charged and highly electrophilic."
  },
  {
    id: "q-92",
    sec: "Reaction Mechanisms",
    question: "Which of the following is a nucleophile?",
    options: ["BF₃", "AlCl₃", "CN⁻", "H⁺"],
    correctAnswer: "CN⁻",
    explanation: "A nucleophile is an electron-rich species that donates an electron pair. The cyanide ion (CN-) has a formal negative charge and a nucleophilic lone pair."
  },
  {
    id: "q-93",
    sec: "Reaction Mechanisms",
    question: "In SN1 reactions, the rate depends on ___",
    options: ["The concentration of the substrate only", "The concentration of both substrate and nucleophile", "Temperature only", "The concentration of nucleophile only"],
    correctAnswer: "The concentration of the substrate only",
    explanation: "SN1 is a unimolecular nucleophilic substitution whose rate-determining step is the slow dissociation of the substrate to form a carbocation. Thus, rate = k[substrate]."
  },
  {
    id: "q-94",
    sec: "Reaction Mechanisms",
    question: "In SN2 reactions, the rate depends on ___",
    options: ["Substrate concentration only", "Both substrate and nucleophile concentrations", "Temperature only", "Solvent polarity only"],
    correctAnswer: "Both substrate and nucleophile concentrations",
    explanation: "SN2 is a bimolecular mechanism occurring in a single concerted step. The rate is directly dependent on collision between both the substrate and the incoming nucleophile: rate = k[substrate][nucleophile]."
  },
  {
    id: "q-95",
    sec: "Reaction Mechanisms",
    question: "SN1 reactions proceed through a ___ intermediate.",
    options: ["Carbanion", "Carbocation", "Free radical", "Carbanion and free radical"],
    correctAnswer: "Carbocation",
    explanation: "SN1 reactions involve the loss of the leaving group to form a carbon cation intermediate (carbocation) before nucleophilic attack."
  },
  {
    id: "q-96",
    sec: "Reaction Mechanisms",
    question: "A free radical is a species that contains ___",
    options: ["A positive charge", "A negative charge", "An unpaired electron", "A full outer shell"],
    correctAnswer: "An unpaired electron",
    explanation: "Free radicals are neutral, highly reactive species containing one or more unpaired valence electrons."
  },
  {
    id: "q-97",
    sec: "Reaction Mechanisms",
    question: "Which of the following best defines a homolytic bond cleavage?",
    options: ["Both electrons go to one atom", "Each atom receives one electron from the bond", "No electrons are transferred", "One atom loses both electrons"],
    correctAnswer: "Each atom receives one electron from the bond",
    explanation: "Homolytic fission splits a covalent bond symmetrically, where each bonded atom takes one electron from the shared pair to generate two free radicals."
  },
  {
    id: "q-98",
    sec: "Reaction Mechanisms",
    question: "Heterolytic bond cleavage produces ___",
    options: ["Two free radicals", "A cation and an anion", "Two neutral atoms", "Two radicals with unpaired electrons"],
    correctAnswer: "A cation and an anion",
    explanation: "Heterolytic fission splits a bond unsymmetrically, where the more electronegative atom takes both electrons of the bond, producing a cation and an anion."
  },
  {
    id: "q-99",
    sec: "Introduction to Organic Chemistry",
    question: "The boiling point of organic compounds generally increases with ___",
    options: ["Decreasing molecular mass", "Decreasing chain length", "Increasing molecular mass and chain length", "Increasing number of branches"],
    correctAnswer: "Increasing molecular mass and chain length",
    explanation: "Increasing carbon chain length and molecular mass increases the surface area, which enhances the strength of London dispersion forces, raising the boiling point."
  },
  {
    id: "q-100",
    sec: "Purification & Characterization",
    question: "A pure organic compound has ___",
    options: ["A wide melting point range", "No definite melting point", "A sharp and definite melting point", "A very high boiling point always"],
    correctAnswer: "A sharp and definite melting point",
    explanation: "Purity in organic solids is characterized by melting sharply at a single, well-defined temperature."
  },
  {
    id: "q-101",
    sec: "Purification & Characterization",
    question: "The process of separating organic compounds based on differences in boiling points is called ___",
    options: ["Crystallisation", "Chromatography", "Distillation", "Filtration"],
    correctAnswer: "Distillation",
    explanation: "Distillation vaporizes liquids and condenses them separately based on differences in their boiling points."
  },
  {
    id: "q-102",
    sec: "Purification & Characterization",
    question: "Thin Layer Chromatography (TLC) is used to ___",
    options: ["Determine the molecular mass of compounds", "Identify and separate components of a mixture", "Measure the boiling point of compounds", "Determine the empirical formula"],
    correctAnswer: "Identify and separate components of a mixture",
    explanation: "TLC is an analytical technique used to separate and identify components in a chemical mixture based on differential partitioning between stationary and mobile phases."
  },
  {
    id: "q-103",
    sec: "Purification & Characterization",
    question: "The Rf value in chromatography is defined as ___",
    options: ["Rate of flow of solvent", "Distance travelled by compound ÷ distance travelled by solvent", "Distance travelled by solvent ÷ distance travelled by compound", "The speed of the mobile phase"],
    correctAnswer: "Distance travelled by compound ÷ distance travelled by solvent",
    explanation: "The Retention Factor (Rf) is calculated as the ratio of the distance migrated by the solute (compound) to the distance migrated by the solvent front."
  },
  {
    id: "q-104",
    sec: "Purification & Characterization",
    question: "Recrystallisation is a technique used to ___",
    options: ["Separate liquids by boiling point", "Identify functional groups", "Purify solid organic compounds", "Determine molecular formula"],
    correctAnswer: "Purify solid organic compounds",
    explanation: "Recrystallization dissolves an impure solid in hot solvent and allows it to slowly crystallize out as it cools, excluding impurities from the crystal lattice."
  },
  {
    id: "q-105",
    sec: "Carboxylic Acids",
    question: "Which of the following functional groups is present in an amide?",
    options: ["–OH", "–NH₂ alone", "–CONH₂", "–COOH"],
    correctAnswer: "–CONH₂",
    explanation: "Amides are characterized by a carbonyl carbon bonded directly to a nitrogen atom, forming the primary –CONH₂ (or general –CONR₂) group."
  }
];
