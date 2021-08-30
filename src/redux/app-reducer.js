import { setUser } from './auth-reducer';

const INITIALIZED_SUCCSES = 'INITIALIZED_SUCCSES'

let initialState = {
  initialized: false
}

const appReducer = (state = initialState, action) => {

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

export const initializedSuccses = () => ({
  type: INITIALIZED_SUCCSES
})

export const initializeApp = () => async (dispatch) => {
  await dispatch(setUser())

  dispatch(initializedSuccses())
}

export default appReducer;