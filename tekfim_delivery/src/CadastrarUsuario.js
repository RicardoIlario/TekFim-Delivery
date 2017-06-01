import React, { Component } from 'react';

import './css/App.css';
import './App.js';
import './css/bootstrap.css';

import Navigation from './Navigation.js';



class CadastrarUsuario extends Component{

    render(){
      return(
      
        <div className="container">
          <div className="row">
              <div className="col-xs-12">
                 <Navigation/>
                <div>
                     <h1>Cadastrar Usuário</h1>
                     <div className="formulario">
                        <form>
                         <div className="form-group">
                             <label>Login</label>
                             <input className="form-control" type="text" placeholder="digite o login" />
                            <label>Password:</label>
                            <input className="form-control" type="password" placeholder="digite a senha" />
                            <label>Email:</label>
                            <input className="form-control" type="email" placeholder="digite o email" />
                            <label>Endereço:</label>
                            <input className="form-control" type="text" placeholder="digite o endereço" />
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

export default CadastrarUsuario;
