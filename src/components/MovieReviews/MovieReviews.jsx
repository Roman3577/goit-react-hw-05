import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../api/api';
import styles from './MovieReviews.module.css';

function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <ul className={styles.list}>
      {reviews.map(review => (
        <li key={review.id}>
          <p><strong>{review.author}</strong>: {review.content}</p>
        </li>
      ))}
    </ul>
  );
}

export default MovieReviews;
