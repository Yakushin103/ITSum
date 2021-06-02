const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogsData: [
        { id: 1, name: 'Andrey' },
        { id: 2, name: 'Vova' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Bob' }
    ],
    messageData: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Bye' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'What`s up' }
    ],
    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {
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