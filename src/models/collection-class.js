'use strict';

class Collection {

    constructor(model){
this.model = model;


    }


    async createRecord(obj) {
   
        try {
            let newRecord= await this.model.create(obj);
            return newRecord;

           
        } catch (e) {
            console.error('error in creating a new record for model: ', this.model.name);
        }
    }


    async readRecord(id) {
        try {
            if (id) {
                return await this.model.findOne({ where: { id: id } })
            } else {
                return await this.model.findAll();
            }
        } catch (e) {
            console.error('error in reading record(s) for model: ', this.model.name);
        }
    }


    async updateRecord(obj,id) {
        try { if (obj,id) {
            
            return await this.model.update(obj,{where:{id:id},returning:true})
        } 
        } catch (e) {
            console.error('error in update record(s) for model: ', this.model.name);
        }
    }


    async removeRecord(id) {
        try {    if (id) {
            return await this.model.destroy({ where: { id: id } })
        } 
        } catch (e) {
            console.error('error in deleting record(s) for model: ', this.model.name);
        }
    }

}


module.exports = Collection;

// class Collection {
// constructor(model){
//     this.model = model
// }
// async createRecord(obj){
//     try {
//         let newRecord = await this.model.create(obj);
//         return newRecord
//     } catch (e) {
//      console.error('error in creating a new record in model:',this.model.name); 
//     }
// }

// async readRecord(id){
//     try{
//         if(id){
//     return await this.model.findOne({where : {id:id}}); }
//     else{return this.model.fidAll();}
//     }
//     catch(e){console.error('error in reading a  record in model:',this.model.name);
// }
// }

// async removeRecord(id){
//     try{
//         if(id){return await this.model.destroy({where : {id:id}});}
        
//     }
//     catch(e){console.error('error in removing record in model',this.model.name)}
// }

// async updateRecord(obj,id){
//     try{
//         return await this.model.update(obj,{where:{id:id},returning :true})
//     }
//     catch(e){console.error('error in updating record in model:',this.model.name)}
// }


// }

// module.exports = Collection;