

describe('Controller: SearchPhysicianCtrl', function () {

  // load the controller's module
  beforeEach(module('prmUiApp', function($httpProvider){

  }));

  var ctrl,httpBackend,
    svc,
    scope;
var url ='http://localhost:3000/api/v1';
  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend, $q, searchPhysicianFactory) {
    scope = $rootScope.$new();
    httpBackend = $httpBackend;
    q = $q;
    svc=searchPhysicianFactory;
    ctrl = $controller('SearchPhysicianCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
    

  }));

  // afterEach(function() {
  //     httpBackend.verifyNoOutstandingExpectation();
  //     httpBackend.verifyNoOutstandingRequest();
  //   });

  it('exists', function () {
    expect(ctrl).toBeDefined();
  });

   it('should attach a list of awesomeThings to the scope', function () {
    expect(ctrl.awesomeThings.length).toBe(5);
  });

   it('should attach a list of awesomeThings to the scope', function () {
    var response = 'success';
    scope.init();
    httpBackend.expectGET(url + '/locations').respond(200, response);
    httpBackend.expectGET(url + '/specialities').respond(200, {});
    //httpBackend.flush();
    expect(scope.Regions).not.toBeDefined();
  });
  

});
