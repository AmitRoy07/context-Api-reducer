import React from "react";
import { CartState } from "../context/CardContext";
import SingleProduct from "./SingleProduct";
import Filters from "./Filters";

const Home = () => {
  const {
    state: { products },
  } = CartState();

  console.log(products);

  return (
    <div className='home'>
      <Filters />
      <div className='productContainer'>
        {products.map((prod) => {
          return <SingleProduct key={prod.id} prod={prod} />;
        })}
      </div>
    </div>
  );
};

export default Home;
