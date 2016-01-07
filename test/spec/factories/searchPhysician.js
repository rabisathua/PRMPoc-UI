'use strict';
describe('Factory: searchPhysicianFactory', function () {
	var urlBase = 'http://localhost:3000/api/v1';
	var locationsData = [{"id":1,"name":"Ap #404-7680 Id, Av.","zip":"52151"}];
	var specialtyData = [{"id":1,"name":"Allergy and Immunology"}];
	var physicianData = [{"id":1,"qualification":"BDM","designation":"Dr.","group":"C","address":"832-445 Dui Ave","department":"Advertising","first_name":"Willa","middle_name":"Cohen","npi_number":1,"last_name":"Kendall","email":"ligula@sapiengravida.org","years_of_experience":"1.0","is_involved":false,"is_lead":false,"speciality_id":6,"location_id":1,"client_id":7,"created_by":1,"updated_by":1,"created_at":"2015-12-08T15:13:48.000Z","updated_at":"2015-12-08T15:13:48.000Z"}];
	var searchPhysicianFactory = {};
	var $httpBackend;
	var response, q;

	// load the Factory's module
  beforeEach(module('prmUiApp'));

  beforeEach(inject(function (_searchPhysicianFactory_,_$httpBackend_, $q) {
  	searchPhysicianFactory = _searchPhysicianFactory_;
  	$httpBackend = _$httpBackend_;
  	q = $q;
  }));

  afterEach(function () {
  	$httpBackend.verifyNoOutstandingExpectation();
  	$httpBackend.verifyNoOutstandingRequest();
  });

  function httpBackend (url,res,data) {
      $httpBackend.when('GET', urlBase + '/' + url)
  		.respond(res,data);
      return;
    }

  it('should return location data', function () {  	
  	httpBackend('locations',200,locationsData);
  	searchPhysicianFactory.getLocations()
  		.then(function (data) {  			
  			response = data;
  		});
  		$httpBackend.flush();
  		expect(response).toEqual(locationsData);
  });

  it('should handle error for locations', function () {  	
  	httpBackend('locations',500,locationsData);
  	searchPhysicianFactory.getLocations()
  		.then(function (data) {
  			response = data;
  		})
  		.catch(function () {
  			response = 'Error!';
  		});
  		$httpBackend.flush();
  		expect(response).toEqual('Error!');
  });

  it('should return specialty data', function () {  	
  	httpBackend('specialities',200,specialtyData);
  	searchPhysicianFactory.getSpecialities()
  		.then(function (data) {  			
  			response = data;
  		});
  		$httpBackend.flush();
  		expect(response).toEqual(specialtyData);
  });

  it('should handle error for specialities', function () {  	
  	httpBackend('specialities',500,specialtyData);
  	searchPhysicianFactory.getSpecialities()
  		.then(function (data) {
  			response = data;
  		})
  		.catch(function () {
  			response = 'Error!';
  		});
  		$httpBackend.flush();
  		expect(response).toEqual('Error!');
  });

  it('should return physician data', function () {
  	httpBackend('physicians?filters[location_id]=1&filters[speciality_id]=6&filters[by]=all&per_page=2&page=1',200,physicianData);
  	searchPhysicianFactory.getPhysicians(1,6,'all')
  		.then(function (data) {  			
  			response = data;
  		});
  		$httpBackend.flush();
  		expect(response).toEqual(physicianData);
  });

});