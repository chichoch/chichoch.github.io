(function(){
    var app = angular.module('listopheApp', ['ngRoute']);

	app.config(function($routeProvider) {
		$routeProvider
			.when('/' , {
				controller: 'TrixController',
				templateUrl: 'app/views/trix.html'
			})
			.otherwise( { redirectTo: '/'});
	});

}());