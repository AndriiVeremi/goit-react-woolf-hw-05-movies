import { useEffect, useState } from 'react';
import { getTrendingDay } from '../../api/theMoviedAPI';
import MoviesList from '../../components/MoviesList/MoviesList';

const HomePage = () => {
  const [moviesTrending, setMoviesTrending] = useState([]);


  useEffect(() => {
    const trendingMovies = async () => {
      try {
        const data = await getTrendingDay();
        setMoviesTrending(data.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    trendingMovies();

  }, []);

  return (
    <div>
      <h1>Trenting today</h1>
      <MoviesList collection={moviesTrending} />
    </div>
  );
};

export default HomePage;
