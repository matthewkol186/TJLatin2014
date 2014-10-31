	var app = angular
		.module('LHSWeb', [
			'ui.router'
		])
		.controller('CarouselCtrl', function($scope){
			$scope.$on('$viewContentLoaded', function() {
				var $window = $(window).on('resize', function(){
			       var height = $(this).height() - $('#topnavbar').height();
			       $('.photo-carousel > div').height(.7*height);
			    }).trigger('resize');

		        $('.photo-carousel').slick({
		            autoplay: true,
		            autoplaySpeed: 5000,
		            dots: true
		        });
			});


		})
		.config(function($urlRouterProvider, $stateProvider){
			$urlRouterProvider.otherwise('/');

			$stateProvider
				.state('home', {
					url: '/',
					templateUrl: 'views/home.html',
					controller: 'CarouselCtrl'
				})
				.state('about', {
					url: '/about',
					templateUrl: 'views/about.html'
				})
		})