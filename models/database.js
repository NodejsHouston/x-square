var mongoose = require('mongoose');

var exports = module.exports = {};
var db = mongoose.connection;

exports.connect = function connect(connectionString, callback){
  mongoose.connect('mongodb://' + connectionString);

  db.on('error', function(){
    callback({
      err: 'Error opening connection'
    });
  });
  db.once('open', function(){
    callback({
      result: 'Connection open'
    });
  });
}

