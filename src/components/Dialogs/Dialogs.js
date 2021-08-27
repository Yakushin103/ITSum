import React from 'react';
import { Field, reduxForm } from 'redux-form';

import DialogItem from './DialogItem';
import Message from './Message';
import { Textarea } from '../common/FormsControl/FormsControl';
import { required, maxLengthCreator } from '../../utils/validators';

import './Dialogs.css';

const maxLength = maxLengthCreator(50)

const Dialogs = ({
    dialogsPage,
    onAddMessage,
}) => {

    const addNewMessage = (values) => {
        onAddMessage(values.newMessageBody)
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
                    <AddMessageFormRedux onSubmit={addNewMessage} />
                </div>
            </div>
        </div>
    );
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                name="newMessageBody"
                component={Textarea}
                validate={[required, maxLength]}
                placeholder="Enter your message"
            />
            <button
                disabled={false}
            >
                Add post
            </button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm)

export default Dialogs;