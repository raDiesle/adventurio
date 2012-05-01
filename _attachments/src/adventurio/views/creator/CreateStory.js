adventurio.views.creator.CreateStory = new (adventurio.views.superClasses.Basic.extend({
	// adventurio.views.creator.CreateStory = Backbone.View.extend({
	el : $('#page_creator_stories_new'),
	model: new adventurio.models.StoryModel(),
	initialize : function() {
		Backbone.Validation.bind(this);
		this.model.bind('validated', function(isValid, model, attrs) {
  			console.log("triggered validation");
		});
	},
	render : function(event) {
		this._super("render", [adventurio.templates.creator.Story.compile({}), "Story header"]);
		// this.createStory({});
	},
	events : {
		"click a[data-theme='b']" : "createStory",
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
				adventurio.routers.MainRouter.singleton.navigate("creator/stories/"+model.get("id")+"/1/1",{trigger : true});		
			}
		});
	}
}));
