var bellButton = document.getElementById("bell-btn");
var clickHere = document.getElementById("click-here");

var notifyOverlay = document.getElementById("notify-overlay");

var closeButton = document.getElementById("close-btn");
var alertClose = document.getElementsByClassName("alert-close");

for (let i = 0; i < alertClose.length; i++) {
	alertClose[i].onclick = function () {
		alertClose[i].parentNode.style.display = "none";
	};
}

bellButton.onclick = function () {
	notifyOverlay.style.display = "block";
};
clickHere.onclick = function () {
	notifyOverlay.style.display = "block";
};

closeButton.onclick = function () {
	notifyOverlay.style.display = "none";
};

window.onclick = function (event) {
	if (event.target == notifyOverlay) {
		notifyOverlay.style.display = "none";
	}
};

var alertCloseParent = alertClose.parentNode;

alertClose.onclick = function () {
	alertCloseParent.style.display = "none";
};
