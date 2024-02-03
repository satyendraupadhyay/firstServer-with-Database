const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Smapp = sequelize.define('smapp', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      link: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: Sequelize.STRING,
});

module.exports = Smapp;