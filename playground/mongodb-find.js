 const MongoClient = require('mongodb').MongoClient;


// const { MongoClient, ObjectID}  = require('mongodb');




MongoClient.connect('mongodb://localhost:27017/todoApp',{ useNewUrlParser: true }, (err, client) =>{

if(err){
   return  console.log('unable to connect to MongoDB server');
 }
 console.log('connected to MongoDb server');
const db = client.db('todoApp');
// db.collection('todos').find({_id: new ObjectID ('5c349a036973c328d06738c1')}).toArray().then((docs) => {
//     console.log('todos');
//     console.log(JSON.stringify(docs, undefined,2))
// },(err) => {
//     console.log('unable to fetch todos',err)
// });

// db.collection('todos').find().count().then((count) => {
//     console.log(`todos count: ${count}`);
  
// }, (err) => {
//     console.log('unable to connect',err)
// });
//  s

db.collection('todos').find({name: 'shaghayegh'}).toArray().then((docs)=>{
    console.log(JSON.stringify(docs,undefined,2))
}, (err) =>{
    console.log('unable to connet',err)
});
});