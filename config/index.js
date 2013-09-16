'use strict';

module.exports = function(app,passport) {
  // Get configuration from environment variables
  app.set('port', process.env.PORT || 3000);

  // Setup everything else
  require('./environments.js')(app);
  require('./db.js');
  require('./middleware.js')(app,passport);
  require('./routes.js')(app);
  console.log("IN INDEX !!!!!!!!!!!!!!!!!!!!!!!" + JSON.stringify(passport,null,4));



  app.post('/stuff', function(req,res){
    //may need to query req for specific model details
    var data = 'getsome stuff from database';
    res.status(200);
    res.end(data);
  });

};
