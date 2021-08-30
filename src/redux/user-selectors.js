import { createSelector } from 'reselect';

export const getUsers = (state) => {
  return state.usersPage.users
}

export const getPageSizes = (state) => {
  return state.usersPage.pageSize
}

export const getTotalCount = (state) => {
  return state.usersPage.totalCount
}

export const getCurrentPage = (state) => {
  return state.usersPage.currentPage
}

export const getIsFetching = (state) => {
  return state.usersPage.isFetching
}

export const getFollowingInProgress = (state) => {
  return state.usersPage.followingInProgress
}

export const getUsersSelector = createSelector(getUsers, (users) => {
  return users.filter(u => u)
})