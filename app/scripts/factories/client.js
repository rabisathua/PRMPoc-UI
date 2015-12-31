angular.module('prmUiApp')
  .factory('clientFactory', ['$http','$window', function ($http,$window) {
  	var urlBase = 'http://localhost:3000/api/v1';
  	var clientFactory = {};
    

  	clientFactory.getClients = function () {
      var authHeaders={'access-token': $window.accessToken, 'client': $window.client, 'uid':$window.uid, 'Accept': 'application/json'};
      return $http({
        method:'GET',
        url:urlBase + '/clients?filters[by]=user',
        headers:authHeaders
      });
  	};  	

  	return clientFactory;
  }]);