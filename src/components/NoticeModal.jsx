import React from 'react'
import { Modal, Button } from 'react-bootstrap'

function NoticeModal(props) {
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
      <Button className='rounded-pill btn-sm' rounded variant="outline-warning" onClick={props.handleClose}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
  )
}

export default NoticeModal