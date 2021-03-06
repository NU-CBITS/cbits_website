'use strict';

/**
 * @ngdoc service
 * @name paveApp.router
 * @description
 * # router
 * Service in the paveApp.
 */
angular.module('paveApp')
  .service('Router', function ($filter) {

  	var contents = {};

    var navigation = 
    [{
    	label:'services', name:'Services', tagline:'Technology, Consulting, Collaboration', icon:'',
    	routes:[
    		{ label:'home',name:'Home', tagline:'', icon:''},
     		{ label:'projects',name:'Portfolio', tagline:'', icon:''},
     		{ label:'collaborations',name:'What We Offer', tagline:'', icon:''},
            { label:'technologies',name:'Our Technologies', tagline:'', icon:''},
            { label:'blog',name:'Blog', tagline:'', icon:''},
    	]},
    	{
    		label:'research', name:'Research', tagline:'Academic Things', icon:'', 
    		routes:[
    	   	{ label:'home',name:'Home', tagline:'', icon:''},
            { label:'people',name:'People', tagline:'', icon:''},
            { label:'publications',name:'Publications', tagline:'', icon:''},
            { label:'concentrations',name:'Areas of Concentration', tagline:'', icon:''}
    	]},
    	{
    		label:'clinical', name:'Clinical Trials', tagline:'Ongoing CBITs Trials', icon:'', 
    		routes:[
    		{ label:'home',name:'Home', tagline:'', icon:''},
            { label:'people',name:'People', tagline:'', icon:''}
    	]}
    ];

    contents.getSection = function(location){
    	var locationParts = location.$$path.split("/");

    	return $filter('filter')(navigation,{label:locationParts[1]},true)[0]
    }

    contents.navigation = navigation;

	return contents

  });
