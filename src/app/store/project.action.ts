import {createAction, props} from "@ngrx/store";
import {Shop, UserDetails} from "./model";

export const checkUserLoggedIn = createAction(
  "[Splash Component] CheckUserLoggedIn"
);

export const setUserInfo = createAction(
  "[Login Component] SetUserInfo",
  props<{ userDetails: UserDetails }>()
);

export const setAllShops = createAction(
  "[Home Component] SetShops",
  props<{ shops: Shop[] }>()
);

export const setSingleShop = createAction(
  "[NewShop Component] SetSingleShop",
  props<{ shop: Shop }>()
);

export const setLoaderVisible = createAction(
  "[Header Component] SetLoaderVisible",
  props<{ isLoaderVisible: boolean }>()
);

export const LOGOUT = createAction(
  "LOGOUT",
);
