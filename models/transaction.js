module.exports = (sequelize, DataTypes) => {
    const Transaction = sequelize.define('Transaction', {
      type: {
        type: DataTypes.ENUM('BUY', 'SELL'),
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  
    return Transaction;
};