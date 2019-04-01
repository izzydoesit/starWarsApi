import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import * as contentful from 'contentful'
import Movie from '../components/Movie'

const SPACE_ID = '[INSERT CONTENTFUL SPACE ID]'
const ACCESS_TOKEN = '[INSERT CONTENTFUL ACCESS TOKEN]'
const client = contentful.createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN
})

class MoviesList extends Component {

    state = {
        movies: [],
        searchString: ''
    }

    constructor() {
        super()
        this.getMovies()
    }

    getMovies = () => {
        client.getEntries({
            content_type: 'movie',
            query: this.state.searchString
        })
        .then((response) => {
            this.setState({movies: response.items})
            console.log(this.state.movies)
        })
        .catch((error) => {
          console.log("Error occurred while fetching Entries")
          console.error(error)
        })
    }

    onSearchInputChange = (event) => {
        console.log("Search changed ..." + event.target.value)
        if (event.target.value) {
            this.setState({searchString: event.target.value})
        } else {
            this.setState({searchString: ''})
        }
        this.getMovies()
    }

    render() {
        return (
            <div>
                { this.state.movies ? (
                    <div>

                      
                        <TextField style={{padding: 24}}
                            id="searchInput"
                            placeholder="Search for Movies"   
                            margin="normal"
                            onChange={this.onSearchInputChange}
                            />
                        <Grid container spacing={24} style={{padding: 24}}>
                            { this.state.movies.map(currentMovie => (
                                <Grid item xs={12} sm={6} lg={4} xl={3}>
                                    <Movie movie={currentMovie} />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                ) : "No movies found" }
            </div>
        )
    }
}
export default MoviesList;
