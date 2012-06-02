adventurio.views.superClasses.Validateable = adventurio.views.superClasses.Basic.extend({
	events : {
		"click a[type='submit']" : "validateForm",
	},
	render : function() {
		this._super("render", {});
		 // this.constructor.__super__.render.apply(this, {});
		$.proxy(this.addValidationHandler(), this); // add validation handler multiple times is ok ?
	},
	addValidationHandler : function() {
			$("form", this.el).validate({
			rules : this.model.settings.validation.rules,
			submitHandler : $.proxy(this.onSuccessfulValidation, this),
			debug : true
		});
	},
	validateForm : function(event) {
		event.preventDefault();
		$.proxy($("form", this.el).submit(), this);
	},
});
