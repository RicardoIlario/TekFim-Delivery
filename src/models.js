import Sequelize from 'sequelize';

let sequelize = new Sequelize('tekfin_db', null, null, {
  host: 'localhost',
  dialect: 'sqlite',
  storage: './data.sqlite'
});

export let User = sequelize.define('user', {
  login: Sequelize.STRING,
  password: Sequelize.STRING,
  email: Sequelize.STRING
});

export let Cardapio = sequelize.define('cardapio', {
  prato: Sequelize.STRING, 
  descricao: Sequelize.STRING,
  preco: Sequelize.DOUBLE
}) 

User.sync();
Cardapio.sync();