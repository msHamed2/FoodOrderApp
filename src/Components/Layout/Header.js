import React, { Fragment } from 'react'
import mealsImage from './../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderButton from './HeaderButton'
const Header = (props) => {
  return (
    <Fragment>
        <header className={classes.header}>
            <h2>Food order App</h2>
            <HeaderButton onClick={props.onCartOpen}/>

        </header>
        <div className={classes["main-image"]}>
            <img  src={mealsImage} alt="tabel with food on it"/>
        </div>
    </Fragment>
  )
}

export default Header