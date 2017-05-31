import React, { Component } from 'react';
import logo from './img/logo.png';
import './css/App.css';
import './App.js';
import './css/bootstrap.css';
import Link from 'react-router-dom';
import Navigation from './Navigation.js';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <Navigation />
            <h1 className="home_h1">Em construção</h1>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
