import MyPosts from './MyPosts/MyPosts';
import mod from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = () => {

    return <div className={mod.content}>
    <ProfileInfo />
    <MyPosts />
    
  </div>
}

export default Profile;