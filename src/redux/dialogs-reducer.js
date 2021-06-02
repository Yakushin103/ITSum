const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.newMessageBody
            }
            state.messageData.push(newMessage)

            state.newMessageBody = ''
            return state;
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.updateBody
            return state;
        default:
            return state;
    }
}

export const updateNewMessageBodyActionCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    updateBody: body
})

export const sendMessageActionCreator = () => ({
    type: SEND_MESSAGE
})

export default dialogsReducer;