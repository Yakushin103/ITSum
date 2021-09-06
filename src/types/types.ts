export type PostItemType = {
  id: number,
  message: string
}

export type ContactsType = {
  facebook: string,
  github: string,
  vk: string,
  instagram: string,
  twitter: string,
  mainlink: string,
  youtube: string,
  website: string,
}

export type PhotosType = {
  large: string | null,
  small: string | null
}

export type ProfileType = {
  userId: number,
  lookingForAJob: boolean,
  fullName: string,
  lookingForAJobDescription: string,
  aboutMe: string,
  photos: PhotosType | null,
  contacts: ContactsType
}

export type UserType = {
  id: number,
  name: string,
  status: string,
  photos: PhotosType,
  followed: boolean
}