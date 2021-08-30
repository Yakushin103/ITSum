import React from 'react';

import Preloader from '../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus'
import { avaImage } from '../common/constant/Constant'

const ProfileInfo = ({ profile, status, updateUserStatus }) => {

  if (!profile) {
    return <Preloader />
  }

  return (
    <div>
      <div className="content-avatar">
        <img alt="Avatar" src={profile.photos.large || avaImage} />
        <ProfileStatus
          status={status}
          updateUserStatus={updateUserStatus}
        />
      </div>
    </div>
  )
}

export default ProfileInfo;