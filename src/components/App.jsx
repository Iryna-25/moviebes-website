import { LoginPage } from 'pages/LoginPage';
import { SignUpPage } from 'pages/SingUpPage';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/layout';
import { GlobalStyle } from './GlobalStyle';
import { Loader } from './Loader/Loader';
import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage'));
const MovieReviewPage = lazy(() => import('../pages/MovieReviewPage'));

export const App = () => {
  return (
    <>
    <Suspense fallback={<Loader/>}>
      <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<HomePage />} />
            <Route path='moviespage' element={<MoviesPage />} />
            <Route path='moviespage/:movieId' element={<MovieReviewPage />} />
          </Route>       
          <Route path='/loginpage' element={<LoginPage />} />
          <Route path='/signuppage' element={<SignUpPage />} />    
      </Routes>
    </Suspense>
    <GlobalStyle/>
    </>
  );
};


