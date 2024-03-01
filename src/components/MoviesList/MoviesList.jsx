import MoviesListItem from '../MoviesListItem/MoviesListItem';
import { CollectionList } from './MoviesList.styled';

const MoviesList = ({ collection }) => {
  console.log('collection', collection);
  return (
    <CollectionList>
      {collection.map(({ id, title, original_name, overview, poster_path }) => (
        <MoviesListItem key={id} id={id} title={title} name={original_name} overview={overview} poster={poster_path} />
      ))}
    </CollectionList>
  );
};

export default MoviesList;

