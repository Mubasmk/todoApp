const MongoClient = require('mongodb').MongoClient;

const state = {
    db:null
}

module.exports.connect = (done)=>{
    const url = "mongodb://localhost:27017/todoList";

    MongoClient.connect(url,{ useUnifiedTopology: true },(err,data)=>{
        if (err) return done(err)
        state.db = data.db("todList");
        done()
    })
}
module.exports.get = ()=>{
    return state.db
}