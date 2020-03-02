import React from 'react';
import PropTypes from 'prop-types';
import { Glyphicon } from 'react-bootstrap';
import isEqual from 'deep-equal';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InfoIcon from '@material-ui/icons/Info';
import ReactTooltip from 'react-tooltip';
// components
import Bookmark from '../../Bookmark';
// css
import './ActionsArea.styles.css';

const styles = {
  formControl: { margin: '0' },
  label: {
    color: 'var(--accent-color-dark)',
    fontWeight: 'normal',
    fontSize: 14,
  },
  checkBoxRoot: {
    'padding': '12px 5px',
    'color': 'var(--accent-color-dark)',
    '&$checked': { color: 'var(--accent-color-dark)' },
  },
  checked: {},
  icon: {
    color: 'var(--accent-color-dark)',
    verticalAlign: 'middle',
    margin: '5px',
    width: 30,
    height: 30,
    cursor: 'pointer',
  },
};


const isSelectionsSaveDisable = (localNothingToSelect, nothingToSelect, newSelections, selections) => {
  if (newSelections.length > 0 || (newSelections.length === 0 && !isEqual(newSelections, selections))) {
    return isEqual(newSelections, selections);
  }

  return localNothingToSelect === nothingToSelect;
};

/* eslint-disable react/prop-types */
const ChangeModeArea = ({
  translate,
  bookmarkEnabled,
  toggleBookmark,
  changeMode,
}) => (
  <div className='actions-area'>
    <Bookmark
      value='bookmark'
      color='primary'
      checked={bookmarkEnabled}
      label={translate('bookmark')}
      onChange={toggleBookmark} />
    <div style={{ display: 'flex', marginLeft: 'auto' }}>
      <button
        style={{ width: '140px', marginRight: '5px' }}
        className='btn-second'
        onClick={() => changeMode('select')}
      >
        <Glyphicon glyph='ok' style={{ marginRight: '10px' }} />
        {translate('select')}
      </button>
      <button
        style={{ width: '140px', marginRight: '5px' }}
        className='btn-second'
        onClick={() => changeMode('edit')}
      >
        <Glyphicon glyph='pencil' style={{ marginRight: '10px' }} />
        {translate('edit_verse')}
      </button>
      <button
        style={{ width: '140px' }}
        className='btn-second'
        onClick={() => changeMode('comment')}
      >
        <Glyphicon glyph='comment' style={{ marginRight: '10px' }} />
        {translate('comment')}
      </button>
    </div>
  </div>
);

const ConfirmEditVerseArea = ({
  translate,
  tags,
  cancelEditVerse,
  saveEditVerse,
}) => (
  <div className='actions-area'>
    <button
      className='btn-second'
      onClick={cancelEditVerse}
    >
      {translate('cancel')}
    </button>
    <button className='btn-prime'
      disabled={!tags.length}
      onClick={saveEditVerse}
    >
      <Glyphicon glyph='ok' style={{ marginRight: '10px' }} />
      {translate('save')}
    </button>
  </div>
);

const ConfirmCommentArea = ({
  translate,
  isCommentChanged,
  cancelComment,
  saveComment,
}) => (
  <div className='actions-area'>
    <button className='btn-second'
      onClick={cancelComment}
    >
      {translate('cancel')}
    </button>
    <button className='btn-prime'
      disabled={!isCommentChanged}
      onClick={saveComment}
    >
      <Glyphicon glyph='ok' style={{ marginRight: '10px' }} />
      {translate('save')}
    </button>
  </div>
);

