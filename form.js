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
