import initialState from '../store/initialState';
import {
  REQUEST_MOVIES,
  GET_MOVIE_FAILURE, 
  GET_MOVIE_SUCCESS,
  UPDATE_MOVIE_DATA,
  UPDATE_FETCHING
} from '../constants';

export default function moviesReducer(state = initialState.movies, action) {
  switch (action.type) {
    case REQUEST_MOVIES:
      console.log('MOVIE STATE: ', state)
      return {
        ...state,
        isFetching: true,
        movies: [],
        error: null
      }
    case GET_MOVIE_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    case GET_MOVIE_SUCCESS:
      return {
        ...state,
        isFetching: false,
      }
    case UPDATE_MOVIE_DATA:
      return {
        ...state,
        movies: [...state.movies, action.movie]
      }
    case UPDATE_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      }
    default:
      return state;
  }
}
