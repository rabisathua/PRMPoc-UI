angular.module('prmUiApp')
  .factory('clientFactory', ['$http','$window', 'store', function ($http,$window,store) {
  	var urlBase = 'http://localhost:3000/api/v1';
  	var clientFactory = {};


  	clientFactory.getClients = function () {
      var authHeaders={'Authorization':"Bearer "+ store.get('token'), 'client': 'email',  'Accept': 'application/json', 'clients': "[2,3]"};
      return $http({
        method:'GET',
        url:urlBase + '/clients?filters[by]=user',
        headers:authHeaders
      });
  	};

  	return clientFactory;
  }]);
