import React from 'react';

import Preloader from '../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus'
import { avaImage } from '../common/constant/Constant'

const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      <div className="content-avatar">
        <img alt="Avatar" src={props.profile.photos.large || avaImage} />
        <ProfileStatus
          status={props.status}
          updateUserStatus={props.updateUserStatus}
        />
      </div>
    </div>
  )
}

export default ProfileInfo;