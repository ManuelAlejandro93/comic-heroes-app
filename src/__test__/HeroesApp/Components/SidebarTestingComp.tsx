import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

type NavLinkItem = {
  nombre: string;
  url: string;
};

const navLinks: NavLinkItem[] = [
  { nombre: 'home', url: '/' },
  { nombre: 'about', url: '/about' },
  { nombre: 'marvel', url: '/marvel' },
  { nombre: 'dc', url: '/dc' },
  { nombre: 'search', url: '/search' },
  { nombre: 'search + query params', url: '/search?heroname=superman' },
  { nombre: 'logout', url: '/logout' },
  { nombre: 'login', url: '/login' },
  { nombre: 'quick exit', url: '/quick-exit' }
];

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        {navLinks.map((link, index) => (
          <li key={index}>
            <NavLink to={link.url}>{link.nombre}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

// Creación de componentes de página simples para cada ruta
const Home: React.FC = () => <div>Home Page</div>;
const About: React.FC = () => <div>About Page</div>;
const Marvel: React.FC = () => <div>Marvel Page</div>;
const DC: React.FC = () => <div>DC Page</div>;
const Search: React.FC = () => <div>Search Page</div>;
const Logout: React.FC = () => <div>Logout Page</div>;
const Login: React.FC = () => <div>Login Page</div>;
const QuickExit: React.FC = () => <div>Quick Exit Page</div>;

export const SidebarTestComp = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/about'
          element={<About />}
        />
        <Route
          path='/marvel'
          element={<Marvel />}
        />
        <Route
          path='/dc'
          element={<DC />}
        />
        <Route
          path='/search'
          element={<Search />}
        />
        <Route
          path='/logout'
          element={<Logout />}
        />
        <Route
          path='/login'
          element={<Login />}
        />
        <Route
          path='/quick-exit'
          element={<QuickExit />}
        />
      </Routes>
    </BrowserRouter>
  );
};
