import React, { useEffect, useState } from 'react'
import { Modal, Button } from 'react-bootstrap'

function EditModal(props) {
  const [product, setProduct] = useState(null);
  return (
    <Modal 
    show={props.showEdit} 
    onHide={props.EdithandleClose}
    {...props}
    aria-labelledby="contained-modal-title-vcenter"
    centered
    size='lg'
  >
    <Modal.Body className='text-center' closeButton>
    <div className="col-lg-12">
      <div className="">
        <div className="row">
          <div className="title border-bottom border-warning border-1">
            <h5 className=''>EDIT PRODUCT</h5>
          </div>
        </div>
        <div className="row mt-3">
            <div className="col-12">
                <form >
                    <div className="input-group input-group-sm mb-3">
                        <span className="input-group-text " id="inputGroup-sizing-sm">Product Name</span>
                         <input id="product_name" value={product?.product_name} placeholder='eg.Sembe' type="text" class="form-control auto-focus-none" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                    </div>
                    <div className="input-group input-group-sm mb-3">
                        <span className="input-group-text " id="inputGroup-sizing-sm">Product Company</span>
                         <input id="product_company" value={product?.product_company} placeholder='eg.BAMATO' type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                    </div>
                    <div className="input-group input-group-sm mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Product Quantity</span>
                         <input id="product_quantity" value={product?.product_quantity} placeholder='eg.1Kg or 1Ltrs' type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                    </div>
                    <div className="input-group input-group-sm mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Total Number Of Product</span>
                         <input id="total_number_of_product" value={product?.total_number_of_product} placeholder='eg.20' type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                    </div>
                    <div className="input-group input-group-sm mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Price Per Poduct in Tshs</span>
                         <input id="price_per_product" value={product?.price_per_product} placeholder='eg.1000' type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                    </div>
                </form>
            </div>
        </div>
      </div>
    </div>
    </Modal.Body>
    <Modal.Footer>
      <Button className='rounded-pill btn-sm' rounded variant="outline-warning" onClick={props.editHandleClosePress}>
        Close
      </Button>
      <Button className='rounded-pill btn-sm text-white' rounded variant="warning" onClick={props.handleClose}>
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal>
  )
}
export default EditModal