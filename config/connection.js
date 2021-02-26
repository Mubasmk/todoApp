const dotenv = require('dotenv');
const MongoClient = require('mongodb').MongoClient;
dotenv.config()

const state = {
    db:null
}

module.exports.connect = (done)=>{
    //database connection
    var url =process.env.DB_URL;
    MongoClient.connect(url,{ useUnifiedTopology: true },(err,data)=>{
        if (err) return done(err)
        state.db = data.db("todList");
        done()
    })
}
module.exports.get = ()=>{
    return state.db
}