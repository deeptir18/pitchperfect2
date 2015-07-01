function bounce() {
	$('#down').addClass("animated bounce");
	setTimeout(removeBounce,700);
}

function removeBounce() {
	$('#down').removeClass("animated bounce");
}

function toggleLiveInput() {
	console.log('working');
}