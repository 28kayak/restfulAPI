/**
 * Created by kaya on 2/6/16.
 */
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

//receive data by POST
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//direct port 3000
var port = process.env.PORT || 3000;

//prepare to use API-sever by express
var router = express.Router();
router.use(function(req, res, next){
    console.log("something is happening");
    next();
});

router.get('/', function(req,res){
    //res.json({message: 'Successfully Posted a test message'});
    res.send("<html> <head>  </head> <body> <h1>Hello</h1> </body> </html>")
});


//register routering
app.use('/api', router);

//start server
app.listen(port);
console.log('listen on port' + port);