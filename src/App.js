import React, { Component } from 'react';

// custom components
import Header from '../src/shared/header/header';
import Main from '../src/views/main/main';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
