adventurio.views.superClasses.Basic = Backbone.View.extend({
	// onSuccessfulValidation : undefined,
	initialize : function() {
		 _.bindAll(this, 'render');
		 this.render();
	},
	role : "page",
	getHeaderTitle : function(){
		return this.getSpecificTemplateValues().headerTitle; 
	},
	getTemplateID : function(){
		return "template_basic_page_simple";	
	},
	getTemplateResult : function(templateDefinitionID, templateValues){
		return Handlebars.compile($("#"+templateDefinitionID).html())(templateValues);
	},
	getBasicPageTemplateResult : function(){
		var templateValues = {templatePartialPageID : "template_"+this.id, headerTitle : this.getHeaderTitle()};
		var specific = this.getSpecificTemplateValues();
		
		$.extend(templateValues, this.getSpecificTemplateValues());
		return this.getTemplateResult(this.getTemplateID(), templateValues);
	},
	getRequestedPageTemplateResult : function(){
		this.getBasicPageTemplateResult();
	},
	render : function() {
		var htmlContent = this.getBasicPageTemplateResult();
		
		this.cleanupPossiblePageDuplicationInDOM();
		
		$(this.el).html(this.getHTMLwithAddingHrefPagePrefix(htmlContent));

		$(this.el).attr("data-role", this.role);
		$("body").append($(this.el));
		
		$("#" + this.id).page();
		
		$.mobile.changePage("#" + this.id, {
			reverse : false,
			changeHash : false,
			role : this.role
			// ,allowSamePageTransition: true
			// ,reloadPage : false
		});
	},
	cleanupPossiblePageDuplicationInDOM : function(){
				var $previousEl = $("#"+this.id);
		var alreadyInDom = $previousEl.length >= 0;
		if(alreadyInDom){
		// "pagehide": "onPageHide"
			$previousEl.remove();
		}
	},
	// Hack: if used anchor, # will be removed on first click on link, but not on second 
	getHTMLwithAddingHrefPagePrefix : function(htmlContent){
		return htmlContent;
		// return htmlContent.replace(/href=\"#/g, "href=\"index.html#");
	},
	makeLastPageTransparent : function(prevPageAsTransparentBackground){
		if(prevPageAsTransparentBackground.css("display") !== "none"){
			prevPageAsTransparentBackground.addClass("ui-dialog-background ");
		}
	}
}); 