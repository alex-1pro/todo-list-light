import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function ModalComponent({onRemove,task,onClose,show}) {

  return (
    <>
     

      <Modal show={show} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to remove this {task} ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
          <Button variant="danger" onClick={onRemove}>
            Remove
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );

}

export default ModalComponent;