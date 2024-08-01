const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Portfolio = require('./portfolio')(sequelize, Sequelize);
db.Share = require('./share')(sequelize, Sequelize);
db.User = require('./user')(sequelize, Sequelize);
db.Transaction = require('./transaction')(sequelize, Sequelize);

db.Portfolio.hasMany(db.Transaction, { as: 'transactions' });
db.Share.hasMany(db.Transaction, { as: 'transactions' });
db.Portfolio.belongsTo(db.User);
db.Transaction.belongsTo(db.Portfolio);
db.Transaction.belongsTo(db.Share);

module.exports = db;