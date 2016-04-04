var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where program is runninng.
var server = supertest.agent("http://localhost:3000");

// UNIT test begin
describe("Server Unit Test",function(){

  it("Should return the index page (/api/index)",function(done){
    server.get("/api/index").expect("Content-type",/json/).expect(200).end(function(err,res){
      res.status.should.equal(200); // HTTP status should be 200
      done();
    });
  });

  it("should return 400 error using a wrong get request (/api/a)",function(done){
    server.get("/api/a").expect("Content-type",/json/).expect(400).end(function(err,res){
      res.status.should.equal(400); // HTTP status should be 200
      done();
    });
  });

  it("Should return the building page and include PWRPL (/api/building/)",function(done){
      server.get('/api/building/').expect("Content-type",/json/).expect(200).end(function(err,res){
        res.status.should.equal(200);
        res.body.should.containDeepOrdered([ { ID: 'PWRPL' } ]);
        done();
      });
    });

  it("Should return the quad page and include Central Quad (/api/quad/)",function(done){
      server.get('/api/quad/').expect("Content-type",/json/).expect(200).end(function(err,res){
        res.status.should.equal(200);
        res.body.should.containDeepOrdered([ { "Name":"Central Quad" } ]);
        done();
      });
    });

  it("Should return a specific area and include its name 555 Huntington Avenue (/api/area/555HA)",function(done){
      server.get('/api/area/555HA').expect("Content-type",/json/).expect(200).end(function(err,res){
        res.status.should.equal(200);
        res.body.should.containDeepOrdered([ { "Area Name":"555 Huntington Avenue" } ]);
        done();
      });
    });

  it("Should return all buildings given a vulnerability and a severity level (/api/vulnerability/stormsurge/none)",function(done){
      server.get('/api/vulnerability/stormsurge/none').expect("Content-type",/json/).expect(200).end(function(err,res){
        res.status.should.equal(200);
        res.body.should.containDeepOrdered( [ {"Area Name":"Williston Hall","Floor Level":"Third","Room Name":"Service Room","Storm Surge Severity":"none"} ] );
        done();
      });
    });

}); // UNIT test end
