var createPage_template = null;

adventurio.views.CreatePage = Backbone.View.extend({
	
	el: $('#createpage'),
	attributes : {
		editModeStatus : {
			ENTERS_WRITE_MODE : true,
			// ENTERS_READ_MODE : false,
			READ_MODE : true,
			// LEAVES_READ_MODE : false,
			LEAVES_WRITE_MODE : false
		}
	},
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

	// $('.edit_area').editable(function(value, settings){
		// return value.replace(/\n/g, "<br>");
	// },{
		// type : 'textarea',
		// cancel : 'cancel',
		// submit : 'OK',
		// tooltip : 'click here',
		// style : 'height: auto; width: auto;',
		// width : 'auto',
		// height : 'auto',
		// rows : 'none',
		// cols : 'none',
		// cssclass : 'ui-input-text ui-body-c ui-corner-all ui-shadow-inset',
	// });
	
	
	// $('.edit_area').trigger('create');
	// $('input').textinput();	
	},
	events: {
		"click .edit_area" : "triggerCreate",
		"click .saveButton" : "saveEditedValue"
	},
	saveEditedValue : function(clickEvent){
		clickEvent.preventDefault();
		this.attributes.editModeStatus.LEAVES_WRITE_MODE = true;
		this.attributes.editModeStatus.READ_MODE = true;
	},
	triggerCreate : function(event){
		event.stopPropagation();
		var containerEditElement = $(event.currentTarget);
		
		if(this.attributes.editModeStatus.READ_MODE && !this.attributes.editModeStatus.LEAVES_WRITE_MODE){
			var currentContent = containerEditElement.html().replace(/<br>/g, "\n");
			containerEditElement.html("");
			containerEditElement.prepend("<a href='#' data-role='button' class='saveButton' >save</a>");
			containerEditElement.prepend("<textarea class='ui-input-text ui-body-c ui-corner-all ui-shadow-inset'>"+
			currentContent+"</textarea>");
			// hack to support autoscroll
			$('.edit_area').trigger('create');
			$('input').textinput();	
			this.attributes.editModeStatus.READ_MODE = false;
		}
		else if(this.attributes.editModeStatus.LEAVES_WRITE_MODE){
			// go to read mode
			containerEditElement.html($('textarea', containerEditElement).val().replace(/\n/g, "<br>"));
			this.attributes.editModeStatus.LEAVES_WRITE_MODE = false;
		}
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