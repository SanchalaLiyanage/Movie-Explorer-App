import React, { useState } from 'react';
import { TextField, Box, Button } from '@mui/material';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" my={2}>
      <TextField
        label="Search Movies"
        variant="outlined"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        sx={{ width: '300px', marginRight: '10px' }}
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;