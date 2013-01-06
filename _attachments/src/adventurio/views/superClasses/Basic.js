adventurio.views.superClasses.Basic = Backbone.View.extend({
    onSubmitFormPressed : undefined,
    initialize : function() {
		 _.bindAll(); // this, 'render'
		 this.render();
	},
    events : {
        "click #backButton" : "goBackInHistory",
        "click a[type='submit']" : "onSubmitPressed",
        "click a[type='cancel']" : "onCancelPressed"
    },
    onSubmitPressed : function(pressEvent){
        assert(this.onSubmitFormPressed != undefined, 'this.onSubmitFormPressed is abstract');
        pressEvent.preventDefault();
        this.onSubmitFormPressed(this.getFormData());
    },
    onCancelPressed : function(pressEvent){
        pressEvent.preventDefault();
        return this.goBackInHistory(pressEvent);
    },
    goBackInHistory : function(clickEvent){
        console.info("back pressed");
        history.go(-1);
        return false;
    },
    CONSTANT : {
        optionalUrlParameterPrefix : "/"
    },
	role : "page",
	attributes : function(){
		return {
			"data-role" : this.role	
		}
	},
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
		this.cleanupPossiblePageDuplicationInDOM();

		$(this.el).html(this.getBasicPageTemplateResult());

		this.addPageToDOMAndRenderJQM();
		
		$.mobile.changePage("#" + this.id, {
			reverse : false,
			changeHash : false,
			role : this.role
		});
	},
	addPageToDOMAndRenderJQM : function(){
		$("body").append($(this.el));
		$("#" + this.id).page();
	},
	// Instead you could use event "pagehide": "onPageHide"
	cleanupPossiblePageDuplicationInDOM : function(){
		var $previousEl = $("#"+this.id);
		var alreadyInDom = $previousEl.length >= 0;
		if(alreadyInDom){
			$previousEl.remove();
		}
	},
		// Hack: if used anchor, # will be removed on first click on link, but not on second
    // currently unused, seems to be fixed with 1.1.1 rc1
	getHTMLwithAddingHrefPagePrefix : function(htmlContent){
		// return htmlContent;
		return htmlContent.replace(/href=\"#/g, "href=\"##");
	},
    getFormData : function(){
        return $("form", this.el).first().serializeJSON();
    }
}); 