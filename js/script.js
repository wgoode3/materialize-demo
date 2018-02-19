var form = document.querySelector("form");
form.addEventListener("submit", function(e){
	e.preventDefault();
});

$(document).ready(function(){
	$('.modal').modal();
});