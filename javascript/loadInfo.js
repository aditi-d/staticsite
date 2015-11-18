/* This javascript will dynamically load the data as the navigation panel elements on the left are clicked */


$(function() {
	/*$('ul.sidebar-subnav li').click(function (e) {
		console.log($(this).firstChild.attributes.id.nodeValue);
		console.log($(this));
	});*/
	var aboutMe = "Hello, Welcome to my webpage! This is my humble attempt to create my website profile. " + 
		"There are a lot more changes on the way as I explore the process of creating my website " +
		"and especially explore more on the front-end design. I am passionate about web-application development, full-stack development " +
		"and working on back-end software development. If you have some interesting projects to work on and would like to discuss about it, " +
		"definitely get in touch with me.";
	var education = "I completed my undergraduation from Pune University in India in Computer Science. I completed my Master's in Computer Science " +
	"from California State University, Chico. Post completion my undergraduation, I completed my C-DAC (diploma in advance computing). " +
	"I also like to follow different tutorials on Udacity. Some of the recent ones being Javascript, jQuery and Ajax.";
	var work = 'Software Developer, 11Main Inc., Chico, CA	Jul 2014-Present <br><ul>' + 
'	<li>As a part of the buyer experience team worked on enhancing the shopper’s experience on the e-Commerce website.</li> ' +
'	<li>Designed and developed REST service APIs for user preferences. </li>' +
'	<li>Implemented a feature to personalize catalog, shipping and payment options based on the locale. </li>' +
'	<li>Ported over the full-stack C# MVC application to NodeJs application using TypeScript and Dust templates. </li>' +
'	<li>Wrote unit tests using Mocha framework and API documentation using apiDoc. </li></ul><br>' +
' Computer Student Assistant, UHFS, California State University, Chico	Sep 2012-May 2014 <br> <ul>' +
' <li>Worked part-time in the University Housing and Food Services (UHFS) to provide technical support to a housing staff of 40 fulltime employees. </li>' +
' <li>Work involved managing 100+ computers, installing/updating software and troubleshooting end user problems, setting up computer labs and staff laptops. </li>' + 
' <li>Created silent-installer for adobe updates on Windows usable by all the staff through a shared location. </li></ul> <br>' +
'Software Engineer, Persistent Systems Ltd., Pune, India	May 2011-Jul 2012 <br><ul>' +
'	<li>Worked on an agent for tracking real time and historical data for a JMS compliant messaging server and ' +
'display the data graphically using IBM Tivoli Monitoring (ITM) Framework.</li> <li>Studied the EMS server and developed the code to ' +
'collect configuration information, memory utilization and server status from the EMS server using JMS and EMS specific API. </li>' +
'<li> Joined as a trainee, continued as a Software Engineer, trained a new team member on EMS. </li>' +
'<li>Technologies Used: Java, JMS, IBM Tivoli Monitoring (ITM) Framework. </li>';
	var projects = "JMS HttpServerC Catclicker Neighbourhood resume_template arcade_game general_java_programs check github";
	var hobbies = "reading drawing trying out new dishes";

	var content = $('#content-text p');
	content.text('');
	content.append(aboutMe);

	$('#aboutme').click(function (e) {
		console.log('hello');
		console.log(aboutMe);
		content.text('');
		content.append(aboutMe);
	});
	$('#education').click(function (e) {
		content.text('');
		content.append(education);
	});
	$('#work').click(function (e) {
		content.text('');
		content.append(work);
	});
	$('#projects').click(function (e) {
		content.text('');
		content.append("Comming soon");
	});
	$('#hobbies').click(function (e) {
		content.text('');
		content.append("Comming soon");
	});


});
