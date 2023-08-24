import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "components/Loader/Loader";
import api from 'services/api';

const MoviesReviewsPage = () => {
    const { movieId } = useParams();
    const [movieReviews, setMovieReviews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => { 
        if (!movieId) return;

        const fetchMovieReviews = async () => {
            try {
                setLoading(true);
                const reviews = await api.fetchReviewsMovies(movieId);
                setMovieReviews(reviews.results);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        fetchMovieReviews();
    }, [movieId]);

    if (loading) {
        return <Loader />; 
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            {movieReviews.length !== 0 ? (
                <ul>
                    {movieReviews.map(({ author, content, id }) => (  
                        <li key={id}>
                            <h4>{author}</h4>
                            <p>Character: {content}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>There are no reviews.</p>
            )}
        </div>
    );
}

export default MoviesReviewsPage;


