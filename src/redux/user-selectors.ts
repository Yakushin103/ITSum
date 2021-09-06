import { createSelector } from 'reselect';

import { AppStateType } from './redux-store';

export const getUsers = (state: AppStateType) => {
  return state.usersPage.users
}

export const getPageSizes = (state: AppStateType) => {
  return state.usersPage.pageSize
}

export const getTotalCount = (state: AppStateType) => {
  return state.usersPage.totalCount
}

export const getCurrentPage = (state: AppStateType) => {
  return state.usersPage.currentPage
}

export const getIsFetching = (state: AppStateType) => {
  return state.usersPage.isFetching
}

export const getFollowingInProgress = (state: AppStateType) => {
  return state.usersPage.followingInProgress
}

export const getUsersSelector = createSelector(getUsers, (users) => {
  return users.filter(u => u)
})