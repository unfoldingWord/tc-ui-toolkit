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
// TBD scroll bars
// TBD markdown

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';
import {Glyphicon} from 'react-bootstrap';
import './TranslationHelps.styles.css';
import ExpandedHelpsModal from './ExpandedHelpsModal';
//import Markdown from 'react-remarkable';

const TranslationHelps = ({
  article,                       // Article to display in sidebar and expanded modal
  expandedHelpsButtonHoverText,  // Text to display when hovering over sash and expansion button
  openExpandedHelpsModal,        // Function to open the expanded Translation Helps Modal
  isShowHelpsSidebar,            // is the Translation helps sidebar displayed
  sidebarToggle,                 // toggle the translation helps sidebar
  isShowHelpsExpanded,           // is the expanded Translation Helps modal displayed?
  modalTitle,                    // Title for the expanded helps modal
}) => {
  const theme = createMuiTheme();

  if(isShowHelpsSidebar) { 
    return (
      /*<MuiThemeProvider theme={theme}> */
        <div className="helps-sash-container">
          <div className="sash-container">
            <div className="helps-sash">
              <Glyphicon
                glyph="chevron-right"
                style={{cursor: "pointer"}} 
                onClick={sidebarToggle}
              />
            </div>
          </div>
          <div className="helps">
            <div className="helps-title-bar">
              <Glyphicon
                onClick={openExpandedHelpsModal}
                glyph={"fullscreen"}
                style={{ cursor: "pointer" }}
                title={expandedHelpsButtonHoverText}
              />
            </div>
            <div className="helps-article"  style={{overflowY: 'scroll'}} >
              {article}
            </div>
          </div>
          <ExpandedHelpsModal
            show={isShowHelpsExpanded} 
            onHide={openExpandedHelpsModal}
            title={modalTitle}
            article={article} 
          /> 
        </div> 
      /* </MuiThemeProvider> */
    )
  } else {
    return (
      /* <MuiThemeProvider theme="theme"> */
        <div className="sash-container">
          <div className="helps-sash">
            <Glyphicon
              glyph="chevron-left"
              style={{cursor: "pointer"}} 
              onClick={sidebarToggle}
            />
          </div>
        </div>
      /* </MuiThemeProvider> */
    )
  } 

};
 
   /*
      exp-start
        <ExpandedHelpsModal
          //show={isShowHelpsExpanded} 
          show={false}
         /* onHide={openExpandedHelpsModal}
          //title={modalTitle}
          article={article} 
          
          exp-end
          /> */

  //<Markdown options={{ html: true }} source={modalFile} />
 
  TranslationHelps.propTypes = {
    article: PropTypes.object.isRequired,
    expandedHelpsButtonHoverText: PropTypes.string.isRequired,
    openExpandedHelpsModal: PropTypes.func.isRequired,
    isShowHelpsSidebar: PropTypes.bool.isRequired,
    sidebarToggle: PropTypes.func.isRequired,
    isShowHelpsExpanded: PropTypes.bool.isRequired,
    //modalTitle: PropTypes.string.isRequired,
  }

  export default TranslationHelps
