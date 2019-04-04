import {
  UPDATE_ANCHOR_ELEMENT,
  UPDATE_SELECTED_INDEX,
  UPDATE_SELECTION,
} from '../constants';

export const updateAnchorElement = (anchorEl) => ({
  type: UPDATE_ANCHOR_ELEMENT,
  anchorEl
});

export const updateSelectedIndex = (index) => ({
  type: UPDATE_SELECTED_INDEX,
  index
})

export const updateSelection = (selected) => {
  return ({
    type: UPDATE_SELECTION,
    selected
  });
}
