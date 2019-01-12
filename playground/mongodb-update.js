// const MongoClient = require('mongodb').MongoClient;


 const { MongoClient, ObjectID}  = require('mongodb');




MongoClient.connect('mongodb://localhost:27017/todoApp',{ useNewUrlParser: true }, (err, client) =>{

if(err){
   return  console.log('unable to connect to MongoDB server');
 }
 console.log('connected to MongoDb server');
const db = client.db('todoApp');

//  db.collection('todos').findOneAndUpdate({
//      _id : new ObjectID ('5c3496f791a9693fc0e69ac4')
//  }, {
//      $set : { completed: true},
     
//  },{
//      returnOriginal: false
//  }).then((result) => {
//      console.log(result);
//  });

db.collection('todos').findOneAndUpdate({
    _id : new ObjectID('5c3499d26973c328d06738c0')
}, {
  $set: { name: "yasaman"}
},
{
    returnOriginal : false
}).then((result) =>{
    console.log(result)
})
 });

