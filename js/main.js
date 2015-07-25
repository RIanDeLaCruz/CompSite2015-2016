
// Binding DOM Elements to Javascript Variables
var heading = document.getElementById("header");
var main = document.getElementById("main");
var nav_tag = document.getElementById("nav_tag");
var ul = document.getElementById("navigation");
var logo = document.createElement("a");
logo.setAttribute("id", "logo");
logo.innerHTML = "<a href='index.html'><img src='http://placehold.it/20x20'></a>";
logo.style.position="fixed";
logo.style.top="20px";
logo.style.left="20px";

var style = window.getComputedStyle(heading, null).getPropertyValue("height");

var flex_items_reverse = document.getElementsByClassName("reverse_flex");
console.log(flex_items_reverse.length);

var par = document.createElement("p");
// par.textContent = "Hello World";
par.setAttribute("class", "dynamic_div");

var head_content = document.getElementById("head_content");
var head_content_div = document.getElementById("head_content_div");
// console.log(head_content_div)
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
	case "Projects":
		par.innerHTML = 'PROJECTS ' + text;
		break;
	case "About Us":
		par.innerHTML = 'ABOUT US ' + text;
		break;
	case "Contact Us":
		par.innerHTML = 'CONTACT US ' + text;
		break;
	case "Portfolio":
		par.innerHTML = 'PORTFOLIO ' + text;
		break;
}

var mql = window.matchMedia("screen and (max-width:48em)");

var CONST_NAV_HEIGHT = nav_tag.offsetHeight;
var CONST_HEAD_HEIGHT = head_content.offsetHeight;

// var rectObjectValue = (function(height, navHeight){
// 	return {
// 		val : height+navHeight
// 	};
// })(CONST_HEAD_HEIGHT, CONST_NAV_HEIGHT);

var rectObjectValue = function(height, navHeight){
	return {
		val: height+navHeight
	}
}

console.log(head_content.parentNode.nodeName);

/*
 *	Append Function
 *	@param mql Media Query List
 *
 */
var append = function(mql){
	if(mql.matches){ 

		// THIS IS MOBILE SIZE
		head_content.appendChild(par);
		nav_tag.insertBefore(logo, nav_tag.firstChild);
		
		head_content.contains(head_content_div) ? head_content.removeChild(head_content_div) : console.log("no heading");
	} else {

		// DESKTOP
		if(head_content.contains(par)){	
			head_content.removeChild(par);
			head_content.appendChild(head_content_div);
		}
	}
}

var reverseFlexClass = function(arr, mql){
	var myArr = arr;
	
	if(!mql.matches){
		for (var i = 0; i<myArr.length; i++){
			if(myArr[i].classList.contains("flag")){
				myArr[i].classList.add("order_one");
				myArr[i].classList.remove("order_two");
			} else {
				myArr[i].classList.add("order_two");
				myArr[i].classList.remove("order_one");
			}
		}
		console.log("flex mql match")
	} else {
		console.log("flex mql NOT match")
		for (var i = 0; i<myArr.length; i++){
			if(myArr[i].classList.contains("flag")){
				myArr[i].classList.add("order_two");
				myArr[i].classList.remove("order_one");
			} else {
				myArr[i].classList.add("order_one");
				myArr[i].classList.remove("order_two");
			}
		}
	}
}

window.onload = function(){
	append(mql);
	var flexMQL = window.matchMedia("screen and (min-width:60em)");
	reverseFlexClass(flex_items_reverse, flexMQL);
	var rectObject = heading.getBoundingClientRect();

	CONST_HEAD_HEIGHT = head_content.offsetHeight;
	var val = rectObjectValue(CONST_HEAD_HEIGHT,CONST_NAV_HEIGHT).val
	console.log(rectObject.bottom + "  " + val + "ADDING SHADOW NOW");
	if(Math.round(rectObject.bottom) == val || rectObject.bottom == CONST_NAV_HEIGHT){
		nav_tag.style["box-shadow"]="none";
	} else {
		nav_tag.style["box-shadow"]= "0 3px 8px rgba(0,0,0,.25)";
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
	var flexMQL = window.matchMedia("screen and (min-width:60em)");
	reverseFlexClass(flex_items_reverse, flexMQL);

	var appendedLogo = document.getElementById("logo");
	if((!(ul.style.float == "right") || ul.style.float=="none") && !mql.matches){
		if(nav_tag.contains(appendedLogo)){
			nav_tag.removeChild(appendedLogo);
		}
	}

}

window.onscroll = function(){
	var rectObject = heading.getBoundingClientRect();
	CONST_HEAD_HEIGHT = head_content.offsetHeight;
	var val = rectObjectValue(CONST_HEAD_HEIGHT,CONST_NAV_HEIGHT).val
	console.log(rectObject.bottom + "  " + val + "ADDING SHADOW NOW");

	/*
	*
	*	rectObject.bottom <= value
	* 	value → amount of box already hidden as calculated by getBoundingClientRect()
	*	
	*/
	if(Math.round(rectObject.bottom) == CONST_NAV_HEIGHT) {
		
		// TOP OF PAGE
		nav_tag.style["box-shadow"]= "none";
		ul.style.float="none";

		// CHECK IF MOBILE
		mql.matches ? nav_tag.insertBefore(logo, nav_tag.firstChild): nav_tag.removeChild(nav_tag.firstChild);

	} else if( Math.round(rectObject.bottom) < val){
		
		// AFTER SCROLL
		nav_tag.style["box-shadow"]= "0 3px 8px rgba(0,0,0,.25)"

		// CHECK IF DESKTOP
		!mql.matches ? (
				ul.style.float="right",
				nav_tag.insertBefore(logo, nav_tag.firstChild)
			) : (
				console.log("null")
			);

	} else {
		
		// BACK ON TOP
		nav_tag.style["box-shadow"]= "none";
		
		// CHECK IF MOBILE
		mql.matches ? (nav_tag.insertBefore(logo, nav_tag.firstChild)): (nav_tag.removeChild(nav_tag.firstChild), ul.style.float="none", console.log("remove"));		
		
	}
}	