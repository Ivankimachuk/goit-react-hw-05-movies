import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '48fcd2d70228915ba12b6cfcccfc186f';

const fetchTrendingMovies = async () => {
    const res = await axios.get(`/trending/all/day?language=en-US&api_key=${ API_KEY }`);
    return res.data.results;
};

const fetchSearchMovies = async ( query ) => {
    const res = await axios.get(`/search/movie?query=${query}&include_adult=false&language=en-US&page=1&api_key=${ API_KEY }`);
    return res.data.results;
};

const fetchDetailsMovies = async ( movieId ) => {
    const res = await axios.get(`/movie/${ movieId }?language=en-US&api_key=${ API_KEY }`);
    return res.data;
};

const fetchCreditsMovies = async ( movieId ) => {
    const res = await axios.get(`/movie/${ movieId }/credits?language=en-US&api_key=${ API_KEY }`);
    return res.data.cast;
};

const fetchReviewsMovies = async ( movieId ) => {
    const res = await axios.get(`/movie/${ movieId }/reviews?language=en-US&page=1&api_key=${ API_KEY }`);
    return res.data;
};

export default {
    fetchTrendingMovies,
    fetchSearchMovies,
    fetchDetailsMovies,
    fetchCreditsMovies,
    fetchReviewsMovies,
};

