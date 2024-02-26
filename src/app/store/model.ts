export const appFeatureKey = 'state';

export interface UserInfo {
  name: string,
  surname: string,
  username: string
}

export interface UserDetails {
  token: string,
  userInfo: UserInfo
}

export interface Shop {
  createdBy?: string
  createdDate?: number
  lastModifiedBy?: string
  lastModifiedDate?: string
  description: string
  etsyAccountId: string
  title: string
  id: number
}

export interface Provider {
  createdBy?: string
  createdDate?: number
  lastModifiedBy?: string
  lastModifiedDate?: string
  title: string
  id: number
}

export interface InitialStateType {
  userDetails: UserDetails,
  shops: Shop[]
}
