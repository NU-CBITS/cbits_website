'use strict';

/**
 * @ngdoc function
 * @name paveApp.controller:ServicesCtrl
 * @description
 * # ServicesCtrl
 * Controller of the paveApp
 */
angular.module('paveApp')
  .controller('ServicesCtrl', function ($scope,$sce,$location,$filter,Features,Projects,Router,Technologies,Staff,Collaborations) {
  	    
    $scope.tagline = $sce.trustAsHtml('We are <b>digital professionals</b> who build <b>research projects</b> and <b>technologies</b> to help our <b>collaborators</b> address <b>real-world problems</b>.');

    var sectionContent = {};

    sectionContent['home'] = '<img src="http://s.bootply.com/assets/example/bg_iphone.png" class="img-responsive"><h3><a href="http://getbootstrap.com">Build a Behavioral Intervention Technology</a></h3><p>Want to build an SMS intervention for moodManagement?<br/>How about a mobile application for bipolar?<br/>A web-based intervention for managing partial aphasia? </p> <p><a href="" target="ext">Not sure where to start?</a></p>';

    sectionContent['projects'] = '<h2>We develop applications all over the world.</h2><h3>What are you interested in?</h3>';

    $scope.section = Router.getSection($location);
    $scope.staff = Staff.getSection($location);
    $scope.projects = Projects;
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

    $scope.showContent = function(name){

        $scope.content = $sce.trustAsHtml($filter('filter')($scope.selectedContents(),{name:name},true)[0].content);

    }

    $scope.selectedContents = function(){
    	var selectedContents = [];
        selectedContents = $scope[$scope.subRoute()];
    	return selectedContents
    }

    $scope.content = $sce.trustAsHtml(sectionContent[$scope.subRoute()]);

    $scope.featureContent = Features.currentFeature('projects',$scope.subRoute);

    $scope.showProjects = false;

    $scope.tagChecked = function(){

        

    }




  });
