alert("This is EVIL!");
if (!confirm("Loading EVLI!"))
	chrome.runtime.sendMessage("kill_tab");
