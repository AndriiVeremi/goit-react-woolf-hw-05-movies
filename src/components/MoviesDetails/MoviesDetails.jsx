import { Outlet } from 'react-router-dom';
import { checkImg } from 'utils/checkImg';
import {
  DetailsWrapper,
  Details,
  DetailsTitle,
  DetailsInfo,
  DetailsInfoBord,
  AdditionalWrapper,
  AdditionalTitle,
  AdditionalList,
  AdditionalLink,
} from './MoviesDetails.styled';

const MoviesDetails = ({ details }) => {
  const {
    title,
    original_name,
    overview,
    poster_path,
    backdrop_path,
    vote_average,
    genres,
  } = details;

  const rootBg = document.querySelector('body');
  rootBg.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${backdrop_path})`;
  rootBg.style.backgroundSize = 'cover';
  rootBg.style.backgroundRepeat = 'no-repeat';
  rootBg.style.backgroundAttachment = 'fixed';

  return (
    <DetailsWrapper>
      <Details>
        <img
          src={`${checkImg(poster_path)}`}
          alt={title}
          width={'400px'}
          height={'600px'}
        />
        <div>
          <DetailsTitle>{title ? title : original_name}</DetailsTitle>
          <DetailsInfo>
            Overview: <DetailsInfoBord>{overview}</DetailsInfoBord>
          </DetailsInfo>
          <DetailsInfo>
            User score:{' '}
            <DetailsInfoBord>{Math.round(vote_average * 10)}%</DetailsInfoBord>
          </DetailsInfo>
          <DetailsInfo>
            Genres:{' '}
            <DetailsInfoBord>
              {genres &&
                genres.map(item => {
                  return <p key={item.id}>{item.name}</p>;
                })}
            </DetailsInfoBord>
          </DetailsInfo>
        </div>
      </Details>

      <AdditionalWrapper>
        <AdditionalTitle>Additional information</AdditionalTitle>
        <AdditionalList>
          <AdditionalLink to={'cast'}>Cast</AdditionalLink>

          <AdditionalLink to={'reviews'}>Reviers</AdditionalLink>
        </AdditionalList>
        <Outlet />
      </AdditionalWrapper>
    </DetailsWrapper>
  );
};

export default MoviesDetails;
