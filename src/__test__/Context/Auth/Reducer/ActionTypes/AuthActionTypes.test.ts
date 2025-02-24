import { authReducerActionTypes } from '@/Contexts';
const mockAuthReducerActionTypes = {
  logIn: '[Auth]-Login',
  logOut: '[Auth]-Logout'
} as const;

describe('Pruebas en AuthReducerAction Types', () => {
  test('Deben ser iguales a su mock.', () => {
    expect(authReducerActionTypes).toStrictEqual(mockAuthReducerActionTypes);
  });
});
