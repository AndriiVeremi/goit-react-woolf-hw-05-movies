import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { checkImg } from 'utils/checkImg';
import { getMoviesCats } from 'api/theMoviedAPI';
import {
  CastList,
  CastItem,
  CastDesc,
  CastName,
  CastText,
} from './Cast.styled';

const Cast = () => {
  const { movId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCast = async () => {
      try {
        Loading.dots({ svgSize: '250px' });
        setError(null);
        const data = await getMoviesCats(movId);
        setCast(data.data.cast);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        Loading.remove();
      }
    };

    getCast();
  }, [movId]);

  return (
    <div>
      {error && <h2>error: {error}</h2>}
      <CastList>
        {cast.map(({ id, profile_path, character, name }) => (
          <CastItem key={id}>
            <img
              src={`${checkImg(profile_path)}`}
              alt={name}
              width={'120px'}
              height={'170px'}
            />
            <CastDesc>
              <CastText>Character name:</CastText>
              <CastName>{character}</CastName>
            </CastDesc>
            <CastDesc>
              <CastText>Original name:</CastText>
              <CastName>{name}</CastName>
            </CastDesc>
          </CastItem>
        ))}
      </CastList>
    </div>
  );
};

export default Cast;
