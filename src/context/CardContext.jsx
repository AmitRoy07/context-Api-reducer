import { faker } from "@faker-js/faker";
import { createContext, useContext, useReducer, useState } from "react";
import { CartReducer, productReducer } from "./CardReducer";

const Card = createContext();

const CardContextProvider = ({ children }) => {
  faker.seed(1);
  // creating random data with products
  const products = [...Array(20)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    image: faker.image.avatar(),
    price: faker.commerce.price(),
    inStock: faker.helpers.arrayElement([0, 3, 5, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
  }));

  const [state, dispatch] = useReducer(CartReducer, {
    products: products,
    card: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });

  // console.log(products);

  return (
    <Card.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Card.Provider>
  );
};

export default CardContextProvider;

export const CartState = () => {
  return useContext(Card);
};
