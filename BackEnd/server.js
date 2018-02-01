var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

//using mongoose to connect to mongodb
var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost/mydb');


var Well = require('./models/wells');

var port = process.env.PORT || 8080;

var router = express.Router();

//for testing to see if our server is running
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});



//when we reveice a get request, will return all the wells info
router.route('/getwellsinfo')

  .get(function(req, res) {
      Well.find({},'-_id',function(err, wells) {
          if (err)
              res.send(err);
          res.json(wells);
      });
  });


app.use('/api', router);
app.listen(port);
console.log('Magic happens on port ' + port);
