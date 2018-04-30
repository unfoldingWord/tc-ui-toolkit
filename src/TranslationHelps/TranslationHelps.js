/**
 *  TranslationHelps is a feature of the TranslationWords tool and consists of:
 *   A collapible sidebar showing the complete artical sumarized in panel
 *     The sidebar has a sash that expands to about 20% of the application window
 *     The sash can collapse to about 0.25in
 *     The expanded sidebar vertically wraps article text and can scroll entire article
 *     When expanded the "See More" button in panel is hidden 
 *   It interoperates with CheckInfoCard
 */ 
import React, { Comonent } from 'react';
import PropTypes from 'prop-types';
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';
import {Glyphicon} from 'react-bootstrap';
import './TranslationHelps.styles.css';

/*
<Glyphicon
onClick={openExpandedHelpsPane}
glyph={"fullscreen"}
style={{ cursor: "pointer" }}
title={expandedHelpsPaneIconTitle}
/> */
const TranslationHelps = ({
  article,
  openExpandedHelpsPane,
  expandedHelpsButtonHoverText,
}) => {
  return (
    <div className="helps-sash-container">
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
  )};

  TranslationHelps.propTypes = {
    article: PropTypes.object.isRequired,
    openExpandedHelpsPane: PropTypes.func.isRequired,
    expandedHelpsButtonHoverText: PropTypes.string.isRequired,
  }

  export default TranslationHelps
