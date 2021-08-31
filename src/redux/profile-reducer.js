import { profileAPI } from '../api/api';

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCES = 'SAVE_PHOTO_SUCCES';

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
      return {
        ...state,
        newText: '',
        postData: [...state.postData,
        { id: 5, message: action.newPostText }]
      }
    }

    case DELETE_POST: {
      return {
        ...state,
        postData: state.postData.filter(m => m.id !== action.postId)
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

    case SAVE_PHOTO_SUCCES: {
      return {
        ...state,
        profile: {
          ...state.profile,
          photos: action.photos
        }
      }
    }
    default:
      return state;
  }
}

export const addPost = (newPostText) => ({
  type: ADD_POST,
  newPostText
})

export const deletePost = (postId) => ({
  type: DELETE_POST,
  postId
})

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE, profile
})

export const setUserStatus = (status) => ({
  type: SET_STATUS, status
})

export const savePhotoSucces = (photos) => ({
  type: SAVE_PHOTO_SUCCES, photos
})

export const userProfile = (userId) => async (dispatch) => {
  let res = await profileAPI.getUserProfile(userId)
  dispatch(setUserProfile(res.data))
}

export const getUserStatus = (userId) => async (dispatch) => {
  let res = await profileAPI.getStatus(userId)
  dispatch(setUserStatus(res.data))
}

export const updateUserStatus = (status) => async (dispatch) => {
  let res = await profileAPI.updateStatus(status)
  if (res.data.resultCode === 0) {
    dispatch(setUserStatus(status))
  }
}

export const savePhoto = (file) => async (dispatch) => {
  let res = await profileAPI.savePhoto(file)
  if (res.data.resultCode === 0) {
    dispatch(savePhotoSucces(res.data.data.photos))
  }
}


export default profileReducer;