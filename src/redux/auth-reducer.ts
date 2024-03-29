import { stopSubmit } from 'redux-form';
import { ThunkAction } from 'redux-thunk';

import { AppStateType } from './redux-store';
import { authAPI, securityAPI } from '../api/api';
import { ResultCodes, ResultCodeForCaptcha } from '../types/enums';

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

const authReducer = (state = initialState, action: ActionsType): initialStateType => {

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

type ActionsType = setUserDataType | getCaptchaUrlSuccesType

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


type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>

export const setUser = (): ThunkType => async (dispatch) => {
  let data = await authAPI.isAuth()

  if (data.resultCode === ResultCodes.Succes) {
    const { id, login, email } = data.data
    dispatch(setUserData(id, email, login, true))
  }
}

export const login = (
  email: string,
  password: string,
  rememberMe: boolean,
  captcha: any
): ThunkType => async (dispatch) => {
  let data = await authAPI.login(email, password, rememberMe, captcha)

  if (data.resultCode === ResultCodes.Succes) {
    dispatch(setUser())
  } else {
    if (data.resultCode === ResultCodeForCaptcha.Error) {
      dispatch(getCaptcha())
    }

    let message = data.messages.length > 0 ?
      data.messages[0] :
      "SOME ERROR"
    //@ts-ignore
    dispatch(stopSubmit('login', { _error: message }))
  }
}

export const getCaptcha = (): ThunkType => async (dispatch: any) => {
  const res = await securityAPI.getCaptchaUrl()
  const captchaUrl = res.data.url
  dispatch(getCaptchaUrlSucces(captchaUrl))
}

export const logout = () => async (dispatch: any) => {
  let data = await authAPI.logout()

  if (data.resultCode === ResultCodes.Succes) {
    dispatch(setUserData(null, null, null, false))
  }
}

export default authReducer;