import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { getMoviesDetails } from 'api/theMoviedAPI';
import MoviesDetails from 'components/MoviesDetails/MoviesDetails';

const MoviesPageDetails = () => {
  const { movId } = useParams();
  const [details, setDetails] = useState([]);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const getMovies = async () => {
      try {
        Loading.dots({ svgSize: '250px' });
        setError(null);
        const data = await getMoviesDetails(movId);
        setDetails(data.data);
      } catch (error) {
        setError(error);
        console.error(error);
      } finally {
        Loading.remove();
      }
    };

    getMovies();
  }, [movId]);

  const onGoBack = () => {
    navigate(location.state?.from ?? '/');
  };

  return (
    <>
      <button onClick={onGoBack}>Go back</button>
      {details && <MoviesDetails details={details} />}
      {error && <h2>error: {error}</h2>}
    </>
  );
};

export default MoviesPageDetails;
