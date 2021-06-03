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
        case SEND_MESSAGE: {

            let newMessage = {
                id: 5,
                message: state.newMessageBody
            }
            let stateCopy = { ...state }
            stateCopy.messageData = [...state.messageData]
            stateCopy.messageData.push(newMessage)

            stateCopy.newMessageBody = ''
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE_BODY: {

            let stateCopy = { ...state }
            stateCopy.newMessageBody = action.updateBody
            return stateCopy;
        }
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