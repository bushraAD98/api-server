'use strict';

require('dotenv').config();
const server = require('./src/server.js');

// here db is in an a destructor way because we export another element with it & wee need to specify that we want only the db element
const {db} = require('./src/models/index'); //require the db from index to make connection

///sync is a build in method from sequelize its promise-based 
//we put the server start inside it to make sure that the server wont start before the db is connected to my server
    // db.sync().then(()=>{
    //     server.start(process.env.PORT || 3001) ;})
    //     .catch(console.error)//just in case i faced an error
db.sync().then(()=>{


    server.start(process.env.PORT || 3001) ;})
        .catch(console.error)//just in case i faced an error

