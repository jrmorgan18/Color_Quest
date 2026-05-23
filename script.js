const gradeOrder = ["K", "1", "2", "3", "4", "5"];
const gradeNames = {
  K: "Kindergarten",
  1: "1st Grade",
  2: "2nd Grade",
  3: "3rd Grade",
  4: "4th Grade",
  5: "5th Grade"
};

const colors = {
  1: { name: "Red", hex: "#ef4d4d" },
  2: { name: "Yellow", hex: "#ffd84a" },
  3: { name: "Green", hex: "#47b96f" },
  4: { name: "Blue", hex: "#4d95f0" },
  5: { name: "Brown", hex: "#9b673d" },
  6: { name: "Purple", hex: "#985fd3" },
  7: { name: "Orange", hex: "#f38b36" },
  8: { name: "Gray", hex: "#9aa4ad" },
  9: { name: "Pink", hex: "#f58cb5" }
};

const prizes = [
  { points: 20, reward: "15 minutes later bedtime on weekend" },
  { points: 40, reward: "Extra treat with dinner" },
  { points: 60, reward: "5 minutes of tickle monster" },
  { points: 80, reward: "10 minutes of tickle monster" },
  { points: 100, reward: "15 minutes extra tablet time" },
  { points: 100, reward: "15 minutes extra Roblox time" },
  { points: 120, reward: "30 minutes extra tablet time" },
  { points: 120, reward: "30 minutes extra Roblox time" },
  { points: 500, reward: "Hyper Kidz or Sky Zone" }
];

const pictureTemplates = [
  {
    id: "apple",
    icon: "A",
    grid: [
      "..333...",
      "...3....",
      "..1111..",
      ".111111.",
      ".111111.",
      "..1111..",
      "...55...",
      "........"
    ]
  },
  {
    id: "house",
    icon: "H",
    grid: [
      "222...22",
      "2222.222",
      "..7777..",
      ".775577.",
      "77555577",
      ".554455.",
      ".554455.",
      "33333333"
    ]
  },
  {
    id: "rocket",
    icon: "R",
    grid: [
      "....1.....",
      "...111....",
      "...888....",
      "..84448...",
      "..84448...",
      ".8844488..",
      ".8844488..",
      "...777....",
      "..72227...",
      ".77...77.."
    ]
  },
  {
    id: "train",
    icon: "T",
    grid: [
      "..........",
      "..44444...",
      ".4444444..",
      ".4455554..",
      ".4444444..",
      "666666666.",
      "6.6.6.6.6.",
      "..888.888.",
      "..888.888.",
      ".........."
    ]
  },
  {
    id: "castle",
    icon: "C",
    grid: [
      "8..8..8..8",
      "8888888888",
      "8668668668",
      "8888888888",
      "8444444448",
      "8442224448",
      "8442224448",
      "8442224448",
      "8885558888",
      "3333333333"
    ]
  },
  {
    id: "flower",
    icon: "F",
    grid: [
      "....2.....",
      "...222....",
      "..29992...",
      "...222....",
      "....3.....",
      ".1..3..6..",
      "111333666.",
      ".1.333.6..",
      "...333....",
      "3333333333"
    ]
  },
  {
    id: "lab",
    icon: "L",
    grid: [
      "...444444....",
      "...488884....",
      "....4884.....",
      "....4884.....",
      "...448844....",
      "..44488444...",
      "..49999994...",
      "..49922994...",
      "..49922994...",
      "...499994....",
      "....5555.....",
      "...555555...."
    ]
  },
  {
    id: "space",
    icon: "S",
    grid: [
      "2.....2....2",
      "...44444....",
      "..4666664...",
      ".466999664..",
      ".466999664..",
      "..4666664...",
      "...44444....",
      ".....8......",
      "..1..8..1...",
      ".111888111..",
      "..1.888.1...",
      "....777....."
    ]
  },
  {
    id: "fish",
    icon: "I",
    grid: [
      "............",
      "....444.....",
      "..444444.7..",
      ".4449944777.",
      "444499447777",
      ".444444.7..",
      "..44444.....",
      "...3..3.....",
      "..33..33....",
      "............"
    ]
  },
  {
    id: "robot",
    icon: "B",
    grid: [
      "..888888..",
      "..899998..",
      "..894498..",
      "..899998..",
      "...8888...",
      ".66666666.",
      ".64466446.",
      ".66666666.",
      "..8....8..",
      "..8....8.."
    ]
  }
];

const pictureNamesByGrade = {
  K: ["Big Apple", "Sunny House", "Rocket Ship", "Little Train", "Stone Castle", "Flower Garden", "Science Lab", "Space Scene", "Blue Fish", "Friendly Robot"],
  1: ["Apple Orchard", "Tree House", "Moon Rocket", "Freight Train", "Hill Castle", "Bug Garden", "Beaker Lab", "Star Field", "River Fish", "Helper Robot"],
  2: ["Apple Basket", "Cabin Home", "Mars Rocket", "Cargo Train", "Tower Castle", "Petal Garden", "Lab Table", "Planet Trip", "Fast Fish", "Puzzle Robot"],
  3: ["Apple Pie", "Lake House", "Comet Rocket", "Steam Train", "Royal Castle", "Wild Garden", "Chem Lab", "Deep Space", "Coral Fish", "Coder Robot"],
  4: ["Apple Market", "Mountain House", "Orbit Rocket", "Metro Train", "Cloud Castle", "Pollinator Garden", "Research Lab", "Galaxy Map", "Reef Fish", "Circuit Robot"],
  5: ["Apple Festival", "Solar House", "Explorer Rocket", "Bullet Train", "Crystal Castle", "Botany Garden", "Physics Lab", "Nebula Scene", "Kelp Fish", "Quantum Robot"]
};

const pictures = gradeOrder.flatMap((grade) =>
  pictureTemplates.map((template, index) => ({
    id: `${grade}-${template.id}`.replace(/[^A-Za-z0-9-]/g, ""),
    name: pictureNamesByGrade[grade][index],
    grade,
    icon: template.icon,
    grid: template.grid
  }))
);

