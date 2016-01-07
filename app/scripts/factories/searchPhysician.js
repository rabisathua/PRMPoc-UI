angular.module('prmUiApp')
  .factory('searchPhysicianFactory', ['$http','$window','$q', function ($http,$window,$q) {
  	var urlBase = 'http://localhost:3000/api/v1';
  	var searchPhysicianFactory = {};
    var authHeaders={'access-token': $window.accessToken, 'client': $window.client, 'uid':$window.uid, 'Accept': 'application/json', 'app-id': JSON.stringify($window.appIds)};

    function httpPromise (url,msg) {
      var deferred = $q.defer();
      $http({
        method:'GET',
        url:urlBase + '/' + url,
        headers:authHeaders
      })
        .success(function (data) {
          deferred.resolve(data);
        })
        .error(function () {
              alert('Failed to load ' + msg);
              deferred.reject();
        });
      return deferred.promise;
    }

  	searchPhysicianFactory.getLocations = function () {
      return httpPromise('locations','locations');
    };

  	searchPhysicianFactory.getSpecialities = function () {
      authHeaders["app-id"] = JSON.stringify($window.appIds);
      return httpPromise('specialities','specialities');
  	};

  	searchPhysicianFactory.getPhysicians = function (locationId,specialityId,physicianType) {
      var perPage = 2;
      var page = 1;
  		return httpPromise('physicians?filters[location_id]='+locationId+'&filters[speciality_id]='+specialityId+'&filters[by]='+physicianType+'&per_page='+perPage+'&page='+page,'physicians');
  	};

  	return searchPhysicianFactory;
  }]);
