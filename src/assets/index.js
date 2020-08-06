// jobIcons icons
const AST = require("./jobIcons/AST.svg");
const BLM = require("./jobIcons/BLM.svg");
const BRD = require("./jobIcons/BRD.svg");
const DNC = require("./jobIcons/DNC.svg");
const DRG = require("./jobIcons/DRG.svg");
const DRK = require("./jobIcons/DRK.svg");
const GNB = require("./jobIcons/GNB.svg");
const MCH = require("./jobIcons/MCH.svg");
const MNK = require("./jobIcons/MNK.svg");
const NIN = require("./jobIcons/NIN.svg");
const PLD = require("./jobIcons/PLD.svg");
const RDM = require("./jobIcons/RDM.svg");
const SAM = require("./jobIcons/SAM.svg");
const SCH = require("./jobIcons/SCH.svg");
const SMN = require("./jobIcons/SMN.svg");
const WAR = require("./jobIcons/WAR.svg");
const WHM = require("./jobIcons/WHM.svg");

export const jobIcons = {
  PLD: PLD,
  WAR: WAR,
  DRK: DRK,
  GNB: GNB,
  WHM: WHM,
  SCH: SCH,
  AST: AST,
  MNK: MNK,
  DRG: DRG,
  NIN: NIN,
  SAM: SAM,
  BRD: BRD,
  MCH: MCH,
  DNC: DNC,
  BLM: BLM,
  SMN: SMN,
  RDM: RDM,
};

// equipment icons
const BODY = require("./eqIcons/body.svg");
const BRACELETS = require("./eqIcons/bracelets.svg");
const EARRINGS = require("./eqIcons/earrings.svg");
const FEET = require("./eqIcons/feet.svg");
const HANDS = require("./eqIcons/hands.svg");
const HEAD = require("./eqIcons/head.svg");
const LEGS = require("./eqIcons/legs.svg");
const MAIN_ARM = require("./eqIcons/main_arm.svg");
const NECKLACE = require("./eqIcons/necklace.svg");
const RING = require("./eqIcons/ring.svg");
const WAIST = require("./eqIcons/waist.svg");

export const COFFER = require("./eqIcons/coffer.png");

// upgrades
export const TWINE = require("./eqIcons/twine.png");
export const GLAZE = require("./eqIcons/glaze.png");
export const ESTER = require("./eqIcons/ester.png");
export const TOMESTONE = require("./eqIcons/tomestone.png");

// books
export const BOOK_1 = require("./eqIcons/book_of_fulmination.png");
export const BOOK_2 = require("./eqIcons/book_of_furor.png");
export const BOOK_3 = require("./eqIcons/book_of_iconoclasm.png");
export const BOOK_4 = require("./eqIcons/book_of_refulgence.png");

// allagan tomestones
export const ALLEGORY = require("./eqIcons/tomestone_of_allegory.png");

export const eqIcons = {
  mainArm: MAIN_ARM,
  head: HEAD,
  body: BODY,
  hands: HANDS,
  waist: WAIST,
  legs: LEGS,
  feet: FEET,
  earrings: EARRINGS,
  necklace: NECKLACE,
  bracelets: BRACELETS,
  ring1: RING,
  ring2: RING,
};

export const eqList = {
  mainArm: MAIN_ARM,
  head: HEAD,
  body: BODY,
  hands: HANDS,
  waist: WAIST,
  legs: LEGS,
  feet: FEET,
  earrings: EARRINGS,
  necklace: NECKLACE,
  bracelets: BRACELETS,
  ring: RING,
  twine: TWINE,
  glaze: GLAZE,
  ester: ESTER,
  tomestone: TOMESTONE,
  tome: ALLEGORY,
  BOOK_1: BOOK_1,
  BOOK_2: BOOK_2,
  BOOK_3: BOOK_3,
  BOOK_4: BOOK_4,
};

export const bookItems = [
  {
    item: "ester",
    cost: 4,
    currency: "BOOK_3",
  },
  {
    item: "twine",
    cost: 4,
    currency: "BOOK_3",
  },
  {
    item: "glaze",
    cost: 4,
    currency: "BOOK_2",
  },
  {
    item: "earrings",
    cost: 4,
    currency: "BOOK_1",
  },
  {
    item: "necklace",
    cost: 4,
    currency: "BOOK_1",
  },
  {
    item: "bracelets",
    cost: 4,
    currency: "BOOK_1",
  },
  {
    item: "ring",
    cost: 4,
    currency: "BOOK_1",
  },
  {
    item: "waist",
    cost: 6,
    currency: "BOOK_1",
  },
  {
    item: "head",
    cost: 6,
    currency: "BOOK_2",
  },
  {
    item: "hands",
    cost: 6,
    currency: "BOOK_2",
  },
  {
    item: "feet",
    cost: 6,
    currency: "BOOK_2",
  },
  {
    item: "legs",
    cost: 8,
    currency: "BOOK_3",
  },
  {
    item: "mainArm",
    cost: 8,
    currency: "BOOK_4",
  },
  {
    item: "body",
    cost: 8,
    currency: "BOOK_4",
  },
];

export const tomeItems = [
  {
    item: "mainArm",
    cost: 1000,
    currency: "tome",
  },
  {
    item: "head",
    cost: 495,
    currency: "tome",
  },
  {
    item: "body",
    cost: 825,
    currency: "tome",
  },
  {
    item: "hands",
    cost: 495,
    currency: "tome",
  },
  {
    item: "waist",
    cost: 375,
    currency: "tome",
  },
  {
    item: "legs",
    cost: 825,
    currency: "tome",
  },
  {
    item: "feet",
    cost: 495,
    currency: "tome",
  },
  {
    item: "earrings",
    cost: 375,
    currency: "tome",
  },
  {
    item: "necklace",
    cost: 375,
    currency: "tome",
  },
  {
    item: "bracelets",
    cost: 375,
    currency: "tome",
  },
  {
    item: "ring",
    cost: 375,
    currency: "tome",
  },
];
