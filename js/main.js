
// Binding DOM Elements to Javascript Variables
var heading = document.getElementById("header");
var main = document.getElementById("main");
var nav_tag = document.getElementById("nav_tag");
var ul = document.getElementById("navigation");
var logo = document.createElement("a");
logo.innerHTML = "<img src='http://placehold.it/20x20'>";
logo.style.position="fixed";
logo.style.top="20px";
logo.style.left="20px";

var style = window.getComputedStyle(heading, null).getPropertyValue("height");

var par = document.createElement("p")
par.textContent = "Hello World";
var mql = window.matchMedia("screen and (min-width:48em)");


/*
 *	Append Function
 *	@param mql Media Query List
 *
 */
var append = function(mql){
	if(!mql.matches){
		heading.style.height = '100px';
		nav_tag.insertBefore(logo, nav_tag.firstChild);
		main.appendChild(par);
	} else {
		heading.style.height = '700px';
		if(nav_tag.contains(logo) || main.contains(par)){
			nav_tag.removeChild(nav_tag.firstChild);
			main.removeChild(par);
		}
	}
}

window.onload = function(){
	append(mql);
}

/*	On Window Resize
 *	If width < query → set nav height, add logo, append special div
 *	If width > query → set header height to original,
 *					if logo and div exists, remove them
 */
window.onresize = function(){
	console.log("resize");
	append(mql);
}

window.onscroll = function(){
	console.log("scroll");
	var rectObject = heading.getBoundingClientRect();
	
	/*
	*
	*	rectObject.bottom <= value
	* 	value → amount of box already hidden as calculated by getBoundingClientRect()
	*	
	*/
	if(rectObject.bottom <= 100){
		if(!nav_tag.contains(logo)){
			nav_tag.insertBefore(logo, nav_tag.firstChild);
			ul.style.float="right";
		}
	} else {
		if(nav_tag.contains(logo)){
			nav_tag.removeChild(nav_tag.firstChild);
			ul.style.float="none";
		}
	}
}	