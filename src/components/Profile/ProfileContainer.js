import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Profile from './Profile';

import { userProfile } from '../../redux/profile-reducer';
import { WithAuthRedirect } from '../../HOC/WithAuthRedirect';


class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId || 2
    this.props.userProfile(userId)
  }

  render() {

    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
      />
    );
  }
}

let AuthRedirectComponent = WithAuthRedirect(ProfileContainer)

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, {
  userProfile
})(WithUrlDataContainerComponent);