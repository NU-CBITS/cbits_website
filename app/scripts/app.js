'use strict';


$(document).ready(function(){$('#sidebar').affix({
      offset: {
        top: 230,
        bottom: 100
      }
}); 
$('#midCol').affix({
      offset: {
        top: 230,
        bottom: 100
      }
}); 
});


/**
 * @ngdoc overview
 * @name paveApp
 * @description
 * # paveApp
 *
 * Main module of the application.
 */
angular
  .module('paveApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/services', {
        templateUrl: 'views/services.html',
        controller: 'ServicesCtrl'
      })
      .when('/research', {
        templateUrl: 'views/research.html',
        controller: 'ResearchCtrl'
      })
      .when('/clinical', {
        templateUrl: 'views/clinical.html',
        controller: 'ClinicalCtrl'
      })
      .when('/services/:page', {
        templateUrl: 'views/services.html',
        controller: 'ServicesCtrl'
      })
      .when('/research/:page', {
        templateUrl: 'views/research.html',
        controller: 'ResearchCtrl'
      })
      .when('/clinical/:page', {
        templateUrl: 'views/clinical.html',
        controller: 'ClinicalCtrl'
      })
      .otherwise({
        redirectTo: '/'
      })
      
      
  }).run(function($rootScope,$cookies) {

    $rootScope.footer = 'Powered by CBITs';
    $rootScope.siteName = 'CBITs';
    $rootScope.appVersion = '0.1.4';
    // $rootScope.dataIO = 'https://pave.firebaseio.com';
    

    $rootScope.userLoggedIn = function(){ 

      if ($cookies.userLoggedIn == 'true')
        { return true }
      else 
        { return false }

    };

});
