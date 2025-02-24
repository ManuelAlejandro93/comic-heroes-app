import { useAuthHook, AuthStateType, authInitialState } from '@/Contexts';
import { act, renderHook } from '@testing-library/react';

describe('pruebas en useAuthHook', () => {
  test('llamar al hook y no hacer nada, debería devolver el estado inicial.', () => {
    const hook = renderHook(useAuthHook);
    const resultState: AuthStateType = hook.result.current.authState;
    expect(resultState).toStrictEqual(authInitialState);
  });
  test('Antes de ejecutar la función onLogin, no debería existir nada en el local storage, después de ejecutarla sí debería exitir.', () => {
    const resultUser = localStorage.getItem('user');
    expect(resultUser).toStrictEqual(null);

    const hook = renderHook(useAuthHook);
    const onLogin = hook.result.current.onLogin;

    act(() => {
      onLogin();
    });

    expect(hook.result.current.authState).toStrictEqual({
      logged: true,
      name: 'Manuel'
    });

    const userOnLS = JSON.parse(localStorage.getItem('user') as string);

    expect(userOnLS).toStrictEqual({
      logged: true,
      name: 'Manuel'
    });
  });
  test('al tener un usuario en local storage, y consutarlo debería devolverme el estado del usuario, al ejecutar Logout debería borrarse del local storage y cambiar el estado a un estado de logout', () => {
    //! uso onLogin para cambiar el estado y guardarlo en local storage
    const hook = renderHook(useAuthHook);
    const onLogin = hook.result.current.onLogin;
    const onLogout = hook.result.current.onLogout;

    act(() => {
      onLogin();
    });

    //!Espero que cambie el estado al estado que asigna login.
    const hookStateOnLogin = hook.result.current.authState;
    expect(hookStateOnLogin).toStrictEqual({
      logged: true,
      name: 'Manuel'
    });

    //!Local storage debe contener el mismo estado.

    const userOnLS = JSON.parse(localStorage.getItem('user') as string);

    expect(userOnLS).toStrictEqual({
      logged: true,
      name: 'Manuel'
    });

    //!si utilizo OnLogout
    act(() => {
      onLogout();
    });

    //!debería cambiar el estado.
    const hookStateOnLogOut = hook.result.current.authState;
    expect(hookStateOnLogOut).toStrictEqual({
      logged: false,
      name: ''
    });

    //!debería cambiar el usuario en local storage.
    const userOnLSOnLogout = JSON.parse(localStorage.getItem('user') as string);

    expect(userOnLSOnLogout).toStrictEqual(null);
  });
});
