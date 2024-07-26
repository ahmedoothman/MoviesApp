import axios from 'axios';

const apiKey = '9813ce01a72ca1bd2ae25f091898b1c7';

export const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`
    );

    return { status: 'success', data: response.data.results };
  } catch (error) {
    console.error('Failed to fetch trending movies: ', error);
    return { status: 'error', error };
  }
};

export const fetchTrendingSeries = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/tv/week?api_key=${apiKey}`
    );
    return { status: 'success', data: response.data.results };
  } catch (error) {
    console.error('Failed to fetch trending series: ', error);
    return { status: 'error', error };
  }
};

export const fetchMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
    );
    return { status: 'success', data: response.data };
  } catch (error) {
    console.error('Failed to fetch movie details: ', error);
    return { status: 'error', error };
  }
};

export const fetchSeriesDetails = async (seriesId) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/${seriesId}?api_key=${apiKey}`
    );
    return { status: 'success', data: response.data };
  } catch (error) {
    console.error('Failed to fetch series details: ', error);
    return { status: 'error', error };
  }
};

export const searchMovies = async (searchTerm) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`
    );
    return { status: 'success', data: response.data };
  } catch (error) {
    console.error('Failed to search movies: ', error);
    return { status: 'error', error };
  }
};

export const searchSeries = async (searchTerm) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${searchTerm}`
    );
    return { status: 'success', data: response.data };
  } catch (error) {
    console.error('Failed to search series: ', error);
    return { status: 'error', error };
  }
};
