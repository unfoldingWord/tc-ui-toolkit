import React from 'react';
import PropTypes from 'prop-types';
import {Glyphicon} from 'react-bootstrap';

import './ScripturePane.styles.css';

const ScripturePane = ({
  titleLabel,
  openExpandedScripturePane,
  expandedScripturePaneIconTitle,
}) => {
  return (
    <div className="scripture-pane-container">
      <div className="inner-container">
        <div className="title-bar">
          <span>{titleLabel}</span>
          <Glyphicon
            onClick={openExpandedScripturePane}
            glyph={"fullscreen"}
            style={{ cursor: "pointer" }}
            title={expandedScripturePaneIconTitle}
          />
        </div>
        <div className="panes-container">
          
        </div>
      </div>
    </div>
  );
}

ScripturePane.propTypes = {
  titleLabel: PropTypes.string.isRequired,
  openExpandedScripturePane: PropTypes.func.isRequired,
  expandedScripturePaneIconTitle: PropTypes.string.isRequired,
}

export default ScripturePane;
