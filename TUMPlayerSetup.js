console.log("TUM Mediasite found. Waiting 3 seconds for the player to load.");
setTimeout(setupOnPage, 3000);

function executeOnPage(func) {
	var script = document.createElement("script");
	script.appendChild(document.createTextNode("(" + func + ")();"));
	(document.body || document.head || document.documentElement).appendChild(script);
}

function setupOnPage() {
	executeOnPage(setup);
}

function setup() {
	console.log("Improving player...");
	p = Mediasite.MediaPlayer.ViewOptions.playbackRates;
	p.push(2.5);
	p.push(3);

	r = $(".rate");
	r.bind("contextmenu", function(e) {
		e.preventDefault();
		for (var i = 1; i < p.length; i++)
			r.click();
	});
	console.log("Finished");
}
