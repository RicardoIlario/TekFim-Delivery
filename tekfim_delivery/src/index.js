import React from 'react';
import ReactDOM from 'react-dom';
import Itens from './Itens';
import ItensDetails from './ItensDetails';
import App from './App';
import Sobre from './Sobre';
import Cadastro from './CadastrarItem';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route path="/itens" component={Itens} />
      <Route path="/detalhe" component={ItensDetails} />
      <Route path="/index" component={App} />
      <Route path="/sobre" component={Sobre} />
      <Route path="/cadastro" component={Cadastro} />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);