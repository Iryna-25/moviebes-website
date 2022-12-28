import { HomePage } from 'pages/HomePage';
import { LoginPage } from 'pages/LoginPage';
import { MoviesPage } from 'pages/MoviesPage';
import { SignUpPage } from 'pages/SingUpPage';
import { MovieReviewPage } from 'pages/MovieReviewPage';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/layout';


export const App = () => {
  return (
    <>

    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='homepage' element={<HomePage />} />
            <Route path='moviespage' element={<MoviesPage />} />
            <Route path='moviereviewpage' element={<MovieReviewPage />} />
            <Route path='loginpage' element={<LoginPage />} />
            <Route path='signuppage' element={<SignUpPage />} />
          </Route>          
      </Routes>
    </Suspense>
    
    </>
  );
};


