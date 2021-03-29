import "./styles.css";
import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import TopMenu from "./components/TopMenu";
import Home from "./pages/Home";
import Products from "./pages/Products";
import { CartProvider } from "./components/Cart";

export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <TopMenu />
        </div>

        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
      </Router>
    </CartProvider>
  );
}
