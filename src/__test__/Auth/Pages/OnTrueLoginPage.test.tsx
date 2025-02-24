import { OnTrueLoggedPage } from '@/Auth';
import { render } from '@testing-library/react';

describe('pruebas en "OnTrueLoggedPage"', () => {
  test('Debe ser renderizable', () => {
    const { container } = render(<OnTrueLoggedPage />);
    expect(container).toBeTruthy();
  });
  test('Debe coincidir con el snapshot', () => {
    const { container } = render(<OnTrueLoggedPage />);
    expect(container).toMatchSnapshot();
  });
  test('Debe tener un h1 blanco que diga Welcome to Login page', () => {
    const { container } = render(<OnTrueLoggedPage />);

    expect(container.querySelector('h1')?.innerHTML).toBe(
      'Welcome to Login page'
    );
    expect(
      container.querySelector('h1')?.className.includes('text-white')
    ).toBe(true);
  });
});
