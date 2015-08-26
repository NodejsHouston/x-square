var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    autoIncrement = require('mongoose-auto-increment'),
    db = require('../config/db').db;

autoIncrement.initialize(db);

var User = new Schema({

    /**
      userName. It can only contain valid email id, should be unique, is required and indexed.
      We will need to make a function that on creation will parse the value to ensure it is in email address format
    */
    userName: {
        type: String,
        unique: true,
        required: true
    },

    /**
      password. It can only contain string, is required field.
    */
    password: {
        type: String,
        required: true
    },

    /**
    Scope. It can only contain string, is required field, and should have value from enum array.
    Administrator is not a standard user. It's only purpose is to manage and maintain
    Master is a "local" adminstrator, as in they would be more of what you might call an authenticator. Ex. "Dive Master", "Sky Diving Trainer". May not even be applicable and we may get rid of
    Athlete is just a general user.
  */
    scope: {
        type: String,
        enum: ['Administrator', 'Master', 'Athlete'],
        required: true
    },

    /**
      propertyId. It can only contain string.
    */
    isVerified: {
        type: Boolean,
        default: false
    }


});

User.plugin(autoIncrement.plugin, {
    model: 'user',
    field: '_id'
});

User.statics.saveUser = function(requestData, callback) {
    this.create(requestData, callback);
};

User.statics.updateUser = function(user, callback) {
    user.save(callback);
};

User.statics.findUser = function(userName, callback) {
    this.findOne({
        userName: userName
    }, callback);
};

User.statics.findUserByIdAndUserName = function(id, userName, callback) {
    this.findOne({
        userName: userName,
        _id: id
    }, callback);
};

var user = mongoose.model('user', User);

module.exports = {
    User: user
};
