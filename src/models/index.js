'use strict';

require('dotenv').config();
const { Sequelize, DataTypes} = require('sequelize');
const game = require('./game');
const food = require('./food');

// if sqlite::memory does not work, use sqlite:memory
const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory' : process.env.DATABASE_URL;

// db singleton
const sequelizeDatabase = new Sequelize(DATABASE_URL);
const gameModel = game(sequelizeDatabase, DataTypes);
const foodModel = food(sequelizeDatabase, DataTypes);

module.exports = {
  sequelizeDatabase,
  gameModel,
  foodModel,
};