import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function MovieDetailsPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiKey = '9384d374068a0ca81428ae26faf2df18';
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;

    async function fetchMovieDetails() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setMovie(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    }

    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="movie-details">
      <h2 data-testid="movie-title">{movie.title}</h2>
      <p data-testid="movie-release-date">Release Date (UTC): {movie.release_date}</p>
      <p data-testid="movie-runtime">Runtime: {movie.runtime} minutes</p>
      <p data-testid="movie-overview">Overview: {movie.overview}</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default MovieDetailsPage;







