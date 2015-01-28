'use strict';

/**
 * @ngdoc service
 * @name paveApp.problems
 * @description
 * # problems
 * Service in the paveApp.
 */
angular.module('paveApp')
  .service('Problems', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var contents = {};

    contents.items = [
    {name:'Bipolar Disorder'},
    {name:'Depression'},
    {name:'Anxiety'},
    {name:'Skin Cancer Prevention'},
    {name:'Transplant Management'},
    {name:'Aphasia'},
    {name:'Patient Management'},
    {name:'Medication Management'}
    ];

    contents.filter = function(objectFilter){
    	return $filter('filter')(contents.items,objectFilter,true)[0]
    }

    return contents



  });
