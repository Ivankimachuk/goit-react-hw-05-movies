import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "components/Loader/Loader";
import api from 'services/api';

import { StyledUl, StyledLi,StyledName } from './CastPage.styled';

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
            <StyledName>Cast</StyledName>
            <StyledUl>
                {castDetails.map(({ id, name, profile_path, character }) => (
                    profile_path !== null && ( 
                        <StyledLi key={id}>
                            <h4>{name}</h4>
                            <img
                                src={`https://image.tmdb.org/t/p/w300${profile_path}`}
                                alt={`${name} Poster`}
                            />
                            <p>Character: {character}</p>
                        </StyledLi>
                    )
                ))}
            </StyledUl>
        </div>
    );
};

export default CastPage;
