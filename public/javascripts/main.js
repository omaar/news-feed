var app = angular.module('newsFeed', ['ui.router', 'ngAnimate']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('/', {
		url: '/',
		templateUrl: '/index.html'
	})
	.state('news', {
		url: '/news',
		templateUrl: '/news.html',
		controller: 'NewsCtrl',
		resolve: {
			newsPromise: ['api', function(api) {
				return api.getAll();
			}]
		}
	});
	$urlRouterProvider.otherwise('news');
}]);