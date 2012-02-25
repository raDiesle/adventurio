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
				"li" : [
					
				{
					"span": {
						"#text" :"#mytext",
						"@id" : "textid"	
					},
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
							"@class" : "edit_area",
							"@style" : "height: auto;",
							"#text" : "mytext  testxX" // \u000A\u000D <br />  \n  &#13;&#10;														
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

	$.editable.addInputType('markitup', {
    element : $.editable.types.textarea.element,
    plugin  : function(settings, original) {
        $('textarea', this).markItUp(settings.markitup);
    }
	});



	$('#textid').editable(function(value, settings){
		return value;
	}, {
		type : 'markitup',
		markitup : adventurio.application.jeditable.MarkItUpSettings
	});
	
	$('.edit_area').editable(function(value, settings){
		return value.replace(/\n/g, "<br>");
	},{
		type : 'textarea',
		cancel : 'cancel',
		submit : 'OK',
		tooltip : 'click here',
		style : 'height: auto',
		width : 'none',
		height : 'none',
		rows : 'none',
		cols : 'none',
		cssclass : 'ui-input-text ui-body-c ui-corner-all ui-shadow-inset',
		
	});
	
	
	// $('.edit_area').trigger('create');
	// $('input').textinput();	
	
	
	
	},
	events: {
		// "click span" : "moveToEditMode",
		"click .edit_area" : "triggerCreate",
		// "click .edit_area" : "triggerCreate"
	},
	triggerCreate : function(event){
		$('.edit_area').trigger('create');
		$('input').textinput();	
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