angular.module('RapidPrototype', ["ngRoute"])
	.controller('TreesController', TreesController)
	.controller('SelectedTreeController', SelectedTreeController)
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

routingStuff.$inject = ['$routeProvider',  '$locationProvider'];
function routingStuff($routeProvider,  $locationProvider) {
	$routeProvider
		.when('/', {
			templateUrl: '../templates/trees.html',
			controller: 'TreesController'
		})
		.when('/trees/:_id', {
			templateUrl: '../templates/bark.html',
			contoller: 'SelectedTreeController'
		});
		$locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
}

TreesController.$inject = ["Trees"];
function TreesController(Trees) {
	console.log('Tree Control.');
	var vm = this;
	vm.allTrees = [];
	vm.selectedTree = {};

	Trees.getAllTrees().then(function(response) {
		vm.allTrees = response.data;
	});
}


	SelectedTreeController.$inject = ["Trees", "$routeParams"];
	function SelectedTreeController(Trees, $routeParams) {
		console.log('Selected Tree in Control.')
		var vm = this;
		vm.selectedTree = {};

		console.log('$routeParams: ' + JSON.stringify($routeParams));
		Trees.getOneTree($routeParams._id).then(function(response) {
			vm.selectedTree = response.data;
			console.log(response);
			console.log(vm.selectedTree);
		});


}
console.log('At the bottom');