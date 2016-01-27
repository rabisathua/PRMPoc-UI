angular.module('prmUiApp')
  .factory('searchPhysicianFactory', ['$http','$window','$q','store', function ($http,$window,$q,store) {
  	var urlBase = 'http://localhost:3000/api/v1';
  	var searchPhysicianFactory = {};
    var authHeaders={'Authorization':"Bearer "+ store.get('token'), 'client': 'email',  'Accept': 'application/json'};

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
      authHeaders["clients"] = JSON.stringify(store.get('selectedClients'));
      return httpPromise('specialities','specialities');
  	};

  	searchPhysicianFactory.getPhysicians = function (locationId,specialityId,physicianType) {
      var perPage = 2;
      var page = 1;
      authHeaders["clients"] = JSON.stringify(store.get('selectedClients'));
  		return httpPromise('physicians?filters[location_id]='+locationId+'&filters[speciality_id]='+specialityId+'&filters[by]=""&per_page='+perPage+'&page='+page,'physicians');
  	};

  	return searchPhysicianFactory;
  }]);
