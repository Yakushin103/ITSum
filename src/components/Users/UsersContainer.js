import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Users from './Users';
import Preloader from '../common/Preloader/Preloader'

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
} from '../../redux/user-selectors'

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (page) => {
    this.props.setCurrentPage(page)
    this.props.requestUsers(page, this.props.pageSize)
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

let mapStateToProps = (state) => {
  return {
    // users: getUsers(state),
    users: getUsersSelector(state),
    pageSize: getPageSizes(state),
    totalCount: getTotalCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  }
}

export default compose(
  connect(mapStateToProps, {
    follow,
    unFollow,
    setCurrentPage,
    requestUsers
  })
)(UsersContainer)