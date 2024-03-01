import { Route, Routes } from 'react-router-dom';
import NavLayout from 'layouts/NavLayout';
import HomePage from 'pages/HomePage/HomePage';
import MoviesPage from 'pages/MoviesPage/MoviesPage';
import MoviesPageDetails from 'pages/MoviesPageDetails/MoviesPageDetails';
import { ContainerApp } from './App.styled';

const App = () => {
  return (
    <ContainerApp>
      <Routes>
        <Route path="/" element={<NavLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movId" element={<MoviesPageDetails />} />
        </Route>
        <Route path="*" element={<p>Not found</p>} />
      </Routes>
    </ContainerApp>
  );
};

export default App;
