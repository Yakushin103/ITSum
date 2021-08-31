import React from 'react';

import MyPostsContainer from './MyPostsContainer';
import ProfileInfo from './ProfileInfo';

import './Profile.css';

const Profile = ({
  savePhoto,
  isOwner,
  status,
  profile,
  updateUserStatus
}) => {
  return (
    <div className="content">
      <ProfileInfo
        savePhoto={savePhoto}
        isOwner={isOwner}
        status={status}
        profile={profile}
        updateUserStatus={updateUserStatus}
      />
      
      <MyPostsContainer />
    </div>
  );
}

export default Profile;