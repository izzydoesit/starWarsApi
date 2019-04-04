import axios from 'axios';
import {
  GET_PROFILE_ERROR,
  GET_PROFILE_SUCCESS,
  REQUEST_PROFILE,
  UPDATE_URL
} from '../constants';
import data from '../assets/characters.js';

export const updateCharacter = (name) => {

  return (dispatch, getState) => {
    dispatch(getCharacterUrl(name))
    const url = getState()['character']['url'];
    dispatch(getCharacterProfile(url));
  }
}

export const getCharacterUrl = (name) => {
  const characterFound = data.characters.find((character) => (character['name'] === name));
  return {
    type: UPDATE_URL,
    url: characterFound['url']
  }
}

export const getCharacterProfile = (characterUrl) => {
  
  return dispatch => {
    dispatch(requestProfile(characterUrl));

    axios.get(characterUrl)
    .then(response => {
      console.log('found profile!', response.data);
      dispatch(getProfileSuccess(response.data));
    })
    .catch(error => dispatch(getProfileError(error)));
  }
}

export const requestProfile = (url) => ({
  type: REQUEST_PROFILE,
  url
})

export const getProfileError = (error) => ({
  type: GET_PROFILE_ERROR,
  error
})

export const getProfileSuccess = (profile) => {
  console.log('profile found: ', profile)
  return {
    type: GET_PROFILE_SUCCESS,
    profile
  }
}
