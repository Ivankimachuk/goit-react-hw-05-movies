import PropTypes from 'prop-types';
import {  Link, useLocation } from 'react-router-dom';


const MovieList = ({ movies }) => {

const location = useLocation();
const showMovies = Array.isArray(movies) && movies.length > 0;

    return (
    <div>
        {showMovies && movies.map(movie => {
        const posterUrl = movie.poster_path
        ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
        : `https://www.scifi-movies.com/images/site/en/affiche_nondisponible.jpg`;

      return(
        
        <Link state={{from: location }} 
        key={movie.id} 
        to={`/movies/${movie.id}`}
        >
          <h3>{movie.title}</h3>
          <img
            src={posterUrl}
            alt={`${movie.title} Poster`}
          />
        </Link>
        )})}
    </div>
    );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      poster_path: PropTypes.string,
    })
  ),
};

export default MovieList;


