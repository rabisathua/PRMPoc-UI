angular.module('prmUiApp')
  .factory('searchPhysicianFactory', ['$http','$window', function ($http,$window) {
  	var urlBase = 'http://localhost:3000/api/v1';
  	var searchPhysicianFactory = {};
    var authHeaders={'access-token': $window.accessToken, 'client': $window.client, 'uid':$window.uid, 'Accept': 'application/json', 'app-id': JSON.stringify($window.appIds)};

  	searchPhysicianFactory.getLocations = function () {
  		return $http({
        method:'GET',
        url:urlBase + '/locations' ,
        headers:authHeaders
      });
    };
  	searchPhysicianFactory.getSpecialities = function () {
      authHeaders["app-id"] = JSON.stringify($window.appIds);
      return $http({
        method:'GET',
        url:urlBase + '/specialities',
        headers:authHeaders
      });
  	};

  	searchPhysicianFactory.getPhysicians = function (locationId,specialityId,physicianType,perPage,page) {
      perPage = 2;
      page = 1;
  		return $http({
        method:'GET',
        url:urlBase + '/physicians?filters[location_id]='+locationId+'&filters[speciality_id]='+specialityId+'&filters[by]='+physicianType+'&per_page='+perPage+'&page='+page,
        headers:authHeaders
      });
  	};

  	return searchPhysicianFactory;
  }]);
