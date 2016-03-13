$("#volume.v1").slider({
	min : 0,
	max : 100,
	value : 75,
	range : "min",
	slide : function(event, ui) {
	setVolume("audio1", ui.value/100);
	}
});

$("#volume.v2").slider({
	min : 0,
	max : 100,
	value : 75,
	range : "min",
	slide : function(event, ui) {
	setVolume("audio2", ui.value/100);
	}
});

$("#volume.v3").slider({
	min : 0,
	max : 100,
	value : 75,
	range : "min",
	slide : function(event, ui) {
	setVolume("audio3", ui.value/100);
	}
});

$("#volume.v4").slider({
	min : 0,
	max : 100,
	value : 75,
	range : "min",
	slide : function(event, ui) {
	setVolume("audio4", ui.value/100);
	}
});

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
		playAudio(audioID, 0.75);
	else
		pause(audioID);
}

function changeButtonText(button) {
	var buttonID = button.id;
	var elem = document.getElementById(buttonID);	

	if (elem.textContent != "Stop") {
		elem.textContent = "Stop";
		elem.value = "true";
	} else {
		elem.textContent = "Play";
		elem.value = "false";
	}
}

function playAudio(audioID, myVolume) {
	var audio = document.getElementById(audioID);
	setVolume(audioID, myVolume);
	audio.play();
}

function setVolume(audioID, myVolume) {
	var audio = document.getElementById(audioID);
	audio.volume = myVolume;
}

function pause(audioID) {
	var audio = document.getElementById(audioID);
	audio.pause();
}
