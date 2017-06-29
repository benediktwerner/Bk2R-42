document.addEventListener("DOMContentLoaded", function() {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		if (tabs[0].url.match(/https?:\/\/www\.youtube\.com\/watch*/)) {
			document.getElementById("yt").style.display = "block";
			document.getElementById("tum").style.display = "none";
			document.getElementById("yt-set-speed").onclick = function() {
				var val = document.getElementById("yt-speed").value;
				chrome.tabs.executeScript(tabs[0].id, { code: "document.getElementsByClassName('video-stream')[0].playbackRate="+val+";" });
			};
		}
		else if (tabs[0].url.match(/https?:\/\/streams\.tum\.de\/Mediasite\/Play\/*/)) {
			document.getElementById("yt").style.display = "none";
			document.getElementById("tum").style.display = "block";
			document.getElementById("tum-add-speed").onclick = function() {
				var val = document.getElementById("tum-speed").value;
				console.log(val);
				chrome.tabs.executeScript(tabs[0].id, {
					code: "var s=document.createElement('script');s.appendChild(document.createTextNode('Mediasite.MediaPlayer.ViewOptions.playbackRates.push("+val+");'));(document.body||document.head||document.documentElement).appendChild(s);"
				});
			};
		}
	});
		
});
