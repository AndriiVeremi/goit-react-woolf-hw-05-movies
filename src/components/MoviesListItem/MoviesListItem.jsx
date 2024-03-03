import { Link } from 'react-router-dom';
import { checkImg } from 'utils/checkImg';
import { CollectionItem, CollectionTitle } from './MoviesListItem.styled';

const MoviesListItem = ({ id, title, name, release, poster }) => {

  return (
    <CollectionItem key={id}>
      <Link to={`/movies/${id}`}>
        <img
          src={`${checkImg(poster)}`}
          alt={title}
          width={'270px'}
          height={'400px'}
        />

        <CollectionTitle>{title ? title : name}</CollectionTitle>
        {release && <p>Release date: {release}</p>}
      </Link>
    </CollectionItem>
  );
};

export default MoviesListItem;
