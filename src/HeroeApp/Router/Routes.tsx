import { useContext } from 'react';
import { Route, Routes, useLocation } from 'react-router';
import {
  MarvelPage,
  DCPage,
  ErrorPage,
  AboutPage,
  SearchPage,
  HeroPage,
  SearchQueryParamsPage
} from '@/HeroeApp';
import { AuthContext } from '@/Contexts';
import { LogoutPage, LoginPage, OnTrueLoggedPage } from '@/Auth';

export const HeroRoutes = () => {
  const { authState } = useContext(AuthContext);
  const location = useLocation();
  const lastLocation = `${location.pathname}${location.search ?? ''}`;

  localStorage.setItem('lastLocation', lastLocation);

  return (
    <Routes>
      {authState.logged ? (
        <>
          <Route
            path='/'
            element={<MarvelPage />}
          />
          <Route
            path='/marvel'
            element={<MarvelPage />}
          />
          <Route
            path='/DC'
            element={<DCPage />}
          />
          <Route
            path='/about'
            element={<AboutPage />}
          />
          <Route
            path='/logout'
            element={<LogoutPage />}
          />
          <Route
            path='/searchqueryparams'
            element={<SearchQueryParamsPage />}
          />
          <Route
            path='/search'
            element={<SearchPage />}
          />
          <Route
            path='/hero/:heroID'
            element={<HeroPage />}
          />
          <Route
            path='/login'
            element={<OnTrueLoggedPage />}
          />
        </>
      ) : (
        <>
          <Route
            path='/login'
            element={<LoginPage />}
          />
          <Route
            path='/*'
            element={<ErrorPage />}
          />
        </>
      )}
    </Routes>
  );
};
