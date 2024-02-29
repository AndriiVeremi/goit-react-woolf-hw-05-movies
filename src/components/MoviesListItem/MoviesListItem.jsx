const MoviesListItem = ({
  id,
  title,
  overview,
  poster,
}) => {
  return (
    <li key={id}>
      <img
        src={`https://image.tmdb.org/t/p/original/${poster}`}
        alt={title}
      />
      <h2>{title}</h2>
      <p>{overview}</p>
    </li>
  );
};

export default MoviesListItem
