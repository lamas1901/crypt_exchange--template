$(document).ready(function() {
	$('select').niceSelect();
	document.querySelector(".button-burger").addEventListener("click",()=>{
		document.querySelector(".menu-burger").classList.toggle("menu-burger--active")
	})
	document.querySelector(".button-burger--close").addEventListener("click",()=>{
		document.querySelector(".menu-burger").classList.toggle("menu-burger--active")
	})
	window.addEventListener("resize",()=>{
		document.querySelector(".menu-burger").classList.remove("menu-burger--active")	
	})
});