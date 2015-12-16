app.controller('NewsCtrl', ['$scope', 'api', '$document',  function($scope, api, $document){
	$scope.message = 'Cargando';
	$scope.show = [];
	$scope.news = api.data;
	$scope.loader = api.loader;
	$scope.toggleContent = function(id) {
		var content = document.getElementById(id);
		if ($scope.show[id]) {
			content.setAttribute("class", "panel panel-default content ng-leave")
			setTimeout(function() {
				content.setAttribute("class", "panel panel-default content ng-hide");
			}, 699);
		}else{ content.setAttribute("class", "panel panel-default content ng-enter") };
		$scope.show[id] = !$scope.show[id];
	};
	$scope.like = function(article) {
		article.id += 1;
	};
}]);