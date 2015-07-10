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
			nav ul li {
				display: inline-block;
			}
		</style>
	</head>
	<body>
		<header id="header">
			<nav>
				<ul type="none" id="navigation">
					<li>Link One</li>
					<li>Link Two</li>
				</ul>
			</nav>
		</header>
		<main id="main">
		</main>
		<footer>
			<script type="text/javascript">
				var heading = document.getElementById("header");
				var main = document.getElementById("main"); 
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
						ul.insertBefore(logo, ul.firstChild);
						main.appendChild(par);
					} else {
						heading.style.height = '200px';
						if(ul.contains(logo) || main.contains(par)){
							ul.removeChild(ul.firstChild);
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