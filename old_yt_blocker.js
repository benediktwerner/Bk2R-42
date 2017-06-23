document.addEventListener("spfdone", process);
process();

function process() {
	if (location.pathname != "/")
		return;

	alert("This is EVIL!");
	if (confirm("This page will now close!"))
		chrome.runtime.sendMessage("kill_tab");
}
