import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  AppBar,
  Toolbar,
  Typography,
  Badge,
  IconButton,
  Box,
} from '@mui/material';
import { styled } from '@mui/system';

const CustomNavLink = styled(NavLink)({
  color: 'white',
  textDecoration: 'none',
  padding: '5px 10px',
  borderRadius: '5px',
  transition: 'background-color 0.3s',
  '&:hover': {
    backgroundColor: '#555',
  },
  '&.active': {
    backgroundColor: '#555',
    fontWeight: 'bold',
  },
});

const FavouritesBadge = styled(Badge)({
  backgroundColor: '#487eb0',
  padding: '4px 10px',
  borderRadius: '50%',
  fontSize: '12px',
  top: '-10px',
});

function NavBar() {
  const { favourites } = useSelector((state) => state.data);

  return (
    <AppBar position='static' sx={{ backgroundColor: '#2f3640' }}>
      <Toolbar>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          Movie App
        </Typography>
        <Box sx={{ display: 'flex', gap: '15px' }}>
          <CustomNavLink to='/'>Home</CustomNavLink>
          <CustomNavLink to='/app/trending'>Trending</CustomNavLink>
          <CustomNavLink to='/app/add-movies'>Add Movies</CustomNavLink>
          <CustomNavLink to='/app/profile'>Profile</CustomNavLink>
          <CustomNavLink to='/app/favourites'>
            Favourites <FavouritesBadge>{favourites.length}</FavouritesBadge>
          </CustomNavLink>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
