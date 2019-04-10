import React, { Component } from 'react';
import Movie from '../Movie/Movie';
import Grid from '@material-ui/core/Grid';
import './MoviesList.css';


class MoviesList extends Component {

  componentWillReceiveProps = (nextProps) => {
    if (this.props.selected !== nextProps.selected) {
      this.props.updateFetching(true);
    }
    if (this.props.profile !== nextProps.profile) {
      this.props.getMoviesInfo(nextProps.profile.films);
    }
  }



  render() {
    const { profile, isFetching, movies, error } = this.props;
    const displayTitle = Object.keys(profile).length !== 0 && !error ? "Filmography" : ""

    return (
      <div id="movies-list-wrapper">
        <h2 id="movies-list-title">{displayTitle}</h2>
        {error ? <p>{error}</p> : null}
        { isFetching ? 
          (
            <h3>Loading...</h3>
          ) : (
            <div id="movies-list">
              <Grid container spacing={24} style={{padding: 24}}>
                { movies.map((currentMovie, index) => (
                  <Grid item xs={12} sm={6} lg={4} xl={3}
                    key={index}
                  >
                    <Movie movie={currentMovie} />
                  </Grid>
                ))}
              </Grid>
            </div>
          )
        }
      </div>
    )
  }
}

export default MoviesList;
