var Event = require('../models/event');
var db = require('../models/database');

module.exports = [{
    method: 'POST',
    path:'/api/events/add',
    handler: function(request, reply){

      var events = new Event();

      events.create(request.payload.title, 
                    request.payload.date, 
                    request.payload.content,
                    request.payload.userName,
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
    path:'/api/events/update',
    handler: function(request, reply){

      var events = new Event();

      events.update(request.payload.id, 
                  request.payload.title,
                  request.payload.date,
                  request.payload.status,
                  request.payload.content, 
                  request.payload.userName,
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
    path:'/api/events/getAll',
    handler: function(request, reply){

      var events = new Event();

      events.getAll(function(result){
        if(result.err){
          console.log(result.err);
          return reply({ err: result.err });
        } else {
          console.log(result)
          return reply({ result: result });
        }       
      });
    }
  }];