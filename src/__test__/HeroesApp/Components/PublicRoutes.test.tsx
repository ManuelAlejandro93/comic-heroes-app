import { fireEvent, render, screen } from '@testing-library/react';
import { PublicRoutesSynthTestComp } from './PublicRoutesSynthTestComp';

describe('Public Routes Testing', () => {
  test('Debe ser renderizable', () => {
    const { container } = render(
      <PublicRoutesSynthTestComp></PublicRoutesSynthTestComp>
    );
    expect(container).toBeTruthy();
  });
  // test('Debe coincidir con el snapshot', () => {
  //   const { container } = render(
  //     <PublicRoutesSynthTestComp></PublicRoutesSynthTestComp>
  //   );
  //   expect(container).toMatchSnapshot();
  // });
  test('Con un valor auth=false cualquier redireccionamiento debe llevar a la pagina login', () => {
    const {
      /* container */
    } = render(<PublicRoutesSynthTestComp></PublicRoutesSynthTestComp>);

    const homeButton = screen.getByText('home');
    const aboutButton = screen.getByText('about');
    const marvelButton = screen.getByText('marvel');
    const dcButton = screen.getByText('dc');

    fireEvent.click(homeButton);
    expect(screen.getByText('Login Page')).toBeInTheDocument();

    fireEvent.click(aboutButton);
    expect(screen.getByText('Login Page')).toBeInTheDocument();

    fireEvent.click(marvelButton);
    expect(screen.getByText('Login Page')).toBeInTheDocument();
    fireEvent.click(dcButton);
    expect(screen.getByText('Login Page')).toBeInTheDocument();
  });
});
