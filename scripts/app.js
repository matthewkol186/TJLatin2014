	var app = angular
		.module('LHSWeb', [
			'ui.router'
		])
		.directive('titleImage', function(){
			return{

			}
		})
		.directive('captionImage', function(){
			return{

			}
		})
		.controller('CarouselCtrl', function($scope){
			$scope.$on('$viewContentLoaded', function() {
				var $window = $(window).on('resize', function(){
			       var height = $(this).height() - $('#topnavbar').height();
			       $('.photo-carousel > div').height(.7*height);
			       //$('.caption-image').height($('.title-image').height());
		           //$('.caption-image').outerWidth($('.photo-carousel').outerWidth() - $('.title-image').outerWidth());
			    }).trigger('resize');
				
				/*$(".title-image").resize(function(e){
					console.log($('.title-image > h1').width() + "whee");	
					console.log($('.title-image > h1').css( "display" ));
					$('.caption-image').outerWidth($('.photo-carousel').outerWidth() - $('.title-image').outerWidth());
				});*/

		        $('.photo-carousel').slick({
		            //autoplay: true,
		            //autoplaySpeed: 5000
		        });
		        /*$('.title-image').css({
					"background-color": "#FFD700",
					 "padding": "10px",
					 "display": "inline",
					 "float": "left"
				});

		        $('.caption-image').css({
					"padding": "10px",
					"margin": "0px",
					"background-color": "rgba(96, 33, 87, 0.75)",
					"display": "inline",
					"float": "left"
				});

				$('.title-image > h1').css({
					"padding": "0px",
					"margin": "0px",
					"display": "inline-block",
					"float": "left"
				});

				console.log($('.title-image > h1').width() + "whee");
				console.log($('.title-image > h1').css( "display" ));

		        $('.caption-image').height($('.title-image').height());
		        $('.caption-image').outerWidth($('.photo-carousel').outerWidth() - $('.title-image').outerWidth());
		        $(window).load(function(){
		        	$('.caption-image').height($('.title-image').height());
		        	$('.caption-image').outerWidth($('.photo-carousel').outerWidth() - $('.title-image').outerWidth());
		        	console.log($('.title-image').outerWidth());
		        });*/
			});


		})
		.config(function($urlRouterProvider, $stateProvider){
			$urlRouterProvider.otherwise('/');

			$stateProvider
				.state('home', {
					url: '/',
					templateUrl: 'views/hometest.html',
					controller: 'CarouselCtrl'
				})
				.state('about', {
					url: '/about',
					templateUrl: 'views/about.html'
				})
		})