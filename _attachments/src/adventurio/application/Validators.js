// jQuery.extend(jQuery.validator.messages, {
// required: "Ce champ est requis.",
// });

$.validator.addMethod("noSpecialChars", function(value, element) {
	return this.optional(element) || /^\s*[a-zA-Z0-9,\s]+\s*$/.test(value);
}, "Letters, spaces and Numbers allowed");
