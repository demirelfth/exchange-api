const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const tradeRoutes = require('./routes/trade');

const app = express();

app.use(bodyParser.json());
app.use('/api/trade', tradeRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
