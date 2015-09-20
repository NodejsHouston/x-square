var Hapi = require('hapi');
var users = require('./routes/users');
var events = require('./routes/events')
var db = require('./models/database');

var connectionString = 'localhost/test';

// Create a server with a host and port
var server = new Hapi.Server();
server.connection({ 
    host: 'localhost', 
    port: 8000 
});

server.route(users);
server.route(events);

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