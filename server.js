'use strict';

var express = require('express');
var passport = require('passport');
var http = require('http');
var db = require('./models/db.js');
var User = require('./models/User.js');
// Create an app
var app = express();

// Get configuration from environment variables
app.set('port', process.env.PORT || 3000);

// Setup everything else
require('./config/environments.js')(app);

//app.use(express.static(__dirname + '../../public'));
app.use(express.logger('dev'));
app.use(express.cookieParser());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.session({ secret: 'SECRET'}));
app.use(passport.initialize());
app.use(passport.session());

// Use local strategy
passport.use(User.localStrategy);

//Passport logic
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(obj, done) {
  done(null,obj);
});


//Pass app and passport to routes.js
require('./config/routes')(app, passport);
app.use(app.router);

 app.post('/login', function(req, res, next) {
    // console.log("req.body : ", req.body);
    // console.log("req.session : ", req.session);

    passport.authenticate('local', function(err, user, info) {
      if (err || !user) { res.send(402); }
      console.log("Req.user ", req.user);
      req.logIn(user, function(err) {
        if (err){
          console.log('Routes/App.post/login' + err);
          res.send(403);
        }
        res.send(200, '/races');
        console.log("req.user : ", req.user);
        console.log('After app.post success', err, user, info);
      });
    })(req, res, next);
  });



http.createServer(app).listen(app.get('port'), function () {
  console.log("Express server listening on port %d in %s mode", app.get('port'), app.get('env'));
});