import { setUser } from './auth-reducer';

const INITIALIZED_SUCCSES = 'INITIALIZED_SUCCSES'


export type initialStateType = {
  initialized: boolean
}

let initialState: initialStateType = {
  initialized: false
}

const appReducer = (state = initialState, action: any): initialStateType => {

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

type initializedSuccsesType = {
  type: typeof INITIALIZED_SUCCSES
}

export const initializedSuccses = (): initializedSuccsesType => ({
  type: INITIALIZED_SUCCSES
})

export const initializeApp = () => async (dispatch: any) => {
  await dispatch(setUser())
  
  dispatch(initializedSuccses())
}

export default appReducer;