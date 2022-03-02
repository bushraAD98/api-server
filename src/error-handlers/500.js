'use strict';

module.exports = (error,eq,res,next)=>{
    res.status(500).json({
code : 500 ,
message : error


    })
}