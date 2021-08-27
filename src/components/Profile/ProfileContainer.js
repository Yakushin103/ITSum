import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

import Profile from './Profile';

import { userProfile, getUserStatus, updateUserStatus } from '../../redux/profile-reducer';
// import { WithAuthRedirect } from '../../HOC/WithAuthRedirect';


class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId

    if (!userId) {
      userId = this.props.authorizedUserId
      if (!userId) {
        this.props.history.push("/login")
      }
    }

    this.props.userProfile(userId)
    this.props.getUserStatus(userId)
  }

  render() {

    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateUserStatus={this.props.updateUserStatus}
      />
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.id,
  isAuth: state.auth.isAuth,
})

export default compose(
  connect(mapStateToProps, {
    userProfile,
    getUserStatus,
    updateUserStatus,
  }),
  withRouter,
  // WithAuthRedirect
)(ProfileContainer);