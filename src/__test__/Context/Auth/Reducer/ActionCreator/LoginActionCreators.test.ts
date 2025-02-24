import { authLoginActionCreatorFn } from '@/Contexts';

describe('Pruebas en action creator authLoginActionCreatorFn', () => {
  test('Debe ser una función.', () => {
    const mockfn = jest.fn(authLoginActionCreatorFn);
    mockfn('manuel');
    expect(mockfn).toHaveBeenCalled();
  });
  test('Llamada con el argumento "manuel", debe tener una llamada al valor "manuel"', () => {
    const mockfn = jest.fn(authLoginActionCreatorFn);
    mockfn('manuel');
    expect(mockfn).toHaveBeenCalledWith('manuel');
  });
  test('Al ser invocada con el argumento "manuel" debe devolver una action del tipo reducerAction', () => {
    const mockResult = {
      payload: { logged: true, name: 'manuel' },
      type: '[Auth]-Login'
    };

    const result = authLoginActionCreatorFn('manuel');

    expect(result).toStrictEqual(mockResult);
  });
  test('Al ser invocada con el argumento "Rodri" debe devolver un objeto igual al mock', () => {
    const mockResult = {
      payload: { logged: true, name: 'Rodri' },
      type: '[Auth]-Login'
    };

    const result = authLoginActionCreatorFn('Rodri');

    expect(result).toStrictEqual(mockResult);
  });
  test('Al ser invocada con el cualquier argumento debe establecer el valor de logged a true', () => {
    const result = authLoginActionCreatorFn('cualquier nombre');

    expect(result.payload.logged).toEqual(true);
  });
  test(`Debe devolver el type '[Auth]-Login'`, () => {
    const result = authLoginActionCreatorFn('cualquier nombre');

    expect(result.type).toEqual('[Auth]-Login');
  });
  test(`Debe asignar a name el valor del argumento ingresado`, () => {
    const result = authLoginActionCreatorFn('cristian');

    expect(result.payload.name).toEqual('cristian');
  });
  // test(`No Debe asignar sin un argumento ingresado`, () => {
  //   const mockfn = jest.fn(authLoginActionCreatorFn);
  //   mockfn();
  //   expect(mockfn).toHaveBeenCalled();
  // });
});
