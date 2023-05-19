import classes from './Content.module.css'
import MyPosts from '../MyPosts/MyPosts'

const Content = () => {
    return (
       <div className={classes.content}>
        <div>
           
       <img src="https://mobimg.b-cdn.net/v3/fetch/2e/2e2afa7e91ac174ae443aa0d43504840.jpeg" alt="imgcontent" width={1100} height={300}/>    
      
        ava+description
       </div>
          <MyPosts />
       </div>
    )
    }
    
    
    export default Content;