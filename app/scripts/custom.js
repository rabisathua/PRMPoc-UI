function precheck(){
            var ua = window.navigator.userAgent;
            var msie = ua.indexOf("MSIE ");
            var wt = $(window).width();
            var ht = $(window).height();

            if ((msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:9\./))) {
                var a = parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)));
                if ((a == '7') || (a == '8') ||(a == '6')) {
					$("#version").text(a);
					$(".login-main-container").css("display", "none");
					$("#lowerversion").css("display", "block");
                }
               
            }
            else if (wt < 320) {
				$(".login-main-container").css("display", "none");
				$('#lower-resolution').css('display',"block");
				$("#resolution").text(wt + "*" + ht);
            }
        }
function previous(){
    new_page = parseInt($('#current_page').val()) - 1;
    //if there is an item before the current active link run the function
    if($('.active_page').prev('.page_link').length==true){
        go_to_page(new_page);
    }
}
function next(){
    new_page = parseInt($('#current_page').val()) + 1;
    //if there is an item after the current active link run the function
    if($('.active_page').next('.page_link').length==true){
        go_to_page(new_page);
    }
}
function go_to_page(page_num){
    //get the number of items shown per page
    var show_per_page = parseInt($('#show_per_page').val()); 
    var content_div_id = $('#content_div_id').val();
	
    //get the element number where to start the slice from
    start_from = page_num * show_per_page;
    
    //get the element number where to end the slice
    end_on = start_from + show_per_page;
    
    //hide all children elements of content div, get specific items and show them
    $(content_div_id).children().css('display', 'none').slice(start_from, end_on).css('display', 'block');
    
    /*get the page link that has longdesc attribute of the current page and add active_page class to it
    and remove that class from previously active page link*/
    $('.page_link[longdesc=' + page_num +']').addClass('active_page').siblings('.active_page').removeClass('active_page');
    
    //update the current page input field
    $('#current_page').val(page_num);
	
	if($('.active_page').next()){
		if(($('.active_page').next().attr('class') == 'next_link') || ($('.active_page').next().attr('class') == 'next_link disabled')){
			$(".next_link").addClass("disabled");
		}
		else{
			$(".next_link").removeClass("disabled");
		}
	}
	if($('.active_page').prev()){
		if($('.active_page').prev().attr('class') == 'previous_link'){ 
			$(".previous_link").addClass("disabled");
		}
		else{
			$(".previous_link").removeClass("disabled");
		}
	}
	
}
$(document).ready(function(){
	try{
		//text is limited 
		var txth1 = $(".flowtext h1").text().length;
		if(txth1 > 80){
			$(".flowtext h1").text($(".flowtext h1").text().substr(0, 80)+'...');
		}
		var txtp = $(".flowtext p").text().length;
		if(txtp > 125){
			$(".flowtext p").text($(".flowtext p").text().substr(0, 125)+'...');
		}
	}
    catch(e){
    }
    try {
        if ($(document).width()< 420) {
            var newspan = $(".takewindowheader span").text().length;
            if (newspan > 20) {
                $(".takewindowheader span").text($(".takewindowheader span").text().substr(0, 20) + '...');
            }
        }
       
      
    }

    catch (e) { }
    
	try{
		//$("#headerjs").load("header.html");
		//$("#footerjs").load("footer.html");
		//progress bar js
		$('.pie_progress').asPieProgress({
            'namespace': 'pie_progress'
        });
		$('.pie_progress.blue').asPieProgress('go', '77');
		$('.pie_progress.orange').asPieProgress('go', '56');
		
		//trimming text to 130 characters in slider
		$( "#newcourse-slideshow li" ).each(function() {
			var slidetext = $(this).find(".scontainer p").text().length;
			if(slidetext > 140){
				$(this).find(".scontainer p").html($(this).find(".scontainer p").text().substr(0, 140)+ '...');
			}
		});
		$( "#ongoing-slideshow li" ).each(function() {
			var slidetextadd = $(this).find(".scontainer p").text().length;
			if(slidetextadd > 140){
			$(this).find(".scontainer p").html($(this).find(".scontainer p").text().substr(0, 140)+ '...');
		}
		});
		
		//ongoing and new course slider
		$('.ongoing-slideshow ').after('<div id="oncoursenav">').cycle({
			fx:     'scrollHorz', 
			speed:  'slow', 
			timeout: 5000,
			pager:  '#oncoursenav'
		});	
		$('.newcourse-slideshow ').after('<div id="newcoursenav">').cycle({ 
			fx:     'scrollHorz', 
			speed:  'slow', 
			timeout: 7000,
			pager:  '#newcoursenav' 
		});
		$('ul#ongoing-slideshow li').hover(function() {
			var $li = $(this);
			$li.closest('ul').cycle('pause');
			var oph = $(this).parent().parent().parent().height();
			$(this).parent().parent().css("overflow",'initial');
			//alert();
			$li.find('.hideshowslide').css({'top' : '-40px','height' : oph});
			$li.parent().css("position", "");
			$li.find('.hideshowslide').animate({opacity: 'show'});
		},function() {
			var $li = $(this);
			$li.find('.hideshowslide').animate({opacity: 'hide'});
			$li.parent().css("position", "relative");
			$(this).parent().parent().css('overflow', 'hidden');
			$li.closest('ul').cycle('resume');
		});
		
		//on hover show panel
		$('ul#newcourse-slideshow li').hover(function() {
			var $li = $(this);
			$li.closest('ul').cycle('pause');
			var nph = $(this).parent().parent().parent().height();
			$(this).parent().parent().css("overflow",'initial');
			//alert();
			$li.find('.hideshowslide').css({'top' : '-40px','height' : nph});
			$li.parent().css("position", "");
			$li.find('.hideshowslide').animate({opacity: 'show'});
		},function() {
			var $li = $(this);
			$(this).parent().parent().css('overflow', 'hidden');
			$li.parent().css("position", "relative");
			$li.find('.hideshowslide').animate({opacity: 'hide'});
			$li.closest('ul').cycle('resume');
		});
	}
	catch(e){}
	
	try{
		$('.basic-single').hover(function() {
			//var $li = $(this);
			var hheight = $(this).find(".basic-img").height();
			var hwidth = $(this).find(".basic-img").width() + 1;
			$(this).find(".hovercourse").css({'width' : hwidth,'height' : hheight });
			$(this).find(".hovercourse").animate({opacity: 'show'});
		},function() {
			$(this).find(".hovercourse").animate({opacity: 'hide'});
			
		});
		
	/*Text is limited*/
		var prname = $("#name").text().length;
		var fname = $("#name").text();
		if(prname > 12){
			$("#name").text($("#name").text().substr(0, 11)+ '...');
			$("#name").attr("title", fname);
		}
	}
	catch(e){}
	
	try{
		
		
	}
	catch(e){}
	try{
		$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('#scrolltop').fadeIn();
		} else {
			$('#scrolltop').fadeOut();
		}
	});
		
		 $("#scrolltop").click(function(){
				$('html, body').animate({scrollTop: 0}, 800);
		  });
	}
	catch(e){}
	//load pagination by default
	try{
		//how much items per page to show
		var show_per_page = 5; 
		
		//getting the amount of elements inside content div
		var number_of_items = $("#div1").children().size();
		
		//calculate the number of pages we are going to have
		var number_of_pages = Math.ceil(number_of_items/show_per_page);
		
		//set the value of our hidden input fields
		$('#current_page').val(0);
		$('#show_per_page').val(show_per_page);
		 $('#content_div_id').val('#div1');
		
		//now when we got all we need for the navigation let's make it '
		
		/* 
		what are we going to have in the navigation?
			- link to previous page
			- links to specific pages
			- link to next page
		*/
		var navigation_html = '<a class="previous_link disabled" href="javascript:previous();">Prev</a>';
		var current_link = 0;
		while(number_of_pages > current_link){
			navigation_html += '<a class="page_link" href="javascript:go_to_page(' + current_link +')" longdesc="' + current_link +'">'+ (current_link + 1) +'</a>';
			current_link++;
		}
		navigation_html += '<a class="next_link" href="javascript:next();">Next</a>';
		
		$('#page_navigation').html(navigation_html);
		
		if($("#page_navigation").children().length ==3){
			$(".previous_link, .next_link").addClass("disabled");
		}
		//add active_page class to the first page link
		$('#page_navigation .page_link:first').addClass('active_page');
		
		//hide all the elements inside content div
		$("#div1").children().css('display', 'none');
	
		//and show the first n (show_per_page) elements
		$("#div1").children().slice(0, show_per_page).css('display', 'block');
	}
	catch(e){}
});

