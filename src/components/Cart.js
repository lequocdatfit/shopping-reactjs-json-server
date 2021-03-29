import React, { Component } from "react";
export const CartContext = React.createContext();

export class CartProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartItems: []
    };
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(product) {
    console.log("Add to cart", product);
    this.setState({
      cartItems: this.state.cartItems.concat(product)
    });
  }

  render() {
    return (
      <CartContext.Provider
        value={{
          addToCart: this.addToCart,
          cartItems: this.state.cartItems
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}
