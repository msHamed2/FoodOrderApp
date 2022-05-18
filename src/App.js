import "./App.css";
import Header from "./Components/Layout/Header";
import { Fragment } from "react";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import { useState } from "react";

function App() {
   const [isOpen, setIsOpen] = useState(false)
   const showCartHandler =()=>{
     setIsOpen(true);
   }
   const hideCartHandler =()=>{
    setIsOpen(false);
  }
  return (
    <Fragment>
     {isOpen && <Cart onCartClose={hideCartHandler}/>}
      <Header onCartOpen={showCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
