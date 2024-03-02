import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MoviesSearchForm from 'components/MoviesSearchForm/MoviesSearchForm';
import MoviesList from 'components/MoviesList/MoviesList';
import { getSearchQuery } from 'api/theMoviedAPI';

const MoviesPage = () => {
  const [searchMowies, setSearchMowies] = useState([]);
  const [error, setError] = useState(null);
  const [searchQuery,  ] = useSearchParams();

  const query = searchQuery.get('query');
console.log('query',query)

  useEffect(() => {
    try {
    
      if (query === null) {
        return;
      }
      setError(null);
      const searchFilms = async () => {
        const data = await getSearchQuery(query);
        setSearchMowies(data.data.results);
      };
      searchFilms();

    } catch (error) {
      console.error(error);
    } finally {
      
    }
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
