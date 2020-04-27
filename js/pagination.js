var list = new Array();
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
						
	console.log(document.cookie);
	document.getElementById("list").innerHTML = "You are Here:";
      // Add your code above this line
    };
	
  });
 
function makeList() {
	

 numberOfPages = getNumberOfPages();
}

/* Arthimetic for the Pagination Magic */

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
    var begin = ((currentPage - 1) * numberPerPage);
    var end = begin + numberPerPage;

	
	pageList = Object.values(list.push.coursepage);
	if (window.UndefinedVariable) {
    Object.assign(window.UndefinedVariable, {})
}
	
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

		let obj = pageList[r];

    	let div = document.createElement('div');
    	let pageName = document.createElement('h4');
		let pageParentname = document.createElement('div');
		let pageParentURI = document.createElement('a');
		let pageURI = document.createElement('a');
		/*let endOfLesson = document.createElement('div');
		let endOfCourse = document.createElement('div'); 

	
        pageName.innerHTML = obj[1].pageName;
        pageName.className = 'pageName card-title';
		
     	pageURI.innerHTML = obj[1].pageURI;
		pageURI.href = './' + obj[1].pageURI;
        pageURI.className = 'pageURI';
		
		pageParentname.innerHTML = obj[1].pageParentname;
        pageParentname.className = 'pageParentname d-none';

		pageParentURI.innerHTML = obj[1].pageParentURI;
        pageParentURI.className = 'pageParentURI d-none';

		endOfLesson.innerHTML = obj[1].endOfLesson;
		endOfLesson.classname = 'endOfLesson';

		endOfCourse.innerHTML = obj[1].endOfCourse;
		endOfCourse.classname = 'endOfCourse'; 

        div.appendChild(pageName);
		div.appendChild(pageURI);

		div.appendChild(pageParentname);
        div.appendChild(pageParentURI);

		div.appendChild(endOfLesson);
		div.appendChild(endOfCourse); 


       document.getElementById("list").appendChild(div);


    }
*/	

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