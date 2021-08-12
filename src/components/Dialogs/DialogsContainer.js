// import React from 'react';
import { connect } from 'react-redux'

import Dialogs from './Dialogs';

import { updateNewMessageBodyActionCreator, sendMessageActionCreator } from '../../redux/dialogs-reducer'

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.profilePage,
        isAuth: state.auth.isAuth
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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;