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
  description: string
  etsyAccountId: string
  id: number
  title: string
}

export interface InitialStateType {
  userDetails: UserDetails,
  shops: Shop[]
}
