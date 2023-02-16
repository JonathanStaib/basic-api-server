'use strict';

const gameModel = (sequelizeDatabase, DataTypes) => 
  sequelizeDatabase.define('game', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull:true,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

module.exports = gameModel;