// CRUD create read update delete

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const ObjectID=mongodb.ObjectID
const id= new ObjectID() // genreates object id
console.log(id)
console.log(id.getTimestamp())

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true , useUnifiedTopology: true } , (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)
    
    // db.collection('users').insertOne({
    //     name: 'Andrew',
    //     age: 27
    // },(error,result)=>{
    //     if(error){
    //         return console.log("unable to insert user")
    //     }
    //     console.log(result.ops)
    // })

//     db.collection('users').insertMany([
//         {
//             name: 'Jen',
//             age: 28
//         }, {
//             name: 'Gunther',
//             age: 27
//         }
//     ], (error, result) => {
//         if (error) {
//             return console.log('Unable to insert documents!')
//     }

//         console.log(result.ops)
//     })
// })


db.collection('smas').insertMany([
    {
        name: 'Jen',
        completed: true
    }, {
        name: 'Gunther',
        completed: false
    },{
        name:"ramu",
        completed:true
    }
], (error, result) => {
    if (error) {
        return console.log('Unable to insert documents!')
}

    console.log(result.ops)
})
})

