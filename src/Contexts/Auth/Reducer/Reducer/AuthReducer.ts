import {
  authReducerActionTypes as types,
  AuthReducerSigleActionInterface as Action,
  authInitialState,
  AuthStateType
} from '@/Contexts';

export function AuthReducer(
  state: AuthStateType = authInitialState,
  action: Action
): AuthStateType {
  switch (action.type) {
    case types.logIn:
      return action.payload;
    case types.logOut:
      return action.payload;
    default:
      return state;
  }
}
