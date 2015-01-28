'use strict';

describe('Controller: ClinicalCtrl', function () {

  // load the controller's module
  beforeEach(module('paveApp'));

  var ClinicalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ClinicalCtrl = $controller('ClinicalCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
