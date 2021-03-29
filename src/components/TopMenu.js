import React, { useState } from "react";
import { CartContext } from "../components/Cart";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

import { Link } from "react-router-dom";

export default function TopMenu(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">Shopping</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink>
              <Link to="/">Home</Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <Link to="/products">Products</Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <CartContext.Consumer>
                {({ cartItems }) => (
                  <Link to="/products">Cart ({cartItems.length})</Link>
                )}
              </CartContext.Consumer>
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}
