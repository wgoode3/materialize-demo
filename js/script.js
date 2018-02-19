var form = document.querySelector("form");
form.addEventListener("submit", function(e){
    e.preventDefault();
});

$(document).ready(function(){
    $('.modal').modal();
    $(".button-collapse").sideNav();
});

$("#menu").click(function(){
    $('.tap-target').tapTarget('open');
    // $('.tap-target').tapTarget('close');
});