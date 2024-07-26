import * as React from 'react';
import { useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Alert } from '@mui/material';
import { NavLink } from 'react-router-dom';
export default function Profile() {
  const { user } = useSelector((state) => state.data);
  console.log(user);
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
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}></Avatar>
        <Typography component='h1' variant='h5'>
          Profile
        </Typography>
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
          {user && (
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography variant='h6'>First Name:</Typography>
                <Typography>{user.firstName}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant='h6'>Last Name:</Typography>
                <Typography>{user.lastName}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant='h6'>Email:</Typography>
                <Typography>{user.email}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant='h6'>Age:</Typography>
                <Typography>{user.age}</Typography>
              </Grid>
            </Grid>
          )}
          {!user && (
            <Box
              sx={{
                textAlign: 'center',
                margin: '0 auto',
              }}
            >
              <Alert severity='info'>
                You are not Registered. Please{' '}
                <NavLink to='/register'>Register</NavLink> to view your profile
              </Alert>
            </Box>
          )}
        </Paper>
      </Box>
    </Container>
  );
}
