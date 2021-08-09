import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';

import { setUserData } from '../../redux/auth-reducer';
import { authAPI } from '../../api/api';

class HeaderContainer extends React.Component {

  componentDidMount() {
    // this.props.toggleIsFecthing(true)
    authAPI.isAuth().then(data => {
      if (data.resultCode === 0) {
        // this.props.toggleIsFecthing(false)
        this.props.setUserData(data.data)
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