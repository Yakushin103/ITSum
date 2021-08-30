import React, { useState, useEffect } from 'react';

const ProfileStatus = ({ status, updateUserStatus }) => {
  const [editMode, setEditMode] = useState(false)
  const [status, setStatus] = useState(status)

  useEffect(() => {
    setStatus(status)
  }, [status])

  const toggleEditMode = (e) => {
    setEditMode(!editMode)
    updateUserStatus(status)
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
              {status || "No status"}
            </span>
          </div> :
          <div>
            <input
              onChange={onStatusChange}
              onBlur={toggleEditMode}
              value={status}
              autoFocus={true}
            />
          </div>
      }
    </div>
  )
}

export default ProfileStatus;