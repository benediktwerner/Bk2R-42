function save_options() {
	var urls = document.getElementById("forbidden-urls").value;
	var forbidden_urls = urls.split("\n");
	chrome.storage.sync.set({
		forbiddenUrls: forbidden_urls
	}, function() {
		var status = document.getElementById("status");
		status.textContent = "Options saved.";
		setTimeout(function() {
			status.textContent = "";
		}, 750);
		chrome.runtime.sendMessage("update_options");
	});
}

function restore_options() {
	chrome.storage.sync.get({
		forbiddenUrls: ["https://www.youtube.com/"]
	}, function(items) {
		document.getElementById("forbidden-urls").value = items.forbiddenUrls.join("\n");
	});
}

document.addEventListener("DOMContentLoaded", restore_options);
document.getElementById("save").addEventListener("click", save_options);
