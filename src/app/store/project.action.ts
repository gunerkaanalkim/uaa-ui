import {createAction, props} from "@ngrx/store";
import {AuthenticationResponse, HttpError} from "./model";

export const checkUserLoggedIn = createAction(
  "[Splash Component] CheckUserLoggedIn"
);

export const setAuthenticationResponse = createAction(
  "[Login Component] SetAuthenticationResponse",
  props<{ authenticationResponse: AuthenticationResponse }>()
);

export const setLoaderVisible = createAction(
  "[Header Component] SetLoaderVisible",
  props<{ isLoaderVisible: boolean }>()
);

export const LOGOUT = createAction(
  "LOGOUT",
);

export const setHttpError = createAction(
  "[Header Component] SetHttpError",
  props<{ httpError: HttpError | null }>()
);
