import { stopSubmit } from 'redux-form';

import { authAPI, securityAPI } from '../api/api';

const SET_USER_DATA = 'auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCES = 'auth/GET_CAPTCHA_URL_SUCCES';

export type initialStateType = {
  id: number | null,
  login: string | null,
  email: string | null,
  isFetching: boolean,
  isAuth: boolean,
  captchaUrl: string | null
}

export const initialState: initialStateType = {
  id: null,
  login: null,
  email: null,
  isFetching: false,
  isAuth: false,
  captchaUrl: null
}

const authReducer = (state = initialState, action: any): initialStateType => {

  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_URL_SUCCES:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}

type setUserDataPayload = {
  id: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
}

type setUserDataType = {
  type: typeof SET_USER_DATA,
  payload: setUserDataPayload
}

export const setUserData = (
  id: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
): setUserDataType => ({
  type: SET_USER_DATA,
  payload: {
    id,
    email,
    login,
    isAuth
  }
})

type getCaptchaUrlSuccesType = {
  type: typeof GET_CAPTCHA_URL_SUCCES,
  payload: { captchaUrl: string }
}

export const getCaptchaUrlSucces = (captchaUrl: string): getCaptchaUrlSuccesType => ({
  type: GET_CAPTCHA_URL_SUCCES,
  payload: { captchaUrl }
})

export const setUser = () => async (dispatch: any) => {
  let data = await authAPI.isAuth()

  if (data.resultCode === 0) {
    const { id, login, email } = data.data
    dispatch(setUserData(id, email, login, true))
  }
}

export const login = (
  email: string,
  password: string,
  rememberMe: boolean,
  captcha: any
) => async (dispatch: any) => {
  let data = await authAPI.login(email, password, rememberMe, captcha)

  if (data.resultCode === 0) {
    dispatch(setUser())
  } else {
    if (data.resultCode === 10) {
      dispatch(getCaptcha())
    }

    let message = data.messages.length > 0 ?
      data.messages[0] :
      "SOME ERROR"

    dispatch(stopSubmit('login', { _error: message }))
  }
}

export const getCaptcha = () => async (dispatch: any) => {
  const res = await securityAPI.getCaptchaUrl()
  const captchaUrl = res.data.url
  dispatch(getCaptchaUrlSucces(captchaUrl))
}

export const logout = () => async (dispatch: any) => {
  let data = await authAPI.logout()

  if (data.resultCode === 0) {
    dispatch(setUserData(null, null, null, false))
  }
}

export default authReducer;