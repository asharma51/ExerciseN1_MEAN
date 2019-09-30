var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//connect with mongodb and fetch records from Users
var mongodb = require('mongodb');
var DATABASE_URL = 'mongodb://asharma51:a1s2d3f4@ds215380.mlab.com:15380/heroku_vd9bt3bv';
app.get('/db', function (request, response) {
  mongodb.MongoClient.connect(DATABASE_URL, function(err, client, done) {
    client.query('SELECT * FROM Users', function(err, result) {
      done();
      if (err)
      { console.error(err); response.send("Error " + err); }
      else
      { response.render('db', {results: result.rows} ); }
    });
  });
});
module.exports = router;
