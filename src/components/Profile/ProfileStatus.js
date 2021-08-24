import React, { useState, useEffect } from 'react';

const ProfileStatus = (props) => {
  const [editMode, setEditMode] = useState(false)
  const [status, setStatus] = useState(props.status)

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])

  const toggleEditMode = (e) => {
    setEditMode(!editMode)
    props.updateUserStatus(status)
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