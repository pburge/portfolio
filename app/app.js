var portfolio = angular.module('pburge',['mm.foundation','ngRoute']);

portfolio.config(function($routeProvider) {
	$routeProvider.
		when('/',{ templateUrl: 'app/templates/main.tpl' }).
		when('/dev',{ templateUrl: 'app/templates/secondary.tpl' }).
		when('/gallery',{ templateUrl: 'app/templates/gallery.tpl' }).

		otherwise({ redirectTo: '/' }
	);
});