import React from 'react';

import DialogItem from './DialogItem';
import Message from './Message';

import './Dialogs.css';

const Dialogs = ({
    dialogsPage,
    changeMessage,
    onAddMessage,
    isAuth }) => {

    const onChangeMessage = (e) => {
        let body = e.target.value
        changeMessage(body)
    }

    const addMessage = () => {
        onAddMessage()
    }

    return (
        <div className="dialogs">
            <div className="dialogs-row">
                <div className="dialog-items">
                    {
                        dialogsPage.dialogsData &&
                        dialogsPage.dialogsData.map(item => (
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
                        dialogsPage.messageData &&
                        dialogsPage.messageData.map(item => (
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
                    <textarea placeholder='Enter your message' value={dialogsPage.newMessageBody} onChange={onChangeMessage}></textarea>
                    <button disabled={false} onClick={addMessage} > Add post </button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;