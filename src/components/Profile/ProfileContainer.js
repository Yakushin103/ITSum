import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

import Profile from './Profile';

import { userProfile, getUserStatus, updateUserStatus, savePhoto } from '../../redux/profile-reducer';
// import { WithAuthRedirect } from '../../HOC/WithAuthRedirect';


class ProfileContainer extends React.Component {

  refreshProfile() {
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

  componentDidMount() {
    this.refreshProfile()
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile()
    }
  }

  render() {

    return (
      <Profile
        {...this.props}
        isOwner={!this.props.match.params.userId}
        profile={this.props.profile}
        status={this.props.status}
        updateUserStatus={this.props.updateUserStatus}
        savePhoto={this.props.savePhoto}
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
    savePhoto,
  }),
  withRouter,
  // WithAuthRedirect
)(ProfileContainer);