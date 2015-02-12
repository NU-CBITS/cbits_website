'use strict';

describe('Service: collaborations', function () {

  // load the service's module
  beforeEach(module('paveApp'));

  // instantiate service
  var collaborations;
  beforeEach(inject(function (_collaborations_) {
    collaborations = _collaborations_;
  }));

  it('should do something', function () {
    expect(!!collaborations).toBe(true);
  });

});