const scienceFacts = {
  K: [
    ["What do plants need to make food?", "Sunlight", ["Sand only", "Plastic", "Moon rocks"]],
    ["Water freezes into what?", "Ice", ["Steam", "Soil", "Smoke"]],
    ["Which animal has feathers?", "Bird", ["Fish", "Snake", "Worm"]],
    ["What tool tells us the temperature?", "Thermometer", ["Ruler", "Spoon", "Magnet"]],
    ["Which body part pumps blood?", "Heart", ["Lung", "Elbow", "Tooth"]],
    ["What do roots take in from soil?", "Water", ["Paint", "Fire", "Glass"]],
    ["Which is a source of light?", "The Sun", ["A shoe", "A blanket", "A pencil"]],
    ["A baby frog is called what?", "Tadpole", ["Kitten", "Calf", "Chick"]],
    ["Which sense uses your ears?", "Hearing", ["Taste", "Sight", "Smell"]],
    ["What do clouds often bring?", "Rain", ["Rocks", "Leaves", "Toys"]],
    ["What animal group does a turtle belong to?", "Reptile", ["Mammal", "Bird", "Insect"]],
    ["What do magnets pull on best?", "Iron", ["Wood", "Paper", "Cotton"]],
    ["Which season is usually hottest?", "Summer", ["Winter", "Fall", "Spring"]],
    ["What planet do we live on?", "Earth", ["Mars", "Jupiter", "Neptune"]],
    ["What do bees help flowers make?", "Seeds", ["Metal", "Glass", "Clouds"]],
    ["Which is a liquid?", "Milk", ["Rock", "Chair", "Pencil"]],
    ["Which animal breathes with gills?", "Fish", ["Dog", "Horse", "Robin"]],
    ["What happens to a shadow when light is blocked?", "It forms", ["It sings", "It melts", "It floats"]],
    ["What is rain made of?", "Water", ["Dust", "Salt only", "Fire"]],
    ["What part of a plant is often green?", "Leaf", ["Root", "Seed", "Trunk"]],
    ["Which object is living?", "Tree", ["Cup", "Book", "Bike"]],
    ["Which sky object is seen at night?", "Moon", ["Table", "Door", "Fork"]],
    ["What do lungs help us do?", "Breathe", ["Hear", "Chew", "Blink"]],
    ["Which material can stretch?", "Rubber band", ["Rock", "Brick", "Coin"]],
    ["Which animal is an insect?", "Ant", ["Cat", "Frog", "Snake"]],
    ["What do we call water falling from clouds?", "Rain", ["Wind", "Sun", "Mud"]],
    ["What keeps us on the ground?", "Gravity", ["Music", "Color", "Heat"]],
    ["Which part of a plant grows underground?", "Root", ["Flower", "Leaf", "Fruit"]],
    ["Which is not living?", "Rock", ["Dog", "Tree", "Mushroom"]],
    ["What do animals need to drink?", "Water", ["Paint", "Glue", "Oil"]]
  ],
  1: [
    ["Which state of matter keeps its own shape?", "Solid", ["Liquid", "Gas", "Mist"]],
    ["What is the largest planet in our solar system?", "Jupiter", ["Mars", "Earth", "Mercury"]],
    ["What causes a rainbow?", "Sunlight and water drops", ["Snow only", "Wind only", "Darkness"]],
    ["How many legs does an insect have?", "6", ["4", "8", "10"]],
    ["What type of animal is a frog?", "Amphibian", ["Mammal", "Fish", "Bird"]],
    ["What do omnivores eat?", "Plants and animals", ["Only plants", "Only rocks", "Only water"]],
    ["What is a habitat?", "Where an animal lives", ["A math fact", "A weather tool", "A toy"]],
    ["What do we call melted rock from a volcano?", "Lava", ["Snow", "Clay", "Sand"]],
    ["Which planet is closest to the Sun?", "Mercury", ["Earth", "Saturn", "Neptune"]],
    ["What gas do people breathe in to live?", "Oxygen", ["Helium", "Smoke", "Steam"]],
    ["Which is a conductor?", "Metal spoon", ["Wood block", "Plastic fork", "Rubber tire"]],
    ["What part of a plant makes seeds?", "Flower", ["Stem", "Root", "Soil"]],
    ["What causes day and night?", "Earth spins", ["The Moon spins Earth", "Clouds move", "Rain falls"]],
    ["What is evaporation?", "Liquid changing to gas", ["Gas changing to rock", "Ice becoming metal", "Light bending"]],
    ["What do herbivores eat?", "Plants", ["Only meat", "Only insects", "Only rocks"]],
    ["Which weather tool measures rain?", "Rain gauge", ["Compass", "Microscope", "Scale"]],
    ["What is a food chain?", "A path of energy between living things", ["A metal chain", "A row of desks", "A kind of cloud"]],
    ["Which organ helps you think?", "Brain", ["Stomach", "Knee", "Skin"]],
    ["What do decomposers break down?", "Dead plants and animals", ["Sunlight", "Rainbows", "Magnets"]],
    ["Which force slows a sliding object?", "Friction", ["Light", "Sound", "Color"]],
    ["What makes a sound higher or lower?", "Pitch", ["Mass", "Length only", "Color"]],
    ["Which object is transparent?", "Clear glass", ["Brick", "Wood", "Cardboard"]],
    ["What does a seed need first to sprout?", "Water", ["Plastic", "Fire", "Salt only"]],
    ["Which is a mammal?", "Whale", ["Shark", "Lizard", "Duck"]],
    ["What do we call all the bones together?", "Skeleton", ["Muscle", "Nerve", "Skin"]],
    ["What natural resource do trees provide?", "Wood", ["Metal", "Gasoline", "Glass"]],
    ["What happens when matter gets hotter?", "Particles move faster", ["It disappears", "It turns purple", "It stops moving"]],
    ["Which planet is known as the Red Planet?", "Mars", ["Venus", "Earth", "Uranus"]],
    ["What is condensation?", "Gas changing to liquid", ["Solid changing to gas", "A rock breaking", "Light making heat"]],
    ["Which sense uses your tongue?", "Taste", ["Sight", "Touch", "Hearing"]]
  ],
  2: [
    ["What force pulls objects toward Earth?", "Gravity", ["Friction", "Magnetism only", "Sound"]],
    ["What is a simple machine?", "A tool that makes work easier", ["A living thing", "A type of cloud", "A weather event"]],
    ["What is the center of an atom called?", "Nucleus", ["Shell", "Orbit", "Cell wall"]],
    ["What is the water cycle step where clouds form?", "Condensation", ["Erosion", "Pollination", "Friction"]],
    ["Which system moves blood through the body?", "Circulatory system", ["Digestive system", "Skeletal system", "Nervous system"]],
    ["What type of rock forms from cooled lava?", "Igneous", ["Sedimentary", "Metamorphic", "Fossil"]],
    ["What is an ecosystem?", "Living and nonliving things interacting", ["One animal only", "A kind of planet", "A tool"]],
    ["What do producers do in a food web?", "Make their own food", ["Eat only meat", "Break rocks", "Control weather"]],
    ["Which planet has rings that are easy to see?", "Saturn", ["Mercury", "Mars", "Venus"]],
    ["What is the main gas in air?", "Nitrogen", ["Oxygen", "Carbon dioxide", "Hydrogen"]],
    ["Which layer of Earth is hottest?", "Core", ["Crust", "Mantle", "Soil"]],
    ["What do inherited traits come from?", "Parents", ["Weather", "Food plates", "Shoes"]],
    ["What is a variable in an experiment?", "Something that can change", ["The final answer", "A book", "A ruler only"]],
    ["What does a prism do to white light?", "Splits it into colors", ["Makes it heavier", "Turns it into water", "Stops sound"]],
    ["Which organ breaks food down in acid?", "Stomach", ["Heart", "Lung", "Kidney"]],
    ["What are fossils?", "Preserved remains or traces", ["Fresh leaves", "Cloud pieces", "New toys"]],
    ["What type of energy does moving air have?", "Kinetic energy", ["Chemical energy only", "Nuclear energy", "Sound only"]],
    ["What causes ocean tides mostly?", "The Moon's gravity", ["Cloud color", "Volcanoes", "Rainbows"]],
    ["Which body system controls movement messages?", "Nervous system", ["Digestive system", "Respiratory system", "Immune system"]],
    ["What is erosion?", "Movement of weathered material", ["A new moon", "A plant making food", "A magnet pulling iron"]],
    ["Which material is magnetic?", "Iron nail", ["Wood chip", "Plastic cup", "Paper bag"]],
    ["What is an adaptation?", "A trait that helps survival", ["A random mistake only", "A weather report", "A planet path"]],
    ["What do carnivores eat?", "Animals", ["Plants only", "Rocks", "Sunlight"]],
    ["What is the job of the respiratory system?", "Take in oxygen", ["Pump blood", "Make bones", "Digest food"]],
    ["What kind of circuit lets electricity flow?", "Closed circuit", ["Open circuit", "Broken circuit", "Paper circuit"]],
    ["What does photosynthesis produce for the plant?", "Sugar", ["Plastic", "Sand", "Smoke"]],
    ["Which tool makes tiny things look larger?", "Microscope", ["Thermometer", "Compass", "Barometer"]],
    ["What is a mixture?", "Substances together but not chemically changed", ["One pure element only", "A living cell", "A planet"]],
    ["What protects Earth's surface from many meteoroids?", "Atmosphere", ["Core", "Ocean floor", "Moon"]],
    ["What is a hypothesis?", "A testable prediction", ["A final grade", "A drawing", "A measuring cup"]]
  ],
  3: [
    ["What is the basic unit of life?", "Cell", ["Atom", "Mineral", "Planet"]],
    ["Which organelle controls many cell activities?", "Nucleus", ["Cell wall", "Vacuole", "Chloroplast only"]],
    ["What does chlorophyll help plants capture?", "Light energy", ["Sound", "Gravity", "Magnetism"]],
    ["What type of energy is stored in food?", "Chemical energy", ["Sound energy", "Light only", "Gravity only"]],
    ["What is a pulley used for?", "Changing force direction", ["Measuring heat", "Making shadows", "Growing roots"]],
    ["What does mass measure?", "Amount of matter", ["How hot it is", "Color brightness", "Sound pitch"]],
    ["What does density compare?", "Mass and volume", ["Time and speed", "Color and shape", "Heat and light"]],
    ["What is the role of mitochondria?", "Release energy for cells", ["Store books", "Make soil", "Block light"]],
    ["What process breaks rocks into smaller pieces?", "Weathering", ["Condensation", "Photosynthesis", "Germination"]],
    ["What is a circuit component that uses energy?", "Load", ["Switch only", "Wire only", "Battery only"]],
    ["Which wave property is distance from crest to crest?", "Wavelength", ["Amplitude", "Volume", "Mass"]],
    ["What does the immune system fight?", "Germs", ["Gravity", "Sunlight", "Rocks"]],
    ["What is a renewable resource?", "A resource that can be replaced naturally", ["A resource that is gone forever", "A plastic toy", "A fossil only"]],
    ["What are tectonic plates?", "Large moving pieces of Earth's crust", ["Cloud layers", "Ocean animals", "Moon rocks"]],
    ["What is an inclined plane?", "A slanted surface", ["A round wheel", "A rope", "A battery"]],
    ["What is a balanced force?", "Forces that cancel out", ["Only upward force", "A noisy force", "A magnetic color"]],
    ["What does DNA carry?", "Genetic instructions", ["Water", "Sunlight", "Electricity"]],
    ["Which gas do plants take in for photosynthesis?", "Carbon dioxide", ["Oxygen", "Helium", "Nitrogen only"]],
    ["What is an insulator?", "Material that slows heat or electricity", ["Material that always melts", "A living thing", "A planet"]],
    ["What is a lunar eclipse?", "Earth blocks sunlight from the Moon", ["Moon blocks sunlight from Earth", "Mars covers Earth", "Clouds make rain"]],
    ["What does a barometer measure?", "Air pressure", ["Rain amount", "Wind direction", "Temperature"]],
    ["What is a predator?", "An animal that hunts other animals", ["An animal that only eats plants", "A plant root", "A weather tool"]],
    ["What is the first link in many food chains?", "Producer", ["Top predator", "Decomposer", "Rock"]],
    ["What is acceleration?", "Change in speed or direction", ["Total distance only", "Object color", "A type of energy"]],
    ["What is a solution?", "A mixture evenly spread out", ["Two rocks stacked", "A pure element", "A weather map"]],
    ["Which body system digests food?", "Digestive system", ["Respiratory system", "Skeletal system", "Circulatory system"]],
    ["What is the Milky Way?", "Our galaxy", ["Our moon", "A planet", "A comet"]],
    ["What causes seasons?", "Earth's tilt as it orbits", ["Distance from the Moon", "Ocean tides", "Clouds"]],
    ["What does a control group help with?", "Comparison", ["Decoration", "Measuring only length", "Making sound"]],
    ["What do kidneys help remove from blood?", "Waste", ["Bones", "Oxygen", "Light"]]
  ],
  4: [
    ["What particle has a negative charge?", "Electron", ["Proton", "Neutron", "Nucleus"]],
    ["What particle has a positive charge?", "Proton", ["Electron", "Neutron", "Molecule"]],
    ["What is Newton's first law about?", "Inertia", ["Photosynthesis", "Weather", "Density only"]],
    ["What is potential energy?", "Stored energy", ["Energy of motion only", "Sound volume", "Color brightness"]],
    ["What transfers heat through direct touch?", "Conduction", ["Radiation", "Condensation", "Erosion"]],
    ["What transfers heat through fluids moving?", "Convection", ["Reflection", "Friction", "Freezing"]],
    ["What is the pH of a neutral solution?", "7", ["1", "14", "0"]],
    ["What is a molecule?", "Atoms bonded together", ["A planet", "A rock layer", "A tiny tool"]],
    ["What is the function of red blood cells?", "Carry oxygen", ["Digest food", "Make bones", "Store memories"]],
    ["What is a genotype?", "Genetic makeup", ["Physical appearance", "Weather pattern", "Rock type"]],
    ["What is a phenotype?", "Observable trait", ["Hidden gene code only", "A planet path", "A weather tool"]],
    ["What is a limiting factor?", "Something that controls population size", ["A math symbol", "A type of simple machine", "A cloud"]],
    ["What is a biome?", "Large region with similar climate and life", ["A single animal", "A tiny atom", "A machine part"]],
    ["What does the ozone layer absorb?", "Ultraviolet radiation", ["Rain", "Soil", "Sound"]],
    ["What is a fault?", "A crack where rocks move", ["A flower part", "A battery", "A cloud shape"]],
    ["What is the difference between weather and climate?", "Climate is long-term patterns", ["Weather lasts years only", "They are identical", "Climate is one storm"]],
    ["What is a chemical change?", "A new substance forms", ["Only size changes", "Only shape changes", "Only position changes"]],
    ["What is a physical change?", "No new substance forms", ["A new element appears", "Atoms disappear", "Gravity stops"]],
    ["What is reflection?", "Light bouncing off a surface", ["Light bending", "Heat moving by touch", "Sound stopping"]],
    ["What is refraction?", "Light bending as it changes medium", ["Light disappearing", "Water freezing", "Rock breaking"]],
    ["What is a transverse wave?", "Matter moves perpendicular to wave direction", ["Matter only moves forward", "No energy moves", "A rock layer"]],
    ["What is an invasive species?", "A nonnative species that causes harm", ["Any baby animal", "A weather event", "A type of mineral"]],
    ["What does the endocrine system use?", "Hormones", ["Bones", "Teeth", "Feathers"]],
    ["What is homeostasis?", "Maintaining stable internal conditions", ["Growing without limit", "Turning into a gas", "Changing color only"]],
    ["What does a catalyst do?", "Speeds a chemical reaction", ["Stops gravity", "Makes atoms vanish", "Measures volume"]],
    ["What is an aquifer?", "Underground layer holding water", ["A cloud type", "A fish organ", "A rock from space"]],
    ["What is biodiversity?", "Variety of life in an area", ["Only one species", "Amount of rain only", "Earth's tilt"]],
    ["What is carrying capacity?", "Largest population an environment supports", ["Weight of a backpack", "Speed of a wave", "A chemical symbol"]],
    ["What is a fossil fuel?", "Fuel from ancient living things", ["Fuel from fresh apples", "Fuel from sunlight only", "Fuel from wind"]],
    ["What is an independent variable?", "The variable changed on purpose", ["The measured result", "The conclusion", "A constant"]]
  ],
  5: [
    ["What is the law of conservation of mass?", "Mass is not created or destroyed", ["Mass always doubles", "Mass turns into color", "Mass only exists in water"]],
    ["What is kinetic energy?", "Energy of motion", ["Stored energy", "Heat only", "Sound only"]],
    ["What is a compound?", "Two or more elements chemically bonded", ["One atom only", "A mixture of rocks", "A simple machine"]],
    ["What is an isotope?", "Atoms of an element with different neutrons", ["Different planets", "Different weather", "Different colors only"]],
    ["What does a Punnett square predict?", "Possible inherited traits", ["Weather tomorrow", "Rock age exactly", "Planet size"]],
    ["What is natural selection?", "Better adapted organisms survive and reproduce more", ["Animals choose names", "Plants stop growing", "Rocks become animals"]],
    ["What is a dominant allele?", "Allele expressed with one copy", ["Allele never expressed", "A weather tool", "A food chain"]],
    ["What is a recessive allele?", "Allele expressed when two copies are present", ["Allele always expressed", "A force", "A planet"]],
    ["What does the respiratory system exchange?", "Oxygen and carbon dioxide", ["Salt and sugar", "Light and sound", "Rocks and soil"]],
    ["What is mechanical advantage?", "How much a machine multiplies force", ["How bright light is", "How much water evaporates", "A moon phase"]],
    ["What does a transformer change?", "Voltage", ["Mass", "Density", "Species"]],
    ["What is an exothermic reaction?", "A reaction that releases energy", ["A reaction that absorbs all light", "A reaction that stops time", "A rock cycle step"]],
    ["What is an endothermic reaction?", "A reaction that absorbs energy", ["A reaction that releases only sound", "A weather map", "A fossil type"]],
    ["What is a watershed?", "Land area draining to the same water body", ["A storage shed", "A cloud", "A mineral"]],
    ["What is succession?", "Ecosystem change over time", ["A math operation", "A wave height", "A planet rotation"]],
    ["What is a keystone species?", "Species with a large effect on an ecosystem", ["The smallest species always", "Any plant seed", "A mineral"]],
    ["What is an electromagnet?", "Magnet made by electric current", ["A wooden magnet", "A fossil", "A type of cloud"]],
    ["What is an acid?", "Substance with pH less than 7", ["Substance with pH 7 only", "Substance with pH greater than 7", "Any liquid"]],
    ["What is a base?", "Substance with pH greater than 7", ["Substance with pH less than 7", "A planet", "A rock crack"]],
    ["What is the dependent variable?", "The measured result", ["The variable changed on purpose", "The title", "A constant"]],
    ["What is a control variable?", "Something kept the same", ["Something changed each trial", "The wrong answer", "A graph title"]],
    ["What is a vector?", "A quantity with size and direction", ["A number with no units", "A living cell", "A weather tool"]],
    ["What is velocity?", "Speed in a direction", ["Mass divided by volume", "Only distance", "Stored energy"]],
    ["What is work in physics?", "Force moving an object over distance", ["Thinking hard", "A type of cell", "Heat only"]],
    ["What is an allele?", "A version of a gene", ["A planet", "A rock", "A wave"]],
    ["What is diffusion?", "Particles spreading from high to low concentration", ["Rocks melting", "Clouds forming only", "Light reflecting"]],
    ["What is osmosis?", "Water moving across a membrane", ["Sound moving through air", "Heat from direct touch", "A planet orbit"]],
    ["What is a niche?", "An organism's role in its ecosystem", ["A mountain only", "A cell part", "A unit of mass"]],
    ["What is a solute?", "Substance dissolved in a solution", ["Substance doing the dissolving", "A rock layer", "A force"]],
    ["What is a solvent?", "Substance that dissolves another substance", ["A dissolved solid only", "A planet", "A cell wall"]]
  ]
};

