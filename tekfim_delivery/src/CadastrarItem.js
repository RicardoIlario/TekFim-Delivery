import React, { Component } from 'react';
import logo from './img/logo.png';
import './css/App.css';
import './App.js';
import './css/bootstrap.css';
import Link from 'react-router-dom';
import Navigation from './Navigation.js';
import { FormGroup, FormControl, Form, Col, ControlLabel, Checkbox, Button } from 'react-bootstrap';

class CadastrarItem extends Component{

    render(){
      return(
        <div className="template">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            
            <h1>
              TekFim-Delivery
            </h1>
            <h2>
              Cadastro Item
            </h2>
            <Form className="campos" horizontal>
              <FormGroup controlId="formHorizontalName">
                <Col componentClass={ControlLabel} xs={6} md={4}>
                  Nome Item:
                </Col>
                <Col xs={6} md={4} >
                  <FormControl type="input" placeholder="Digite aqui o nome o Item" />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalPreco">
                <Col componentClass={ControlLabel} xs={6} md={4}>
                  Preco:
                </Col>
                <Col xs={6} md={4} >
                  <FormControl type="float" placeholder="Digite aqui o preço do Item" />
                </Col>
              </FormGroup>


              <FormGroup>
                <Col smOffset={2} md={8}>
                  <Button type="submit">
                    Cadastrar
                  </Button>
                  <Link to="home">
                    <Button type="submit">
                      Voltar
                    </Button>
                </Link>
                </Col>

              </FormGroup>


          </Form>

        </div>
      );
    }
}

export default CadastrarItem;