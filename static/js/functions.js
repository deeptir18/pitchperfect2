
// Bounce sets the behavior of the arrow in the splash section
function bounce() {
	$('#down').addClass("animated bounce");
	setTimeout(removeBounce,700);
}

// Removes bounce animation from arrow in splash
function removeBounce() {
	$('#down').removeClass("animated bounce");
}

// Begins recording audio
function recordStart() {
	changeButtons("record");
}

// Stops recording
function stopRecord() {
	changeButtons("stop");
}

// Playback audio
function playRecord() {
	changeButtons("play");
}

// Download .wav file
function downloadRecord() {
	changeButtons("download");
}

// Updates button display for which button should be active (can also deactivate all buttons if ID isnt equal to anything)
function changeButtons(activeID) {
	var path = "/static/img/";
	var buttons = {"record":"recording.png", "play":"playing.png", "download":"downloading.png", "stop":"stopping.png"};
	for (button in buttons) {
		if (button == activeID) {
			document.getElementById(button).src=path+buttons[button];
		}
		else {
			document.getElementById(button).src=path+button+".png";
		}
	}
}

