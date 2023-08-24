import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "components/Loader/Loader";
import api from 'services/api';

const CastPage = () => {
    const { movieId } = useParams();
    const [castDetails, setCastDetails] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCastDetails = async () => {
            try {
                setLoading(true);

                const castDetails = await api.fetchCreditsMovies(movieId);
                
                setCastDetails(castDetails);
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false);
            }
        }

        fetchCastDetails();
    }, [movieId]);

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!castDetails || castDetails.length === 0) {
        return <p>No cast details available.</p>;
    }

    return (
        <div>
            <h2>Cast</h2>
            <ul>
                {castDetails.map(({ id, name, profile_path, character }) => (
                    <li key={id}>
                        <h3>{name}</h3>
                        {profile_path ? (
                            <img
                                src={`https://image.tmdb.org/t/p/w300${profile_path}`}
                                alt={`${name} Poster`}
                            />
                        ) : (
                            <p>No image available.</p>
                        )}
                        <p>Character: {character}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CastPage;

