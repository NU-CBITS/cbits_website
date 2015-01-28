'use strict';

/**
 * @ngdoc service
 * @name paveApp.projects
 * @description
 * # projects
 * Service in the paveApp.
 */
angular.module('paveApp')
  .service('Projects', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var contents = {};

    contents.items = [
    {name:'CONEMO'},
    {name:'Communication Bridge'},
    {name:'EXPONATE'},
    {name:'MedLink'},
    {name:'ThinkFeelDo'},
    {name:'moodTech'},
    {name:'mobilyze'},
    {name:'PAVE'},
    {name:'MoodConnect'},
    {name:'MoodManager'},
    {name:'Intellicare'},
    {name:'SleepBunny'},
    {name:'FOCUS'},
    {name:'InformMe'},
    {name:'PC-CHIP'},
    {name:'LiveWell'},
    {name:'TODAY!'},
    {name:'eDapt'}
    ];

    contents.filter = function(objectFilter){
    	return $filter('filter')(contents.items,objectFilter,true)[0]
    }

        return contents


  });
