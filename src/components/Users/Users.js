import React from 'react';
import { NavLink } from 'react-router-dom';

import './Users.css';

const Users = (props) => {

  let pagesCount = Math.ceil(props.totalCount / props.pageSize)

  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return <div>
    <div>
      {
        pages.map(p => (
          <span
            onClick={() => { props.onPageChanged(p) }}
            className={p === props.currentPage && "selected-Page"}
            key={p}>
            {p}
          </span>
        ))
      }
    </div>
    {
      props.users.map(u => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={`./profile/${u.id}`}>
                <img
                  alt="Photo_user"
                  className="userPhoto"
                  src={u.photos.small != null ? u.photos.small : 'https://www.kino-teatr.ru/acter/album/325783/847606.jpg'}
                />
              </NavLink>
            </div>
            <div>
              {
                u.followed ?
                  <button disabled={props.followingInProgress
                    .some(id => id === u.id)}
                    onClick={() => { props.unFollow(u.id) }
                    }>
                    UnFollow
                  </button>
                  :
                  <button disabled={props.followingInProgress
                    .some(id => id === u.id)}
                    onClick={() => { props.follow(u.id) }
                    }>
                    Follow
                  </button>
              }
            </div>
          </span>
          <span>
            <span>
              <div> {u.name} </div>
              <div> {u.status} </div>
            </span>
            <span>
              {/* <div> {u.location.country} </div>
                        <div> {u.location.city} </div> */}
            </span>
          </span>
        </div>
      ))
    }
  </div >
}

export default Users;