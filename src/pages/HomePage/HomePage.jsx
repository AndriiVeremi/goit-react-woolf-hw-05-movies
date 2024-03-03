import { useEffect, useState } from 'react';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { getTrendingDay } from '../../api/theMoviedAPI';
import MoviesList from '../../components/MoviesList/MoviesList';
import { Title } from './HomePage.styled';

const HomePage = () => {
  const [moviesTrending, setMoviesTrending] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const trendingMovies = async () => {
      Loading.dots({ svgSize: '250px' });
      setError(null);
      try {
        const data = await getTrendingDay();
        setMoviesTrending(data.data.results);
      } catch (error) {
        setError(error);
        console.error(error);
      } finally {
        Loading.remove();
      }
    };

    trendingMovies();
  }, []);

  const rootBg = document.querySelector('body');
  rootBg.style.backgroundImage = "none";


  return (
    <div>
      <Title>Trenting today</Title>
      {error && <h2>error: {error}</h2>}
      {moviesTrending && <MoviesList collection={moviesTrending} />}
    </div>
  );
};

export default HomePage;
