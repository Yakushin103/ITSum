import React, { useState, useEffect, ChangeEvent } from 'react';

type PropsType = {
  status: string,
  updateUserStatus: (status: string) => void
}

const ProfileStatus = ({ status, updateUserStatus }: PropsType) => {
  const [editMode, setEditMode] = useState<boolean>(false)
  const [localStatus, setStatus] = useState<string>(status)

  useEffect(() => {
    setStatus(localStatus)
  }, [localStatus])

  const toggleEditMode = () => {
    setEditMode(!editMode)
    updateUserStatus(localStatus)
  }

  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value)
  }

  return (
    <div>
      {
        !editMode ?
          <div>
            <b>Status :</b>
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