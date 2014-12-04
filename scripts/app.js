	var app = angular
		.module('LHSWeb', [
			'ui.router', 'uiRouterStyles', 'ui.bootstrap'
		])
		app.controller('NavCtrl', function($scope, $location) {
		    $scope.isActive = function(route) {
		        return route === $location.path();
		    };
		})
		.controller('CarouselCtrl', function($scope){
			$scope.$on('$viewContentLoaded', function() {
				var $window = $(window).on('resize', function(){
			       var height = $(this).height() - $('#topnavbar').height();
			       $('.photo-carousel > div').height(.7*height);
			    }).trigger('resize');

		        $('.photo-carousel').slick({
		            autoplay: true,
		            autoplaySpeed: 8000,
		            dots: true
		        });
			});
		})
		.controller('CalendarCtrl', function($scope){
			$scope.$on('$viewContentLoaded', function() {
				$('#calendar').fullCalendar({
			        googleCalendarApiKey: 'AIzaSyBXUF57HvQ6O_va1z21Rkhr63TkJQKumCM',
			        events: {
			            googleCalendarId: 'tjlatinhonorsociety@gmail.com'
			        }
			    });
			});
		})
		.controller('AccordionCtrl', function($scope){
			$scope.oneAtATime = true;

			$scope.groups = [
			{
				title: 'Dynamic Group Header - 1',
				content: 'Dynamic Group Body - 1'
			},
			{
				title: 'Dynamic Group Header - 2',
				content: 'Dynamic Group Body - 2'
			}
			];

			$scope.items = ['Item 1', 'Item 2', 'Item 3'];

			$scope.addItem = function() {
				var newItemNo = $scope.items.length + 1;
				$scope.items.push('Item ' + newItemNo);
			};

			$scope.status = {
				isFirstOpen: true,
				isFirstDisabled: false
			};
		})
		.controller('ScribeCtrl', function($scope, $sce){
			$scope.currentUrl = $sce.trustAsResourceUrl("http://docs.google.com/viewer?url=https%3A%2F%2Factivities.tjhsst.edu%2Flatin%2FEvents%2FSept_Oct_Newsletter.pdf&embedded=true");

			$scope.yearLinks = 
			{
			"2013": 
				[
					{month: "September/October", link: "http://docs.google.com/viewer?url=https%3A%2F%2Factivities.tjhsst.edu%2Flatin%2FEvents%2FSept_Oct_Newsletter.pdf&embedded=true"}
				],
			"2012": 
				[
					{month: "September/October", link: "http://docs.google.com/viewer?url=https%3A%2F%2Factivities.tjhsst.edu%2Flatin%2FEvents%2FFall.pdf&embedded=true"},
					{month: "November/December", link:"http://docs.google.com/viewer?url=https%3A%2F%2Factivities.tjhsst.edu%2Flatin%2FEvents%2FNov-Dec.pdf&embedded=true"},
					{month: "January/February", link: "http://docs.google.com/viewer?url=https%3A%2F%2Factivities.tjhsst.edu%2Flatin%2FEvents%2FJan-Feb.pdf&embedded=true"}
				],
			};

			$scope.setNewSource = function (url) {
			  $scope.currentUrl = $sce.trustAsResourceUrl(url);
			}
		})
		.controller('ImageCtrl', function($scope, $sce){
			$scope.browsingAlbums = true;

			$scope.years = ["2014", "2013", "2012"];
			$scope.thumbs = 
			{
			"2014": 
				[
					{title: "Ides of March", thumbnail: "img/albums/idesofmarch2014/1.JPG", filepath: "idesofmarch2014", images: [
						{
							title: 'Storming the Halls',
							filename: '1.jpg'
						}, {
							title: 'Veteres Gerentes Togas',
							filename: '2.jpg'
						}, {
							title: 'Fearless Leaders',
							filename: '3.jpg'	
						}, {
							title: 'Ora Patent',
							filename: '4.jpg'
						}, {
							title: 'Lost Romans',
							filename: '5.jpg'
						}, {
							title: 'Oratio',
							filename: '6.jpg'
						}, {
							title: 'Caesar Waves',
							filename: '7.jpg'
						}, {
							title: 'Excited Underclassmen',
							filename: '8.jpg'
						}, {
							title: 'Looking Forward',
							filename: '9.jpg'
						}

					]}
				],
			"2013": 
				[
					{title: "VJCL Convention", thumbnail: "img/albums/convention2013/1.JPG", filepath:"convention2013", images: [
						{
							title: 'Pueri Clamant',
							filename: '1.jpg'
						}, {
							title: 'Multitudino Stat',
							filename: '2.jpg'
						}, {
							title: 'Puellae Subrident',
							filename: '3.jpg'	
						}, {
							title: 'Princeps Loquens',
							filename: '4.jpg'
						}, {
							title: 'Notus Observans',
							filename: '5.jpg'
						}, {
							title: 'Artifex',
							filename: '6.jpg'
						}, {
							title: 'Omnes Laeti',
							filename: '7.jpg'
						}, {
							title: 'Sapientes',
							filename: '8.jpg'
						}, {
							title: 'Domini Omnium',
							filename: '9.jpg'
						}

					]},
					{title: "Ides of March", thumbnail: "img/albums/idesofmarch2013/1.JPG", filepath:"idesofmarch2013", images: [
						{
							title: 'Ferentes',
							filename: '1.JPG'
						}, {
							title: 'Non Subridens',
							filename: '2.JPG'
						}, {
							title: 'Laetissimi',
							filename: '3.JPG'	
						}, {
							title: 'Parvi Romani',
							filename: '4.JPG'
						}, {
							title: 'Multi Nitentes',
							filename: '5.JPG'
						}, {
							title: 'Grandes et Adulescentes',
							filename: '6.JPG'
						}, {
							title: 'In Castris',
							filename: '7.JPG'
						}, {
							title: 'Observantes Kardinem',
							filename: '8.JPG'
						}, {
							title: 'Est Mortuus',
							filename: '9.JPG'
						}, {
							title: 'Fortis Miles',
							filename: '10.JPG'
						}, {
							title: 'Magna Forma',
							filename: '11.JPG'
						}, {
							title: 'Iacens',
							filename: '12.JPG'
						}, {
							title: 'Maesti',
							filename: '13.JPG'
						}, {
							title: 'Laeti',
							filename: '14.JPG'
						}, {
							title: 'Plures Laeti',
							filename: '15.JPG'
						}

					]},
					{title: "Lupercalia", thumbnail: "img/albums/lupercalia2013/1.JPG", filepath:"lupercalia2013", images: [
						{
							title: 'Duces',
							filename: '1.JPG'
						}, {
							title: 'Solus Equus',
							filename: '2.JPG'
						}, {
							title: 'In Complexu',
							filename: '3.JPG'	
						}, {
							title: 'Loquimini Equum',
							filename: '4.JPG'
						}, {
							title: 'Tenentes Caudas',
							filename: '5.JPG'
						}, {
							title: 'Equus Secundus',
							filename: '6.JPG'
						}, {
							title: 'Monstruosae Rei',
							filename: '7.JPG'
						}, {
							title: 'Quid.',
							filename: '8.JPG'
						}, {
							title: 'Quid II.',
							filename: '9.JPG'
						}, {
							title: 'Amicae',
							filename: '10.JPG'
						}, {
							title: 'Semper Spectans',
							filename: '11.JPG'
						}, {
							title: 'Simul Tripudiant',
							filename: '12.JPG'
						}, {
							title: 'Cum Barbaro',
							filename: '13.JPG'
						}, {
							title: 'Puer et Puella',
							filename: '14.JPG'
						}, {
							title: 'Optimi Amici',
							filename: '15.JPG'
						}

					]},
					{title: "VJCL Convention Roundup", thumbnail: "img/albums/roundup2013/1.JPG", filepath:"roundup2013", images: [
						{
							title: 'Monstrans Drama',
							filename: '1.jpg'
						}, {
							title: 'Dant Praemia',
							filename: '2.jpg'
						}, {
							title: 'Vocans Nomina',
							filename: '3.jpg'	
						}, {
							title: 'Petens',
							filename: '4.jpg'
						}, {
							title: 'Magna Voce',
							filename: '5.jpg'
						}, {
							title: 'Texens Fabulam',
							filename: '6.jpg'
						}, {
							title: 'Laete Tradens',
							filename: '7.jpg'
						}, {
							title: 'Oratio',
							filename: '8.jpg'
						},
					]},
					{title: "UVA Classics Day", thumbnail: "img/albums/uvaclassics2013/1.JPG", filepath:"uvaclassics2013", images: [
						{
							title: 'Laeti Amici',
							filename: '1.jpg'
						}, {
							title: 'Arripientes Praemia',
							filename: '2.jpg'
						}, {
							title: 'Subridentes Parvi',
							filename: '3.jpg'	
						}, {
							title: 'Plus Subridentum',
							filename: '5.jpg'
						}, {
							title: 'Oratio',
							filename: '6.jpg'
						}, {
							title: 'Laeti Amici Cum Magistra Optima Dea',
							filename: '7.jpg'
						}, {
							title: 'Impeti',
							filename: '8.jpg'
						}, {
							title: 'Quattuor Musketeers',
							filename: '9.jpg'
						}

					]}
				],
			"2012": 
				[
					{title: "Induction Ceremony", thumbnail: "img/albums/LHS2012/1.JPG", filepath:"LHS2012", images: [
						{
							title: 'Pulcherrima Mensa',
							filename: '1.JPG'
						}, {
							title: 'Ianitores',
							filename: '2.JPG'
						}, {
							title: 'Geminae',
							filename: '3.JPG'	
						}, {
							title: 'Epidipnes',
							filename: '4.JPG'
						}, {
							title: 'Strenuae Puellae',
							filename: '5.JPG'
						}, {
							title: 'Maximi',
							filename: '6.JPG'
						}, {
							title: 'Puellae Gerentes Coronas',
							filename: '7.JPG'
						}, {
							title: 'Recitatio',
							filename: '8.JPG'
						}, {
							title: 'Gravis Ritus',
							filename: '9.JPG'
						}, {
							title: 'Duo Magistrae',
							filename: '10.JPG'
						}, {
							title: 'Laudantes',
							filename: '11.JPG'
						}

					]}
				],
			};

			$scope.switch = function(){
				$scope.browsingAlbums = !$scope.browsingAlbums;
			};

			$scope.setCurrentAlbum = function(album){
				$scope.currentAlbum = album;
			}
		})
		.config(function($urlRouterProvider, $stateProvider){
			$urlRouterProvider.otherwise('/home');

			$stateProvider
				.state('home', {
					url: '/home',
					templateUrl: 'views/home.html',
					controller: 'CarouselCtrl'
				})
				.state('about', {
					url: '/about',
					templateUrl: 'views/about.html',
				})
				.state('scribe', {
					url: '/scribe',
					templateUrl: 'views/scribe.html',
					controller: 'ScribeCtrl'
				})
				.state('image', {
					url: '/image',
					templateUrl: 'views/image.html',
					controller: 'ImageCtrl'
				})
				.state('calendar', {
					url: '/calendar',
					templateUrl: 'views/calendar.html',
					controller: 'CalendarCtrl'
				})
				.state('convention', {
					url: '/convention',
					templateUrl: 'views/convention.html',
				})
				.state('forum', {
					url: '/forum',
					templateUrl: 'views/forum.html',
				})
				.state('studyguides', {
					url: '/studyguides',
					templateUrl: 'views/studyguides.html',
					controller: 'AccordionCtrl'
				})
				.state('interactivequizzes', {
					url: '/interactivequizzes',
					templateUrl: 'views/interactivequizzes.html',
				})
				.state('conventiontests', {
					url: '/conventiontests',
					templateUrl: 'views/conventiontests.html',
				})
				.state('2013awards', {
					url: '/2013awards',
					templateUrl: 'views/2013awards.html',
				})
				.state('sitemap', {
					url: '/sitemap',
					templateUrl: 'views/sitemap.html',
				})
		})