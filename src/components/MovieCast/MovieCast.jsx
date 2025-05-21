import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from '../../api/api';
import styles from './MovieCast.module.css';

function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCredits(movieId).then(setCast);
  }, [movieId]);

  return (
    <ul className={styles.list}>
      {cast.map(actor => (
        <li key={actor.id}>
          <p>{actor.name} - {actor.character}</p>
        </li>
      ))}
    </ul>
  );
}

export default MovieCast;
