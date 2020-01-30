import React from 'react';
import PropTypes from 'prop-types';

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
      verseText, rows, style,
    } = this.props;
    return (
      <textarea
        id="verse-editor-field"
        rows={rows}
        className='edit-screen'
        autoFocus={true}
        onChange={this._handleChange}
        value={verseText}
        style={style}
      />
    );
  }
}

EditScreen.propTypes = {
  verseText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  rows: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
};

EditScreen.defaultProps = {
  rows: 4,
  style: {},
};

export default EditScreen;
