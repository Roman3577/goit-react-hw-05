import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjk1ODdjYzY5YzEwN2Q2ZjZmZDYzMjY3YmQxZWE4MSIsIm5iZiI6MTc0NzcwMDc3NS4xMTIsInN1YiI6IjY4MmJjYzI3YmU4NDBhZGIyODBiZGE5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.npQ7heATNT5cgxenJFgru_F3Kfln6vIulcqEVHSJfPY';

const options = {
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
};

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`${BASE_URL}/trending/movie/day`, options);
  return response.data.results;
};

export const searchMovies = async (query) => {
  const response = await axios.get(`${BASE_URL}/search/movie`, {
    ...options,
    params: {
      query,
      include_adult: false,
      language: 'en-US',
      page: 1,
    },
  });
  return response.data.results;
};

export const fetchMovieDetails = async (movieId) => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}`, options);
  return response.data;
};

export const fetchMovieCredits = async (movieId) => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, options);
  return response.data.cast;
};

export const fetchMovieReviews = async (movieId) => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}/reviews`, options);
  return response.data.results;
};
