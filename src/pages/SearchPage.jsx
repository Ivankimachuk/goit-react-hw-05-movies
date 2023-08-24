// import React, { useEffect, useState } from "react";
// import Loader from "components/Loader/Loader";
// import api from 'services/api';
// import { useSearchParams } from "react-router-dom";
// import MovieList from "components/MovieList/MovieList";

// const SearchPage = () => {
//   const [searchFilm, setSearchFilm] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [searchParams, setSearchParams] = useSearchParams();
//   const queryString = searchParams.get('query');

//   useEffect(() => {
//     if(!queryString) return;

//     const fetchSearchFilm = async () => {
//       try {
//         setLoading(true);

//         const movies = await api.fetchSearchMovies(queryString);
//         console.log(movies);
//         setSearchFilm(movies);
//       } catch (error) {
//         setError(error.message)
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSearchFilm();
//   }, [queryString]);

//   const handleSubmit = event => {
//     event.preventDefault();

//     const searchValue = event.currentTarget.elements.searchValue.value;
//     setSearchParams({
//       query: searchValue
//     })
//   }
//   const go = searchFilm.length === 0 && <p>No films</p>
//   return (

//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type="text" 
//         required  
//         name="searchValue"
//         placeholder="Enter movie title" />
//         <button type="submit">Search</button>
//       </form>
//       {error !== null && (
//         <p className="c-error">
//           Oops, some error occured. Please, try again later. Error: {error}
//         </p>
//       )}
//       {loading && (
//         <Loader/>
//       )}
//       {go && <MovieList movies={searchFilm} />}
//     </div>
//   )
// };

// export default SearchPage;

////////////

import React, { useEffect, useState } from "react";
import Loader from "components/Loader/Loader";
import api from 'services/api';
import { useSearchParams } from "react-router-dom";
import MovieList from "components/MovieList/MovieList";

const SearchPage = () => {
  const [searchFilm, setSearchFilm] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryString = searchParams.get('query');

  useEffect(() => {
    if (!queryString) return;

    const fetchSearchFilm = async () => {
      try {
        setLoading(true);

        const movies = await api.fetchSearchMovies(queryString);
        console.log(movies);
        setSearchFilm(movies);
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false);
      }
    };

    fetchSearchFilm();
  }, [queryString]);

  const handleSubmit = event => {
    event.preventDefault();

    const searchValue = event.currentTarget.elements.searchValue.value;
    setSearchParams({
      query: searchValue
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text"
          required
          name="searchValue"
          placeholder="Enter movie title" />
        <button type="submit">Search</button>
      </form>
      {error !== null && (
        <p className="c-error">
          Oops, some error occured. Please, try again later. Error: {error}
        </p>
      )}
      {loading && (
        <Loader />
      )}
      {searchFilm !== null ? (
        searchFilm.length === 0 ? (
          <p>Nothing was found for your request</p>
        ) : (
          <MovieList movies={searchFilm} />
        )
      ) : null}
    </div>
  )
};

export default SearchPage;



