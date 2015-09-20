var Hapi = require('hapi');
var users = require('./routes/users');
var db = require('./models/database');

var connectionString = 'localhost/test';

// Create a server with a host and port
var server = new Hapi.Server();
server.connection({ 
    host: 'localhost', 
    port: 8000 
});

// Add the route
server.route({
    method: 'GET',
    path:'/hello', 
    handler: function (request, reply) {
        reply('hello world');
    }
});

server.route(users);
//once events file is complete
//server.route(events);

// Start the server
server.start(function () {
    console.log('Server running at:', server.info.uri);

    db.connect(connectionString, function(result){
      if(result.err){
        console.log(result.err);
      } else {

        console.log('Connected to database');
      }
    })
});