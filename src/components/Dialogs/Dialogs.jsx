import React from 'react';
import classes from './Dialogs.module.css'


const Dialogs = (props) => {
    return (        
        <div className={classes.dialogs}>
          <div className={classes.dialogsItems}>
          <div className={classes.dialog + ' ' + classes.active} >
            Ivan
          </div>
          <div className={classes.dialog}>
            Alena
          </div>
          <div className={classes.dialog}>
            Sveta
          </div>
          <div className={classes.dialog}>
            Petr
          </div>          
          </div>
          <div className={classes.messages}>
            <div className={classes.message}>Hi people</div>
            <div className={classes.message}> How are you</div>
            <div className={classes.message}>Hello!!!!</div>
          </div>
        </div> 
       
    )
    }
        
export default Dialogs;