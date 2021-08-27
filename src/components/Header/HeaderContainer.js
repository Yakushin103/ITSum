import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';

import { setUser, logout } from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {

  componentDidMount() {
    this.props.setUser()
  }

  render() {
    return (
      <Header
        {...this.props}
        logout={this.props.logout}
      />
    );
  }
}

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
})

export default connect(mapStateToProps, {
  setUser,
  logout
})(HeaderContainer);