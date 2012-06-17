


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


adventurio.utilies.handlebars.findAndRegisterPartials = function($scanElement){
	var templateValues = {
		allPages : $scanElement.children('script[type="text/x-handlebars-template"]').map(function() {
			// console.debug("Container pages were created: "+ this.id.replace(/template_page_/, "page_"));
			return {
				'templatePartialPageID' : this.id
				//,'pageID' : this.id.replace(/template_page_/, "page_"),
			};
		}).toArray()
	};
	
	$.each(templateValues.allPages, function(index, foundPage) {
		// console.debug("page partial was registered: "+ foundPage.templatePartialPageID);
		Handlebars.registerPartial(foundPage.templatePartialPageID, $("#" + foundPage.templatePartialPageID).html());
	});
};

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

Handlebars.registerHelper("ifFieldIsTypeOf", function(actualFormItem, formItemTypeToCheck, fn, elseFn) {
	if(actualFormItem.type === formItemTypeToCheck){
		return fn(actualFormItem);
	}
});

Handlebars.registerHelper("getEditOptionsURLForCurrentField", function() {
		return "#creator/stories/"+this._id+"/"+this.horizontal+"/"+this.vertical+"/"+this.$_.pos;
	}
);



// check for handlebar helpers
// https://github.com/kanso/handlebars-helpers/blob/master/build/helpers.js

adventurio.utilies.handlebars.findAndRegisterPartials($("body"));