$(function () {
    
    $(window).on("orientationchange", function (event) {
        $('.basic-single').hover(function () {
            //var $li = $(this);
            var hheight = $(this).find(".basic-img").height();
            var hwidth = $(this).find(".basic-img").width() + 1;
            $(this).find(".hovercourse").css({ 'width': hwidth, 'height': hheight });
            $(this).find(".hovercourse").animate({ opacity: 'show' });
        }, function () {
            $(this).find(".hovercourse").animate({ opacity: 'hide' });

        }); 
    });

	$("p.clacctab").each(function(){
		if($(this).next(".claccdec").children().length > 0){
		$(this).addClass("haschild");
		$(this).next(".claccdec").children().children().children().addClass("load_data");
		$(this).next(".claccdec").hide();
		$("p.clacctab.active").next(".claccdec").show();
	}
	else{
		$(this).children().addClass("load_data");
	}
	});
	
	$(".clacctab").click(function () {
		$(this).next(".claccdec").slideToggle("fast").siblings(".claccdec:visible").slideUp("fast");
		$(this).toggleClass("active");
		$(this).siblings(".clacctab").removeClass("active");
	});
	
	$(".load_data").click(function(){
		$(".load_data").removeClass("active");
		$(this).addClass("active");
			//var htxt = $(this).parent().parent().parent().prev().text();
			var txt = $(this).text();
			//$(".moduleheader").text( htxt + " > " + txt);
			$(".moduleheader").text(txt);
		var link = $(this).attr("href");
		$("#content div").hide();
		$("#knowledgecontent div").hide();
		$(link).show();
		
		//how much items per page to show
		var show_per_page = 5; 
		
		//getting the amount of elements inside content div
		var number_of_items = $(link).children().size();
		
		//calculate the number of pages we are going to have
		var number_of_pages = Math.ceil(number_of_items/show_per_page);
		
		//set the value of our hidden input fields
		$('#current_page').val(0);
		$('#show_per_page').val(show_per_page);
		$('#content_div_id').val(link);
		
		//now when we got all we need for the navigation let's make it '
		
		/* 
		what are we going to have in the navigation?
			- link to previous page
			- links to specific pages
			- link to next page
		*/
		var navigation_html = '<a class="previous_link disabled" href="javascript:previous();">Prev</a>';
		var current_link = 0;
		while(number_of_pages > current_link){
			navigation_html += '<a class="page_link" href="javascript:go_to_page(' + current_link +')" longdesc="' + current_link +'">'+ (current_link + 1) +'</a>';
			current_link++;
		}
		navigation_html += '<a class="next_link" href="javascript:next();">Next</a>';
		
		$('#page_navigation').html(navigation_html);
		
		if($("#page_navigation").children().length ==3){
			$(".previous_link, .next_link").addClass("disabled");
		}
		//add active_page class to the first page link
		$('#page_navigation .page_link:first').addClass('active_page');
		
		//hide all the elements inside content div
		$($('#content_div_id').val()).children().css('display', 'none');
		
		//and show the first n (show_per_page) elements
		$($('#content_div_id').val()).children().slice(0, show_per_page).css('display', 'block');
		
	
	});
	
	
	
});

