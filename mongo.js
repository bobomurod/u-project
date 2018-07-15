var MongoClient = require('mongodb').MongoClient
var assert = require('assert')

const url = 'mongodb://localhost:27017'

const data = [{
    name: 'Sherali',
    surename: 'Batirov',
    birthdate: '1974-09-09',
    sex: 'male',
    job: 'builder'
},
{
    name: 'Bobuk',
    surename: 'Bokunov',
    birthdate: '1974-19-01',
    sex: 'male',
    job: 'Developer'
},
{
    name: 'Grey',
    surename: 'Ruev',
    birthdate: '1984-03-11',
    sex: 'male',
    job: 'Marketer'
},
{
    name: 'Evgenue',
    surename: 'Umputun',
    birthdate: '1937-08-05',
    sex: 'male',
    job: 'DevOps'
},
{
    name: 'Ksenia',
    surename: 'Ksenx',
    birthdate: '1987-04-03',
    sex: 'famale',
    job: 'iOS Dev'
},
{
    name: 'Niso',
    surename: 'Batirova',
    birthdate: '1974-03-03',
    sex: 'famale',
    job: 'builder'
}]

MongoClient.connect(url, {useNewUrlParser: true}, function(err, client) {
    assert.equal(null, err)
    console.log('connected')
    const db = client.db('exampleDb')
    findDocuments(db, function () {
        client.close()
    })
    insertDocuments(db, function () {
        client.close()
    })
    console.log(db)
    
})

const insertDocuments = function (db, callback) {
    const collection = db.collection('docs')
    collection.remove(null)
    collection.insertMany(data, function (err, result) {
        console.log('inserted')
        console.log('insertion result is ' + result)
        callback(db)
    })
}

const findDocuments = function (db, callback) {
    const collection = db.collection('docs')
    // collection.find({}).toArray(function (err, docs) {
    //     console.log('test')
    //     console.log(docs)
    //     callback(docs)
    // })

    collection.find({}).toArray(function (err, doc) {
        console.log(doc)
        callback(doc)
    })
}


