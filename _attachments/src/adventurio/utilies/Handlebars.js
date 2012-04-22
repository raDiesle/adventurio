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

Handlebars.registerPartial("templates_formitems_text", $("#templates_formitems_text").html());
	Handlebars.registerPartial("templates_formitems_textfield", $("#templates_formitems_textfield").html());
	
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