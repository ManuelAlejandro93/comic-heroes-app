import { AuthStateType } from '@/Contexts';

export interface AuthReducerSigleActionInterface {
  payload: AuthStateType;
  type: '[Auth]-Login' | '[Auth]-Logout';
}
