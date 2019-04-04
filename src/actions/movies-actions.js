import axios from 'axios';
import {
  GET_MOVIE_FAILURE,
  GET_MOVIE_SUCCESS,
  UPDATE_MOVIES,
  UPDATE_LOADING
} from '../constants';

export const getMoviesInfo = (filmUrls) => {
  console.log("FILMS to get: ", filmUrls)
  let movies = filmUrls.forEach((url) => {
    axios.get(url)
    .then(response => response.data)
    .catch(error => console.log("Error fetching movie", error))
  })
  if (movies.length > 0) {
    console.log('MOVIES FOUND:', movies)
  }
}

export const updateMovies = (movies) => ({
  type: UPDATE_MOVIES,
  movies
});

export const getMovieSuccess = (movie) => ({
  type: GET_MOVIE_SUCCESS,
  movie
})

export const getMovieFailure = (error) => ({
  type: GET_MOVIE_FAILURE,
  error
})

export const updateLoading = (loading) => ({
  type: UPDATE_LOADING,
  loading
})

