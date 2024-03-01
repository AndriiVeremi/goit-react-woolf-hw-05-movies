import { useState } from 'react';
import { getTrendingDay } from '../../api/theMoviedAPI';
import MoviesList from '../../components/MoviesList/MoviesList';

const HomePage = () => {
  const [moviesTrending, setMoviesTrending] = useState([]);
  const [error, setError] = useState(null);

  const trending = async () => {
    try {
      const data = await getTrendingDay();
      setMoviesTrending(data.data.results);
    } catch (error) {
      console.log(error)
      setError(error);
    }
  };

  if (moviesTrending.length === 0) {
    trending();
  }

  return (
    <div>
      {error && <h1>error</h1>}
      <h1>Trenting today</h1>
      <MoviesList collection={moviesTrending} />
    </div>
  );
};

export default HomePage;
