// script.js

	// create the module and name it scotchApp
	var myApp = angular.module('myApp', ['ngRoute']);

	// configure our routes
	myApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/homework', {
				templateUrl : 'pages/homework.html',
				controller  : 'homeworkController'
			})

			// route for the contact page
			.when('/events', {
				templateUrl : 'pages/events.html',
				controller  : 'eventsController'
			})

			// route for school cheats
			.when('/schoolcheats', {
				templateUrl : 'pages/schoolcheats.html',
				controller  : 'schoolcheatsController'
			})

			.when('/jayssupport', {
				templateUrl : 'pages/jayssupport.html',
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
	myApp.controller('schoolcheatsController', function($scope) {

		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
	});

	// create the controller and inject Angular's $scope
	myApp.controller('jayssupportController', function($scope) {

		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
	});