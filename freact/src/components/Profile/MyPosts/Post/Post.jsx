
import mod from './Post.module.css';


const Post = (props) => {

    return (
   
      <div className={mod.item}>
        <img className={mod.imgPost} src='https://avatars.mds.yandex.net/i?id=322972b8fc68e9314ed54b3daf448b296dd0713a-10877992-images-thumbs&n=13' />
        {props.message}
        <div>
      post1
      </div>
    </div>

    )
}

export default Post;