const ConfirmSelectionArea = ({
  classes,
  translate,
  localNothingToSelect,
  newSelections,
  nothingToSelect,
  selections,
  toggleNothingToSelect,
  cancelSelection,
  clearSelection,
  saveSelection,
}) => (
  <div className='selection-actions-area'>
    <div className='flex-row'>
      <FormControlLabel
        value="end"
        control={
          <Checkbox
            checked={localNothingToSelect}
            disabled={newSelections && newSelections.length > 0}
            onChange={event => toggleNothingToSelect(event.target.checked)}
            value="nothingToSelect"
            color="primary"
            classes={{
              root: classes.checkBoxRoot,
              checked: classes.checked,
            }}
          />
        }
        label={translate('no_selection_needed')}
        classes={{
          root: classes.formControl,
          label: classes.label,
        }}
      />
      <div
        data-tip={translate('nothing_to_select_description')}
        data-place="top"
        data-effect="float"
        data-type="dark"
        data-class="selection-tooltip"
        data-delay-hide="100"
        style={{ verticalAlign: 'super', fontSize: '0.8em' }}
      >
        <InfoIcon classes={{ root: classes.icon }} />
        <ReactTooltip/>
      </div>
    </div>
    <div style={{ whiteSpace: 'nowrap' }}>
      <button
        className='btn-second'
        style={{
          marginLeft: '0px', width: '140px', marginRight: '5px', alignSelf: 'flex-start',
        }}
        onClick={cancelSelection}
      >
        {translate('cancel')}
      </button>
      <button
        className='btn-second'
        style={{ width: '140px', marginRight: '5px' }}
        disabled={newSelections.length > 0 ? false : true}
        onClick={clearSelection}
      >
        <Glyphicon glyph='erase' style={{ marginRight: '10px' }} />
        {translate('clear_selection')}
      </button>
      <button
        className='btn-prime'
        style={{ width: '140px', marginRight: '5px' }}
        disabled={isSelectionsSaveDisable(localNothingToSelect, nothingToSelect, newSelections, selections)}
        onClick={saveSelection}
      >
        <Glyphicon glyph='ok' style={{ marginRight: '10px' }} />
        {translate('save')}
      </button>
    </div>
  </div>
);
/* eslint-enable react/prop-types */

const ActionsArea = ({
  tags,
  mode,
  isCommentChanged,
  selections,
  newSelections,
  bookmarkEnabled,
  saveSelection,
  cancelSelection,
  clearSelection,
  translate,
  classes,
  localNothingToSelect,
  nothingToSelect,
  toggleNothingToSelect,
  toggleBookmark,
  changeMode,
  cancelEditVerse,
  saveEditVerse,
  cancelComment,
  saveComment,
}) => {
  switch (mode) {
  case 'edit':
    return (
      <ConfirmEditVerseArea
        tags={tags}
        translate={translate}
        cancelEditVerse={cancelEditVerse}
        saveEditVerse={saveEditVerse}
      />
    );
  case 'comment':
    return (
      <ConfirmCommentArea
        translate={translate}
        isCommentChanged={isCommentChanged}
        cancelComment={cancelComment}
        saveComment={saveComment}
      />
    );
  case 'select':
    return (
      <ConfirmSelectionArea
        classes={classes}
        translate={translate}
        localNothingToSelect={localNothingToSelect}
        newSelections={newSelections}
        nothingToSelect={nothingToSelect}
        selections={selections}
        toggleNothingToSelect={toggleNothingToSelect}
        cancelSelection={cancelSelection}
        clearSelection={clearSelection}
        saveSelection={saveSelection}
      />
    );
  case 'default':
    return (
      <ChangeModeArea
        translate={translate}
        bookmarkEnabled={bookmarkEnabled}
        toggleBookmark={toggleBookmark}
        changeMode={changeMode}
      />
    );
  default:
    return (
      <ChangeModeArea
        translate={translate}
        bookmarkEnabled={bookmarkEnabled}
        toggleBookmark={toggleBookmark}
        changeMode={changeMode}
      />
    );
  }
};

ActionsArea.propTypes = {
  tags: PropTypes.array.isRequired,
  mode: PropTypes.string.isRequired,
  isCommentChanged: PropTypes.bool.isRequired,
  selections: PropTypes.array.isRequired,
  newSelections: PropTypes.array.isRequired,
  bookmarkEnabled: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
  localNothingToSelect: PropTypes.bool.isRequired,
  nothingToSelect: PropTypes.bool.isRequired,
  saveSelection: PropTypes.func.isRequired,
  cancelSelection: PropTypes.func.isRequired,
  clearSelection: PropTypes.func.isRequired,
  translate: PropTypes.func.isRequired,
  toggleNothingToSelect: PropTypes.func.isRequired,
  toggleBookmark: PropTypes.func.isRequired,
  changeMode: PropTypes.func.isRequired,
  cancelEditVerse: PropTypes.func.isRequired,
  saveEditVerse: PropTypes.func.isRequired,
  cancelComment: PropTypes.func.isRequired,
  saveComment: PropTypes.func.isRequired,
};

export default withStyles(styles)(ActionsArea);
