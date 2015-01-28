'use strict';

/**
 * @ngdoc function
 * @name paveApp.controller:NavbarCtrl
 * @description
 * # NavbarCtrl
 * Controller of the paveApp
 */
angular.module('paveApp')
  .controller('NavbarCtrl', function ($scope, $location, $rootScope, router) {

    $scope.siteName = $rootScope.siteName;

    $scope.mainNavItems = router.navigation;

    $scope.showTagline = function(ev){
       console.log(ev); 
    }

  });
