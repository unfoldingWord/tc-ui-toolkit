import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Glyphicon, FormGroup, FormControl,
} from 'react-bootstrap';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import './EditVerseArea.styles.css';

const styles = {
  formControlLabelRoot: { height: 30 },
  formControlLabel: {
    justifyContent: 'flex-start',
    fontSize: 16,
    color: 'var(--text-color-dark)',
  },
  checkBox: { '&$checked': { color: 'var(--accent-color-dark)' } },
  checked:{},
};

const EditVerseArea = ({
  tags,
  verseChanged,
  verseText,
  languageDirection,
  translate,
  classes,
  handleTagsCheckbox,
  handleEditVerse,
  handleCheckVerse,
}) => {
  const tagList1 = [
    ['spelling', translate('spelling')],
    ['punctuation', translate('punctuation')],
    ['wordChoice', translate('word_choice')],
  ];

  const tagList2 = [
    ['meaning', translate('meaning')],
    ['grammar', translate('grammar')],
    ['other', translate('other')],
  ];

  const checkboxesColumn1 = tagList1.map(tag =>
    <FormControlLabel
      key={tag[0]}
      disabled={!verseChanged}
      classes={{
        root: classes.formControlLabelRoot,
        label: classes.formControlLabel,
      }}
      control={
        <Checkbox
          classes={{
            root: classes.checkBox,
            checked:classes.checked,
          }}
          checked={tags.includes(tag[0])}
          onChange={() => handleTagsCheckbox(tag[0])}
        />
      }
      label={tag[1]}
    />
  );

  const checkboxesColumn2 = tagList2.map(tag =>
    <FormControlLabel
      key={tag[0]}
      disabled={!verseChanged}
      classes={{
        root: classes.formControlLabelRoot,
        label: classes.formControlLabel,
      }}
      control={
        <Checkbox
          classes={{
            root: classes.checkBox,
            checked:classes.checked,
          }}
          checked={tags.includes(tag[0])}
          onChange={() => handleTagsCheckbox(tag[0])}
        />
      }
      label={tag[1]}
    />
  );

  const checkBoxText = verseChanged ? translate('next_change_reason') : translate('first_make_change');

  return (
    <div className='edit-area'>
      <div style={{ fontWeight: 'bold' }}>
        <Glyphicon glyph='pencil' style={{ marginRight: '5px' }} />
        {translate('edit_verse')}
      </div>
      <FormGroup style={{
        flex: 'auto', display: 'flex', flexDirection: 'column', marginBottom: '5px',
      }} controlId='formControlsTextarea'>
        <FormControl
          autoFocus
          componentClass='textarea'
          type='text'
          defaultValue={verseText}
          style={{
            flex: 'auto',
            minHeight: '110px',
            direction: languageDirection,
          }}
          onBlur={handleEditVerse}
          onInput={handleCheckVerse}
        />
        <div style={{
          flex: '0 0 65px', marginTop: '5px', fontSize: '0.9em',
        }}>
          {checkBoxText}
          <br />
          <div style={{ display: 'flex' }}>
            <div style={{
              display: 'flex', flexDirection: 'column', margin: '0px 0px 0px 15px',
            }}>
              {checkboxesColumn1}
            </div>
            <div style={{
              display: 'flex', flexDirection: 'column', margin: '0px 0px 0px 15px',
            }}>
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
  tags: PropTypes.array.isRequired,
  verseChanged: PropTypes.bool.isRequired,
  verseText: PropTypes.string.isRequired,
  languageDirection: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  handleTagsCheckbox: PropTypes.func.isRequired,
  handleEditVerse: PropTypes.func.isRequired,
  handleCheckVerse: PropTypes.func.isRequired,
};

export default withStyles(styles)(EditVerseArea);
