'use strict';

describe('Service: features', function () {

  // load the service's module
  beforeEach(module('paveApp'));

  // instantiate service
  var features;
  beforeEach(inject(function (_features_) {
    features = _features_;
  }));

  it('should do something', function () {
    expect(!!features).toBe(true);
  });

});
