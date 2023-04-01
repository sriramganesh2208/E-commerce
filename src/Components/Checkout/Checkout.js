import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../Context/Globalstate";
import "./Checkout.css";

const Checkout = () => {
    const { cart, orders, addItemToOrderList, clearCart } =
      useContext(GlobalContext);
    const { Discount, ExtraFees, Tax } = { Discount: 20, ExtraFees: 99, Tax: 5 };

    const Subtotal = Math.floor(cart?.reduce((sum, curr) => sum + curr.price, 0));
    const Total = Math.floor(Subtotal + 99 + 5 - (Subtotal + 99 + 5) * 0.2);
    const [isnotOrdered, setIsOrdered] = useState(false);
   
    const handlePay = () => {
      addItemToOrderList({
        orderId: orders.length + 1,
        buyerId: 1,
        items: [...cart],
        price: Total,
      });
      clearCart();
      setIsOrdered(true);
    };
    
    return (
      <div className="checkout-container">
       
        {isnotOrdered ? (
          
          <h3>
            Yay! 🚀 Order placed successfully. <Link to="/">Shop more!</Link>
          </h3>
        ) : (
          <>
            <div>
              <div className="custom-row">
                <h4>Order Review</h4>
                <span>{cart?.length} items in cart</span>
              </div>
             
              <div className="custom-row">
                <h4>Coupons</h4>
                <span>Not Available</span>
              </div>
             
              <div className="custom-row">
                <h4>Checkout Summary</h4>
             
                <div className="checkout-summary">
                  <span>Subtotal</span>
                  <span>${Subtotal}</span>
                </div>
             
                <div className="checkout-summary">
                  <span>Discount</span>
                  <span>{Discount}%</span>
                </div>
             
                <div className="checkout-summary">
                  <span>Extra Fee</span>
                  <span>${ExtraFees}</span>
                </div>
             
                <div className="checkout-summary">
                  <span>Tax</span>
                  <span>${Tax}</span>
                </div>
             
              </div>
             
              <div className="custom-row">
                <h4>Total</h4>
                <span>${Total}</span>
              </div>
            </div>
           
            <button className="item-btn" onClick={handlePay}>
              Pay ${Total}
            </button>
          
          </>
        )}
      </div>
    );
  };
  
  export default Checkout;