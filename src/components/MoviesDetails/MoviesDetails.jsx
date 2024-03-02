const MoviesDetails = ({ details }) => {
  const { title, original_name, overview, poster_path, popularity } = details;
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt={title}
        width={'290px'}
        height={'400px'}
      />
      <h2>{title ? title : original_name}</h2>
      <p>{popularity}</p>
      <p>{overview}</p>
    </div>
  );
};

export default MoviesDetails;
