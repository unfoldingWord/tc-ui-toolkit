import React from 'react';
import {Glyphicon} from 'react-bootstrap';
import isEqual from 'deep-equal';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ReactTooltip from 'react-tooltip';
// components
import Bookmark from '../../Bookmark';
// css
import './ActionsArea.styles.css';

const styles = {
  formControl: {
    margin: '0'
  },
  label: {
    color: 'var(--accent-color-dark)',
    fontWeight: "normal",
    fontSize: 14,
  },
  checkBoxRoot: {
    padding: '12px 5px',
    color: 'var(--accent-color-dark)',
    '&$checked': {
      color: 'var(--accent-color-dark)',
    },
  },
  checked: {},
};


const isSelectionsSaveDisable = (localNothingToSelect, nothingToSelect, newSelections, selections) => {
  console.log('selections', selections);
  if (newSelections.length > 0 || (newSelections.length === 0 && !isEqual(newSelections, selections))) {
    return isEqual(newSelections, selections);
  }

  return localNothingToSelect === nothingToSelect;
};

let ActionsArea = ({
  tags,
  mode,
  actions,
  commentChanged,
  selections,
  newSelections,
  remindersReducer,
  saveSelection,
  cancelSelection,
  clearSelection,
  translate,
  classes,
  localNothingToSelect,
  nothingToSelect,
  toggleNothingToSelect,
}) => {

  const changeModeArea = (
    <div className='actions-area'>
      <Bookmark
        value='bookmark'
        color='primary'
        checked={remindersReducer.enabled}
        label={translate('bookmark')}
        onChange={actions.toggleReminder} />
      <div style={{display: "flex", marginLeft: 'auto'}}>
        <button
          style={{width: "140px", marginRigth: "5px"}}
          className='btn-second'
          onClick={actions.changeMode.bind(this, 'select')}
        >
          <Glyphicon glyph='ok' style={{marginRight: '10px'}} />
          {translate("select")}
        </button>
        <button
          style={{width: "140px", marginRigth: "5px"}}
          className='btn-second'
          onClick={actions.changeMode.bind(this, 'edit')}
        >
          <Glyphicon glyph='pencil' style={{marginRight: '10px'}} />
          {translate("edit_verse")}
        </button>
        <button
          style={{width: "140px"}}
          className='btn-second'
          onClick={actions.changeMode.bind(this, 'comment')}
        >
          <Glyphicon glyph='comment' style={{marginRight: '10px'}} />
          {translate("comment")}
        </button>
      </div>
    </div>
  );

  const confirmEditVerseArea = (
    <div className='actions-area'>
      <button className='btn-second'
        onClick={actions.cancelEditVerse.bind(this)}
      >
        {translate("cancel")}
      </button>
      <button className='btn-prime'
        disabled={!tags.length}
        onClick={actions.saveEditVerse.bind(this)}
      >
        <Glyphicon glyph='ok' style={{marginRight: '10px'}} />
        {translate("save")}
      </button>
    </div>
  );

  const confirmCommentArea = (
    <div className='actions-area'>
      <button className='btn-second'
        onClick={actions.cancelComment.bind(this)}
      >
        {translate("cancel")}
      </button>
      <button className='btn-prime'
        disabled={!commentChanged}
        onClick={actions.saveComment.bind(this)}
      >
        <Glyphicon glyph='ok' style={{marginRight: '10px'}} />
        {translate("save")}
      </button>
    </div>
  );
  const confirmSelectionArea = (
    <div className='selection-actions-area'>
      <div
        data-tip={translate('nothing_to_select_description')}
        data-place="top"
        data-effect="float"
        data-type="dark"
        data-class="selection-tooltip"
        data-delay-hide="100"
        style={{ verticalAlign: 'super', fontSize: '0.8em' }}
      >
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
          label="No selection needed"
          classes={{
            root: classes.formControl,
            label: classes.label
          }}
        />
        <ReactTooltip/>
      </div>
      <div>
        <button
          className='btn-second'
          style={{width: "140px", marginRigth: "5px", alignSelf: 'flex-start'}}
          onClick={cancelSelection.bind(this)}
        >
          {translate("cancel")}
        </button>
        <button
          className='btn-second'
          style={{width: "140px", marginRigth: "5px"}}
          disabled={newSelections.length > 0 ? false : true}
          onClick={clearSelection.bind(this)}
        >
          <Glyphicon glyph='erase' style={{marginRight: '10px'}} />
          {translate("clear_selection")}
        </button>
        <button
          className='btn-prime'
          style={{width: "140px", marginRigth: "5px"}}
          disabled={isSelectionsSaveDisable(localNothingToSelect, nothingToSelect, newSelections, selections)}
          onClick={saveSelection.bind(this)}
        >
          <Glyphicon glyph='ok' style={{marginRight: '10px'}} />
          {translate("save")}
        </button>
      </div>
    </div>
  );

  let modeArea;
  switch (mode) {
    case 'edit':
      modeArea = confirmEditVerseArea;
      break;
    case 'comment':
      modeArea = confirmCommentArea;
      break;
    case 'select':
      modeArea = confirmSelectionArea;
      break;
    case 'default':
      modeArea = changeModeArea;
      break;
    default:
      modeArea = changeModeArea;
  }

  return modeArea;
};

export default withStyles(styles)(ActionsArea);
