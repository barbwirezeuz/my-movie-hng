import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useParams} from 'react-router-dom';
import './styles.css';
import { FaHeart } from 'react-icons/fa';


function MovieDetails() {
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



function MovieCard({ movie }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="movie-card" data-testid="movie-card">
      <Link to={`/movies/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
          alt={movie.title}
          data-testid="movie-poster"
        />
        <h2 data-testid="movie-title">{movie.title}</h2>
        <p data-testid="movie-release-date">{movie.release_date}</p>
      </Link>
    </div>
  );
}


function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
   
    const apiKey = '9384d374068a0ca81428ae26faf2df18';
    const topRatedUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&page=1`;

    async function fetchTopRatedMovies() {
      try {
        const response = await fetch(topRatedUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setMovies(data.results.slice(0, 10)); 
        setError(null);
      } catch (error) {
        setError('Error fetching data. Please try again later.');
        console.error('Error fetching data:', error);
      }
    }

    fetchTopRatedMovies();
  }, []); 

  useEffect(() => {
    if (searchTerm) {
      
      const apiKey = '9384d374068a0ca81428ae26faf2df18';
      const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`;

      async function fetchMovies() {
        try {
          const response = await fetch(searchUrl);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setMovies(data.results);
          setError(null);
        } catch (error) {
          setError('Error fetching data. Please try again later.');
          console.error('Error fetching data:', error);
        }
      }

      fetchMovies();
    }
  }, [searchTerm]);

  return (
    <Router>
      <div className="App">
        {/* Header */}
        <header className="header">
          <div className="title">Movie Discovery</div>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search for a movie..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="sign-in-link">
            <Link to="/">Sign In</Link>
          </div>
          <div className="menu-button">
            <button>&#9776;</button> 
          </div>
        </header>

       
        <div className="main-content">
          {error && <p>{error}</p>}
          <div className="movie-list">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
          <Routes>
            <Route path="/movies/:id" element={<MovieDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;










