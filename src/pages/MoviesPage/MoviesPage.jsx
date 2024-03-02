import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MoviesSearchForm from 'components/MoviesSearchForm/MoviesSearchForm';
import MoviesList from 'components/MoviesList/MoviesList';
import { getSearchQuery } from 'api/theMoviedAPI';

const MoviesPage = () => {
  const [searchMowies, setSearchMowies] = useState([]);
  const [error, setError] = useState([]);
  const [searchQuery,  ] = useSearchParams();

  const query = searchQuery.get('query');

  useEffect(() => {
    try {
    
      if (query.length === 0) {
        return;
      }

      const searchFilms = async () => {
        const data = await getSearchQuery(query);
        setSearchMowies(data.data.results);
      };
      searchFilms();

    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      
    }
  }, [query]);

  return (
    <div>
      <MoviesSearchForm />
      {error && <>{error}</>} 
      {searchMowies && <MoviesList collection={searchMowies} />}
    </div>
  );
};

export default MoviesPage;
