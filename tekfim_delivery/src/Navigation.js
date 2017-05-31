import React, { Component } from 'react';
import './css/bootstrap.css';
//import App from './css/App.css';
//import logo from './img/logo.png';

class Navigation extends Component {
    render() {
        return (
            <div className="navigationbar">
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            TEKFIM DELIVERY
                        </a>
                    </div>
                    
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="/index">Home</a></li>
                        <li className="active"><a href="/itens">Itens</a></li>
                        <li className="active"><a href="/sobre">Sobre</a></li>
                        <li className="active"><a href="/cadastro">Cadastro</a></li>
                    </ul>
                    
                    <ul className="nav navbar-nav navbar-right">
                         <li><a href="#"><span className="glyphicon glyphicon-user"></span> Cadastrar</a></li>
                        <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navigation;