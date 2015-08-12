<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Contact Us | Computer Society of the Ateneo</title>
		<link rel="stylesheet" type="text/css" href="css/style.css">
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
			<div id="head_content" style="background-color:#F3F3F3;">
				<div id="contactus" class="content_div flex-container">
					<h2 class="flex-head">CONTACT US</h2>
					<div class="social-media">
						<div class="details">
							<p><strong>Address:</strong><br>Room 303, MVP – Center for Student Leadership, Ateneo de Manila University, Katipunan, Quezon City</p>
							<br>
							<p><h4 style="margin: 0; font-size: 1.1em;">Mark Robert M. Aldecimo</h4></p>
							<p style="color: #19647E;"><strong>CompSAt President</strong></p>
							<p>0916-668-5502</p>
							<p class="email"><a href="mailto:mark@compsat.org">mark@compsat.org</a></p>
						</div>

						<!-- <a target="_blank" title="Facebook" href="http://facebook.com/CompSAt"><img src="images/contact-fb.png"></a>
						<a target="_blank" title="Twitter" href="http://twitter.com/CompSAt"><img src="images/contact-twitter.png"></a>
						<a target="_blank" title="Instagram" href="http://instagram.com/compsatgear"><img src="images/contact-ig.png"></a>
						<a target="_blank" title="Ask.fm" href="http://ask.fm/CompSAtGear"><img src="images/contact-askfm.png"></a> -->
					</div>
					<div id="form" class="content_div">
						<form method="post" action="<?php echo htmlspecialchars('mailhandler.php'); ?>">
							<label for="name" class="form_name">Name:</label><br>
							<input type="text" id="name" name="name"><br>
							<label for="email" class="form_email">Email:</label><br>
							<input type="text" id="email" name="email"><br>
							<label for="name" class="form_name">Message:</label><br>
							<textarea id="name" cols="60" rows="10" name="message"></textarea><br>
							<?php
					          require_once('recaptchalib.php');
					          $publickey = "6LfjbfkSAAAAAGz90iRtST3hVr8gGm5XjYytqj5x"; // you got this from the signup page
					          echo recaptcha_get_html($publickey);
					        ?>
							<input type="submit" value="Send">
						</form>
					</div>
				</div>
			</div>
		</header>
		<!-- <main id="main"></main> -->
		<footer>
			<div class="social-media">
				<h3>Connect with Us</h3>
				<a target="_blank" title="Facebook" href="http://facebook.com/CompSAt"><img src="images/contact-fb.png"></a>
				<a target="_blank" title="Twitter" href="http://twitter.com/CompSAt"><img src="images/contact-twitter.png"></a>
				<a target="_blank" title="Instagram" href="http://instagram.com/compsatgear"><img src="images/contact-ig.png"></a>
				<a target="_blank" title="Ask.fm" href="http://ask.fm/CompSAtGear"><img src="images/contact-askfm.png"></a>
			</div>
			<div class="more-info">
				<p class="copyright">CompSAt &copy; 2015</p>
				<p><a href="aboutus.html">About CompSAt</a></p>
				<p><a href="contactus.html">Contact Us</a></p>
			</div>
			<script type="text/javascript" src="js/main.js"></script>
		</footer>
	</body>
</html>
