import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {User} from './models';

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

    bcrypt.hash(req.body.password, 12).then((result) => {
      User.create({login: login, password: result,
        email: email}).then((user) => {
          res.json({message: 'User added'});
        })
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

 router.route('/users/:login')
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

export default router;
