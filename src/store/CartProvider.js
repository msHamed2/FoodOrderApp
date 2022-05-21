import React from "react";
import CartContext from "./Cart-context";
import { useReducer } from "react";
const defaultState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    const updateItemIndex = state.items.findIndex((item) =>
      item.id === action.item.id
    );
    const existItem = state.items[updateItemIndex];
    let updatedItems;
    let updateItem ;
    if (existItem) {
     updateItem = {
        ...existItem,
        amount: existItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[updateItemIndex] = updateItem;
    } else {
      updateItem={...action.item}
      updatedItems = state.items.concat(action.item);
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if(action.type ==="REMOVE"){
    let updatedItems;
    
    let currentIndex =state.items.findIndex(item=>item.id ===action.id  )
    let existItem = state.items[currentIndex]
    
    const updatedTotalAmount =
    state.totalAmount - existItem.price ;
    if(existItem.amount===1){
      updatedItems=state.items.filter(item=>item.id!==action.id)
    }
    else{
      const updatedItem={...existItem ,amount:existItem.amount - 1}
      updatedItems=[...state.items]
      updatedItems[currentIndex]=updatedItem
    }
    return {
      items:updatedItems,
      totalAmount:updatedTotalAmount
    }
  }
  return defaultState;
};
const CartProvider = (props) => {
  const [cartState, despatchAction] = useReducer(cartReducer, defaultState);
  const removeItemHanlder = (id) => {
    despatchAction({type:"REMOVE", id: id})
  };
  const addItemHanlder = (item) => {
    despatchAction({ type: "ADD", item });
  };
  const context = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHanlder,
    removeItem: removeItemHanlder,
  };
  return (
    <CartContext.Provider value={context}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
