import axios from 'axios';

import { ProfileType, UserType, PhotosType } from '../types/types';
import { ResultCodes, ResultCodeForCaptcha } from '../types/enums';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "9b3c6087-f9b8-4f04-8de9-5abde1522073"
  }
})

export const usersAPI = {
  getUsers(currentPage: number, pageSize: number) {
    type UsersType = {
      items: Array<UserType>,
      totalCount: number,
      error: string | null
    }

    return instance.get<UsersType>(`users?page=${currentPage}&count${pageSize}`).then(res => res.data)
  },

  follow(id: number) {
    type FollowType = {
      data: {},
      fieldsErrors: [] | Array<string>,
      messages: [] | Array<string>,
      resultCode: ResultCodes
    }

    return instance.post<FollowType>(`follow/${id}`).then(res => res.data)
  },

  unFollow(id: number) {
    type UnFollowType = {
      data: {},
      fieldsErrors: [] | Array<string>,
      messages: [] | Array<string>,
      resultCode: ResultCodes
    }
    return instance.delete<UnFollowType>(`follow/${id}`).then(res => res.data)
  }
}

export const authAPI = {
  isAuth() {
    type AuthResType = {
      data: {
        id: number,
        email: string,
        login: string
      },
      messages: Array<string>,
      fieldsErrors: Array<string>,
      resultCode: ResultCodes
    }

    return instance.get<AuthResType>(`auth/me`).then(res => res.data)
  },

  login(email: string,
    password: string,
    rememberMe = false,
    captcha: null | string = null) {
    type LoginResType = {
      data: {
        userId: number
      },
      messages: Array<string>,
      fieldsErrors: Array<string>,
      resultCode: ResultCodes | ResultCodeForCaptcha
    }

    return instance.post<LoginResType>(`auth/login`, { email, password, rememberMe, captcha })
      .then(res => res.data)
  },

  logout() {
    return instance.delete(`auth/login`).then(res => res.data)
  }
}

export const profileAPI = {
  getUserProfile(userId: number) {
    return instance.get<ProfileType>(`profile/${userId}`)
  },

  getStatus(userId: number) {
    return instance.get<string>(`profile/status/${userId}`)
  },

  updateStatus(status: string) {
    type UpdateStatusType = {
      data: {},
      fieldsErrors: [] | Array<string>,
      messages: [] | Array<string>,
      resultCode: ResultCodes
    }

    return instance.put<UpdateStatusType>(`profile/status`, { status })
  },

  savePhoto(file: any) {
    type SavePhoto = {
      data: {
        photos: PhotosType
      },
      fieldsErrors: [] | Array<string>,
      messages: [] | Array<string>,
      resultCode: ResultCodes
    }

    const formData = new FormData()
    formData.append('image', file)

    return instance.put<SavePhoto>(`profile/photo`, formData, {
      headers: {
        'Content-type': 'multipart/form-data'
      }
    })
  },

  saveProfile(profile: ProfileType) {
    type SaveProfileType = {
      data: {},
      fieldsErrors: [] | Array<string>,
      messages: [] | Array<string>,
      resultCode: ResultCodes
    }

    return instance.put<SaveProfileType>(`profile`, profile)
  }
}

export const securityAPI = {
  getCaptchaUrl() {
    type securityAPIType = {
      url: string
    }

    return instance.get<securityAPIType>(`security/get-captcha-url`)
  }
}