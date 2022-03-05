'use strict';
const express = require ('express');//to make a router
// const {clothes} = require('../models/index')
const routers = express.Router();//to put all the clothes router inside it then export it in the server.js
const {clothesCollection} = require('../models/index');

//we call the points by the routers to have them all in one place to use them in server.js
routers.get('/clothes',getAllclothes);
routers.post('/clothes',addNewClothes)
routers.get('/clothes/:id',getSingleClothes)
routers.delete('/clothes/:id',removeClothes)
routers.put('/clothes/:id',updateClothes)




async function getAllclothes(req,res){
    let clothes = await clothesCollection.readRecord();//findAll a sequelize method
    res.status(200).json(clothes);
}

async function addNewClothes(req,res) {
  let sentClothes = req.body;
  let newClothes = await clothesCollection.createRecord(sentClothes);//create a sequelize method
  res.status(201).json(newClothes);
}
async function getSingleClothes(req,res){
    let customerId = parseInt(req.params.id);//here we use parseInt because the data is returned as a string
    let theClothes = await clothesCollection.readRecord(customerId);
    res.status(200).json(theClothes);
}

async function removeClothes(req,res){
    let removedID = parseInt(req.params.id);
    let removedClothes = await clothesCollection.removeRecord(removedID);
    res.status(204).json(removedClothes);
}

async function updateClothes(req,res){
 let body =req.body;
 let id = req.params.id;  
    const updateClothes = await clothesCollection.updateRecord(body,id);
    res.status(201).json(updateClothes);
}




module.exports = routers ;