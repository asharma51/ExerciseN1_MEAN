var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//connect with mongodb and fetch records from Users
var mongodb = require('mongodb');
const DATABASE_URL = 'mongodb://asharma51:a1s2d3f4@ds215380.mlab.com:15380/heroku_vd9bt3bv';

router.get('/db', function (request, response, next) {
  mongodb.MongoClient.connect(DATABASE_URL,  function(err, client) {
    if(err) throw err;
    var db = client.db('heroku_vd9bt3bv');
    var Users = db.collection('Users');
    Users.find({}).toArray(function(err,result){
      if(err) throw err;
      response.render('db', {results: result});
    });

    //close connection when app is terminating.
    client.close(function (err) {
      if(err) throw err;
    });

  });
});
module.exports = router;
