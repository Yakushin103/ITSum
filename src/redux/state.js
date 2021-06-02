const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
    },
    postPage: {
      postData: [
        { id: 1, message: 'Hi, how are u?' },
        { id: 2, message: 'Its my first post' },
        { id: 3, message: 'How its work' },
        { id: 4, message: 'Bla bla bla' }
      ],
      newText: ''
    }
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
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.postPage.newText
      }
      this._state.postPage.postData.push(newPost)
      this._state.postPage.newText = ''

      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.postPage.newText = action.updateText

      this._callSubscriber(this._state);
    }
  }
}

export const addPostActionCreator = () => ({
  type: ADD_POST
})

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  updateText: text
})

export default store;