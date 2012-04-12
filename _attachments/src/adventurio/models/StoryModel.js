adventurio.models.StoryModel = Backbone.Model.extend({
	attributes : {
		vertical :  {},
		horizontal :  {}
	},
	initialize : function(){
	  // if(!this.get("name")){
        // this.set({"name": "Peter Van"});
      // }
      // if(!this.get("creator")){
        // this.set({"creator": "whoever"});
      // }
	},
	urlRoot: "/adventurio" // "/adventurio"
});
