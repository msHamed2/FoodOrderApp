import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemFrom from "./MealItemFrom";
import CartContext from "../../../store/Cart-context";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$ ${props.price.toFixed(2)}`;
  const onAddToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.title,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.title}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemFrom onAddAmount={onAddToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
