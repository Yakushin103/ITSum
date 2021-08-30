import React, { useState, useEffect } from 'react';

const ProfileStatus = ({ status, updateUserStatus }) => {
  const [editMode, setEditMode] = useState(false)
  const [localStatus, setStatus] = useState(status)

  useEffect(() => {
    setStatus(localStatus)
  }, [localStatus])

  const toggleEditMode = (e) => {
    setEditMode(!editMode)
    updateUserStatus(localStatus)
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  }

  return (
    <div>
      {
        !editMode ?
          <div>
            <span onDoubleClick={toggleEditMode} >
              {localStatus || "No status"}
            </span>
          </div> :
          <div>
            <input
              onChange={onStatusChange}
              onBlur={toggleEditMode}
              value={localStatus}
              autoFocus={true}
            />
          </div>
      }
    </div>
  )
}

export default ProfileStatus;