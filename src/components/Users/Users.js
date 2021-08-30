import React from 'react';

import Pagination from '../common/Pagination/Pagination';
import User from './User';

import './Users.css';

const Users = ({
  totalCount,
  pageSize,
  currentPage,
  users,
  onPageChanged,
  followingInProgress,
  unFollow,
  follow }) => {

  return <div>
    <Pagination
      totalItemsCount={totalCount}
      pageSize={pageSize}
      onPageChanged={onPageChanged}
      currentPage={currentPage}
      portionSize={10}
    />
    {
      users.map(u => (
        <User
          key={u.id}
          user={u}
          followingInProgress={followingInProgress}
          unFollow={unFollow}
          follow={follow}
        />
      ))
    }
  </div >
}

export default Users;