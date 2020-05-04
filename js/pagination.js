var pageList = new Array();
var currentPage = 1;
var numberPerPage = 1;
var numberOfPages = 1;
var coursepages = './coursepages.json';

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
	
	console.log(pageList);
	

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
	
		var	obj = pageList.filter(function(currentPage) {
												return currentPage.pageURI == page +('.html');
												
											});
		
					
	console.log(obj);
	
    	let div = document.createElement('div');
    	let pageName = document.createElement('h4');
		let pageParentname = document.createElement('div');
		let pageParentURI = document.createElement('a');
		let pageURI = document.createElement('a');
		let endOfLesson = document.createElement('div');
		let endOfCourse = document.createElement('div'); 

		div.classname ='currentPage';
	
        pageName.innerHTML = obj[0].pageName;
        pageName.className = 'pageName card-title';
		
     	pageURI.innerHTML = obj[0].pageURI;
		pageURI.href = './' + obj[0].pageURI;
        pageURI.className = 'pageURI';
		
		pageParentname.innerHTML = obj[0].pageParentname;
        pageParentname.className = 'pageParentname d-none';

		pageParentURI.innerHTML = obj[0].pageParentURI;
        pageParentURI.className = 'pageParentURI d-none';

		endOfLesson.innerHTML = obj[0].endOfLesson;
		endOfLesson.classname = 'endOfLesson';

		endOfCourse.innerHTML = obj[0].endOfCourse;
		endOfCourse.classname = 'endOfCourse'; 

        div.appendChild(pageName);
		div.appendChild(pageURI);

		div.appendChild(pageParentname);
        div.appendChild(pageParentURI);

		div.appendChild(endOfLesson);
		div.appendChild(endOfCourse); 


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