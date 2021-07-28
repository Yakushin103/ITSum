import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';

import Users from './Users';

import { followAC, unFollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC } from "../../redux/users-reducer";

class UsersContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count${this.props.pageSize}`)
      .then(res => {
        this.props.setUsers(res.data.items)
        this.props.setTotalUsersCount(res.data.totalCount)
      })
  }

  onPageChanged = (page) => {
    this.props.setCurrentPage(page)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count${this.props.pageSize}`)
      .then(res => {
        this.props.setUsers(res.data.items)
      })
  }

  render() {

    return (
      <Users
        users={this.props.users}
        totalCount={this.props.totalCount}
        pageSize={this.props.pageSize}
        onPageChanged={this.onPageChanged}
        currentPage={this.props.currentPage}
        unFollow={this.props.unFollow}
        follow={this.props.follow}
      />)

  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId))
    },
    unFollow: (userId) => {
      dispatch(unFollowAC(userId))
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setTotalUsersCountAC(totalCount))
    },
    setCurrentPage: (page) => {
      dispatch(setCurrentPageAC(page))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);