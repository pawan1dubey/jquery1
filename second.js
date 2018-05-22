$(document).ready(function(){
$(".adm").hide();
$(".crs").hide();

$("#admbtn").click(function(){
$(".adm").show(1000);
$(".crs").hide();
});

$("#admbtn").hover(function(){
$(".adm").show(1000);
$(".crs").hide();
});


$("#crsbtn").click(function(){
$(".adm").hide();
$(".crs").show(1000);
});


$("#crsbtn").hover(function(){
$(".adm").hide();
$(".crs").show(1000);
});

$("#homebtn").click(function(){
$(".adm").hide();
$(".crs").hide();
});

$("#homebtn").hover(function(){
$(".adm").hide();
$(".crs").hide();
});

$("#contactbtn").click(function(){
$(".adm").hide();
$(".crs").hide();
});

$("#contactbtn").hover(function(){
$(".adm").hide();
$(".crs").hide();
});


});

