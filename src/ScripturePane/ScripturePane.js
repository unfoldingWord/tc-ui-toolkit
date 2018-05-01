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


const paneObjects = [
  {
    chapter: 1,
    verse: 2,
    bibleId: "ult",
    languageName: "English",
    direction: "ltr",
    description: "Gateway Language",
    verseElements: <span>Paul, a servant of God and an apostle of Jesus Christ, for the faith of God's chosen people and the knowledge of the truth that agrees with godliness,</span>,
  },
  {
    chapter: 1,
    verse: 2,
    bibleId: "ult",
    languageName: "English",
    direction: "ltr",
    description: "Gateway Language",
    verseElements: <span>Paul, a servant of God and an apostle of Jesus Christ, for the faith of God's chosen people and the knowledge of the truth that agrees with godliness,</span>,
  },
  {
    chapter: 1,
    verse: 2,
    bibleId: "ult",
    languageName: "English",
    direction: "ltr",
    description: "Gateway Language",
    verseElements: <span>Paul, a servant of God and an apostle of Jesus Christ, for the faith of God's chosen people and the knowledge of the truth that agrees with godliness,</span>,
  },
  {
    chapter: 1,
    verse: 2,
    bibleId: "ult",
    languageName: "English",
    direction: "ltr",
    description: "Gateway Language",
    verseElements: <span>Paul, a servant of God and an apostle of Jesus Christ, for the faith of God's chosen people and the knowledge of the truth that agrees with godliness,</span>,
  },
  {
    chapter: 1,
    verse: 2,
    bibleId: "ult",
    languageName: "English",
    direction: "ltr",
    description: "Gateway Language",
    verseElements: "",
  },
]


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
              paneObjects.map((paneObject, index) => (
                <Pane
                  index={index.toString()}
                  bibleId={paneObject.bibleId}
                  languageName={paneObject.languageName}
                  direction={paneObject.direction}
                  verseElements={paneObject.verseElements}
                  description={paneObject.description}
                  chapter={paneObject.chapter}
                  verse={paneObject.verse}
                  clickToRemoveResourceLabel={clickToRemoveResourceLabel}
                  removePane={() => console.log('temp removePane')}
                />
              ))
            }
            </div>
          </div>
          <ExpandedScripturePaneModal
            show={this.state.showExpandedScripturePane}
            onHide={this.closeExpandedScripturePane}
            title={expandedScripturePaneTitle}
            primaryLabel={closeButtonLabel}
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
