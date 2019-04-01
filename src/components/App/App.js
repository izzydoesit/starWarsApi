import React, { Component } from 'react';
import Header from '../Header/Header';
import MoviesList from '../MoviesList/MoviesList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MoviesList />
      </div>
    );
  }
}

export default App;
