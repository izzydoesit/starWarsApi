import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CharacterListMenu from '../components/CharacterListMenu/CharacterListMenu';
import {
  updateAnchorElement,
  updateSelection,
} from '../actions/menu-actions.js';
import initialState from '../store/initialState';

const mapStateToProps = (state = initialState.menu) => {
  return {
    selected: state.menu.selected,
    anchorEl: state.menu.anchorEl,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateAnchorElement,
    updateSelection,
  }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterListMenu)
