adventurio.views.superClasses.Validateable = adventurio.views.superClasses.Basic.extend({
	onSuccessfulValidation : undefined,
	render : function() {
		this._super("render", []);
		this.addValidationHandler(); 
	},
	addValidationHandler : function() {
		assert(this.onSuccessfulValidation != undefined, 'this.onSuccessfulValidation is abstract');
		$("form", this.el).validate({
			rules : this.model.settings.validation.rules,
			submitHandler : $.proxy(this.onSuccessfulValidationWithNativeFormParameter, this),
			debug : true
		});
	},

    onSubmitPressed : function(pressEvent){
        pressEvent.preventDefault();
        $("form", this.el).submit();
    },
    onSuccessfulValidationWithNativeFormParameter : function($form) {
        this.onSuccessfulValidation($($form).serializeJSON());
	}
});
