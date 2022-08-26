import { AnimatePresence } from 'framer-motion';
import { CloseIcon, SearchIcon, SearchInput, SearchInputWrapper } from './SearchBar.style';
import { IoClose, IoSearch } from 'react-icons/io5';
import { useState } from 'react';

const SearchBar = () => {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e?.target?.value.toLowerCase());
  };

  return (
    <SearchInputWrapper>
      <SearchIcon>
        <IoSearch />
      </SearchIcon>
      <SearchInput placeholder='Buscar un producto' value={search} onChange={handleSearch} />
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
