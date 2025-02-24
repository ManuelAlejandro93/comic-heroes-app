import { AuthStateType, /* authInitialState */ onInitFn } from '@/Contexts';

const mocklocalStorageLoggedUser: AuthStateType = {
  logged: true,
  name: 'manuel'
};
const mocklocalStorageNotLoggedUser: AuthStateType = {
  logged: false,
  name: null
};

describe('Pruebas en "onInitFn"', () => {
  test('Dado que local storage está vacio, el user recuperado debe ser igual al mock de usuario no logeado.', () => {
    const result = onInitFn();
    expect(result).toStrictEqual(mocklocalStorageNotLoggedUser);
  });
  test('Dado que local storage está ocupado, el user recuperado debe ser igual al mock', () => {
    localStorage.setItem(
      'user',
      JSON.stringify({ logged: true, name: 'manuel' })
    );
    const result = onInitFn();
    expect(result).toStrictEqual(mocklocalStorageLoggedUser);
  });
});
