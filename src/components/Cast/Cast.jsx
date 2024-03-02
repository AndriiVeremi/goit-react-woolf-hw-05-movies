import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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

  useEffect(() => {
    try {
      const getCast = async () => {
        const data = await getMoviesCats(movId);
        setCast(data.data.cast);
      };

      getCast();
    } catch (error) {
      console.error(error);
    }
  }, [movId]);

  return (
    <div>
      <CastList>
        {cast.map(({ id, profile_path, character, name }) => (
          <CastItem key={id}>
            <img
              src={`https://image.tmdb.org/t/p/original/${profile_path}`}
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
