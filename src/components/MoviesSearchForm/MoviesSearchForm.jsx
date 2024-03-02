import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  SearchFormWrapper,
  SearchForm,
  SearchFormLabel,
  SearchFormInput,
  SearchFormBtn,
} from './MoviesSearchForm.styled';

const MoviesSearchForm = () => {
  const [searchQuery, setSearchQuery] = useSearchParams();
  const [query, setQuery] = useState('');

  useEffect(() => {
    const search = searchQuery.get('query');
    search && setQuery(search);
  }, [searchQuery]);

  const onSubmit = e => {
    e.preventDefault();
    if (query.length === 0) {
      alert('Ooops');
      return;
    }
    setSearchQuery({ query });
  };

  const handleChange = e => {
    setQuery(e.target.value.toLowerCase());
  };

  return (
    <SearchFormWrapper>
      <SearchForm onSubmit={onSubmit}>
        <SearchFormLabel>
          <SearchFormInput
            name="Search"
            type="search"
            value={query}
            onChange={handleChange}
            placeholder="Go search films"
          />
        </SearchFormLabel>
        <SearchFormBtn type="submit">Search</SearchFormBtn>
      </SearchForm>
    </SearchFormWrapper>
  );
};

export default MoviesSearchForm;
