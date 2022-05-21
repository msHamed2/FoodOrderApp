import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderButton.module.css";
import CartContext from "../../store/Cart-context";

const HeaderButton = (props) => {
  const ctx = useContext(CartContext)
  const amount =ctx.items.reduce((current,item)=>{
    return current +item.amount;
  },0)
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{amount}</span>
    </button>
  );
};

export default HeaderButton;
