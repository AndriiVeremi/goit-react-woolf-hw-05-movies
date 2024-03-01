import { CollectionItem } from "./MoviesListItem.styled";

const MoviesListItem = ({
  id,
  title,
  name,
  overview,
  poster,
}) => {

  
  
  return (
    <CollectionItem key={id}>
      <img
        src={`https://image.tmdb.org/t/p/original/${poster}`}
        alt={title}
        width={'290px'}
        height={'400px'}
      />
      <h2>{title ? title : name }</h2>
      <p>{overview.slice(0, 120)}</p>
    </CollectionItem>
  );
};

export default MoviesListItem
