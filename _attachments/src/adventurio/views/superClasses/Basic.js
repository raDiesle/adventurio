adventurio.views.superClasses.Basic = Backbone.View.extend({
	
	// getElTemplateResult : function(){
		// var expectedTemplateDefinitionID = this.el.attr('id').replace(/page/, "template");
		// this.getTemplateResult(expectedTemplateDefinitionID, this.getTemplateValues());
	// },
	getTemplateResult : function(templateDefinitionID, templateValues){
		return Handlebars.compile($("#"+templateDefinitionID).html())(templateValues);
	},
	getBasicPageTemplateResult : function(headerTitle){
		var templateValues = {templatePartialPageID : "template_"+this.id, headerTitle : headerTitle};
		var specific = this.getSpecificTemplateValues();
		
		$.extend(templateValues, this.getSpecificTemplateValues());
		this.getTemplateResult("template_basic_page_simple", templateValues);
	},
	getRequestedPageTemplateResult : function(){
		this.getBasicPageTemplateResult();
	},
	render : function(headerTitle, options) {
		//_.bind(this.getBasicPageTemplateResult, this); 
		
		options = options || {};
		var role = typeof options['role'] == 'undefined' ? "page" : options['role'];
		
		this.el = $("#"+this.id);
		var htmlContent = typeof options['htmlContent'] == 'undefined' ? this.getBasicPageTemplateResult(headerTitle) : options['htmlContent'];
		
	// $("div[data-role='header'] h2", this.el).text(headerTitle);

		// $content = $('[data-role="content"]', this.el);
		// $content.html(htmlContent);

		// var firstTimeRendered = !$content.hasClass('ui-content');

		$.mobile.changePage("#" + this.id, {
			transition : 'slideup',
			reverse : false,
			changeHash : false,
			role : role
		});

		// if(!firstTimeRendered) {
			// $content.trigger("create");
		// }
	},
	addValidationHandler : function() {
		$("form", this.el).validate({
			rules : this.model.settings.validation.rules,
			// messages : this.model.attributes.messages,
			submitHandler : $.proxy(this.onSuccessfulValidation, this),
			debug : true
		});
	},
	makeLastPageTransparent : function(prevPageAsTransparentBackground){
		if(prevPageAsTransparentBackground.css("display") !== "none"){
			prevPageAsTransparentBackground.addClass("ui-dialog-background ");
		}
	}
}); 