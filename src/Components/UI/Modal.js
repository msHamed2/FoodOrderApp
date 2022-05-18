import React, { Fragment } from 'react'
import classes from "./Modal.module.css"
import ReactDOM from 'react-dom'
const BackDrop=props=>{
    return <div className={classes.backdrop} onClick={props.onClose} />
}
const OverLays =props=>{
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}
const Modal = (props) => {
  return (
   <Fragment>
       {ReactDOM.createPortal(<BackDrop onClose={props.onClose}/>,document.getElementById('overlays'))}
       {ReactDOM.createPortal(<OverLays>{props.children}</OverLays>,document.getElementById('overlays'))}
   </Fragment>
  )
}

export default Modal