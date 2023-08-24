import React, { useState, useEffect } from "react";
import Loader from "components/Loader/Loader";

import MovieList from "components/MovieList/MovieList";
import api from 'services/api';

const HomePage = () => {
  const [ movies, setMovies ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(null);

useEffect(() => {
  const fetchTrendingMovies = async () => {
    try {
      setLoading(true);

      const movies = await api.fetchTrendingMovies();

      setMovies(movies);
    } catch (error){
      setError(error.message)
    } finally {
      setLoading(false);
    }

  };
  fetchTrendingMovies();
}, []);

return (
  <div>
    <h2>Trending today</h2>
    {loading ?  <Loader />
      
     : <MovieList movies={movies}/>
      
    }
  </div>
);

};


export default HomePage;



