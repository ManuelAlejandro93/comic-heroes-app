import { AuthStateType, authInitialState } from '@/Contexts';

export const onInitFn = (): AuthStateType => {
  const userOnLS = localStorage.getItem('user');
  if (userOnLS === null) {
    return authInitialState;
  } else {
    return JSON.parse(userOnLS);
  }
};
