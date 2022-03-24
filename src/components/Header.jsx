import React from 'react'
import { Link } from "react-router-dom";

function header() {
  return (
    <div className="">
        <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container">
                <div className="logo-container border-bottom border-2 border-light rounded-pill shadow-sm">
                    <a className="navbar-brand text-light" href="#"><b className='logo'>Datrastoco</b></a>
                </div>
                <div className="float-start">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                         <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item ">
                                <Link className='text-decoration-none' to="/"><a className="nav-link active text-light" aria-current="page" href="#"><b>Home</b></a></Link>
                            </li>
                            <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Products
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><Link className='text-decoration-none' to="/addProduct"><a className="dropdown-item" href="#">Add Product</a></Link></li>
                                <li><a className="dropdown-item" href="#">Sold Products</a></li>
                                <li><a className="dropdown-item" href="#">Stock</a></li>
                            </ul>
                            </li>
                        </ul>
                        <form class="d-flex input-group-sm">
                            <input className="form-control me-2 rounded-pill" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-light rounded-pill" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default header