const questions = buildQuestions();

const state = {
  selectedGrade: "K",
  selectedPictureId: null,
  selectedColor: null,
  drawing: false,
  pickerCollapsed: false,
  activeQuestion: null,
  activeView: "game",
  progress: loadProgress(),
  totalPoints: loadNumber("colorQuestPoints"),
  redeemedPrizes: loadArray("colorQuestRedeemed")
};

const els = {
  status: document.querySelector("#status-line"),
  gameView: document.querySelector("#game-view"),
  prizePage: document.querySelector("#prize-page"),
  gradeTabs: document.querySelector("#grade-tabs"),
  pictureList: document.querySelector("#picture-list"),
  randomPicture: document.querySelector("#random-picture"),
  resetProgress: document.querySelector("#reset-progress"),
  showPrizes: document.querySelector("#show-prizes"),
  backToGame: document.querySelector("#back-to-game"),
  togglePicturePicker: document.querySelector("#toggle-picture-picker"),
  pointsChip: document.querySelector("#points-chip"),
  title: document.querySelector("#picture-title"),
  subtitle: document.querySelector("#picture-subtitle"),
  chip: document.querySelector("#progress-chip"),
  grid: document.querySelector("#grid"),
  palette: document.querySelector("#palette"),
  questionBox: document.querySelector("#question-box"),
  questionTitle: document.querySelector("#question-title"),
  questionText: document.querySelector("#question-text"),
  answers: document.querySelector("#answers"),
  feedback: document.querySelector("#answer-feedback"),
  legend: document.querySelector("#legend"),
  prizeTotal: document.querySelector("#prize-total"),
  prizeList: document.querySelector("#prize-list"),
  prizeBin: document.querySelector("#prize-bin"),
  redeemModal: document.querySelector("#redeem-modal"),
  redeemReward: document.querySelector("#redeem-reward"),
  redeemCost: document.querySelector("#redeem-cost"),
  redeemYes: document.querySelector("#redeem-yes"),
  redeemNo: document.querySelector("#redeem-no")
};

