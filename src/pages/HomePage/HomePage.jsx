import React, { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../../api/api';
import MovieList from '../../components/MovieList/MovieList';
import styles from './HomePage.module.css';

function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(setMovies);
  }, []);

  return (
    <div className={styles.container}>
      <h1>Popular films</h1>
      <MovieList movies={movies} />
    </div>
  );
}

export default HomePage;
