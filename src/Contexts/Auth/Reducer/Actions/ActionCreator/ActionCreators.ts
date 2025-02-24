import {
  AuthReducerSigleActionInterface as Action,
  authReducerActionTypes as types
} from '@/Contexts';

export const authLoginActionCreatorFn = (name: string): Action => {
  return { payload: { logged: true, name }, type: types.logIn };
};

export const authLogoutActionCreatorFn = (name: string = ''): Action => {
  return { payload: { logged: false, name }, type: types.logOut };
};
