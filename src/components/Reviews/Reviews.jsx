import { getMoviesReviews } from 'api/theMoviedAPI';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

const Reviews = () => {
  const { movId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getReviews = async () => {
      try {
        Loading.dots({ svgSize: '250px' });
        setError(null);

        const data = await getMoviesReviews(movId);
        setReviews(data.data.results);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        Loading.remove();
      }
    };

    getReviews();
  }, [movId]);

  return (
    <div>
      {error && <h2>error: {error}</h2>}
      <ul>
        {reviews.map(({ author, content, created_at }) => (
          <li>
            <p>{author}</p>
            <p>{created_at}</p>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
