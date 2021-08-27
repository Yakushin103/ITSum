// import React from 'react';
import { connect } from 'react-redux'
import { compose } from 'redux';

import Dialogs from './Dialogs';

import { sendMessageActionCreator } from '../../redux/dialogs-reducer'
import { WithAuthRedirect } from '../../HOC/WithAuthRedirect';


const mapStateToProps = (state) => {
  return {
    dialogsPage: state.postPage,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddMessage: (newMessageBody) => {
      dispatch(sendMessageActionCreator(newMessageBody))
    }
  }
}

export default compose(
  WithAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps),
)(Dialogs);