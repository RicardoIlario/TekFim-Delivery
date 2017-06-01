import React, { Component } from 'react';
import './css/bootstrap.css';
import Navigation from './Navigation.js';
import './css/App.css';
import { Link } from 'react-router-dom';
import almoco1 from './img/almoco1.jpg';
import almoco2 from './img/almoco2.jpg';

//import './js/jquery-3.2.1.min.js';

class Itens extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <Navigation/>
                        <h1>Cardápio da Semana</h1>
                        
                        <div className="tabela">
                             <table className="table">
                                 <thead>
                                   <tr> 
                                       <th>Prato</th> 
                                       <th>Itens</th>
                                   </tr>
                                    
                                </thead>

                                <tbody>
                                    <td><img src= {almoco1} className="Img-Cardapio" alt="Almoço" /></td>
                                    <td>Feijão Carioca, Arroz Branco, Macarrão, Frango, Farofa e Salada.
                                        <br/>
                                        <br/> 
                                        <button className="btn btn-success" type="submit">Pedir Prato</button>
                                    </td>
                                </tbody>

                                 <tbody>
                                     <td><img src= {almoco2} className="Img-Cardapio" alt="Almoço" /></td>
                                     <td>Feijão Carioca, Arroz Branco, Batata Frita, Carne de Sol e Salada.
                                        <br/>
                                        <br/> 
                                        <button className="btn btn-success" type="submit">Pedir Prato</button>
                                    </td>
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