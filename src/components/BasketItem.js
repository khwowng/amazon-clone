import React from "react";
import "./BasketItem.css";
import { useStateValue } from "./StateProvider";
import { Button } from "react-bootstrap";

function BasketItem({ id, image, title, price, rating }) {

  const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
      // remove the item from the basket
      dispatch({
        type: "REMOVE_FROM_BASKET",
        id: id,
      });
    };

  return (
    <div className="basketItem">
      <img src={image} className="basketItem__image" />

      <div className="basketItem__info">
        <p className="basketItem__title">{title}</p>
        <p className="basketItem__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <Button variant="secondary" size="sm" onClick={removeFromBasket}>
          Remove from Basket
        </Button>
      </div>
    </div>
  );
}

export default BasketItem;
