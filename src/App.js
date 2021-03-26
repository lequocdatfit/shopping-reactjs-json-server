import "./styles.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import TopMenu from "./components/TopMenu";
import Home from "./pages/Home";
import Products from "./pages/Products";

export default function App() {
  return (
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
  );
}
