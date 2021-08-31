import React from 'react';

import MyPostsContainer from './MyPostsContainer';
import ProfileInfo from './ProfileInfo';

import './Profile.css';

const Profile = ({
  savePhoto,
  isOwner,
  status,
  profile,
  updateUserStatus,
  saveProfile,
}) => {
  return (
    <div className="content">
      <ProfileInfo
        savePhoto={savePhoto}
        isOwner={isOwner}
        status={status}
        profile={profile}
        updateUserStatus={updateUserStatus}
        saveProfile={saveProfile}
      />
      
      <MyPostsContainer />
    </div>
  );
}

export default Profile;