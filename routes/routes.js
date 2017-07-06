const express = require('express');
const router = express.Router();
var passport = require('passport');
var path=require("path");
var Account = require('../models/account').userRegister;
//const config = require('../config/db');
var mongoPost  =   require("../models/account").postsAll;
//var mongoPost = mongoPost0.postsAll;
// router.get('/',isLoggedIn, function(req, res) {
//
// });
function isLoggedIn(req, res, next) {

  // if user is authenticated in the session, carry on
  if (req.isAuthenticated())
      return next();

  // if they aren't redirect them to the home page
  res.send('Unauthorized SignUp/login for access');
}
router.get("/api/posts",isLoggedIn,function(req,res){
            var response = {};
      //  console.log(mongoPost.help());
        mongoPost.find({},function(err,data){
        // Mongo command to fetch all data from collection.
            if(err) {

                response = {"error" : true,"message" : "Error fetching data"};
            } else {
                response = {data};
            }
            res.json(response);
        });
    });
    router.post("/addpost",isLoggedIn,function(req,res){
      //console.log("inside/add");
            var db = new mongoPost();
            var response = {};

            db.heading = req.body.heading;
            db.content = req.body.content;


            db.save(function(err){
            // save() will run insert() command of MongoDB.
            // it will add new data in collection.
                if(err) {
                    response = {"error" : true,"message" : "Error adding data"};
                      res.json(response);
                }
                else {
                  mongoPost.find({},function(err,data){
                  // Mongo command to fetch all data from collection.
                      if(err) {
                          response = {"error" : true,"message" : "Error fetching data"};
                      } else {
                          response = {data};
                      }
                      res.json(response);

              });
                }
              });//save
        });

        router.delete('/deletepost/:id', function(req,res,next){
          //res.send('delete');
          console.log(req);
              mongoPost.findOneAndRemove({_id: req.params.id},function (err) {
                if(err)
                  res.send(err);

                mongoPost.find({},function(err,data){
                // Mongo command to fetch all data from collection.
                    if(err) {
                        response = {"error" : true,"message" : "Error fetching data"};
                    } else {
                        response = {data};
                    }
                    res.json(response);

            });
        });
      });
module.exports = router;
