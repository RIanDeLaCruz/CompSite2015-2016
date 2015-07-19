<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
		<title></title>
		<style type="text/css">
			body {
				margin: 0;
				height: 1200px;
			}
			nav {
				position: fixed;
				top: 0;
				background-color: #CCCCCC;
				width: 100%;
				height: 50px;
			}
			header {
				display: block;
				height: 200px;
				background-image: url('http://placehold.it/940x580');
			}
			ul {
				list-style-type: none;
				margin: 0;
				padding: 0;
				position: absolute;

			}
			li {
				display: inline-block;
			}

			/*Style 'show menu' label button and hide it by default*/
			.show-menu {
				font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
				text-decoration: none;
				color: #fff;
				background: #19c589;
				text-align: center;
				padding: 10px 0;
				display: none;
				width: 50%;
			}

			/*Hide checkbox*/
			input[type=checkbox]{
			    display: none;
			}

			/*Show menu when invisible checkbox is checked*/
			input[type=checkbox]:checked ~ #navigation{
			    display: block;
			}


			@media screen and (max-width : 760px){
				/*Make dropdown links appear inline*/
				ul {
					position: static;
					display: none;
				}
				/*Create vertical spacing*/
				li {
					margin-bottom: 1px;
				}
				/*Make all menu links full width*/
				ul li, li a {
					width: 100%;
					text-align: center;
				}
				/*Display 'show menu' link*/
				.show-menu {
					display:block;
					float: right;
				}
			}
		</style>
	</head>
	<body>
		<header id="header">
			<nav id="nav_tag">
				<label for="show-menu" class="show-menu">Show Menu</label>
				<input type="checkbox" id="show-menu" role="button">
				<!-- <ul id="navigation">
					<li>Link One</li>
					<li>Link Two</li>
				</ul> -->
				<ul id="navigation">
					<li><a href="#">Home</a></li>
					<li>
						<a href="#">About ￬</a>
					</li>
					<li>
						<a href="#">Portfolio ￬</a>
					</li>
					<li><a href="#">News</a></li>
					<li><a href="#">Contact</a></li>
				</ul>
			</nav>
		</header>
		<main id="main">
		</main>
		<footer>
			<script type="text/javascript">
				var heading = document.getElementById("header");
				var main = document.getElementById("main");
				var nav_tag = document.getElementById("nav_tag");
				var ul = document.getElementById("navigation");
				var logo = document.createElement("li");
				logo.innerHTML = "<img src='http://placehold.it/20x20'>";
				var style = window.getComputedStyle(heading, null).getPropertyValue("height");

				var par = document.createElement("p")
				par.textContent = "Hello World";
				var mql = window.matchMedia("screen and (min-width:48em)");
				
				var append = function(mql){
					if(!mql.matches){
						heading.style.height = '50px';
						nav_tag.insertBefore(logo, nav_tag.firstChild);
						main.appendChild(par);
					} else {
						heading.style.height = '200px';
						if(nav_tag.contains(logo) || main.contains(par)){
							nav_tag.removeChild(nav_tag.firstChild);
							main.removeChild(par);
						}
					}
				}

				window.onload = function(){
					append(mql);
				}

				// On Window Resize
				// If width < query -> set nav height, add logo, append special div
				// If width > query -> set header height to 200 (original),
				//						if logo and div exists, remove them
				window.onresize = function(){
					console.log("resize");
					append(mql);
				}

				window.onscroll = function(){
					console.log("scroll");
					var rectObject = heading.getBoundingClientRect();
					//console.log(rectObject.bottom);
					if(rectObject.bottom <= 50){
						if(!ul.contains(logo)){
							ul.insertBefore(logo, ul.firstChild);
						}
					} else {
						if(ul.contains(logo)){
							ul.removeChild(ul.firstChild);
						}
					}
				}	

				
			</script>
		</footer>
	</body>
</html>