import React from "react";
import { Button, Card } from "react-bootstrap";
import Rating from "./Rating";
import { CartState } from "../context/CardContext";

const SingleProduct = ({ prod }) => {
  const {
    state: { card },
    dispatch,
  } = CartState();

  // console.log(card);

  return (
    <div className='products' key={prod.id}>
      <Card>
        <Card.Img variant='top' src={prod.image} alt={prod.name}></Card.Img>
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle style={{ paddingBlock: 10 }}>
            <span>$ {prod.price.split(".")[0]}</span>
            {prod.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>4 days delivery</div>
            )}
            <Rating rating={prod.rating} />
          </Card.Subtitle>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            {card.some((p) => p.id === prod.id) ? (
              <Button
                variant='danger'
                onClick={() => {
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: prod,
                  });
                }}>
                Remove
              </Button>
            ) : (
              <Button
                variant='primary'
                disabled={!prod.inStock}
                onClick={() => {
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: prod,
                  });
                }}>
                {!prod.inStock ? "Out of Stock" : "add to cart"}
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
