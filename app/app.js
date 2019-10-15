(function(){
    var app = angular.module('listopheApp', ['ngRoute']);

	app.config(function($routeProvider) {
		$routeProvider
			.when('/' , {
				controller: 'TrixController',
				templateUrl: 'app/views/trix.html'
			})
			.when('/tåhäv', {
				controller: 'TrixController',
				templateUrl: 'app/views/fille.html'
			})
			.otherwise( { redirectTo: '/'});
	});

}());