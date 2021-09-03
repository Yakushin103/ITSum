const SEND_MESSAGE = 'SEND_MESSAGE';

export type initialStateType = {
  dialogsData: typeof initialState.dialogsData,
  messageData: typeof initialState.messageData
}

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

const dialogsReducer = (state = initialState, action: any): initialStateType => {

  switch (action.type) {
    case SEND_MESSAGE:
      let message = action.newMessageBody

      return {
        ...state,
        messageData: [...state.messageData,
        { id: +5, message }]
      }
    default:
      return state;
  }
}

type sendMessageActionCreatorType = {
  type: typeof SEND_MESSAGE,
  newMessageBody: string
}

export const sendMessageActionCreator =
  (newMessageBody: string): sendMessageActionCreatorType =>
  ({
    type: SEND_MESSAGE,
    newMessageBody
  })

export default dialogsReducer;