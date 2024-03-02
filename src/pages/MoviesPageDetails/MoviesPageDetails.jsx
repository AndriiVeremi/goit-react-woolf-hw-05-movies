import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesDetails } from 'api/theMoviedAPI';
import MoviesDetails from 'components/MoviesDetails/MoviesDetails';

const MoviesPageDetails = () => {

  const { movId } = useParams();
 const [details, setDetails] = useState([])

  useEffect(() => {
    const getMovies = async () => {
      const data = await getMoviesDetails(movId);
      console.log('dataId', data.data);
      setDetails(data.data)
    };

    getMovies()
  }, [movId]);

  return <MoviesDetails details={details} />;
};

export default MoviesPageDetails;
