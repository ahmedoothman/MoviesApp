import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, fetchSeries } from '../store/data-slice';
import Search from '../components/Search';
import MovieCard from '../components/MovieCard';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';

export default function Home() {
  const dispatch = useDispatch();
  const {
    movies: trendingMovies,
    series: trendingSeries,
    loading,
    error,
  } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchMovies());
    dispatch(fetchSeries());
  }, [dispatch]);

  return (
    <Container component='main'>
      <Search />
      <Typography variant='h4' component='h2' gutterBottom>
        Trending Movies
      </Typography>
      {loading && <CircularProgress />}
      {error && <Alert severity='error'>{error}</Alert>}
      <Grid container spacing={3}>
        {trendingMovies?.map((movie) => (
          <Grid item key={movie.id} xs={12} sm={6} md={4}>
            <MovieCard movie={movie} viewMode={true} />
          </Grid>
        ))}
      </Grid>

      <Typography variant='h4' component='h2' gutterBottom sx={{ mt: 4 }}>
        Trending Series
      </Typography>
      <Grid container spacing={3}>
        {trendingSeries?.map((series) => (
          <Grid item key={series.id} xs={12} sm={6} md={4}>
            <MovieCard movie={series} isSeries={true} viewMode={true} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
