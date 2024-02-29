// message user form

const input = document.getElementById("user-search-input");
const textarea = document.getElementById("user-message-textarea");
const messageUserForm = document.getElementById("message-user-form");

messageUserForm.addEventListener("submit", (e) => {
	e.preventDefault();
	if (input.value.length > 0 && textarea.value.length > 0) {
		swal(
			`The message "${textarea.value}" has been sent to ${input.value}.`,
			"",
			"success",
			{
				button: "Continue",
			}
		);

		input.value = "";
		textarea.value = "";
	} else {
		swal("Please fill in all fields", "", "error");
	}
});

// settings

const emailSwitchCheckbox = document.getElementById("email-switch-check");
const profileSwitchCheckbox = document.getElementById("profile-switch-check");

const settingSave = document.getElementById("setting-save");

window.onload = function () {
	const emailStorageOn = localStorage.getItem("Email Preference") === "on";
	const profileStorageOn =
		localStorage.getItem("Profile Preference") === "on";

	if (emailStorageOn && profileStorageOn) {
		emailSwitchCheckbox.checked = true;
		profileSwitchCheckbox.checked = true;
	} else if (emailStorageOn && !profileStorageOn) {
		emailSwitchCheckbox.checked = true;
		profileSwitchCheckbox.checked = false;
	} else if (!emailStorageOn && profileStorageOn) {
		emailSwitchCheckbox.checked = false;
		profileSwitchCheckbox.checked = true;
	} else {
		emailSwitchCheckbox.checked = false;
		profileSwitchCheckbox.checked = false;
	}
};

function checkEmailPreference() {
	if (emailSwitchCheckbox.checked) {
		console.log("email preference is on");
		localStorage.setItem("Email Preference", "on");
	} else {
		console.log("email preference is off");
		localStorage.setItem("Email Preference", "off");
	}
}

function checkProfilePreference() {
	if (profileSwitchCheckbox.checked) {
		console.log("profile preference is on");
		localStorage.setItem("Profile Preference", "on");
	} else {
		console.log("Profile preference is off");
		localStorage.setItem("Profile Preference", "off");
	}
}
settingSave.addEventListener("click", checkEmailPreference);
settingSave.addEventListener("click", checkProfilePreference);
