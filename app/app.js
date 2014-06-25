var portfolio = angular.module('pburge',['ngRoute']);

portfolio.config(function($routeProvider) {
	$routeProvider.
		when('/',{ templateUrl: 'app/templates/main.tpl' }).
		otherwise({ redirectTo: '/' });		
	}
);