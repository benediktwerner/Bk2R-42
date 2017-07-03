document.addEventListener("DOMContentLoaded", function() {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		if (tabs[0].url.match(/https?:\/\/www\.youtube\.com\/watch*/)) {
			setupYTButton(tabs[0]);
		}
		else if (tabs[0].url.match(/https?:\/\/streams\.tum\.de\/Mediasite\/Play\/*/)) {
			setupTUMButton(tabs[0]);
		}
	});
		
});

function setupYTButton(tab) {
	document.getElementById("yt").style.display = "block";
	document.getElementById("tum").style.display = "none";
	document.getElementById("yt-set-speed").onclick = function() {onYTClick(tab);};
	document.getElementById("yt-speed").addEventListener("keyup", function(e) {
		e.preventDefault();
		if (e.keyCode == 13)
			onYTClick(tab);
	});
}

function onYTClick(tab) {
	var val = document.getElementById("yt-speed").value;
	chrome.tabs.executeScript(tab.id, {
		code: "document.getElementsByClassName('video-stream')[0].playbackRate="+val+";"
	});
	window.close();
};

function setupTUMButton(tab) {
	document.getElementById("yt").style.display = "none";
	document.getElementById("tum").style.display = "block";
	document.getElementById("tum-add-speed").onclick = function() {onTUMClick(tab);};
	document.getElementById("tum-speed").addEventListener("keyup", function(e) {
		e.preventDefault();
		if (e.keyCode == 13)
			onTUMClick(tab);
	});
}

function onTUMClick(tab) {
	var val = document.getElementById("tum-speed").value;
	console.log(val);
	chrome.tabs.executeScript(tab.id, {
		code: "var s=document.createElement('script');s.appendChild(document.createTextNode('Mediasite.MediaPlayer.ViewOptions.playbackRates.push("+val+");'));(document.body||document.head||document.documentElement).appendChild(s);"
	});
	window.close();
}

