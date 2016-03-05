function handleFileSelect(evt, string) {
	var playerID = evt.srcElement.id;
    var files = evt.target.files;

    playFile(files[0], playerID);
}

function playFile(file, player) {console.log('file', file);
    
    var freader = new FileReader();

     var prefix = "audio";
	 var suffix = player.substring(player.length - 1, player.length);
	 var audioID = prefix.concat(suffix);


	player = document.getElementById(audioID);
        
    freader.onload = function(e) {
        player.src = e.target.result;
    };
    freader.readAsDataURL(file);
}

var eles = [];
var inputs = document.getElementsByTagName("input");
for(var i = 1; i < inputs.length; i++) {
	document.getElementById(inputs[i].id).addEventListener('change', handleFileSelect);
}





