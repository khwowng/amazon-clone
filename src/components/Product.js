import React from "react";
import { Button, Card } from "react-bootstrap";
import "./Product.css";

function Product({ id, title, image, price, rating }) {
  return (
    <Card className=" text-center product">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <small>€ </small>
        <strong>{price}</strong>
        <div className="product__rating d-flex justify-content-center">
          {Array(rating).fill().map((_, i) => (<p>⭐️</p>))}
        </div>
        <Button variant="warning" size="sm"> Add To Basket </Button>
      </Card.Body>
    </Card>
  );
}

export default Product;
