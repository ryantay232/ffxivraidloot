import eqData from "../assets/eqData/eqData.json";

export const defaultName = "Member";
export const defaultIlv = 480;
export const defaultJob = "BLM";

export const defaultEq = eqData[5].type;
export const defaultEqIlv = eqData[5].ilv;

export const defaultNames = {
  0: defaultName,
  1: defaultName,
  2: defaultName,
  3: defaultName,
  4: defaultName,
  5: defaultName,
  6: defaultName,
  7: defaultName,
};
export const defaultJobs = {
  0: defaultJob,
  1: defaultJob,
  2: defaultJob,
  3: defaultJob,
  4: defaultJob,
  5: defaultJob,
  6: defaultJob,
  7: defaultJob,
};

export const defaultIlvs = {
  0: defaultIlv,
  1: defaultIlv,
  2: defaultIlv,
  3: defaultIlv,
  4: defaultIlv,
  5: defaultIlv,
  6: defaultIlv,
  7: defaultIlv,
};

export const defaultEqStructure = {
  mainArm: {
    type: defaultEq,
    ilv: defaultIlv,
  },
  head: {
    type: defaultEq,
    ilv: defaultIlv,
  },
  body: {
    type: defaultEq,
    ilv: defaultIlv,
  },
  hands: {
    type: defaultEq,
    ilv: defaultIlv,
  },
  waist: {
    type: defaultEq,
    ilv: defaultIlv,
  },
  legs: {
    type: defaultEq,
    ilv: defaultIlv,
  },
  feet: {
    type: defaultEq,
    ilv: defaultIlv,
  },
  earrings: {
    type: defaultEq,
    ilv: defaultIlv,
  },
  necklace: {
    type: defaultEq,
    ilv: defaultIlv,
  },
  bracelets: {
    type: defaultEq,
    ilv: defaultIlv,
  },
  ring1: {
    type: defaultEq,
    ilv: defaultIlv,
  },
  ring2: {
    type: defaultEq,
    ilv: defaultIlv,
  },
};

export const defaultEqList = {
  0: Object.assign({}, defaultEqStructure),
  1: Object.assign({}, defaultEqStructure),
  2: Object.assign({}, defaultEqStructure),
  3: Object.assign({}, defaultEqStructure),
  4: Object.assign({}, defaultEqStructure),
  5: Object.assign({}, defaultEqStructure),
  6: Object.assign({}, defaultEqStructure),
  7: Object.assign({}, defaultEqStructure),
};

/**
 * For debugging
 */
export const dummyJobs = {
  0: "DRK",
  1: "GNB",
  2: "AST",
  3: "SCH",
  4: "DRG",
  5: "NIN",
  6: "DNC",
  7: "SMN",
};

