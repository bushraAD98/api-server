'use strict';
let id;
const server = require('../src/server');
const superteset = require('supertest');
const request = superteset(server.app);
const {db} = require('../src/models/index');

beforeAll( async () =>{
    await db.sync();
})
afterAll( async () =>{
    await db.drop();
})


describe('testing random bad methods $ routes',()=>{
it('testing clothes bad route',async()=>{
const response = await request.get('/clothe')
expect(response.status).toEqual(404)

})

it('test clothes bad method',async()=>{

    const response = await request.delete('/clothes')
    expect(response.status).toEqual(404)
})

it('testing food bad route',async()=>{
    const response = await request.get('/foo')
    expect(response.status).toEqual(404)
    
    })
    
    it('test food bad method',async()=>{
    
        const response = await request.delete('/food')
        expect(response.status).toEqual(404)
    })
    
    




})



describe('testing clothes paths',()=>{
    it('get all clothes',async()=>{
        const response = await request.get('/clothes')
        expect(response.status).toEqual(200)
    })
    it('add clothes', async () => {
        const response = await request.post('/clothes').send({
            color: "test",
            size : "test"
        });
        expect(response.status).toEqual(201);
        id = response.body.id
    });
        
    it('test spesific element',async()=>{
       const response = await request.get(`/clothes/${id}`)
       expect(response.status).toEqual(200);
   })
  

   it('update clothes', async () => {
    const response = await request.put(`/clothes/${id}`).send({
        color: "test",
        size : "test"
    })
    expect(response.status).toEqual(201);
})
it('remove clothes',async()=>{
    const response = await request.delete(`/clothes/${id}`)
    expect(response.status).toEqual(204)

})
})


describe('testing food paths',()=>{
    it(' get food',async()=>{
        const response = await request.get('/food')
        expect(response.status).toEqual(200)
    })
    it('add dish', async () => {
        const response = await request.post('/food').send({
            name: "test",
            dish : "test"
        });
        expect(response.status).toEqual(201);
        id = response.body.id
    });
        
    it('get spesific dish',async()=>{
       const response = await request.get(`/food/${id}`)
       expect(response.status).toEqual(200);
   })
  

   it('update dish', async () => {
    const response = await request.put(`/food/${id}`).send({
        name: "test",
        dish : "test"
    })
    expect(response.status).toEqual(201);
});

it('deleting food by id',async()=>{
    const response = await request.delete(`/food/${id}`)
    expect(response.status).toEqual(204);
})

})