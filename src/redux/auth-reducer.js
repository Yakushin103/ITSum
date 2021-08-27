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
        ...action.payload
      }
    default:
      return state
  }
}

export const setUserData = (id, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: {
    id,
    email,
    login,
    isAuth
  }
})

export const setUser = () => (dispatch) => {
  authAPI.isAuth().then(data => {
    if (data.resultCode === 0) {
      const { id, login, email } = data.data
      dispatch(setUserData(id, email, login, true))
    }
  })
}

export const login = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe).then(data => {
    if (data.resultCode === 0) {
      dispatch(setUser())
    }
  })
}

export const logout = () => (dispatch) => {
  authAPI.logout().then(data => {
    if (data.resultCode === 0) {
      dispatch(setUserData(null, null, null, false))
    }
  })
}

export default authReducer;