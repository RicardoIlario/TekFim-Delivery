import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {Users} from './models';

let router = express.Router();

router.route('/users')
  .get((req, res) => {
    Users.findAll().then(function(users) {
      res.send(users);
    })
  })
  .post((req, res) => {
    let login = req.body.login;
    let password = req.body.password;
    let email = req.body.email;

    bcrypt.hash(req.body.password, 12).then((result) => {
      User.create({login: login, password: result,
        email: email}).then((user) => {
          res.json({message: 'User added'});
        });
    });
  });

  router.route('/auth').post((req, res) => {
    User.findOne({where: {login: req.body.login}}).then((user) => {
        if (user) {
          bcrypt.compare(req.body.password, user.password).then((result) => {
            if (result) {
              const token = jwt.sign(user.get({plain: true}), secret);
              res.json({message: 'User authenticated'});
            } else {
              res.json({message: 'Wrong password'})
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

export default router;
