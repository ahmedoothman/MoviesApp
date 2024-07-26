import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Button,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Grid,
  CircularProgress,
} from '@mui/material';
import { searchMovies, searchSeries } from '../services/api';

function SearchResults() {
  const navigate = useNavigate();
  const { term } = useParams();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      if (!term) return;

      try {
        const moviesResponse = await searchMovies(term);
        const seriesResponse = await searchSeries(term);
        const searchResults = [
          ...moviesResponse.data.results,
          ...seriesResponse.data.results,
        ];
        setResults(searchResults);
      } catch (error) {
        console.error('Failed to fetch search results', error);
      } finally {
        setLoading(false);
      }
    })();
  }, [term]);

  return (
    <Container
      sx={{
        paddingTop: 4,
      }}
    >
      <Button
        variant='contained'
        color='primary'
        onClick={() => navigate(-1)}
        sx={{ mb: 2 }}
      >
        Go Back
      </Button>
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={2}>
          {results.length > 0 ? (
            results.map((result) => (
              <Grid item xs={12} sm={6} md={4} key={result.id}>
                <Card>
                  <CardMedia
                    component='img'
                    height='300'
                    image={`https://image.tmdb.org/t/p/w200/${result.poster_path}`}
                    alt={result.title || result.name}
                  />
                  <CardContent>
                    <Typography variant='h6' component='div'>
                      {result.title || result.name}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      {result.overview}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            <Box sx={{ textAlign: 'center', width: '100%', mt: 4 }}>
              <Typography variant='h6' color='text.secondary'>
                No results found
              </Typography>
            </Box>
          )}
        </Grid>
      )}
    </Container>
  );
}

export default SearchResults;
