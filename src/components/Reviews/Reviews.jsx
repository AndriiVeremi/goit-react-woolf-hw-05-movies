import { getMoviesReviews } from 'api/theMoviedAPI';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    try {
      const getReviews = async () => {
        const data = await getMoviesReviews(movId);
        console.log('rewiews', data.data.results);
        setReviews(data.data.results);
      };

      getReviews();
    } catch (error) {}
  }, [movId]);

  return (
    <div>
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
