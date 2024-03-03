import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getMoviesReviews } from 'api/theMoviedAPI';
import { ReviewsItem, ReviewsList, ReviewsWrap, ReviewsAuthor, ReviewsText } from './Reviews.styled';

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
        
        if(data.data.results.length === 0) {
          Notify.info('Sorry, no reviews');
          return
        }
        
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
      <ReviewsList>
        {reviews.map(({ author, content, created_at }) => (
          <ReviewsItem key={author}>
            <ReviewsWrap>
            <ReviewsAuthor>{author}</ReviewsAuthor>
            <p>{created_at}</p>
            </ReviewsWrap>
            <ReviewsText>{content}</ReviewsText>
          </ReviewsItem>
        ))}
      </ReviewsList>
    </div>
  );
};

export default Reviews;
