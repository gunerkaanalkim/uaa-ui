import {InitialStateType, UserDetails} from "./model";

export const initialState: InitialStateType = {
  userDetails: {} as UserDetails,
  shops: [],
  isLoaderVisible: false,
  httpError: null
};
