/**
* @description This component displays a modal when the user clicks the
* new-window glyphicon button on translationHelps component.
*/
import React from 'react';
import {Modal, Glyphicon} from 'react-bootstrap';
import PropTypes from 'prop-types';

class ExpandedHelpsModal extends React.Component {
  render() {
    /*
    let { onHide, children } = this.props;
    var page = document.getElementById("modalbody");
    if (page) {
      page.scrollTop = 0;
    }
    */
    return ("modal to earth. I am here.");
    /*
    return (
      <Modal {...this.props} bsSize="lg" aria-labelledby="contained-modal-title-sm">
        <Modal.Header 
            style={{backgroundColor: "var(--background-color-light)", borderColor: "var(--text-color)"}}>
          <Modal.Title 
              id="contained-modal-title-sm"
              style={style.modalTitle}>
            translationHelps
            <Glyphicon
                onClick={onHide}
                glyph={"remove"}
                style={{color: "var(--text-color)", cursor: "pointer", fontSize: "18px", float: "right"}}
            />
          </Modal.Title>
        </Modal.Header>
          <Modal.Body id="modalbody" style={style.tHModalContent}>
            {children}
          </Modal.Body>
        <Modal.Footer style={{padding: '0', backgroundColor: "var(--background-color-light)", borderColor: "var(--text-color)"}}>
          <button className="btn-prime" onClick={() => onHide()}>Close</button>
        </Modal.Footer>
      </Modal>
    ); 
    */
  }
}

ExpandedHelpsModal.propTypes = {
  onHide: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired
};

export default ExpandedHelpsModal;
