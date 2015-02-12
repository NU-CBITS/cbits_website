'use strict';

/**
 * @ngdoc service
 * @name paveApp.projects
 * @description
 * # projects
 * Interface service to retrieve information about projects.
 */
angular.module('paveApp')
  .service('Projects', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var contents = {};

    contents.items = [
    {name:'CONEMO',tags:[1,4,6],tagline:'Smartphone Global Health',content:'<h3 class="c0 c4"><a name="h.jmdrsh7fz3hy"></a><span>Project Name:</span></h3><p class="c0"><span>CONEMO</span></p><h3 class="c0 c4"><a name="h.ch41bo2gtvrn"></a><span>Project Type:</span></h3><p class="c0"><span>Patient-Facing Intervention</span></p><p class="c0"><span>Healthcare Professional Dashboard</span></p><p class="c0"><span>Research Management Tools</span></p><h3 class="c0 c4"><a name="h.2b4t0uxxvdre"></a><span>Other Products Used:</span></h3><p class="c0"><span>Purple Robot</span></p><h3 class="c0 c4"><a name="h.jk3nvu951jxc"></a><span>Project Stage:</span></h3><p class="c0"><span>1 - Brainstorming</span></p><p class="c0"><span class="c1">2 - Initial Construction (current stage)</span></p><p class="c0"><span>3 - Field Pilot</span></p><p class="c0"><span>4 - Rebuild</span></p><p class="c0"><span>5 - Randomized Controlled Trial</span></p><p class="c0"><span>6 - Analyze</span></p><h3 class="c0 c4"><a name="h.qsx49q8tfdgj"></a><span>Who?</span></h3><h4 class="c0 c4"><a name="h.pbwfc6a1q0n7"></a><span>Services Team</span></h4><p class="c0"><span>Jem Hilton (lead developer)</span></p><p class="c0"><span>Jeanie Chung (phone app developer)</span></p><p class="c0"><span>Jenna Duffecy (content author)</span></p><p class="c0"><span>David Mohr (research consultant)</span></p><h4 class="c0 c4"><a name="h.vumkafu2per1"></a><span>Academic Team</span></h4><p class="c0"><span>Prof. Paulo Menezes (Brazil, University of Sao Paulo)</span></p><p class="c0"><span>Prof. Jaime Miranda (Peru, Cronicas)</span></p><p class="c0"><span>Prof. Ricarda Araya (UK, London School of Hygiene and Tropical Medicine)</span></p><p class="c0"><span>Prof. David Mohr (US, Northwestern)</span></p><h3 class="c0 c4"><a name="h.3s3ajbqgbtk5"></a><span>What?</span></h3><h4 class="c0 c4"><a name="h.9j3z42f2a773"></a><span>Target Disorder(s)</span></h4><p class="c0"><span>Depression</span></p><h4 class="c0 c4"><a name="h.40m7n4fs9tu9"></a><span>Project Aim</span></h4><p class="c0"><span>We were asked by the multinational leaders of an NIH funded international research hub to produce a toolkit that allows for community clinicians to reach out to patients suffering from depression.</span></p><p class="c0 c2"><span></span></p><p class="c0"><span>Patients are each given mobile Android smartphones and are expected to review lessons made up of videos, text and lessons and respond to prompts configured by content experts. Patients can also reach out to clinicians within the phone app for help.</span></p><p class="c0 c2"><span></span></p><p class="c0"><span>Nurses and community interviewers are each given access to an administrative dashboard where they can chart a patient&rsquo;s use of the application. Patients are comprehensively and longitudinally monitored from the moment they interact with study staff in a face to face interview through their use of the application and completion of the intervention. Nurses are provided with alerts so that they know when to interact and reach out to patients directly</span></p><p class="c0 c2"><span></span></p><p class="c0"><span>Research coordinators monitor the nurse and community interviewer use of the application and interactions with patients. </span></p><p class="c0 c2"><span></span></p><p class="c0"><span>The project includes:</span></p><ul class="c6 lst-kix_hzgmoh4mbseo-0 start"><li class="c0 c3"><span>A mobile application intervention that </span></li><li class="c0 c3"><span>An interface to allow nurses to monitor patient use of the phone application as well as patient contact with nurses</span></li><li class="c0 c3"><span>A dashboard that allows research supervisors to monitor nurses and download patient data</span></li></ul><h4 class="c0 c4"><a name="h.x0ew9e61kspd"></a><span>Challenges</span></h4><ul class="c6 lst-kix_vyuvt5axpbtq-0 start"><li class="c0 c3"><span>We needed to produce a multi-language dashboard (Portugese and Spanish) that allows our collaborators to make a flexible intervention for participants</span></li><li class="c0 c3"><span>We needed to make a multi-language phone application that allows for mobile phone data to work in an offline, low connectivity environment</span></li></ul>'},
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
    {name:'eDapt'},
    {name:'SPF-KTR'}
    ];

    contents.tags = [
    {id:1, name:'smartphone',type:'tech'},
    {id:2, name:'web', type:'tech'},
    {id:3, name:'sensors', type:'tech'},
    {id:4, name:'assessment tools',type:'tech'},
    {id:5, name:'medicine',type:'clinical'},
    {id:6, name:'mental health', type:'clinical'},
    {id:7, name:'medication adherence', type:'clinical'},
    {id:8, name:'prevention',type:'clinical'},
    {id:9, name:'global health',type:'clinical'},
    {id:10, name:'youth', type:'clinical'},
    {id:11, name:'LGBT', type:'clinical'}
    ];

    contents.tagTypes = [
    {type:'clinical',label:'Clinical Targets'},
    {type:'tech',label:'Technologies Used'}
    ];

    contents.filter = function(objectFilter){
    	return $filter('filter')(contents.items,objectFilter,true)[0]
    }

    return contents

  });
