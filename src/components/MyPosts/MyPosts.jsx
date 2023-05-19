import classes from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
    return (       
       <div className={classes.posts}>
       <div className={classes.item}>My post</div>
       <div><textarea/></div>
       <button>Add post</button>
    
       <div>
        <Post text={'hello alewa'}  like="like 12" />
        <Post text={'мой первый пост'} like=" like 16"/>
        <Post text={'хэй как дела ребята?'} like=" like 8"/>
       </div>     
        </div>      
    )
    }
    
    
    export default MyPosts;