import React from 'react';

import MyPostsContainer from './MyPostsContainer';
import MyAvatar from './MyAvatar';

import './Profile.css';

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