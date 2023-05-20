import React from 'react';
//import {NavLink} from 'react-router-dom'
import classes from './Dialogs.module.css'
import Message from '../Message/Message';
import DialogItem from '../DialogItem/DialogItem';




const Dialogs = (props) => {
    return (        
        <div className={classes.dialogs}>
          <div className={classes.dialogsItems}>
           <DialogItem name='Ivan' id='1' /> 
           <DialogItem name='Alena' id='2' /> 
           <DialogItem name='Sveta' id='3' /> 
           <DialogItem name='Petr' id='4' />                  
          </div>
          <div className={classes.messages}>
           <Message message='Hi Petr people' />
           <Message message='How are you' />
           <Message message='Hello!!Ivan!!' />           
         </div> 
        </div> 
       
    )
    }
        
export default Dialogs;