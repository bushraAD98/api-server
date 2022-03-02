'use strict';
const {Sequelize,DataTypes} = require('sequelize');
require('dotenv').config();
const food = require('./food');
const clothes = require('./clothes');
const collection = require('./collection-class.js');



const POSTGRES_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL ;

let sequelizeOptions = process.env.NODE_ENV === 'production' ? {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      }
    }
  }:{};

// const POSTGRES_URL = process.env.DATABASE_URL || "postgresql://bushra:0000@localhost:5432/class03" ;
// let sequelizeOptions =  {
//     // dialectOptions: {
//     //   ssl: {
//     //     require: true,
//     //     rejectUnauthorized: false,
//     //   }
//     // }
//   };

  let sequelize = new Sequelize(POSTGRES_URL, sequelizeOptions);

  let foodModel = food(sequelize, DataTypes);
  let clothesModel = clothes(sequelize, DataTypes);

  let foodCollection = new collection(foodModel);
  let clothesCollection = new collection(clothesModel);


  module.exports = {
    db: sequelize, 
    foodCollect : foodCollection ,
    clothesCollect: clothesCollection
}


//   module.exports = {
//     db: sequelize, //to make a real db connection in the main index.js
//     food: food(sequelize,DataTypes), // to make the table & to use it in the routes
//     clothes: clothes(sequelize,DataTypes)
// }