let pendingRedeemPrize = null;

function buildQuestions() {
  return Object.fromEntries(gradeOrder.map((grade, index) => {
    const difficulty = index + 1;
    const math = buildMathQuestions(grade, difficulty);
    const science = scienceFacts[grade].map((fact, factIndex) =>
      makeQuestion(`${grade}-sci-${factIndex}`, fact[0], fact[1], fact[2])
    );
    return [grade, shuffle([...math, ...science])];
  }));
}

function buildMathQuestions(grade, difficulty) {
  const items = [];
  for (let index = 0; index < 12; index += 1) {
    const a = 7 + difficulty * 5 + index * 2;
    const b = 3 + difficulty * 3 + index;
    items.push(numberQuestion(`${grade}-add-${index}`, `${a} + ${b} = ?`, a + b));
  }
  for (let index = 0; index < 10; index += 1) {
    const b = 4 + difficulty + index;
    const answer = 8 + difficulty * 4 + index * 2;
    items.push(numberQuestion(`${grade}-sub-${index}`, `${answer + b} - ${b} = ?`, answer));
  }

  if (difficulty === 1) {
    for (let index = 0; index < 4; index += 1) {
      const base = 18 + index * 7;
      items.push(numberQuestion(`${grade}-ten-${index}`, `What is 10 more than ${base}?`, base + 10));
    }
    items.push(makeQuestion(`${grade}-cmp-1`, "Which number is greatest?", "87", ["78", "68", "76"]));
    items.push(makeQuestion(`${grade}-cmp-2`, "Which number is least?", "24", ["42", "34", "29"]));
    items.push(makeQuestion(`${grade}-even-1`, "Which number is even?", "16", ["13", "15", "19"]));
    items.push(makeQuestion(`${grade}-odd-1`, "Which number is odd?", "21", ["18", "24", "30"]));
  } else {
    for (let index = 0; index < 5; index += 1) {
      const a = Math.min(12, difficulty + 2 + index);
      const b = 2 + ((difficulty + index) % 9);
      items.push(numberQuestion(`${grade}-mul-${index}`, `${a} x ${b} = ?`, a * b));
    }
    for (let index = 0; index < 3; index += 1) {
      const answer = difficulty + 3 + index;
      const divisor = 2 + ((difficulty + index) % 6);
      items.push(numberQuestion(`${grade}-div-${index}`, `${answer * divisor} / ${divisor} = ?`, answer));
    }
  }

  if (difficulty >= 2) {
    items.push(makeQuestion(`${grade}-pv-1`, "What number has 6 tens and 4 ones?", "64", ["46", "604", "60"]));
    items.push(makeQuestion(`${grade}-pv-2`, "What is 100 more than 245?", "345", ["255", "2450", "145"]));
  }
  if (difficulty >= 3) {
    items.push(makeQuestion(`${grade}-frac-1`, "Which fraction equals one half?", "2/4", ["1/3", "3/5", "4/6"]));
    items.push(makeQuestion(`${grade}-frac-2`, "What is 1/4 of 32?", "8", ["4", "12", "16"]));
  }
  if (difficulty >= 4) {
    items.push(makeQuestion(`${grade}-dec-1`, "0.6 + 0.25 = ?", "0.85", ["0.31", "0.625", "0.95"]));
    items.push(makeQuestion(`${grade}-area-1`, "Area of a 7 by 8 rectangle?", "56", ["15", "48", "64"]));
  }
  if (difficulty >= 5) {
    items.push(makeQuestion(`${grade}-expr-1`, "3 x (8 + 4) = ?", "36", ["27", "32", "44"]));
    items.push(makeQuestion(`${grade}-ratio-1`, "Which ratio is equal to 2:3?", "4:6", ["3:4", "6:4", "8:9"]));
  }
  if (difficulty >= 6) {
    items.push(makeQuestion(`${grade}-order-1`, "18 + 6 x 4 = ?", "42", ["96", "72", "36"]));
    items.push(makeQuestion(`${grade}-prob-1`, "A bag has 3 red and 5 blue marbles. Chance of red?", "3/8", ["3/5", "5/8", "1/3"]));
  }

  return items;
}

