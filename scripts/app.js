var app = angular
	.module('LHSWeb', [
		'ui.router'
	])
	.config(function($urlRouterProvider, $stateProvider){
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'views/home.html'
			})
			.state('about', {
				url: '/about',
				templateUrl: 'views/about.html'
			})
	})