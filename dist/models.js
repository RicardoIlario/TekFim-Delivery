'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Users = undefined;

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sequelize = new _sequelize2.default('users_db', null, null, {
  host: 'localhost',
  dialect: 'sqlite',
  storage: './data.sqlite'
});

var Users = exports.Users = sequelize.define('user', {
  login: _sequelize2.default.STRING,
  password: _sequelize2.default.STRING,
  email: _sequelize2.default.STRING
});

Users.sync();