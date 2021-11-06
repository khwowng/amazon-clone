import React from "react";
import Header from "./Header";
import BasketItem from "./BasketItem";
import Subtotal from "./Subtotal";
import "./Checkout.css";

function Checkout() {
  return (
    <div>
      <Header />
      <div className="checkout">
        <div className="checkout__left">
          <img src="/images/banner4.jpg" className="checkout__ad" />
          <div>
            <h2 className="checkout__title">Your Shopping Basket</h2>
            <BasketItem />
          </div>
        </div>

        <div className="checkout_right">
          <Subtotal />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
