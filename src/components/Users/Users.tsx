import React from 'react';

import Pagination from '../common/Pagination/Pagination';
import User from './User';
import { UserType } from '../../types/types';

import './Users.css';

type PropsType = {
  totalCount: number,
  pageSize: number,
  currentPage: number,
  users: Array<UserType>,
  onPageChanged: (pageNumber: number) => void,
  followingInProgress: Array<number>,
  unFollow: (userId: number) => void,
  follow: (userId: number) => void
}

const Users = ({
  totalCount,
  pageSize,
  currentPage,
  users,
  onPageChanged,
  followingInProgress,
  unFollow,
  follow }: PropsType) => {

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