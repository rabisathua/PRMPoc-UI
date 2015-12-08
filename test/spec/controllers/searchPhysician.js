

describe('Controller: SearchPhysicianCtrl', function () {

  // load the controller's module
  beforeEach(module('prmUiApp', function($httpProvider){

  }));

  var SearchPhysicianCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend, $q) {
    scope = $rootScope.$new();
    http = $httpBackend;
    q = $q;
    SearchPhysicianCtrl = $controller('SearchPhysicianCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SearchPhysicianCtrl.awesomeThings.length).toBe(3);
  });

  it('should call http  locations to ftech locations', function () {
          resourceUrl = 'http://localhost:3000/api/v1/locations';
          expectedResult = [{"id":1,"name":"Ap #404-7680 Id, Av.","zip":"52151"}];          
          http.expectGET(resourceUrl).respond(expectedResult);          
          http.flush();
          expect(scope.Regions.length).toBe(1);
          expect(scope.Regions).toEqual(expectedResult);
  });

});
