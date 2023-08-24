import React, { useState, useEffect, useRef } from "react";
import { useParams, Link, Routes, Route, useLocation } from "react-router-dom";
import Loader from "components/Loader/Loader";
import api from 'services/api';
import CastPage from "./CastPage";
import ReviewsPage from "./ReviewsPage";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setLoading(true);

        const details = await api.fetchDetailsMovies(movieId);

        setMovieDetails(details);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!movieDetails) {
    return null; 
  }
  const posterUrl = movieDetails.poster_path
        ? `https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`
        : `https://www.scifi-movies.com/images/site/en/affiche_nondisponible.jpg`;
  return (
    <>
      {movieDetails !== null && (
        <div>
          <Link to={backLinkHref.current}>Go Back</Link>
          <h2>{movieDetails.title}</h2>
          <img
            src={posterUrl}
            alt={`${movieDetails.title} Poster`}
          />
          <p>User Score: {movieDetails.vote_average}</p>
          <h3>Overview</h3>
          <p>{movieDetails.overview}</p>
          <h3>Genres</h3>
          <ul>
            {movieDetails.genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      )}
      <div>
        <h3>Additional information</h3>
      </div>
      <div>
        <Link to='cast'>Cast</Link>
        <Link to='reviews'>Reviews</Link>
      </div>
      <Routes>
        <Route path="cast" element={<CastPage />} />
        <Route path="reviews" element={<ReviewsPage />} />
      </Routes>
    </>
  );
};

export default MovieDetails;


  