// https://github.com/wycats/handlebars.js/issues/182
Handlebars.registerHelper('$', function ( child, options ) {
    if ( typeof child !== 'object' ) {
        return '';
    }
    child['$_'] = this;
    return options.fn( child );
});

Handlebars.registerHelper('whatis', function(param) {
    console.log(param);
});


function findAndRegisterPartials($scanElement){
	var templateValues = {
		allPages : $scanElement.children('script[id^="template_page_"]').map(function() {
			console.debug("Container pages were created: "+ this.id.replace(/template_page_/, "page_"));
			return {
				'templatePartialPageID' : this.id,
				'pageID' : this.id.replace(/template_page_/, "page_"),
			};
		}).toArray()
	};
	
	$.each(templateValues.allPages, function(index, foundPage) {
		console.debug("page partial was registered: "+ foundPage.templatePartialPageID);
		Handlebars.registerPartial(foundPage.templatePartialPageID, $("#" + foundPage.templatePartialPageID).html());
	});
};

Handlebars.registerPartial("template_basic_page_simple", $("#template_basic_page_simple").html());
Handlebars.registerPartial("templates_menus_simple", $("#templates_menus_simple").html());
Handlebars.registerPartial("templates_listviews_SimpleList", $("#templates_listviews_SimpleList").html());

Handlebars.registerPartial("templates_listviews_Browse", $("#templates_listviews_Browse").html());

Handlebars.registerPartial("template_creator_CreateOrEditStory", $("#template_creator_CreateOrEditStory").html());
Handlebars.registerPartial("templates_menus_simple", $("#templates_menus_simple").html());
Handlebars.registerPartial("templates_creator_formitems_linkPageDecisions_display", $("#templates_creator_formitems_linkPageDecisions_display").html());
Handlebars.registerPartial("templates_creator_formitems_text_display", $("#templates_creator_formitems_text_display").html());
Handlebars.registerPartial("templates_creator_formitems_textfield_display", $("#templates_creator_formitems_textfield_display").html());


adventurio.templates.page.element.field.StaticText.display.register();
adventurio.templates.page.element.field.TextField.display.register();
adventurio.templates.page.element.LinkPageDecisions.display.register();
adventurio.templates.creator.page.element.editor.Buttons.register();
	
Handlebars.registerHelper('include', function(template, options){
  // Find the partial in question.
  var partial = Handlebars.partials[template];
   
  // Build the new context; if we don't include `this` we get functionality
  // similar to {% include ... with ... only %} in Django.
  var context = _.extend({}, this, options.hash);
   
  // Render, marked as safe so it isn't escaped.
  return new Handlebars.SafeString(partial(context));
});
	
Handlebars.registerHelper('I18n',
  function(str){
    return (I18n != undefined ? I18n.t(str) : str);
  }
);

Handlebars.registerHelper("ifIsTypeOf", function(actualFormItem, formItemTypeToCheck, fn, elseFn) {
	if(actualFormItem.type === formItemTypeToCheck){
		return fn(actualFormItem);
	}
});