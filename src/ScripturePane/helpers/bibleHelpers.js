import React from 'react';

export const getBiblesWithHighlightedWords = () => {
  return biblesWithHighlightedWords;
};

const biblesWithHighlightedWords = {
  en: {
    ult: {
      manifest: {
        language_id: "en",
        language_name: "English",
        direction: "ltr",
        subject: "Bible",
        resource_id: "ult",
        resource_title: "unfoldingWord Literal Text",
        description: "Gateway Language"
      },
      bibleData: {
        1: {
          1: "",
          2: <span>Paul, a servant of God and an apostle of Jesus Christ, for the faith of God's chosen people and the knowledge of the truth that agrees with godliness,</span>,
          3: "",
          4: <span>Paul, a servant of God and an apostle of Jesus Christ, for the faith of God's chosen people and the knowledge of the truth that agrees with godliness,</span>,
          5: <span>Paul, a servant of God and an apostle of Jesus Christ, for the faith of God's chosen people and the knowledge of the truth that agrees with godliness,</span>,
        }
      }
    },
    udt: {
      manifest: {
        language_id: "en",
        language_name: "English",
        direction: "ltr",
        subject: "Bible",
        resource_id: "udt",
        resource_title: "unfoldingWord Dynamic Text",
        description: "Gateway Language"
      },
      bibleData: {
        1: {
          1: "",
          2: "",
          3: "",
          4: "",
          5: "",
        }
      }
    }
  },
  hi: {
    ulb: {
      manifest: {
        language_id: "hi",
        language_name: "हिन्दी, हिंदी",
        direction: "ltr",
        subject: "Bible",
        resource_id: "ulb",
        resource_title: "Unlocked Literal Bible - Hindi",
        description: "Gateway Language"
      },
      bibleData: {
        1: {
          1: "",
          2: <span>HINDI Paul, a servant of God and an apostle of Jesus Christ, for the faith of God's chosen people and the knowledge of the truth that agrees with godliness,</span>,
          3: "",
          4: "",
          5: "",
        }
      }
    },
    udt: {
      manifest: {
        language_id: "hi",
        language_name: "हिन्दी, हिंदी",
        direction: "ltr",
        subject: "Bible",
        resource_id: "udt",
        resource_title: "Unlocked Dynamic Text",
        description: "Gateway Language",
      },
      bibleData: {
        1: {
          1: "",
          2: <span>HINDI Paul, a servant of God and an apostle of Jesus Christ, for the faith of God's chosen people and the knowledge of the truth that agrees with godliness,</span>,
          3: "",
          4: "",
          5: "",
        }
      }
    }
  },
  originalLanguage: {
    ugnt: {
      manifest: {
        language_id: "el-x-koine",
        language_name: "Koine Greek",
        direction: "ltr",
        subject: "Greek New Testament",
        resource_id: "ugnt",
        resource_title: "Unlocked Greek New Testament",
        description: "Original Language"
      },
      bibleData: {
        1: {
          1: "",
          2: <span>GREEEKKKK Paul, a servant of God and an apostle of Jesus Christ, for the faith of God's chosen people and the knowledge of the truth that agrees with godliness,</span>,
          3: "",
          4: "",
          5: "",
        }
      }
    }
  },
  targetLanguage: {
    targetBible: {
      manifest: {
        language_name: "English",
        direction: "ltr",
        description: "Target Language",
        resource_title: "Target Bible",
      },
      bibleData: {
        1: {
          1: "",
          2: <span>Paul, a servant of God and an apostle of Jesus Christ, for the faith of God's chosen people and the knowledge of the truth that agrees with godliness,</span>,
          3: "",
          4: <span>Paul, a servant of God and an apostle of Jesus Christ, for the faith of God's chosen people and the knowledge of the truth that agrees with godliness,</span>,
          5: <span>Paul, a servant of God and an apostle of Jesus Christ, for the faith of God's chosen people and the knowledge of the truth that agrees with godliness,</span>,
        }
      }
    }
  }
};



