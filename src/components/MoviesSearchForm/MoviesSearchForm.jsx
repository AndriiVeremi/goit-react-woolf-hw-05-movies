import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchFormWrapper, SearchForm, SearchFormLabel, SearchFormInput, SearchFormBtn} from './MoviesSearchForm.styled';

const MoviesSearchForm = () => {
    const [query, setQuery] = useState('');
    const [ , setSearchQuery] = useSearchParams();
  
    const onSubmit = e => {
      e.preventDefault();
      setSearchQuery({ query });
      clearForm()
    };
  
    const handleChange = e => {
      setQuery(e.target.value);
    };
  
    const clearForm = () => {
      setQuery('')
    }
  
    return (
      <SearchFormWrapper>
        <SearchForm onSubmit={onSubmit}>
          <SearchFormLabel>
            <SearchFormInput
              name="Search"
              type="search"
              value={query}
              onChange={handleChange}
              placeholder='Go search films'
            />
          </SearchFormLabel>
          <SearchFormBtn type="submit">Search</SearchFormBtn>
        </SearchForm>
      </SearchFormWrapper>
    );
}

export default MoviesSearchForm