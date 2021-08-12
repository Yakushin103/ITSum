import { authAPI } from '../api/api';

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
  id: null,
  login: null,
  email: null,
  isFetching: false,
  isAuth: false
}

const authReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true
      }
    default:
      return state
  }
}

export const setUserData = (data) => ({ type: SET_USER_DATA, data })

export const setUser = () => (dispatch) => {
  authAPI.isAuth().then(data => {
    if (data.resultCode === 0) {
      dispatch(setUserData(data.data))
    }
  })
}

export default authReducer;