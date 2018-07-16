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
    name: 'Shaxnoza',
    surename: 'Batirova',
    birthdate: '1988-04-05',
    sex: 'famale',
    job: 'builder'
    },
    {
    name: 'Damir',
    surename: 'Bekov',
    birthdate: '1991-01-09',
    sex: 'male',
    job: 'builder'
    },
    {
    name: 'Michael',
    surename: 'Sarobba',
    birthdate: '1964-16-07',
    sex: 'male',
    job: 'Developer'
    },
    {
    name: 'Solderon',
    surename: 'Lavaev',
    birthdate: '1989-07-16',
    sex: 'male',
    job: 'Marketer'
    },
    {
    name: 'Zippo',
    surename: 'Spiritus',
    birthdate: '1958-10-10',
    sex: 'male',
    job: 'DevOps'
    },
    {
    name: 'Nihol',
    surename: 'Sepungora',
    birthdate: '1979-01-09',
    sex: 'famale',
    job: 'DevOps'
    },
    {
    name: 'Razolat',
    surename: 'Galopova',
    birthdate: '1982-04-08',
    sex: 'famale',
    job: 'builder'
    },
    {
    name: 'Mamatqul',
    surename: 'Bilolov',
    birthdate: '1955-02-02',
    sex: 'male',
    job: 'builder'
    },
    {
    name: 'Bundarchuk',
    surename: 'Buynov',
    birthdate: '1988-09-11',
    sex: 'male',
    job: 'Developer'
    },
    {
    name: 'Helriy',
    surename: 'Razuev',
    birthdate: '1977-04-21',
    sex: 'male',
    job: 'Marketer'
    },
    {
    name: 'Evboie',
    surename: 'Zerlump',
    birthdate: '1999-18-08',
    sex: 'male',
    job: 'DevOps'
    },
    {
    name: 'Sabinia',
    surename: 'Surova',
    birthdate: '1997-05-09',
    sex: 'famale',
    job: 'Developer'
    },
    {
    name: 'Nadan',
    surename: 'Burova',
    birthdate: '1964-01-13',
    sex: 'famale',
    job: 'builder'
    }
]

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
