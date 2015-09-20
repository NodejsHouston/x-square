var Hapi = require('hapi');
var User = require('./models/user');
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

server.route({
  method: 'POST',
  path:'/api/users/add',
  handler: function(request, reply){

    var newUser = new User();

    newUser.create(request.payload.name, 
                  request.payload.email, 
                  function(result){
      if(result.err){
        console.log(result.err);
        return reply({ err: result.err });
      } else {
        return reply({ result: 'success' });
      }
    });
  }
});

server.route({
  method: 'POST',
  path:'/api/users/delete',
  handler: function(request, reply){

    var user = new User();

    user.delete(request.payload.email, 
                function(result){
      if(result.err){
        console.log(result.err);
        return reply({ err: result.err });
      } else {
        return reply({ result: 'success' });
      }       
    });
  }
});

server.route({
  method: 'GET',
  path:'/api/users/getAll',
  handler: function(request, reply){

    var user = new User();

    user.getAll(function(result){
      if(result.err){
        console.log(result.err);
        return reply({ err: result.err });
      } else {
        console.log(result)
        return reply({ result: result });
      }       
    });
  }
});

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