import React from 'react'
import Modal from '../UI/Modal';
import classes from "./Cart.module.css"
const Cart = (props) => {
    const cartItems =<ul className={classes['cart-items']}>{[{id:'c1',name:"suchi",amount:"2",price:"22.3"}].map(item=>{
        <li>{item.name}</li>
    })}</ul>;

  return (
    <Modal onClose={props.onCartClose}>
        {cartItems}
        <div className={classes.total}>
            <span>amount</span>
            <span>33.2 </span>
        </div>
        <div className={classes.actions}>
         <button className={classes['button--alt']} onClick={props.onCartClose}>Close</button>
         <button className={classes.button}>order</button>

        </div>
    </Modal>
  )
}

export default Cart