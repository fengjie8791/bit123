$(function(){
	$('#myList a').on('click', function (e) {
	  e.preventDefault();
	  $(this).tab('show');
	  $(".list-group-item").removeClass('active');
	  $(this).addClass('active');
	})

	$("[name='my-checkbox']").bootstrapSwitch();
	
})

$(function(){
	$("#search p").click(function(){
	    $("#buy").toggleClass("display");
	    $("#sell").toggleClass("display");
	    $("#post").toggleClass("display");
	    // $("#search-bar").toggleClass("display");
	    $("#search-form").toggleClass("display");
	    
	    $("#search-icon").toggleClass("display");
	    $("#search-close").toggleClass("display");
	    $('.transform').toggleClass('transform-active');
	    $("#search p").toggleClass("display");
	    // if (  $("#search-bar").css( "transform" ) == 'none' ){
	    //     $(this).css("transform","rotate(45deg)");
	    // } else {
	    //     $(this).css("transform","" );
	    // }
	});
	$("#search-close").click(function(){
	    $("#buy").toggleClass("display");
	    $("#sell").toggleClass("display");
	    $("#post").toggleClass("display");
	    $("#search-form").toggleClass("display");
	    $("#search-icon").toggleClass("display");
	    $("#search-close").toggleClass("display");
	    $('.transform').toggleClass('transform-active');
	    $("#search p").toggleClass("display");
	});

})
