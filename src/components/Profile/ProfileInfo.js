import React, { useState } from 'react';

import Preloader from '../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';
import ProfileData from './ProfileData';
import ProfileDataForm from './ProfileDataForm';
import { avaImage } from '../common/constant/Constant';

const ProfileInfo = ({
  profile,
  status,
  updateUserStatus,
  isOwner,
  savePhoto,
  saveProfile, }) => {
  const [editMode, setEditMode] = useState(false)

  if (!profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  }

  const onSubmit = (formData) => {
    let userId = profile.userId
    saveProfile(formData, userId).then(() => {
      setEditMode(!editMode)
    })
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

        {
          editMode ?
            <ProfileDataForm
              initialValues={profile}
              onSubmit={onSubmit}
              profile={profile}
            /> :
            <ProfileData
              isOwner={isOwner}
              profile={profile}
              onEditMode={() => setEditMode(!editMode)}
            />
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