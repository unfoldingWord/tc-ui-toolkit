import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  input: {
    width: '100%',
    resize: 'none',
    padding: '10px',
    border: 'solid 1px var(--border-color)',
    fontStyle: 'inherit',
    fontVariant: 'inherit',
    fontWeight: 'inherit',
    fontStretch: 'inherit',
    fontSize: 'inherit',
    lineHeight: 'inherit',
    fontFamily: 'inherit',
    cursor: 'inherit',
    outline: 'none',
    backgroundColor: 'transparent',
    WebkitAppearance: 'textfield',
    color: 'rgba(0, 0, 0, 0.870588)'
  }
};

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
    const {onChange} = this.props;
    onChange(event.target.value);
  }

  render() {
    const {verseText} = this.props;
    return (
      <textarea
        id="verse-editor-field"
        rows={4}
        style={styles.input}
        autoFocus={true}
        onChange={this._handleChange}
        value={verseText}/>
    );
  }
}

EditScreen.propTypes = {
  verseText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default EditScreen;
