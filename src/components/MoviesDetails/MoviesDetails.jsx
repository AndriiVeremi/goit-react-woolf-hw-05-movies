import { Link, Outlet } from 'react-router-dom';

const MoviesDetails = ({ details }) => {
  const {
    title,
    original_name,
    overview,
    poster_path,
    vote_average,
    genres,
  } = details;

  return (
    <>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt={title}
          width={'290px'}
          height={'400px'}
        />
        <h2>{title ? title : original_name}</h2>
        <p>User score: {Math.round(vote_average * 10)}%</p>
        <p>Overview: {overview}</p>
        <p>Genres: {genres && genres.map(item => item.name)}</p>
      </div>
      <hr />
      <div>
        <h2>Additional information</h2>
        <ul>
          <li>
            <Link to={'cast'}>Cast</Link>
          </li>
          <li>
            <Link to={'reviews'}>Reviers</Link>
          </li>
        </ul>
        <hr />
        <Outlet />
      </div>
    </>
  );
};

export default MoviesDetails;
