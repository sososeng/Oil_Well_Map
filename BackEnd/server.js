var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost/mydb');

var Well = require('./models/wells');

var port = process.env.PORT || 8080;

var router = express.Router();

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});




router.route('/getwellsinfo')
  // get all the bears (accessed at GET http://localhost:8080/api/bears)
  .get(function(req, res) {
      Well.find({},'-_id',function(err, wells) {
          if (err)
              res.send(err);
          console.log(wells);
          res.json(wells);
      });
  });


app.use('/api', router);
app.listen(port);
console.log('Magic happens on port ' + port);
