adventurio.views.creator.Login = adventurio.views.superClasses.BasicDialog.extend({
	id : "page_creator_login",
	model : adventurio.models.User,
	getSpecificTemplateValues : function(){
		return {
			storyHeader : "Login"
		}
	},
    onCancelPressed : function(pressEvent){
        this.model.logout();
        pressEvent.preventDefault();
        adventurio.routers.MainRouter.singleton.navigate("#", {
            trigger : true
        });
//        this._super("onCancelPressed", [pressEvent]);
    },
    onSuccessfulValidation : function(formData){
        this.model.login(formData.name, formData.password);
        this.model.on("change", function() {
            if(this.model.isAuthenticated()) {
                // window.history.back();
                history.go(-1);
            }
        }, this)
	}
});
