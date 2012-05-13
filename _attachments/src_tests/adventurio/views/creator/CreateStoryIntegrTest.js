describe("Create new Story Model", function() {
describeUi("MAIN program", "/index.html", function() {
	
	it('check create story', function() {
		runs(function(){
			adventurio.models.User.login("simpleUser", "trinity");
			
			
			adventurio.routers.MainRouter.singleton.navigate("creator/stories/new", {trigger : true});
			var view = new adventurio.views.creator.CreateStory();
			var $form = $("form", view.el);
			$("input[name='name']",$form).val("PeterPan");
			$("textarea[name='description']",$form).val("Das ist eine story");
			$("input[name='tags']",$form).val("fun");
			$("input[name='language']",$form).val("de");
			
			// simulate($("input[type='submit']",$form), 'click');
			view.model.on('change', function(story, response){
				console.log("1"+view.model.id);
			}, this);
			
			$("a[type='submit']",$form).click();
			console.log("2"+view.model.id);
			
		});
	});
});
});