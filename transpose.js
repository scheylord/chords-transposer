// A $( document ).ready() block.
$( document ).ready(function() {
	var chordLineRegex = /([\n\r\s]+[A-G](#|b)?(maj|m|sus)?[0-9]?[\n\r\s]+)+/i
	var chordRegex = /[A-G]((#|b)?(maj|m|sus)?[0-9]?)/gi

	
	var lines = $('textarea#song').val().split('\n');
	for(var i = 0;i < lines.length;i++){
		if(lines[i].match(chordLineRegex)) {
			lines[i] = lines[i].replace(chordRegex, "X$1")
			console.log(lines[i])
		}
	}
});