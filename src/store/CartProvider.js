import React from 'react'
import CartContext from './Cart-context'
import { useReducer } from 'react'
const defaultState={
  items:[],
  totalAmount:0
}
const cartReducer =(state,action)=>{
  if(action.type==="ADD"){
    const updatedItems =state.items.concat(action.item);
   
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    console.log(updatedTotalAmount)
    return {
      items:updatedItems,
      totalAmount:updatedTotalAmount
    }

  } 
  return defaultState
}
const CartProvider = (props) => {
  const [cartState,despatchAction]=useReducer(cartReducer,defaultState)
    const removeItemHanlder=(id)=>{

    }
    const addItemHanlder=(item)=>{
      despatchAction({type:"ADD",item})
    }
const context={
    items:cartState.items,
    amount:cartState.totalAmount,
    addItem:addItemHanlder,
    removeItem:removeItemHanlder
}
  return (
    <CartContext.Provider
     value={context}>
         {props.children}
         </CartContext.Provider>
  )
}

export default CartProvider