import React,{ useRef, useState} from 'react'
import Input from '../../UI/Input'
import classes from './MealItemFrom.module.css'
const MealItemFrom = (props) => {
  const amountRef = useRef()
  const [valied,setValied]=useState(true)
const add =(e)=>{
  e.preventDefault();
  const amount = amountRef.current.value;
  const amountInt =+amount;
  if(amount.trim().length ===0 || amountInt>5 ||amountInt<1){
    setValied(false)
    return
  }
  setValied(true)
  props.onAddAmount(amountInt);
}
  return (
    <form onSubmit={add} className={classes.form}>
      <Input label="Amount" 
        ref={amountRef}
      input={{
      
        id:"amount",
        type:"number",
        min:'1',
        max:"24",
        step:"1",
        defaultValue:"1"
        
      }}/>
      <button type='submit'>+</button>  
      {!valied && <p style={{textAlign:'center',color:"red" ,font:"small-caption"}}>Please add valied number (1-5)</p>}
    </form>
  )
}

export default MealItemFrom