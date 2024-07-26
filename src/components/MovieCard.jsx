import React from 'react';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { dataActions, deleteMovie } from '../store/data-slice';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
} from '@mui/material';

function MovieCard({ movie, isSeries, viewMode }) {
  const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  const releaseDate = movie.release_date || movie.first_air_date;

  const dispatch = useDispatch();

  const handleFavourite = () => {
    dispatch(dataActions.addFavourite(movie));
  };

  const handleRemoveFavourite = () => {
    dispatch(dataActions.removeFavourite(movie.id));
  };

  const handleDelete = () => {
    dispatch(deleteMovie(movie.id));
  };

  return (
    <Card sx={{ maxWidth: 500, margin: '20px' }}>
      <Link to={`/app/${isSeries ? 'series' : 'movies'}/${movie.id}`}>
        <CardActionArea>
          <CardMedia
            component='img'
            height='300'
            image={imageUrl}
            alt={movie.title || movie.name}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant='h5'
              component='div'
              sx={{ textWrap: 'nowrap' }}
            >
              {movie.title || movie.name}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {releaseDate && (
                <small>
                  {isSeries ? 'First Air:' : 'Release:'}{' '}
                  {releaseDate.slice(0, 4)}
                </small>
              )}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
        {viewMode && (
          <IconButton onClick={handleFavourite} color='primary'>
            <FavoriteIcon />
          </IconButton>
        )}
        {!viewMode && (
          <IconButton onClick={handleRemoveFavourite} color='error'>
            <HeartBrokenIcon />
          </IconButton>
        )}
        <IconButton onClick={handleDelete} color='secondary'>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default MovieCard;
