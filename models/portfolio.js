module.exports = (sequelize, DataTypes) => {
    const Portfolio = sequelize.define('Portfolio', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return Portfolio;
};