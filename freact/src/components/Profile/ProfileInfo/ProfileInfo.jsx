import mod from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return <div>
            <div>
              <img className={mod.imgContent} src='https://avatars.mds.yandex.net/get-mpic/6257919/img_id8264876876789494051.jpeg/orig' />
            </div>
            <div className={mod.descBlock}>
              ava descr
            </div>
        </div>
}

export default ProfileInfo;