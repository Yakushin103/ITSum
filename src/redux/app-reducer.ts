import { ThunkAction } from 'redux-thunk';

import { setUser } from './auth-reducer';
import { AppStateType } from './redux-store';

const INITIALIZED_SUCCSES = 'INITIALIZED_SUCCSES'


export type initialStateType = {
  initialized: boolean
}

let initialState: initialStateType = {
  initialized: false
}

const appReducer = (state = initialState, action: ActionsType): initialStateType => {

  switch (action.type) {
    case INITIALIZED_SUCCSES:
      return {
        ...state,
        initialized: true
      }
    default:
      return state
  }
}

type ActionsType = initializedSuccsesType

type initializedSuccsesType = {
  type: typeof INITIALIZED_SUCCSES
}

export const initializedSuccses = (): initializedSuccsesType => ({
  type: INITIALIZED_SUCCSES
})


type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>

export const initializeApp = (): ThunkType => async (dispatch) => {
  await dispatch(setUser())
  
  dispatch(initializedSuccses())
}

export default appReducer;