'use strict';

/**
 * @ngdoc function
 * @name paveApp.controller:ServicesCtrl
 * @description
 * # ServicesCtrl
 * Controller of the paveApp
 */
angular.module('paveApp')
  .controller('ServicesCtrl', function ($scope,$location,router) {
  	    
    $scope.section = router.getSection($location);

  });
