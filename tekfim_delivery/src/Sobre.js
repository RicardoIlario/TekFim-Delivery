import React, { Component } from 'react';
import pessoal from './img/pessoal.jpg';
import './css/App.css';
import './App.js';
import './css/bootstrap.css';
import Link from 'react-router-dom';
import Navigation from './Navigation.js';

class Sobre extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <Navigation />
            <h1 className="home_h1">Sobre</h1>
            <img src={pessoal} className="App-logo" alt="logo" />
          </div>
        </div>
      </div>
    );
  }
}

export default Sobre;
