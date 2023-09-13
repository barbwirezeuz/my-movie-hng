 import React from 'react';
 import { Link } from 'react-router-dom';

 const favoriteIcons = document.querySelectorAll('.favorite-icon');

favoriteIcons.forEach((icon) => {
  icon.addEventListener('click', () => {
    icon.classList.add('clicked');
  });
});


 function HomePage({ movies }) {
   return (
    <div>
<h3>Top Ten Movies</h3>
      <div className="movie-list" data-testid="movie-list">
        {movies.map((movie) => (
          <div className="movie-card" key={movie.id} data-testid="movie-card">
            <Link to={`/movies/${movie.id}`}>
              <div className="favorite-icon" onClick={() => {}}>
                <i className="fa fa-heart" aria-hidden="true"></i> 
              </div>
              <img
                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                alt={`${movie.title} Poster`}
                className="movie-poster"
                data-testid="movie-poster"
              />
              <h2 data-testid="movie-title">{movie.title}</h2>
              <p data-testid="movie-release-date">Release Date (UTC): {movie.release_date}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;




