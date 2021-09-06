import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Users from './Users';
import Preloader from '../common/Preloader/Preloader';

import {
  follow,
  unFollow,
  setCurrentPage,
  requestUsers
} from "../../redux/users-reducer";
import {
  getUsersSelector,
  getPageSizes,
  getTotalCount,
  getCurrentPage,
  getIsFetching,
  getFollowingInProgress
} from '../../redux/user-selectors';
import { UserType } from '../../types/types';
import { AppStateType } from '../../redux/redux-store';

type MapStatePropsType = {
  currentPage: number,
  pageSize: number,
  users: Array<UserType>,
  totalCount: number,
  isFetching: boolean,
  followingInProgress: Array<number>
}

type MapDispatchPropsType = {
  unFollow: (userId: number) => void,
  follow: (userId: number) => void,
  requestUsers: (page: number, pageSize: number) => void,
  setCurrentPage: (page: number) => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType

class UsersContainer extends React.Component<PropsType> {

  componentDidMount() {
    const { currentPage, pageSize } = this.props
    this.props.requestUsers(currentPage, pageSize)
  }

  onPageChanged = (page: number) => {
    const { setCurrentPage, requestUsers, pageSize } = this.props
    setCurrentPage(page)
    requestUsers(page, pageSize)
  }

  render() {

    return <div>
      {this.props.isFetching ?
        <Preloader /> :
        <Users
          users={this.props.users}
          totalCount={this.props.totalCount}
          pageSize={this.props.pageSize}
          onPageChanged={this.onPageChanged}
          currentPage={this.props.currentPage}
          unFollow={this.props.unFollow}
          follow={this.props.follow}
          followingInProgress={this.props.followingInProgress}
        />
      }

    </div>
  }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    users: getUsersSelector(state),
    pageSize: getPageSizes(state),
    totalCount: getTotalCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  }
}

export default compose(
  connect<MapStatePropsType, MapDispatchPropsType, null, AppStateType>(
    mapStateToProps, {
    follow,
    unFollow,
    setCurrentPage,
    requestUsers
  })
)(UsersContainer);