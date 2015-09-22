var Code = require('code');
var Lab = require('lab');
var lab = exports.lab = Lab.script();         // load Lab module
var server = require("../index.js");          // our index.js from above

lab.experiment("User http tests", function() {

    lab.test("POST should return a set of results", function(done) {
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
        // server.inject lets you similate an http request
        server.inject(options, function(response) {
            Code.expect(response.statusCode).to.equal(200);
            console.log(response.result); //  Expect http response status code to be 200 ("Ok")
            Code.expect(response.result.result).to.equal('success'); // Expect result to be "Hello Timmy!" (12 chars long)
            done();                                         // done() callback is required to end the test.
        });
    });

    lab.test("GET should return a set of results", function(done) {
        var options = {
            method: "GET",
            url: "/api/events/getAll"
        };
        // server.inject lets you similate an http request
        server.inject(options, function(response) {
            Code.expect(response.statusCode).to.equal(200);
            Code.expect(response.result.result.result.length).to.be.above(0); // Expect result to be "Hello Timmy!" (12 chars long)
            done();                                         // done() callback is required to end the test.
        });
    });

    //this add should fail since the user already exists
    lab.test("POST should return a set of results", function(done) {
        var options = {
            method: "POST",
            url: "/api/events/update",
            payload: {
                title: 'test',
                date: new Date(),
                status: 'active',
                content: 'test content',
                userName: 'eric'
            }
        };
        // server.inject lets you similate an http request
        server.inject(options, function(response) {
            Code.expect(response.statusCode).to.equal(200);
            console.log(response.result); //  Expect http response status code to be 200 ("Ok")
            Code.expect(response.result.result).to.equal('success'); // Expect result to be "Hello Timmy!" (12 chars long)
            done();                                         // done() callback is required to end the test.
        });
    });
});