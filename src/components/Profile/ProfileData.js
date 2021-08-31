import React from 'react';

import Contacts from './Contacts';

const ProfileData = ({ profile, isOwner, onEditMode }) => {

  return (
    <div>
      <div>
        <b>Fullname: </b> {profile.fullName}
      </div>

      <div>
        <b>Looking for a job: </b> {profile.lookingForAJob ? "yes" : "no"}
      </div>

      {
        profile.lookingForAJob &&
        <div>
          <b>My professional skills: </b> {profile.lookingForAJobDescription}
        </div>
      }

      <div>
        <b>About me: </b> {profile.aboutMe}
      </div>

      <div>
        <b>Contacts: </b> {Object.keys(profile.contacts).map(key => (
          <Contacts
            key={key}
            contactTitle={key}
            contactValue={profile.contacts[key]}
          />
        ))}
      </div>

      {
        isOwner &&
        <div>
          <button onClick={onEditMode}>
            Edit
          </button>
        </div>
      }
    </div>
  )
}

export default ProfileData;