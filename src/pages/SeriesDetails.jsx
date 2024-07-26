import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchSeriesDetails } from '../services/api';
import {
  Button,
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Box,
  CircularProgress,
} from '@mui/material';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
function SeriesDetails() {
  const { seriesId } = useParams();
  const [seriesDetails, setSeriesDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchSeriesDetails(seriesId);
        setSeriesDetails(response.data);
      } catch (error) {
        console.error('Failed to fetch series details', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [seriesId]);

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!seriesDetails) {
    return (
      <Container>
        <Typography variant='h6' color='text.secondary'>
          Series not found.
        </Typography>
      </Container>
    );
  }
  const handleBack = () => navigate(-1);
  return (
    <Container>
      <Button
        variant='outlined'
        startIcon={<ArrowBackIcon />}
        onClick={handleBack}
        sx={{ mb: 3, marginTop: 3 }}
      >
        Go Back
      </Button>
      <Card>
        <CardMedia
          component='img'
          height='500'
          image={`https://image.tmdb.org/t/p/original/${seriesDetails.poster_path}`}
          alt={seriesDetails.name}
        />
        <CardContent>
          <Typography variant='h4' component='div' gutterBottom>
            {seriesDetails.name}
          </Typography>
          <Typography variant='body1' color='text.secondary'>
            {seriesDetails.overview}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default SeriesDetails;
