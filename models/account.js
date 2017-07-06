var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');
var conPost=mongoose.connect('mongodb://localhost/passport_local');
//var conUser=mongoose.connect('mongodb://localhost/passport_users');
var Account = new Schema({
  username: String,
  password: String
},{ collection : 'passport_users' });
var postSchema  = new Schema({
    "heading":String,
    "content":String,
  //   "name":String,
  // "price":Number
}, { collection : 'passport_local' });
  Account.plugin(passportLocalMongoose);
var userRegister = mongoose.model('Account', Account);
var postsAll = mongoose.model('postData',postSchema);
module.exports={
    postsAll,
    userRegister
  };
