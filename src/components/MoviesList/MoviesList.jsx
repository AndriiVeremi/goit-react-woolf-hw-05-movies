import MoviesListItem from '../MoviesListItem/MoviesListItem';

const MoviesList = ({ collection }) => {
  console.log('collection', collection);
  return (
    <ul>
      {collection.map(({ id, title, overview, poster_path }) => (
        <MoviesListItem id={id} title={title} overview={overview} poster={poster_path} />
      ))}
    </ul>
  );
};

export default MoviesList;
