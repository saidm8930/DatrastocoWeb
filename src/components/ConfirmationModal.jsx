import React from 'react'
import { Modal, Button } from 'react-bootstrap'

function ConfirmationModal(props) {
  return (
    <Modal 
    show={props.show} 
    onHide={props.handleClose}
    {...props}
    aria-labelledby="contained-modal-title-vcenter"
    centered
    size='sm'
  >
    <Modal.Body className='text-center' closeButton>{props.message}</Modal.Body>
    <Modal.Footer>
      <Button className='rounded-pill btn-sm' rounded variant="outline-warning" onClick={props.onPressYes}>
        Yes
      </Button>
      <Button className='rounded-pill btn-sm' rounded variant="outline-warning" onClick={props.handleClose}>
        No
      </Button>
    </Modal.Footer>
  </Modal>
  )
}

export default ConfirmationModal