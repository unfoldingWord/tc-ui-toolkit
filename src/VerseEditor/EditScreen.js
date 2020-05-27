import React from 'react';
import PropTypes from 'prop-types';
import { moveCursorToEnd } from './helpers/editHelpers';
import { isLTR } from '..';

/**
 * @callback EditScreen~onChange
 * @param {string} newVerse - the edited verse
 */

/**
 * Renders a text area for editing the verse
 * @property {string} verseText - the verse text to edit
 * @property {EditScreen~onChange} onChange - callback when the text has changed
 */
class EditScreen extends React.Component {
  constructor(props) {
    super(props);
    this._handleChange = this._handleChange.bind(this);
  }

  _handleChange(event) {
    const { onChange } = this.props;
    onChange(event.target.value);
  }

  render() {
    const {
      verseText, rows, style, direction,
    } = this.props;
    const style_ = {
      ...style,
      textAlign: isLTR(direction) ? 'left' : 'right',
    };
    return (
      <textarea
        id="verse-editor-field"
        rows={rows}
        className='edit-screen'
        autoFocus={true}
        onFocus={moveCursorToEnd}
        onChange={this._handleChange}
        value={verseText}
        style={style_}
      />
    );
  }
}

EditScreen.propTypes = {
  verseText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  rows: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
  direction: PropTypes.string.isRequired,
};

EditScreen.defaultProps = {
  rows: 4,
  style: {},
  direction: 'ltr',
};

export default EditScreen;
