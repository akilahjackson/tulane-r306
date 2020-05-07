	const pageList = new Array();
	const list = new Array();
	const TU_EXPERIENCE = 'TU-EXPERIENCE-CACHE';
	const TU_EXPERIENCE_CACHE = [
					'./c1.html',
					'./c1_01.html',
					'./c1_02.html',
					'./c1_03.html',
					'./complete.html',
					'./coursepages.json',
					'./css/bootstrap-4.3.1.css',
					'./css/custom.css',
					'./downloads/Form 1 - Environmental Assessment Form.pdf',
					'./downloads/Form 10 - Visitor Sign-In Form.pdf',
					'./downloads/Form 11 - Medical Update Form.pdf',
					'./downloads/Form 12 - Surveillance Worksheet.pdf',
					'./downloads/Form 13 - Incident Report Form.pdf',
					'./downloads/Form 14 - Medical Transfer Form.pdf',
					'./downloads/Form 2 - Pre_Post Facility Survey.pdf',
					'./downloads/Form 3 - Supply Order Form.pdf',
					'./downloads/Form 4 - Daily Staff_Volunteer Sign-In Sheet.pdf',
					'./downloads/Form 5 - Resident_Staff_Volunteer Meal Sign-In Form.pdf',
					'./downloads/Form 6 - Intake Assessment Form.pdf',
					'./downloads/Form 7 - Registration Form.pdf',
					'./downloads/Form 8 - Admissions_Daily Census Log.pdf',
					'./downloads/Form 9 - Weekly Census Report.pdf',
					'./images/author.png',
					'./images/c1/EmergencyPreparedness.png',
					'./images/c1P1/thankyou.png',
					'./images/c1P2/exam1.png',
					'./images/diagnostics.png',
					'./images/help.png',
					'./images/icons/icon-128x128.png',
					'./images/icons/icon-144x144.png',
					'./images/icons/icon-152x152.png',
					'./images/icons/icon-192x192.png',
					'./images/icons/icon-384x384.png',
					'./images/icons/icon-512x512.png',
					'./images/icons/icon-72x72.png',
					'./images/icons/icon-96x96.png',
					'./images/L0T1P1/LOGO-MSDH.png',
					'./images/L0T1P1/objective.png',
					'./images/L0T2P1/diagnostics.png',
					'./images/L0T2P1/links.png',
					'./images/L0T2P1/pdf.png',
					'./images/L0T2P1/speed.png',
					'./images/L0T2P2/breadcrumbs.png',
					'./images/L0T2P2/breadcrumbs_new.png',
					'./images/L0T2P2/navtabs.png',
					'./images/L0T2P2/navtabs_mobile.png',
					'./images/L0T2P2/navtabs_mobile2.png',
					'./images/L0T2P2/navtabs_new.png',
					'./images/L0T2P2/R306_breadcrumbs.png',
					'./images/L0T2P2/R306_navtabs.png',
					'./images/L0T2P2/R6breadcrumbs.png',
					'./images/L0T2P3/help.png',
					'./images/L0T3P1/questionmarks.png',
					'./images/LOGO-MSDH.png',
					'./images/MS_StateMedicalNeedsShelter.jpg',
					'./images/msdh-logo-horizontal.png',
					'./images/R6_Logo.png',
					'./js/bootstrap-4.3.1.js',
					'./js/jquery-3.3.1.min.js',
					'./js/pagination.js',
					'./js/pagination2.js',
					'./js/popper.min.js',
					'./js/svg-icons.js',
					'./L0_T1_01.html',
					'./L0_T1_01a.html',
					'./L0_T1_02.html',
					'./L0_T2_01.html',
					'./L0_T2_02.html',
					'./L0_T2_03.html',
					'./L0_T3_01.html',
					'./Lesson1/images/L1T0P0/lesson1front1.png',
					'./Lesson1/images/L1T0P0/StoneCounty_SMNS.png',
					'./Lesson1/images/L1T1P1/LOGO-MEMA.png',
					'./Lesson1/images/L1T2P1/accessfunctionalneeds.png',
					'./Lesson1/images/L1T2P2/acceptance1.png',
					'./Lesson1/images/L1T2P2/acceptance2.png',
					'./Lesson1/images/L1T2P2/acceptance3.png',
					'./Lesson1/images/L1T2P2/acceptance4.png',
					'./Lesson1/images/L1T3P1/mississippi.png',
					'./Lesson1/images/L1T3P1/smnslocations.png',
					'./Lesson1/images/L1T3P2/SMNS_1.png',
					'./Lesson1/images/L1T3P2/SMNS_10.png',
					'./Lesson1/images/L1T3P2/SMNS_11.png',
					'./Lesson1/images/L1T3P2/SMNS_12.png',
					'./Lesson1/images/L1T3P2/SMNS_2.png',
					'./Lesson1/images/L1T3P2/SMNS_3.png',
					'./Lesson1/images/L1T3P2/SMNS_4.png',
					'./Lesson1/images/L1T3P2/SMNS_5.png',
					'./Lesson1/images/L1T3P2/SMNS_6.png',
					'./Lesson1/images/L1T3P2/SMNS_7.png',
					'./Lesson1/images/L1T3P2/SMNS_8.png',
					'./Lesson1/images/L1T3P2/SMNS_9.png',
					'./Lesson1/images/ms_state_transparent.png',
					'./Lesson1/L1_T0_00.html',
					'./Lesson1/L1_T1_01.html',
					'./Lesson1/L1_T2_01.html',
					'./Lesson1/L1_T2_02.html',
					'./Lesson1/L1_T3_01.html',
					'./Lesson1/L1_T3_02.html',
					'./Lesson1/L1_T4_01.html',
					'./Lesson2/images/L2T0P0/lesson2front1.png',
					'./Lesson2/images/L2T0P0/teamwork.png',
					'./Lesson2/images/L2T1P1/orgchart.png',
					'./Lesson2/images/L2T2P1/nonmedicalteam.png',
					'./Lesson2/images/L2T2P1/nonmedicalteam_1.png',
					'./Lesson2/images/L2T2P1/nonmedicalteam_2.png',
					'./Lesson2/images/L2T2P1/nonmedicalteam_3.png',
					'./Lesson2/images/L2T2P1/nonmedicalteam_4.png',
					'./Lesson2/images/L2T2P1/nonmedicalteam_5.png',
					'./Lesson2/images/L2T2P1/nonmedicalteam_6.png',
					'./Lesson2/images/L2T2P1/nonmedicalteam_7.png',
					'./Lesson2/images/L2T3P1/medicalteam.png',
					'./Lesson2/images/L2T3P1/medicalteam_1.png',
					'./Lesson2/images/L2T3P1/medicalteam_2.png',
					'./Lesson2/images/L2T3P1/medicalteam_3.png',
					'./Lesson2/images/L2T3P1/medicalteam_4.png',
					'./Lesson2/images/L2T3P1/medicalteam_5.png',
					'./Lesson2/images/L2T3P1/medicalteam_6.png',
					'./Lesson2/L2_T0_00.html',
					'./Lesson2/L2_T1_01.html',
					'./Lesson2/L2_T2_01.html',
					'./Lesson2/L2_T3_01.html',
					'./Lesson2/L2_T4_01.html',
					'./Lesson3/images/L3T0P0/hurricanekatrina.png',
					'./Lesson3/images/L3T0P0/lesson3front1.png',
					'./Lesson3/images/L3T1P1/notifications.png',
					'./Lesson3/images/L3T1P2/emergencychecklist.png',
					'./Lesson3/images/L3T1P3/installationteam.png',
					'./Lesson3/images/L3T1P4/conex.png',
					'./Lesson3/images/L3T1P5/supplies.png',
					'./Lesson3/images/L3T1P6/restricted.png',
					'./Lesson3/images/L3T1P7/mainentrance.png',
					'./Lesson3/images/L3T1P8/staffregistration.png',
					'./Lesson3/images/L3T3P1/triage.png',
					'./Lesson3/images/L3T3P2/medquestions.png',
					'./Lesson3/images/L3T3P3/patients.png',
					'./Lesson3/images/L3T3P4/presciptions.png',
					'./Lesson3/images/L3T3P5/medicalhistory.png',
					'./Lesson3/images/L3T3P6/chest pain.png',
					'./Lesson3/images/L3T3P6/mentalhealth.png',
					'./Lesson3/images/L3T3P6/monitor.png',
					'./Lesson3/images/L3T4P1/clock.png',
					'./Lesson3/images/L3T4P2/siren.png',
					'./Lesson3/images/L3T4P3/media.png',
					'./Lesson3/images/L3T5P1/road.png',
					'./Lesson3/images/L3T5P2/greenchecklist.png',
					'./Lesson3/images/L3T5P3/debrief.png',
					'./Lesson3/L3_T0_00.html',
					'./Lesson3/L3_T1_01.html',
					'./Lesson3/L3_T1_02.html',
					'./Lesson3/L3_T1_03.html',
					'./Lesson3/L3_T1_04.html',
					'./Lesson3/L3_T1_05.html',
					'./Lesson3/L3_T1_06.html',
					'./Lesson3/L3_T1_07.html',
					'./Lesson3/L3_T1_08.html',
					'./Lesson3/L3_T2_01.html',
					'./Lesson3/L3_T3_01.html',
					'./Lesson3/L3_T3_02.html',
					'./Lesson3/L3_T3_03.html',
					'./Lesson3/L3_T3_04.html',
					'./Lesson3/L3_T3_05.html',
					'./Lesson3/L3_T3_06.html',
					'./Lesson3/L3_T4_01.html',
					'./Lesson3/L3_T4_02.html',
					'./Lesson3/L3_T4_03.html',
					'./Lesson3/L3_T5_01.html',
					'./Lesson3/L3_T5_02.html',
					'./Lesson3/L3_T5_03.html',
					'./Lesson3/L3_T6_01.html',
					'./Lesson4/images/L4T0P0/form.png',
					'./Lesson4/images/L4T0P0/lesson4front1.png',
					'./Lesson4/images/L4T1P1/Form 1 - Environmental Assessment Form_Page_1.png',
					'./Lesson4/images/L4T1P1/Form 1 - Environmental Assessment Form_Page_2.png',
					'./Lesson4/images/L4T1P1/Form 10 - Visitor Sign-In Form.png',
					'./Lesson4/images/L4T1P1/Form 11 - Medical Update Form.png',
					'./Lesson4/images/L4T1P1/Form 12 - Surveillance Worksheet.png',
					'./Lesson4/images/L4T1P1/Form 13 - Incident Report Form.png',
					'./Lesson4/images/L4T1P1/Form 14 - Medical Transfer Form.png',
					'./Lesson4/images/L4T1P1/Form 2 - Pre_Post Facility Survey.png',
					'./Lesson4/images/L4T1P1/Form 3 - Supply Order Form.png',
					'./Lesson4/images/L4T1P1/Form 4 - Daily Staff_Volunteer Sign-In Sheet.png',
					'./Lesson4/images/L4T1P1/Form 5 - Resident_Staff_Volunteer Meal Sign-In Form.png',
					'./Lesson4/images/L4T1P1/Form 6 - Intake Assessment Form_Page_1.png',
					'./Lesson4/images/L4T1P1/Form 6 - Intake Assessment Form_Page_2.png',
					'./Lesson4/images/L4T1P1/Form 7 - Registration Form_Page_1.png',
					'./Lesson4/images/L4T1P1/Form 7 - Registration Form_Page_2.png',
					'./Lesson4/images/L4T1P1/Form 7 - Registration Form_Page_3.png',
					'./Lesson4/images/L4T1P1/Form 7 - Registration Form_Page_4.png',
					'./Lesson4/images/L4T1P1/Form 8 - Admissions_Daily Census Log.png',
					'./Lesson4/images/L4T1P1/Form 9 - Weekly Census Report.png',
					'./Lesson4/L4_T0_00.html',
					'./Lesson4/L4_T1_01.html',
					'./Lesson4/L4_T2_01.html',
					'./manifest.json',
					'./R306_start.png',
					'./starthere.html'
				
						];


