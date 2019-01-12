const MongoClient = require('mongodb').MongoClient;


// const { MongoClient, ObjectID}  = require('mongodb');




MongoClient.connect('mongodb://localhost:27017/todoApp',{ useNewUrlParser: true }, (err, client) =>{

if(err){
   return  console.log('unable to connect to MongoDB server');
 }
 console.log('connected to MongoDb server');
const db = client.db('todoApp');
 //deleteMany
//  db.collection('todos').deleteMany({text : 'walk the dog'}).then((result) =>{
//      console.log(result);
//  })
 //DeleteOne
//  db.collection('todos').deleteOne({status: 'online'}).then((result)=>{
//         console.log(result);
//  });
 //

 db.collection('todos').findOneAndDelete({text:'something is hapend'}).then((result)=>{
     console.log(result);
 })
});