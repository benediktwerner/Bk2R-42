
chrome.browserAction.onClicked.addListener(function() {
	console.log("Clearing notifications");
	chrome.notifications.getAll((items) => {
		if (items) {
			for (let key in items) {
				chrome.notifications.clear(key);
			}
		}
	});
});  