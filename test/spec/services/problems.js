'use strict';

describe('Service: problems', function () {

  // load the service's module
  beforeEach(module('paveApp'));

  // instantiate service
  var problems;
  beforeEach(inject(function (_problems_) {
    problems = _problems_;
  }));

  it('should do something', function () {
    expect(!!problems).toBe(true);
  });

});
