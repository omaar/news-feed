var app = angular.module('newsFeed', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
	$stateProvider
	.state('news', {
		url: '/news',
		templateUrl: '/news.html',
		controller: 'NewsCtrl',
		resolve: {
			newsPromise: ['news', function(news) {
				return news.getAll();
			}]
		}
	})
	.state('new', {
		url: '/new',
		templateUrl: '/new',
		controller: 'NewCtrl'
	});
	$urlRouterProvider.otherwise('news');
	//$locationProvider.html5Mode({enabled: true, requireBase: false}).hashPrefix('!');
}]);

app.controller('NewsCtrl', ['$scope', 'news', function($scope, news){
	$scope.title = 'News Feed';
	$scope.titleP = news.data;
}]);

app.controller('NewCtrl', ['$scope', '$stateParams', function($scope, $stateParams){
}]);

app.factory('news', ['$http', function($http){
	var s = {
		data: []
	};
	s.getAll = function(){
		return $http.get('/news').success(function(data){
			angular.copy(data, s.data);
		});
	};

	return s;
}]);