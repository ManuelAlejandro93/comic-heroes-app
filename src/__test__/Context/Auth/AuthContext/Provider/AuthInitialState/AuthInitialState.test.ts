import { AuthStateType, authInitialState } from '@/Contexts';

const mockAuthInitialState: AuthStateType = {
  logged: false,
  name: null
};

describe('Pruebas en AuthInitialState', () => {
  test('initial state debe ser igual a mockAuthInitialState', () => {
    expect(authInitialState).toStrictEqual(mockAuthInitialState);
  });
});
