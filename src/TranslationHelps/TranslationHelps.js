/* TranslationHelps is a feature of the TranslationWords tool and consists of:
 *   A collapible sidebar showing the complete artical sumarized in panel
 *     The sidebar has a sash that expands to about 20% of the application window
 *     The sash can collapse to about 0.25in
 *     The expanded sidebar vertically wraps article text and can scroll entire article
 *     When expanded the "See More" button in panel is hidden 
 *   It interoperates with CheckInfoCard
 */ 
import React from 'react';
import PropTypes from 'prop-types';
//import {Glyphicon} from 'react-bootstrap';
import './TranslationHelps.styles.css';

//<Glyphicon
// onClick={openExpandedHelpsPane}
// glyph={"fullscreen"}
// style={{ cursor: "pointer" }}
// title={expandedHelpsPaneIconTitle}
 

const TranslationHelps = ({
  openExpandedHelpsPane,
  expandedHelpsPaneIconTitle,
  article 
}) => {
  return (
    <div className="helps-sash-container">
      <div className="helps-title-bar">
        hello world
       
      </div>
      <div className="helps"> 
        {article}
      </div>
    </div>
  )};

  TranslationHelps.propTypes = {
    article: PropTypes.object
  }

  export default TranslationHelps
