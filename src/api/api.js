const url = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';
const ACCESS_KEY = 'cf9587cc69c107d6f6fd63267bd1ea81';

const options = {
  headers: {
	// Замість api_read_access_token вставте свій токен
    Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjk1ODdjYzY5YzEwN2Q2ZjZmZDYzMjY3YmQxZWE4MSIsIm5iZiI6MTc0NzcwMDc3NS4xMTIsInN1YiI6IjY4MmJjYzI3YmU4NDBhZGIyODBiZGE5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.npQ7heATNT5cgxenJFgru_F3Kfln6vIulcqEVHSJfPY'
  }
};

axios.get(url, options)
  .then(response => console.log(response))
  .catch(err => console.error(err));