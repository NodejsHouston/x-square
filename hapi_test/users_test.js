var Code = require('code');
var Lab = require('lab');
var lab = exports.lab = Lab.script();         // load Lab module
var server = require("../index.js");          // our index.js from above

lab.experiment("User http tests", function() {

    //add a user as the first part of the test
    //we will then try to add the same user (should fail)
    //then we will remove the user (should succeed)
    lab.test("POST should return a set of results", function(done) {
        var options = {
            method: "POST",
            url: "/api/users/add",
            payload: {
                name: 'eric',
                email: 'testing'
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

    // tests
    lab.test("GET should return a set of results", function(done) {
        var options = {
            method: "GET",
            url: "/api/users/getAll"
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
            url: "/api/users/add",
            payload: {
                name: 'eric',
                email: 'testing'
            }
        };
        // server.inject lets you similate an http request
        server.inject(options, function(response) {
            Code.expect(response.statusCode).to.equal(200);
            console.log(response.result); //  Expect http response status code to be 200 ("Ok")
            Code.expect(response.result.err).to.exist(); // Expect result to be "Hello Timmy!" (12 chars long)
            done();                                         // done() callback is required to end the test.
        });
    });

    //this add should succeed 
    lab.test("POST should return a set of results", function(done) {
        var options = {
            method: "POST",
            url: "/api/users/delete",
            payload: {
                email: 'testing'
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