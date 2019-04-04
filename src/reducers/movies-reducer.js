import initialState from '../store/initialState';
import {
  UPDATE_MOVIES,
} from '../constants';

export default function moviesReducer(state = initialState.movies, action) {
  switch (action.type) {
    case UPDATE_MOVIES:
      return {
        ...state,
        movies: action.movies
      }
    default:
      return state;
  }
}
