'use strict';

/**
 * @ngdoc function
 * @name paveApp.controller:NavbarCtrl
 * @description
 * # NavbarCtrl
 * Controller of the paveApp
 */
angular.module('paveApp')
  .controller('NavbarCtrl', function ($scope, $location, $rootScope, Router) {

    $scope.siteName = $rootScope.siteName;

    $scope.mainNavItems = Router.navigation;


    $scope.showTagline = function(ev){
       console.log(ev); 
    }

  });
