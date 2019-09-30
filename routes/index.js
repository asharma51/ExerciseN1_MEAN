var express = require('express');
var router = express.Router();
var app = require('../app');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//connect with mongodb and fetch records from Users
var mongodb = require('mongodb');
var DATABASE_URL = 'mongodb://asharma51:a1s2d3f4@ds215380.mlab.com:15380/heroku_vd9bt3bv';

app.get('/db', function (request, response) {
  mongodb.MongoClient.connect(DATABASE_URL, function(err, db) {
    if(err) throw err;
    var Users = db.collection('Users');
    Users.find({}).toArray(function(err,result){
      if(err) throw err;
      response.render('db', {results: result});
    });

    //close connection when your app is terminating.
    db.close(function (err) {
      if(err) throw err;
    });

  });
});
module.exports = router;
