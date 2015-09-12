var mongoose = require('mongoose');
var dbUrl = 'mongodb://127.0.0.1:27017';

mongoose.connect(dbUrl);

process.on('SIGINT', function() {
  mongoose.connection.close(function() {
    console.log('mongoose default connection closed');
    process.exit(0);
  });
});
