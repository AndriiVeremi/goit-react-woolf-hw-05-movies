import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesDetails } from 'api/theMoviedAPI';
import MoviesDetails from 'components/MoviesDetails/MoviesDetails';

const MoviesPageDetails = () => {
  const { movId } = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    try {
      const getMovies = async () => {
        const data = await getMoviesDetails(movId);
        setDetails(data.data);
      };

      getMovies();
    } catch (error) {
      console.error(error);
    } finally {
    }
  }, [movId]);

  return <MoviesDetails details={details} />;
};

export default MoviesPageDetails;
