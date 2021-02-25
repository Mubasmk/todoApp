const MongoClient = require('mongodb').MongoClient;

const state = {
    db:null
}

module.exports.connect = (done)=>{
    //database connection
    const url = "mongodb+srv://mubasmk:ichumachu555@cluster0.wqoqx.mongodb.net/todoList";
    MongoClient.connect(url,{ useUnifiedTopology: true },(err,data)=>{
        if (err) return done(err)
        state.db = data.db("todList");
        done()
    })
}
module.exports.get = ()=>{
    return state.db
}