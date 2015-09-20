var mongoose = require('mongoose');

var eventSchema = mongoose.Schema({
  title: String,
  status: String,
  date: Date,
  content: String,
  userName: String 
});

eventSchema.methods.create = function(title, date, content, userName, cb){
 
  var newEvent = new Event({
    title: title,
    status: 'active',
    date: date ? date : new Date(),
    content: content,
    userName: userName
  });

  newEvent.save(function (err, newEvent, numberAffected) {
    if (err) {
      console.log('error adding event');
      cb({err: err});
    } else{
      console.log('event added');
      cb({result: numberAffected});
    }
  });
}

eventSchema.methods.update = function(id, title, date, status, content, userName, cb){
 
  var conditions = { _id: id };
  var update = { $set: 
    { title: title,
    status: status,
    date: date ? date : new Date(),
    content: content,
    userName: userName }
  };
  var options = { upsert: true };

  Event.update(conditions, update, options, function (err, newEvent, numberAffected) {
    if (err) {
      console.log('error adding event');
      cb({err: err});
    } else{
      console.log('event added');
      cb({result: numberAffected});
    }
  });
}

eventSchema.methods.getAll = function(cb){
  Event.find(function (err, events) {
    if (!err) {
      console.log(events);
      cb({ result: events });
    }
    else {
      console.log(err);
      cb({ err: err });
    }
  });
}

var Event = mongoose.model('Event', eventSchema);

module.exports = Event;