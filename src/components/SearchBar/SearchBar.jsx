import { AnimatePresence } from 'framer-motion';
import { CloseIcon, SearchIcon, SearchInput, SearchInputWrapper } from './SearchBar.style';
import { IoClose, IoSearch } from 'react-icons/io5';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFilter } from '../../redux/slices/filterSlice';
import { debounce } from 'lodash';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addFilter({ key: 'search', value: search }));
  }, [search]);

  const handleSearch = debounce((e) => {
    setSearch(e?.target?.value.toLowerCase());
  }, 500);

  return (
    <SearchInputWrapper>
      <SearchIcon onClick={handleSearch}>
        <IoSearch />
      </SearchIcon>
      <SearchInput placeholder='Buscar un producto' onChange={handleSearch} />
      <AnimatePresence>
        {!!search && (
          <CloseIcon
            key='close-icon'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSearch('')}
            transition={{ duration: 0.1 }}>
            <IoClose />
          </CloseIcon>
        )}
      </AnimatePresence>
    </SearchInputWrapper>
  );
};

export default SearchBar;
