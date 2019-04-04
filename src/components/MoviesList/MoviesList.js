import React, { Component } from 'react';
import Movie from '../Movie/Movie';
import Grid from '@material-ui/core/Grid';
import './MoviesList.css';

class MoviesList extends Component {

  componentWillReceiveProps = (nextProps) => {
    console.log('receiving next movie props: ', nextProps);
    if (this.props.profile !== nextProps.profile) {
      this.props.getMoviesInfo(nextProps.profile.films);
    }
  }

  render() {
    const { isLoading, movies, error } = this.props;

    return (
      <div>
        {error ? <p>{error.message}</p> : null}

        { !isLoading ? (
          <div>
             <p> I'm gonna show you some movies! </p>
            <Grid container spacing={24} style={{padding: 24}}>
              { movies.map(currentMovie => (
                <Grid item xs={12} sm={6} lg={4} xl={3}>
                  <Movie movie={currentMovie} />
                </Grid>
              ))}
            </Grid>
          </div>
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
    )
  }
}

export default MoviesList;
