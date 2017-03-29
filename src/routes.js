import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {User, Cardapio, Pedido, Item} from './models';

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

//CARDAPIO

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

//ITEM
router.route('/itens')
  .get((req, res) => {
     Item.findAll().then(function(itens) {
      res.send(itens);
    })

  })

  .post((req, res) => {
    let descricao = req.body.descricao;
    let preco = req.body.preco;

    Item.create({descricao: descricao, preco: preco}).then((item) => {
              res.json({message:'Request added'});
            });
      });

router.route('/item/:id')
  .get((req, res) => {
    Item.findById(req.params.id).then(item => {
      if (item) {
        res.json(item);
      } else {
        res.json({error: 'Request not found'});
      }
  });
});

router.route('/item/:id')
  .put((req, res) => {
    let descricao = req.body.descricao;
    let preco = req.body.preco;
    let fim = {descricao: descricao, preco: preco}

    Item.findOne({
       where: {id: req.params.id}
     }).then((item) => {
       if (item) {
         Item.update(fim, {where: {id: req.params.id}}).then(() => {
             res.json({sucess: 'Request Updated!'});
           })
       } else {
         res.json({error: 'Request not found!'});
       }
     });
   });


router.route('/item/:id')
  .delete((req, res) => {
    Item.findById(req.params.id).then(item => {
      if (item) {
        item.destroy().then((item) => {
          res.json(item);
        })
      } else {
          res.json({error: 'Request not found!'});
      }
    });
  });


//PEDIDOS

router.route('/pedidos')
  .get((req, res) => {
     Pedido.findAll().then(function(pedidos) {
      res.send(pedidos);
    })

  })

  .post((req, res) => {
    let prato = req.body.prato;
    let quantPrato = req.body.quantPrato;
    let bebida = req.body.bebida;
    let quantBebida = req.body.quantBebida;
    let sobremesa = req.body.sobremesa;
    let quantSobremesa = req.body.quantSobremesa;

    Pedido.create({prato: prato, quantPrato: quantPrato,
            bebida: bebida, quantBebida: quantBebida, sobremesa: sobremesa, quantSobremesa: quantSobremesa}).then((pedido) => {
              res.json({message:'Request added'});
            });
      });

router.route('/pedidos/:id')
  .get((req, res) => {
    Pedido.findById(req.params.id).then(pedido => {
      if (pedido) {
        res.json(pedido);
      } else {
        res.json({error: 'Request not found'});
      }
  });
});

router.route('/pedidos/:id')
  .put((req, res) => {
    let prato = req.body.prato;
    let quantPrato = req.body.quantPrato;
    let bebida = req.body.bebida;
    let quantBebida = req.body.quantBebida;
    let sobremesa = req.body.sobremesa;
    let quantSobremesa = req.body.quantSobremesa;
    let fim = {prato: prato, quantPrato: quantPrato, bebida: bebida, quantBebida: quantBebida, sobremesa: sobremesa, quantSobremesa: quantSobremesa}

     Pedido.findOne({
        where: {id: req.params.id}
      }).then((pedido) => {
        if (pedido) {
          Pedido.update(fim, {where: {id: req.params.id}}).then(() => {
              res.json({sucess: 'Request Updated!'});
            })
        } else {
          res.json({error: 'Request not found!'});
        }
      });
    });

router.route('/pedidos/:id')
  .delete((req, res) => {
    Pedido.findById(req.params.id).then(pedido => {
      if (pedido) {
        pedido.destroy().then((pedido) => {
          res.json(pedido);
        })
      } else {
          res.json({error: 'Request not found!'});
      }
    });
  });




  export default router;
