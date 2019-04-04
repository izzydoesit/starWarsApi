import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import initialState from '../store/initialState';
import Character from '../components/Character/Character';
import { 
  updateCharacter, 
  getCharacterUrl,
  getCharacterProfile } from '../actions/character-actions.js';

const mapStateToProps = (state = initialState) => {
  return {
    selected: state.menu.selected,
    url: state.character.url,
    isFetching: state.character.isFetching,
    profile: state.character.profile,
    error: state.character.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateCharacter,
    getCharacterUrl,
    getCharacterProfile
  }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Character)
