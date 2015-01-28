'use strict';

/**
 * @ngdoc function
 * @name paveApp.controller:ServicesCtrl
 * @description
 * # ServicesCtrl
 * Controller of the paveApp
 */
angular.module('paveApp')
  .controller('ServicesCtrl', function ($scope,$location,$filter,Projects,Router,Problems,Technologies,Staff) {
  	    
    $scope.section = Router.getSection($location);

    $scope.subSection = function() {
    	return $filter('filter')($scope.section.routes,{label:$scope.subRoute},true)[0]
    }

    $scope.staff = Staff.getSection($location);

    $scope.projects = Projects.items;

    $scope.problems = Problems.items;

    $scope.technologies = Technologies.items;

    $scope.route = $location.$$path.split("/");

    $scope.subRoute = function(){

    	if ($scope.route[2] == undefined || $scope.route[2] == 'home'){
    		return 'home'
    	}
    	else {
    		return $scope.route[2]
    	}


    }

    $scope.selectedContents = function(){
    	var selectedContents = [];
    	switch ($scope.subRoute()){
    		case 'collaborations':
    		selectedContents = []
    		break;
    		case 'projects':
    		selectedContents = $scope.projects
    		break;
    		case 'problems':
    		selectedContents = $scope.problems
    		break;
  		  case 'technologies':
  		  selectedContents = $scope.technologies
    		break;
    	}

    	return selectedContents
    }




    console.log($scope.route, $scope.subRoute(), $scope.selectedContents(), $scope.projects, $scope.section, $scope.staff);

  });
