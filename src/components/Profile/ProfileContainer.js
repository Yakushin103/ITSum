import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as axios from 'axios';

import Profile from './Profile';

import { setUserProfile } from '../../redux/profile-reducer'


class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId || 2
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then(res => {
        this.props.setUserProfile(res.data)
      })
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
  setUserProfile
})(WithUrlDataContainerComponent);