import React from 'react';
import {Glyphicon} from 'react-bootstrap';
import Switch from 'material-ui/Switch';
import {FormGroup, FormControlLabel} from 'material-ui/Form';
import isEqual from 'deep-equal';
import '../VerseCheck.styles.css';


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
  translate
}) => {
  const changeModeArea = (
    <div className='actionsArea'>
      <FormControlLabel
        control={
          <Switch
            checked={remindersReducer.enabled}
            onToggle={actions.toggleReminder}
          />
        }
        label={translate("bookmark")}
      />
      <div style={{display: "flex"}}>
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
    <div className='actionsArea'>
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
    <div className='actionsArea'>
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
    <div className='actionsArea'>
      <button
        className='btn-second'
        style={{alignSelf: 'flex-start'}}
        onClick={cancelSelection.bind(this)}
      >
        {translate("cancel")}
      </button>
      <button
        className='btn-second'
        disabled={selections.length > 0 ? false : true}
        onClick={clearSelection.bind(this)}
      >
        <Glyphicon glyph='erase' style={{marginRight: '10px'}} />
        {translate("clear_selection")}
      </button>
      <button
        className='btn-prime'
        disabled={isEqual(newSelections, selections)}
        onClick={saveSelection.bind(this)}
      >
        <Glyphicon glyph='ok' style={{marginRight: '10px'}} />
        {translate("save")}
      </button>
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

export default ActionsArea;

// labelPosition="right"
// labelStyle={{ color: 'var(--accent-color-dark)', fontWeight: "normal" }}
// thumbSwitchedStyle={{ backgroundColor: 'var(--accent-color-dark)' }}
// trackSwitchedStyle={{ backgroundColor: 'var(--accent-color-dark)', opacity: '0.5' }}