import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "9b3c6087-f9b8-4f04-8de9-5abde1522073"
  }
})


export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count${pageSize}`).then(res => res.data)
  },
  follow(id) {
    return instance.post(`follow/${id}`).then(res => res.data)
  },
  unFollow(id) {
    return instance.delete(`follow/${id}`).then(res => res.data)
  }
}

export const authAPI = {
  isAuth() {
    return instance.get(`auth/me`).then(res => res.data)
  }
}


export const profileAPI = {
  getUserProfile(userId) {
    return instance.get(`profile/${userId}`)
  }
}