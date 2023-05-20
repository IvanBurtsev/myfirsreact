import React from "react";
import { NavLink } from "react-router-dom";
import classes from './DialogItem.module.css'


const DialogItem = ({name, id}) => {
    let path = '/dialogs/' + id;
    return (        
      <div className={classes.dialog}>
        <NavLink  to={'/dialogs/' + id}>
          {name}    
        </NavLink>
      </div>
    )
  }
  
  export default DialogItem;