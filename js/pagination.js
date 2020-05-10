var pageList = new Array();
var currentPage = 1;
//var numberPerPage = 1;
//var numberOfPages = 1;
var coursepages = '../coursepages.json';


let dbVersion = 1;
					


					document.addEventListener('DOMContentLoaded',function(){
						  // Add your code below this line
						 const req = new XMLHttpRequest();
						
						req.open("GET",coursepages,true);
						req.setRequestHeader('accept', '*/*');
						req.setRequestHeader('x-pingother', 'pingpong');
						req.setRequestHeader('content-type', 'application/json');

						  req.send();
						  req.onload=function(){ var json=JSON.parse(req.responseText);list.push = json; //numberOfPages = getNumberOfPages();

						pageList = Object.values(list.push.coursepage);
						
						  // Add your code above this line
						};



					});
	
 								let openRequest = indexedDB.open("R306_course_structure",dbVersion);

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

									
						
									
									
										
											let coursePagestransaction = event.target.transaction;
									
										
												
												for (let r = 0; r < pageList.length; r++){
													var coursePagerequest = coursePagestransaction.objectStore("coursepages").add(pageList[r]);
													 let openRequest = indexedDB.open("R306_course_structure",dbVersion);

														
												}; 
												
												
											
									
										coursePagerequest.onsuccess = function() {
											console.log("... " + coursePagerequest.result + " pages added to the learning environment.");
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

	

	

function makeList() {
	
pageList = Object.values(list.push.coursepage);
	
 //numberOfPages = getNumberOfPages();
}


/*function getNumberOfPages() {
    return Math.ceil(list.length / numberPerPage);
}*/

 function nextPage() {
	
	 
	 var path = window.location.pathname;
	var page = path.split("/").pop();
		
	
		var	currentPager = pageList.filter(function(currentPages) 
								  {
							return currentPages.pageURI == page;
												
								});
	 
	 
		
	var retrieveNextpage = currentPager[0].nextPageID;
	
		var nextPager = pageList.filter(function(currentPages) 
								  {
							return currentPages.id == retrieveNextpage;
												
								});
	 
	 let courseSwitch = (nextPager[0].pageURI).substring(0,2);
	 
	 
	 
	 switch (courseSwitch) {
		 case "L0":
			 location.assign("./"+ nextPager[0].pageURI);
			 break;
		 case "L1":
			 location.assign("../Lesson1/"+ nextPager[0].pageURI);
			 break;
		 case "L2":
			 location.assign("../Lesson2/"+ nextPager[0].pageURI);
			 break;
		 case "L3":
			 location.assign("../Lesson3/"+ nextPager[0].pageURI);
			 break;
		 case "L4":
			 location.assign("../Lesson4/"+ nextPager[0].pageURI);
			 break;
		 default:
			 location.assign("../"+ nextPager[0].pageURI);
			 break;
			 
	 };
	 
    
 
   
}

function previousPage() {
    
	
	 var path = window.location.pathname;
	var page = path.split("/").pop();
		
	
		var	currentPager = pageList.filter(function(currentPages) 
								  {
							return currentPages.pageURI == page;
												
								});
		
	var retrievePreviouspage = (currentPager[0].id) -1;
	
		var previousPager = pageList.filter(function(currentPages) 
								  {
							return currentPages.id == retrievePreviouspage;
												
								});
	 
	 let courseSwitch = (previousPager[0].pageURI).substring(0,2);
	 
	 
	 
	 switch (courseSwitch) {
		 case "L0":
			 location.assign("./"+ nextPager[0].pageURI);
			 break;
		 case "L1":
			 location.assign("../Lesson1/"+ nextPager[0].pageURI);
			 break;
		 case "L2":
			 location.assign("../Lesson2/"+ nextPager[0].pageURI);
			 break;
		 case "L3":
			 location.assign("../Lesson3/"+ nextPager[0].pageURI);
			 break;
		 case "L4":
			 location.assign("../Lesson4/"+ nextPager[0].pageURI);
			 break;
		 default:
			 location.assign("../"+ nextPager[0].pageURI);
			 break;
			 
	 };
	 
	
   
}

function firstPage() {
	 
    	
 
	location.assign("../starthere.html");
  
}

function lastPage() {
	
	
   	
  
    location.assign("../complete.html");
}

function loadList() {

	
	drawList();
    
	
	

}

function drawList() {

	var path = window.location.pathname;
	var page = path.split("/").pop();
		
	
		var	currentPager = pageList.filter(function(currentPages) 
								  {
							return currentPages.pageURI == page;
												
								});
	
		
	var retrieveNextpage = currentPager[0].nextPageID;
	
		var nextPage = pageList.filter(function(currentPages) 
								  {
							return currentPages.id == retrieveNextpage;
												
								});
		

	
    	let div = document.createElement('div');
		let nextdiv = document.createElement('div');
		let descriptiondiv = document.createElement('div');
		let icondiv = document.createElement('div');
		let navStatus = document.createElement('p');
		let endStatus = document.createElement('p');
    	let currentpageName = document.createElement('h4');
		let currentpageParentname = document.createElement('h5');
		let currentpageParentURI = document.createElement('a');
		let currentpageURI = document.createElement('a');
		let currentendOfLesson = document.createElement('img');
		let currentendOfCourse = document.createElement('img'); 
		let nextPageName = document.createElement('h4');
		let nextPageURI = document.createElement('a');
		let nextPageParentName = document.createElement('p');
		let nextPageParentURI = document.createElement('a');

		div.className ='nextPage row h-25';
		nextdiv.className='nextdiv col-md-2';
		descriptiondiv.className='descriptiondiv col-md-7';
		icondiv.className='icondiv col-md-3';
	
		navStatus.innerHTML='Next Page';
		navStatus.className='card-title pageStatus text-center h5';
	
		endStatus.innerHTML='';
		endStatus.className='card-title pageStatus text-center h6';
	
        nextPageName.innerHTML = nextPage[0].pageName;
        nextPageName.className = 'nextPageName lead text-wrap text-center';

	
		nextPageParentName.innerHTML = nextPage[0].pageParentname;
        nextPageParentName.className = 'nextpageParentname text-wrap display-5';
	
		nextPageParentURI.innerHTML = nextPageParentName.textContent;
		nextPageParentURI.href='./'+ nextPage[0].pageParentURI;
        nextPageParentURI.className = 'nextpageParentname d-block text-center';
	
		
		var isEndofLesson = currentPager[0].endOfLesson;
		var isEndofCourse = currentPager[0].endOfCourse;
	
		if (isEndofLesson == "yes" && isEndofCourse == "no") {  
		currentendOfLesson.src = '../images/icons/endoflesson.png';
		currentendOfLesson.alt = 'End of Lesson Icon';
		currentendOfLesson.className = 'endOfLesson d-block mx-auto';
	
		endStatus.innerHTML = "End Of Lesson";
	
			
		nextdiv.appendChild(navStatus); 
	
		descriptiondiv.appendChild(nextPageName);	
        descriptiondiv.appendChild(nextPageParentURI);
	
		icondiv.appendChild(endStatus);
		icondiv.appendChild(currentendOfLesson);
		
	
		div.appendChild(nextdiv);
		div.appendChild(descriptiondiv);
		div.appendChild(icondiv);
		
		document.getElementById("list").className += " border-primary";
       	document.getElementById("list").appendChild(div);
			
		}
		
		else if (isEndofCourse == "yes") {  
			
			
		currentendOfLesson.src = '';
		currentendOfLesson.alt = '';
		
		currentendOfCourse.src = '../images/icons/endofcourse.png';
		currentendOfCourse.alt = 'End of Course';
		
		currentendOfCourse.className = 'endOfCourse d-block mx-auto';
	
		endStatus.innerHTML = "End Of Course";
		navStatus.innerHTML = "Finished"
			
		nextdiv.appendChild(navStatus); 
	
		descriptiondiv.appendChild(nextPageName);	
        descriptiondiv.appendChild(nextPageParentURI);
	
		icondiv.appendChild(endStatus);
		icondiv.appendChild(currentendOfCourse);
		
	
		div.appendChild(nextdiv);
		div.appendChild(descriptiondiv);
		div.appendChild(icondiv);
		
		document.getElementById("list").className += " border-primary";
       	document.getElementById("list").appendChild(div);	
			
			
		}
		else { 
		 

    	nextdiv.appendChild(navStatus); 
	
		descriptiondiv.appendChild(nextPageName);	
        descriptiondiv.appendChild(nextPageParentURI);
	
		div.appendChild(nextdiv);
		div.appendChild(descriptiondiv);
			
	 
       document.getElementById("list").appendChild(div);
		}


    }

	

	
function load() {
	
	
    makeList();
    loadList();
}


window.onload = load;