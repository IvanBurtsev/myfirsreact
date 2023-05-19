import classes from './Navbar.module.css'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
       
       <nav className={classes.nav}>         
       <div className={classes.item}>
         <NavLink className={navData=> navData.isActive ? classes.active : classes.item} to='/content'>Profile</NavLink> </div>    
       <div className= {`${classes.item} ${classes.active}`}>
         <NavLink className={navData=> navData.isActive ? classes.active : classes.item} to='/dialogs' > Message</NavLink></div>     
       <div className={classes.item}>
         <NavLink to='#'> News</NavLink></div>    
       <div className={classes.item}>
         <NavLink to='#'> Music</NavLink> </div>    
       <div className={classes.item}>
          <NavLink to='#'> Settings</NavLink></div>                
       </nav>    
    )
    }    
    
    export default Navbar;