function numberQuestion(id, text, answer) {
  const wrongs = [answer + 1, answer - 1, answer + 10, Math.max(0, answer - 10)]
    .filter((item) => item !== answer)
    .map(String);
  return makeQuestion(id, text, String(answer), wrongs);
}

function makeQuestion(id, text, answer, wrongs) {
  return {
    id,
    text,
    answer,
    options: uniqueOptions([answer, ...wrongs]).slice(0, 4)
  };
}

function uniqueOptions(options) {
  const seen = new Set();
  return options.filter((option) => {
    const key = String(option);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem("colorQuestProgress"));
    return saved && typeof saved === "object" ? saved : {};
  } catch {
    return {};
  }
}

function loadNumber(key) {
  try {
    return Number(localStorage.getItem(key)) || 0;
  } catch {
    return 0;
  }
}

function loadArray(key) {
  try {
    const saved = JSON.parse(localStorage.getItem(key));
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function saveProgress() {
  localStorage.setItem("colorQuestProgress", JSON.stringify(state.progress));
}

function savePoints() {
  localStorage.setItem("colorQuestPoints", String(state.totalPoints));
  localStorage.setItem("colorQuestRedeemed", JSON.stringify(state.redeemedPrizes));
}

function pictureState(id) {
  state.progress.pictures = state.progress.pictures || {};
  state.progress.pictures[id] = state.progress.pictures[id] || { completed: false, filled: {}, unlockedColors: [] };
  return state.progress.pictures[id];
}

function gradeDeck(grade) {
  state.progress.questionDecks = state.progress.questionDecks || {};
  state.progress.questionDecks[grade] = state.progress.questionDecks[grade] || [];
  return state.progress.questionDecks[grade];
}

function levelMultiplier(grade) {
  return gradeOrder.indexOf(grade) + 1;
}

function gradeIndex(grade) {
  return gradeOrder.indexOf(grade);
}

function gradeUnlocked(grade) {
  const index = gradeIndex(grade);
  if (index <= 0) return true;
  const previousGrade = gradeOrder[index - 1];
  return pictures.some((picture) => picture.grade === previousGrade && pictureState(picture.id).completed);
}

function pictureUnlocked(picture) {
  return gradeUnlocked(picture.grade);
}

function currentPicture() {
  return pictures.find((picture) => picture.id === state.selectedPictureId) || null;
}

function pictureColors(picture) {
  return [...new Set(picture.grid.join("").replace(/\./g, "").split(""))].sort((a, b) => Number(a) - Number(b));
}

function nextQuestionForGrade(grade, lastQuestionId) {
  const bank = questions[grade];
  let deck = gradeDeck(grade);

  if (deck.length === 0) {
    deck.push(...shuffle(bank.map((question) => question.id)));
  }

  if (deck.length > 1 && deck[0] === lastQuestionId) {
    deck.push(deck.shift());
  }

  const questionId = deck.shift();
  saveProgress();
  return bank.find((question) => question.id === questionId) || bank[0];
}

function renderAll() {
  renderView();
  renderPoints();
  renderGradeTabs();
  renderPictureList();
  renderBoard();
  renderPalette();
  renderLegend();
  renderPrizePage();
}

function renderView() {
  els.gameView.hidden = state.activeView !== "game";
  els.prizePage.hidden = state.activeView !== "prizes";
  els.gameView.classList.toggle("picker-collapsed", state.pickerCollapsed && !!state.selectedPictureId);
  els.togglePicturePicker.hidden = !state.selectedPictureId;
  els.togglePicturePicker.textContent = state.pickerCollapsed ? "Pictures" : "Hide";
}

function renderPoints() {
  els.pointsChip.textContent = `${state.totalPoints} pts`;
}

function renderGradeTabs() {
  [...els.gradeTabs.querySelectorAll("button")].forEach((button) => {
    const grade = button.dataset.grade;
    button.classList.toggle("active", grade === state.selectedGrade);
    button.disabled = !gradeUnlocked(grade);
    button.title = gradeUnlocked(grade) ? gradeNames[grade] : "Clear a lower level picture first";
  });
}

function renderPictureList() {
  els.pictureList.replaceChildren();
  pictures
    .filter((picture) => picture.grade === state.selectedGrade)
    .forEach((picture) => {
      const unlocked = pictureUnlocked(picture);
      const saved = pictureState(picture.id);
      const button = document.createElement("button");
      button.type = "button";
      button.className = "picture-card";
      button.classList.toggle("active", picture.id === state.selectedPictureId);
      button.classList.toggle("locked", !unlocked);
      button.disabled = !unlocked;
      button.innerHTML = `
        <span class="picture-art" aria-hidden="true">${picture.icon}</span>
        <span>
          <span class="picture-name">${picture.name}</span>
          <span class="picture-meta">${gradeNames[picture.grade]}</span>
          ${unlocked ? "" : '<span class="lock-note">Clear a lower level first</span>'}
        </span>
        <span class="done-mark" aria-label="${saved.completed ? "Complete" : "Not complete"}">${saved.completed ? "Done" : ""}</span>
      `;
      button.addEventListener("click", () => selectPicture(picture.id));
      els.pictureList.append(button);
    });
}

function renderBoard() {
  const picture = currentPicture();
  els.grid.replaceChildren();
  els.questionBox.hidden = !state.activeQuestion;

  if (!picture) {
    els.title.textContent = "Choose a picture";
    els.subtitle.textContent = "Kindergarten pictures are open first.";
    els.chip.textContent = "0%";
    els.grid.style.setProperty("--cols", 8);
    return;
  }

  const saved = pictureState(picture.id);
  const rows = picture.grid;
  const columns = rows[0].length;
  els.grid.style.setProperty("--cols", columns);
  els.title.textContent = picture.name;
  els.subtitle.textContent = `${gradeNames[picture.grade]} challenge. Correct answers earn ${levelMultiplier(picture.grade)} point${levelMultiplier(picture.grade) === 1 ? "" : "s"}.`;

  let fillable = 0;
  let filled = 0;
  rows.forEach((row, rowIndex) => {
    [...row].forEach((number, colIndex) => {
      const cell = document.createElement("button");
      cell.type = "button";
      cell.className = "cell";
      cell.dataset.index = `${rowIndex}-${colIndex}`;
      cell.dataset.number = number;

      if (number === ".") {
        cell.classList.add("blank");
        cell.disabled = true;
      } else {
        fillable += 1;
        const fill = saved.filled[cell.dataset.index];
        if (fill === number) {
          filled += 1;
          cell.classList.add("filled");
          cell.style.background = colors[number].hex;
        }
        cell.textContent = number;
        cell.classList.toggle("target", state.selectedColor === number);
      }
      els.grid.append(cell);
    });
  });

  const percent = fillable ? Math.round((filled / fillable) * 100) : 0;
  els.chip.textContent = `${percent}%`;
  if (percent === 100 && !saved.completed) {
    saved.completed = true;
    saveProgress();
    els.status.textContent = `${picture.name} complete. A new level may be unlocked.`;
  }
}

function renderPalette() {
  const picture = currentPicture();
  els.palette.replaceChildren();
  if (!picture) return;

  const saved = pictureState(picture.id);
  pictureColors(picture).forEach((number) => {
    const unlocked = saved.unlockedColors.includes(number);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "color-button";
    button.classList.toggle("active", state.selectedColor === number);
    button.classList.toggle("locked", !unlocked);
    button.innerHTML = `
      <span class="swatch" style="background:${colors[number].hex}" aria-hidden="true"></span>
      <span>${colors[number].name}</span>
      <span class="color-number">${unlocked ? number : "?"}</span>
    `;
    button.addEventListener("click", () => chooseColor(number));
    els.palette.append(button);
  });
}

function renderLegend() {
  const picture = currentPicture();
  els.legend.replaceChildren();
  if (!picture) return;

  pictureColors(picture).forEach((number) => {
    const row = document.createElement("div");
    row.className = "legend-row";
    row.innerHTML = `
      <span class="color-number">${number}</span>
      <span class="swatch" style="background:${colors[number].hex}" aria-hidden="true"></span>
      <span>${colors[number].name}</span>
    `;
    els.legend.append(row);
  });
}

function renderPrizePage() {
  els.prizeTotal.textContent = `Your Points: ${state.totalPoints}`;
  els.prizeList.replaceChildren();
  prizes.forEach((prize) => {
    const earned = state.totalPoints >= prize.points;
    const item = document.createElement("button");
    item.type = "button";
    item.className = `prize-item ${earned ? "earned" : "locked"}`;
    item.disabled = !earned;
    item.innerHTML = `
      <span class="prize-icon" aria-hidden="true">${earned ? "*" : "Lock"}</span>
      <span class="prize-pts">${prize.points} pts</span>
      <span>${prize.reward}</span>
    `;
    if (earned) item.addEventListener("click", () => openRedeem(prize));
    els.prizeList.append(item);
  });

  els.prizeBin.replaceChildren();
  if (state.redeemedPrizes.length === 0) {
    const empty = document.createElement("div");
    empty.className = "prize-bin-empty";
    empty.textContent = "No prizes redeemed yet. Keep coloring.";
    els.prizeBin.append(empty);
  } else {
    state.redeemedPrizes.forEach((reward) => {
      const item = document.createElement("div");
      item.className = "prize-bin-item";
      item.innerHTML = `<span class="prize-icon" aria-hidden="true">Prize</span><span>${reward}</span>`;
      els.prizeBin.append(item);
    });
  }
}

function selectPicture(id) {
  const picture = pictures.find((item) => item.id === id);
  if (!picture || !pictureUnlocked(picture)) return;

  state.selectedPictureId = id;
  state.selectedColor = null;
  state.activeQuestion = null;
  state.pickerCollapsed = window.matchMedia("(max-width: 1080px)").matches;
  els.feedback.textContent = "";
  els.status.textContent = `Selected ${picture.name}. Unlock a color to begin.`;
  renderAll();
}

function chooseColor(number) {
  const picture = currentPicture();
  if (!picture) return;

  const saved = pictureState(picture.id);
  if (saved.unlockedColors.includes(number)) {
    state.selectedColor = number;
    state.activeQuestion = null;
    els.feedback.textContent = "";
    els.status.textContent = `Color ${number} squares with ${colors[number].name}.`;
    renderAll();
    return;
  }

  startQuestionForColor(number);
}

function startQuestionForColor(number, feedbackText, feedbackClass, lastQuestionId) {
  const picture = currentPicture();
  if (!picture) return;
  const question = nextQuestionForGrade(picture.grade, lastQuestionId);
  state.activeQuestion = { colorNumber: number, ...question };
  renderQuestion(feedbackText, feedbackClass);
}

function renderQuestion(feedbackText, feedbackClass) {
  const question = state.activeQuestion;
  if (!question) {
    els.questionBox.hidden = true;
    return;
  }

  els.questionBox.hidden = false;
  els.questionTitle.textContent = `Unlock ${colors[question.colorNumber].name}`;
  els.questionText.textContent = question.text;
  els.feedback.textContent = feedbackText || "";
  els.feedback.className = `answer-feedback ${feedbackClass || ""}`.trim();
  els.answers.replaceChildren();

  shuffle([...question.options]).forEach((answer) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = answer;
    button.addEventListener("click", () => answerQuestion(answer));
    els.answers.append(button);
  });
}

function answerQuestion(answer) {
  const picture = currentPicture();
  const question = state.activeQuestion;
  if (!picture || !question) return;

  if (answer !== question.answer) {
    startQuestionForColor(
      question.colorNumber,
      `Not quite. The right answer was ${question.answer}. Try this one.`,
      "bad",
      question.id
    );
    return;
  }

  const saved = pictureState(picture.id);
  if (!saved.unlockedColors.includes(question.colorNumber)) {
    saved.unlockedColors.push(question.colorNumber);
    state.totalPoints += levelMultiplier(picture.grade);
  }
  state.selectedColor = question.colorNumber;
  state.activeQuestion = null;
  saveProgress();
  savePoints();
  els.status.textContent = `${colors[question.colorNumber].name} unlocked. +${levelMultiplier(picture.grade)} point${levelMultiplier(picture.grade) === 1 ? "" : "s"}.`;
  renderAll();
}

function fillCell(cell) {
  if (!canFillCell(cell)) return;

  const picture = currentPicture();
  const saved = pictureState(picture.id);
  saved.filled[cell.dataset.index] = state.selectedColor;
  cell.classList.add("filled");
  cell.style.background = colors[state.selectedColor].hex;
  saveProgress();
  renderBoard();
  renderPictureList();
  renderGradeTabs();
}

function canFillCell(cell) {
  const picture = currentPicture();
  if (!picture || !state.selectedColor || !cell || !cell.classList.contains("cell")) return false;
  if (cell.dataset.number === "." || cell.dataset.number !== state.selectedColor) return false;
  return pictureState(picture.id).unlockedColors.includes(state.selectedColor);
}

function pickRandomPicture() {
  const available = pictures.filter((picture) => pictureUnlocked(picture));
  const unfinished = available.filter((picture) => !pictureState(picture.id).completed);
  const pool = unfinished.length ? unfinished : available;
  const choice = pool[Math.floor(Math.random() * pool.length)];
  state.selectedGrade = choice.grade;
  state.activeView = "game";
  selectPicture(choice.id);
}

function resetProgress() {
  const ok = confirm("Reset completed pictures, unlocked colors, points, and prizes?");
  if (!ok) return;
  state.progress = {};
  state.totalPoints = 0;
  state.redeemedPrizes = [];
  state.selectedGrade = "K";
  state.selectedPictureId = null;
  state.selectedColor = null;
  state.activeQuestion = null;
  state.pickerCollapsed = false;
  state.activeView = "game";
  saveProgress();
  savePoints();
  els.status.textContent = "Progress reset.";
  renderAll();
}

function openRedeem(prize) {
  pendingRedeemPrize = prize;
  els.redeemReward.textContent = prize.reward;
  els.redeemCost.textContent = `This will use ${prize.points} of your ${state.totalPoints} points.`;
  els.redeemModal.classList.add("active");
}

function closeRedeem() {
  pendingRedeemPrize = null;
  els.redeemModal.classList.remove("active");
}

function redeemPrize() {
  if (!pendingRedeemPrize || state.totalPoints < pendingRedeemPrize.points) {
    closeRedeem();
    return;
  }
  state.totalPoints -= pendingRedeemPrize.points;
  state.redeemedPrizes.push(pendingRedeemPrize.reward);
  savePoints();
  closeRedeem();
  renderAll();
}

function shuffle(items) {
  for (let i = items.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
  return items;
}

els.gradeTabs.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button || button.disabled) return;
  state.selectedGrade = button.dataset.grade;
  renderAll();
});

els.randomPicture.addEventListener("click", pickRandomPicture);
els.resetProgress.addEventListener("click", resetProgress);
els.showPrizes.addEventListener("click", () => {
  state.activeView = "prizes";
  renderAll();
});
els.backToGame.addEventListener("click", () => {
  state.activeView = "game";
  renderAll();
});
els.togglePicturePicker.addEventListener("click", () => {
  state.pickerCollapsed = !state.pickerCollapsed;
  renderAll();
});
els.redeemYes.addEventListener("click", redeemPrize);
els.redeemNo.addEventListener("click", closeRedeem);

els.grid.addEventListener("pointerdown", (event) => {
  const cell = event.target.closest(".cell");
  if (!canFillCell(cell)) {
    state.drawing = false;
    return;
  }
  event.preventDefault();
  state.drawing = true;
  fillCell(cell);
});

els.grid.addEventListener("pointermove", (event) => {
  if (!state.drawing) return;
  event.preventDefault();
  const element = document.elementFromPoint(event.clientX, event.clientY);
  fillCell(element && element.closest(".cell"));
});

window.addEventListener("pointerup", () => {
  state.drawing = false;
});

renderAll();
