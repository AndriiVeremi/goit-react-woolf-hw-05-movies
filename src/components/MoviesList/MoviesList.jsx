import MoviesListItem from '../MoviesListItem/MoviesListItem';
import { CollectionList } from './MoviesList.styled';

const MoviesList = ({ collection }) => {
  return (
    <CollectionList>
      {collection.map(
        ({
          id,
          title,
          original_name,
          release_date,
          poster_path,
        }) => (
          <MoviesListItem
            key={id}
            id={id}
            title={title}
            name={original_name}
            release={release_date}
            poster={poster_path}
          />
        )
      )}
    </CollectionList>
  );
};

export default MoviesList;
