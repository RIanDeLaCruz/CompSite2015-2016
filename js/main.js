
// Binding DOM Elements to Javascript Variables
var heading = document.getElementById("header");
var main = document.getElementById("main");
var nav_tag = document.getElementById("nav_tag");
var ul = document.getElementById("navigation");
var logo = document.createElement("a");
logo.innerHTML = "<a href='index.html'><img src='http://placehold.it/20x20'></a>";
logo.style.position="fixed";
logo.style.top="20px";
logo.style.left="20px";

var style = window.getComputedStyle(heading, null).getPropertyValue("height");

var par = document.createElement("p");
// par.textContent = "Hello World";
par.setAttribute("class", "dynamic_div");

var head_content = document.getElementById("head_content");
var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

var title = document.title;
console.log(title);
switch( title ){
	case "Index":
		par.textContent = 'INDEX ' + text;
		break;
	case "Services":
		par.textContent = 'SERVICES ' + text;
		break;
	// case "Index":
	// 	head_content.innerHTML = 'INDEX ' + text;
	// 	break;
	// case "Index":
	// 	head_content.innerHTML = 'INDEX ' + text;
	// 	break;
	// case "Index":
	// 	head_content.innerHTML = 'INDEX ' + text;
	// 	break;
	// case "Index":
	// 	head_content.innerHTML = 'INDEX ' + text;
	// 	break;
}

var mql = window.matchMedia("screen and (min-width:48em)");

console.log(head_content.parentNode.nodeName);
/*
 *	Append Function
 *	@param mql Media Query List
 *
 */
var append = function(mql){
	if(!mql.matches){
		heading.style.height = '80px';
		nav_tag.insertBefore(logo, nav_tag.firstChild);
		heading.contains(head_content) ? heading.removeChild(head_content) : console.log("null");
		main.insertBefore(par,main.firstChild);
	} else {
		title =="Contact Us" ? heading.style.height = '80px' : heading.style.height = '700px';
		if(nav_tag.contains(logo) || main.contains(par)){
			nav_tag.removeChild(nav_tag.firstChild);
			main.contains(par) ? main.removeChild(par) : console.log("null");
		}
		heading.appendChild(head_content);
	}
}

window.onload = function(){
	append(mql);
	var rectObject = heading.getBoundingClientRect();
	if(rectObject.bottom == 700){
		nav_tag.style["box-shadow"]="none";
	} else {
		title =="Contact Us" ? nav_tag.style["box-shadow"]="none" : nav_tag.style["box-shadow"]= "0 3px 8px rgba(0,0,0,.25)";
	}
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
	console.log(rectObject.bottom);
	/*
	*
	*	rectObject.bottom <= value
	* 	value → amount of box already hidden as calculated by getBoundingClientRect()
	*	
	*/
	// if(rectObject.bottom <= 500){
	// 	nav_tag.style["box-shadow"]= "0 3px 8px rgba(0,0,0,.25)";
	// 	if(!nav_tag.contains(logo)){
	// 		nav_tag.insertBefore(logo, nav_tag.firstChild);
	// 		if(mql.matches){
	// 			ul.style.float="right";
	// 		} else {
	// 			console.log("HERE");
	// 		}
	// 	}
	// } else if(rectObject.bottom == 80 && title =="Contact Us") {
	// 	console.log("HI");
	// } else {
	// 	nav_tag.style["box-shadow"]= "none";
	// 	if(nav_tag.contains(logo)){
	// 		nav_tag.removeChild(nav_tag.firstChild);
	// 		ul.style.float="none";
	// 	}
	// }
	if(rectObject.bottom == 80 && title =="Contact Us") {
		nav_tag.style["box-shadow"]= "none";
		if(nav_tag.contains(logo)){
			nav_tag.removeChild(nav_tag.firstChild);
			ul.style.float="none";
		}
	} else if( rectObject.bottom <= 500){
		nav_tag.style["box-shadow"]= "0 3px 8px rgba(0,0,0,.25)";
		if(!nav_tag.contains(logo)){
			nav_tag.insertBefore(logo, nav_tag.firstChild);
			if(mql.matches){
				ul.style.float="right";
			} else {
				console.log("HERE");
			}
		}
	} else {
		nav_tag.style["box-shadow"]= "none";
		if(nav_tag.contains(logo)){
			nav_tag.removeChild(nav_tag.firstChild);
			ul.style.float="none";
		}
	}
}	