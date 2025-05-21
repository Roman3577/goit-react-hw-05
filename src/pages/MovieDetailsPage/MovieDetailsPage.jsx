import React, { useEffect, useState, Suspense, lazy } from 'react';
import { useParams, Link, Routes, Route, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from '../../api/api';
import styles from './MovieDetailsPage.module.css';

const MovieCast = lazy(() => import('../../components/MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('../../components/MovieReviews/MovieReviews'));

function MovieDetailsPage() {
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = location.state?.from || '/movies';
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <Link to={backLink}>← Back</Link>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <nav>
        <Link to="cast">Actors</Link>
        <Link to="reviews">Reviews</Link>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default MovieDetailsPage;
