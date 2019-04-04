import React, { Component } from 'react';
import Header from '../Header/Header';
import CharacterContainer from '../../containers/CharacterContainer';
import MenuContainer from '../../containers/MenuContainer';
import MoviesListContainer from '../../containers/MoviesListContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MenuContainer />
        <CharacterContainer />
        <MoviesListContainer />
      </div>
    );
  }
}

export default App;
