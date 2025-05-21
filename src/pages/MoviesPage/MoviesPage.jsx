import React, { useState } from 'react';
import { searchMovies } from '../../api/api';
import MovieList from '../../components/MovieList/MovieList';
import styles from './MoviesPage.module.css';

function MoviesPage() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    searchMovies(query).then(setMovies);
  };

  return (
    <div className={styles.container}>
      <h1>Film Search</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Введіть назву фільму"
        />
        <button type="submit">Search</button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
}

export default MoviesPage;
