var pageList = new Array();
var currentPage = 1;
var numberPerPage = 1;
var numberOfPages = 1;
var coursepages = '../coursepages.json';



document.addEventListener('DOMContentLoaded',function(){
  
      // Add your code below this line
     const req=new XMLHttpRequest();
      req.open("GET",coursepages,true);
	req.setRequestHeader('accept', '*/*');
	  req.setRequestHeader('x-pingother', 'pingpong');
	 req.setRequestHeader('content-type', 'application/json');
	
      req.send();
      req.onload=function(){ var json=JSON.parse(req.responseText);list.push = json; numberOfPages = getNumberOfPages();
	
	pageList = Object.values(list.push.coursepage);					
									
      // Add your code above this line
    };
	
		 	 
	/* Start Indexing the course page list 
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
									
				/*							
												
												for (let r = 0; r < pageList.length; r++){
													var coursePagerequest = coursePagestransaction.objectStore("coursepages").add(pageList[r]);
													 let openRequest = indexedDB.open("R306_course_structure",r+1);

														
												}; 
												
												
											
									
										coursePagerequest.onsuccess = function() {
											console.log("Pages added to the store = ", coursePagerequest.result);
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

								

								
								
								}
								
								*/
	
  });


	
function makeList() {
	
pageList = Object.values(list.push.coursepage);
	
 numberOfPages = getNumberOfPages();
}



function getNumberOfPages() {
    return Math.ceil(list.length / numberPerPage);
}

 function nextPage() {
    currentPage += 1;
    loadList();
}

function previousPage() {
    currentPage -= 1;
    loadList();
}

function firstPage() {
    currentPage = 1;
    loadList();
}

function lastPage() {
    currentPage = numberOfPages;
    loadList();
}

function loadList() {
   /* var begin = ((currentPage - 1) * numberPerPage);
    var end = begin + numberPerPage; */
	
	
	
	drawList();
    check();
	
	

}

function drawList() {

	var path = window.location.pathname;
	var page = path.split("/").pop();
	 
	 console.log( page );

				/*
				for (let r = 0; r < pageList.length; r++)
									{

										//var obj = pageList[r];
										
										
										
										
	
									}*/
	
		/*var currentPageURI = page + '.html';*/
	
		var	currentPage = pageList.filter(function(currentPages) 
								  {
							return currentPages.pageURI == page;
												
								});
		
	var retrieveNextpage = currentPage[0].nextPageID;
	
		var nextPage = pageList.filter(function(currentPages) 
								  {
							return currentPages.id == retrieveNextpage;
												
								});
		
					
	console.log(nextPage);
	
    	let div = document.createElement('div');
		let nextdiv = document.createElement('div');
		let descriptiondiv = document.createElement('div');
		let navStatus = document.createElement('p');
    	let currentpageName = document.createElement('h4');
		let currentpageParentname = document.createElement('h5');
		let currentpageParentURI = document.createElement('a');
		let currentpageURI = document.createElement('a');
		let currentendOfLesson = document.createElement('div');
		let currentendOfCourse = document.createElement('div'); 
		let nextPageName = document.createElement('h4');
		let nextPageURI = document.createElement('a');
		let nextPageParentName = document.createElement('p');
		let nextPageParentURI = document.createElement('a');

		div.className ='nextPage row';
		nextdiv.className='nextdiv col-md-3';
		descriptiondiv.className='descriptiondiv col-md-9';
	
		navStatus.innerHTML='Next Page :';
		navStatus.classname='card-title pageStatus display-4';
	
        nextPageName.innerHTML = nextPage[0].pageName;
        nextPageName.className = 'nextPageName lead';

	
		nextPageParentName.innerHTML = nextPage[0].pageParentname;
        nextPageParentName.className = 'nextpageParentname display-5';
	
		nextPageParentURI.innerHTML = nextPageParentName.textContent;
		nextPageParentURI.href='/'+ nextPage[0].pageParentURI;
        nextPageParentURI.className = 'nextpageParentname display-5';
	
		
/*
		endOfLesson.innerHTML = currentPage[0].endOfLesson;
		endOfLesson.classname = 'endOfLesson';

		endOfCourse.innerHTML = currentPage[0].endOfCourse;
		endOfCourse.classname = 'endOfCourse'; 
*/
    	nextdiv.appendChild(navStatus); 
	
		descriptiondiv.appendChild(nextPageName);	
        descriptiondiv.appendChild(nextPageParentURI);
	
		div.appendChild(nextdiv);
		div.appendChild(descriptiondiv);

       document.getElementById("list").appendChild(div);
	


    }

	

function check() {
    document.getElementById("next").disabled = currentPage == numberOfPages ? true : false;
    document.getElementById("previous").disabled = currentPage == 1 ? true : false;
    document.getElementById("first").disabled = currentPage == 1 ? true : false;
    document.getElementById("last").disabled = currentPage == numberOfPages ? true : false;
}

	
function load() {
	
	
    makeList();
    loadList();
}

window.onload = load;