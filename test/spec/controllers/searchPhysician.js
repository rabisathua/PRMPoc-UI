

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

  it('exists', function () {
    expect(SearchPhysicianCtrl).not.toBeUndefined();
  });

   it('should attach a list of awesomeThings to the scope', function () {
    expect(SearchPhysicianCtrl.awesomeThings.length).toBe(5);
  });

  

});
