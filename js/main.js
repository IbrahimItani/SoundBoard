// function intialize(){
//
// }

//window.onload = initialize;

function router(elem) {
	var elemID = elem.id;
	var prefix = "audio";

	if (elemID.length == 7)
		var suffix = elemID.substring(elemID.length - 1, elemID.length);
	else
		var suffix = elemID.substring(elemID.length - 2, elemID.length);

	var audioID = prefix.concat(suffix);
	var audioPlaying = document.getElementById(audioID).value;

	if (document.getElementById(elemID).value == "false")
		play(audioID);
	else
		stop(audioID);
}

function play(elemID) {
	document.getElementById(elemID).play();
}

function stop(elemID) {
	document.getElementById(elemID).pause();
}

function changeButtonText(button) {
	var buttonID = button.id;
	var elem = document.getElementById(buttonID);

	if (elem.textContent == "Play") {
		elem.textContent = "Stop";
		elem.value = "true";
	} else {
		elem.textContent = "Play";
		elem.value = "false";

	}
}

function setVolume(slider) {

	var sliderID = slider.id;
	var prefix = "audio";
	var suffix = sliderID.substring(sliderID.length - 1, slider.length);
	var audioID = prefix.concat(suffix);

	var volume = slider.value / 100;

	document.getElementById(audioID).volume = volume;

}
