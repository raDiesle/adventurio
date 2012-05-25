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


Handlebars.registerPartial("template_basic_page_simple", $("#template_basic_page_simple").html());
Handlebars.registerPartial("templates_menus_simple", $("#templates_menus_simple").html());
Handlebars.registerPartial("templates_listviews_SimpleList", $("#templates_listviews_SimpleList").html());
Handlebars.registerPartial("template_creator_CreateOrEditStory", $("#template_creator_CreateOrEditStory").html());
Handlebars.registerPartial("templates_menus_simple", $("#templates_menus_simple").html());


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