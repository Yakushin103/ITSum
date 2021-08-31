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
  },
  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, { email, password, rememberMe }).then(res => res.data)
  },
  logout() {
    return instance.delete(`auth/login`).then(res => res.data)
  }
}

export const profileAPI = {
  getUserProfile(userId) {
    return instance.get(`profile/${userId}`)
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`)
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status })
  },
  savePhoto(file) {
    const formData = new FormData()
    formData.append('image', file)

    return instance.put(`profile/photo`, formData, {
      headers: {
        'Content-type': 'multipart/form-data'
      }
    })
  }
}