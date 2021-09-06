import React, { ChangeEvent, useState } from 'react';

import Preloader from '../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';
import ProfileData from './ProfileData';
import ProfileDataForm from './ProfileDataForm';
import { avaImage } from '../common/constant/Constant';
import { ProfileType } from '../../types/types';

type PropsType = {
  profile: ProfileType,
  status: string,
  updateUserStatus: (status: string) => void,
  isOwner: boolean,
  savePhoto: () => void,
  saveProfile: (formData: any, userId: number) => { formData: any, userId: number }
}

const ProfileInfo = ({
  profile,
  status,
  updateUserStatus,
  isOwner,
  savePhoto,
  saveProfile, }: PropsType) => {
  const [editMode, setEditMode] = useState<boolean>(false)

  if (!profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (e !== null &&
      e.target !== null &&
      e.target.files !== null &&
      e.target.files.length) {
      // @ts-ignore
      savePhoto(e.target.files[0])
    }
  }

  const onSubmit = (formData: any) => {
    let userId = profile.userId
    // @ts-ignore
    saveProfile(formData, userId).then(() => {
      setEditMode(!editMode)
    })
  }

  return (
    <div>
      <div className="content-avatar">
        <img alt="Avatar" src={profile.photos?.large || avaImage} />
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
              // @ts-ignore
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