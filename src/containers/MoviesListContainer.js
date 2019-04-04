import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import initialState from '../store/initialState';
import MoviesList from '../components/MoviesList/MoviesList';
import {
  getMoviesInfo,
  updateLoading,
  updateMovies,
} from '../actions/movies-actions.js';

const mapStateToProps = (state = initialState) => {
  return {
    profile: state.character.profile,
    isFetching: state.movies.isFetching,
    movies: state.movies.movies,
    error: state.movies.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getMoviesInfo,
    updateLoading,
    updateMovies,
  }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList)
