const express = require('express')
const cors = require('cors')
const app = express()
const mongo = require('mongodb')
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/';

app.set('port', 3000)
app.use(express.json())
app.use(cors())

app.get('/api/secretsanta/:groupName',function(req,res){
  console.log(`${req.parans.groupName}`)
  MongoClient.connect(url,function(err,conn){
    if(err) throw err;
    var dbo = conn.db("group1");
    const criteria = {_groupName : new mongo.ObjectID(req.params.groupName)}
    dbo.collection('people').find(criteria).toArray(function(err, result) {
      if (err) console.log(err);
      else {
        res.type('application/json')
        res.status(200)
        res.json(result)
      }
    })
  })
})
