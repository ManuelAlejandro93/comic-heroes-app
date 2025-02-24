import { fireEvent, render, screen } from '@testing-library/react';
import { PrivateRoutesSynthTestComp } from './PrivateRoutesSynthTestComp';

describe('Private Routes Testing', () => {
  test('Debe ser renderizable', () => {
    // test('Debe coincidir con el snapshot', () => {
    //   const { container } = render(
    //     <PrivateRoutesSynthTestComp></PrivateRoutesSynthTestComp>
    //   );
    //   expect(container).toMatchSnapshot();
    // });

    const { container } = render(
      <PrivateRoutesSynthTestComp></PrivateRoutesSynthTestComp>
    );
    expect(container).toBeTruthy();
  });

  test('Con un valor auth=true la ruta automática "/" raíz, el router debe llevar a la página Home.', () => {
    const {} = render(
      <PrivateRoutesSynthTestComp></PrivateRoutesSynthTestComp>
    );
    expect(screen.getByText('Home Page')).toBeInTheDocument();
  });

  test('Con un valor auth=true y click sobre el boton "home", el router debería llevar a la página "Home Page"', () => {
    const { container } = render(
      <PrivateRoutesSynthTestComp></PrivateRoutesSynthTestComp>
    );

    const goHomeButton = screen.getByText('home');

    expect(goHomeButton.getAttribute('href')).toBe('/');

    fireEvent.click(goHomeButton);

    expect(container.querySelector('div')?.innerHTML).toBe('Home Page');
  });
  test('Con un valor auth=true y click sobre el boton "marvel", el router debería llevar a la página "Marvel Page"', () => {
    const { container } = render(
      <PrivateRoutesSynthTestComp></PrivateRoutesSynthTestComp>
    );

    const goHomeButton = screen.getByText('marvel');

    expect(goHomeButton.getAttribute('href')).toBe('/marvel');

    fireEvent.click(goHomeButton);

    expect(container.querySelector('div')?.innerHTML).toBe('Marvel Page');
  });

  test('Con un valor auth=true y click sobre el boton "dc", el router debería llevar a la página "DC Page"', () => {
    const { container } = render(
      <PrivateRoutesSynthTestComp></PrivateRoutesSynthTestComp>
    );

    const goHomeButton = screen.getByText('dc');

    expect(goHomeButton.getAttribute('href')).toBe('/dc');

    fireEvent.click(goHomeButton);

    expect(container.querySelector('div')?.innerHTML).toBe('DC Page');
  });
  test('Con un valor auth=true y click sobre el boton "about", el router debería llevar a la página "About Page"', () => {
    const { container } = render(
      <PrivateRoutesSynthTestComp></PrivateRoutesSynthTestComp>
    );

    const goHomeButton = screen.getByText('about');

    expect(goHomeButton.getAttribute('href')).toBe('/about');

    fireEvent.click(goHomeButton);

    expect(container.querySelector('div')?.innerHTML).toBe('About Page');
  });
  test('Con un valor auth=true y click sobre el boton "about", el router debería llevar a la página "About Page"', () => {
    const { container } = render(
      <PrivateRoutesSynthTestComp></PrivateRoutesSynthTestComp>
    );

    const goHomeButton = screen.getByText('about');

    expect(goHomeButton.getAttribute('href')).toBe('/about');

    fireEvent.click(goHomeButton);

    expect(container.querySelector('div')?.innerHTML).toBe('About Page');
  });
  test('Con un valor auth=true y click sobre el boton "logout", el router debería llevar a la página "Logout Page" y el navbar tener un <span/> que contiene el contenido "/logout"', () => {
    const { container } = render(
      <PrivateRoutesSynthTestComp></PrivateRoutesSynthTestComp>
    );

    const goLogoutButton = screen.getByText('logout');

    expect(goLogoutButton.getAttribute('href')).toBe('/logout');

    fireEvent.click(goLogoutButton);

    expect(container.querySelector('span')?.innerHTML).toBe('/logout');
  });
  test('Con un valor auth=true y click sobre el boton "quick exit", el router debería llevar a la página "Quick Exit Page" y el navbar tener un <span/> que contiene el contenido "/logout"', () => {
    const { container } = render(
      <PrivateRoutesSynthTestComp></PrivateRoutesSynthTestComp>
    );

    const goQuickExitButton = screen.getByText('quick exit');

    expect(goQuickExitButton.getAttribute('href')).toBe('/quick-exit');

    fireEvent.click(goQuickExitButton);

    expect(container.querySelector('span')?.innerHTML).toBe('/quick-exit');
  });
  test('Con un valor auth=true y click sobre el boton "ruta-cacorra", el router debería llevar a la página "Error" y el navbar tener un <span/> que contiene el contenido "/ruta-cacorra"', () => {
    const { container } = render(
      <PrivateRoutesSynthTestComp></PrivateRoutesSynthTestComp>
    );

    const goRutaCacorraButton = screen.getByText('ruta-cacorra');

    expect(goRutaCacorraButton).toBeInTheDocument();

    fireEvent.click(goRutaCacorraButton);

    expect(container.querySelector('span')?.innerHTML).toBe('/ruta-cacorra');
  });
});
