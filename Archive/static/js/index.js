
// $(function() {
//     $( "#tabs" ).tabs();
//     $(".tab li").each(function(){  
//         $(this).click(function(){ 
//             $(".tab li").removeClass("active");
//             $(this).addClass("active")
//         })
//     });
// });

$(window).scroll(function(){
	 if($(document).scrollTop() >= 88){
		   $(".nav").removeClass("nav-effect");	  	    	   
	  }else{
		  $(".nav").addClass("nav-effect");
	}
});	

function goBack() {
    window.history.back();
};

jQuery(document).ready(function($) {
	tab = $('.tabs h3 a');

	tab.on('click', function(event) {
		event.preventDefault();
		tab.removeClass('active');
		$(this).addClass('active');

		tab_content = $(this).attr('href');
		$('div[id$="tab-content"]').removeClass('active');
		$(tab_content).addClass('active');
	});
});

$(function() {
    $( "#tabs" ).tabs();
    $(".tab li").each(function(){  
        $(this).click(function(){ 
            $(".tab li").removeClass("active");
            $(this).addClass("active")
        })
    });
    $( "#buyTab" ).tabs({
		 active: "tabs-1" 
	});
	$( "#Post" ).tabs({
		 active: "postHistory" 
	});
});