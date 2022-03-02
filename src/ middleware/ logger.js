'use strict';

const logger = (req,res,next)=>{
    req.reqType = req.method ;
    req.thePath = req.path ;
console.log('looged @',req.reqType , req.thePath)  ;
next();

}

module.exports = logger;