"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var checkAreaHelpers = _interopRequireWildcard(require("../checkAreaHelpers"));

/* eslint-env jest */
describe('checkAreaHelpers.getAlignedGLText', function () {
  var verseObjects = [{
    tag: 'zaln',
    type: 'milestone',
    strong: 'G14870',
    lemma: 'εἰ',
    morph: 'Gr,CS,,,,,,,,',
    occurrence: 1,
    occurrences: 1,
    content: 'εἴ',
    children: [{
      tag: 'zaln',
      type: 'milestone',
      strong: 'G51000',
      lemma: 'τις',
      morph: 'Gr,RI,,,,NMS,',
      occurrence: 1,
      occurrences: 1,
      content: 'τίς',
      children: [{
        text: 'An',
        tag: 'w',
        type: 'word',
        occurrence: 1,
        occurrences: 1
      }, {
        text: 'elder',
        tag: 'w',
        type: 'word',
        occurrence: 1,
        occurrences: 1
      }]
    }]
  }, {
    tag: 'zaln',
    type: 'milestone',
    strong: 'G15100',
    lemma: 'εἰμί',
    morph: 'Gr,V,IPA3,,S,',
    occurrence: 1,
    occurrences: 1,
    content: 'ἐστιν',
    children: [{
      text: 'must',
      tag: 'w',
      type: 'word',
      occurrence: 1,
      occurrences: 1
    }, {
      text: 'be',
      tag: 'w',
      type: 'word',
      occurrence: 1,
      occurrences: 1
    }]
  }, {
    tag: 'zaln',
    type: 'milestone',
    strong: 'G04100',
    lemma: 'ἀνέγκλητος',
    morph: 'Gr,NP,,,,NMS,',
    occurrence: 1,
    occurrences: 1,
    content: 'ἀνέγκλητος',
    children: [{
      text: 'without',
      tag: 'w',
      type: 'word',
      occurrence: 1,
      occurrences: 1
    }, {
      text: 'blame',
      tag: 'w',
      type: 'word',
      occurrence: 1,
      occurrences: 1
    }]
  }, {
    type: 'text',
    text: ','
  }, {
    tag: 'zaln',
    type: 'milestone',
    strong: 'G04350',
    lemma: 'ἀνήρ',
    morph: 'Gr,N,,,,,NMS,',
    occurrence: 1,
    occurrences: 1,
    content: 'ἀνήρ',
    children: [{
      text: 'the',
      tag: 'w',
      type: 'word',
      occurrence: 1,
      occurrences: 1
    }, {
      text: 'husband',
      tag: 'w',
      type: 'word',
      occurrence: 1,
      occurrences: 1
    }]
  }, {
    tag: 'zaln',
    type: 'milestone',
    strong: 'G15200',
    lemma: 'εἷς',
    morph: 'Gr,EN,,,,GFS,',
    occurrence: 1,
    occurrences: 1,
    content: 'μιᾶς',
    children: [{
      text: 'of',
      tag: 'w',
      type: 'word',
      occurrence: 1,
      occurrences: 2
    }, {
      text: 'one',
      tag: 'w',
      type: 'word',
      occurrence: 1,
      occurrences: 1
    }]
  }, {
    tag: 'zaln',
    type: 'milestone',
    strong: 'G11350',
    lemma: 'γυνή',
    morph: 'Gr,N,,,,,GFS,',
    occurrence: 1,
    occurrences: 1,
    content: 'γυναικὸς',
    children: [{
      text: 'wife',
      tag: 'w',
      type: 'word',
      occurrence: 1,
      occurrences: 1
    }]
  }, {
    type: 'text',
    text: ','
  }, {
    tag: 'zaln',
    type: 'milestone',
    strong: 'G21920',
    lemma: 'ἔχω',
    morph: 'Gr,V,PPA,NMS,',
    occurrence: 1,
    occurrences: 1,
    content: 'ἔχων',
    children: [{
      text: 'with',
      tag: 'w',
      type: 'word',
      occurrence: 1,
      occurrences: 1
    }]
  }, {
    tag: 'zaln',
    type: 'milestone',
    strong: 'G41030',
    lemma: 'πιστός',
    morph: 'Gr,NS,,,,ANP,',
    occurrence: 1,
    occurrences: 1,
    content: 'πιστά',
    children: [{
      text: 'faithful',
      tag: 'w',
      type: 'word',
      occurrence: 1,
      occurrences: 1
    }]
  }, {
    tag: 'zaln',
    type: 'milestone',
    strong: 'G50430',
    lemma: 'τέκνον',
    morph: 'Gr,N,,,,,ANP,',
    occurrence: 1,
    occurrences: 1,
    content: 'τέκνα',
    children: [{
      text: 'children',
      tag: 'w',
      type: 'word',
      occurrence: 1,
      occurrences: 1
    }]
  }, {
    tag: 'zaln',
    type: 'milestone',
    strong: 'G33610',
    lemma: 'μή',
    morph: 'Gr,D,,,,,,,,,',
    occurrence: 1,
    occurrences: 1,
    content: 'μὴ',
    children: [{
      text: 'not',
      tag: 'w',
      type: 'word',
      occurrence: 1,
      occurrences: 1
    }]
  }, {
    tag: 'zaln',
    type: 'milestone',
    strong: 'G17220',
    lemma: 'ἐν',
    morph: 'Gr,P,,,,,D,,,',
    occurrence: 1,
    occurrences: 1,
    content: 'ἐν',
    children: [{
      tag: 'zaln',
      type: 'milestone',
      strong: 'G27240',
      lemma: 'κατηγορία',
      morph: 'Gr,N,,,,,DFS,',
      occurrence: 1,
      occurrences: 1,
      content: 'κατηγορίᾳ',
      children: [{
        text: 'accused',
        tag: 'w',
        type: 'word',
        occurrence: 1,
        occurrences: 1
      }]
    }]
  }, {
    tag: 'zaln',
    type: 'milestone',
    strong: 'G08100',
    lemma: 'ἀσωτία',
    morph: 'Gr,N,,,,,GFS,',
    occurrence: 1,
    occurrences: 1,
    content: 'ἀσωτίας',
    children: [{
      text: 'of',
      tag: 'w',
      type: 'word',
      occurrence: 2,
      occurrences: 2
    }, {
      text: 'reckless',
      tag: 'w',
      type: 'word',
      occurrence: 1,
      occurrences: 1
    }, {
      text: 'behavior',
      tag: 'w',
      type: 'word',
      occurrence: 1,
      occurrences: 1
    }]
  }, {
    tag: 'zaln',
    type: 'milestone',
    strong: 'G22280',
    lemma: 'ἤ',
    morph: 'Gr,CC,,,,,,,,',
    occurrence: 1,
    occurrences: 1,
    content: 'ἢ',
    children: [{
      text: 'or',
      tag: 'w',
      type: 'word',
      occurrence: 1,
      occurrences: 1
    }]
  }, {
    tag: 'zaln',
    type: 'milestone',
    strong: 'G05060',
    lemma: 'ἀνυπότακτος',
    morph: 'Gr,NP,,,,ANP,',
    occurrence: 1,
    occurrences: 1,
    content: 'ἀνυπότακτα',
    children: [{
      text: 'undisciplined',
      tag: 'w',
      type: 'word',
      occurrence: 1,
      occurrences: 1
    }]
  }, {
    type: 'text',
    text: '. \n'
  }];
  it('should support quote string', function () {
    // given
    var quote = 'ἀνέγκλητος';
    var occurrenceToMatch = 1;
    var expectedAlignedGLText = 'without blame'; // when

    var alignedGLText = checkAreaHelpers.getAlignedText(verseObjects, quote, occurrenceToMatch); // then

    expect(alignedGLText).toEqual(expectedAlignedGLText);
  });
  it('should support quote array "twelve tribes of Israel"', function () {
    // given
    var quote = [{
      'word': 'δώδεκα',
      'occurrence': 2
    }, {
      'word': 'φυλὰς',
      'occurrence': 1
    }, {
      'word': 'τοῦ',
      'occurrence': 2
    }, {
      'word': 'Ἰσραήλ',
      'occurrence': 1
    }];
    var occurrenceToMatch = 1;
    var verseObjects = [{
      'tag': 'zaln',
      'type': 'milestone',
      'strong': 'G35880',
      'lemma': 'ὁ',
      'morph': 'Gr,EA,,,,NMS,',
      'occurrence': 1,
      'occurrences': 2,
      'content': 'ὁ',
      'children': [{
        'tag': 'zaln',
        'type': 'milestone',
        'strong': 'G11610',
        'lemma': 'δέ',
        'morph': 'Gr,CC,,,,,,,,',
        'occurrence': 1,
        'occurrences': 1,
        'content': 'δὲ',
        'children': [{
          'tag': 'zaln',
          'type': 'milestone',
          'strong': 'G24240',
          'lemma': 'Ἰησοῦς',
          'morph': 'Gr,N,,,,,NMS,',
          'occurrence': 1,
          'occurrences': 1,
          'content': 'Ἰησοῦς',
          'children': [{
            'text': 'Jesus',
            'tag': 'w',
            'type': 'word',
            'occurrence': 1,
            'occurrences': 1
          }],
          'endTag': 'zaln-e\\*'
        }],
        'endTag': 'zaln-e\\*'
      }],
      'endTag': 'zaln-e\\*'
    }, {
      'type': 'text',
      'text': ' '
    }, {
      'tag': 'zaln',
      'type': 'milestone',
      'strong': 'G30040',
      'lemma': 'λέγω',
      'morph': 'Gr,V,IAA3,,S,',
      'occurrence': 1,
      'occurrences': 1,
      'content': 'εἶπεν',
      'children': [{
        'text': 'said',
        'tag': 'w',
        'type': 'word',
        'occurrence': 1,
        'occurrences': 1
      }],
      'endTag': 'zaln-e\\*'
    }, {
      'type': 'text',
      'text': ' '
    }, {
      'tag': 'zaln',
      'type': 'milestone',
      'strong': 'G08460',
      'lemma': 'αὐτός',
      'morph': 'Gr,RP,,,3DMP,',
      'occurrence': 1,
      'occurrences': 1,
      'content': 'αὐτοῖς',
      'children': [{
        'text': 'to',
        'tag': 'w',
        'type': 'word',
        'occurrence': 1,
        'occurrences': 2
      }, {
        'type': 'text',
        'text': ' '
      }, {
        'text': 'them',
        'tag': 'w',
        'type': 'word',
        'occurrence': 1,
        'occurrences': 1
      }],
      'endTag': 'zaln-e\\*'
    }, {
      'type': 'text',
      'text': ', "'
    }, {
      'tag': 'zaln',
      'type': 'milestone',
      'strong': 'G02810',
      'lemma': 'ἀμήν',
      'morph': 'Gr,IE,,,,,,,,',
      'occurrence': 1,
      'occurrences': 1,
      'content': 'ἀμὴν',
      'children': [{
        'text': 'Truly',
        'tag': 'w',
        'type': 'word',
        'occurrence': 1,
        'occurrences': 1
      }],
      'endTag': 'zaln-e\\*'
    }, {
      'type': 'text',
      'text': ' '
    }, {
      'tag': 'zaln',
      'type': 'milestone',
      'strong': 'G30040',
      'lemma': 'λέγω',
      'morph': 'Gr,V,IPA1,,S,',
      'occurrence': 1,
      'occurrences': 1,
      'content': 'λέγω',
      'children': [{
        'text': 'I',
        'tag': 'w',
        'type': 'word',
        'occurrence': 1,
        'occurrences': 1
      }, {
        'type': 'text',
        'text': ' '
      }, {
        'text': 'say',
        'tag': 'w',
        'type': 'word',
        'occurrence': 1,
        'occurrences': 1
      }],
      'endTag': 'zaln-e\\*'
    }, {
      'type': 'text',
      'text': ' '
    }, {
      'tag': 'zaln',
      'type': 'milestone',
      'strong': 'G47710',
      'lemma': 'σύ',
      'morph': 'Gr,RP,,,2D,P,',
      'occurrence': 1,
      'occurrences': 1,
      'content': 'ὑμῖν',
      'children': [{
        'text': 'to',
        'tag': 'w',
        'type': 'word',
        'occurrence': 2,
        'occurrences': 2
      }, {
        'type': 'text',
        'text': ' '
      }, {
        'text': 'you',
        'tag': 'w',
        'type': 'word',
        'occurrence': 1,
        'occurrences': 3
      }],
      'endTag': 'zaln-e\\*'
    }, {
      'type': 'text',
      'text': ', '
    }, {
      'tag': 'zaln',
      'type': 'milestone',
      'strong': 'G17220',
      'lemma': 'ἐν',
      'morph': 'Gr,P,,,,,D,,,',
      'occurrence': 1,
      'occurrences': 1,
      'content': 'ἐν',
      'children': [{
        'text': 'in',
        'tag': 'w',
        'type': 'word',
        'occurrence': 1,
        'occurrences': 1
      }],
      'endTag': 'zaln-e\\*'
    }, {
      'type': 'text',
      'text': ' '
    }, {
      'tag': 'zaln',
      'type': 'milestone',
      'strong': 'G35880',
      'lemma': 'ὁ',
      'morph': 'Gr,EA,,,,DFS,',
      'occurrence': 1,
      'occurrences': 1,
      'content': 'τῇ',
      'children': [{
        'text': 'the',
        'tag': 'w',
        'type': 'word',
        'occurrence': 1,
        'occurrences': 3
      }],
      'endTag': 'zaln-e\\*'
    }, {
      'type': 'text',
      'text': ' '
    }, {
      'tag': 'zaln',
      'type': 'milestone',
      'strong': 'G38240',
      'lemma': 'παλιγγενεσία',
      'morph': 'Gr,N,,,,,DFS,',
      'occurrence': 1,
      'occurrences': 1,
      'content': 'παλιγγενεσίᾳ',
      'children': [{
        'text': 'new',
        'tag': 'w',
        'type': 'word',
        'occurrence': 1,
        'occurrences': 1
      }, {
        'type': 'text',
        'text': ' '
      }, {
        'text': 'age',
        'tag': 'w',
        'type': 'word',
        'occurrence': 1,
        'occurrences': 1
      }],
      'endTag': 'zaln-e\\*'
    }, {
      'type': 'text',
      'text': ' '
    }, {
      'tag': 'zaln',
      'type': 'milestone',
      'strong': 'G37520',
      'lemma': 'ὅταν',
      'morph': 'Gr,CS,,,,,,,,',
      'occurrence': 1,
      'occurrences': 1,
      'content': 'ὅταν',
      'children': [{
        'text': 'when',
        'tag': 'w',
        'type': 'word',
        'occurrence': 1,
        'occurrences': 1
      }],
      'endTag': 'zaln-e\\*'
    }, {
      'type': 'text',
      'text': ' '
    }, {
      'tag': 'zaln',
      'type': 'milestone',
      'strong': 'G35880',
      'lemma': 'ὁ',
      'morph': 'Gr,EA,,,,NMS,',
      'occurrence': 2,
      'occurrences': 2,
      'content': 'ὁ',
      'children': [{
        'text': 'the',
        'tag': 'w',
        'type': 'word',
        'occurrence': 2,
        'occurrences': 3
      }],
      'endTag': 'zaln-e\\*'
    }, {
      'type': 'text',
      'text': ' '
    }, {
      'tag': 'zaln',
      'type': 'milestone',
      'strong': 'G52070',
      'lemma': 'υἱός',
      'morph': 'Gr,N,,,,,NMS,',
      'occurrence': 1,
      'occurrences': 1,
      'content': 'Υἱὸς',
      'children': [{
        'text': 'Son',
        'tag': 'w',
        'type': 'word',
        'occurrence': 1,
        'occurrences': 1
      }],
      'endTag': 'zaln-e\\*'
    }, {
      'type': 'text',
      'text': ' '
    }, {
      'tag': 'zaln',
      'type': 'milestone',
      'strong': 'G35880',
      'lemma': 'ὁ',
      'morph': 'Gr,EA,,,,GMS,',
      'occurrence': 1,
      'occurrences': 2,
      'content': 'τοῦ',
      'children': [{
        'tag': 'zaln',
        'type': 'milestone',
        'strong': 'G04440',
        'lemma': 'ἄνθρωπος',
        'morph': 'Gr,N,,,,,GMS,',
        'occurrence': 1,
        'occurrences': 1,
        'content': 'Ἀνθρώπου',
        'children': [{
          'text': 'of',
          'tag': 'w',
          'type': 'word',
          'occurrence': 1,
          'occurrences': 2
        }, {
          'type': 'text',
          'text': ' '
        }, {
          'text': 'Man',
          'tag': 'w',
          'type': 'word',
          'occurrence': 1,
          'occurrences': 1
        }],
        'endTag': 'zaln-e\\*'
      }],
      'endTag': 'zaln-e\\*'
    }, {
      'type': 'text',
      'text': ' '
    }, {
      'tag': 'zaln',
      'type': 'milestone',
      'strong': 'G25230',
      'lemma': 'καθίζω',
      'morph': 'Gr,V,SAA3,,S,',
      'occurrence': 1,
      'occurrences': 1,
      'content': 'καθίσῃ',
      'children': [{
        'text': 'sits',
        'tag': 'w',
        'type': 'word',
        'occurrence': 1,
        'occurrences': 1
      }],
      'endTag': 'zaln-e\\*'
    }, {
      'type': 'text',
      'text': ' '
    }, {
      'tag': 'zaln',
      'type': 'milestone',
      'strong': 'G19090',
      'lemma': 'ἐπί',
      'morph': 'Gr,P,,,,,G,,,',
      'occurrence': 1,
      'occurrences': 2,
      'content': 'ἐπὶ',
      'children': [{
        'text': 'on',
        'tag': 'w',
        'type': 'word',
        'occurrence': 1,
        'occurrences': 1
      }],
      'endTag': 'zaln-e\\*'
    }, {
      'type': 'text',
      'text': ' '
    }, {
      'tag': 'zaln',
      'type': 'milestone',
      'strong': 'G08460',
      'lemma': 'αὐτός',
      'morph': 'Gr,RP,,,3GMS,',
      'occurrence': 1,
      'occurrences': 1,
      'content': 'αὐτοῦ',
      'children': [{
        'text': 'his',
        'tag': 'w',
        'type': 'word',
        'occurrence': 1,
        'occurrences': 1
      }],
      'endTag': 'zaln-e\\*'
    }, {
      'type': 'text',
      'text': ' '
    }, {
      'tag': 'zaln',
      'type': 'milestone',
      'strong': 'G13910',
      'lemma': 'δόξα',
      'morph': 'Gr,N,,,,,GFS,',
      'occurrence': 1,
      'occurrences': 1,
      'content': 'δόξης',
      'children': [{
        'text': 'glorious',
        'tag': 'w',
        'type': 'word',
        'occurrence': 1,
        'occurrences': 1
      }],
      'endTag': 'zaln-e\\*'
    }, {
      'type': 'text',
      'text': ' '
    }, {
      'tag': 'zaln',
      'type': 'milestone',
      'strong': 'G23620',
      'lemma': 'θρόνος',
      'morph': 'Gr,N,,,,,GMS,',
      'occurrence': 1,
      'occurrences': 1,
      'content': 'θρόνου',
      'children': [{
        'text': 'throne',
        'tag': 'w',
        'type': 'word',
        'occurrence': 1,
        'occurrences': 1
      }],
      'endTag': 'zaln-e\\*'
    }, {
      'type': 'text',
      'text': ', '
    }, {
      'tag': 'zaln',
      'type': 'milestone',
      'strong': 'G37540',
      'lemma': 'ὅτι',
      'morph': 'Gr,CS,,,,,,,,',
      'occurrence': 1,
      'occurrences': 1,
      'content': 'ὅτι',
      'children': [{
        'tag': 'zaln',
        'type': 'milestone',
        'strong': 'G47710',
        'lemma': 'σύ',
        'morph': 'Gr,RP,,,2N,P,',
        'occurrence': 1,
        'occurrences': 2,
        'content': 'ὑμεῖς',
        'children': [{
          'text': 'you',
          'tag': 'w',
          'type': 'word',
          'occurrence': 2,
          'occurrences': 3
        }],
        'endTag': 'zaln-e\\*'
      }],
      'endTag': 'zaln-e\\*'
    }, {
      'type': 'text',
      'text': ' '
    }, {
      'tag': 'zaln',
      'type': 'milestone',
      'strong': 'G35880',
      'lemma': 'ὁ',
      'morph': 'Gr,RR,,,,NMP,',
      'occurrence': 1,
      'occurrences': 1,
      'content': 'οἱ',
      'children': [{
        'tag': 'zaln',
        'type': 'milestone',
        'strong': 'G01900',
        'lemma': 'ἀκολουθέω',
        'morph': 'Gr,V,PAA,NMP,',
        'occurrence': 1,
        'occurrences': 1,
        'content': 'ἀκολουθήσαντές',
        'children': [{
          'text': 'who',
          'tag': 'w',
          'type': 'word',
          'occurrence': 1,
          'occurrences': 1
        }, {
          'type': 'text',
          'text': ' '
        }, {
          'text': 'have',
          'tag': 'w',
          'type': 'word',
          'occurrence': 1,
          'occurrences': 1
        }, {
          'type': 'text',
          'text': ' '
        }, {
          'text': 'followed',
          'tag': 'w',
          'type': 'word',
          'occurrence': 1,
          'occurrences': 1
        }],
        'endTag': 'zaln-e\\*'
      }],
      'endTag': 'zaln-e\\*'
    }, {
      'type': 'text',
      'text': ' '
    }, {
      'tag': 'zaln',
      'type': 'milestone',
      'strong': 'G14730',
      'lemma': 'ἐγώ',
      'morph': 'Gr,RP,,,1D,S,',
      'occurrence': 1,
      'occurrences': 1,
      'content': 'μοι',
      'children': [{
        'text': 'me',
        'tag': 'w',
        'type': 'word',
        'occurrence': 1,
        'occurrences': 1
      }],
      'endTag': 'zaln-e\\*'
    }, {
      'type': 'text',
      'text': ', '
    }, {
      'tag': 'zaln',
      'type': 'milestone',
      'strong': 'G47710',
      'lemma': 'σύ',
      'morph': 'Gr,RP,,,2N,P,',
      'occurrence': 2,
      'occurrences': 2,
      'content': 'ὑμεῖς',
      'children': [{
        'text': 'you',
        'tag': 'w',
        'type': 'word',
        'occurrence': 3,
        'occurrences': 3
      }],
      'endTag': 'zaln-e\\*'
    }, {
      'type': 'text',
      'text': ' '
    }, {
      'tag': 'zaln',
      'type': 'milestone',
      'strong': 'G25210',
      'lemma': 'κάθημαι',
      'morph': 'Gr,V,IFM2,,P,',
      'occurrence': 1,
      'occurrences': 1,
      'content': 'καθήσεσθε',
      'children': [{
        'text': 'will',
        'tag': 'w',
        'type': 'word',
        'occurrence': 1,
        'occurrences': 1
      }],
      'endTag': 'zaln-e\\*'
    }, {
      'type': 'text',
      'text': ' '
    }, {
      'tag': 'zaln',
      'type': 'milestone',
      'strong': 'G25320',
      'lemma': 'καί',
      'morph': 'Gr,D,,,,,,,,,',
      'occurrence': 1,
      'occurrences': 1,
      'content': 'καὶ',
      'children': [{
        'text': 'also',
        'tag': 'w',
        'type': 'word',
        'occurrence': 1,
        'occurrences': 1
      }],
      'endTag': 'zaln-e\\*'
    }, {
      'type': 'text',
      'text': ' '
    }, {
      'tag': 'zaln',
      'type': 'milestone',
      'strong': 'G25210',
      'lemma': 'κάθημαι',
      'morph': 'Gr,V,IFM2,,P,',
      'occurrence': 1,
      'occurrences': 1,
      'content': 'καθήσεσθε',
      'children': [{
        'text': 'sit',
        'tag': 'w',
        'type': 'word',
        'occurrence': 1,
        'occurrences': 1
      }],
      'endTag': 'zaln-e\\*'
    }, {
      'type': 'text',
      'text': ' '
    }, {
      'tag': 'zaln',
      'type': 'milestone',
      'strong': 'G19090',
      'lemma': 'ἐπί',
      'morph': 'Gr,P,,,,,A,,,',
      'occurrence': 2,
      'occurrences': 2,
      'content': 'ἐπὶ',
      'children': [{
        'text': 'upon',
        'tag': 'w',
        'type': 'word',
        'occurrence': 1,
        'occurrences': 1
      }],
      'endTag': 'zaln-e\\*'
    }, {
      'type': 'text',
      'text': ' '
    }, {
      'tag': 'zaln',
      'type': 'milestone',
      'strong': 'G14270',
      'lemma': 'δώδεκα',
      'morph': 'Gr,EN,,,,AMPI',
      'occurrence': 1,
      'occurrences': 2,
      'content': 'δώδεκα',
      'children': [{
        'text': 'twelve',
        'tag': 'w',
        'type': 'word',
        'occurrence': 1,
        'occurrences': 2
      }],
      'endTag': 'zaln-e\\*'
    }, {
      'type': 'text',
      'text': ' '
    }, {
      'tag': 'zaln',
      'type': 'milestone',
      'strong': 'G23620',
      'lemma': 'θρόνος',
      'morph': 'Gr,N,,,,,AMP,',
      'occurrence': 1,
      'occurrences': 1,
      'content': 'θρόνους',
      'children': [{
        'text': 'thrones',
        'tag': 'w',
        'type': 'word',
        'occurrence': 1,
        'occurrences': 1
      }],
      'endTag': 'zaln-e\\*'
    }, {
      'type': 'text',
      'text': ', '
    }, {
      'tag': 'zaln',
      'type': 'milestone',
      'strong': 'G29190',
      'lemma': 'κρίνω',
      'morph': 'Gr,V,PPA,NMP,',
      'occurrence': 1,
      'occurrences': 1,
      'content': 'κρίνοντες',
      'children': [{
        'text': 'judging',
        'tag': 'w',
        'type': 'word',
        'occurrence': 1,
        'occurrences': 1
      }],
      'endTag': 'zaln-e\\*'
    }, {
      'type': 'text',
      'text': ' '
    }, {
      'tag': 'zaln',
      'type': 'milestone',
      'strong': 'G35880',
      'lemma': 'ὁ',
      'morph': 'Gr,EA,,,,AFP,',
      'occurrence': 1,
      'occurrences': 1,
      'content': 'τὰς',
      'children': [{
        'text': 'the',
        'tag': 'w',
        'type': 'word',
        'occurrence': 3,
        'occurrences': 3
      }],
      'endTag': 'zaln-e\\*'
    }, {
      'type': 'text',
      'text': ' '
    }, {
      'tag': 'zaln',
      'type': 'milestone',
      'strong': 'G14270',
      'lemma': 'δώδεκα',
      'morph': 'Gr,EN,,,,AFP,',
      'occurrence': 2,
      'occurrences': 2,
      'content': 'δώδεκα',
      'children': [{
        'text': 'twelve',
        'tag': 'w',
        'type': 'word',
        'occurrence': 2,
        'occurrences': 2
      }],
      'endTag': 'zaln-e\\*'
    }, {
      'type': 'text',
      'text': ' '
    }, {
      'tag': 'zaln',
      'type': 'milestone',
      'strong': 'G54430',
      'lemma': 'φυλή',
      'morph': 'Gr,N,,,,,AFP,',
      'occurrence': 1,
      'occurrences': 1,
      'content': 'φυλὰς',
      'children': [{
        'text': 'tribes',
        'tag': 'w',
        'type': 'word',
        'occurrence': 1,
        'occurrences': 1
      }],
      'endTag': 'zaln-e\\*'
    }, {
      'type': 'text',
      'text': ' '
    }, {
      'tag': 'zaln',
      'type': 'milestone',
      'strong': 'G35880',
      'lemma': 'ὁ',
      'morph': 'Gr,EA,,,,GMS,',
      'occurrence': 2,
      'occurrences': 2,
      'content': 'τοῦ',
      'children': [{
        'tag': 'zaln',
        'type': 'milestone',
        'strong': 'G24740',
        'lemma': 'Ἰσραήλ',
        'morph': 'Gr,N,,,,,GMSI',
        'occurrence': 1,
        'occurrences': 1,
        'content': 'Ἰσραήλ',
        'children': [{
          'text': 'of',
          'tag': 'w',
          'type': 'word',
          'occurrence': 2,
          'occurrences': 2
        }, {
          'type': 'text',
          'text': ' '
        }, {
          'text': 'Israel',
          'tag': 'w',
          'type': 'word',
          'occurrence': 1,
          'occurrences': 1
        }],
        'endTag': 'zaln-e\\*'
      }],
      'endTag': 'zaln-e\\*'
    }, {
      'type': 'text',
      'text': '.\n\n'
    }, {
      'tag': 's5',
      'type': 'section',
      'content': ' \n'
    }];
    var expectedAlignedGLText = 'twelve tribes of Israel'; // when

    var alignedGLText = checkAreaHelpers.getAlignedText(verseObjects, quote, occurrenceToMatch); // then

    expect(alignedGLText).toEqual(expectedAlignedGLText);
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9WZXJzZUNoZWNrL2hlbHBlcnMvX190ZXN0c19fL2NoZWNrQXJlYUhlbHBlcnMudGVzdC5qcyJdLCJuYW1lcyI6WyJkZXNjcmliZSIsInZlcnNlT2JqZWN0cyIsInRhZyIsInR5cGUiLCJzdHJvbmciLCJsZW1tYSIsIm1vcnBoIiwib2NjdXJyZW5jZSIsIm9jY3VycmVuY2VzIiwiY29udGVudCIsImNoaWxkcmVuIiwidGV4dCIsIml0IiwicXVvdGUiLCJvY2N1cnJlbmNlVG9NYXRjaCIsImV4cGVjdGVkQWxpZ25lZEdMVGV4dCIsImFsaWduZWRHTFRleHQiLCJjaGVja0FyZWFIZWxwZXJzIiwiZ2V0QWxpZ25lZFRleHQiLCJleHBlY3QiLCJ0b0VxdWFsIl0sIm1hcHBpbmdzIjoiOzs7O0FBQ0E7O0FBREE7QUFHQUEsUUFBUSxDQUFDLG1DQUFELEVBQXNDLFlBQU07QUFDbEQsTUFBTUMsWUFBWSxHQUFHLENBQ25CO0FBQ0VDLElBQUFBLEdBQUcsRUFBRSxNQURQO0FBRUVDLElBQUFBLElBQUksRUFBRSxXQUZSO0FBR0VDLElBQUFBLE1BQU0sRUFBRSxRQUhWO0FBSUVDLElBQUFBLEtBQUssRUFBRSxJQUpUO0FBS0VDLElBQUFBLEtBQUssRUFBRSxlQUxUO0FBTUVDLElBQUFBLFVBQVUsRUFBRSxDQU5kO0FBT0VDLElBQUFBLFdBQVcsRUFBRSxDQVBmO0FBUUVDLElBQUFBLE9BQU8sRUFBRSxJQVJYO0FBU0VDLElBQUFBLFFBQVEsRUFBRSxDQUNSO0FBQ0VSLE1BQUFBLEdBQUcsRUFBRSxNQURQO0FBRUVDLE1BQUFBLElBQUksRUFBRSxXQUZSO0FBR0VDLE1BQUFBLE1BQU0sRUFBRSxRQUhWO0FBSUVDLE1BQUFBLEtBQUssRUFBRSxLQUpUO0FBS0VDLE1BQUFBLEtBQUssRUFBRSxlQUxUO0FBTUVDLE1BQUFBLFVBQVUsRUFBRSxDQU5kO0FBT0VDLE1BQUFBLFdBQVcsRUFBRSxDQVBmO0FBUUVDLE1BQUFBLE9BQU8sRUFBRSxLQVJY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QVRkO0FBMENFLGdCQUFVO0FBMUNaLEtBLzRCbUIsRUEyN0JuQjtBQUNFLGNBQVEsTUFEVjtBQUVFLGNBQVE7QUFGVixLQTM3Qm1CLEVBKzdCbkI7QUFDRSxhQUFPLElBRFQ7QUFFRSxjQUFRLFNBRlY7QUFHRSxpQkFBVztBQUhiLEtBLzdCbUIsQ0FBckI7QUFxOEJBLFFBQU1jLHFCQUFxQixHQUFHLHlCQUE5QixDQTE5QitELENBNDlCL0Q7O0FBQ0EsUUFBTUMsYUFBYSxHQUFHQyxnQkFBZ0IsQ0FBQ0MsY0FBakIsQ0FBZ0NqQixZQUFoQyxFQUE4Q1ksS0FBOUMsRUFBcURDLGlCQUFyRCxDQUF0QixDQTc5QitELENBKzlCL0Q7O0FBQ0FLLElBQUFBLE1BQU0sQ0FBQ0gsYUFBRCxDQUFOLENBQXNCSSxPQUF0QixDQUE4QkwscUJBQTlCO0FBQ0QsR0FqK0JDLENBQUY7QUFrK0JELENBbDFDTyxDQUFSIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWVudiBqZXN0ICovXG5pbXBvcnQgKiBhcyBjaGVja0FyZWFIZWxwZXJzIGZyb20gJy4uL2NoZWNrQXJlYUhlbHBlcnMnO1xuXG5kZXNjcmliZSgnY2hlY2tBcmVhSGVscGVycy5nZXRBbGlnbmVkR0xUZXh0JywgKCkgPT4ge1xuICBjb25zdCB2ZXJzZU9iamVjdHMgPSBbXG4gICAge1xuICAgICAgdGFnOiAnemFsbicsXG4gICAgICB0eXBlOiAnbWlsZXN0b25lJyxcbiAgICAgIHN0cm9uZzogJ0cxNDg3MCcsXG4gICAgICBsZW1tYTogJ8614bywJyxcbiAgICAgIG1vcnBoOiAnR3IsQ1MsLCwsLCwsLCcsXG4gICAgICBvY2N1cnJlbmNlOiAxLFxuICAgICAgb2NjdXJyZW5jZXM6IDEsXG4gICAgICBjb250ZW50OiAnzrXhvLQnLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAge1xuICAgICAgICAgIHRhZzogJ3phbG4nLFxuICAgICAgICAgIHR5cGU6ICdtaWxlc3RvbmUnLFxuICAgICAgICAgIHN0cm9uZzogJ0c1MTAwMCcsXG4gICAgICAgICAgbGVtbWE6ICfPhM65z4InLFxuICAgICAgICAgIG1vcnBoOiAnR3IsUkksLCwsTk1TLCcsXG4gICAgICAgICAgb2NjdXJyZW5jZTogMSxcbiAgICAgICAgICBvY2N1cnJlbmNlczogMSxcbiAgICAgICAgICBjb250ZW50OiAnz4TOr8+CJyxcbiAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnQW4nLFxuICAgICAgICAgICAgICB0YWc6ICd3JyxcbiAgICAgICAgICAgICAgdHlwZTogJ3dvcmQnLFxuICAgICAgICAgICAgICBvY2N1cnJlbmNlOiAxLFxuICAgICAgICAgICAgICBvY2N1cnJlbmNlczogMSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdlbGRlcicsXG4gICAgICAgICAgICAgIHRhZzogJ3cnLFxuICAgICAgICAgICAgICB0eXBlOiAnd29yZCcsXG4gICAgICAgICAgICAgIG9jY3VycmVuY2U6IDEsXG4gICAgICAgICAgICAgIG9jY3VycmVuY2VzOiAxLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRhZzogJ3phbG4nLFxuICAgICAgdHlwZTogJ21pbGVzdG9uZScsXG4gICAgICBzdHJvbmc6ICdHMTUxMDAnLFxuICAgICAgbGVtbWE6ICfOteG8sM68zq8nLFxuICAgICAgbW9ycGg6ICdHcixWLElQQTMsLFMsJyxcbiAgICAgIG9jY3VycmVuY2U6IDEsXG4gICAgICBvY2N1cnJlbmNlczogMSxcbiAgICAgIGNvbnRlbnQ6ICfhvJDPg8+EzrnOvScsXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ211c3QnLFxuICAgICAgICAgIHRhZzogJ3cnLFxuICAgICAgICAgIHR5cGU6ICd3b3JkJyxcbiAgICAgICAgICBvY2N1cnJlbmNlOiAxLFxuICAgICAgICAgIG9jY3VycmVuY2VzOiAxLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ2JlJyxcbiAgICAgICAgICB0YWc6ICd3JyxcbiAgICAgICAgICB0eXBlOiAnd29yZCcsXG4gICAgICAgICAgb2NjdXJyZW5jZTogMSxcbiAgICAgICAgICBvY2N1cnJlbmNlczogMSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0YWc6ICd6YWxuJyxcbiAgICAgIHR5cGU6ICdtaWxlc3RvbmUnLFxuICAgICAgc3Ryb25nOiAnRzA0MTAwJyxcbiAgICAgIGxlbW1hOiAn4byAzr3Orc6zzrrOu863z4TOv8+CJyxcbiAgICAgIG1vcnBoOiAnR3IsTlAsLCwsTk1TLCcsXG4gICAgICBvY2N1cnJlbmNlOiAxLFxuICAgICAgb2NjdXJyZW5jZXM6IDEsXG4gICAgICBjb250ZW50OiAn4byAzr3Orc6zzrrOu863z4TOv8+CJyxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnd2l0aG91dCcsXG4gICAgICAgICAgdGFnOiAndycsXG4gICAgICAgICAgdHlwZTogJ3dvcmQnLFxuICAgICAgICAgIG9jY3VycmVuY2U6IDEsXG4gICAgICAgICAgb2NjdXJyZW5jZXM6IDEsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnYmxhbWUnLFxuICAgICAgICAgIHRhZzogJ3cnLFxuICAgICAgICAgIHR5cGU6ICd3b3JkJyxcbiAgICAgICAgICBvY2N1cnJlbmNlOiAxLFxuICAgICAgICAgIG9jY3VycmVuY2VzOiAxLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIHRleHQ6ICcsJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRhZzogJ3phbG4nLFxuICAgICAgdHlwZTogJ21pbGVzdG9uZScsXG4gICAgICBzdHJvbmc6ICdHMDQzNTAnLFxuICAgICAgbGVtbWE6ICfhvIDOvc6uz4EnLFxuICAgICAgbW9ycGg6ICdHcixOLCwsLCxOTVMsJyxcbiAgICAgIG9jY3VycmVuY2U6IDEsXG4gICAgICBvY2N1cnJlbmNlczogMSxcbiAgICAgIGNvbnRlbnQ6ICfhvIDOvc6uz4EnLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICd0aGUnLFxuICAgICAgICAgIHRhZzogJ3cnLFxuICAgICAgICAgIHR5cGU6ICd3b3JkJyxcbiAgICAgICAgICBvY2N1cnJlbmNlOiAxLFxuICAgICAgICAgIG9jY3VycmVuY2VzOiAxLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ2h1c2JhbmQnLFxuICAgICAgICAgIHRhZzogJ3cnLFxuICAgICAgICAgIHR5cGU6ICd3b3JkJyxcbiAgICAgICAgICBvY2N1cnJlbmNlOiAxLFxuICAgICAgICAgIG9jY3VycmVuY2VzOiAxLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRhZzogJ3phbG4nLFxuICAgICAgdHlwZTogJ21pbGVzdG9uZScsXG4gICAgICBzdHJvbmc6ICdHMTUyMDAnLFxuICAgICAgbGVtbWE6ICfOteG8t8+CJyxcbiAgICAgIG1vcnBoOiAnR3IsRU4sLCwsR0ZTLCcsXG4gICAgICBvY2N1cnJlbmNlOiAxLFxuICAgICAgb2NjdXJyZW5jZXM6IDEsXG4gICAgICBjb250ZW50OiAnzrzOueG+ts+CJyxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnb2YnLFxuICAgICAgICAgIHRhZzogJ3cnLFxuICAgICAgICAgIHR5cGU6ICd3b3JkJyxcbiAgICAgICAgICBvY2N1cnJlbmNlOiAxLFxuICAgICAgICAgIG9jY3VycmVuY2VzOiAyLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ29uZScsXG4gICAgICAgICAgdGFnOiAndycsXG4gICAgICAgICAgdHlwZTogJ3dvcmQnLFxuICAgICAgICAgIG9jY3VycmVuY2U6IDEsXG4gICAgICAgICAgb2NjdXJyZW5jZXM6IDEsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGFnOiAnemFsbicsXG4gICAgICB0eXBlOiAnbWlsZXN0b25lJyxcbiAgICAgIHN0cm9uZzogJ0cxMTM1MCcsXG4gICAgICBsZW1tYTogJ86zz4XOvc6uJyxcbiAgICAgIG1vcnBoOiAnR3IsTiwsLCwsR0ZTLCcsXG4gICAgICBvY2N1cnJlbmNlOiAxLFxuICAgICAgb2NjdXJyZW5jZXM6IDEsXG4gICAgICBjb250ZW50OiAnzrPPhc69zrHOuc664b24z4InLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICd3aWZlJyxcbiAgICAgICAgICB0YWc6ICd3JyxcbiAgICAgICAgICB0eXBlOiAnd29yZCcsXG4gICAgICAgICAgb2NjdXJyZW5jZTogMSxcbiAgICAgICAgICBvY2N1cnJlbmNlczogMSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICB0ZXh0OiAnLCcsXG4gICAgfSxcbiAgICB7XG4gICAgICB0YWc6ICd6YWxuJyxcbiAgICAgIHR5cGU6ICdtaWxlc3RvbmUnLFxuICAgICAgc3Ryb25nOiAnRzIxOTIwJyxcbiAgICAgIGxlbW1hOiAn4byUz4fPiScsXG4gICAgICBtb3JwaDogJ0dyLFYsUFBBLE5NUywnLFxuICAgICAgb2NjdXJyZW5jZTogMSxcbiAgICAgIG9jY3VycmVuY2VzOiAxLFxuICAgICAgY29udGVudDogJ+G8lM+Hz4nOvScsXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ3dpdGgnLFxuICAgICAgICAgIHRhZzogJ3cnLFxuICAgICAgICAgIHR5cGU6ICd3b3JkJyxcbiAgICAgICAgICBvY2N1cnJlbmNlOiAxLFxuICAgICAgICAgIG9jY3VycmVuY2VzOiAxLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRhZzogJ3phbG4nLFxuICAgICAgdHlwZTogJ21pbGVzdG9uZScsXG4gICAgICBzdHJvbmc6ICdHNDEwMzAnLFxuICAgICAgbGVtbWE6ICfPgM65z4PPhM+Mz4InLFxuICAgICAgbW9ycGg6ICdHcixOUywsLCxBTlAsJyxcbiAgICAgIG9jY3VycmVuY2U6IDEsXG4gICAgICBvY2N1cnJlbmNlczogMSxcbiAgICAgIGNvbnRlbnQ6ICfPgM65z4PPhM6sJyxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnZmFpdGhmdWwnLFxuICAgICAgICAgIHRhZzogJ3cnLFxuICAgICAgICAgIHR5cGU6ICd3b3JkJyxcbiAgICAgICAgICBvY2N1cnJlbmNlOiAxLFxuICAgICAgICAgIG9jY3VycmVuY2VzOiAxLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRhZzogJ3phbG4nLFxuICAgICAgdHlwZTogJ21pbGVzdG9uZScsXG4gICAgICBzdHJvbmc6ICdHNTA0MzAnLFxuICAgICAgbGVtbWE6ICfPhM6tzrrOvc6/zr0nLFxuICAgICAgbW9ycGg6ICdHcixOLCwsLCxBTlAsJyxcbiAgICAgIG9jY3VycmVuY2U6IDEsXG4gICAgICBvY2N1cnJlbmNlczogMSxcbiAgICAgIGNvbnRlbnQ6ICfPhM6tzrrOvc6xJyxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnY2hpbGRyZW4nLFxuICAgICAgICAgIHRhZzogJ3cnLFxuICAgICAgICAgIHR5cGU6ICd3b3JkJyxcbiAgICAgICAgICBvY2N1cnJlbmNlOiAxLFxuICAgICAgICAgIG9jY3VycmVuY2VzOiAxLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRhZzogJ3phbG4nLFxuICAgICAgdHlwZTogJ21pbGVzdG9uZScsXG4gICAgICBzdHJvbmc6ICdHMzM2MTAnLFxuICAgICAgbGVtbWE6ICfOvM6uJyxcbiAgICAgIG1vcnBoOiAnR3IsRCwsLCwsLCwsLCcsXG4gICAgICBvY2N1cnJlbmNlOiAxLFxuICAgICAgb2NjdXJyZW5jZXM6IDEsXG4gICAgICBjb250ZW50OiAnzrzhvbQnLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdub3QnLFxuICAgICAgICAgIHRhZzogJ3cnLFxuICAgICAgICAgIHR5cGU6ICd3b3JkJyxcbiAgICAgICAgICBvY2N1cnJlbmNlOiAxLFxuICAgICAgICAgIG9jY3VycmVuY2VzOiAxLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRhZzogJ3phbG4nLFxuICAgICAgdHlwZTogJ21pbGVzdG9uZScsXG4gICAgICBzdHJvbmc6ICdHMTcyMjAnLFxuICAgICAgbGVtbWE6ICfhvJDOvScsXG4gICAgICBtb3JwaDogJ0dyLFAsLCwsLEQsLCwnLFxuICAgICAgb2NjdXJyZW5jZTogMSxcbiAgICAgIG9jY3VycmVuY2VzOiAxLFxuICAgICAgY29udGVudDogJ+G8kM69JyxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0YWc6ICd6YWxuJyxcbiAgICAgICAgICB0eXBlOiAnbWlsZXN0b25lJyxcbiAgICAgICAgICBzdHJvbmc6ICdHMjcyNDAnLFxuICAgICAgICAgIGxlbW1hOiAnzrrOsc+EzrfOs86/z4HOr86xJyxcbiAgICAgICAgICBtb3JwaDogJ0dyLE4sLCwsLERGUywnLFxuICAgICAgICAgIG9jY3VycmVuY2U6IDEsXG4gICAgICAgICAgb2NjdXJyZW5jZXM6IDEsXG4gICAgICAgICAgY29udGVudDogJ866zrHPhM63zrPOv8+Bzq/hvrMnLFxuICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdhY2N1c2VkJyxcbiAgICAgICAgICAgICAgdGFnOiAndycsXG4gICAgICAgICAgICAgIHR5cGU6ICd3b3JkJyxcbiAgICAgICAgICAgICAgb2NjdXJyZW5jZTogMSxcbiAgICAgICAgICAgICAgb2NjdXJyZW5jZXM6IDEsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGFnOiAnemFsbicsXG4gICAgICB0eXBlOiAnbWlsZXN0b25lJyxcbiAgICAgIHN0cm9uZzogJ0cwODEwMCcsXG4gICAgICBsZW1tYTogJ+G8gM+Dz4nPhM6vzrEnLFxuICAgICAgbW9ycGg6ICdHcixOLCwsLCxHRlMsJyxcbiAgICAgIG9jY3VycmVuY2U6IDEsXG4gICAgICBvY2N1cnJlbmNlczogMSxcbiAgICAgIGNvbnRlbnQ6ICfhvIDPg8+Jz4TOr86xz4InLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdvZicsXG4gICAgICAgICAgdGFnOiAndycsXG4gICAgICAgICAgdHlwZTogJ3dvcmQnLFxuICAgICAgICAgIG9jY3VycmVuY2U6IDIsXG4gICAgICAgICAgb2NjdXJyZW5jZXM6IDIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAncmVja2xlc3MnLFxuICAgICAgICAgIHRhZzogJ3cnLFxuICAgICAgICAgIHR5cGU6ICd3b3JkJyxcbiAgICAgICAgICBvY2N1cnJlbmNlOiAxLFxuICAgICAgICAgIG9jY3VycmVuY2VzOiAxLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ2JlaGF2aW9yJyxcbiAgICAgICAgICB0YWc6ICd3JyxcbiAgICAgICAgICB0eXBlOiAnd29yZCcsXG4gICAgICAgICAgb2NjdXJyZW5jZTogMSxcbiAgICAgICAgICBvY2N1cnJlbmNlczogMSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0YWc6ICd6YWxuJyxcbiAgICAgIHR5cGU6ICdtaWxlc3RvbmUnLFxuICAgICAgc3Ryb25nOiAnRzIyMjgwJyxcbiAgICAgIGxlbW1hOiAn4bykJyxcbiAgICAgIG1vcnBoOiAnR3IsQ0MsLCwsLCwsLCcsXG4gICAgICBvY2N1cnJlbmNlOiAxLFxuICAgICAgb2NjdXJyZW5jZXM6IDEsXG4gICAgICBjb250ZW50OiAn4byiJyxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnb3InLFxuICAgICAgICAgIHRhZzogJ3cnLFxuICAgICAgICAgIHR5cGU6ICd3b3JkJyxcbiAgICAgICAgICBvY2N1cnJlbmNlOiAxLFxuICAgICAgICAgIG9jY3VycmVuY2VzOiAxLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRhZzogJ3phbG4nLFxuICAgICAgdHlwZTogJ21pbGVzdG9uZScsXG4gICAgICBzdHJvbmc6ICdHMDUwNjAnLFxuICAgICAgbGVtbWE6ICfhvIDOvc+Fz4DPjM+EzrHOus+Ezr/PgicsXG4gICAgICBtb3JwaDogJ0dyLE5QLCwsLEFOUCwnLFxuICAgICAgb2NjdXJyZW5jZTogMSxcbiAgICAgIG9jY3VycmVuY2VzOiAxLFxuICAgICAgY29udGVudDogJ+G8gM69z4XPgM+Mz4TOsc66z4TOsScsXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ3VuZGlzY2lwbGluZWQnLFxuICAgICAgICAgIHRhZzogJ3cnLFxuICAgICAgICAgIHR5cGU6ICd3b3JkJyxcbiAgICAgICAgICBvY2N1cnJlbmNlOiAxLFxuICAgICAgICAgIG9jY3VycmVuY2VzOiAxLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIHRleHQ6ICcuIFxcbicsXG4gICAgfSxcbiAgXTtcblxuICBpdCgnc2hvdWxkIHN1cHBvcnQgcXVvdGUgc3RyaW5nJywgKCkgPT4ge1xuICAgIC8vIGdpdmVuXG4gICAgY29uc3QgcXVvdGUgPSAn4byAzr3Orc6zzrrOu863z4TOv8+CJztcbiAgICBjb25zdCBvY2N1cnJlbmNlVG9NYXRjaCA9IDE7XG4gICAgY29uc3QgZXhwZWN0ZWRBbGlnbmVkR0xUZXh0ID0gJ3dpdGhvdXQgYmxhbWUnO1xuXG4gICAgLy8gd2hlblxuICAgIGNvbnN0IGFsaWduZWRHTFRleHQgPSBjaGVja0FyZWFIZWxwZXJzLmdldEFsaWduZWRUZXh0KHZlcnNlT2JqZWN0cywgcXVvdGUsIG9jY3VycmVuY2VUb01hdGNoKTtcblxuICAgIC8vIHRoZW5cbiAgICBleHBlY3QoYWxpZ25lZEdMVGV4dCkudG9FcXVhbChleHBlY3RlZEFsaWduZWRHTFRleHQpO1xuICB9KTtcblxuICBpdCgnc2hvdWxkIHN1cHBvcnQgcXVvdGUgYXJyYXkgXCJ0d2VsdmUgdHJpYmVzIG9mIElzcmFlbFwiJywgKCkgPT4ge1xuICAgIC8vIGdpdmVuXG4gICAgY29uc3QgcXVvdGUgPSBbXG4gICAgICB7XG4gICAgICAgICd3b3JkJzogJ860z47OtM61zrrOsScsXG4gICAgICAgICdvY2N1cnJlbmNlJzogMixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd3b3JkJzogJ8+Gz4XOu+G9sM+CJyxcbiAgICAgICAgJ29jY3VycmVuY2UnOiAxLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3dvcmQnOiAnz4TOv+G/picsXG4gICAgICAgICdvY2N1cnJlbmNlJzogMixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd3b3JkJzogJ+G8uM+Dz4HOsc6uzrsnLFxuICAgICAgICAnb2NjdXJyZW5jZSc6IDEsXG4gICAgICB9LFxuICAgIF07XG4gICAgY29uc3Qgb2NjdXJyZW5jZVRvTWF0Y2ggPSAxO1xuICAgIGNvbnN0IHZlcnNlT2JqZWN0cyA9IFtcbiAgICAgIHtcbiAgICAgICAgJ3RhZyc6ICd6YWxuJyxcbiAgICAgICAgJ3R5cGUnOiAnbWlsZXN0b25lJyxcbiAgICAgICAgJ3N0cm9uZyc6ICdHMzU4ODAnLFxuICAgICAgICAnbGVtbWEnOiAn4b2BJyxcbiAgICAgICAgJ21vcnBoJzogJ0dyLEVBLCwsLE5NUywnLFxuICAgICAgICAnb2NjdXJyZW5jZSc6IDEsXG4gICAgICAgICdvY2N1cnJlbmNlcyc6IDIsXG4gICAgICAgICdjb250ZW50JzogJ+G9gScsXG4gICAgICAgICdjaGlsZHJlbic6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICAndGFnJzogJ3phbG4nLFxuICAgICAgICAgICAgJ3R5cGUnOiAnbWlsZXN0b25lJyxcbiAgICAgICAgICAgICdzdHJvbmcnOiAnRzExNjEwJyxcbiAgICAgICAgICAgICdsZW1tYSc6ICfOtM6tJyxcbiAgICAgICAgICAgICdtb3JwaCc6ICdHcixDQywsLCwsLCwsJyxcbiAgICAgICAgICAgICdvY2N1cnJlbmNlJzogMSxcbiAgICAgICAgICAgICdvY2N1cnJlbmNlcyc6IDEsXG4gICAgICAgICAgICAnY29udGVudCc6ICfOtOG9sicsXG4gICAgICAgICAgICAnY2hpbGRyZW4nOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAndGFnJzogJ3phbG4nLFxuICAgICAgICAgICAgICAgICd0eXBlJzogJ21pbGVzdG9uZScsXG4gICAgICAgICAgICAgICAgJ3N0cm9uZyc6ICdHMjQyNDAnLFxuICAgICAgICAgICAgICAgICdsZW1tYSc6ICfhvLjOt8+Dzr/hv6bPgicsXG4gICAgICAgICAgICAgICAgJ21vcnBoJzogJ0dyLE4sLCwsLE5NUywnLFxuICAgICAgICAgICAgICAgICdvY2N1cnJlbmNlJzogMSxcbiAgICAgICAgICAgICAgICAnb2NjdXJyZW5jZXMnOiAxLFxuICAgICAgICAgICAgICAgICdjb250ZW50JzogJ+G8uM63z4POv+G/ps+CJyxcbiAgICAgICAgICAgICAgICAnY2hpbGRyZW4nOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICd0ZXh0JzogJ0plc3VzJyxcbiAgICAgICAgICAgICAgICAgICAgJ3RhZyc6ICd3JyxcbiAgICAgICAgICAgICAgICAgICAgJ3R5cGUnOiAnd29yZCcsXG4gICAgICAgICAgICAgICAgICAgICdvY2N1cnJlbmNlJzogMSxcbiAgICAgICAgICAgICAgICAgICAgJ29jY3VycmVuY2VzJzogMSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAnZW5kVGFnJzogJ3phbG4tZVxcXFwqJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAnZW5kVGFnJzogJ3phbG4tZVxcXFwqJyxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICAnZW5kVGFnJzogJ3phbG4tZVxcXFwqJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0eXBlJzogJ3RleHQnLFxuICAgICAgICAndGV4dCc6ICcgJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0YWcnOiAnemFsbicsXG4gICAgICAgICd0eXBlJzogJ21pbGVzdG9uZScsXG4gICAgICAgICdzdHJvbmcnOiAnRzMwMDQwJyxcbiAgICAgICAgJ2xlbW1hJzogJ867zq3Os8+JJyxcbiAgICAgICAgJ21vcnBoJzogJ0dyLFYsSUFBMywsUywnLFxuICAgICAgICAnb2NjdXJyZW5jZSc6IDEsXG4gICAgICAgICdvY2N1cnJlbmNlcyc6IDEsXG4gICAgICAgICdjb250ZW50JzogJ8614by2z4DOtc69JyxcbiAgICAgICAgJ2NoaWxkcmVuJzogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgICd0ZXh0JzogJ3NhaWQnLFxuICAgICAgICAgICAgJ3RhZyc6ICd3JyxcbiAgICAgICAgICAgICd0eXBlJzogJ3dvcmQnLFxuICAgICAgICAgICAgJ29jY3VycmVuY2UnOiAxLFxuICAgICAgICAgICAgJ29jY3VycmVuY2VzJzogMSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICAnZW5kVGFnJzogJ3phbG4tZVxcXFwqJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0eXBlJzogJ3RleHQnLFxuICAgICAgICAndGV4dCc6ICcgJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0YWcnOiAnemFsbicsXG4gICAgICAgICd0eXBlJzogJ21pbGVzdG9uZScsXG4gICAgICAgICdzdHJvbmcnOiAnRzA4NDYwJyxcbiAgICAgICAgJ2xlbW1hJzogJ86x4b2Qz4TPjM+CJyxcbiAgICAgICAgJ21vcnBoJzogJ0dyLFJQLCwsM0RNUCwnLFxuICAgICAgICAnb2NjdXJyZW5jZSc6IDEsXG4gICAgICAgICdvY2N1cnJlbmNlcyc6IDEsXG4gICAgICAgICdjb250ZW50JzogJ86x4b2Qz4TOv+G/ls+CJyxcbiAgICAgICAgJ2NoaWxkcmVuJzogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgICd0ZXh0JzogJ3RvJyxcbiAgICAgICAgICAgICd0YWcnOiAndycsXG4gICAgICAgICAgICAndHlwZSc6ICd3b3JkJyxcbiAgICAgICAgICAgICdvY2N1cnJlbmNlJzogMSxcbiAgICAgICAgICAgICdvY2N1cnJlbmNlcyc6IDIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAndHlwZSc6ICd0ZXh0JyxcbiAgICAgICAgICAgICd0ZXh0JzogJyAnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgJ3RleHQnOiAndGhlbScsXG4gICAgICAgICAgICAndGFnJzogJ3cnLFxuICAgICAgICAgICAgJ3R5cGUnOiAnd29yZCcsXG4gICAgICAgICAgICAnb2NjdXJyZW5jZSc6IDEsXG4gICAgICAgICAgICAnb2NjdXJyZW5jZXMnOiAxLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgICdlbmRUYWcnOiAnemFsbi1lXFxcXConLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3R5cGUnOiAndGV4dCcsXG4gICAgICAgICd0ZXh0JzogJywgXCInLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3RhZyc6ICd6YWxuJyxcbiAgICAgICAgJ3R5cGUnOiAnbWlsZXN0b25lJyxcbiAgICAgICAgJ3N0cm9uZyc6ICdHMDI4MTAnLFxuICAgICAgICAnbGVtbWEnOiAn4byAzrzOrs69JyxcbiAgICAgICAgJ21vcnBoJzogJ0dyLElFLCwsLCwsLCwnLFxuICAgICAgICAnb2NjdXJyZW5jZSc6IDEsXG4gICAgICAgICdvY2N1cnJlbmNlcyc6IDEsXG4gICAgICAgICdjb250ZW50JzogJ+G8gM684b20zr0nLFxuICAgICAgICAnY2hpbGRyZW4nOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgJ3RleHQnOiAnVHJ1bHknLFxuICAgICAgICAgICAgJ3RhZyc6ICd3JyxcbiAgICAgICAgICAgICd0eXBlJzogJ3dvcmQnLFxuICAgICAgICAgICAgJ29jY3VycmVuY2UnOiAxLFxuICAgICAgICAgICAgJ29jY3VycmVuY2VzJzogMSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICAnZW5kVGFnJzogJ3phbG4tZVxcXFwqJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0eXBlJzogJ3RleHQnLFxuICAgICAgICAndGV4dCc6ICcgJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0YWcnOiAnemFsbicsXG4gICAgICAgICd0eXBlJzogJ21pbGVzdG9uZScsXG4gICAgICAgICdzdHJvbmcnOiAnRzMwMDQwJyxcbiAgICAgICAgJ2xlbW1hJzogJ867zq3Os8+JJyxcbiAgICAgICAgJ21vcnBoJzogJ0dyLFYsSVBBMSwsUywnLFxuICAgICAgICAnb2NjdXJyZW5jZSc6IDEsXG4gICAgICAgICdvY2N1cnJlbmNlcyc6IDEsXG4gICAgICAgICdjb250ZW50JzogJ867zq3Os8+JJyxcbiAgICAgICAgJ2NoaWxkcmVuJzogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgICd0ZXh0JzogJ0knLFxuICAgICAgICAgICAgJ3RhZyc6ICd3JyxcbiAgICAgICAgICAgICd0eXBlJzogJ3dvcmQnLFxuICAgICAgICAgICAgJ29jY3VycmVuY2UnOiAxLFxuICAgICAgICAgICAgJ29jY3VycmVuY2VzJzogMSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICd0eXBlJzogJ3RleHQnLFxuICAgICAgICAgICAgJ3RleHQnOiAnICcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAndGV4dCc6ICdzYXknLFxuICAgICAgICAgICAgJ3RhZyc6ICd3JyxcbiAgICAgICAgICAgICd0eXBlJzogJ3dvcmQnLFxuICAgICAgICAgICAgJ29jY3VycmVuY2UnOiAxLFxuICAgICAgICAgICAgJ29jY3VycmVuY2VzJzogMSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICAnZW5kVGFnJzogJ3phbG4tZVxcXFwqJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0eXBlJzogJ3RleHQnLFxuICAgICAgICAndGV4dCc6ICcgJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0YWcnOiAnemFsbicsXG4gICAgICAgICd0eXBlJzogJ21pbGVzdG9uZScsXG4gICAgICAgICdzdHJvbmcnOiAnRzQ3NzEwJyxcbiAgICAgICAgJ2xlbW1hJzogJ8+Dz40nLFxuICAgICAgICAnbW9ycGgnOiAnR3IsUlAsLCwyRCxQLCcsXG4gICAgICAgICdvY2N1cnJlbmNlJzogMSxcbiAgICAgICAgJ29jY3VycmVuY2VzJzogMSxcbiAgICAgICAgJ2NvbnRlbnQnOiAn4b2Rzrzhv5bOvScsXG4gICAgICAgICdjaGlsZHJlbic6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICAndGV4dCc6ICd0bycsXG4gICAgICAgICAgICAndGFnJzogJ3cnLFxuICAgICAgICAgICAgJ3R5cGUnOiAnd29yZCcsXG4gICAgICAgICAgICAnb2NjdXJyZW5jZSc6IDIsXG4gICAgICAgICAgICAnb2NjdXJyZW5jZXMnOiAyLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgJ3R5cGUnOiAndGV4dCcsXG4gICAgICAgICAgICAndGV4dCc6ICcgJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICd0ZXh0JzogJ3lvdScsXG4gICAgICAgICAgICAndGFnJzogJ3cnLFxuICAgICAgICAgICAgJ3R5cGUnOiAnd29yZCcsXG4gICAgICAgICAgICAnb2NjdXJyZW5jZSc6IDEsXG4gICAgICAgICAgICAnb2NjdXJyZW5jZXMnOiAzLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgICdlbmRUYWcnOiAnemFsbi1lXFxcXConLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3R5cGUnOiAndGV4dCcsXG4gICAgICAgICd0ZXh0JzogJywgJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0YWcnOiAnemFsbicsXG4gICAgICAgICd0eXBlJzogJ21pbGVzdG9uZScsXG4gICAgICAgICdzdHJvbmcnOiAnRzE3MjIwJyxcbiAgICAgICAgJ2xlbW1hJzogJ+G8kM69JyxcbiAgICAgICAgJ21vcnBoJzogJ0dyLFAsLCwsLEQsLCwnLFxuICAgICAgICAnb2NjdXJyZW5jZSc6IDEsXG4gICAgICAgICdvY2N1cnJlbmNlcyc6IDEsXG4gICAgICAgICdjb250ZW50JzogJ+G8kM69JyxcbiAgICAgICAgJ2NoaWxkcmVuJzogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgICd0ZXh0JzogJ2luJyxcbiAgICAgICAgICAgICd0YWcnOiAndycsXG4gICAgICAgICAgICAndHlwZSc6ICd3b3JkJyxcbiAgICAgICAgICAgICdvY2N1cnJlbmNlJzogMSxcbiAgICAgICAgICAgICdvY2N1cnJlbmNlcyc6IDEsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgJ2VuZFRhZyc6ICd6YWxuLWVcXFxcKicsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndHlwZSc6ICd0ZXh0JyxcbiAgICAgICAgJ3RleHQnOiAnICcsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndGFnJzogJ3phbG4nLFxuICAgICAgICAndHlwZSc6ICdtaWxlc3RvbmUnLFxuICAgICAgICAnc3Ryb25nJzogJ0czNTg4MCcsXG4gICAgICAgICdsZW1tYSc6ICfhvYEnLFxuICAgICAgICAnbW9ycGgnOiAnR3IsRUEsLCwsREZTLCcsXG4gICAgICAgICdvY2N1cnJlbmNlJzogMSxcbiAgICAgICAgJ29jY3VycmVuY2VzJzogMSxcbiAgICAgICAgJ2NvbnRlbnQnOiAnz4Thv4cnLFxuICAgICAgICAnY2hpbGRyZW4nOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgJ3RleHQnOiAndGhlJyxcbiAgICAgICAgICAgICd0YWcnOiAndycsXG4gICAgICAgICAgICAndHlwZSc6ICd3b3JkJyxcbiAgICAgICAgICAgICdvY2N1cnJlbmNlJzogMSxcbiAgICAgICAgICAgICdvY2N1cnJlbmNlcyc6IDMsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgJ2VuZFRhZyc6ICd6YWxuLWVcXFxcKicsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndHlwZSc6ICd0ZXh0JyxcbiAgICAgICAgJ3RleHQnOiAnICcsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndGFnJzogJ3phbG4nLFxuICAgICAgICAndHlwZSc6ICdtaWxlc3RvbmUnLFxuICAgICAgICAnc3Ryb25nJzogJ0czODI0MCcsXG4gICAgICAgICdsZW1tYSc6ICfPgM6xzrvOuc6zzrPOtc69zrXPg86vzrEnLFxuICAgICAgICAnbW9ycGgnOiAnR3IsTiwsLCwsREZTLCcsXG4gICAgICAgICdvY2N1cnJlbmNlJzogMSxcbiAgICAgICAgJ29jY3VycmVuY2VzJzogMSxcbiAgICAgICAgJ2NvbnRlbnQnOiAnz4DOsc67zrnOs86zzrXOvc61z4POr+G+sycsXG4gICAgICAgICdjaGlsZHJlbic6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICAndGV4dCc6ICduZXcnLFxuICAgICAgICAgICAgJ3RhZyc6ICd3JyxcbiAgICAgICAgICAgICd0eXBlJzogJ3dvcmQnLFxuICAgICAgICAgICAgJ29jY3VycmVuY2UnOiAxLFxuICAgICAgICAgICAgJ29jY3VycmVuY2VzJzogMSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICd0eXBlJzogJ3RleHQnLFxuICAgICAgICAgICAgJ3RleHQnOiAnICcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAndGV4dCc6ICdhZ2UnLFxuICAgICAgICAgICAgJ3RhZyc6ICd3JyxcbiAgICAgICAgICAgICd0eXBlJzogJ3dvcmQnLFxuICAgICAgICAgICAgJ29jY3VycmVuY2UnOiAxLFxuICAgICAgICAgICAgJ29jY3VycmVuY2VzJzogMSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICAnZW5kVGFnJzogJ3phbG4tZVxcXFwqJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0eXBlJzogJ3RleHQnLFxuICAgICAgICAndGV4dCc6ICcgJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0YWcnOiAnemFsbicsXG4gICAgICAgICd0eXBlJzogJ21pbGVzdG9uZScsXG4gICAgICAgICdzdHJvbmcnOiAnRzM3NTIwJyxcbiAgICAgICAgJ2xlbW1hJzogJ+G9hc+EzrHOvScsXG4gICAgICAgICdtb3JwaCc6ICdHcixDUywsLCwsLCwsJyxcbiAgICAgICAgJ29jY3VycmVuY2UnOiAxLFxuICAgICAgICAnb2NjdXJyZW5jZXMnOiAxLFxuICAgICAgICAnY29udGVudCc6ICfhvYXPhM6xzr0nLFxuICAgICAgICAnY2hpbGRyZW4nOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgJ3RleHQnOiAnd2hlbicsXG4gICAgICAgICAgICAndGFnJzogJ3cnLFxuICAgICAgICAgICAgJ3R5cGUnOiAnd29yZCcsXG4gICAgICAgICAgICAnb2NjdXJyZW5jZSc6IDEsXG4gICAgICAgICAgICAnb2NjdXJyZW5jZXMnOiAxLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgICdlbmRUYWcnOiAnemFsbi1lXFxcXConLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3R5cGUnOiAndGV4dCcsXG4gICAgICAgICd0ZXh0JzogJyAnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3RhZyc6ICd6YWxuJyxcbiAgICAgICAgJ3R5cGUnOiAnbWlsZXN0b25lJyxcbiAgICAgICAgJ3N0cm9uZyc6ICdHMzU4ODAnLFxuICAgICAgICAnbGVtbWEnOiAn4b2BJyxcbiAgICAgICAgJ21vcnBoJzogJ0dyLEVBLCwsLE5NUywnLFxuICAgICAgICAnb2NjdXJyZW5jZSc6IDIsXG4gICAgICAgICdvY2N1cnJlbmNlcyc6IDIsXG4gICAgICAgICdjb250ZW50JzogJ+G9gScsXG4gICAgICAgICdjaGlsZHJlbic6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICAndGV4dCc6ICd0aGUnLFxuICAgICAgICAgICAgJ3RhZyc6ICd3JyxcbiAgICAgICAgICAgICd0eXBlJzogJ3dvcmQnLFxuICAgICAgICAgICAgJ29jY3VycmVuY2UnOiAyLFxuICAgICAgICAgICAgJ29jY3VycmVuY2VzJzogMyxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICAnZW5kVGFnJzogJ3phbG4tZVxcXFwqJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0eXBlJzogJ3RleHQnLFxuICAgICAgICAndGV4dCc6ICcgJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0YWcnOiAnemFsbicsXG4gICAgICAgICd0eXBlJzogJ21pbGVzdG9uZScsXG4gICAgICAgICdzdHJvbmcnOiAnRzUyMDcwJyxcbiAgICAgICAgJ2xlbW1hJzogJ8+F4byxz4zPgicsXG4gICAgICAgICdtb3JwaCc6ICdHcixOLCwsLCxOTVMsJyxcbiAgICAgICAgJ29jY3VycmVuY2UnOiAxLFxuICAgICAgICAnb2NjdXJyZW5jZXMnOiAxLFxuICAgICAgICAnY29udGVudCc6ICfOpeG8seG9uM+CJyxcbiAgICAgICAgJ2NoaWxkcmVuJzogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgICd0ZXh0JzogJ1NvbicsXG4gICAgICAgICAgICAndGFnJzogJ3cnLFxuICAgICAgICAgICAgJ3R5cGUnOiAnd29yZCcsXG4gICAgICAgICAgICAnb2NjdXJyZW5jZSc6IDEsXG4gICAgICAgICAgICAnb2NjdXJyZW5jZXMnOiAxLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgICdlbmRUYWcnOiAnemFsbi1lXFxcXConLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3R5cGUnOiAndGV4dCcsXG4gICAgICAgICd0ZXh0JzogJyAnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3RhZyc6ICd6YWxuJyxcbiAgICAgICAgJ3R5cGUnOiAnbWlsZXN0b25lJyxcbiAgICAgICAgJ3N0cm9uZyc6ICdHMzU4ODAnLFxuICAgICAgICAnbGVtbWEnOiAn4b2BJyxcbiAgICAgICAgJ21vcnBoJzogJ0dyLEVBLCwsLEdNUywnLFxuICAgICAgICAnb2NjdXJyZW5jZSc6IDEsXG4gICAgICAgICdvY2N1cnJlbmNlcyc6IDIsXG4gICAgICAgICdjb250ZW50JzogJ8+Ezr/hv6YnLFxuICAgICAgICAnY2hpbGRyZW4nOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgJ3RhZyc6ICd6YWxuJyxcbiAgICAgICAgICAgICd0eXBlJzogJ21pbGVzdG9uZScsXG4gICAgICAgICAgICAnc3Ryb25nJzogJ0cwNDQ0MCcsXG4gICAgICAgICAgICAnbGVtbWEnOiAn4byEzr3OuM+Bz4nPgM6/z4InLFxuICAgICAgICAgICAgJ21vcnBoJzogJ0dyLE4sLCwsLEdNUywnLFxuICAgICAgICAgICAgJ29jY3VycmVuY2UnOiAxLFxuICAgICAgICAgICAgJ29jY3VycmVuY2VzJzogMSxcbiAgICAgICAgICAgICdjb250ZW50JzogJ+G8iM69zrjPgc+Oz4DOv8+FJyxcbiAgICAgICAgICAgICdjaGlsZHJlbic6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICd0ZXh0JzogJ29mJyxcbiAgICAgICAgICAgICAgICAndGFnJzogJ3cnLFxuICAgICAgICAgICAgICAgICd0eXBlJzogJ3dvcmQnLFxuICAgICAgICAgICAgICAgICdvY2N1cnJlbmNlJzogMSxcbiAgICAgICAgICAgICAgICAnb2NjdXJyZW5jZXMnOiAyLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJ3R5cGUnOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgJ3RleHQnOiAnICcsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAndGV4dCc6ICdNYW4nLFxuICAgICAgICAgICAgICAgICd0YWcnOiAndycsXG4gICAgICAgICAgICAgICAgJ3R5cGUnOiAnd29yZCcsXG4gICAgICAgICAgICAgICAgJ29jY3VycmVuY2UnOiAxLFxuICAgICAgICAgICAgICAgICdvY2N1cnJlbmNlcyc6IDEsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgJ2VuZFRhZyc6ICd6YWxuLWVcXFxcKicsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgJ2VuZFRhZyc6ICd6YWxuLWVcXFxcKicsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndHlwZSc6ICd0ZXh0JyxcbiAgICAgICAgJ3RleHQnOiAnICcsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndGFnJzogJ3phbG4nLFxuICAgICAgICAndHlwZSc6ICdtaWxlc3RvbmUnLFxuICAgICAgICAnc3Ryb25nJzogJ0cyNTIzMCcsXG4gICAgICAgICdsZW1tYSc6ICfOus6xzrjOr862z4knLFxuICAgICAgICAnbW9ycGgnOiAnR3IsVixTQUEzLCxTLCcsXG4gICAgICAgICdvY2N1cnJlbmNlJzogMSxcbiAgICAgICAgJ29jY3VycmVuY2VzJzogMSxcbiAgICAgICAgJ2NvbnRlbnQnOiAnzrrOsc64zq/Pg+G/gycsXG4gICAgICAgICdjaGlsZHJlbic6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICAndGV4dCc6ICdzaXRzJyxcbiAgICAgICAgICAgICd0YWcnOiAndycsXG4gICAgICAgICAgICAndHlwZSc6ICd3b3JkJyxcbiAgICAgICAgICAgICdvY2N1cnJlbmNlJzogMSxcbiAgICAgICAgICAgICdvY2N1cnJlbmNlcyc6IDEsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgJ2VuZFRhZyc6ICd6YWxuLWVcXFxcKicsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndHlwZSc6ICd0ZXh0JyxcbiAgICAgICAgJ3RleHQnOiAnICcsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndGFnJzogJ3phbG4nLFxuICAgICAgICAndHlwZSc6ICdtaWxlc3RvbmUnLFxuICAgICAgICAnc3Ryb25nJzogJ0cxOTA5MCcsXG4gICAgICAgICdsZW1tYSc6ICfhvJDPgM6vJyxcbiAgICAgICAgJ21vcnBoJzogJ0dyLFAsLCwsLEcsLCwnLFxuICAgICAgICAnb2NjdXJyZW5jZSc6IDEsXG4gICAgICAgICdvY2N1cnJlbmNlcyc6IDIsXG4gICAgICAgICdjb250ZW50JzogJ+G8kM+A4b22JyxcbiAgICAgICAgJ2NoaWxkcmVuJzogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgICd0ZXh0JzogJ29uJyxcbiAgICAgICAgICAgICd0YWcnOiAndycsXG4gICAgICAgICAgICAndHlwZSc6ICd3b3JkJyxcbiAgICAgICAgICAgICdvY2N1cnJlbmNlJzogMSxcbiAgICAgICAgICAgICdvY2N1cnJlbmNlcyc6IDEsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgJ2VuZFRhZyc6ICd6YWxuLWVcXFxcKicsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndHlwZSc6ICd0ZXh0JyxcbiAgICAgICAgJ3RleHQnOiAnICcsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndGFnJzogJ3phbG4nLFxuICAgICAgICAndHlwZSc6ICdtaWxlc3RvbmUnLFxuICAgICAgICAnc3Ryb25nJzogJ0cwODQ2MCcsXG4gICAgICAgICdsZW1tYSc6ICfOseG9kM+Ez4zPgicsXG4gICAgICAgICdtb3JwaCc6ICdHcixSUCwsLDNHTVMsJyxcbiAgICAgICAgJ29jY3VycmVuY2UnOiAxLFxuICAgICAgICAnb2NjdXJyZW5jZXMnOiAxLFxuICAgICAgICAnY29udGVudCc6ICfOseG9kM+Ezr/hv6YnLFxuICAgICAgICAnY2hpbGRyZW4nOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgJ3RleHQnOiAnaGlzJyxcbiAgICAgICAgICAgICd0YWcnOiAndycsXG4gICAgICAgICAgICAndHlwZSc6ICd3b3JkJyxcbiAgICAgICAgICAgICdvY2N1cnJlbmNlJzogMSxcbiAgICAgICAgICAgICdvY2N1cnJlbmNlcyc6IDEsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgJ2VuZFRhZyc6ICd6YWxuLWVcXFxcKicsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndHlwZSc6ICd0ZXh0JyxcbiAgICAgICAgJ3RleHQnOiAnICcsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndGFnJzogJ3phbG4nLFxuICAgICAgICAndHlwZSc6ICdtaWxlc3RvbmUnLFxuICAgICAgICAnc3Ryb25nJzogJ0cxMzkxMCcsXG4gICAgICAgICdsZW1tYSc6ICfOtM+Mzr7OsScsXG4gICAgICAgICdtb3JwaCc6ICdHcixOLCwsLCxHRlMsJyxcbiAgICAgICAgJ29jY3VycmVuY2UnOiAxLFxuICAgICAgICAnb2NjdXJyZW5jZXMnOiAxLFxuICAgICAgICAnY29udGVudCc6ICfOtM+Mzr7Ot8+CJyxcbiAgICAgICAgJ2NoaWxkcmVuJzogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgICd0ZXh0JzogJ2dsb3Jpb3VzJyxcbiAgICAgICAgICAgICd0YWcnOiAndycsXG4gICAgICAgICAgICAndHlwZSc6ICd3b3JkJyxcbiAgICAgICAgICAgICdvY2N1cnJlbmNlJzogMSxcbiAgICAgICAgICAgICdvY2N1cnJlbmNlcyc6IDEsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgJ2VuZFRhZyc6ICd6YWxuLWVcXFxcKicsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndHlwZSc6ICd0ZXh0JyxcbiAgICAgICAgJ3RleHQnOiAnICcsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndGFnJzogJ3phbG4nLFxuICAgICAgICAndHlwZSc6ICdtaWxlc3RvbmUnLFxuICAgICAgICAnc3Ryb25nJzogJ0cyMzYyMCcsXG4gICAgICAgICdsZW1tYSc6ICfOuM+Bz4zOvc6/z4InLFxuICAgICAgICAnbW9ycGgnOiAnR3IsTiwsLCwsR01TLCcsXG4gICAgICAgICdvY2N1cnJlbmNlJzogMSxcbiAgICAgICAgJ29jY3VycmVuY2VzJzogMSxcbiAgICAgICAgJ2NvbnRlbnQnOiAnzrjPgc+Mzr3Ov8+FJyxcbiAgICAgICAgJ2NoaWxkcmVuJzogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgICd0ZXh0JzogJ3Rocm9uZScsXG4gICAgICAgICAgICAndGFnJzogJ3cnLFxuICAgICAgICAgICAgJ3R5cGUnOiAnd29yZCcsXG4gICAgICAgICAgICAnb2NjdXJyZW5jZSc6IDEsXG4gICAgICAgICAgICAnb2NjdXJyZW5jZXMnOiAxLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgICdlbmRUYWcnOiAnemFsbi1lXFxcXConLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3R5cGUnOiAndGV4dCcsXG4gICAgICAgICd0ZXh0JzogJywgJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0YWcnOiAnemFsbicsXG4gICAgICAgICd0eXBlJzogJ21pbGVzdG9uZScsXG4gICAgICAgICdzdHJvbmcnOiAnRzM3NTQwJyxcbiAgICAgICAgJ2xlbW1hJzogJ+G9hc+EzrknLFxuICAgICAgICAnbW9ycGgnOiAnR3IsQ1MsLCwsLCwsLCcsXG4gICAgICAgICdvY2N1cnJlbmNlJzogMSxcbiAgICAgICAgJ29jY3VycmVuY2VzJzogMSxcbiAgICAgICAgJ2NvbnRlbnQnOiAn4b2Fz4TOuScsXG4gICAgICAgICdjaGlsZHJlbic6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICAndGFnJzogJ3phbG4nLFxuICAgICAgICAgICAgJ3R5cGUnOiAnbWlsZXN0b25lJyxcbiAgICAgICAgICAgICdzdHJvbmcnOiAnRzQ3NzEwJyxcbiAgICAgICAgICAgICdsZW1tYSc6ICfPg8+NJyxcbiAgICAgICAgICAgICdtb3JwaCc6ICdHcixSUCwsLDJOLFAsJyxcbiAgICAgICAgICAgICdvY2N1cnJlbmNlJzogMSxcbiAgICAgICAgICAgICdvY2N1cnJlbmNlcyc6IDIsXG4gICAgICAgICAgICAnY29udGVudCc6ICfhvZHOvM614b+Wz4InLFxuICAgICAgICAgICAgJ2NoaWxkcmVuJzogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJ3RleHQnOiAneW91JyxcbiAgICAgICAgICAgICAgICAndGFnJzogJ3cnLFxuICAgICAgICAgICAgICAgICd0eXBlJzogJ3dvcmQnLFxuICAgICAgICAgICAgICAgICdvY2N1cnJlbmNlJzogMixcbiAgICAgICAgICAgICAgICAnb2NjdXJyZW5jZXMnOiAzLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICdlbmRUYWcnOiAnemFsbi1lXFxcXConLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgICdlbmRUYWcnOiAnemFsbi1lXFxcXConLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3R5cGUnOiAndGV4dCcsXG4gICAgICAgICd0ZXh0JzogJyAnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3RhZyc6ICd6YWxuJyxcbiAgICAgICAgJ3R5cGUnOiAnbWlsZXN0b25lJyxcbiAgICAgICAgJ3N0cm9uZyc6ICdHMzU4ODAnLFxuICAgICAgICAnbGVtbWEnOiAn4b2BJyxcbiAgICAgICAgJ21vcnBoJzogJ0dyLFJSLCwsLE5NUCwnLFxuICAgICAgICAnb2NjdXJyZW5jZSc6IDEsXG4gICAgICAgICdvY2N1cnJlbmNlcyc6IDEsXG4gICAgICAgICdjb250ZW50JzogJ86/4byxJyxcbiAgICAgICAgJ2NoaWxkcmVuJzogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgICd0YWcnOiAnemFsbicsXG4gICAgICAgICAgICAndHlwZSc6ICdtaWxlc3RvbmUnLFxuICAgICAgICAgICAgJ3N0cm9uZyc6ICdHMDE5MDAnLFxuICAgICAgICAgICAgJ2xlbW1hJzogJ+G8gM66zr/Ou86/z4XOuM6tz4knLFxuICAgICAgICAgICAgJ21vcnBoJzogJ0dyLFYsUEFBLE5NUCwnLFxuICAgICAgICAgICAgJ29jY3VycmVuY2UnOiAxLFxuICAgICAgICAgICAgJ29jY3VycmVuY2VzJzogMSxcbiAgICAgICAgICAgICdjb250ZW50JzogJ+G8gM66zr/Ou86/z4XOuM6uz4POsc69z4TOrc+CJyxcbiAgICAgICAgICAgICdjaGlsZHJlbic6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICd0ZXh0JzogJ3dobycsXG4gICAgICAgICAgICAgICAgJ3RhZyc6ICd3JyxcbiAgICAgICAgICAgICAgICAndHlwZSc6ICd3b3JkJyxcbiAgICAgICAgICAgICAgICAnb2NjdXJyZW5jZSc6IDEsXG4gICAgICAgICAgICAgICAgJ29jY3VycmVuY2VzJzogMSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICd0eXBlJzogJ3RleHQnLFxuICAgICAgICAgICAgICAgICd0ZXh0JzogJyAnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJ3RleHQnOiAnaGF2ZScsXG4gICAgICAgICAgICAgICAgJ3RhZyc6ICd3JyxcbiAgICAgICAgICAgICAgICAndHlwZSc6ICd3b3JkJyxcbiAgICAgICAgICAgICAgICAnb2NjdXJyZW5jZSc6IDEsXG4gICAgICAgICAgICAgICAgJ29jY3VycmVuY2VzJzogMSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICd0eXBlJzogJ3RleHQnLFxuICAgICAgICAgICAgICAgICd0ZXh0JzogJyAnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJ3RleHQnOiAnZm9sbG93ZWQnLFxuICAgICAgICAgICAgICAgICd0YWcnOiAndycsXG4gICAgICAgICAgICAgICAgJ3R5cGUnOiAnd29yZCcsXG4gICAgICAgICAgICAgICAgJ29jY3VycmVuY2UnOiAxLFxuICAgICAgICAgICAgICAgICdvY2N1cnJlbmNlcyc6IDEsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgJ2VuZFRhZyc6ICd6YWxuLWVcXFxcKicsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgJ2VuZFRhZyc6ICd6YWxuLWVcXFxcKicsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndHlwZSc6ICd0ZXh0JyxcbiAgICAgICAgJ3RleHQnOiAnICcsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndGFnJzogJ3phbG4nLFxuICAgICAgICAndHlwZSc6ICdtaWxlc3RvbmUnLFxuICAgICAgICAnc3Ryb25nJzogJ0cxNDczMCcsXG4gICAgICAgICdsZW1tYSc6ICfhvJDOs8+OJyxcbiAgICAgICAgJ21vcnBoJzogJ0dyLFJQLCwsMUQsUywnLFxuICAgICAgICAnb2NjdXJyZW5jZSc6IDEsXG4gICAgICAgICdvY2N1cnJlbmNlcyc6IDEsXG4gICAgICAgICdjb250ZW50JzogJ868zr/OuScsXG4gICAgICAgICdjaGlsZHJlbic6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICAndGV4dCc6ICdtZScsXG4gICAgICAgICAgICAndGFnJzogJ3cnLFxuICAgICAgICAgICAgJ3R5cGUnOiAnd29yZCcsXG4gICAgICAgICAgICAnb2NjdXJyZW5jZSc6IDEsXG4gICAgICAgICAgICAnb2NjdXJyZW5jZXMnOiAxLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgICdlbmRUYWcnOiAnemFsbi1lXFxcXConLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3R5cGUnOiAndGV4dCcsXG4gICAgICAgICd0ZXh0JzogJywgJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0YWcnOiAnemFsbicsXG4gICAgICAgICd0eXBlJzogJ21pbGVzdG9uZScsXG4gICAgICAgICdzdHJvbmcnOiAnRzQ3NzEwJyxcbiAgICAgICAgJ2xlbW1hJzogJ8+Dz40nLFxuICAgICAgICAnbW9ycGgnOiAnR3IsUlAsLCwyTixQLCcsXG4gICAgICAgICdvY2N1cnJlbmNlJzogMixcbiAgICAgICAgJ29jY3VycmVuY2VzJzogMixcbiAgICAgICAgJ2NvbnRlbnQnOiAn4b2RzrzOteG/ls+CJyxcbiAgICAgICAgJ2NoaWxkcmVuJzogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgICd0ZXh0JzogJ3lvdScsXG4gICAgICAgICAgICAndGFnJzogJ3cnLFxuICAgICAgICAgICAgJ3R5cGUnOiAnd29yZCcsXG4gICAgICAgICAgICAnb2NjdXJyZW5jZSc6IDMsXG4gICAgICAgICAgICAnb2NjdXJyZW5jZXMnOiAzLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgICdlbmRUYWcnOiAnemFsbi1lXFxcXConLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3R5cGUnOiAndGV4dCcsXG4gICAgICAgICd0ZXh0JzogJyAnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3RhZyc6ICd6YWxuJyxcbiAgICAgICAgJ3R5cGUnOiAnbWlsZXN0b25lJyxcbiAgICAgICAgJ3N0cm9uZyc6ICdHMjUyMTAnLFxuICAgICAgICAnbGVtbWEnOiAnzrrOrM64zrfOvM6xzrknLFxuICAgICAgICAnbW9ycGgnOiAnR3IsVixJRk0yLCxQLCcsXG4gICAgICAgICdvY2N1cnJlbmNlJzogMSxcbiAgICAgICAgJ29jY3VycmVuY2VzJzogMSxcbiAgICAgICAgJ2NvbnRlbnQnOiAnzrrOsc64zq7Pg861z4POuM61JyxcbiAgICAgICAgJ2NoaWxkcmVuJzogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgICd0ZXh0JzogJ3dpbGwnLFxuICAgICAgICAgICAgJ3RhZyc6ICd3JyxcbiAgICAgICAgICAgICd0eXBlJzogJ3dvcmQnLFxuICAgICAgICAgICAgJ29jY3VycmVuY2UnOiAxLFxuICAgICAgICAgICAgJ29jY3VycmVuY2VzJzogMSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICAnZW5kVGFnJzogJ3phbG4tZVxcXFwqJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0eXBlJzogJ3RleHQnLFxuICAgICAgICAndGV4dCc6ICcgJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0YWcnOiAnemFsbicsXG4gICAgICAgICd0eXBlJzogJ21pbGVzdG9uZScsXG4gICAgICAgICdzdHJvbmcnOiAnRzI1MzIwJyxcbiAgICAgICAgJ2xlbW1hJzogJ866zrHOrycsXG4gICAgICAgICdtb3JwaCc6ICdHcixELCwsLCwsLCwsJyxcbiAgICAgICAgJ29jY3VycmVuY2UnOiAxLFxuICAgICAgICAnb2NjdXJyZW5jZXMnOiAxLFxuICAgICAgICAnY29udGVudCc6ICfOus6x4b22JyxcbiAgICAgICAgJ2NoaWxkcmVuJzogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgICd0ZXh0JzogJ2Fsc28nLFxuICAgICAgICAgICAgJ3RhZyc6ICd3JyxcbiAgICAgICAgICAgICd0eXBlJzogJ3dvcmQnLFxuICAgICAgICAgICAgJ29jY3VycmVuY2UnOiAxLFxuICAgICAgICAgICAgJ29jY3VycmVuY2VzJzogMSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICAnZW5kVGFnJzogJ3phbG4tZVxcXFwqJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0eXBlJzogJ3RleHQnLFxuICAgICAgICAndGV4dCc6ICcgJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0YWcnOiAnemFsbicsXG4gICAgICAgICd0eXBlJzogJ21pbGVzdG9uZScsXG4gICAgICAgICdzdHJvbmcnOiAnRzI1MjEwJyxcbiAgICAgICAgJ2xlbW1hJzogJ866zqzOuM63zrzOsc65JyxcbiAgICAgICAgJ21vcnBoJzogJ0dyLFYsSUZNMiwsUCwnLFxuICAgICAgICAnb2NjdXJyZW5jZSc6IDEsXG4gICAgICAgICdvY2N1cnJlbmNlcyc6IDEsXG4gICAgICAgICdjb250ZW50JzogJ866zrHOuM6uz4POtc+DzrjOtScsXG4gICAgICAgICdjaGlsZHJlbic6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICAndGV4dCc6ICdzaXQnLFxuICAgICAgICAgICAgJ3RhZyc6ICd3JyxcbiAgICAgICAgICAgICd0eXBlJzogJ3dvcmQnLFxuICAgICAgICAgICAgJ29jY3VycmVuY2UnOiAxLFxuICAgICAgICAgICAgJ29jY3VycmVuY2VzJzogMSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICAnZW5kVGFnJzogJ3phbG4tZVxcXFwqJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0eXBlJzogJ3RleHQnLFxuICAgICAgICAndGV4dCc6ICcgJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0YWcnOiAnemFsbicsXG4gICAgICAgICd0eXBlJzogJ21pbGVzdG9uZScsXG4gICAgICAgICdzdHJvbmcnOiAnRzE5MDkwJyxcbiAgICAgICAgJ2xlbW1hJzogJ+G8kM+Azq8nLFxuICAgICAgICAnbW9ycGgnOiAnR3IsUCwsLCwsQSwsLCcsXG4gICAgICAgICdvY2N1cnJlbmNlJzogMixcbiAgICAgICAgJ29jY3VycmVuY2VzJzogMixcbiAgICAgICAgJ2NvbnRlbnQnOiAn4byQz4DhvbYnLFxuICAgICAgICAnY2hpbGRyZW4nOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgJ3RleHQnOiAndXBvbicsXG4gICAgICAgICAgICAndGFnJzogJ3cnLFxuICAgICAgICAgICAgJ3R5cGUnOiAnd29yZCcsXG4gICAgICAgICAgICAnb2NjdXJyZW5jZSc6IDEsXG4gICAgICAgICAgICAnb2NjdXJyZW5jZXMnOiAxLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgICdlbmRUYWcnOiAnemFsbi1lXFxcXConLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3R5cGUnOiAndGV4dCcsXG4gICAgICAgICd0ZXh0JzogJyAnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3RhZyc6ICd6YWxuJyxcbiAgICAgICAgJ3R5cGUnOiAnbWlsZXN0b25lJyxcbiAgICAgICAgJ3N0cm9uZyc6ICdHMTQyNzAnLFxuICAgICAgICAnbGVtbWEnOiAnzrTPjs60zrXOus6xJyxcbiAgICAgICAgJ21vcnBoJzogJ0dyLEVOLCwsLEFNUEknLFxuICAgICAgICAnb2NjdXJyZW5jZSc6IDEsXG4gICAgICAgICdvY2N1cnJlbmNlcyc6IDIsXG4gICAgICAgICdjb250ZW50JzogJ860z47OtM61zrrOsScsXG4gICAgICAgICdjaGlsZHJlbic6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICAndGV4dCc6ICd0d2VsdmUnLFxuICAgICAgICAgICAgJ3RhZyc6ICd3JyxcbiAgICAgICAgICAgICd0eXBlJzogJ3dvcmQnLFxuICAgICAgICAgICAgJ29jY3VycmVuY2UnOiAxLFxuICAgICAgICAgICAgJ29jY3VycmVuY2VzJzogMixcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICAnZW5kVGFnJzogJ3phbG4tZVxcXFwqJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0eXBlJzogJ3RleHQnLFxuICAgICAgICAndGV4dCc6ICcgJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0YWcnOiAnemFsbicsXG4gICAgICAgICd0eXBlJzogJ21pbGVzdG9uZScsXG4gICAgICAgICdzdHJvbmcnOiAnRzIzNjIwJyxcbiAgICAgICAgJ2xlbW1hJzogJ864z4HPjM69zr/PgicsXG4gICAgICAgICdtb3JwaCc6ICdHcixOLCwsLCxBTVAsJyxcbiAgICAgICAgJ29jY3VycmVuY2UnOiAxLFxuICAgICAgICAnb2NjdXJyZW5jZXMnOiAxLFxuICAgICAgICAnY29udGVudCc6ICfOuM+Bz4zOvc6/z4XPgicsXG4gICAgICAgICdjaGlsZHJlbic6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICAndGV4dCc6ICd0aHJvbmVzJyxcbiAgICAgICAgICAgICd0YWcnOiAndycsXG4gICAgICAgICAgICAndHlwZSc6ICd3b3JkJyxcbiAgICAgICAgICAgICdvY2N1cnJlbmNlJzogMSxcbiAgICAgICAgICAgICdvY2N1cnJlbmNlcyc6IDEsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgJ2VuZFRhZyc6ICd6YWxuLWVcXFxcKicsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndHlwZSc6ICd0ZXh0JyxcbiAgICAgICAgJ3RleHQnOiAnLCAnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3RhZyc6ICd6YWxuJyxcbiAgICAgICAgJ3R5cGUnOiAnbWlsZXN0b25lJyxcbiAgICAgICAgJ3N0cm9uZyc6ICdHMjkxOTAnLFxuICAgICAgICAnbGVtbWEnOiAnzrrPgc6vzr3PiScsXG4gICAgICAgICdtb3JwaCc6ICdHcixWLFBQQSxOTVAsJyxcbiAgICAgICAgJ29jY3VycmVuY2UnOiAxLFxuICAgICAgICAnb2NjdXJyZW5jZXMnOiAxLFxuICAgICAgICAnY29udGVudCc6ICfOus+Bzq/Ovc6/zr3PhM61z4InLFxuICAgICAgICAnY2hpbGRyZW4nOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgJ3RleHQnOiAnanVkZ2luZycsXG4gICAgICAgICAgICAndGFnJzogJ3cnLFxuICAgICAgICAgICAgJ3R5cGUnOiAnd29yZCcsXG4gICAgICAgICAgICAnb2NjdXJyZW5jZSc6IDEsXG4gICAgICAgICAgICAnb2NjdXJyZW5jZXMnOiAxLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgICdlbmRUYWcnOiAnemFsbi1lXFxcXConLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3R5cGUnOiAndGV4dCcsXG4gICAgICAgICd0ZXh0JzogJyAnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3RhZyc6ICd6YWxuJyxcbiAgICAgICAgJ3R5cGUnOiAnbWlsZXN0b25lJyxcbiAgICAgICAgJ3N0cm9uZyc6ICdHMzU4ODAnLFxuICAgICAgICAnbGVtbWEnOiAn4b2BJyxcbiAgICAgICAgJ21vcnBoJzogJ0dyLEVBLCwsLEFGUCwnLFxuICAgICAgICAnb2NjdXJyZW5jZSc6IDEsXG4gICAgICAgICdvY2N1cnJlbmNlcyc6IDEsXG4gICAgICAgICdjb250ZW50JzogJ8+E4b2wz4InLFxuICAgICAgICAnY2hpbGRyZW4nOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgJ3RleHQnOiAndGhlJyxcbiAgICAgICAgICAgICd0YWcnOiAndycsXG4gICAgICAgICAgICAndHlwZSc6ICd3b3JkJyxcbiAgICAgICAgICAgICdvY2N1cnJlbmNlJzogMyxcbiAgICAgICAgICAgICdvY2N1cnJlbmNlcyc6IDMsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgJ2VuZFRhZyc6ICd6YWxuLWVcXFxcKicsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndHlwZSc6ICd0ZXh0JyxcbiAgICAgICAgJ3RleHQnOiAnICcsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndGFnJzogJ3phbG4nLFxuICAgICAgICAndHlwZSc6ICdtaWxlc3RvbmUnLFxuICAgICAgICAnc3Ryb25nJzogJ0cxNDI3MCcsXG4gICAgICAgICdsZW1tYSc6ICfOtM+OzrTOtc66zrEnLFxuICAgICAgICAnbW9ycGgnOiAnR3IsRU4sLCwsQUZQLCcsXG4gICAgICAgICdvY2N1cnJlbmNlJzogMixcbiAgICAgICAgJ29jY3VycmVuY2VzJzogMixcbiAgICAgICAgJ2NvbnRlbnQnOiAnzrTPjs60zrXOus6xJyxcbiAgICAgICAgJ2NoaWxkcmVuJzogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgICd0ZXh0JzogJ3R3ZWx2ZScsXG4gICAgICAgICAgICAndGFnJzogJ3cnLFxuICAgICAgICAgICAgJ3R5cGUnOiAnd29yZCcsXG4gICAgICAgICAgICAnb2NjdXJyZW5jZSc6IDIsXG4gICAgICAgICAgICAnb2NjdXJyZW5jZXMnOiAyLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgICdlbmRUYWcnOiAnemFsbi1lXFxcXConLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3R5cGUnOiAndGV4dCcsXG4gICAgICAgICd0ZXh0JzogJyAnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3RhZyc6ICd6YWxuJyxcbiAgICAgICAgJ3R5cGUnOiAnbWlsZXN0b25lJyxcbiAgICAgICAgJ3N0cm9uZyc6ICdHNTQ0MzAnLFxuICAgICAgICAnbGVtbWEnOiAnz4bPhc67zq4nLFxuICAgICAgICAnbW9ycGgnOiAnR3IsTiwsLCwsQUZQLCcsXG4gICAgICAgICdvY2N1cnJlbmNlJzogMSxcbiAgICAgICAgJ29jY3VycmVuY2VzJzogMSxcbiAgICAgICAgJ2NvbnRlbnQnOiAnz4bPhc674b2wz4InLFxuICAgICAgICAnY2hpbGRyZW4nOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgJ3RleHQnOiAndHJpYmVzJyxcbiAgICAgICAgICAgICd0YWcnOiAndycsXG4gICAgICAgICAgICAndHlwZSc6ICd3b3JkJyxcbiAgICAgICAgICAgICdvY2N1cnJlbmNlJzogMSxcbiAgICAgICAgICAgICdvY2N1cnJlbmNlcyc6IDEsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgJ2VuZFRhZyc6ICd6YWxuLWVcXFxcKicsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndHlwZSc6ICd0ZXh0JyxcbiAgICAgICAgJ3RleHQnOiAnICcsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndGFnJzogJ3phbG4nLFxuICAgICAgICAndHlwZSc6ICdtaWxlc3RvbmUnLFxuICAgICAgICAnc3Ryb25nJzogJ0czNTg4MCcsXG4gICAgICAgICdsZW1tYSc6ICfhvYEnLFxuICAgICAgICAnbW9ycGgnOiAnR3IsRUEsLCwsR01TLCcsXG4gICAgICAgICdvY2N1cnJlbmNlJzogMixcbiAgICAgICAgJ29jY3VycmVuY2VzJzogMixcbiAgICAgICAgJ2NvbnRlbnQnOiAnz4TOv+G/picsXG4gICAgICAgICdjaGlsZHJlbic6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICAndGFnJzogJ3phbG4nLFxuICAgICAgICAgICAgJ3R5cGUnOiAnbWlsZXN0b25lJyxcbiAgICAgICAgICAgICdzdHJvbmcnOiAnRzI0NzQwJyxcbiAgICAgICAgICAgICdsZW1tYSc6ICfhvLjPg8+BzrHOrs67JyxcbiAgICAgICAgICAgICdtb3JwaCc6ICdHcixOLCwsLCxHTVNJJyxcbiAgICAgICAgICAgICdvY2N1cnJlbmNlJzogMSxcbiAgICAgICAgICAgICdvY2N1cnJlbmNlcyc6IDEsXG4gICAgICAgICAgICAnY29udGVudCc6ICfhvLjPg8+BzrHOrs67JyxcbiAgICAgICAgICAgICdjaGlsZHJlbic6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICd0ZXh0JzogJ29mJyxcbiAgICAgICAgICAgICAgICAndGFnJzogJ3cnLFxuICAgICAgICAgICAgICAgICd0eXBlJzogJ3dvcmQnLFxuICAgICAgICAgICAgICAgICdvY2N1cnJlbmNlJzogMixcbiAgICAgICAgICAgICAgICAnb2NjdXJyZW5jZXMnOiAyLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJ3R5cGUnOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgJ3RleHQnOiAnICcsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAndGV4dCc6ICdJc3JhZWwnLFxuICAgICAgICAgICAgICAgICd0YWcnOiAndycsXG4gICAgICAgICAgICAgICAgJ3R5cGUnOiAnd29yZCcsXG4gICAgICAgICAgICAgICAgJ29jY3VycmVuY2UnOiAxLFxuICAgICAgICAgICAgICAgICdvY2N1cnJlbmNlcyc6IDEsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgJ2VuZFRhZyc6ICd6YWxuLWVcXFxcKicsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgJ2VuZFRhZyc6ICd6YWxuLWVcXFxcKicsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndHlwZSc6ICd0ZXh0JyxcbiAgICAgICAgJ3RleHQnOiAnLlxcblxcbicsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndGFnJzogJ3M1JyxcbiAgICAgICAgJ3R5cGUnOiAnc2VjdGlvbicsXG4gICAgICAgICdjb250ZW50JzogJyBcXG4nLFxuICAgICAgfSxcbiAgICBdO1xuICAgIGNvbnN0IGV4cGVjdGVkQWxpZ25lZEdMVGV4dCA9ICd0d2VsdmUgdHJpYmVzIG9mIElzcmFlbCc7XG5cbiAgICAvLyB3aGVuXG4gICAgY29uc3QgYWxpZ25lZEdMVGV4dCA9IGNoZWNrQXJlYUhlbHBlcnMuZ2V0QWxpZ25lZFRleHQodmVyc2VPYmplY3RzLCBxdW90ZSwgb2NjdXJyZW5jZVRvTWF0Y2gpO1xuXG4gICAgLy8gdGhlblxuICAgIGV4cGVjdChhbGlnbmVkR0xUZXh0KS50b0VxdWFsKGV4cGVjdGVkQWxpZ25lZEdMVGV4dCk7XG4gIH0pO1xufSk7XG5cbiJdfQ==