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

class UsersContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.toggleIsFecthing(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count${this.props.pageSize}`)
      .then(res => {
        this.props.toggleIsFecthing(false)
        this.props.setUsers(res.data.items)
        this.props.setTotalUsersCount(res.data.totalCount)
      })
  }

  onPageChanged = (page) => {
    this.props.setCurrentPage(page)
    this.props.toggleIsFecthing(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count${this.props.pageSize}`)
      .then(res => {
        this.props.toggleIsFecthing(false)
        this.props.setUsers(res.data.items)
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