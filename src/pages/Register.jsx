import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useDispatch } from 'react-redux';
import { dataActions } from '../store/data-slice';
import { useNavigate } from 'react-router-dom';

function Copyright(props) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {'Copyright © '}
      <Link color='inherit' href='https://mui.com/'>
        MoviesApp
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    dispatch(
      dataActions.setUser({
        firstName: data.get('firstName'),
        lastName: data.get('lastName'),
        email: data.get('email'),
        age: data.get('age'),
      })
    );
    navigate('/app/trending');
  };

  return (
    <Container component='main' maxWidth={false} disableGutters>
      <CssBaseline />
      <Box
        sx={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            padding: '20px',
            borderRadius: '10px',
            width: '100%',
            maxWidth: '600px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component='h1' variant='h5'>
              Register
            </Typography>
            <Box
              component='form'
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete='given-name'
                    name='firstName'
                    required
                    fullWidth
                    id='firstName'
                    label='First Name'
                    autoFocus
                    sx={{
                      '& label.Mui-focused': { color: '#487eb0' },
                      '& .MuiInput-underline:after': {
                        borderBottomColor: '#487eb0',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id='lastName'
                    label='Last Name'
                    name='lastName'
                    autoComplete='family-name'
                    sx={{
                      '& label.Mui-focused': { color: '#487eb0' },
                      '& .MuiInput-underline:after': {
                        borderBottomColor: '#487eb0',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id='email'
                    label='Email Address'
                    name='email'
                    autoComplete='email'
                    sx={{
                      '& label.Mui-focused': { color: '#487eb0' },
                      '& .MuiInput-underline:after': {
                        borderBottomColor: '#487eb0',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id='age'
                    label='Age'
                    name='age'
                    autoComplete='age'
                    sx={{
                      '& label.Mui-focused': { color: '#487eb0' },
                      '& .MuiInput-underline:after': {
                        borderBottomColor: '#487eb0',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value='allowExtraEmails' color='primary' />
                    }
                    label='I want to receive inspiration, marketing promotions and updates via email.'
                  />
                </Grid>
              </Grid>
              <Button
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2, bgcolor: '#487eb0' }}
              >
                Register
              </Button>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Box>
      </Box>
    </Container>
  );
}
