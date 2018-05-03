import React from 'react';
import PropTypes from 'prop-types';
import {Glyphicon} from 'react-bootstrap';

const GroupsMenuFilterBubble = ({
  onPress,
  text
}) => (
    <span className="filter-bubble-wrapper">
      <span className="filter-bubble">
        <Glyphicon className='filter-remove' glyph='remove' onClick={() => onPress(name, false)} />
        <span className="filter-text">{text}</span>
      </span>
    </span>
  );

GroupsMenuFilterBubble.propTypes = {
  onPress: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default GroupsMenuFilterBubble;
