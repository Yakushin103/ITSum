import React from 'react';

import DialogItem from './DialogItem';
import Message from './Message';

import { updateNewMessageBodyActionCreator, sendMessageActionCreator } from '../../redux/state'
import './Dialogs.css';

const Dialogs = ({ state, dispatch }) => {

    const onChangeMessage = (e) => {
        let body = e.target.value
        dispatch(updateNewMessageBodyActionCreator(body))
    }

    const addMessage = () => {
        dispatch(sendMessageActionCreator())
    }

    return (
        <div className="dialogs">
            <div className="dialogs-row">
                <div className="dialog-items">
                    {
                        state.dialogsData &&
                        state.dialogsData.map(item => (
                            <DialogItem
                                key={item.id}
                                name={item.name}
                                id={item.id}
                            />
                        ))
                    }
                </div>
                <div className="message-items">
                    {
                        state.messageData &&
                        state.messageData.map(item => (
                            <Message
                                key={item.id}
                                message={item.message}
                            />
                        ))
                    }
                </div>
            </div>
            <div className="dialogs-row">
                <div className="dialog-add">
                    <textarea placeholder='Enter your message' value={state.newMessageBody} onChange={onChangeMessage}></textarea>
                    <button disabled={false} onClick={addMessage} > Add post </button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;