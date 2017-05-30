// (more/less) COPIED AND PASTED FROM...
// https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4

// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express

var port = process.argv[2] || process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/api', (req, res) => {
    res.json({ message: 'hooray! welcome to our api!' });   
});

router.get('/', (req, res) => {
    res.send("Hello, world!");
});

// REGISTER OUR ROUTES -------------------------------
app.use('/', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);