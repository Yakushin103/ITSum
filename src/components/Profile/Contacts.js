import React from 'react';

const Contacts = ({ contactTitle, contactValue }) => {
  return (
    <div className="profile-contact">
      <b> {contactTitle}: </b> {contactValue}
    </div>
  )
}

export default Contacts;