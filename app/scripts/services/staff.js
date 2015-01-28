'use strict';

/**
 * @ngdoc service
 * @name paveApp.staff
 * @description
 * # staff
 * Service in the paveApp.
 */
angular.module('paveApp')
  .service('Staff', function ($filter) {
    // AngularJS will instantiate a singleton by calling "new" on this function
	var contents = {};

    var people = [

    {label:'services',firstName:'Mark', lastName:'Begale',group:'services',email:'m.begale@gmail.com',phone:'',order:1,position:'Director of Products',image:''},
    {label:'services',firstName:'Marya', lastName:'Cordon',group:'services',email:'m.begale@gmail.com',phone:'',order:1,position:'Director of Services',image:''},
    {label:'services',firstName:'Christopher', lastName:'Karr',group:'services',email:'m.begale@gmail.com',phone:'',order:1,position:'R&amp;D',image:''},
    {label:'services',firstName:'Eric', lastName:'Carty-Fickes',group:'services',email:'m.begale@gmail.com',phone:'',order:1,position:'Web Technologies',image:''},
    {label:'services',firstName:'Chris', lastName:'Brenner',group:'services',email:'m.begale@gmail.com',phone:'',order:1,position:'Testing Coordinator',image:''},
    {label:'services',firstName:'Jem', lastName:'Hilton',group:'services',email:'m.begale@gmail.com',phone:'',order:1,position:'Software Developer',image:''},
    {label:'services',firstName:'Gwendolyn', lastName:'Smuda',group:'services',email:'m.begale@gmail.com',phone:'',order:1,position:'Software Developer',image:''},
    {label:'services',firstName:'Michael', lastName:'Wehrley',group:'services',email:'m.begale@gmail.com',phone:'',order:1,position:'Software Developer',image:''},
    {label:'services',firstName:'Eric', lastName:'Schlange',group:'services',email:'m.begale@gmail.com',phone:'',order:1,position:'Software Developer',image:''},



    ];

 
    contents.getSection = function(location){

    	var locationParts = location.$$path.split("/");
    	return $filter('filter')(people,{label:locationParts[1]},true)

    }

    contents.people = people;

	  return contents


  });
