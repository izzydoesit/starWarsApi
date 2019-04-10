import {
  UPDATE_ANCHOR_ELEMENT,
  UPDATE_SELECTION,
} from '../constants';

export const updateAnchorElement = (anchorEl) => ({
  type: UPDATE_ANCHOR_ELEMENT,
  anchorEl
});

export const updateSelection = (selected) => {
  return ({
    type: UPDATE_SELECTION,
    selected
  });
}
