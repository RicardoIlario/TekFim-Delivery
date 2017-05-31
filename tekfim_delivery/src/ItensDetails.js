import React, { Component } from 'react';
import './css/bootstrap.css';
import './css/App.css';
import Navigation from './Navigation.js';
//import Itens from './Itens';

class ItensDetails extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <Navigation/>
                        <div>
                            <h1>Quentinha</h1>

                            <div className="formulario">
                                <form>
                                    <div className="form-group">
                                        <label>Descrição:</label>
                                        <input className="form-control" type="text" placeholder="digite uma descrição" />
                                        <label>Preço:</label>
                                        <input className="form-control" type="text" placeholder="digite um preço" />
                                    </div>
                                    
                                    <div className="botoes">
                                        <button className="btn btn-success" type="submit">Salvar</button>
                                        <button className="btn btn-danger" type="submit">Cancelar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ItensDetails;