import { useState } from 'react';
import getTrendingDay from '../../api/theMoviedAPI';
import MoviesList from '../../components/MoviesList/MoviesList';

const HomePage = () => {
  const [moviTrending, setMoviTrending] = useState([]);
  const [error, setError] = useState(null);

  const trending = async () => {
    try {
      const data = await getTrendingDay();
      console.log('data', data.data.results);
      setMoviTrending(data.data.results);
    } catch (error) {
        setError(error)
    }
  };

  if (moviTrending.length === 0) {
    trending();
  }

  return (
    <div>
        {error && <h1>error</h1>}
      <h1>Trenting today</h1>
      <MoviesList collection={moviTrending} />
    </div>
  );
};

export default HomePage;
