import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../Context/Globalstate";
import "./Card.css";
import {Button} from '@material-ui/core'

function Card() {
    const { cart } = useContext(GlobalContext);
  return (
    <div className="cart-container">
    <h1>Cart</h1>
    {!cart.length ? (
      <p>No Item Added! Please add something to your cart</p>
    ) : (
      <>
        <div className="cart-list">
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="item-price">${item.price}</div>
              <div className="item-name">{item.name}</div>
              <div className="item-expectedDelivery">
                (Expected Delivery 3 - 6 days)
              </div>
            </div>
          ))}
        </div>
        <Link to="/checkout">
          <Button className="item-btn">Next</Button>
        </Link>
      </>
    )}
  </div>
  )
}

export default Card