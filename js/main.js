
// Binding DOM Elements to Javascript Variables
var heading = document.getElementById("header");
var main = document.getElementById("main");
var nav_tag = document.getElementById("nav_tag");
var ul = document.getElementById("navigation");
var logo = document.createElement("a");
logo.setAttribute("id", "logo");
logo.innerHTML = "<a href='index.php'><img src='../images/newCompSAtGear.png' width='40px' height='40px'></a>";
logo.style.position="fixed";
logo.style.top="15px";
logo.style.left="10vw";

var style = window.getComputedStyle(heading, null).getPropertyValue("height");

var flex_items_reverse = document.getElementsByClassName("reverse_flex");
console.log(flex_items_reverse.length);

var head_content = document.getElementById("head_content");
var head_content_div = document.getElementById("head_content_div");

var mql = window.matchMedia("screen and (max-width:48em)");

var CONST_NAV_HEIGHT = nav_tag.offsetHeight;
var CONST_HEAD_HEIGHT = head_content.offsetHeight;

var rectObjectValue = function(height, navHeight){
	return {
		val: height+navHeight
	}
}

/*
 *	Append Function
 *	@param mql Media Query List
 *
 */
var append = function(mql){
	if(mql.matches){ 

		// THIS IS MOBILE SIZE
		nav_tag.insertBefore(logo, nav_tag.firstChild);
		var vp = document.getElementsByClassName('eb-info');
		console.log(typeof vp);
		for (var i = 0; i < vp.length; i++) {
			var el = vp[i];
			el.parentNode.style.position = 'relative';
			el.addEventListener('click', vp_drop, false);
			var siblings = el.parentNode.querySelectorAll('.avp_container');
			for(var j = 0; j < siblings.length; j++){
					siblings[j].style.display = 'none';
			};
		};
	} else {
		var vp = document.getElementsByClassName('eb-info');
		console.log(typeof vp);
		for (var i = 0; i < vp.length; i++) {
			var el = vp[i];
			el.removeEventListener('click', vp_drop, false);
			el.parentNode.removeAttribute('style');
			var siblings = el.parentNode.querySelectorAll('.avp_container');
			for(var j = 0; j < siblings.length; j++){
				siblings[j].removeAttribute('style');
				mql.matches ? siblings[j].style.display = 'block' : siblings[j].style.display = 'table' ;

				console.log('THIS');
			};
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
	} else {
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

	if(Math.round(rectObject.bottom) == val || rectObject.bottom == CONST_NAV_HEIGHT){
		nav_tag.style["box-shadow"]="none";
	} else {
		nav_tag.style["box-shadow"]= "0 3px 8px rgba(0,0,0,.25)";
	}
}


window.onresize = function(){
	console.log("resize  " + mql.matches);
	var last = head_content.lastChild;

	var rectObject = heading.getBoundingClientRect();
	var val = rectObjectValue(CONST_HEAD_HEIGHT,CONST_NAV_HEIGHT).val

	var appendedLogo = document.getElementById("logo");
	if(mql.matches == false){
		if(nav_tag.contains(appendedLogo)){
			nav_tag.removeChild(appendedLogo);
		}
	}

	append(mql);
	var flexMQL = window.matchMedia("screen and (min-width:60em)");
	reverseFlexClass(flex_items_reverse, flexMQL);

}

window.onscroll = function(){
	var rectObject = heading.getBoundingClientRect();
	CONST_HEAD_HEIGHT = head_content.offsetHeight;
	var val = rectObjectValue(CONST_HEAD_HEIGHT,CONST_NAV_HEIGHT).val

	if( Math.round(rectObject.bottom) < val){
		
		// AFTER SCROLL
		nav_tag.style["box-shadow"]= "0 3px 8px rgba(0,0,0,.25)"

		// CHECK IF DESKTOP
		if (!mql.matches){
				ul.style.float="right";
				ul.classList.add("head_margin");
			nav_tag.insertBefore(logo, nav_tag.firstChild);
		}

	} else {
		
		// BACK ON TOP
		nav_tag.style["box-shadow"]= "none";
		
		// CHECK IF MOBILE
		mql.matches ? (
			nav_tag.insertBefore(logo, nav_tag.firstChild)
			): (
			nav_tag.removeChild(nav_tag.firstChild), 
			ul.style.float="none", 
			ul.classList.remove("head_margin"),
			console.log("remove")
			);		
		
	}
}

// Commented stuff are for animation.
// TO DO for animation:
// add .nav-animated to ul
// uncomment animation stuff in js file
// -> on load: add class center-head
// -> onscroll: block comments
// comment out float things
function checkAnimationSupport(){
	var animation = false,
    animationstring = 'animation',
    keyframeprefix = '',
    domPrefixes = 'Webkit Moz O ms Khtml'.split(' '),
    pfx  = '',
    elm = document.createElement('div');

	if( elm.style.animationName !== undefined ) { animation = true; }    

	if( animation === false ) {
	  for( var i = 0; i < domPrefixes.length; i++ ) {
	    if( elm.style[ domPrefixes[i] + 'AnimationName' ] !== undefined ) {
	      pfx = domPrefixes[ i ];
	      animationstring = pfx + 'Animation';
	      keyframeprefix = '-' + pfx.toLowerCase() + '-';
	      animation = true;
	      break;
	    }
	  }
	}	
	var support = animation;
	return support;
}

var vp_drop = function(){
	var siblings = this.parentNode.querySelectorAll('.avp_container');
	for(var j = 0; j < siblings.length; j++){
		console.log(window.getComputedStyle(siblings[j], null).getPropertyValue('display'));
		var currStyle = window.getComputedStyle(siblings[j], null).getPropertyValue('display');
		if (currStyle == 'none'){
			mql.matches ? siblings[j].style.display = 'block' : siblings[j].style.display = 'table' ;
			siblings[j].style.height = '180px' ;
			siblings[j].style.paddingTop = '10px' ;
			siblings[j].style.paddingBottom = '10px' ;
			
			if( window.matchMedia( "(min-width: 27em) and (max-width: 60em)" ).matches){
				siblings[j].style.width = '100%';
				siblings[j].style.position = 'absolute';
				siblings[j].style.top = 214+(j*200)+'px';
				siblings[j].style.zIndex = 100;
				siblings[j].style.backgroundColor = '#F3F3F3';
				siblings[j].style["box-shadow"]= "0 4px 4px rgba(0,0,0,.25)";
			}
		} else {
			siblings[j].style.display = 'none';
		}
	};
}