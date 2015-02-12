'use strict';

/**
 * @ngdoc service
 * @name paveApp.technologies
 * @description
 * # technologies
 * Service in the paveApp.
 */
angular.module('paveApp')
  .service('Technologies', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var contents = {};

    contents.items = [
    {name:'Mobile Responsive Web'},
    {name:'Mobile Smartphone Applications'},
    {name:'Web-Based Interventions'},
    {name:'Context Sensing'},
    {name:'Assessment Tools'}
    ];

    contents.filter = function(objectFilter){
    	return $filter('filter')(contents.items,objectFilter,true)[0]
    }

    return contents

  });
