'use strict';

/**
 * @ngdoc function
 * @name paveApp.controller:ClinicalCtrl
 * @description
 * # ClinicalCtrl
 * Controller of the paveApp
 */
angular.module('paveApp')
  .controller('ClinicalCtrl', function ($scope,$location,Router,Staff,Problems,Projects,Technologies,Collaborations) {

    $scope.section = Router.getSection($location);
    $scope.staff = Staff.getSection($location);
    $scope.projects = Projects.items;
    $scope.problems = Problems.items;
    $scope.technologies = Technologies.items;
    $scope.collaborations = Collaborations.items;
    $scope.route = $location.$$path.split("/");

    $scope.subRoute = function(){
    	if ($scope.route[2] == undefined || $scope.route[2] == 'home'){
    		return 'home'
    	}
    	else {
    		return $scope.route[2]
    	}
    }

    $scope.subSection = function() {
        return $filter('filter')($scope.section.routes,{label:$scope.subRoute},true)[0]
    }

    $scope.selectedContents = function(){
    	var selectedContents = [];
    	switch ($scope.subRoute()){
    		case 'collaborations':
    		selectedContents = $scope.collaborations
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

  });
