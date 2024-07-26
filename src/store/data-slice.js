import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  movies: [],
  series: [],
  user: null,
  favourites: [],
  loading: false,
  error: null,
};

export const fetchMovies = createAsyncThunk('data/fetchMovies', async () => {
  const response = await fetch('http://localhost:3000/movies');
  if (!response.ok) {
    throw new Error('Failed to fetch movies');
  }
  const data = await response.json();
  return data;
});

export const fetchSeries = createAsyncThunk('data/fetchSeries', async () => {
  const response = await fetch('http://localhost:3000/series');
  if (!response.ok) {
    throw new Error('Failed to fetch series');
  }
  const data = await response.json();
  return data;
});
export const addMovie = createAsyncThunk('data/addMovie', async (movie) => {
  const response = await fetch('http://localhost:3000/movies', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(movie),
  });
  if (!response.ok) throw new Error('Failed to add movie');
  return response.json();
});

export const deleteMovie = createAsyncThunk('data/deleteMovie', async (id) => {
  const response = await fetch(`http://localhost:3000/movies/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Failed to delete movie');
  return id;
});

export const updateMovie = createAsyncThunk(
  'data/updateMovie',
  async (movie) => {
    const response = await fetch(`http://localhost:3000/movies/${movie.id}`, {
      method: 'PACTH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(movie),
    });
    if (!response.ok) throw new Error('Failed to update movie');
    return response.json();
  }
);
const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    addMovies(state, action) {
      state.movies = action.payload;
    },
    addSeries(state, action) {
      state.series = action.payload;
    },
    addFavourite(state, action) {
      state.favourites.push(action.payload);
      console.log(state.favourites);
    },
    removeFavourite(state, action) {
      state.favourites = state.favourites.filter(
        (item) => item.id !== action.payload
      );
    },

    setUser(state, action) {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchSeries.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSeries.fulfilled, (state, action) => {
        state.loading = false;
        state.series = action.payload;
      })
      .addCase(fetchSeries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addMovie.fulfilled, (state, action) => {
        state.movies.push(action.payload);
      })
      .addCase(deleteMovie.fulfilled, (state, action) => {
        state.movies = state.movies.filter(
          (movie) => movie.id !== action.payload
        );
      })
      .addCase(updateMovie.fulfilled, (state, action) => {
        const index = state.movies.findIndex(
          (movie) => movie.id === action.payload.id
        );
        if (index !== -1) {
          state.movies[index] = action.payload;
        }
      });
  },
});

export const dataActions = dataSlice.actions;
export const dataReducer = dataSlice.reducer;