$(window).resize(function () {
 try{
    if ($(document).width() < 420) {
        var newspan = $(".takewindowheader span").text().length;
        if (newspan > 20) {
            var smspan = $(".takewindowheader span").text().substr(0, 20) + '...';
            $(".takewindowheader span").text(smspan);
        }
    }
    else {
        return false;
    }
}
    catch(e){}
    try{
	$('.ongoing-slideshow').cycle('destroy');
	$('.ongoing-slideshow').each(function(){
        newWidth = $(this).parent('div').width();
        $(this).width(newWidth); //alert(newWidth);
        $(this).height('auto');
        $(this).children().width(newWidth);
        $(this).children().height('auto');
    });
    $('.ongoing-slideshow ').after('<div id="oncoursenav">').cycle({ 
			fx:     'scrollHorz', 
			speed:  'slow', 
			timeout: 5000,
			pager:  '#oncoursenav'
		});
	$("#oncoursenav:empty").remove();
	
	$('.newcourse-slideshow').cycle('destroy');
	 $('.newcourse-slideshow').each(function(){
        newWidth = $(this).parent('div').width();
        $(this).width(newWidth); //alert(newWidth);
        $(this).height('auto');
        $(this).children().width(newWidth);
        $(this).children().height('auto');
    });
    $('.newcourse-slideshow').after('<div id="newcoursenav">').cycle({ 
			fx:     'scrollHorz', 
			speed:  'slow', 
			timeout: 7000,
			pager:  '#newcoursenav' 
		});
	$("#newcoursenav:empty").remove();
	}
	catch(e){}
});

		