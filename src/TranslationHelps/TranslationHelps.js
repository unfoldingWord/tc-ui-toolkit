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
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';
import {Glyphicon} from 'react-bootstrap';
import './TranslationHelps.styles.css';
import { ExpandedHelpsModal } from './ExpandedHelpsModal.js';
//import Markdown from 'react-remarkable';

const TranslationHelps = ({
  article,                      // Article to display in sidebar and expanded modal
  openExpandedHelpsPane,        // Function to open the expanded Translation Helps page
  expandedHelpsButtonHoverText, // Text to display when hovering over sash and expansion button
  isShowHelpsSidebar,           // is the Translation helps sidebar displayed
  sidebarToggle,
  //isShowHelpsExpanded,          // is the expanded Translation Helps page displayed?
}) => {
  return (
    <div className="helps-sash-container">
      <div className="helps">
        <div className="helps-title-bar">
          <Glyphicon
            onClick={openExpandedHelpsPane}
            glyph={"fullscreen"}
            style={{ cursor: "pointer" }}
            title={expandedHelpsButtonHoverText}
          />
        </div>
        <div className="helps-article">
          {article}
        </div>
      </div>
    </div>  
  )};
 
   /*
      <ExpandedHelpsModal 
          show={isShowHelpsExpanded}
          onHide={showHelpsSidebar}>
       
      </ExpandedHelpsModal> */

  //<Markdown options={{ html: true }} source={modalFile} />
 
  TranslationHelps.propTypes = {
    article: PropTypes.object.isRequired,
    openExpandedHelpsPane: PropTypes.func.isRequired,
    expandedHelpsButtonHoverText: PropTypes.string.isRequired,
    isShowHelpsSidebar: PropTypes.bool.isRequired,
    sidebarToggle: PropTypes.func.isRequired,
    //isShowHelpsExpanded,
  }

  export default TranslationHelps
