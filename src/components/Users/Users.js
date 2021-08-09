import React from 'react';
import { NavLink } from 'react-router-dom';

import { usersAPI } from '../../api/api'

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
                  className="userPhoto"
                  src={u.photos.small != null ? u.photos.small : 'https://www.kino-teatr.ru/acter/album/325783/847606.jpg'}
                />
              </NavLink>
            </div>
            <div>
              {
                u.followed ?
                  <button onClick={() =>
                    usersAPI.unFollow(u.id).then(data => {
                      if (data.resultCode === 0) {
                        props.unFollow(u.id)
                      }
                    })
                  }>UnFollow

                  </button>
                  :
                  <button onClick={() =>
                    usersAPI.follow(u.id).then(data => {
                      if (data.resultCode === 0) {
                        props.follow(u.id)
                      }
                    })
                  }>Follow

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