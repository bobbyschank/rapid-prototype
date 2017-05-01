angular.module('RapidPrototype')
	.controller('TreesController', TreesController);


function TreesController(){
	var context = this;
	context.treesList = [];


	function getTrees() {
		console.log('IN GET TREES');
		$http
			.
	}
}