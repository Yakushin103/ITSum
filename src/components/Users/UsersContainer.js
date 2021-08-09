import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';

import Users from './Users';
import Preloader from '../common/Preloader/Preloader'

import {
  toggleIsFecthing,
  follow,
  unFollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount
} from "../../redux/users-reducer";
import { usersAPI } from '../../api/api';

class UsersContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.toggleIsFecthing(true)

    usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
      this.props.toggleIsFecthing(false)
      this.props.setUsers(data.items)
      this.props.setTotalUsersCount(data.totalCount)
    })
  }

  onPageChanged = (page) => {
    this.props.setCurrentPage(page)
    this.props.toggleIsFecthing(true)
    usersAPI.getUsers(page, this.props.pageSize).then(data => {
      this.props.toggleIsFecthing(false)
      this.props.setUsers(data.items)
    })
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
    isFetching: state.usersPage.isFetching
  }
}

export default connect(mapStateToProps, {
  follow,
  unFollow,
  setUsers,
  setUsers,
  setTotalUsersCount,
  setCurrentPage,
  toggleIsFecthing,
})(UsersContainer);