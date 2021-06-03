const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postData: [
        { id: 1, message: 'Hi, how are u?' },
        { id: 2, message: 'Its my first post' },
        { id: 3, message: 'How its work' },
        { id: 4, message: 'Bla bla bla' }
    ],
    newText: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {

            let newPost = {
                id: 5,
                message: state.newText
            }
            let stateCopy = { ...state }
            stateCopy.postData = [...state.postData]
            stateCopy.postData.push(newPost)
            stateCopy.newText = ''
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {

            let stateCopy = { ...state }
            stateCopy.newText = action.updateText
            return stateCopy;
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({
    type: ADD_POST
})

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    updateText: text
})

export default profileReducer;