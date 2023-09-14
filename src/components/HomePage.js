// //  import React from 'react';
// //  import { Link } from 'react-router-dom';

// //  const favoriteIcons = document.querySelectorAll('.favorite-icon');

// // favoriteIcons.forEach((icon) => {
// //   icon.addEventListener('click', () => {
// //     icon.classList.add('clicked');
// //   });
// // });


// //  function HomePage({ movies }) {
// //    return (
// //     <div>
// // <h3>Featured Movies</h3>
// //       <div className="movie-list" data-testid="movie-list">
// //         {movies.map((movie) => (
// //           <div className="movie-card" key={movie.id} data-testid="movie-card">
// //             <Link to={`/movies/${movie.id}`}>
// //               <div className="favorite-icon" onClick={() => {}}>
// //                 <i className="fa fa-heart" aria-hidden="true"></i> 
// //               </div>
// //               <img
// //                 src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
// //                 alt={`${movie.title} Poster`}
// //                 className="movie-poster"
// //                 data-testid="movie-poster"
// //               />
// //               <h2 data-testid="movie-title">{movie.title}</h2>
// //               <p data-testid="movie-release-date">Release Date (UTC): {movie.release_date}</p>
// //             </Link>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // export default HomePage;







// import React from 'react';
// import { Link } from 'react-router-dom';
// // import './HomePage.css'; // Import your homepage styles

// function HomePage({ movies }) {
//   return (
//     <div>
//       <h3>Featured Movies</h3>
//       <div className="movie-list" data-testid="movie-list">
//         {movies.map((movie) => (
//           <div className="movie-card" key={movie.id} data-testid="movie-card">
//             <Link to={`/movies/${movie.id}`}>
//               <div className="favorite-icon" onClick={() => {}}>
//                 <i className="fa fa-heart" aria-hidden="true"></i>
//               </div>
//               <img
//                 src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
//                 alt={`${movie.title} Poster`}
//                 className="movie-poster"
//                 data-testid="movie-poster"
//               />
//               <h2 data-testid="movie-title">{movie.title}</h2>
//               <p data-testid="movie-release-date">Release Date (UTC): {movie.release_date}</p>
//             </Link>
//           </div>
//         ))}

//         <div className="social-media">
//           <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
//             <i className="fa fa-facebook"></i>
//           </a>
//           <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
//             <i className="fa fa-instagram"></i>
//           </a>
//           <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
//             <i className="fa fa-twitter"></i>
//           </a>
//           <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
//             <i className="fa fa-youtube"></i>
//           </a>
//        </div>   

//       <div className="sections">
//           <h3>Conditions of Use</h3>
//           <h3>Privacy & Policy</h3>
//           <h3>Press Room</h3>
//       </div>
//   );
// }

// export default HomePage;




import React from 'react';
import { Link } from 'react-router-dom';
// import './HomePage.css'; // Import your homepage styles

function HomePage({ movies }) {
  return (
    <div>
      <h3>Featured Movies</h3>
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

      <div className="social-media">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-facebook"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-instagram"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-twitter"></i>
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-youtube"></i>
        </a>
      </div>

      <div className="sections">
        <div className="section">
          <h3>Conditions of Use</h3>
        </div>
        <div className="section">
          <h3>Privacy & Policy</h3>
        </div>
        <div className="section">
          <h3>Press Room</h3>
        </div>
      </div>

      <div className="copyright">
        &copy; 2023 Test Movies Box by Enin
      </div>
    </div>
  );
}

export default HomePage;
