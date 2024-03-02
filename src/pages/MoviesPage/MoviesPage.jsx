import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import MoviesSearchForm from 'components/MoviesSearchForm/MoviesSearchForm';
import MoviesList from 'components/MoviesList/MoviesList';
import { getSearchQuery } from 'api/theMoviedAPI';

const MoviesPage = () => {
  const [searchMowies, setSearchMowies] = useState([]);
  const [error, setError] = useState(null);
  const [searchQuery] = useSearchParams();

  const query = searchQuery.get('query');

  useEffect(() => {
    if (query === null) {
      return;
    }
    const searchFilms = async () => {
      Loading.dots({ svgSize: '250px' });
      setError(null);
      try {
        const data = await getSearchQuery(query);
        setSearchMowies(data.data.results);
      } catch (error) {
        setError(error);
        console.error(error);
      } finally {
        Loading.remove();
      }
    };

    searchFilms();
  }, [query]);

  return (
    <div>
      <MoviesSearchForm />
      {error && <h2>error: {error}</h2>}
      {searchMowies && <MoviesList collection={searchMowies} />}
    </div>
  );
};

export default MoviesPage;
