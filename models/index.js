// Database Setup
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/api/trees');
let Schema = mongoose.Schema;
let TreeSchema = new Schema({
	name: String,
	bark: String,
});
let Tree = mongoose.model('Tree', TreeSchema);

module.exports.Tree = Tree;
