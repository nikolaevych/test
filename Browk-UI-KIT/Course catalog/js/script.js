

// шкала прогресса
"use strict"
const ratings = document.querySelectorAll('.scale_progress');

if (ratings.length > 0) {
	initRatings();
}

function	initRatings() {
	
	let ratingActive, ratingValue;

	for (let index = 0; index < ratings.length; index++) {
			const rating = ratings[index];
			initRating(rating);
	}


function initRating(rating) {
		initRatingVars(rating);
		setRatingActiveWidth();
}

function initRatingVars(rating) {
	ratingActive = rating.querySelector('.island__scale_progress');
	ratingValue = rating.querySelector('.progress_value');
}


function setRatingActiveWidth(index = ratingValue.innerHTML) {
		const ratingActiveWidth = index / 1;
		ratingActive.style.width = `${ratingActiveWidth}%`;
	}
};


// меню бургер
$(document).ready(function() {
	$('.menu_burger').click(function(event) {
		$('.menu_burger,.menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
}); 


// слайдер
$(document).ready(function(){
	$('.slider').slick({
		slidesToShow: 3,
		arrows:false,
		infinite:false,
		centerMode:false,
		variableWidth:true,
		draggeble:false,
		 responsive:[
		 { 
		 	breakpoint: 1360,
	      settings:{
				draggeble:true,
				slidesToShow: 2
	      }
       },
	    { 
		 	breakpoint: 1024,
	      settings: {
		   	slidesToShow: 2,
				arrows:false,
				infinite:false,
				centerMode:true,
				variableWidth:true
		}},
		{
			breakpoint: 900,
	      settings:{
	      	slidesToShow: 1,
	      }

		}]	
	});
});



