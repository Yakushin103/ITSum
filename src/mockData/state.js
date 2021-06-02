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

  addPost() {
    let newPost = {
      id: 5,
      message: this._state.postPage.newText
    }
    this._state.postPage.postData.push(newPost)
    this._state.postPage.newText = ''

    this._callSubscriber(this._state);
  },
  updatePostText(updateText) {
    this._state.postPage.newText = updateText

    this._callSubscriber(this._state);
  },

  dispatch(action) {
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 5,
        message: this._state.postPage.newText
      }
      this._state.postPage.postData.push(newPost)
      this._state.postPage.newText = ''

      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.postPage.newText = action.updateText

      this._callSubscriber(this._state);
    }
  }
}

export default store;