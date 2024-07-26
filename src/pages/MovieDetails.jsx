import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  Button,
  Container,
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
  IconButton,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const navigate = useNavigate();
  const { movies } = useSelector((state) => state.data);

  useEffect(() => {
    const movie = movies.find((movie) => movie.id === movieId);
    console.log(movieId, movies);
    console.log(movie);
    setMovieDetails(movie);
  }, [movieId, movies]);

  const handleBack = () => navigate(-1);

  return (
    <Container component='main' sx={{ mt: 4 }}>
      <Button
        variant='outlined'
        startIcon={<ArrowBackIcon />}
        onClick={handleBack}
        sx={{ mb: 3 }}
      >
        Go Back
      </Button>
      {movieDetails && (
        <Card>
          <CardMedia
            component='img'
            height='500'
            image={`https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`}
            alt={movieDetails.title}
          />
          <CardContent>
            <Typography variant='h4' component='h2' gutterBottom>
              {movieDetails.title}
            </Typography>
            <Typography variant='body1' color='textSecondary'>
              {movieDetails.overview}
            </Typography>
          </CardContent>
        </Card>
      )}
    </Container>
  );
}
