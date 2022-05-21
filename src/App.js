import "./App.css";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./store/CartProvider";

function App() {
   const [isOpen, setIsOpen] = useState(false)
   const showCartHandler =()=>{
     setIsOpen(true);
   }
   const hideCartHandler =()=>{
    setIsOpen(false);
  }
  return (
    <CartProvider>
     {isOpen && <Cart onCartClose={hideCartHandler}/>}
      <Header onCartOpen={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
