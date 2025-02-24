import {
  authLoginActionCreatorFn,
  authLogoutActionCreatorFn,
  authInitialState,
  AuthReducer
} from '@/Contexts';

const mockInitialState = authInitialState;
const mockLoginAction = authLoginActionCreatorFn('manuel');
const mockLogoutAction = authLogoutActionCreatorFn();

describe('Pruebas en el reducer que cambia el estado del usuario en la app', () => {
  test('Auth Reducer con una acción login debe devolver un estado login', () => {
    const result = AuthReducer(mockInitialState, mockLoginAction);
    const mockResult = { logged: true, name: 'manuel' };
    expect(result).toStrictEqual(mockResult);
  });
  test('Auth Reducer con una acción logout debe devolver un estado logout', () => {
    const result = AuthReducer(mockInitialState, mockLogoutAction);
    const mockResult = { logged: false, name: '' };
    expect(result).toStrictEqual(mockResult);
  });
  test('debe retornar un logout despues de un login', () => {
    const loginResult = AuthReducer(mockInitialState, mockLoginAction);
    expect(loginResult).toStrictEqual({ logged: true, name: 'manuel' });
    const logoutResult = AuthReducer(loginResult, mockLogoutAction);
    expect(logoutResult).toStrictEqual({ logged: false, name: '' });
  });
  test('debe retornar un login despues de un logout', () => {
    const loginResult = AuthReducer(mockInitialState, mockLoginAction);
    expect(loginResult).toStrictEqual({ logged: true, name: 'manuel' });
    const logoutResult = AuthReducer(loginResult, mockLogoutAction);
    expect(logoutResult).toStrictEqual({ logged: false, name: '' });
    //...........................................................
    const login2Result = AuthReducer(logoutResult, mockLoginAction);
    expect(login2Result).toStrictEqual({ logged: true, name: 'manuel' });
  });
});

export { mockInitialState, mockLoginAction, mockLogoutAction };
