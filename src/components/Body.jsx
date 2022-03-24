import React , {useState, useEffect} from 'react'
import ConfirmationModal from './ConfirmationModal';
import EditModal from './EditModal';

function Body() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [show, setShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const [message, setMessage] = useState('oops!')
  const [idToBeDeleted,setId]= useState(null);
  const [product,setProduct] = useState(null);
 

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleEditShow = () => setEditShow(true);
  const handleEditShowClose = () => setEditShow(false);


  useEffect(() => {
    getProduct();
  }, []);

  function getProduct(){
    fetch("http://127.0.0.1:8000/api/products")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(false);
          setItems(result);
        },
        
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }

  function selectProduct(id){
    for(var x in items){
      if(id===items[x].id){
        setProduct({...items[x]});
      }
    }
  }

  


  function deleteProduct(id){
    fetch('http://127.0.0.1:8000/api/delete/'+id, {
      method: 'DELETE', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      }
      })
      .then(response => response.json())
      .then(data => {
        setId(null)
        getProduct();
        console.log('Success:', data);
      })
      .catch((error) => {
        setMessage('Ooops problem..! Product Is Not Deleted. ')
        handleShow();
        console.error('Error:', error);
    });
  }

  if(error){
    return (<div className="row position-relative">
              <div className="col-lg-12">
                <div className="main-content">
                  Error: {error.message}
                </div>
              </div>
            </div>
            );
  }else if(isLoaded){
    return (<div className="row position-relative">
    <div className="col-lg-12">
      <div className="main-content">
        Loading..
      </div>
    </div>
  </div>
  );
  }else{
    return (
      <>
      <ConfirmationModal 
        show={show}
        handleClose={handleClose}
        message={message}
        onPressYes={()=>{
          deleteProduct(idToBeDeleted)
          handleClose()
        }}
      />
      <EditModal
        showEdit={editShow}
        EdithandleClose={()=>{
          handleEditShowClose();
          setProduct(null)
        }}
        editHandleClosePress={()=>{
          handleEditShowClose();
          setProduct(null);
        }}
        data={product}
      />
      <div className="row position-relative">
        <div className="col-lg-12">
          <div className="main-content">
            <div className="row">
              <div className="title">
                <h5 className=''>PRODUCTS</h5>
              </div>
            </div>
            <div className="row">
            <table className="table table-borderless table-hover">
                <thead className='t-header'>
                  <tr>
                    <th scope="col" className="text-white">#</th>
                    <th scope="col" className="text-white">Product Name</th>
                    <th scope="col" className="text-white">Product Company</th>
                    <th scope="col" className="text-white">Product Quantity</th>
                    <th scope="col" className="text-white">Total Number Of Product</th>
                    <th scope="col" className="text-white">Price Per Product</th>
                    <th scope="col" className="text-white">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item)=>(
                      <tr className='border-bottom' key={item.id}>
                        <th scope="row" >{item.id}</th>
                        <td >{item.product_name}</td>
                        <td>{item.product_company}</td>
                        <td>{item.product_quantity}</td>
                        <td>{item.total_number_of_product}</td>
                        <td>{item.price_per_product}</td>
                        <td>
                          <a onClick={()=>{
                            selectProduct(item.id);
                            handleEditShow();
                          }}href="#" className='m-1 shadow-sm actions'><svg  xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg></a>
                          <a onClick={()=>{
                              handleShow();
                              setId(item.id);
                              setMessage('Are You Sure? You Want To Delete The Product')}
                            } href="#" className='m-1 shadow-sm actions'><svg  xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg></a>
                        </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }
}



export default Body