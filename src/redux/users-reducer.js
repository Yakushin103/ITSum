import { usersAPI } from '../api/api';

import { updateObjectInArrey } from '../utils/reducers-helper';

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
  users: [],
  pageSize: 10,
  totalCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: []
}

const usersReducer = (state = initialState, action) => {

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

export const followSucces = (userId) => ({ type: FOLLOW, userId })
export const unFollowSucces = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, totalCount })
export const toggleIsFecthing = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })

export const requestUsers = (page, pageSize) => async (dispatch) => {
  dispatch(toggleIsFecthing(true))

  let data = await usersAPI.getUsers(page, pageSize)
  dispatch(toggleIsFecthing(false))
  dispatch(setUsers(data.items))
  dispatch(setTotalUsersCount(data.totalCount))
}

const followUnFollowFlow = async (
  dispatch,
  userId,
  apiMethod,
  actionCreator
) => {
  dispatch(toggleFollowingProgress(true, userId))
  let data = await apiMethod

  if (data.resultCode === 0) {
    dispatch(actionCreator(userId))
  }
  dispatch(toggleFollowingProgress(false, userId))
}


export const follow = (userId) => (dispatch) => {
  let apiMethod = usersAPI.follow(userId)

  followUnFollowFlow(dispatch, userId, apiMethod, followSucces)
}

export const unFollow = (userId) => (dispatch) => {
  let apiMethod = usersAPI.unFollow(userId)

  followUnFollowFlow(dispatch, userId, apiMethod, unFollowSucces)
}

export default usersReducer;