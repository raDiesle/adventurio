adventurio.views.superClasses.Validateable = adventurio.views.superClasses.Basic.extend({
	onSuccessfulValidation : undefined,
	events : {
		"click a[type='submit']" : "validateForm",
	},
	render : function() {
		this._super("render", {});
		this.addValidationHandler(); 
	},
	addValidationHandler : function() {
		assert(this.onSuccessfulValidation != undefined, 'this.onSuccessfulValidation is null');
		$("form", this.el).validate({
			rules : this.model.settings.validation.rules,
			submitHandler : $.proxy(this.onSuccessfulValidation, this),
			debug : true
		});
	},
	validateForm : function(event) {
		event.preventDefault();
		// $.proxy($("form", this.el).submit(), this);
		$("form", this.el).submit();
	},
	getFormData : function(){
		return $("form", this.el).serializeJSON();
	}
});
