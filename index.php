<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
		<title>CompSAt | Premier IT Organization of the Ateneo</title>
		<link rel="stylesheet" type="text/css" href="css/style.min.css">
		<link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
		<link rel="icon" type="image/x-icon" href="images/favicon.ico">
	</head>
	<body>
		<header id="header">
			<nav id="nav_tag">
				<label for="show-menu" class="show-menu">Menu</label>
				<input type="checkbox" id="show-menu" role="button">
				<ul id="navigation">
					<li><a href="index.php">Home</a></li>
					<li><a href="services.php">Services</a></li>
					<li><a href="projects.php">Projects</a></li>
					<li><a href="portfolio.php">Portfolio</a></li>
					<li><a href="aboutus.php">About Us</a></li>
					<li><a href="contactus.php">Contact Us</a></li>
				</ul>
			</nav>
			<div id="head_content" class="home" style="height: 90vh;">
					<div class="welcome-text">
						<h2 style="font-family:'Lucida Console', Monaco, monospace; letter-spacing: 0; text-transform: initial;">Hello World! Welcome to</h2>
						<img src="images/CompSAtLogo.png">
						<br>
						<p>We strive to help members by providing new avenues to <strong>learn IT</strong>, to create systems and render services to <strong>use IT</strong>, and to help out the community and <strong>share IT</strong>.</p>
						<a href="#what_we_offer" id="cta">Read More</a>
					</div>
				<div class="servers">&nbsp;</div>
				<div class="corkboard">&nbsp;</div>
				<div class="desk">&nbsp;</div>
				<div class="rgear">&nbsp;</div>
			</div>
		</header>
		<main id="main">
			<div class="content_div" id="what_we_offer">
				<h2>WHAT WE OFFER</h2>
				<div class="flex-container">
					<div class="item">
							<img src="images/WhatWeOffer_portfolio.png">
							<p>We provide you a showcase of the websites that CompSAt has made over the past few years.</p>
							<a href="portfolio.php" class="button">Visit Websites We've Made</a>
						</div>
					<div class="item">
							<img src="images/WhatWeOffer_services.png">
							<p>CompSAt develops the websites or systems for you. We provide a wide range of add-ons for your sites, from graphics to responsive design.</p>
							<a href="services.php" class="button">Build a Website with CompSAt</a>
						</div>
					<div class="item">
							<img src="images/WhatWeOffer_projects.png">
							<p>CompSAt develops the websites or systems for you. We provide a wide range of add-ons for your sites, from graphics to responsive design.</p>
							<a href="projects.php" class="button">Check Out CompSAt's Projects</a>
						</div>
				</div>
			</div>
			<div class="content_div" id="sponsors_div">
				<h2>SPONSORS</h2>
				<div class="flex-container">
					<div class="info-text">
						<p>If you're interested to become a sponsor of CompSAt, send your inquiries to <a href="mailto:marketing@compsat.org">marketing@compsat.org</a>.</p>
					</div>
				</div>
			</div>
		</main>
		<footer>
			<div class="social-media">
				<h3>Connect with Us</h3>
				<a target="_blank" title="Facebook" href="https://www.facebook.com/pages/Computer-Society-of-the-Ateneo-/299828990080524"><img src="images/ContactUs_fb.png"></a>
				<a target="_blank" title="Twitter" href="http://twitter.com/CompSAt"><img src="images/ContactUs_twitter.png"></a>
				<a target="_blank" title="Instagram" href="http://instagram.com/compsatgear"><img src="images/ContactUs_ig.png"></a>
				<a target="_blank" title="Ask.fm" href="http://ask.fm/CompSAtGear"><img src="images/ContactUs_askfm.png"></a>
			</div>
			<div class="more-info">
				<p class="copyright">CompSAt &copy; 2015</p>
				<p><a href="aboutus.php">About CompSAt</a></p>
				<p><a href="contactus.php">Contact Us</a></p>
			</div>
			<script type="text/javascript" src="js/jquery-2.1.4.min.js"></script>
			<script type="text/javascript" src="js/jquery.transit.min.js"></script>
			<script type="text/javascript" src="js/main.min.js"></script>
			<script type="text/javascript">
			$(function () {
				$('#cta').click(function (e) {
					e.preventDefault();
					$('html, body').animate({
						scrollTop: $('#what_we_offer').offset().top - 80
					}, 600, 'swing', function () {
						window.location.hash = e.target.hash;
					});
				});
			});
			</script>
		</footer>
	</body>
</html>
