function loadInvalidUrls() {
	invalidUrls = chrome.storage.sync.get({
			forbiddenUrls: ["https://www.youtube.com/"]
		},
		function(items) {
			invalidUrls = items.forbiddenUrls;
			console.log("Updated invalid urls:");
			console.log(invalidUrls);
		});
}

var invalidUrls;
loadInvalidUrls();

chrome.tabs.onUpdated.addListener(
	function(tabId, changeInfo, tab) {
		if (changeInfo.url != null) {
			if (invalidUrls.indexOf(changeInfo.url) >= 0) {
				console.log("Forbidden url: " + changeInfo.url);
				chrome.tabs.executeScript(tabId, {file: "page_blocker.js", runAt: "document_start"});
			}
		}
	}
);  

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
                if (request == "kill_tab") {
			chrome.tabs.remove(sender.tab.id);
		}
		else if (request == "update_options") {
			loadInvalidUrls();
		}
	}
);
