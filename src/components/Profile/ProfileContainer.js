import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';

import Profile from './Profile';

import { userProfile } from '../../redux/profile-reducer';


class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId || 2
    this.props.userProfile(userId)
  }

  render() {

    if (!this.props.isAuth) return <Redirect to={"/login"} />

    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
      />
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
  userProfile
})(WithUrlDataContainerComponent);