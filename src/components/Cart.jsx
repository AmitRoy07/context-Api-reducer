import React, { useEffect, useState } from "react";
import { CartState } from "../context/CardContext";
import ListGroup from "react-bootstrap/ListGroup";
import { Button, Col, Form, Image, Row } from "react-bootstrap";
import Rating from "./Rating";
import { MdDelete } from "react-icons/md";

const Cart = () => {
  const {
    state: { card },
    dispatch,
  } = CartState();

  const [total, setTotal] = useState();

  // console.log(card);

  useEffect(() => {
    setTotal(
      card.reduce(
        (acc, curr) => acc + Number(curr.price.split(".")[0]) * curr.qty,
        0
      )
    );
  }, [card]);

  // console.log(card);

  return (
    <div className='home'>
      <div className='productContainer'>
        <ListGroup>
          {card.map((prod) => (
            <ListGroup.Item key={prod.id}>
              <Row>
                <Col md={2}>
                  <Image src={prod.image} alt={prod.name} fluid rounded />
                </Col>
                <Col md={2}>
                  <span>{prod.name}</span>
                </Col>
                <Col md={2}>
                  <span>{prod.price}</span>
                </Col>
                <Col md={2}>
                  <Rating rating={prod.ratings} />
                </Col>
                <Col md={2}>
                  <Form.Control
                    as='select'
                    value={prod.qty}
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_CART_QTY",
                        payload: {
                          id: prod.id,
                          qty: e.target.value,
                        },
                      })
                    }>
                    {[...Array(prod.inStock).keys()].map((val) => (
                      <option key={val + 1}>{val + 1}</option>
                    ))}
                  </Form.Control>
                </Col>
                <Col md={2}>
                  <MdDelete
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: prod,
                      });
                    }}
                  />
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className='filters summary'>
        <span className='titles'>Subtotal ({card.length}) items</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: $ {total}</span>
        <Button type='button' disabled={card.length === 0}>
          proceed to Checkout
        </Button>
      </div>
    </div>
  );
};

export default Cart;
