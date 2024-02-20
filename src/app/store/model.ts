export const appFeatureKey = 'state';

export interface UserDetails {
  token: string,
  name: string,
  surname: string,
  username: string
}

export interface InitialStateType {
  userDetails: UserDetails
}
