const Sequelize = require('sequelize');
const sequelize = require('../config/database');
const { Portfolio, Share, Transaction, User } = require('../models');

sequelize.sync({ force: true }).then(async () => {
    console.log('Database & tables created!');
  
    // Added dummy user data
    await User.bulkCreate([
      { name: 'Ahmet' },
      { name: 'Mehmet' },
      { name: 'Zeynep' },
      { name: 'Gamze' },
      { name: 'Gizem' },
    ]);

    // Added dummy portfolio data
    await Portfolio.bulkCreate([
      { name: "Ahmet's Portfolio", UserId: 1 },
      { name: "Mehmet's Portfolio", UserId: 2 },
      { name: "Zeynep's Portfolio", UserId: 3 },
      { name: "Gamze's Portfolio", UserId: 4 },
      { name: "Gizem's Portfolio", UserId: 5 },
    ]);

    // Added dummy share data
    await Share.bulkCreate([
      { symbol: 'AMD', price: 132.50 },
      { symbol: 'AZN', price: 167.90 },
      { symbol: 'TSL', price: 207.67 },
      { symbol: 'APL', price: 219.86 },
      { symbol: 'MSF', price: 408.49 },
    ]);

    // Added dummy transaction data
    await Transaction.bulkCreate([
      { type: 'BUY', quantity: 15, sharePrice: 132.50, PortfolioId: 1, ShareId:1 },
      { type: 'SELL', quantity: 5, sharePrice: 132.50,PortfolioId: 1, ShareId:1 },
      { type: 'BUY', quantity: 14, sharePrice: 167.90,PortfolioId: 2, ShareId:2 },
      { type: 'SELL', quantity: 6, sharePrice: 167.90,PortfolioId: 2, ShareId:2 },
      { type: 'BUY', quantity: 13, sharePrice: 207.67,PortfolioId: 3, ShareId:3 },
      { type: 'SELL', quantity: 7, sharePrice: 207.67,PortfolioId: 3, ShareId:3 },
      { type: 'BUY', quantity: 12, sharePrice: 219.86,PortfolioId: 4, ShareId:4 },
      { type: 'SELL', quantity: 8, sharePrice: 219.86,PortfolioId: 4, ShareId:4 },
      { type: 'BUY', quantity: 11, sharePrice: 408.49,PortfolioId: 5, ShareId:5 },
      { type: 'SELL', quantity: 9, sharePrice: 408.49,PortfolioId: 5, ShareId:5 },
    ]);

    // Updated dummy share data
    await Share.update(
      { price: 152.50 },
      {
        where: {
          symbol: 'AMD'
        }
      }
    ).then(result => {
      console.log(`Number of affected rows: ${result[0]}`);
    }).catch(error => {
      console.error('Error updating records:', error);
    });

    await Share.update(
      { price: 187.90 },
      {
        where: {
          symbol: 'AZN'
        }
      }
    ).then(result => {
      console.log(`Number of affected rows: ${result[0]}`);
    }).catch(error => {
      console.error('Error updating records:', error);
    });

    await Share.update(
      { price: 197.67 },
      {
        where: {
          symbol: 'TSL'
        }
      }
    ).then(result => {
      console.log(`Number of affected rows: ${result[0]}`);
    }).catch(error => {
      console.error('Error updating records:', error);
    });

    await Share.update(
      { price: 209.86 },
      {
        where: {
          symbol: 'APL'
        }
      }
    ).then(result => {
      console.log(`Number of affected rows: ${result[0]}`);
    }).catch(error => {
      console.error('Error updating records:', error);
    });

    await Share.update(
      { price: 438.49 },
      {
        where: {
          symbol: 'MSF'
        }
      }
    ).then(result => {
      console.log(`Number of affected rows: ${result[0]}`);
    }).catch(error => {
      console.error('Error updating records:', error);
    });
  
    console.log('Dummy data inserted!');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});

