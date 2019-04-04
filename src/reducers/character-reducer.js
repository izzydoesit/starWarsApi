import initialState from '../store/initialState';
import {
  GET_PROFILE_SUCCESS,
  GET_PROFILE_ERROR,
  REQUEST_PROFILE,
  UPDATE_URL
} from '../constants';

export default function characterReducer(state = initialState.character, action) {
  switch (action.type) {
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        profile: action.profile
      }
    case GET_PROFILE_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    case REQUEST_PROFILE:
      return {
        ...state,
        isFetching: true
      }
    case UPDATE_URL:
      return {
        ...state,
        url: action.url
      }
    default:
      return state;
  }
}
