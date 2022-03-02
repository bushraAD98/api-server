'use strict';
//define here is a sequelize method that creats the table for me
const clothes = (sequelize, DataTypes) => sequelize.define('clothes', {
    color: {
        type: DataTypes.STRING,
        allowNull: false
    },
    size: {
        type: DataTypes.STRING
  
    }
})

module.exports = clothes;