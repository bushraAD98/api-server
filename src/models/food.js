'use strict';

const food = (sequelize, DataTypes) => sequelize.define('food', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dish: {
        type: DataTypes.STRING
  
    }
})

module.exports = food;