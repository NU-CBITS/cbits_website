'use strict';

/**
 * @ngdoc function
 * @name paveApp.controller:ClinicalCtrl
 * @description
 * # ClinicalCtrl
 * Controller of the paveApp
 */
angular.module('paveApp')
  .controller('ClinicalCtrl', function ($scope,$location,Router,Staff) {
    $scope.section = Router.getSection($location);
    $scope.staff = Staff.getSection($location);


  });
