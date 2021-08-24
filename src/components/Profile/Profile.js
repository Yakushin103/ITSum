import React from 'react';

import MyPostsContainer from './MyPostsContainer';
import ProfileInfo from './ProfileInfo';

import './Profile.css';

const Profile = (props) => {
  return (
    <div className="content">
      <ProfileInfo
        status={props.status}
        profile={props.profile}
        updateUserStatus={props.updateUserStatus}
      />
      <MyPostsContainer />
    </div>
  );
}

export default Profile;