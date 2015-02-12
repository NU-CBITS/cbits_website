'use strict';

/**
 * @ngdoc service
 * @name paveApp.collaborations
 * @description
 * # collaborations
 * Service in the paveApp.
 */
angular.module('paveApp')
  .service('Collaborations', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function



    var contents = {};

    contents.items = [
    {name:'Grant Assistance',tagline:'want to write a grant?', content:'<h2>Need help writing a technology-assisted grant?</h2>'},
    {name:'eHealth / mHealth Application Development', content:''},
    {name:'Research Management Applications'},
    {name:'Assessment Tool Development'}
    ];

    contents.filter = function(objectFilter){
    	return $filter('filter')(contents.items,objectFilter,true)[0]
    }

    return contents

  });
