// const MongoClient = require('mongodb').MongoClient;


const { MongoClient, ObjectID}  = require('mongodb');


var obj = new ObjectID();
console.log(obj);
// var user = { name :'shagha', age: 32};
// var {name} = user;
//  console.log(name)
MongoClient.connect('mongodb://localhost:27017/todoApp',{ useNewUrlParser: true }, (err, client) =>{

if(err){
   return  console.log('unable to connect to MongoDB server');
 }
 console.log('connected to MongoDb server');
//  const db = client.db('todoApp');
//  db.collection('todos').insertOne({
//      text: 'something is hapend',
//      completed: true
//  }, (err, result) =>{
//      if(err){
//          return console.log('something went wrong', err);
//      }
     
//     //  console.log(JSON.stringify(result.ops, undefined,2));
//     console.log(result.ops[0]._id.getTimestamp());
//  })
 const db = client.db('users');
 db.collection('users').insertOne({
   name:'sarmen',
   age: 35,
   loation: 'Gelenden'
 }), (err,result) => {
   if(err ) 
   return console.log('unable to connect',err);
 }
 console.log(JSON.stringify(result,undefined,2))
 

 
 client.close();
});