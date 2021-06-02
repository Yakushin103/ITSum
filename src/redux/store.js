import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import sidebarReducer from './sidebar-reducer'

let store = {
  _state: {
    profilePage: {
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
    },
    postPage: {
      postData: [
        { id: 1, message: 'Hi, how are u?' },
        { id: 2, message: 'Its my first post' },
        { id: 3, message: 'How its work' },
        { id: 4, message: 'Bla bla bla' }
      ],
      newText: ''
    },
    sidebar: {}
  },
  _callSubscriber() {
  },

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },

  dispatch(action) {
    
    this._state.postPage = profileReducer(this._state.postPage, action)

    this._state.profilePage = dialogsReducer(this._state.profilePage, action)
    
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)

    this._callSubscriber(this._state);
  }
}

export default store;