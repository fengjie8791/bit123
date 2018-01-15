$(function(){
	$(document).on('click', '.panel-heading span.icon_minim', function (e) {
	    var $this = $(this);
	    if (!$this.hasClass('panel-collapsed')) {
	        $this.parents('.panel').find('.panel-body').slideUp();
	        $this.addClass('panel-collapsed');
	        $this.removeClass('glyphicon-minus').addClass('glyphicon-plus');
	    } else {
	        $this.parents('.panel').find('.panel-body').slideDown();
	        $this.removeClass('panel-collapsed');
	        $this.removeClass('glyphicon-plus').addClass('glyphicon-minus');
	    }
	});
	$(document).on('focus', '.panel-footer input.chat_input', function (e) {
	    var $this = $(this);
	    if ($('#minim_chat_window').hasClass('panel-collapsed')) {
	        $this.parents('.panel').find('.panel-body').slideDown();
	        $('#minim_chat_window').removeClass('panel-collapsed');
	        $('#minim_chat_window').removeClass('glyphicon-plus').addClass('glyphicon-minus');
	    }
	});
	$(document).on('click', '#new_chat', function (e) {
	    var size = $( ".chat-window:last-child" ).css("margin-left");
	     size_total = parseInt(size) + 400;
	    alert(size_total);
	    var clone = $( "#chat_window_1" ).clone().appendTo( ".container" );
	    clone.css("margin-left", size_total);
	});
	$(document).on('click', '.icon_close', function (e) {
	    //$(this).parent().parent().parent().parent().remove();
	    $( "#chat_window_1" ).addClass("opacity-0");
	    $( "#chat_window_1" ).removeClass("opacity-1");

	    $( "#chat_small_btn" ).addClass("opacity-1");
	    $( "#chat_small_btn" ).removeClass("opacity-0");
	});

	$(document).on('click', '#chat_small_btn', function (e) {
	    //$(this).parent().parent().parent().parent().remove();
	    $( "#chat_window_1" ).addClass("opacity-1");
	    $( "#chat_window_1" ).removeClass("opacity-0");

	    $( "#chat_small_btn" ).addClass("opacity-0");
	    $( "#chat_small_btn" ).removeClass("opacity-1");
	});

	// $('.msg-user-container').on('click',funcion(){
	// 	// console.log(234);
	// })

	$(document).on('click', '.msg-user-container', function () {
	    $(".msg-user-container").addClass('display-none');
	    $(".msg-user-container").removeClass('display-block');

	    $(".msg-each-container").removeClass('display-none');
	    $(".msg-each-container").addClass('display-block');

	    $("#chat_header_each").removeClass('display-none');
	    $("#chat_header_each").addClass('display-block');

	    $("#chat_header_list").addClass('display-none');
	    $("#chat_header_list").removeClass('display-block');
	});


	$(document).on('click', '#chat_back', function () {
	    $(".msg-user-container").removeClass('display-none');
	    $(".msg-user-container").addClass('display-block');

	    $(".msg-each-container").addClass('display-none');
	    $(".msg-each-container").removeClass('display-block');

	    $("#chat_header_each").addClass('display-none');
	    $("#chat_header_each").removeClass('display-block');

	    $("#chat_header_list").removeClass('display-none');
	    $("#chat_header_list").addClass('display-block');
	});


	
})

