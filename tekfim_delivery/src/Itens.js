import React, { Component } from 'react';
import './css/bootstrap.css';
import Navigation from './Navigation.js';
import './css/App.css';
import { Link } from 'react-router-dom';
//import './js/jquery-3.2.1.min.js';

class Itens extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <Navigation/>
                        <h1>Itens</h1>
                        
                        <div className="tabela">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Descrição</th>
                                        <th>Preço (R$)</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <td><Link to="/detalhe">Quentinha</Link></td>
                                    <td>12,00 <button className="btn btn-danger" type="submit">Deletar</button></td>
                                </tbody>

                                 <tbody>
                                    <td>Limonada</td>
                                    <td>2,00 <button className="btn btn-danger" type="submit">Deletar</button></td>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Itens;