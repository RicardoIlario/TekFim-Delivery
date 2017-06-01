import React, { Component } from 'react';
import './css/App.css';
import './App.js';
import './css/bootstrap.css';

import Navigation from './Navigation.js';

class Sobre extends Component {
  render() {
    return (
       <div className="container">
          <div className="row">
              <div className="col-xs-12">
                 <Navigation/>
                <div>
                     <h1>Montar Pedido</h1>
                     
                     
                     <div className="tabela">
                        <table className="table">
                                <thead>
                                    <tr>
                                        <th>Feijão</th>
                                        <th>Arroz</th>
                                        <th>Macarrão</th>
                                        <th>Carne</th>
                                        <th>Salada</th>
                                    </tr>
                                </thead>

                                <tbody>
                                  <td><input type="radio" name="feijao" />Carioca</td>
                                  <td><input type="radio" name="arroz" />Branco</td>
                                  <td><input type="radio" name="macarrao" />Espaguete</td>
                                  <td><input type="radio" name="carne" />Carne de Sol</td>
                                  <td><input type="radio" name="salada" />Alface, Tomate, Cebola</td>   
                                </tbody>

                                <tbody>
                                  <td><input type="radio" name="feijao"/>Preto</td>
                                 <td><input type="radio" name="arroz" />Parboilizado</td>
                                 <td><input type="radio" name="macarrao" />Parafuso</td>
                                 <td><input type="radio" name="carne" />Frango Guisado</td>
                                 <td></td>     
                                </tbody>

                                <tbody>
                                  <td><input type="radio"  name="feijao" />Macassar</td>
                                  <td><input type="radio" name="arroz" />Integral</td>
                                  <td></td>
                                  <td><input type="radio" name="carne" />Figado</td>  
                                </tbody>
                                 
                            </table>

                              <table className="table">
                                <thead>
                                    <tr>
                                        <th>Frutas</th>
                                        <th>Refrigerantes</th>
                                        <th>Sucos</th>
                                        
                                    </tr>
                                </thead>

                                <tbody>
                                  <td><input type="checkbox" name="frutas" />Abacaxi</td>
                                  <td><input type="checkbox" name="refrigerante" />Coca Cola</td>
                                  <td><input type="checkbox" name="sucos" />Laranja</td>
                                  
                                </tbody>

                                <tbody>
                                  <td><input type="checkbox" name="frutas"/>Mamão</td>
                                 <td><input type="checkbox" name="arroz" />Sprite</td>
                                 <td><input type="checkbox" name="sucos" />Uva</td>
                                </tbody>

                                 <tbody>
                                  <td><input type="checkbox" name="frutas"/>Melão</td>
                                 <td><input type="checkbox" name="arroz" />Kuat</td>
                                 <td><input type="checkbox" name="sucos" />Morango</td>
                                </tbody>
                   
                            </table>
                        <input className="form-control" type="text" placeholder="Informações Adicionais" />
                      
                        <br/>            
                        <div className="botoes">
                           <button className="btn btn-success" type="submit">Salvar</button>
                           <button className="btn btn-danger" type="submit">Cancelar</button>
                       </div>

                     
                 </div>
              </div>  
           </div>
         </div>
      </div>    
            
            
    );
  }
}

export default Sobre;