export const dummyBis = {
  0: {
    mainArm: {
      type: eqData[0].type,
      ilv: eqData[0].ilv,
    },
    head: {
      type: eqData[2].type,
      ilv: eqData[2].ilv,
    },
    body: {
      type: eqData[2].type,
      ilv: eqData[2].ilv,
    },
    hands: {
      type: eqData[1].type,
      ilv: eqData[1].ilv,
    },
    waist: {
      type: eqData[1].type,
      ilv: eqData[1].ilv,
    },
    legs: {
      type: eqData[1].type,
      ilv: eqData[1].ilv,
    },
    feet: {
      type: eqData[2].type,
      ilv: eqData[2].ilv,
    },
    earrings: {
      type: eqData[2].type,
      ilv: eqData[2].ilv,
    },
    necklace: {
      type: eqData[1].type,
      ilv: eqData[1].ilv,
    },
    bracelets: {
      type: eqData[2].type,
      ilv: eqData[2].ilv,
    },
    ring1: {
      type: eqData[1].type,
      ilv: eqData[1].ilv,
    },
    ring2: {
      type: eqData[2].type,
      ilv: eqData[2].ilv,
    },
  }, // drk bis
  1: {
    mainArm: {
      type: eqData[0].type,
      ilv: eqData[0].ilv,
    },
    head: {
      type: eqData[7].type,
      ilv: eqData[7].ilv,
    },
    body: {
      type: eqData[2].type,
      ilv: eqData[2].ilv,
    },
    hands: {
      type: eqData[1].type,
      ilv: eqData[1].ilv,
    },
    waist: {
      type: eqData[1].type,
      ilv: eqData[1].ilv,
    },
    legs: {
      type: eqData[1].type,
      ilv: eqData[1].ilv,
    },
    feet: {
      type: eqData[2].type,
      ilv: eqData[2].ilv,
    },
    earrings: {
      type: eqData[2].type,
      ilv: eqData[2].ilv,
    },
    necklace: {
      type: eqData[1].type,
      ilv: eqData[1].ilv,
    },
    bracelets: {
      type: eqData[2].type,
      ilv: eqData[2].ilv,
    },
    ring1: {
      type: eqData[2].type,
      ilv: eqData[2].ilv,
    },
    ring2: {
      type: eqData[1].type,
      ilv: eqData[1].ilv,
    },
  }, // gnb bis
  2: {
    mainArm: {
      type: eqData[0].type,
      ilv: eqData[0].ilv,
    },
    head: {
      type: eqData[2].type,
      ilv: eqData[2].ilv,
    },
    body: {
      type: eqData[2].type,
      ilv: eqData[2].ilv,
    },
    hands: {
      type: eqData[1].type,
      ilv: eqData[1].ilv,
    },
    waist: {
      type: eqData[2].type,
      ilv: eqData[2].ilv,
    },
    legs: {
      type: eqData[1].type,
      ilv: eqData[1].ilv,
    },
    feet: {
      type: eqData[2].type,
      ilv: eqData[2].ilv,
    },
    earrings: {
      type: eqData[1].type,
      ilv: eqData[1].ilv,
    },
    necklace: {
      type: eqData[2].type,
      ilv: eqData[2].ilv,
    },
    bracelets: {
      type: eqData[2].type,
      ilv: eqData[2].ilv,
    },
    ring1: {
      type: eqData[2].type,
      ilv: eqData[2].ilv,
    },
    ring2: {
      type: eqData[1].type,
      ilv: eqData[1].ilv,
    },
  }, // ast bis
  3: {
    mainArm: {
      type: eqData[2].type,
      ilv: eqData[2].ilv,
    },
    head: {
      type: eqData[1].type,
      ilv: eqData[1].ilv,
    },
    body: {
      type: eqData[2].type,
      ilv: eqData[2].ilv,
    },
    hands: {
      type: eqData[1].type,
      ilv: eqData[1].ilv,
    },
    waist: {
      type: eqData[2].type,
      ilv: eqData[2].ilv,
    },
    legs: {
      type: eqData[1].type,
      ilv: eqData[1].ilv,
    },
    feet: {
      type: eqData[2].type,
      ilv: eqData[2].ilv,
    },
    earrings: {
      type: eqData[1].type,
      ilv: eqData[1].ilv,
    },
    necklace: {
      type: eqData[2].type,
      ilv: eqData[2].ilv,
    },
    bracelets: {
      type: eqData[1].type,
      ilv: eqData[1].ilv,
    },
    ring1: {
      type: eqData[1].type,
      ilv: eqData[1].ilv,
    },
    ring2: {
      type: eqData[2].type,
      ilv: eqData[2].ilv,
    },
  }, // sch bis
  4: {
    mainArm: {
      type: eqData[0].type,
      ilv: eqData[0].ilv,
    },
    head: {
      type: eqData[2].type,
      ilv: eqData[2].ilv,
    },
    body: {
      type: eqData[1].type,
      ilv: eqData[1].ilv,
    },
    hands: {
      type: eqData[1].type,
      ilv: eqData[1].ilv,
    },
    waist: {
      type: eqData[2].type,
      ilv: eqData[2].ilv,
    },
    legs: {
      type: eqData[1].type,
      ilv: eqData[1].ilv,
    },
    feet: {
      type: eqData[1].type,
      ilv: eqData[1].ilv,
    },
    earrings: {
      type: eqData[1].type,
      ilv: eqData[1].ilv,
    },
    necklace: {
      type: eqData[2].type,
      ilv: eqData[2].ilv,
    },
    bracelets: {
      type: eqData[1].type,
      ilv: eqData[1].ilv,
    },
    ring1: {
      type: eqData[2].type,
      ilv: eqData[2].ilv,
    },
    ring2: {
      type: eqData[1].type,
      ilv: eqData[1].ilv,
    },
  }, // drg bis
  5: {
    mainArm: {
      type: eqData[0].type,
      ilv: eqData[0].ilv,
    },
    head: {
      type: eqData[1].type,
      ilv: eqData[1].ilv,
    },
    body: {
      type: eqData[1].type,
      ilv: eqData[1].ilv,
    },
    hands: {
      type: eqData[2].type,
      ilv: eqData[2].ilv,
    },
    waist: {
      type: eqData[2].type,
      ilv: eqData[2].ilv,
    },
    legs: {
      type: eqData[2].type,
      ilv: eqData[2].ilv,
    },
    feet: {
      type: eqData[1].type,
      ilv: eqData[1].ilv,
    },
    earrings: {
      type: eqData[2].type,
      ilv: eqData[2].ilv,
    },
    necklace: {
      type: eqData[1].type,
      ilv: eqData[1].ilv,
    },
    bracelets: {
      type: eqData[2].type,
      ilv: eqData[2].ilv,
    },
    ring1: {
      type: eqData[2].type,
      ilv: eqData[2].ilv,
    },
    ring2: {
      type: eqData[1].type,
      ilv: eqData[1].ilv,
    },
  }, // nin bis
  6: {
    mainArm: {
      type: eqData[0].type,
      ilv: eqData[0].ilv,
    },
    head: {
      type: eqData[1].type,
      ilv: eqData[1].ilv,
    },
    body: {
      type: eqData[1].type,
      ilv: eqData[1].ilv,
    },
    hands: {
      type: eqData[2].type,
      ilv: eqData[2].ilv,
    },
    waist: {
      type: eqData[2].type,
      ilv: eqData[2].ilv,
    },
    legs: {
      type: eqData[2].type,
      ilv: eqData[2].ilv,
    },
    feet: {
      type: eqData[1].type,
      ilv: eqData[1].ilv,
    },
    earrings: {
      type: eqData[2].type,
      ilv: eqData[2].ilv,
    },
    necklace: {
      type: eqData[1].type,
      ilv: eqData[1].ilv,
    },
    bracelets: {
      type: eqData[2].type,
      ilv: eqData[2].ilv,
    },
    ring1: {
      type: eqData[1].type,
      ilv: eqData[1].ilv,
    },
    ring2: {
      type: eqData[2].type,
      ilv: eqData[2].ilv,
    },
  }, // dnc bis
  7: {
    mainArm: {
      type: eqData[0].type,
      ilv: eqData[0].ilv,
    },
    head: {
      type: eqData[2].type,
      ilv: eqData[2].ilv,
    },
    body: {
      type: eqData[1].type,
      ilv: eqData[1].ilv,
    },
    hands: {
      type: eqData[1].type,
      ilv: eqData[1].ilv,
    },
    waist: {
      type: eqData[2].type,
      ilv: eqData[2].ilv,
    },
    legs: {
      type: eqData[2].type,
      ilv: eqData[2].ilv,
    },
    feet: {
      type: eqData[1].type,
      ilv: eqData[1].ilv,
    },
    earrings: {
      type: eqData[2].type,
      ilv: eqData[2].ilv,
    },
    necklace: {
      type: eqData[1].type,
      ilv: eqData[1].ilv,
    },
    bracelets: {
      type: eqData[1].type,
      ilv: eqData[1].ilv,
    },
    ring1: {
      type: eqData[1].type,
      ilv: eqData[1].ilv,
    },
    ring2: {
      type: eqData[2].type,
      ilv: eqData[2].ilv,
    },
  }, // smn bis
};
