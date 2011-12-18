adventurio.models.StoryModel = Backbone.Model.extend({
	initialize : function(){
	  if(!this.get("name")){
        this.set({"name": "Anonymus"});
      }
      if(!this.get("text")){
        this.set({"text": "Nothing"});
      }
      if(!this.get("date")){
        this.set({"date": new Date().getTime()});
      }
	}
});
