var express = require('express');
var restapi = express();
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('ClimateChange.db');

// get all buildings (accessed at GET http://localhost:3000/api/building)
restapi.get('/building', function(req, res){
  var results = [];
  db.each('SELECT * FROM building', function (err, result) {
     results.push(result);
  },
  function () {
     res.json(results);
  });
});

// get all green spaces 'quad' (accessed at GET http://localhost:3000/api/building)
restapi.get('/quad', function(req, res){
  var results = [];
  db.each('SELECT * FROM quad', function (err, result) {
     results.push(result);
  },
  function () {
     res.json(results);
  });
});

// get all buildings (accessed at GET http://localhost:3000/api/building)
restapi.get('/parkinglot', function(req, res){
  var results = [];
  db.each('SELECT * FROM parkinglot', function (err, result) {
     results.push(result);
  },
  function () {
     res.json(results);
  });
});


// get the building with that id (accessed at GET http://localhost:3000/api/building/:building_id)
restapi.get('/building/:building_id', function(req,res) {
   var id = req.params.building_id;
   db.get('SELECT * FROM building WHERE BuildingID = ?', id, function (err, result) {
     res.json(result);
   });
});


module.exports = restapi;
