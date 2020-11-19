import React from "react";
import { Modal, Button } from "react-bootstrap";
import './confirmationBox.css'
import Spinner from '../spinner/spinner';

const ConfirmationBox = (props) => {
  
  
    return (
      <>
        <Modal show={props.show} onHide={props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              {
                  props.children
              }
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={props.confirm}>
                <Spinner showSpinner={props.show && props.showSpinner} />
              {props.buttonMessage}
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default ConfirmationBox;