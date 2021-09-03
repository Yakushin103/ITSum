import { stopSubmit } from 'redux-form';

import { profileAPI } from '../api/api';
import {PostItemType, PhotosType, ProfileType} from '../types/types';

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCES = 'SAVE_PHOTO_SUCCES';

export type InitialStateType = {
  postData: Array<PostItemType>,
  newText: string,
  profile: ProfileType | null | any,
  status: string
}

let initialState: InitialStateType = {
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

const profileReducer = (state = initialState, action: any): InitialStateType => {

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

type AddPostType = {
  type: typeof ADD_POST,
  newPostText: string
}

export const addPost = (newPostText: string): AddPostType => ({
  type: ADD_POST,
  newPostText
})

type DeletePostType = {
  type: typeof DELETE_POST,
  postId: number
}

export const deletePost = (postId: number): DeletePostType => ({
  type: DELETE_POST,
  postId
})

type SetUserProfileType = {
  type: typeof SET_USER_PROFILE,
  profile: ProfileType
}

export const setUserProfile = (profile: ProfileType): SetUserProfileType => ({
  type: SET_USER_PROFILE, profile
})

type SetUserStatusType = {
  type: typeof SET_STATUS,
  status: string
}

export const setUserStatus = (status: string): SetUserStatusType => ({
  type: SET_STATUS, status
})

type SavePhotoSuccesType = {
  type: typeof SAVE_PHOTO_SUCCES,
  photos: PhotosType
}

export const savePhotoSucces = (photos: PhotosType): SavePhotoSuccesType => ({
  type: SAVE_PHOTO_SUCCES, photos
})

export const userProfile = (userId: number) => async (dispatch: any) => {
  let res = await profileAPI.getUserProfile(userId)
  dispatch(setUserProfile(res.data))
}

export const getUserStatus = (userId: number) => async (dispatch: any) => {
  let res = await profileAPI.getStatus(userId)
  dispatch(setUserStatus(res.data))
}

export const updateUserStatus = (status: string) => async (dispatch: any) => {
  let res = await profileAPI.updateStatus(status)
  if (res.data.resultCode === 0) {
    dispatch(setUserStatus(status))
  }
}

export const savePhoto = (file: any) => async (dispatch: any) => {
  let res = await profileAPI.savePhoto(file)
  if (res.data.resultCode === 0) {
    dispatch(savePhotoSucces(res.data.data.photos))
  }
}

export const saveProfile = (profile: ProfileType, userId: number) => async (dispatch: any) => {
  let res = await profileAPI.saveProfile(profile)
  if (res.data.resultCode === 0) {
    dispatch(userProfile(userId))
  } else {
    let message = res.data.messages.length > 0 ?
      res.data.messages[0] :
      "SOME ERROR"

    dispatch(stopSubmit('edit-profile', { _error: message }))
    return Promise.reject(message)
  }
}


export default profileReducer;