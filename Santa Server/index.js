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

//Create Account
app.post('/api/secretsanta',function(req,res){
  console.log(req.body);
  MongoClient.connect(url,function(err, conn){
    if (err) console.log(err);
    else {
      const db = conn.db('santa')
      const myObj = new Object()
      myObj.username = req.body.username
      myObj.password = req.body.password
      const coll = db.collection('accounts')
      coll.insertOne(myObj,function(err,result){
        if (err) console.log(err);
        else {
          conn.close()
          res.type('application/json')
          res.status(200)
          res.json(result)
        }
      })
    }
  })
})

//Get Account Data
app.get('/api/secretsanta/:id', function(req, res){
  console.log(`${req.params.id}`);
  MongoClient.connect(url,function(err, conn){
    if(err) console.log(err);
    else{
      const db = conn.db('santa')
      const coll = db.collection('accounts')
      const criteria = {_id: new mongo.ObjectID(req.params.id)}
      coll.find(criteria).toArray(function(err,result){
        if (err) console.log(err);
        else {
          conn.close()
          res.type('application/json')
          res.status(200)
          res.json(result)
        }
      })
    }
  })
})

app.listen(app.get('port'), function(){
  console.log('Express Server started on http://localhost:'+app.get('port'));
  console.log(__dirname);
})
