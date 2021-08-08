import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';

import Header from './Header';

import { setUserData } from '../../redux/auth-reducer'

class HeaderContainer extends React.Component {

  componentDidMount() {
    // this.props.toggleIsFecthing(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials: true
    })
      .then(res => {
        if (res.data.resultCode === 0) {
          // this.props.toggleIsFecthing(false)
          this.props.setUserData(res.data.data)
        }

      })
  }


  render() {
    return (
      <Header {...this.props} />
    );
  }
}

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
})

export default connect(mapStateToProps, {
  setUserData
})(HeaderContainer);