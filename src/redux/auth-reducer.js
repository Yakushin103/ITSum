import { stopSubmit } from 'redux-form';

import { authAPI } from '../api/api';

const SET_USER_DATA = 'auth/SET_USER_DATA';

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

export const setUser = () => async (dispatch) => {
  let data = await authAPI.isAuth()

  if (data.resultCode === 0) {
    const { id, login, email } = data.data
    dispatch(setUserData(id, email, login, true))
  }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
  let data = await authAPI.login(email, password, rememberMe)

  if (data.resultCode === 0) {
    dispatch(setUser())
  } else {
    let message = data.messages.length > 0 ?
      data.messages[0] :
      "SOME ERROR"

    dispatch(stopSubmit('login', { _error: message }))
  }
}

export const logout = () => async (dispatch) => {
  let data = await authAPI.logout()
  
  if (data.resultCode === 0) {
    dispatch(setUserData(null, null, null, false))
  }
}

export default authReducer;