self.addEventListener('install', event => {
  console.log('Installing course assests');
  event.waitUntil(
    caches.open(TU_EXPERIENCE)
    .then(cache => {
      return cache.addAll(TU_EXPERIENCE_CACHE);
    })
	  
  );
});



self.addEventListener('active', function(event) {
	event.waitUnitl (
	init_courseStructure()
	);
});

self.addEventListener('fetch', event => {
  console.log('Fetch event for ', event.request.url);
  event.respondWith(
    caches.match(event.request)
    .then(response => {
      if (response) {
        console.log('Found ', event.request.url, ' in cache');
        return response;
      }
      console.log('Network request for ', event.request.url);
      return fetch(event.request)

      .then(response => {
			  // TODO 5 - Respond with custom 404 page
			  return caches.open(TU_EXPERIENCE).then(cache => {
				cache.put(event.request.url, response.clone());
				return response;
			  });
			});

    }).catch(error => {

      // TODO 6 - Respond with custom offline page
		
		if(!(event.request.url.indexOf('http') === 0)){
				   //skip request
				}

    })
  );
});




function init_courseStructure () {
	
  fetch('./coursepages.json')
    .then(function(response) { 
	  
	  pageList = response.json();
	  console.log('from inside course structure' + pageList);
  });
	
		
	/* Start Indexing the course page list */
						 let openRequest = indexedDB.open("R306_course_structure",1);

								openRequest.onupgradeneeded = function() {
									let db = openRequest.result;
									let dbevent = event.target.result;
									

									if (!db.objectStoreNames.contains("coursepages")) { 
									
										var objectStore = db.createObjectStore("coursepages", {keyPath: "id"});
										
									    objectStore.createIndex("id","id", {unique: true});
										objectStore.createIndex("pageName","pageName",{unique:false});
										objectStore.createIndex("pageParentname","pageParentname",{unique:false});
										objectStore.createIndex("pageParentURI","pageParentURI",{unique:false});
										objectStore.createIndex("endOfLesson","endOfLesson",{unique:false});
										objectStore.createIndex("endOfCourse","endOfCourse",{unique:false});
										objectStore.createIndex("nextPageID","nextPageID",{unique:false});
										objectStore.createIndex("pageURI","pageURI",{unique:false});

										
									};

									console.log(dbevent);
						
									
									
										
											let coursePagestransaction = event.target.transaction;
									
												/*var coursePagerequest = coursePagestransaction.objectStore("coursepages").add(pageList[0]);*/
									
											
												
												for (let r = 0; r < pageList.length; r++){
													var coursePagerequest = coursePagestransaction.objectStore("coursepages").add(pageList[r]);
													 let openRequest = indexedDB.open("R306_course_structure",r+1);

														
												}; 
												
												
											
									
										coursePagerequest.onsuccess = function() {
											console.log("Page added to the store", coursePagerequest.result);
										};
										
										
									
										coursePagerequest.onerror = function(event) {
											console.log("Error", coursePagerequest.error);
											
											if (coursePagerequest.error.name =="ConstraintError") {
												console.log("Page with such ID already exists");
												event.preventDefault();
												event.stopPropagation;
											}else{
												
											}
										};
											
	
									
									db.onversionchange = function() {
											db.close();
											alert("Database is outdated, please reload the page.")
										  };

								

								
								
								};
	
  }