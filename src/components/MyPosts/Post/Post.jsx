import classes from './Post.module.css'

const Post = ({ text, like}) => {

    return (     
         
       <div className={classes.item}>
         
        <img src='https://artgranny.ru/upload/iblock/2c3/2c3d523050198c48c9ec8bbde64224d7.jpg' alt='image_post' width={50} height={50}/>
       {text}
        <div>
        <span>{like}</span>
        </div>
        
        </div>           
       
    )
    }
    
    export default Post;