const express = require('express')
const cors = require('cors')
const app = express()
const mongo = require('mongodb')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/';

app.set('port', 3000)
app.use(express.json())
app.use(cors())
app.use(bodyParser.json())

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

app.post('/api/secretsanta',function(req,res){
  console.log(req.body)
  MongoClient.connect(url,function(err, conn){
    if (err) throw err;
    var dbo = conn.db("group1");
    const myObj = new Object()
    myObj.username = req.body.username
    myObj.password = req.body.password
    dbo.collection("account").insertOne(myObj, function(err, result){
      if(err) console.log(err);
      else {
        res.type('application/json')
        res.status(200)
        res.json(result)
      }
    })
  })
})

app.listen(app.get('port'), function(){
  console.log('Express Server started on http://localhost:'+app.get('port'));
  console.log(__dirname);
})
