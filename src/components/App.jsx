import { HomePage } from 'pages/HomePage';
import { LoginPage } from 'pages/LoginPage';
import { MoviesPage } from 'pages/MoviesPage';
import { SignUpPage } from 'pages/SingUpPage';
import { MovieReviewPage } from 'pages/MovieReviewPage';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/layout';
import { GlobalStyle } from './GlobalStyle';
import { Loader } from './Loader/Loader';


export const App = () => {
  return (
    <>
    <Suspense fallback={<Loader/>}>
      <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<HomePage />} />
            <Route path='moviespage' element={<MoviesPage />} />
            <Route path='moviespage/:filmId' element={<MovieReviewPage />} />
          </Route>             
          <Route path='loginpage' element={<LoginPage />} />
          <Route path='signuppage' element={<SignUpPage />} />         
      </Routes>
    </Suspense>
    <GlobalStyle/>
    </>
  );
};


