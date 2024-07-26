import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Box, Typography, Paper } from '@mui/material';

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/app/search-results/${searchTerm}`);
      setSearchTerm('');
    }
  };

  return (
    <Paper
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 4,
        marginBottom: 4,
        padding: 2,
        backgroundColor: '#f9f9f9',
        borderRadius: '10px',
      }}
    >
      <form onSubmit={handleSubmit} style={{ width: '70%', maxWidth: '600px' }}>
        <TextField
          fullWidth
          variant='outlined'
          placeholder='Search for movies or series'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Button type='submit' variant='contained' color='primary' fullWidth>
          Search
        </Button>
      </form>
    </Paper>
  );
}
