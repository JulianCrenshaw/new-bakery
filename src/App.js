import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Desserts from "./pages/Desserts";
import { desserts } from "./data";
import DessertInfo from "./pages/DessertInfo";
import Cart from "./pages/Cart";
import { useEffect, useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(dessert) {
    setCart([...cart, { ...dessert, quantity: 1 }]);
  }

  function changeQuantity(dessert, quantity) {
    setCart(
      cart.map((item) =>
        item.id === dessert.id
          ? {
              ...item,
              quantity: +quantity,
            }
          : item,
      ),
    );
  }

  function removeFromCart(dessert) {
    setCart(cart.filter((item) => item.id !== dessert.id));
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <Router>
      <div className="App">
        <Nav cart={cart}/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/desserts" element={<Desserts desserts={desserts} />} />
        <Route
          path="/desserts/:id"
          element={
            <DessertInfo desserts={desserts} addToCart={addToCart} cart={cart} />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              desserts={desserts}
              cart={cart}
              changeQuantity={changeQuantity}
              removeFromCart={removeFromCart}
            />
          }
        />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
