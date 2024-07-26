import React from 'react';
import { useDispatch } from 'react-redux';
import { addMovie } from '../store/data-slice';

import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Alert } from '@mui/material';
export default function AddMovies() {
  const dispatch = useDispatch();

  const [success, setSuccess] = React.useState(null);
  function handleForm(e) {
    e.preventDefault();
    const title = e.target.title.value;
    const poster_path = e.target.poster_path.value;
    const release_date = e.target.releaseDate.value;

    dispatch(addMovie({ title, poster_path, release_date }));
    setSuccess(true);
    e.target.reset();
  }

  return (
    <Container component='main' maxWidth='md'>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component='h1' variant='h5'>
          Add Movies
        </Typography>

        {success && (
          <Alert severity='success' sx={{ mt: 3 }}>
            Movie added successfully!
          </Alert>
        )}

        <Paper
          sx={{
            marginTop: 3,
            padding: 3,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box component='form' noValidate onSubmit={handleForm} sx={{ mt: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id='title'
                  label='Title'
                  name='title'
                  autoComplete='title'
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
                  id='poster_path'
                  label='Poster Path'
                  name='poster_path'
                  autoComplete='poster-path'
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
                  id='releaseDate'
                  label='Release Date'
                  name='releaseDate'
                  type='date'
                  InputLabelProps={{
                    shrink: true,
                  }}
                  sx={{
                    '& label.Mui-focused': { color: '#487eb0' },
                    '& .MuiInput-underline:after': {
                      borderBottomColor: '#487eb0',
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type='submit'
                  fullWidth
                  variant='contained'
                  sx={{ mt: 3, mb: 2, bgcolor: '#487eb0' }}
                >
                  Add Movie
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}
