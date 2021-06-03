import React from 'react';

import Dialogs from './Dialogs';

import { updateNewMessageBodyActionCreator, sendMessageActionCreator } from '../../redux/dialogs-reducer'

const DialogsContainer = ({ state, dispatch }) => {

    const onChangeMessage = (body) => {
        dispatch(updateNewMessageBodyActionCreator(body))
    }

    const addMessage = () => {
        dispatch(sendMessageActionCreator())
    }

    return (
        <Dialogs
            changeMessage={onChangeMessage}
            onAddMessage={addMessage}
            dialogsPage={state}
        />
    );
}

export default DialogsContainer;