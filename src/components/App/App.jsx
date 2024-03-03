import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavLayout from 'layouts/NavLayout';
import { ContainerApp } from './App.styled';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage'));
const MoviesPageDetails = lazy(() => import('pages/MoviesPageDetails/MoviesPageDetails'));
const PageNotFound = lazy(() => import('pages/PageNotFound/PageNotFound'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

// import HomePage from 'pages/HomePage/HomePage';
// import MoviesPage from 'pages/MoviesPage/MoviesPage';
// import MoviesPageDetails from 'pages/MoviesPageDetails/MoviesPageDetails';
// import PageNotFound from 'pages/PageNotFound/PageNotFound';
// import Cast from 'components/Cast/Cast';
// import Reviews from 'components/Reviews/Reviews';

const App = () => {
  return (
    <ContainerApp>
      <Routes>
        <Route path="/" element={<NavLayout />}>
          <Route index element={<Suspense fallback={<h1>loading...</h1>}><HomePage /></Suspense>} />
          <Route path="/movies" element={<Suspense fallback={<h1>loading...</h1>}><MoviesPage /></Suspense>} />
          <Route path="/movies/:movId" element={<Suspense fallback={<h1>loading...</h1>}><MoviesPageDetails /></Suspense>}>
            <Route path="/movies/:movId/cast" element={<Suspense fallback={<h1>loading...</h1>}><Cast /></Suspense>} />
            <Route path="/movies/:movId/reviews" element={<Suspense fallback={<h1>loading...</h1>}><Reviews /></Suspense>} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </ContainerApp>
  );
};

export default App;
