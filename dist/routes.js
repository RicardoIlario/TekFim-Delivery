'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _models = require('./models');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
var secret = 'something';

router.route('/users').get(function (req, res) {
  _models.User.findAll().then(function (users) {
    res.send(users);
  });
}).post(function (req, res) {
  var login = req.body.login;
  var password = req.body.password;
  var email = req.body.email;

  _models.User.findOne({
    where: { login: login }
  }).then(function (result) {
    if (result) {
      res.json({ message: 'User already exists' });
    } else {
      _bcrypt2.default.hash(req.body.password, 12).then(function (result) {
        _models.User.create({ login: login, password: result,
          email: email }).then(function (user) {
          res.json({ message: 'User added' });
        });
      });
    }
  });
});

router.route('/users/:login').get(function (req, res) {
  _models.User.findOne({
    where: { login: req.params.login }
  }).then(function (user) {
    if (user) {
      res.json(user);
    } else {
      res.json({ error: 'User not found!' });
    }
  });
}).put(function (req, res) {
  var login = req.body.login;
  var password = req.body.password;
  var email = req.body.email;
  var data = { login: login, password: password, email: email };
  _models.User.findOne({
    where: { login: req.params.login }
  }).then(function (user) {
    if (user) {
      _models.User.update(data, { where: { login: req.params.login } }).then(function () {
        res.json({ sucess: 'User Updated!' });
      });
    } else {
      res.json({ error: 'User not found!' });
    }
  });
}).delete(function (req, res) {
  _models.User.findOne({
    where: { login: req.params.login }
  }).then(function (user) {
    if (user) {
      user.destroy().then(function (user) {
        res.json(user);
      });
    } else {
      res.json({ error: 'User not found!' });
    }
  });
});

router.route('/auth').post(function (req, res) {
  _models.User.findOne({
    where: { login: req.body.login }
  }).then(function (user) {
    if (user) {
      _bcrypt2.default.compare(req.body.password, user.password).then(function (result) {
        if (result) {
          var token = _jsonwebtoken2.default.sign(user.get({ plain: true }), secret);
          res.json({ message: 'User authenticated', token: token });
        } else {
          res.json({ message: 'Wrong password' });
        }
      });
    } else {
      res.json({ message: 'User not found' });
    }
  });
});

router.route('/profile').get(function (req, res) {
  var token = req.headers['x-access-token'];
  if (token) {
    _jsonwebtoken2.default.verify(token, secret, function (err, decoded) {
      res.json(decoded);
    });
  } else {
    res.json({ message: 'Token not found' });
  }
});

router.route('/cardapio').get(function (req, res) {
  _models.Cardapio.findAll().then(function (cardapio) {
    res.json(cardapio);
  });
}).post(function (req, res) {
  var prato = req.body.prato;
  var descricao = req.body.descricao;
  var preco = req.body.preco;

  _models.Cardapio.create({
    prato: prato, descricao: descricao, preco: preco
  }).then(function () {
    res.json({ message: 'Prato adicionado!' });
  });
});

router.route('/cardapio/:prato_id').get(function (req, res) {
  _models.Cardapio.findById(req.params.prato_id).then(function (prato) {
    if (prato) {
      res.json(prato);
    } else {
      res.json({ message: 'Prato não encontrado!' });
    }
  });
}).put(function (req, res) {
  var prato = req.body.prato;
  var descricao = req.body.descricao;
  var preco = req.body.preco;

  _models.Cardapio.findById(req.params.prato_id).then(function (prato) {
    if (prato) {
      prato.update({ prato: prato, descricao: descricao, preco: preco }).then(function () {
        res.json({ message: 'Prato atualizado!' });
      });
    } else {
      res.json({ message: 'Prato não encontrado' });
    }
  });
}).delete(function (req, res) {
  _models.Cardapio.findById(req.params.prato_id).then(function (prato) {
    if (prato) {
      prato.destroy().then(function () {
        res.json({ message: 'Prato apagado com sucesso!' });
      });
    } else {
      res.json({ message: 'Prato não encontrado!' });
    }
  });
});

exports.default = router;