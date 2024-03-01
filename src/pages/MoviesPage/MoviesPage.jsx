import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MoviesSearchForm from 'components/MoviesSearchForm/MoviesSearchForm';
import MoviesList from 'components/MoviesList/MoviesList';
import { getSearchQuery } from 'api/theMoviedAPI';

const MoviesPage = () => {
  const [searchMowies, setSearchMowies] = useState([]);
  const [searchQuery, ] = useSearchParams();

  console.log('searchQuery', searchQuery)

  

  
  const query = searchQuery.get('query')
  console.log('ddd', query)

  useEffect(() => {

    const searchFilms = async () => {
      console.log('ddd2', query)
      const data = await getSearchQuery(query);
      console.log('data2', data)
      setSearchMowies(data.data.results);
    };

    searchFilms()

  }, [searchQuery, query]);

  return (
    <>
      <MoviesSearchForm />
      {searchMowies && <MoviesList collection={searchMowies} />}
    </>
  );
};

export default MoviesPage;
