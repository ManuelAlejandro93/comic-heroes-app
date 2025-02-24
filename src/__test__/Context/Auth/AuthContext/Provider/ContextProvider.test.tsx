import { AuthProvider } from '@/Contexts';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { ContextTestComp } from './ContextTestComp';

describe('Pruebas en el contexto AuthProvider', () => {
  test('debe proveer coincidir con el snapshot', () => {
    const { container } = render(
      <AuthProvider>
        <ContextTestComp></ContextTestComp>
      </AuthProvider>
    );
    expect(container).toMatchSnapshot();
  });

  test('debe traer con useContext el valor del estado auth inicial', () => {
    const { container } = render(
      <AuthProvider>
        <ContextTestComp></ContextTestComp>
      </AuthProvider>
    );
    expect(container.querySelector('p')?.innerHTML).toBe('null');
    expect(screen.getByText('false').innerHTML).toBe('false');
  });

  test('Al darle click en el botón "click en login" deben cambiar los valores a valores de login.', () => {
    const { container } = render(
      <AuthProvider>
        <ContextTestComp></ContextTestComp>
      </AuthProvider>
    );

    expect(container.querySelector('p')?.innerHTML).toBe('null');

    const botonLogin = container.querySelectorAll('button')[0];
    // const botonLogout = container.querySelectorAll('button')[1];

    act(() => {
      fireEvent.click(botonLogin);
    });

    expect(container.querySelectorAll('p')[0]?.innerHTML).toBe('Manuel');
    expect(container.querySelectorAll('p')[1]?.innerHTML).toBe('true');
  });

  test('Al loggerase y luego desloggearse deben cambiar los valores de valores de loggeado a valores de desloggeado.', () => {
    const { container } = render(
      <AuthProvider>
        <ContextTestComp></ContextTestComp>
      </AuthProvider>
    );

    const botonLogout = container.querySelectorAll('button')[1];

    expect(container.querySelectorAll('p')[0]?.innerHTML).toBe('Manuel');
    expect(container.querySelectorAll('p')[1]?.innerHTML).toBe('true');

    act(() => {
      fireEvent.click(botonLogout);
    });

    expect(container.querySelectorAll('p')[0]?.innerHTML).toBe('');
    expect(container.querySelectorAll('p')[1]?.innerHTML).toBe('false');
  });
});
