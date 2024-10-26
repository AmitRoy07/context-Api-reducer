import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FormControl } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";

import { FaCartShopping } from "react-icons/fa6";
import { CartState } from "../context/CardContext";

import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  const {
    state: { card },
    dispatch,
  } = CartState();

  const {
    productState: { searchQuery },
    productDispatch,
  } = CartState();

  console.log(searchQuery);

  return (
    <>
      {" "}
      <Navbar bg='dark' variant='dark' expand='lg' className=''>
        <Container>
          <Navbar.Brand href='/'>Shopping cart</Navbar.Brand>
          <Navbar.Text className='search flex-grow-1'>
            <FormControl
              style={{ width: "100%", maxWidth: "500px" }}
              placeholder='Search a product...'
              className='m-auto'
              onChange={(e) => {
                productDispatch({
                  type: "FILTER_BY_SEARCH",
                  payload: e.target.value.toLowerCase(),
                });
              }}
            />
          </Navbar.Text>
          <Nav className='me-auto'>
            <Dropdown drop='start'>
              <Dropdown.Toggle variant='success' id='dropdown-basic'>
                <FaCartShopping /> {card.length}
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ width: "320px" }}>
                {card.length > 0 ? (
                  <>
                    {card.map((prod) => (
                      <span key={prod.id} className='cartitem'>
                        <img
                          src={prod.image}
                          className='cartItemImg'
                          alt={prod.name}
                        />
                        <div className='cartItemDetails'>
                          <span>{prod.name}</span>
                          <span>$ {prod.price.split(".")[0]}</span>
                        </div>
                        <MdDelete
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload: prod,
                            });
                          }}
                        />
                      </span>
                    ))}
                  </>
                ) : (
                  <span>NO Item Added</span>
                )}
                <Dropdown.Item as='div'>
                  <Link className='btn btn-primary w-100 mt-2' to='/cart'>
                    Go to card
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
