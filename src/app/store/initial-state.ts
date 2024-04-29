import {InitialStateType, AuthenticationResponse} from "./model";

export const initialState: InitialStateType = {
  authenticationResponse: {} as AuthenticationResponse,
  shops: [],
  isLoaderVisible: false,
  httpError: null
};
