import React from 'react'
import Input from '../../UI/Input'
import classes from './MealItemFrom.module.css'
const MealItemFrom = (props) => {
  return (
    <form className={classes.form}>
      <Input label="Amount" input={{
        id:"amount",
        type:"number",
        min:'1',
        max:"24",
        step:"1",
        defaultValue:"1"
      }}/>
      <button>+</button>  
    </form>
  )
}

export default MealItemFrom