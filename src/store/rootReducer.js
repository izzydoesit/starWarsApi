import { combineReducers } from 'redux';
import character from '../reducers/character-reducer';
import movies from '../reducers/movies-reducer';
import menu from '../reducers/menu-reducer';

export const rootReducer = combineReducers({
  character,
  menu,
  movies,
});
