import initialState from '../store/initialState';
import {
  GET_PROFILE_SUCCESS,
  GET_PROFILE_ERROR,
  REQUEST_PROFILE,
  UPDATE_URL, 
  UPDATE_PROFILE
} from '../constants';

export default function characterReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_PROFILE:
      return {
        ...state,
        isFetching: true,
        error: null,
      }
    case GET_PROFILE_ERROR:
      return {
        ...state,
        isFetching: false,
        profile: {},
        error: action.error
      }
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        isFetching: false,
      }
    case UPDATE_URL:
      return {
        ...state,
        url: action.url
      }
    case UPDATE_PROFILE:
        return {
          ...state,
          profile: action.profile
        }
    default:
      return state;
  }
}
