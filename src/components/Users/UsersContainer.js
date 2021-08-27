import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Users from './Users';
import Preloader from '../common/Preloader/Preloader'

import {
  follow,
  unFollow,
  setCurrentPage,
  getUsers
} from "../../redux/users-reducer";

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (page) => {
    this.props.setCurrentPage(page)
    this.props.getUsers(page, this.props.pageSize)
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
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  }
}



export default compose(
  connect(mapStateToProps, {
    follow,
    unFollow,
    setCurrentPage,
    getUsers
  })
)(UsersContainer)