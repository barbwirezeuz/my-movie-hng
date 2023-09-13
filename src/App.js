import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './styles.css';
import MovieDetailsPage from './components/MovieDetailsPage';
import HomePage from './components/HomePage';

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
          <Routes>
            <Route path="/" element={<HomePage movies={movies} />} />
            <Route path="/movies/:id" element={<MovieDetailsPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
