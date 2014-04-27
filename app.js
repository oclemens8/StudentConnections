// script.js

	// create the module and name it scotchApp
	var myApp = angular.module('myApp', ['ngRoute']);

	// configure our routes
	myApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'Pages/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/homework', {
				templateUrl : 'Pages/homework.html',
				controller  : 'homeworkController'
			})

			// route for the contact page
			.when('/events', {
				templateUrl : 'Pages/events.html',
				controller  : 'eventsController'
			})

			// route for school cheats
			.when('/schoolcheats', {
				templateUrl : 'Pages/schoolcheats.html',
				controller  : 'schoolcheatsController'
			})

			.when('/jayssupport', {
				templateUrl : 'Pages/jayssupport.html',
				controller  : 'jayssupportController'
			}); 
	});

	// create the controller and inject Angular's $scope
	myApp.controller('mainController', function($scope) {

		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
	});

	// create the controller and inject Angular's $scope
	myApp.controller('homeworkController', function($scope) {

		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
	});

	// create the controller and inject Angular's $scope
	myApp.controller('eventsController', function($scope) {

		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
	});

	// create the controller and inject Angular's $scope
	myApp.controller('schoolcheatsController', function($scope, $http) {

		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!'; 
		$scope.ACTcheats = [];

		$http.get('/ACTcheats')
		.success(function(ACTcheats) {
	      	$scope.loaded = true;
	      	$scope.ACTcheats = ACTcheats;
	    }).error(function(err) {
	      alert(err);
	    });
	    $scope.createcheat = function(title) {
	    $http.post('/ACTcheats', {
	      title: title
	    }).success(function(ACTcheat) {
	      $scope.newTodoTitle = '';
	      $scope.ACTcheats.push(ACTcheat);
	    }).error(function(err) {
	      // Alert if there's an error
	      return alert(err.message || "an error occurred");
	    });
 	};

	});

	// create the controller and inject Angular's $scope
	myApp.controller('jayssupportController', function($scope) {

		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
	});