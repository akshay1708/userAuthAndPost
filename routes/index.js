var express = require('express');
var passport = require('passport');
var Account = require('../models/account').userRegister;
var router = express.Router();

/* GET home page. */
router.get('/pro', function(req, res) {
     res.render('index', { user : req.user });
});
router.get('/auth', function(req, res, next) {
  console.log(Account);
  //res.render('index',{ user : req.user })
          var response = {};
        //  console.log(mongoPost.help());
          Account.find({},function(err,data){
          // Mongo command to fetch all data from collection.
              if(err) {
                  response = {"error" : true,"message" : "Error fetching data"};
              } else {
                  response = {data};
              }
              res.json(response);
          });
      });

router.get('/register', function(req, res)

  { res.render('register', { });
 });

 router.post('/register', function(req, res, next) {
  // console.log(req.body);
     Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
         if (err) {
           return res.render('register', { error : err.message });
         }

         passport.authenticate('local')(req, res, function () {
             req.session.save(function (err) {
                 if (err) {
                     return next(err);
                 }
                 res.redirect('/auth/index');
             });
         });
     });
 });

   router.get('/login', function(req, res) {
     res.render('login', { user : req.user });
  });
  router.get('/try', isLoggedIn, function(req, res) {
    res.render('try');
 });
 function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.send('Unauthorized SignUp/login for access');
}
router.post('/login', passport.authenticate('local'), function(req, res) {
     res.render('index', { user : req.user });
});
router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});
router.get('/ping', function(req, res){
    res.status(200).send("pong!");
});
module.exports = router;
