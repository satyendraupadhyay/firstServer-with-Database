const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Sam = sequelize.define('sam', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      date: {
        type: Sequelize.STRING

      },
      name: {
        type: Sequelize.STRING

      },
      values: {
        type: Sequelize.STRING,
        allowNull: false
      }
      
});

module.exports = Sam;