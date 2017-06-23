alert("This is EVIL!");
if (confirm("This page will now close!"))
	chrome.runtime.sendMessage("kill_tab");
