import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Profile from './Profile';

import { userProfile } from '../../redux/profile-reducer';


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

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

withRouter

export default connect(mapStateToProps, {
  userProfile
})(WithUrlDataContainerComponent);