angular.module('prmUiApp')
  .factory('searchPhysicianFactory', ['$http', function ($http) {
  	var urlBase = 'http://localhost:3000/api/v1';
  	var searchPhysicianFactory = {};

  	searchPhysicianFactory.getLocations = function () {
  		return $http.get(urlBase + '/locations');
  	};

  	searchPhysicianFactory.getSpecialities = function () {
  		return $http.get(urlBase + '/specialities');
  	};

  	searchPhysicianFactory.getPhysicians = function (locationId,specialityId,physicianType) {
  		return $http.get(urlBase + '/physicians?filters[location_id]='+locationId+'&filters[speciality_id]='+specialityId+'&filters[by]='+physicianType);        
  	};  	

  	return searchPhysicianFactory;
  }]);