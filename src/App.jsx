import { lazy, Suspense } from 'react';
import {
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

const LandingPage = lazy(() => import('./pages/LandingPage'));
const Home = lazy(() => import('./pages/Home'));
const BaseApp = lazy(() => import('./pages/BaseApp'));
const NavBar = lazy(() => import('./components/NavBar'));
const MovieDetails = lazy(() => import('./pages/MovieDetails'));
const SeriesDetails = lazy(() => import('./pages/SeriesDetails'));
const SearchResults = lazy(() => import('./pages/SearchResults'));
const Favourites = lazy(() => import('./pages/Favourites'));
const AddMovies = lazy(() => import('./pages/AddMovies'));
const Register = lazy(() => import('./pages/Register'));
const Profile = lazy(() => import('./pages/Profile'));
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/material';
const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    errorElement: <h1 style={{ color: 'red' }}>error</h1>,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/app',
    element: <BaseApp />,
    children: [
      {
        path: 'trending',
        element: <Home />,
      },
      {
        path: 'add-movies',
        element: <AddMovies />,
      },
      {
        path: 'favourites',
        element: <Favourites />,
      },
      {
        path: 'movies/:movieId',
        element: <MovieDetails />,
      },
      {
        path: 'series/:seriesId',
        element: <SeriesDetails />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'search-results/:term',
        element: <SearchResults />,
      },
    ],
    errorElement: <h1 style={{ color: 'red' }}>error</h1>,
  },
]);

function App() {
  return (
    <>
      <Suspense
        fallback={
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh', // Full viewport height
            }}
          >
            <CircularProgress size={100} disableShrink />
          </Box>
        }
      >
        <RouterProvider router={router} />
        {/* <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/trending' element={<Home />} />
          <Route
            path='/movies'
            element={<h1 style={{ color: 'black' }}>Movies</h1>}
          />
          <Route
            path='/series'
            element={<h1 style={{ color: 'black' }}>Series</h1>}
          />
          <Route path='/movies/:movieId' element={<MovieDetails />} />
          <Route path='/series/:seriesId' element={<SeriesDetails />} />
          <Route path='/search-results/:term' element={<SearchResults />} />
        </Routes> */}
      </Suspense>
    </>
  );
}

export default App;
