import React from 'react';
import { NavLink } from 'react-router-dom';

const User = ({
  user,
  followingInProgress,
  unFollow,
  follow }) => {

  return (
    <div>
      <span>
        <div>
          <NavLink to={`./profile/${user.id}`}>
            <img
              alt="Photo_user"
              className="userPhoto"
              src={user.photos.small != null ? user.photos.small : 'https://www.kino-teatr.ru/acter/album/325783/847606.jpg'}
            />
          </NavLink>
        </div>
        <div>
          {
            user.followed ?
              <button disabled={followingInProgress
                .some(id => id === user.id)}
                onClick={() => { unFollow(user.id) }
                }>
                UnFollow
              </button>
              :
              <button disabled={followingInProgress
                .some(id => id === user.id)}
                onClick={() => { follow(user.id) }
                }>
                Follow
              </button>
          }
        </div>
      </span>
      <span>
        <span>
          <div> {user.name} </div>
          <div> {user.status} </div>
        </span>
        <span>
          {/* <div> {u.location.country} </div>
                        <div> {u.location.city} </div> */}
        </span>
      </span>
    </div>
  )
}

export default User;