$(function(){
	//$('body').scrollspy({ target: '#navbar-example' })
		$("#nav-list li, #scroll_up").click(function(e) {
		e.preventDefault();
		 $('html, body').animate({
				scrollTop: $($(this).children("a").attr("href")).offset().top
		 },500);
	 });
 });