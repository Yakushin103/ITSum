import { profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
// setUserProfile

let initialState = {
  postData: [
    { id: 1, message: 'Hi, how are u?' },
    { id: 2, message: 'Its my first post' },
    { id: 3, message: 'How its work' },
    { id: 4, message: 'Bla bla bla' }
  ],
  newText: '',
  profile: null,
  status: '',
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

    case SET_USER_PROFILE: {

      return {
        ...state,
        profile: action.profile
      }
    }

    case SET_STATUS: {
      return {
        ...state,
        status: action.status
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

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE, profile
})

export const setUserStatus = (status) => ({
  type: SET_STATUS, status
})

export const userProfile = (userId) => (dispatch) => {
  profileAPI.getUserProfile(userId).then(res => {
    dispatch(setUserProfile(res.data))
  })
}

export const getUserStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then(res => {
    dispatch(setUserStatus(res.data))
  })
}

export const updateUserStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then(res => {
    if (res.data.resultCode === 0) {
      dispatch(setUserStatus(status))
    }
  })
}


export default profileReducer;