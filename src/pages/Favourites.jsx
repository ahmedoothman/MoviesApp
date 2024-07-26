import React from 'react';
import { useSelector } from 'react-redux';
import { Alert, Box, Typography, Grid, Container } from '@mui/material';
import MovieCard from '../components/MovieCard';
import { NavLink } from 'react-router-dom';

export default function Favourites() {
  const { favourites } = useSelector((state) => state.data);

  return (
    <Container component='main' sx={{ mt: 4 }}>
      <Typography variant='h4' component='h2' gutterBottom>
        Favourites
      </Typography>
      {favourites.length === 0 ? (
        <Box
          sx={{
            textAlign: 'center',
            mt: 4,
          }}
        >
          <Alert severity='info'>
            You don't have any favourites yet. Add some from the{' '}
            <NavLink to='/app/trending'>Trending</NavLink> page.
          </Alert>
        </Box>
      ) : (
        <Grid container spacing={3}>
          {favourites.map((movie) => (
            <Grid item key={movie.id} xs={12} sm={6} md={4}>
              <MovieCard movie={movie} viewMode={false} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}
