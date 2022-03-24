import React, { useState } from 'react'
import NoticeModal from './NoticeModal';

function AddProduct(props) {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState('oops!')

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [data, setData] = useState({
    product_name:"",
    product_company:"",
    product_quantity:"",
    total_number_of_product:"",
    price_per_product:"",

  });

  function submit(e){
    e.preventDefault();
    fetch('http://127.0.0.1:8000/api/addproducts', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
        body: JSON.stringify(data),
      })
      .then(response => response.json())
      .then(data => {
        setMessage('The Product Is Added Successfully.')
        handleShow();
        console.log('Success:', data);
      })
      .catch((error) => {
        setMessage('Ooops problem..! Product Is Not Added. ')
        handleShow();
        console.error('Error:', error);
    });
  }

  function handle(e){
      const newData = {...data};
      newData[e.target.id] = e.target.value;
      setData(newData);
      console.log(newData);
  }



  return (
    <>
    <NoticeModal 
      show={show}
      handleClose={handleClose}
      message={message}
    />
    <div className="row position-relative">
      <div className="col-lg-12">
        <div className="main-content">
          <div className="row">
            <div className="title border-bottom border-warning border-1">
              <h5 className=''>ADD PRODUCT</h5>
            </div>
          </div>
          <div className="row mt-3">
              <div className="col-12">
                  <form onSubmit={(e)=>submit(e)}>
                      <div className="input-group input-group-sm mb-3">
                          <span class="input-group-text " id="inputGroup-sizing-sm">Product Name</span>
                          <input onChange={(e)=>handle(e)} id="product_name" value={data.product_name} placeholder='eg.Sembe' type="text" class="form-control auto-focus-none" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                      </div>
                      <div className="input-group input-group-sm mb-3">
                          <span className="input-group-text " id="inputGroup-sizing-sm">Product Company</span>
                          <input onChange={(e)=>handle(e)} id="product_company" value={data.product_company} placeholder='eg.BAMATO' type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                      </div>
                      <div className="input-group input-group-sm mb-3">
                          <span className="input-group-text" id="inputGroup-sizing-sm">Product Quantity</span>
                          <input onChange={(e)=>handle(e)} id="product_quantity" value={data.product_quantity} placeholder='eg.1Kg or 1Ltrs' type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                      </div>
                      <div className="input-group input-group-sm mb-3">
                          <span className="input-group-text" id="inputGroup-sizing-sm">Total Number Of Product</span>
                          <input onChange={(e)=>handle(e)} id="total_number_of_product" value={data.total_number_of_product} placeholder='eg.20' type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                      </div>
                      <div className="input-group input-group-sm mb-3">
                          <span className="input-group-text" id="inputGroup-sizing-sm">Price Per Poduct in Tshs</span>
                          <input onChange={(e)=>handle(e)} id="price_per_product" value={data.price_per_product} placeholder='eg.1000' type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                      </div>
                      <button className="float-end mt-2 btn btn-outline-warning rounded-pill" type="submit">Submit</button>
                  </form>
              </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default AddProduct