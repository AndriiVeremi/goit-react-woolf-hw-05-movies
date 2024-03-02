import { useSearchParams } from 'react-router-dom';
import { CollectionItem } from './MoviesListItem.styled';

const MoviesListItem = ({ id, title, name, overview, poster }) => {
  
  const [, setMovId] = useSearchParams();

  const HandleDetails = () => {
    setMovId({ id });
  };

  return (
    <CollectionItem key={id} onClick={HandleDetails}>
      <img
        src={`https://image.tmdb.org/t/p/original/${poster}`}
        alt={title}
        width={'290px'}
        height={'400px'}
      />
      <h2>{title ? title : name}</h2>
      <p>{overview.slice(0, 120)}</p>
    </CollectionItem>
  );
};

export default MoviesListItem;
