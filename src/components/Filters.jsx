import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Rating from "./Rating";

const Filters = () => {
  const [rate, setRate] = useState(3);

  return (
    <div className='filters'>
      <span className='title'>Filter Products</span>
      <span className=''>
        <Form.Check // prettier-ignore
          label='ascending'
          name='group1'
          type='radio'
          id={`inline-1`}
        />
      </span>
      <span className=''>
        <Form.Check // prettier-ignore
          inline='true'
          label='descending'
          name='group1'
          type='radio'
          id={`inline-2`}
        />
      </span>
      <span className=''>
        <Form.Check // prettier-ignore
          inline='true'
          label='Include Out of Stock'
          name='group1'
          type='checkbox'
          id={`inline-3`}
        />
      </span>
      <span className=''>
        <Form.Check // prettier-ignore
          inline='true'
          label='Fast Delivery only'
          name='group1'
          type='checkbox'
          id={`inline-4`}
        />
      </span>
      <span className=''>
        <label style={{ paddingRight: 10 }}>Rating: </label>
        <Rating
          onclick={(i) => setRate(i)}
          rating={rate}
          style={{ cursor: "pointer" }}
        />
      </span>
      <Button variant='light'>Clear Filters</Button>
    </div>
  );
};

export default Filters;
