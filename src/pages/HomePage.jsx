import React from 'react';
import Header from '../components/Header';
import Body from '../components/Body';
import Footer from '../components/Footer';
import MostProductOrdered from '../components/MostProductOrdered';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProduct from '../components/AddProduct';

function HomePage() {
  return (
    <BrowserRouter>
    <div className = "wrapper">
        <div className="banner">
          <div className="container my-nav position-relative">
            <Header />
          </div>
        </div>
        <div className='container-fluid'>
          <div className="row">
              <div className="col-lg-2 col-md-2 col-sm-12">
                <div className="leftside mt-4 shadow-sm">
                  <div className="l-h-container">
                    <h6 className='border-bottom border-1 p-2 text-light'>Most Ordered Products</h6>
                  </div>
                  <MostProductOrdered />
                </div>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-12 ">
                <div className="mainbody overflow-auto shadow-sm position-relative ">
                    <Routes>
                        <Route path='/' element={<Body />}/>
                        <Route index element={<Body />} />
                        <Route path="/addProduct" element={<AddProduct />} />
                    </Routes>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-12">
                <div className="rightside mt-4 shadow-sm ">
                  <div className="l-h-container">
                    <h6 className='border-bottom border-1 p-2 text-light'>Sellers</h6>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div className="row">
          <div className="myfooter">
             <Footer />
          </div>
        </div>
    </div>
    </BrowserRouter>
  )
}

export default HomePage