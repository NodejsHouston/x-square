var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  name: String,
  email: {type: String, unique: true},
  isActive: Boolean,
  joinDate: Date
});

userSchema.methods.create = function(userName, userEmail, cb){
 
  var newUser = new User({
    name: userName,
    email: userEmail
  });

  newUser.save(function (err, newUser, numberAffected) {
    if (err) {
      console.log('error adding user');
      cb({err: err});
    } else{
      console.log('user added');
      cb({result: numberAffected});
    }
  });
}

userSchema.methods.delete = function(userEmail, cb){

  User.remove({ email: userEmail}, function(err) {
    if (!err) {
      console.log('user deleted');
      cb({ result: 'user removed' });
    }
    else {
      console.log('error removing user');
      cb({ err: err });
    }
  });
}

userSchema.methods.getAll = function(cb){
  User.find(function (err, users) {
    if (!err) {
      console.log(users);
      cb({ result: users });
    }
    else {
      console.log(err);
      cb({ err: err });
    }
  });
}

var User = mongoose.model('User', userSchema);

module.exports = User;