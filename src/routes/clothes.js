'use strict';
const express = require ('express');//to make a router
const {clothes} = require('../models/index')
const routers = express.Router();//to put all the clothes router inside it then export it in the server.js

//we call the points by the routers to have them all in one place to use them in server.js
routers.get('/clothes',getAllclothes);
routers.post('/clothes',addNewClothes)
routers.get('/clothes/:id',getSingleClothes)
routers.delete('/clothes/:id',removeClothes)
routers.put('/clothes/:id',updateClothes)




async function getAllclothes(req,res){
    let clothesCollection = await clothes.readRecord(); //findAll a sequelize method
    res.status(200).json(clothesCollection);
}

async function addNewClothes(req,res) {
  let sentClothes = req.body;
  let newClothes = await clothes.createRecord(sentClothes);//create a sequelize method
  res.status(201).json(newClothes);
}
async function getSingleClothes(req,res){
    let customerId = parseInt(req.params.id);//here we use parseInt because the data is returned as a string
    let theClothes = await clothes.readRecord(customerId);
    res.status(200).json(theClothes);
}

async function removeClothes(req,res){
    let removedID = parseInt(req.params.id);
    let removedClothes = await clothes.removeRecord(removedID);
    res.status(204).json(removedClothes);
}

async function updateClothes(req,res){
 let body =req.body;
 let id = req.params.id;  
 let sentClothes = await clothes.updateRecord(body,id);
    const updateClothes = await sentClothes.update(body);
    res.status(201).json(updateClothes);
}




module.exports = routers ;