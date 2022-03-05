'use strict';
const express = require ('express');
// const {food, foodCollection, foodCollection} = require('../models/index');
const routers = express.Router();
const {foodCollection} = require('../models/index');

routers.get('/food',getAllfood);
routers.post('/food',addNewfood)
routers.get('/food/:id',getSinglefood)
routers.delete('/food/:id',removefood)
routers.put('/food/:id',updatefood)




async function getAllfood(req,res){
    let food = await foodCollection.readRecord();
    res.status(200).json(food); 
}

async function addNewfood(req,res) {
  let sentfood = req.body;
  let newfood = await foodCollection.createRecord(sentfood);
  res.status(201).json(newfood);
}
async function getSinglefood(req,res){
    let customerId = parseInt(req.params.id);
    let thefood = await foodCollection.readRecord(customerId);
    res.status(200).json(thefood);
}

async function removefood(req,res){
    let removedID = parseInt(req.params.id);
    let removedfood = await foodCollection.removeRecord(removedID);
    res.status(204).json(removedfood);
}

async function updatefood(req,res){
 let body =req.body;
 let id = req.params.id;  
 
    const updatefood = await foodCollection.updateRecord(body,id);
    res.status(201).json(updatefood);
}




module.exports = routers ;