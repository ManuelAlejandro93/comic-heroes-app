import { authLogoutActionCreatorFn } from '@/Contexts';

describe('Pruebas en action creator authLogoutActionCreatorFn', () => {
  //?.........................................................
  //?.........................................................
  test('Debe ser una función.', () => {
    const mockfn = jest.fn(authLogoutActionCreatorFn);
    mockfn('manuel');
    expect(mockfn).toHaveBeenCalled();
  });
  //?.........................................................
  //?.........................................................
  // test(`No debe funcionar sin un argumento ingresado`, () => {
  //   const mockfn = jest.fn(authLoginActionCreatorFn);
  //   mockfn();
  //   expect(mockfn).toHaveBeenCalled();
  // });
  //?.........................................................
  //?.........................................................
  test('Llamada con el argumento "manuel", debe tener una llamada al valor "manuel"', () => {
    const mockfn = jest.fn(authLogoutActionCreatorFn);
    mockfn('manuel');
    expect(mockfn).toHaveBeenCalledWith('manuel');
  });
  //?.........................................................
  //?.........................................................
  test('Debe funcionar sin ingresar ningún argumento.', () => {
    const mockfn = jest.fn(authLogoutActionCreatorFn);
    mockfn('manuel');
    expect(mockfn).toHaveBeenCalled();
  });
  //?.........................................................
  //?.........................................................
  test(`Debe asignar a name el valor del argumento ingresado`, () => {
    const result = authLogoutActionCreatorFn('cristian');

    expect(result.payload.name).toEqual('cristian');
  });
  //?.........................................................
  //?.........................................................
  test('Al ser invocada con el argumento "manuel" debe devolver una action del tipo logout-reducer-action', () => {
    const mockResult = {
      payload: { logged: false, name: 'manuel' },
      type: '[Auth]-Logout'
    };

    const result = authLogoutActionCreatorFn('manuel');

    expect(result).toStrictEqual(mockResult);
  });
  test('Al ser invocada sin argumento debe devolver una action del tipo logout-reducer-action', () => {
    const mockResult = {
      payload: { logged: false, name: '' },
      type: '[Auth]-Logout'
    };

    const result = authLogoutActionCreatorFn();

    expect(result).toStrictEqual(mockResult);
  });
  //?.........................................................
  //?.........................................................

  test('Al ser invocada con el cualquier argumento debe establecer el valor de logged a false', () => {
    const result = authLogoutActionCreatorFn('cualquier nombre');

    expect(result.payload.logged).toEqual(false);
  });
  //?.........................................................
  //?.........................................................
  test(`al ser llamada debe devolver la propiedad type con  valor: '[Auth]-Logout'`, () => {
    const result = authLogoutActionCreatorFn('cualquier nombre');

    expect(result.type).toEqual('[Auth]-Logout');
  });
  //?.........................................................
  //?.........................................................
});
