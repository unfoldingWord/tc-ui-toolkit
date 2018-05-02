/**
 * TODO: 
 * 1. Add selections support to verse component's VerseString sub-component.
 * 2. Add verse array support in verse component.
 * 3. Add support for greek word lexicon.
 * 4. Complete Expanded Scripture pane Component.
 * 5. Re-introduce Verse Editor to scripture pane.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme} from 'material-ui/styles';

import {Glyphicon} from 'react-bootstrap';

import './ScripturePane.styles.css';
// components
import Pane from './Pane';
import ExpandedScripturePaneModal from './ExpandedScripturePaneModal';

const biblesWithHighlightedWords = {
  en: {
    ult: {
      languageName: "English",
      direction: "ltr",
      description: "Gateway Language",
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
      languageName: "English",
      direction: "ltr",
      description: "Gateway Language",
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
      languageName: "Hindi",
      direction: "ltr",
      description: "Gateway Language",
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
      languageName: "Hindi",
      direction: "ltr",
      description: "Gateway Language",
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
      languageName: "Koine Greek",
      direction: "ltr",
      description: "Original Language",
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
      languageName: "English",
      direction: "ltr",
      description: "Target Language",
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

const currentPaneSettings = [
  {
    "languageId": "targetLanguage",
    "bibleId": "targetBible"
  },
  {
    "languageId": "originalLanguage",
    "bibleId": "ugnt"
  },
  {
    "languageId": "en",
    "bibleId": "ult"
  },
  {
    languageId: "en",
    bibleId: "udt",
  }
];

const contextId = {
  refecerence: {
    chapter: 1,
    verse: 2,
  }
}

class ScripturePane extends Component {
  constructor() {
    super();
    this.state = {
      showExpandedScripturePane: false
    }
    this.openExpandedScripturePane = this.openExpandedScripturePane.bind(this);
    this.closeExpandedScripturePane = this.closeExpandedScripturePane.bind(this);

  }

  openExpandedScripturePane() { this.setState({ showExpandedScripturePane: true }); }

  closeExpandedScripturePane() { this.setState({ showExpandedScripturePane: false }) }

  render() {
    const {
      titleLabel,
      closeButtonLabel,
      expandedScripturePaneTitle,
      expandButtonHoverText,
      clickToRemoveResourceLabel,
    } = this.props;

    // material-ui-theme, new color themes could be added here in the future
    const theme = createMuiTheme();

    return (
      <MuiThemeProvider theme={theme}>
        <div className="scripture-pane-container">
          <div className="inner-container">
            <div className="title-bar">
              <span>{titleLabel}</span>
              <Glyphicon
                onClick={this.openExpandedScripturePane}
                glyph={"fullscreen"}
                style={{ cursor: "pointer" }}
                title={expandButtonHoverText}
              />
            </div>
            <div className="panes-container">
            {
              currentPaneSettings.map((paneSettings, index) => {
                const { languageId, bibleId } = paneSettings;
                const {
                  languageName,
                  direction,
                  description,
                  bibleData
                } = biblesWithHighlightedWords[languageId][bibleId]
                const { chapter, verse } = contextId.refecerence;
                const verseElements = bibleData[chapter][verse];

                return (
                  <Pane
                    key={index.toString()}
                    index={index}
                    chapter={chapter}
                    verse={verse}
                    bibleId={bibleId}
                    languageName={languageName}
                    direction={direction}
                    description={description}
                    verseElements={verseElements}
                    clickToRemoveResourceLabel={clickToRemoveResourceLabel}
                    removePane={() => console.log('temp removePane')}
                  />
                )
              })
            }
            </div>
          </div>
          <ExpandedScripturePaneModal
            show={this.state.showExpandedScripturePane}
            onHide={this.closeExpandedScripturePane}
            title={expandedScripturePaneTitle}
            primaryLabel={closeButtonLabel}
            biblesWithHighlightedWords={biblesWithHighlightedWords}
            currentPaneSettings={currentPaneSettings}
            contextId={contextId}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

ScripturePane.propTypes = {
  titleLabel: PropTypes.string.isRequired,
  closeButtonLabel: PropTypes.string.isRequired,
  expandedScripturePaneTitle: PropTypes.string.isRequired,
  expandButtonHoverText: PropTypes.string.isRequired,
}

export default ScripturePane;
