adventurio.events.SubmitForm = {};

_.extend(adventurio.events.SubmitForm, Backbone.Events);

adventurio.events.SubmitForm.on("formSubmitted", function() {
  alert("Triggered " );
});