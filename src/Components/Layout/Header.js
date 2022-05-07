import React, { Fragment } from 'react'
import mealsImage from './../../assets/meals.jpg'
import classes from './Header.module.css'
const Header = () => {
  return (
    <Fragment>
        <header className={classes.header}>
            <h2>Food order App</h2>
            <button>My Cart</button>

        </header>
        <div className={classes["main-image"]}>
            <img  src={mealsImage} alt="tabel with food on it"/>
        </div>
    </Fragment>
  )
}

export default Header