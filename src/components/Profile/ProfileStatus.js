import React, { useState } from 'react';

const ProfileStatus = (props) => {
  const [editMode, setEditMode] = useState(false)

  const toggleEditMode = () => {
    setEditMode(!editMode)
  }

  return (
    <div>
      {
        !editMode ?
          <div>
            <span onDoubleClick={toggleEditMode} >
              {props.status}
            </span>
          </div> :
          <div>
            <input
              onBlur={toggleEditMode}
              value={props.status}
              autoFocus={true}
            />
          </div>
      }
    </div>
  )
}

export default ProfileStatus;