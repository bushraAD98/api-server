'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
const clothesRoutes = require('./routes/clothes')//we imported the routes here all in one variable
const foodRoutes = require('./routes/ food.js');
const logger = require('./ middleware/ logger');
const error500 = require('./error-handlers/500');
const notFound = require('./error-handlers/404');



app.use(express.json());
app.use(cors());
app.use(clothesRoutes);//we use(call) the routes as we call a middleware
app.use(foodRoutes);
app.use(logger);






app.use(error500);
app.use('*',notFound);
function start(PORT){
    app.listen( PORT,()=>{
console.log(`listen to port ${PORT}`);
    })
}


module.exports = {
    app : app ,
    start : start
    }