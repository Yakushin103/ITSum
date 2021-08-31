import React from 'react';
import { reduxForm } from 'redux-form';

import { Input, CreateField } from '../common/FormsControl/FormsControl';

const ProfileDataForm = ({ handleSubmit, profile, error }) => {

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <b>Fullname: </b>
        {CreateField("Full name",
          "fullName",
          [],
          Input,
          "text")}
      </div>

      <div>
        <b>Looking for a job: </b>
        {CreateField("",
          "lookingForAJob",
          [],
          Input,
          "checkbox")}
      </div>

      <div>
        <b>My professional skills: </b>
        {CreateField("Your skills",
          "lookingForAJobDescription",
          [],
          Input,
          "text")}
      </div>

      <div>
        <b>About me: </b>
        {CreateField("About you",
          "aboutMe",
          [],
          Input,
          "text")}
      </div>

      <div>
        <b>Contacts: </b>
        {Object.keys(profile.contacts).map(key => (
          <div className="profile-contact" key={key}>
            <b> {key} :</b>
            {CreateField(key,
              `contacts.${key}`,
              [],
              Input)}
          </div>
        ))}
      </div>

      {
        error &&
        <div className="profile-form__error">
          {error}
        </div>
      }
      <div>
        <button>
          Save
        </button>
      </div>
    </form>
  )
}

const ProfileReduxForm = reduxForm({
  form: 'edit-profile'
})(ProfileDataForm)

export default ProfileReduxForm;