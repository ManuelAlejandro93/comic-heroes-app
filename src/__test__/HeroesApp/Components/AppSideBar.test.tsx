import {
  /* fireEvent */ fireEvent,
  render,
  screen
} from '@testing-library/react';
import { SidebarTestComp } from './SidebarTestingComp';

describe('Pruebas en sidebar. Simuladísimos.', () => {
  test('debe ser renderizable', () => {
    const { container } = render(<SidebarTestComp></SidebarTestComp>);
    expect(container).toBeTruthy();
  });
  test('debe coincidir con el snapshot.', () => {
    const { container } = render(<SidebarTestComp></SidebarTestComp>);
    expect(container).toMatchSnapshot();
  });
  test('al darle click a "home" debe ir a una locación que tenga un div con el texto "Home Page"', () => {
    const { container } = render(<SidebarTestComp></SidebarTestComp>);
    const goHomeButton = screen.getByText('home');

    fireEvent.click(goHomeButton);

    expect(container.querySelector('div')?.innerHTML).toBe('Home Page');
  });
  test('al darle click a "about" debe ir a una locación que tenga un div con el texto "About Page"', () => {
    const { container } = render(<SidebarTestComp></SidebarTestComp>);
    const goAboutPage = screen.getByText('about');

    fireEvent.click(goAboutPage);

    expect(container.querySelector('div')?.innerHTML).toBe('About Page');
  });
  test('al darle click a "marvel" debe ir a una locación que tenga un div con el texto "Marvel Page"', () => {
    const { container } = render(<SidebarTestComp></SidebarTestComp>);
    const goMarvelButton = screen.getByText('marvel');

    fireEvent.click(goMarvelButton);

    expect(container.querySelector('div')?.innerHTML).toBe('Marvel Page');
  });
  test('al darle click a "dc" debe ir a una locación que tenga un div con el texto "DC Page"', () => {
    const { container } = render(<SidebarTestComp></SidebarTestComp>);
    const goDCButton = screen.getByText('dc');

    fireEvent.click(goDCButton);

    expect(container.querySelector('div')?.innerHTML).toBe('DC Page');
  });
  test('al darle click a "search" debe ir a una locación que tenga un div con el texto "Search Page"', () => {
    const { container } = render(<SidebarTestComp></SidebarTestComp>);
    const goSearchButton = screen.getByText('search');

    fireEvent.click(goSearchButton);

    expect(container.querySelector('div')?.innerHTML).toBe('Search Page');
  });
  test('al darle click a "Logout" debe ir a una locación que tenga un div con el texto "Logout Page"', () => {
    const { container } = render(<SidebarTestComp></SidebarTestComp>);
    const goLogoutButton = screen.getByText('logout');

    fireEvent.click(goLogoutButton);

    expect(container.querySelector('div')?.innerHTML).toBe('Logout Page');
  });
  test('al darle click a "Login" debe ir a una locación que tenga un div con el texto "Login Page"', () => {
    const { container } = render(<SidebarTestComp></SidebarTestComp>);
    const goLoginButton = screen.getByText('login');

    fireEvent.click(goLoginButton);

    expect(container.querySelector('div')?.innerHTML).toBe('Login Page');
  });
  test('al darle click a "quick exit" debe ir a una locación que tenga un div con el texto " Page"', () => {
    const { container } = render(<SidebarTestComp></SidebarTestComp>);
    const goQuickExitButton = screen.getByText('quick exit');

    fireEvent.click(goQuickExitButton);

    expect(container.querySelector('div')?.innerHTML).toBe('Quick Exit Page');
  });
});
