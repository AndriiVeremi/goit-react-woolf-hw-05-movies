import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Report } from 'notiflix/build/notiflix-report-aio';
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
      Report.failure(
        'Ooops...',
        'Sorry, but I dont know what to search for. <br/><br/> Please enter your query in the search field, and Ill see what I can find.',
        'Okay',
        );
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
