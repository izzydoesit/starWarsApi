import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import initialState from '../store/initialState';
import MoviesList from '../components/MoviesList/MoviesList';
import { getMoviesInfo, updateFetching } from '../actions/movies-actions.js';

const mapStateToProps = (state = initialState) => {
  return {
    selected: state.menu.selected,
    profile: state.character.profile,
    isFetching: state.movies.isFetching,
    movies: state.movies.movies,
    error: state.movies.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getMoviesInfo, updateFetching }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList)
