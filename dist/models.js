'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pedido = exports.Cardapio = exports.User = undefined;

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sequelize = new _sequelize2.default('tekfin_db', null, null, {
  host: 'localhost',
  dialect: 'sqlite',
  storage: './data.sqlite'
});

var User = exports.User = sequelize.define('user', {
  login: _sequelize2.default.STRING,
  password: _sequelize2.default.STRING,
  email: _sequelize2.default.STRING
});

var Cardapio = exports.Cardapio = sequelize.define('cardapio', {
  prato: _sequelize2.default.STRING,
  descricao: _sequelize2.default.STRING,
  preco: _sequelize2.default.DOUBLE
});

var Pedido = exports.Pedido = sequelize.define('pedido', {
  prato: _sequelize2.default.STRING,
  quantPrato: _sequelize2.default.STRING,
  bebida: _sequelize2.default.STRING,
  quantBebida: _sequelize2.default.STRING,
  sobremesa: _sequelize2.default.STRING,
  quantSobremesa: _sequelize2.default.STRING
});

Pedido.sync();
User.sync();
Cardapio.sync();