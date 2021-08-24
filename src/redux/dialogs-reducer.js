const SEND_MESSAGE = 'SEND_MESSAGE';

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
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:

            let message = action.newMessageBody

            return {
                ...state,
                messageData: [...state.messageData,
                { id: 5, message }]
            }

        default:
            return state;
    }
}

export const sendMessageActionCreator = (newMessageBody) => ({
    type: SEND_MESSAGE,
    newMessageBody
})

export default dialogsReducer;