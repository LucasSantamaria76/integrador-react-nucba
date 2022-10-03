import { CloseIcon, SearchIcon, SearchInput, SearchInputWrapper } from './style';
import { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addFilterSearch } from '../../redux/slices/filterSlice';
import { debounce } from 'lodash';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  useEffect(() => {
    dispatch(addFilterSearch(search.toLowerCase()));
    !search && (inputRef.current.value = '');
  }, [search]);

  const handleSearch = debounce((e) => {
    !!e.target?.value && setSearch(e.target?.value.toLowerCase());
  }, 500);

  return (
    <SearchInputWrapper>
      <SearchIcon onClick={handleSearch}>🔍</SearchIcon>
      <SearchInput ref={inputRef} placeholder='Buscar un producto' onChange={handleSearch} />
      {!!search && (
        <CloseIcon
          onClick={(e) => {
            setSearch('');
          }}>
          x
        </CloseIcon>
      )}
    </SearchInputWrapper>
  );
};

export default SearchBar;
