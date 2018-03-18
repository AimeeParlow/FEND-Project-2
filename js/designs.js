 /* menu toggle */
  
let menu = document.getElementById("menu");
  menu.addEventListener('click', function(e) {
	let drawer = document.getElementById("drawer");
	drawer.classList.toggle("open");
	e.stopPropagation();
  });


 /* click nav-link to close menu */
  
let menuWorks = document.getElementById("menu-works");
  menuWorks.addEventListener('click', function(e) {
	let drawer = document.getElementById("drawer");
	drawer.classList.remove("open");
	e.stopPropagation();
  });

let menuAbout = document.getElementById("menu-about");
  menuAbout.addEventListener('click', function(e) {
	let drawer = document.getElementById("drawer");
	drawer.classList.remove("open");
	e.stopPropagation();
  });

let menuContact = document.getElementById("menu-contact");
  menuContact.addEventListener('click', function(e) {
	let drawer = document.getElementById("drawer");
	drawer.classList.remove("open");
	e.stopPropagation();
  });

