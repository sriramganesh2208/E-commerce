import React from 'react'
import './Navbar.css'
import {useContext} from 'react'
import { GlobalContext } from "../../Context/Globalstate";
import {Link} from 'react-router-dom'

function Navbar() {

const {cart}=useContext(GlobalContext)

  return (
    <div className='navbar'>
       <Link to="/">
        <h2>Shopping</h2>
      </Link>
     
     <ul className="navbar-ul">
        <li>Womens</li>
        <li>Mens</li>
        <li>Clothing</li>
        <li>Brands</li>
    <Link to="/cart">
          <li>
            <span className="card-count" style={{ color: "green" }}>
              ({cart.length})
            </span>
          </li>
     </Link>
       
        <Link to="/orders">
          <li>Orders</li>
        </Link>
       
        <button className="nav-btn">Hi, John</button>
      </ul> 
    </div>
  )
}

export default Navbar