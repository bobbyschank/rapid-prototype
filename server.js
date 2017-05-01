let express = require('express');
let app = express();

let db  = require('./models');

let bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

// GET ALL THE TREES
app.get('/api/trees/', function(req, res) {
	console.log('INDEX');
	db.Tree.find({}, function(err, foundTrees) {
		if (err) {console.log('INDEX ERROR: ' + err);}
		res.json(foundTrees);
	});
});

// SHOW
app.get('/api/trees/:_id', function(req, res) {
	console.log('SHOW');
	db.Tree.findOne({_id: req.params._id}, function(err, foundTree) {
		if  (err) {console.log('SHOW ERROR: ' + err);}
		res.json(foundTree);
	});
});


app.listen(3000, function() {
	console.log('Express Server Running on localhost 3000');
});