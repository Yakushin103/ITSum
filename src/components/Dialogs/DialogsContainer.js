// import React from 'react';
import { connect } from 'react-redux'

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

let AuthRedirectComponent = WithAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;