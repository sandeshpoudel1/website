// SKILLS SECTION


   $('.progress').waypoint(function() {
    $('.progress .progress-bar').each(function() {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  }, {
    offset: '80%'
  });


//FILTER IN PORTFOLIO

$(document).ready(function(){

let $btns=$('.port-button button');

$btns.click(function(e){

	$('.port-button button').removeClass('filter-active');
	e.target.classList.add('filter-active');

	let selector=$(e.target).attr('data-filter');
		$('.portfolio-container').isotope({
			filter:selector
		});
		return false;
})
$('.port-button #btn1').trigger('click');
});


//VENOBOX 


$(document).ready(function() {
      $('.venobox').venobox({
        'share': false
      });
    });
 


//SCROLL TOP

$(window).scroll(function(){
	if($(this).scrollTop()>100)
	{
		$('nav').addClass('top');
     $('.back-to-top').fadeIn('slow');


	}
	else{
		$('nav').removeClass('top');
     $('.back-to-top').fadeOut('slow');

	}
	

});

//BACK TO TOP




 // Initi AOS
 $(window).ready(function(){
  AOS.init({
  	duration: 1000,
  	once:true

  });
});
    
 
