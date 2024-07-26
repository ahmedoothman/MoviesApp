import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Container,
  Paper,
} from '@mui/material';
import NavBar from '../components/NavBar';
import { styled } from '@mui/system';

const HeroBox = styled(Paper)({
  backgroundColor: '#282c34cf',
  padding: '60px',
  borderRadius: '10px',
  margin: '0 auto',
  width: '50%',
  textAlign: 'center',
  color: 'white',
});

const HeroFooter = styled(Box)({
  backgroundColor: '#282c34',
  color: 'white',
  padding: '10px 0',
  position: 'absolute',
  bottom: 0,
  width: '100%',
  textAlign: 'center',
});

const Hero = styled(Box)({
  height: '90vh',
  margin: 0,
  padding: 0,
  backgroundImage:
    'url(https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

function App() {
  return (
    <>
      <NavBar />
      <Hero>
        <header>
          <HeroBox elevation={3}>
            <Typography variant='h3' component='h1' gutterBottom>
              Welcome to MoviesApp
            </Typography>
            <Typography variant='h5' component='p' gutterBottom>
              Your ultimate destination for movies
            </Typography>
            <Box mt={2}>
              <Button
                component={NavLink}
                to='/app/trending'
                variant='contained'
                color='primary'
                sx={{ margin: '5px' }}
              >
                Explore Trending
              </Button>
              <Button
                component={NavLink}
                to='/register'
                variant='contained'
                color='primary'
                sx={{ margin: '5px' }}
              >
                Register
              </Button>
            </Box>
          </HeroBox>
          <HeroFooter>
            <Typography variant='body2'>
              &copy; 2024 MoviesApp. All rights reserved.
            </Typography>
          </HeroFooter>
        </header>
      </Hero>
    </>
  );
}

export default App;
