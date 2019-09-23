import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Toolbar from '@material-ui/core/Toolbar';
import { Glyphicon } from 'react-bootstrap';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import MyTargetVerse from '../MyTargetVerse';

import './MyLanguageModal.styles.css';

function PaperComponent(props) {
  // component will only be draggable by element with the className in the handle prop
  return (
    <Draggable handle=".my-language-modal-draggable-handle">
      <Paper {...props}/>
    </Draggable>
  );
}

const styles = { paperRoot: { margin: '0px' } };

class MyLanguageModal extends Component {
  constructor(props) {
    super(props);
    this.scrollToCurrentVerse = this.scrollToCurrentVerse.bind(this);
  }

  scrollToCurrentVerse() {
    let { chapter, currentVerse } = this.props;
    let verseReference = 'MyTargetVerse:' + chapter.toString() + currentVerse.toString();
    let element = document.getElementById(verseReference);

    if (element) {
      element.scrollIntoView();
    }
  }

  render() {
    let {
      show,
      onHide,
      targetLangBible,
      chapter,
      currentVerse,
      translate,
      classes,
      bookName,
      languageDirection,
    } = this.props;
    const title = bookName;
    let MyTargetLanguage = [];

    if (show) {
      for (let key in targetLangBible[chapter]) {
        if (targetLangBible[chapter].hasOwnProperty(key)) {
          let verseText = targetLangBible[chapter][key];
          let versePaneStyle = {};

          if (key == currentVerse) {
            if (key % 2 == 0) {
              versePaneStyle = {
                borderLeft: '6px solid var(--accent-color)', backgroundColor: 'var(--background-color-light)', marginTop: '10px', color: 'var(--text-color-dark)', padding: '10px',
              };
            } else {
              versePaneStyle = {
                borderLeft: '6px solid var(--accent-color)', marginTop: '10px', color: 'var(--text-color-dark)', padding: '10px',
              };
            }
          } else if (key % 2 == 0) {
            versePaneStyle = {
              backgroundColor: 'var(--background-color-light)', marginTop: '10px', color: 'var(--text-color-dark)', padding: '10px',
            };
          } else {
            versePaneStyle = {
              marginTop: '10px', color: 'var(--text-color-dark)', padding: '10px',
            };
          }
          MyTargetLanguage.push(
            <div key={key} id={'MyTargetVerse:' + chapter.toString() + key.toString()}>
              <MyTargetVerse
                chapter={chapter}
                verse={parseInt(key, 10)}
                verseText={verseText}
                styles={versePaneStyle}
                dir={languageDirection}
              />
            </div>
          );
        }
      }
    }

    return (
      <Dialog
        onEntered={this.scrollToCurrentVerse}
        maxWidth={'md'}
        fullWidth={true}
        open={show}
        onClose={onHide}
        PaperComponent={PaperComponent}
        PaperProps={{ className: classes.paperRoot }}
      >
        <Toolbar
          className="my-language-modal-draggable-handle"
          disableGutters={true}
          style={{
            display: 'flex', justifyContent: 'flex-end', backgroundColor: 'var(--accent-color-dark)', cursor: 'move',
          }}
        >
          <DialogTitle disableTypography={true} className='verse-check-modal-title'>
            <h4 style={{ color: 'var(--reverse-color)' }}>{title}</h4>
            <Glyphicon
              onClick={onHide}
              glyph={'remove'}
              style={{
                position:'absolute', right: 0, margin: 24, color: 'var(--reverse-color)', cursor: 'pointer', fontSize: '18px',
              }}
            />
          </DialogTitle>
        </Toolbar>
        <DialogContent style={{
          padding: '0px', height: '500px', backgroundColor: 'var(--reverse-color)', overflowY: 'auto',
        }}>
          {MyTargetLanguage}
        </DialogContent>
        <DialogActions disableActionSpacing={true}>
          <button className='btn-prime' onClick={onHide}>{translate('close')}</button>
        </DialogActions>
      </Dialog>
    );
  }
}

MyLanguageModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  targetLangBible: PropTypes.object,
  chapter: PropTypes.number,
  currentVerse: PropTypes.number,
  languageDirection: PropTypes.string.isRequired,
  translate: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  bookName: PropTypes.string.isRequired,
};

export default withStyles(styles)(MyLanguageModal);
