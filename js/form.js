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
const settingCancel = document.getElementById("setting-cancel");

function checkEmailPreference() {
	if (emailSwitchCheckbox.checked) {
		localStorage.setItem("Email Preference", "on");
	} else {
		localStorage.setItem("Email Preference", "off");
	}
}

function checkProfilePreference() {
	if (profileSwitchCheckbox.checked) {
		localStorage.setItem("Profile Preference", "on");
	} else {
		localStorage.setItem("Profile Preference", "off");
	}
}
settingSave.addEventListener("click", checkEmailPreference);
settingSave.addEventListener("click", checkProfilePreference);

// cancel settings and reset to default
settingCancel.addEventListener("click", clearAndDefault);

// timezone
const settings = document.getElementById("settings");
const timezoneSelect = document.getElementById("timezone");

settings.addEventListener("submit", (e) => {
	e.preventDefault();
});

function getTimezone() {
	const timezoneSelectValue = timezoneSelect.value;
	// set local storage
	localStorage.setItem("Timezone", timezoneSelectValue);
}

settingSave.addEventListener("click", getTimezone);

function setToggles() {
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
}
function setTimezone() {
	const timezoneStorage = localStorage.getItem("Timezone");
	if (timezoneStorage) {
		timezoneSelect.value = timezoneStorage;
	}
}

window.onload = function () {
	setTimezone();
	setToggles();
};
// clear local storage and set back to default off and select-timezone
function clearAndDefault() {
	console.log("both are checked");
	localStorage.clear();
	emailSwitchCheckbox.checked = false;
	profileSwitchCheckbox.checked = false;
	timezoneSelect.value = "select-timezone";
}
