import {InitialStateType, AuthenticationResponse} from "./model";

export const initialState: InitialStateType = {
  authenticationResponse: {} as AuthenticationResponse,
  isLoaderVisible: false,
  httpError: null
};
