import initialState from '../store/initialState';
import {
  UPDATE_ANCHOR_ELEMENT,
  UPDATE_SELECTED_INDEX,
  UPDATE_SELECTION,
} from '../constants';

export default function menuReducer(state = initialState.menu, action) {
  switch (action.type) {
    case UPDATE_ANCHOR_ELEMENT:
      return {
          ...state,
          anchorEl: action.anchorEl
      }
    case UPDATE_SELECTED_INDEX:
      return {
          ...state,
          selectedIndex: action.index
      }
    case UPDATE_SELECTION:
      return {
        ...state,
        selected: action.selected
      }
    default:
      return state;
  }
}
