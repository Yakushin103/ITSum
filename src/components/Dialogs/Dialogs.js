import React from 'react';
import './Dialogs.css';
import DialogItem from './DialogItem';
import Message from './Message';

const Dialogs = ({ state }) => {

    const newMessageElement = React.createRef()

    const addMessage = () => {
        let message = newMessageElement.current.value
        alert(message)
    }

    return (
        <div className="dialogs">
            <div className="dialogs-row">
                <div className="dialog-items">
                {
                    state.dialogsData &&
                    state.dialogsData.map(item => (
                        <DialogItem
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
                            message={item.message}
                        />
                    ))
                }
                </div>
            </div>
            <div className="dialogs-row">
                <div className="dialog-add">
                    <textarea ref={newMessageElement} ></textarea>
                    <button disabled={false} onClick={addMessage} > Add post </button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;