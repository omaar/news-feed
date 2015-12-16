app.factory('api', ['$http', function($http){
	var s = {
		data: [],
		loader: true
	};
	s.getAll = function(){
		return $http.get('/news').success(function(data){
			angular.copy(data, s.data);
		})
		.catch(function(err) { console.error(err); })
		.finally(function() { s.loader = false; });
	};

	return s;
}]);