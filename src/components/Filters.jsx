import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Rating from "./Rating";
import { CartState } from "../context/CardContext";

const Filters = () => {
  const {
    productState: { sort, byStock, byFastDelivery, byRating },
    productDispatch,
  } = CartState();
  console.log(sort, byStock, byFastDelivery, byRating);

  return (
    <div className='filters'>
      <span className='title'>Filter Products</span>
      <span className=''>
        <Form.Check // prettier-ignore
          label='ascending'
          name='group1'
          type='radio'
          id={`inline-1`}
          onClick={() =>
            productDispatch({
              type: "SORT_BY_PRICE",
              payload: "lowToHigh",
            })
          }
          checked={sort === "lowToHigh" ? true : false}
        />
      </span>
      <span className=''>
        <Form.Check // prettier-ignore
          inline='true'
          label='descending'
          name='group1'
          type='radio'
          id={`inline-2`}
          onClick={() =>
            productDispatch({
              type: "SORT_BY_PRICE",
              payload: "highToLow",
            })
          }
          checked={sort === "highToLow" ? true : false}
        />
      </span>
      <span className=''>
        <Form.Check // prettier-ignore
          inline='true'
          label='Include Out of Stock'
          name='group1'
          type='checkbox'
          id={`inline-3`}
          onClick={() =>
            productDispatch({
              type: "FILTER_BY_STOCK",
            })
          }
          checked={byStock}
        />
      </span>
      <span className=''>
        <Form.Check // prettier-ignore
          inline='true'
          label='Fast Delivery only'
          name='group1'
          type='checkbox'
          id={`inline-4`}
          onClick={() =>
            productDispatch({
              type: "FILTER_BY_DELIVERY",
            })
          }
          checked={byFastDelivery}
        />
      </span>
      <span className=''>
        <label style={{ paddingRight: 10 }}>Rating: </label>
        <Rating
          onClick={(i) =>
            productDispatch({
              type: "FILTER_BY_RATING",
              payload: i + 1,
            })
          }
          rating={byRating}
          style={{ cursor: "pointer" }}
        />
      </span>
      <Button
        variant='light'
        onClick={(i) =>
          productDispatch({
            type: "CLEAR_FILTERS",
          })
        }>
        Clear Filters
      </Button>
    </div>
  );
};

export default Filters;
