import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {User, Cardapio} from './models';

let router = express.Router();
let secret = 'something';

router.route('/users')
  .get((req, res) => {
    User.findAll().then((users) => {
      res.send(users);
    })
  })

  .post((req, res) => {
    let login = req.body.login;
    let password = req.body.password;
    let email = req.body.email;

    User.findOne({
      where: {login: login}
    }).then((result) => {
      if (result) {
        res.json({message: 'User already exists'});
      } else {
        bcrypt.hash(req.body.password, 12).then((result) => {
          User.create({login: login, password: result,
            email: email}).then((user) => {
              res.json({message: 'User added'});
            })
        })
      }
    })
  });

router.route('/users/:login')
  .get((req, res) => {
    User.findOne({
      where: {login: req.params.login}
    }).then((user) => {
      if (user) {
        res.json(user);
      } else {
        res.json({error: 'User not found!'});
      }
    })
  })

  .put((req, res) => {
    let login = req.body.login;
    let password = req.body.password;
    let email = req.body.email;
    let data = {login: login, password: password, email: email}
     User.findOne({
      where: {login: req.params.login}
     }).then((user) => {
        if (user) {
          User.update(data, {where: {login: req.params.login}}).then(() => {
              res.json({sucess: 'User Updated!'});
            })
        } else {
          res.json({error: 'User not found!'});
        }
      })
    })

  .delete((req, res) => {
    User.findOne({
      where: {login: req.params.login}
    }).then((user) => {
      if (user) {
        user.destroy().then((user) => {
          res.json(user);
        })
      } else {
          res.json({error: 'User not found!'});
      }
    })
  })

router.route('/auth')
  .post((req, res) => {
    User.findOne({
      where: {login: req.body.login}
    }).then((user) => {
      if (user) {
        bcrypt.compare(req.body.password, user.password).then((result) => {
          if (result) {
            const token = jwt.sign(user.get({plain: true}), secret);
            res.json({message: 'User authenticated', token: token});
          } else {
            res.json({message: 'Wrong password'});
          }
        });
      } else {
        res.json({message: 'User not found'});
      }
    });
  });

router.route('/profile')
  .get((req, res) => {
    const token = req.headers['x-access-token'];
    if (token) {
      jwt.verify(token, secret, (err, decoded) => {
        res.json(decoded);
      });
    } else {
      res.json({message: 'Token not found'});
    }
  });

router.route('/cardapio')
  .get((req, res) => {
    Cardapio.findAll().then((cardapio) => {
      res.json(cardapio);
    })
  })

  .post((req, res) => {
    let prato = req.body.prato;
    let descricao = req.body.descricao;
    let preco = req.body.preco;

    Cardapio.create({
      prato: prato, descricao: descricao, preco: preco
    }).then(() => {
      res.json({message: 'Prato adicionado!'});
    })
  })

router.route('/cardapio/:prato_id')
  .get((req, res) => {
    Cardapio.findById(req.params.prato_id).then((prato) => {
      if (prato) {
        res.json(prato);
      } else {
        res.json({message: 'Prato não encontrado!'})
      }
    })
  })

  .put((req, res) => {
    let prato = req.body.prato;
    let descricao = req.body.descricao;
    let preco = req.body.preco;

    Cardapio.findById(req.params.prato_id).then(prato => {
      if (prato) {
        prato.update({prato: prato, descricao: descricao, preco: preco}).then(() => {
          res.json({message: 'Prato atualizado!'});
        })
      } else {
        res.json({message: 'Prato não encontrado'});
      }
    })
  })

  .delete((req, res) => {
    Cardapio.findById(req.params.prato_id).then((prato) => {
      if (prato) {
        prato.destroy().then(() => {
          res.json({message: 'Prato apagado com sucesso!'});
        });
      } else {
        res.json({message: 'Prato não encontrado!'});
      }
    })
  })

  export default router;