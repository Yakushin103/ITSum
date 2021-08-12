// import React from 'react';
import { connect } from 'react-redux'
import { compose } from 'redux';

import Dialogs from './Dialogs';

import { updateNewMessageBodyActionCreator, sendMessageActionCreator } from '../../redux/dialogs-reducer'
import { WithAuthRedirect } from '../../HOC/WithAuthRedirect';


const mapStateToProps = (state) => {
  return {
    dialogsPage: state.profilePage,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeMessage: (body) => {
      dispatch(updateNewMessageBodyActionCreator(body))
    },
    onAddMessage: () => {
      dispatch(sendMessageActionCreator())
    }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  WithAuthRedirect
)(Dialogs);