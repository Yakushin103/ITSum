import React from 'react';
import './Profile.css';
import MyPostsContainer from './MyPostsContainer';
import MyAvatar from './MyAvatar';

const Profile = (props) => {
  return (
    <div className="content">
      <MyAvatar
        profile={props.profile}
      />
      <MyPostsContainer />
    </div>
  );
}

export default Profile;