$(function () {
  $(document).scroll(function () {
    var $nav = $(".fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

$( document ).ready(function() {
	$("#contacttoggle").hover(function(){
		 $(".dropdown-menu").removeClass("hide");
	});

});

	$("#navbarDropdownMenuLink").on( "click", function() {
		console.log("Entered");
		var color = $('#nav').css( "background-color" );
		console.log("This is color ", color);
  		$(".dropdown-menu").css("background-color", color);
	});