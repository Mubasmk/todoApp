const db = require('../config/connection');
const collection = require('../config/collections');
const { resolve, reject } = require('promise');
const objectId=require('mongodb').ObjectID;
module.exports = {
    addItem: (todo) => {
        return new Promise((resolve, reject) => {
            db.get().collection(collection.ITEM_COLLECTION).insertOne(todo).then((data)=>{
                resolve(data.ops[0]);
            })
        })
    },
    
    getItem:()=>{
        return new Promise(async(resolve,reject)=>{
            let item=await db.get().collection(collection.ITEM_COLLECTION).find().toArray();
            resolve(item)
        })
    },
    removeItem:(itemId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.ITEM_COLLECTION).removeOne({_id:objectId(itemId)}).then((response)=>{
                resolve(response);
            })
        })
    }
}


