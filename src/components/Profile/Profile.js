import React from 'react';

import MyPostsContainer from './MyPostsContainer';
import ProfileInfo from './ProfileInfo';

import './Profile.css';

const Profile = (props) => {
  return (
    <div className="content">
      <ProfileInfo
        profile={props.profile}
      />
      <MyPostsContainer />
    </div>
  );
}

export default Profile;