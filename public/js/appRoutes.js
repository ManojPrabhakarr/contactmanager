angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})
		.when('/family', {
			templateUrl: 'views/family.html',
			controller: 'FamilyController'
		})
		.when('/friends', {
			templateUrl: 'views/friends.html',
			controller: 'FriendsController'
		})
		.when('/others', {
			templateUrl: 'views/others.html',
			controller: 'OthersController'
		})

		.when('/nerds/:id', {
			templateUrl: 'views/nerd.html',
			controller: 'NerdController'
		})
		.when('/nerds', {
			templateUrl: 'views/nerd.html',
			controller: 'NerdController'
		})

		.when('/geeks', {
			templateUrl: 'views/geek.html',
			controller: 'GeekController'	
		});


	$locationProvider.html5Mode(true);

}]).constant('API_URL', 'http://localhost:3000/');