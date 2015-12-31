angular.module('prmUiApp')
  .factory('searchPhysicianFactory', ['$http','$window', function ($http,$window) {
  	var urlBase = 'http://localhost:3000/api/v1';
  	var searchPhysicianFactory = {};
    var authHeaders={'access-token': $window.accessToken, 'client': $window.client, 'uid':$window.uid};

  	searchPhysicianFactory.getLocations = function () {
  		return $http({
        method:'GET',
        url:urlBase + '/locations' ,
        headers:authHeaders
      });
    };
  	searchPhysicianFactory.getSpecialities = function () {
  		return $http({
        method:'GET',
        url:urlBase + '/specialities',
        headers:authHeaders
      });
  	};

  	searchPhysicianFactory.getPhysicians = function (locationId,specialityId,physicianType) {
  		return $http({
        method:'GET',
        url:urlBase + '/physicians?filters[location_id]='+locationId+'&filters[speciality_id]='+specialityId+'&filters[by]='+physicianType,
        headers:authHeaders
      });
  	};

  	return searchPhysicianFactory;
  }]);
