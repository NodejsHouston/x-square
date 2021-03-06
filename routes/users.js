var User = require('../models/user');
var db = require('../models/database');

module.exports = [{
    method: 'POST',
    path:'/api/users/add',
    handler: function(request, reply){

      var newUser = new User();

      newUser.create(request.payload.name, 
                    request.payload.email, 
                    null,
                    function(result){
        if(result.err){
          console.log(result.err);
          return reply({ err: result.err });
        } else {
          return reply({ result: 'success' });
        }
      });
    }
  },

  {
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
  },

  {
    method: 'GET',
    path:'/api/users/getByEmail',
    handler: function(request, reply){

      var user = new User();
      user.getByEmail(request.query.email,
                      function(result){
        if(result.err){
          console.log('error finding user');
          console.log(result.err);
          return reply({ err: result.err });
        } else {
          console.log('found user');
          console.log(result);
          return reply({ result: result });
        } 
      });
    }
  },

  {
    method: 'GET',
    path:'/api/users/getAll',
    handler: function(request, reply){

      var user = new User();

      user.getAll(function(result){
        if(result.err){
          console.log(result.err);
          return reply({ err: result.err });
        } else {
          return reply({ result: result });
        }       
      });
    }
  }];