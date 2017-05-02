angular.module('RapidPrototype', ["ngRoute"])
	.controller('TreesController', TreesController)
	.config(routingStuff)
	.factory("Trees", Trees);

Trees.$inject = ['$http'];
function Trees($http) {
	console.log('tree factory.');
	let treeMethods = {};
	treeMethods.getAllTrees = function() {
		return $http.get('http://localhost:3000/api/trees');
	};
	treeMethods.getOneTree = function(id) {
		return $http.get('http://localhost:3000/api/trees/' + id);
	};
	return treeMethods;
}

routingStuff.$inject = ['$routeProvider'];
function routingStuff($routeProvider) {
	$routeProvider
		.when('/', {
			template: '<h1>MOMOMOMO</h1>'
		})
}

TreesController.$inject = ["Trees"];
function TreesController(Trees) {
	console.log('Tree Control.');
	var vm = this;
	vm.allTrees = [];
	Trees.getAllTrees().then(function(response) {
		vm.allTrees = response.data;
	});
}

console.log('At the bottom');