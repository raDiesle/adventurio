var createPage_template = null;

adventurio.views.CreatePage = Backbone.View.extend({
	
	el: $('#createpage'),
	initialize: function(){
		console.log(this.model.toJSON()._id);
		// hack, otherwise changePage throws exception
		$().ready($.proxy(this.render, this));
	},
	render : function(){
		var element = {
			"ul":{
				"@data-role" : "listview",
				"@data-inset" : true,
				"li" : [{
					"span": "#mytext",
				},
				{
					"input":{
					"@type" : "text" ,
					"@placeholder" : "Enter character name"
					}
				},
				{
					"div":{
						"@data-role" : "fieldcontain",
						"div" : {
							"@class" : "edit_area",
							"#text" : "mytext <br />  \n  &#13;&#10; \u000A\u000D test"														
						}
					}
				},
				{	
					"textarea" : {
						"#text" : "thats it",
						"@class" : "edit_area"
					}
				} 
				]
			}
		};
	this.renderTemplate(adventurio.utilies.Json.json2xml(element), "Story header");
	$('.edit_area').editable(function(value, settings){
		console.log(value + settings);
		return value;
	},{
		type : 'textarea',
		cancel : 'cancel',
		submit : 'OK',
		tooltip : 'click here',
		// style : 'edit_area ui-input-text ui-body-c ui-corner-all ui-shadow-inset'
		cssclass : 'ui-input-text ui-body-c ui-corner-all ui-shadow-inset'
		
	});
	
	
	},
	events: {
		"click span" : "moveToEditMode",
		"click .edit_area" : "triggerCreate",
		// "click .edit_area" : "triggerCreate"
	},
	triggerCreate : function(event){
		// $('.edit_area').trigger('create');
		console.log('create trigger called');
	},
	moveToEditMode : function(event){
		console.log("event mode");
		$('span').html('<textarea class="ui-input-text ui-body-c ui-corner-all ui-shadow-inset">whatever</textarea>');
	},
	renderTemplate: function(htmlContent, headerTitle){
		$('[data-role="content"]', this.el).html(htmlContent);
//		.trigger("create");
//		$("ul", this.el).listview('refresh');
		$("ul", this.el).trigger("create");
		$('h1', this.el).text(headerTitle);
		$.mobile.changePage("#"+this.el.id, {
			transition : 'slideup',
			reverse : false,
			changeHash : false
		});
	}
});