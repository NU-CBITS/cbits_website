'use strict';

/**
 * @ngdoc service
 * @name paveApp.features
 * @description
 * # features
 * Service in the paveApp.
 */
angular.module('paveApp')
  .service('Features', function ($filter) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var contents = {}

    contents.items = [
    {id:1,date:new Date(),priority:1,section:'services',headline:'New Feature!',img:'image.png',teaser:'Some teaser content', article:'some real feature content that is possibly html'},
    {id:2,date:new Date(),priority:1,section:'services',headline:'New Feature!',img:'image.png',teaser:'Some teaser content', article:'some real feature content that is possibly html'},
    {id:1,date:new Date(),priority:1,section:'research',headline:'New Feature!',img:'image.png',teaser:'Some teaser content', article:'some real feature content that is possibly html'},
    {id:1,date:new Date(),priority:1,section:'clinical',headline:'New Feature!',img:'image.png',teaser:'Some teaser content', article:'some real feature content that is possibly html'}
    ];

    contents.filter = function(objectFilter){
    	 return $filter('filter')(contents.items,objectFilter,true)
    }

    contents.currentFeature = function(section){
    	 return $filter('filter')(contents.items,{priority:1},true)[0];
    }


    return contents


  });
