import React from 'react';
import PropTypes from 'prop-types';
import {Checkbox, Glyphicon, FormGroup, FormControl} from 'react-bootstrap';
import './EditVerseArea.styles.css';

let EditVerseArea = ({
  actions,
  tags,
  verseChanged,
  verseText,
  dir,
  translate
}) => {
  const tagList1 = [
    ["spelling", translate("spelling")],
    ["punctuation", translate("punctuation")],
    ["wordChoice", translate("word_choice")],
  ];

  const tagList2 = [
    ["meaning", translate("meaning")],
    ["grammar", translate("grammar")],
    ["other", translate("other")]
  ];

  const checkboxesColumn1 = tagList1.map(tag =>
    <Checkbox
      key={tag[0]}
      checked={tags.includes(tag[0])}
      disabled={!verseChanged}
      style={verseChanged ? { marginLeft: '10px', marginRight: '10px', color: 'var(--text-color-dark)'} : { marginLeft: '10px', marginRight: '10px', color: 'var(--text-color-light)'}}
      onChange={actions.handleTagsCheckbox.bind(this, tag[0])}
    >
      {tag[1]}
    </Checkbox>
  );

  const checkboxesColumn2 = tagList2.map(tag =>
    <Checkbox
      key={tag[0]}
      checked={tags.includes(tag[0])}
      disabled={!verseChanged}
      style={verseChanged ? { marginLeft: '10px', marginRight: '10px', color: 'var(--text-color-dark)'} : { marginLeft: '10px', marginRight: '10px', color: 'var(--text-color-light)'}}
      onChange={actions.handleTagsCheckbox.bind(this, tag[0])}
    >
      {tag[1]}
    </Checkbox>
  );

  let checkBoxText = verseChanged ? translate("next_change_reason") : translate("first_make_change");

  return (
    <div className='edit-area'>
      <div style={{fontWeight: 'bold'}}>
        <Glyphicon glyph='pencil' style={{marginRight: '5px'}} />
        {translate("edit_verse")}
      </div>
      <FormGroup style={{flex: 'auto', display: 'flex', flexDirection: 'column', marginBottom: '5px'}} controlId='formControlsTextarea'>
        <FormControl autoFocus
          componentClass='textarea'
          type='text'
          defaultValue={verseText}
          style={{flex: 'auto', direction: dir}}
          onBlur={actions.handleEditVerse.bind(this)}
          onInput={actions.checkVerse.bind(this)}
        />
      <div style={{flex: '0 0 65px', marginTop: '5px', fontSize: '0.9em'}}>
        {checkBoxText}
        <br />
        <div style={{ display: 'flex' }}>
          <div style={{ flex: '1' }}>
            {checkboxesColumn1}
          </div>
          <div style={{ flex: '1' }}>
            {checkboxesColumn2}
          </div>
        </div>
      </div>
      </FormGroup>
    </div>
  );
};

EditVerseArea.propTypes = {
  translate: PropTypes.func.isRequired,
  actions: PropTypes.shape({
    handleTagsCheckbox: PropTypes.func,
    handleEditVerse: PropTypes.func,
    checkVerse: PropTypes.func
  }).isRequired,
  tags: PropTypes.array.isRequired,
  verseChanged: PropTypes.bool.isRequired,
  verseText: PropTypes.string.isRequired,
  dir: PropTypes.string.isRequired
};

export default EditVerseArea;
