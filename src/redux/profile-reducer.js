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

            let message = state.newText

            return {
                ...state,
                newText: '',
                postData: [...state.postData,
                { id: 5, message }]
            }

        }
        case UPDATE_NEW_POST_TEXT: {

            return {
                ...state,
                newText: action.updateText
            }
        }
        default:
            return state;
    }
}

export const addPost = () => ({
    type: ADD_POST
})

export const updateNewPostText = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    updateText: text
})

export default profileReducer;