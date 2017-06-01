import React from 'react';
import ReactDOM from 'react-dom';
import Itens from './Itens';
import ItensDetails from './ItensDetails';
import App from './App';
import Cardapio from './Cardapio'
import Sobre from './Sobre';
import CadastrarItem from './CadastrarItem';
import MontarPedido from './MontarPedido';
import CadastrarUsuario from './CadastrarUsuario';
import {BrowserRouter, Route} from 'react-router-dom';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route path="/itens" component={Itens} />
      <Route path="/detalhe" component={ItensDetails} />
      <Route path="/index" component={App} />
      <Route path="/sobre" component={Sobre} />
      <Route path="/cadastrarItem" component={CadastrarItem} />
      <Route path="/cardapio" component={Cardapio} />
      <Route path="/montarpedido" component={MontarPedido} />
      <Route path="/cadastrarusuario" component={CadastrarUsuario} />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
