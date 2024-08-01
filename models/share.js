module.exports = (sequelize, DataTypes) => {
    const Share = sequelize.define('Share', {
      symbol: {
        type: DataTypes.STRING(3),
        allowNull: false,
        unique: true,
        validate: {
          isUppercase: true,
          len: [3, 3],
        },
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
    });
  
    return Share;
};