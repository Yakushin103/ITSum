import React from 'react';
import './Profile.css';
import MyPostsContainer from './MyPostsContainer';
import MyAvatar from './MyAvatar';

const Profile = () => {
    return (
        <div className="content">
            <MyAvatar

            />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;