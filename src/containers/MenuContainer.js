import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CharacterListMenu from '../components/CharacterListMenu/CharacterListMenu';
import {
  updateAnchorElement,
  updateSelectedIndex,
  updateSelection,
} from '../actions/menu-actions.js';
import initialState from '../store/initialState';

const mapStateToProps = (state = initialState.menu) => {
  return {
    selected: state.menu.selected,
    anchorEl: state.menu.anchorEl,
    selectedIndex: state.menu.selectedIndex,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateAnchorElement,
    updateSelectedIndex,
    updateSelection,
  }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterListMenu)
