adventurio.views.creator.CreateStory = adventurio.views.superClasses.Basic.extend({
	el : $('#page_creator_stories_new'),
	model: adventurio.models.SingleStorySingleton,
	initialize : function() {
		$().ready($.proxy(this.render, this));
	},
	render : function(event) {
		this._super("render", [adventurio.templates.creator.Story.compile({}), "Story header"]);
		$("#createstory_form",this.el).validate({rules : this.model.attributes.rules, messages : this.model.attributes.messages, 
			submitHandler: function( form ) {
        		alert( "Call Login Action" );
		}});
	},
	events : {
		"click a[data-theme='b']" : "validateForm",
	},
	validateForm : function(event){
      event.preventDefault();
      $("#createstory_form",this.el).submit();
    },
	createStory : function(event) {
		
		
		
		var storyToBeCreated = $("form", this.el).serializeJSON();
		storyToBeCreated.user = adventurio.models.User;
		
		/* template if new story is created - move to db*/ 
		
		if(!this.model.set(storyToBeCreated)){
			return;
		}
		
		this.model.save(this.model, {
			success : function(model, response){
				adventurio.routers.MainRouter.singleton.navigate("creator/stories/"+this.model.get("id")+"/1/1",{trigger : true});		
			}
		});
	}
});
