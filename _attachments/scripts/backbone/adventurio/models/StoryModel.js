adventurio.models.StoryModel = Backbone.Model.extend({
	initialize : function(){
	  if(!this.get("name")){
        this.set({"name": "Peter Van"});
      }
      if(!this.get("creator")){
        this.set({"creator": "whoever"});
      }
	}
});
