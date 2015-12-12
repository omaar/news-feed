var app = angular.module('newsFeed', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
	$stateProvider
	.state('news', {
		url: '/news',
		templateUrl: '/news.html',
		controller: 'NewsCtrl'
	})
	.state('new', {
		url: '/new',
		templateUrl: '/new',
		controller: 'NewCtrl'
	});
	$urlRouterProvider.otherwise('news');
	//$locationProvider.html5Mode(true);
}]);

app.controller('NewsCtrl', ['$scope', function($scope){
	$scope.titleP = ['New 1', 'New 2', 'New 3'];
}]);

app.controller('NewCtrl', ['$scope', '$stateParams', function($scope, $stateParams){
}]);