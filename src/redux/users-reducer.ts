import { ThunkAction } from 'redux-thunk';

import { usersAPI } from '../api/api';
import { updateObjectInArrey } from '../utils/reducers-helper';
import { UserType } from '../types/types'
import { AppDispatch, AppStateType } from './redux-store';


const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

type InitialStateType = {
  users: [] | Array<UserType>,
  pageSize: number,
  totalCount: number,
  currentPage: number,
  isFetching: boolean,
  followingInProgress: [] | Array<number>
}

const initialState: InitialStateType = {
  users: [],
  pageSize: 10,
  totalCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: []
}

const usersReducer = (state = initialState, action: ActionsType): InitialStateType => {

  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArrey(state.users, action.userId, 'id', { followed: true })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArrey(state.users, action.userId, 'id', { followed: false })
      }
    case SET_USERS:
      return { ...state, users: [...action.users] }
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage }
    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalCount: action.totalCount }
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching }
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching ?
          [...state.followingInProgress, action.userId] :
          state.followingInProgress.filter(id => id !== action.userId)
      }
    default:
      return state
  }
}

type ActionsType = FollowSuccesType | UnFollowSuccesType | SetUsersType |
  SetCurrentPageType | SetTotalUsersCountType | ToggleIsFecthingType |
  ToggleFollowingProgressType


type FollowSuccesType = {
  type: typeof FOLLOW,
  userId: number
}
export const followSucces = (userId: number): FollowSuccesType => ({ type: FOLLOW, userId })

type UnFollowSuccesType = {
  type: typeof UNFOLLOW,
  userId: number
}
export const unFollowSucces = (userId: number): UnFollowSuccesType => ({ type: UNFOLLOW, userId })

type SetUsersType = {
  type: typeof SET_USERS,
  users: Array<UserType>
}
export const setUsers = (users: Array<UserType>): SetUsersType => ({ type: SET_USERS, users })

type SetCurrentPageType = {
  type: typeof SET_CURRENT_PAGE,
  currentPage: number
}
export const setCurrentPage = (currentPage: number): SetCurrentPageType => ({ type: SET_CURRENT_PAGE, currentPage })

type SetTotalUsersCountType = {
  type: typeof SET_TOTAL_USERS_COUNT,
  totalCount: number
}
export const setTotalUsersCount = (totalCount: number): SetTotalUsersCountType => ({ type: SET_TOTAL_USERS_COUNT, totalCount })

type ToggleIsFecthingType = {
  type: typeof TOGGLE_IS_FETCHING,
  isFetching: boolean
}
export const toggleIsFecthing =
  (isFetching: boolean): ToggleIsFecthingType => ({ type: TOGGLE_IS_FETCHING, isFetching })

type ToggleFollowingProgressType = {
  type: typeof TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching: boolean,
  userId: number
}
export const toggleFollowingProgress =
  (isFetching: boolean, userId: number): ToggleFollowingProgressType =>
  ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId
  })

// type DispatchType = Dispatch<ActionsType>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>

export const requestUsers =
  (page: number, pageSize: number): ThunkType =>
    async (dispatch) => {
      dispatch(toggleIsFecthing(true))

      let data = await usersAPI.getUsers(page, pageSize)
      dispatch(toggleIsFecthing(false))
      dispatch(setUsers(data.items))
      dispatch(setTotalUsersCount(data.totalCount))
    }

const followUnFollowFlow = async (
  dispatch: AppDispatch,
  userId: number,
  apiMethod: any,
  actionCreator: (userId: number) => FollowSuccesType | UnFollowSuccesType
) => {
  dispatch(toggleFollowingProgress(true, userId))
  let data = await apiMethod

  if (data.resultCode === 0) {
    dispatch(actionCreator(userId))
  }
  dispatch(toggleFollowingProgress(false, userId))
}


export const follow = (userId: number): ThunkType => async (dispatch) => {
  let apiMethod = await usersAPI.follow(userId)

  followUnFollowFlow(dispatch, userId, apiMethod, followSucces)
}

export const unFollow = (userId: number): ThunkType => async (dispatch) => {
  let apiMethod = await usersAPI.unFollow(userId)

  followUnFollowFlow(dispatch, userId, apiMethod, unFollowSucces)
}

export default usersReducer;