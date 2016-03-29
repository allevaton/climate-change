var express = require('express');
var restapi = express();
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('ClimateChange.db');

restapi.get('/:choice', function(req, res){

    var results  = [];

    if (req.params.choice == "index") { // List all areas with index
      db.each("SELECT area.*, AreaFloor.FloodingSeverity AS 'Vulnerability' FROM area JOIN AreaFloor ON AreaFloor.AreaID = area.ID GROUP BY area.ID ORDER BY FloodingSeverity DESC", function (err, result) {
         results.push(result);
      },
      function () {
         res.json(results);
      });

    } else if (req.params.choice == "building" || req.params.choice == "quad" || req.params.choice == "parkinglot") { // List all areas

      db.each("SELECT * FROM Area WHERE Type = ? collate nocase", req.params.choice, function (err, result) {
       results.push(result);
     },
      function () {
        res.json(results);
     });

    } else if (req.params.choice == "vulnerability") { // List all vulnerabilities

        db.each("SELECT * FROM Vulnerability", function (err, result) {
        results.push(result);
    },
    function () {
       res.json(results);
    });

    } else {
      res.json("Not valid entry /" + req.params.choice);
    }
});

/* get area by id (accessed at GET http://localhost:3000/api/area/:id)
 * Available input to list a specific entity:
 *    /api/area/:id (EXAMPLE: 555HA)
 */
restapi.get('/area/:area_id', function(req,res) {
   var results = [];
   db.each("SELECT Area.Name AS 'Area Name', FloorLevel AS 'Floor Level', Room.Name AS 'Room Name', ONE.ID AS 'Storm Surge Severity', THREE.ID AS 'Extreme Heat Severity', TWO.ID AS 'Flooding Severity' FROM AreaFloor JOIN Floor ON AreaFloor.FloorID = Floor.ID JOIN Area ON AreaFloor.AreaID = Area.ID LEFT OUTER JOIN Room ON AreaFloor.RoomID = Room.ID JOIN Vulnerability SS ON AreaFloor.VulnerabilityType1 = SS.ID JOIN Vulnerability HT ON AreaFloor.VulnerabilityType2 = HT.ID JOIN Vulnerability FL ON AreaFloor.VulnerabilityType3 = FL.ID JOIN Severity ONE ON AreaFloor.StormSurgeSeverity = ONE.ID JOIN Severity TWO ON AreaFloor.FloodingSeverity = TWO.ID JOIN Severity THREE ON AreaFloor.HeatSeverity = THREE.ID WHERE AreaFloor.AreaID = ? collate nocase",
    req.params.area_id, function (err, result) {
      results.push(result);
   },
   function () {
      if (results.length <= 0) {
        res.json("/" + req.params.area_id + " is not a valid entry");
      } else {
        res.json(results);
      }
   });
});

/* List areas by vulnerability type and level (accessed at GET http://localhost:3000/api/vulnerability/:type/:level)
 * Available input to list a specific entity:
 *    /api/vulnerability/:type/:level (EXAMPLE: /heat/severe)
 */
restapi.get('/vulnerability/:type/:level', function(req,res) {

  var results = [];
  // Check for the right vulnerability levels
  if (req.params.level == "moderate-severe" || req.params.level == "low-moderate" || req.params.level == "none" || req.params.level == "low" || req.params.level == "moderate" || req.params.level == "severe") {
    // Check for the right vulnerability types
    if (req.params.type == "heat") {

      db.each("SELECT Area.Name AS 'Area Name', FloorLevel AS 'Floor Level', Room.Name AS 'Room Name', THREE.ID AS 'Extreme Heat Severity' FROM AreaFloor JOIN Floor ON AreaFloor.FloorID = Floor.ID JOIN Area ON AreaFloor.AreaID = Area.ID LEFT OUTER JOIN Room ON AreaFloor.RoomID = Room.ID JOIN Vulnerability SS ON AreaFloor.VulnerabilityType1 = SS.ID JOIN Vulnerability HT ON AreaFloor.VulnerabilityType2 = HT.ID JOIN Vulnerability FL ON AreaFloor.VulnerabilityType3 = FL.ID JOIN Severity ONE ON AreaFloor.StormSurgeSeverity = ONE.ID JOIN Severity TWO ON AreaFloor.FloodingSeverity = TWO.ID JOIN Severity THREE ON AreaFloor.HeatSeverity = THREE.ID WHERE AreaFloor.HeatSeverity = ? collate nocase",
       req.params.level, function (err, result) {
         results.push(result);
      },
      function () {
         res.json(results);
      });
    }
    else if (req.params.type == "stormsurge") {

      db.each("SELECT Area.Name AS 'Area Name', FloorLevel AS 'Floor Level', Room.Name AS 'Room Name', ONE.ID AS 'Storm Surge Severity' FROM AreaFloor JOIN Floor ON AreaFloor.FloorID = Floor.ID JOIN Area ON AreaFloor.AreaID = Area.ID LEFT OUTER JOIN Room ON AreaFloor.RoomID = Room.ID JOIN Vulnerability SS ON AreaFloor.VulnerabilityType1 = SS.ID JOIN Vulnerability HT ON AreaFloor.VulnerabilityType2 = HT.ID JOIN Vulnerability FL ON AreaFloor.VulnerabilityType3 = FL.ID JOIN Severity ONE ON AreaFloor.StormSurgeSeverity = ONE.ID JOIN Severity TWO ON AreaFloor.FloodingSeverity = TWO.ID JOIN Severity THREE ON AreaFloor.HeatSeverity = THREE.ID WHERE AreaFloor.StormSurgeSeverity = ? collate nocase",
        req.params.level, function (err, result) {
         results.push(result);
      },
      function () {
         res.json(results);
      });
    }
    else if (req.params.type == "flooding") {

      db.each("SELECT Area.Name AS 'Area Name', FloorLevel AS 'Floor Level', Room.Name AS 'Room Name', TWO.ID AS 'Flooding Severity' FROM AreaFloor JOIN Floor ON AreaFloor.FloorID = Floor.ID JOIN Area ON AreaFloor.AreaID = Area.ID LEFT OUTER JOIN Room ON AreaFloor.RoomID = Room.ID JOIN Vulnerability SS ON AreaFloor.VulnerabilityType1 = SS.ID JOIN Vulnerability HT ON AreaFloor.VulnerabilityType2 = HT.ID JOIN Vulnerability FL ON AreaFloor.VulnerabilityType3 = FL.ID JOIN Severity ONE ON AreaFloor.StormSurgeSeverity = ONE.ID JOIN Severity TWO ON AreaFloor.FloodingSeverity = TWO.ID JOIN Severity THREE ON AreaFloor.HeatSeverity = THREE.ID WHERE AreaFloor.FloodingSeverity = ? collate nocase",
        req.params.level, function (err, result) {
         results.push(result);
      },
      function () {
         res.json(results);
      });
    }
    else {
      res.json("/" + req.params.type + ". Select one of the following vulnerabilities: /heat /stormsurge /flooding");
    }
  }
  else {
    res.json("/" + req.params.level + ". Select one of the following vulnerability levels: /moderate-severe /low-moderate /none /low /moderate /severe");
  }



});

module.exports = restapi;
