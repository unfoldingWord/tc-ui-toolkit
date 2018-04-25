/* eslint-disable react/no-find-dom-node */
/* eslint-disable react/no-string-refs */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Glyphicon } from 'react-bootstrap';
import MyTargetVerse from './MyTargetVerse';
import ReactDOM from 'react-dom';
import '../VerseCheck.styles.css';

class MyLanguageModal extends Component {

  componentDidMount() {
    let {chapter, currentVerse} = this.props;
    let verseReference = chapter.toString() + currentVerse.toString();
    let currentVerseNode = this.refs[verseReference];
    let element = ReactDOM.findDOMNode(currentVerseNode);
    if (element) {
      element.scrollIntoView();
    }
  }

  render() {
    let { show, onHide, targetLangBible, chapter, currentVerse, manifest} = this.props;
    const { target_language, project } = manifest;
    const title = target_language && target_language.book && target_language.book.name ?
        target_language.book.name :
        project.name;
    let MyTargetLanguage = [];
    if (show) {
      for (let key in targetLangBible[chapter]) {
        if (targetLangBible[chapter].hasOwnProperty(key)) {
          let verseText = targetLangBible[chapter][key];
          let versePaneStyle = {};
          if (key == currentVerse) {
            if (key % 2 == 0) {
              versePaneStyle = {borderLeft: '6px solid var(--accent-color)', backgroundColor: 'var(--background-color-light)', marginTop: '10px', color: 'var(--text-color-dark)', padding: '10px'};
            } else {
              versePaneStyle = {borderLeft: '6px solid var(--accent-color)', marginTop: '10px', color: 'var(--text-color-dark)', padding: '10px'};
            }
          } else if (key % 2 == 0) {
            versePaneStyle = {backgroundColor: 'var(--background-color-light)', marginTop: '10px', color: 'var(--text-color-dark)', padding: '10px'};
          } else {
            versePaneStyle = {marginTop: '10px', color: 'var(--text-color-dark)', padding: '10px'};
          }
          MyTargetLanguage.push(
            <MyTargetVerse
              key={key}
              chapter={chapter}
              verse={parseInt(key, 10)}
              verseText={verseText}
              styles={versePaneStyle}
              dir={this.props.dir}
              ref={chapter.toString() + key.toString()}
            />
          );
        }
      }
    }
    return (
      <Modal show={show} onHide={onHide} bsSize="lg" aria-labelledby="contained-modal-title-sm">
        <Modal.Header style={{ backgroundColor: "var(--accent-color-dark)" }}>
          <Modal.Title id="contained-modal-title-sm" className='modalTitle'>
            {title}
            <Glyphicon
                onClick={onHide}
                glyph={"remove"}
                style={{color: "var(--reverse-color)", cursor: "pointer", fontSize: "18px", float: "right"}}
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{padding: '0px', height: "500px", backgroundColor: "var(--reverse-color)", overflowY: "auto"}}>
          {MyTargetLanguage}
        </Modal.Body>
        <Modal.Footer style={{ padding: '0', backgroundColor: "var(--reverse-color)" }}>
          <button className="btn-prime" onClick={onHide}>Close</button>
        </Modal.Footer>
      </Modal>
    );
  }
}

MyLanguageModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  targetLangBible: PropTypes.object,
  chapter: PropTypes.number,
  currentVerse: PropTypes.number,
  manifest: PropTypes.object,
  dir: PropTypes.string.isRequired
};

export default MyLanguageModal;
