'use strict';
const express = require ('express');
const {food} = require('../models/index');
const routers = express.Router();


routers.get('/food',getAllfood);
routers.post('/food',addNewfood)
routers.get('/food/:id',getSinglefood)
routers.delete('/food/:id',removefood)
routers.put('/food/:id',updatefood)




async function getAllfood(req,res){
    let foodCollection = await food.readRecord();
    res.status(200).json(foodCollection);
}

async function addNewfood(req,res) {
  let sentfood = req.body;
  let newfood = await food.createRecord(sentfood);
  res.status(201).json(newfood);
}
async function getSinglefood(req,res){
    let customerId = parseInt(req.params.id);
    let thefood = await food.readRecord({where:{id:customerId}});
    res.status(200).json(thefood);
}

async function removefood(req,res){
    let removedID = parseInt(req.params.id);
    let removedfood = await food.removeRecord({where:{id:removedID}});
    res.status(204).json(removedfood);
}

async function updatefood(req,res){
 let body =req.body;
 let id = req.params.id;  
 let sentfood = await food.updateRecord({where:{id:id}});
    const updatefood = await sentfood.update(body);
    res.status(201).json(updatefood);
}




module.exports = routers ;