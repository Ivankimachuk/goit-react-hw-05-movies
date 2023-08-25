import { Route, Routes } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import Loader from "components/Loader/Loader";
import { StyledNavLink, StyledNav, Container } from './App.styled';

const HomePage = lazy(() => import("pages/HomePage"));
const SearchPage = lazy(() => import("pages/SearchPage"));
const MovieDetails = lazy(() => import("pages/MovieDetails"));
const NotFound = lazy(() => import("pages/NotFound"));



export const App = () => {
  return (
    <Container>
      <header>
        <StyledNav>
          <StyledNavLink to='/'>Home</StyledNavLink>
          <StyledNavLink to='/search-movies'>Movies</StyledNavLink>
        </StyledNav>
      </header>
      <main>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/search-movies' element={<SearchPage />}></Route>
          <Route path='/movies/:movieId/*' element={<MovieDetails />}></Route>
          <Route path='*' element={< NotFound />}></Route>
        </Routes>
        </Suspense>
      </main>
    </Container>
  );
};
