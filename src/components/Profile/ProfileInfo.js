import React from 'react';

import Preloader from '../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus'
import { avaImage } from '../common/constant/Constant'

const ProfileInfo = ({
  profile,
  status,
  updateUserStatus,
  isOwner,
  savePhoto }) => {

  if (!profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  }

  return (
    <div>
      <div className="content-avatar">
        <img alt="Avatar" src={profile.photos.large || avaImage} />
        {
          isOwner &&
          <input
            onChange={onMainPhotoSelected}
            type="file" />
        }
        <ProfileStatus
          status={status}
          updateUserStatus={updateUserStatus}
        />
      </div>
    </div>
  )
}

export default ProfileInfo;