adventurio.views.superClasses.Basic = Backbone.View.extend({
	
	getTemplateResult : function(templateDefinitionID, templateValues){
		return Handlebars.compile($("#"+templateDefinitionID).html())(templateValues);
	},
	getBasicPageTemplateResult : function(headerTitle){
		var templateValues = {templatePartialPageID : "template_"+this.id, headerTitle : headerTitle};
		var specific = this.getSpecificTemplateValues();
		
		$.extend(templateValues, this.getSpecificTemplateValues());
		return this.getTemplateResult("template_basic_page_simple", templateValues);
	},
	getRequestedPageTemplateResult : function(){
		this.getBasicPageTemplateResult();
	},
	render : function(headerTitle, options) {
		options = options || {};
		var role = typeof options['role'] == 'undefined' ? "page" : options['role'];
		var htmlContent = typeof options['htmlContent'] == 'undefined' ? this.getBasicPageTemplateResult(headerTitle) : options['htmlContent'];
		
		this.cleanupPossiblePageDuplicationInDOM();
				
		$(this.el).html(htmlContent);
		$("body").append($(this.el));
		
		$.mobile.changePage("#" + this.id, {
			transition : 'slideup',
			reverse : false,
			changeHash : false,
			role : role
		});
	},
	addValidationHandler : function() {
			$("form", this.el).validate({
			rules : this.model.settings.validation.rules,
			submitHandler : $.proxy(this.onSuccessfulValidation, this),
			debug : true
		});
	},
	cleanupPossiblePageDuplicationInDOM : function(){
				var $previousEl = $("#"+this.id);
		var alreadyInDom = $previousEl.length > 0;
		if(alreadyInDom){
		// "pagehide": "onPageHide"
			$previousEl.remove();
		}
	},
	makeLastPageTransparent : function(prevPageAsTransparentBackground){
		if(prevPageAsTransparentBackground.css("display") !== "none"){
			prevPageAsTransparentBackground.addClass("ui-dialog-background ");
		}
	}
}); 