import { useEffect, useState } from 'react';
import { getTrendingDay } from '../../api/theMoviedAPI';
import MoviesList from '../../components/MoviesList/MoviesList';
import { Title } from './HomePage.styled';

const HomePage = () => {
  const [moviesTrending, setMoviesTrending] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const trendingMovies = async () => {
      try {
        setError(null);
        const data = await getTrendingDay();
        setMoviesTrending(data.data.results);
      } catch (error) {
        console.error(error);
      } finally {
      }
    };

    trendingMovies();
  }, []);

  return (
    <div>
      <Title>Trenting today</Title>
      {error && <h2>error: {error}</h2>}
      <MoviesList collection={moviesTrending} />
    </div>
  );
};

export default HomePage;
