

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
}