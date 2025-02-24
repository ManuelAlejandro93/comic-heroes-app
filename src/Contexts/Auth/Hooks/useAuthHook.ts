import { useReducer } from 'react';
import {
  AuthReducer,
  ContextStateType,
  authLoginActionCreatorFn as Login,
  authLogoutActionCreatorFn as Logout
} from '@/Contexts';

import { onInitFn } from './onInitFunc';

export const useAuthHook = (): ContextStateType => {
  const [authState, authDispatch] = useReducer(AuthReducer, null, onInitFn);

  const onLogin = () => {
    const actionLoginUser = Login('Manuel');
    authDispatch(actionLoginUser);
    localStorage.setItem('user', JSON.stringify(actionLoginUser.payload));
  };
  const onLogout = () => {
    authDispatch(Logout());
    localStorage.removeItem('user');
  };

  return { authState, onLogin, onLogout };
};
