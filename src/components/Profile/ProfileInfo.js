import React from 'react';

import Preloader from '../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus'

const MyAvatar = (props) => {

  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      {/* <div>
        <img alt="bg-Avatar" src="https://avatars.mds.yandex.net/get-pdb/2212586/6dda1a62-c391-4e13-b314-93ac53dafa89/s1200" />
      </div> */}
      <div className="content-avatar">
        <img alt="Avatar" src={props.profile.photos.large} />
        <ProfileStatus status="Hello!!" />
      </div>
    </div>
  )
}

export default MyAvatar;