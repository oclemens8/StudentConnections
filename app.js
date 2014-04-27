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
				templateUrl : 'Pages/jayssuport.html',
				controller  : 'jayssupportController'
			}) 

			.when('/signin', {
				templateUrl : 'Pages/signin.html',
				controller  : 'signinController'
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
		$scope.ACTcheats = [{
		text: "This is an example cheat"
		}];

	    $scope.createcheat = function() {
	      $scope.ACTcheats.push({
            text: $scope.ACTcheat
        	});
	      $scope.ACTcheat = '';
	    };

	    $scope.Resumecheats = [{
		text: "This is an example cheat"
		}];

	    $scope.createResumecheat = function() {
	      $scope.Resumecheats.push({
            text: $scope.Resumecheat
        	});
	      $scope.Resumecheat = '';
	    };

	    $scope.Generalcheats = [{
		text: "This is an example cheat"
		}];

	    $scope.createGeneralcheat = function() {
	      $scope.Generalcheats.push({
            text: $scope.Generalcheat
        	});
	      $scope.Generalcheat = '';
	    };

	     $scope.Othercheats = [{
		text: "This is an example cheat"
		}];

	    $scope.createOthercheat = function() {
	      $scope.Othercheats.push({
            text: $scope.Othercheat
        	});
	      $scope.Othercheat = '';
	    };
	});

	// create the controller and inject Angular's $scope
	myApp.controller('jayssupportController', function($scope) {

		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
	});

	myApp.controller('signinController', function($scope) {

		// create a message to display in our view
		$scope.username = [{
		name: "", 
		signedin:false 
		}];

		$scope.signin = function(username) {
	     $scope.username = [{
		name: username, 
		signedin:true 
		}]; 
	    };
	});
