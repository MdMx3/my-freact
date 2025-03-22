
import mod from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    return <div className={mod.postsBlcok}>
    <div>
      my posts
      <div>
        new posts
      </div>
    </div>
    <div>
      <textarea name="" id=""></textarea>
    </div>
    <div>
      <button>Add post</button>
    </div>
    <div className={mod.posts}>
      <Post message='Hi' />
      <Post message='Good'/>
    </div>
    </div>
}

export default MyPosts;