var Code = require('code');
var Lab = require('lab');
var lab = exports.lab = Lab.script();
var server = require("../index.js");      

lab.experiment("User http tests", function() {

    lab.test("POST should insert a post and return success", function(done) {
        var options = {
            method: "POST",
            url: "/api/events/add",
            payload: {
                title: 'test',
                date: new Date(),
                content: 'test content',
                userName: 'eric'
            }
        };
        
        server.inject(options, function(response) {
            Code.expect(response.statusCode).to.equal(200);
            Code.expect(response.result.result).to.equal('success');
            done();                                   
        });
    });

    lab.test("GET should get all events", function(done) {
        var options = {
            method: "GET",
            url: "/api/events/getAll"
        };
        
        server.inject(options, function(response) {
            Code.expect(response.statusCode).to.equal(200);
            Code.expect(response.result.result.result.length).to.be.above(0); 
            done();                                      
        });
    });

    lab.test("GET should return ")

    //this add should fail since the user already exists
    lab.test("POST should update an event by id", function(done) {
        var options = {
            method: "POST",
            url: "/api/events/update",
            payload: {
                //id: '1'
                title: 'test',
                date: new Date(),
                status: 'active',
                content: 'test content',
                userName: 'eric'
            }
        };
        
        server.inject(options, function(response) {
            Code.expect(response.statusCode).to.equal(200);
            Code.expect(response.result.result).to.equal('success'); 
            done();                                      
        });
    });
});