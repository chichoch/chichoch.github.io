(function(){
    var app = angular.module('listopheApp', ['ngRoute']);

	app.config(function($routeProvider) {
		$routeProvider
			.when('/' , {
				controller: 'ListController',
				templateUrl: 'app/views/list.html'
			})
			.otherwise( { redirectTo: '/'});
	});

}());