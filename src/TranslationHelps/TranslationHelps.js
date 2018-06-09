/**
 *  TranslationHelps is a feature of the TranslationWords tool and consists of:
 *   A collapible sidebar showing the complete artical sumarized in panel
 *     The sidebar has a sash that expands to about 20% of the application window
 *     The sash can collapse to about 0.25in
 *     The expanded sidebar vertically wraps article text and can scroll entire article
 *     When expanded the "See More" button in panel is hidden
 *
 *
 *   It interoperates with CheckInfoCard
 */

import React from 'react';
import PropTypes from 'prop-types';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {Glyphicon} from 'react-bootstrap';
// components
import ExpandedHelpsModal from './ExpandedHelpsModal';
import THelpsMarkDown from './THelpsMarkDown';

import './TranslationHelps.styles.css';

const TranslationHelps = ({
  modalArticle,
  article,                       // Article to display in sidebar and expanded modal
  expandedHelpsButtonHoverText,  // Text to display when hovering over sash and expansion button
  openExpandedHelpsModal,        // Function to open the expanded Translation Helps Modal
  isShowHelpsSidebar,            // is the Translation helps sidebar displayed
  sidebarToggle,                 // toggle the translation helps sidebar
  isShowHelpsExpanded,           // is the expanded Translation Helps modal displayed?
  modalTitle,                    // Title for the expanded helps modal
  translate
}) => {
  const theme = createMuiTheme({scrollbarThumb: {borderRadius: '10px'}});

  if (isShowHelpsSidebar) {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="helps-sash-container">
          <div className="helps-sash-closed" onClick={sidebarToggle}>
            <Glyphicon
              glyph="chevron-right"
              style={{cursor: "pointer"}} />
          </div>
          <div className="helps">
            <div className="helps-title-bar">
              <Glyphicon
                onClick={openExpandedHelpsModal}
                glyph={"fullscreen"}
                style={{cursor: "pointer"}}
                title={expandedHelpsButtonHoverText} />
            </div>
            <THelpsMarkDown article={article} />
          </div>
          <ExpandedHelpsModal
            translate={translate}
            show={isShowHelpsExpanded}
            onHide={openExpandedHelpsModal}
            title={modalTitle}
            article={modalArticle || article} />
        </div>
      </MuiThemeProvider>
    );
  } else {
    return (
      <div className="helps-sash-closed" onClick={sidebarToggle}>
        <Glyphicon
          glyph="chevron-left"
          style={{cursor: "pointer"}}
          onClick={sidebarToggle}
        />
      </div>
    );
  }

};

TranslationHelps.propTypes = {
  modalArticle: PropTypes.string.isRequired,
  article: PropTypes.string.isRequired,
  expandedHelpsButtonHoverText: PropTypes.string.isRequired,
  openExpandedHelpsModal: PropTypes.func.isRequired,
  isShowHelpsSidebar: PropTypes.bool.isRequired,
  sidebarToggle: PropTypes.func.isRequired,
  isShowHelpsExpanded: PropTypes.bool.isRequired,
  translate: PropTypes.func.isRequired
};

TranslationHelps.defaultProps = {
  article:"### tHelps Article",
  modalArticle: "### tHelps Modal Article",
  expandedHelpsButtonHoverText: "Click to show expanded help pane",
  modalTitle: "translationHelps",
  translate: k => k
};

export default TranslationHelps;
